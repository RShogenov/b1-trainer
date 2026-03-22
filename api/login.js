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

  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password are required' });

  try {
    const users = (await ecGet('users')) || {};
    const key = email.toLowerCase().trim();
    const user = users[key];
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const hash = sha256(password + 'b1trainer_v2_' + key);
    if (hash !== user.passwordHash) return res.status(401).json({ error: 'Invalid email or password' });

    const token = uuid();
    const sessions = (await ecGet('sessions')) || {};
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    sessions[token] = { userId: user.id, email: key, expiresAt };
    await ecSet('sessions', sessions);

    return res.status(200).json({ token, user: { id: user.id, name: user.name, email: key } });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error: ' + e.message });
  }
};
