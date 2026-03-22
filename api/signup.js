const { ecGet, ecSet } = require('./_db');
const crypto = require('crypto');

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

function uuid() {
  return crypto.randomUUID();
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, password } = req.body || {};
  if (!name || !email || !password)
    return res.status(400).json({ error: 'Name, email and password are required' });
  if (password.length < 6)
    return res.status(400).json({ error: 'Password must be at least 6 characters' });

  try {
    const users = (await ecGet('users')) || {};
    const key = email.toLowerCase().trim();
    if (users[key]) return res.status(409).json({ error: 'Email already registered' });

    const id = uuid();
    const passwordHash = sha256(password + 'b1trainer_v2_' + key);
    users[key] = { id, name, email: key, passwordHash, createdAt: new Date().toISOString() };
    await ecSet('users', users);

    // Create empty progress
    const progress = (await ecGet('progress')) || {};
    progress[id] = { xp: 0, streak: 0, lastDay: null, scores: {}, examHistory: [], vocab: [], achievements: [] };
    await ecSet('progress', progress);

    // Create session
    const token = uuid();
    const sessions = (await ecGet('sessions')) || {};
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    sessions[token] = { userId: id, email: key, expiresAt };
    await ecSet('sessions', sessions);

    return res.status(200).json({ token, user: { id, name, email: key } });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error: ' + e.message });
  }
};
