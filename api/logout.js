const { ecGet, ecSet } = require('./_db');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '').trim();
  if (!token) return res.status(400).json({ error: 'No token provided' });

  try {
    const sessions = (await ecGet('sessions')) || {};
    delete sessions[token];
    await ecSet('sessions', sessions);
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Server error: ' + e.message });
  }
};
