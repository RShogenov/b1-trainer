const { ecGet } = require('./_db');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '').trim();
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const sessions = (await ecGet('sessions')) || {};
    const session = sessions[token];
    if (!session) return res.status(401).json({ error: 'Invalid or expired session' });
    if (new Date(session.expiresAt) < new Date()) return res.status(401).json({ error: 'Session expired' });

    const users = (await ecGet('users')) || {};
    const user = users[session.email];
    if (!user) return res.status(401).json({ error: 'User not found' });

    const progress = (await ecGet('progress')) || {};
    const userProgress = progress[user.id] || {};

    return res.status(200).json({
      user: { id: user.id, name: user.name, email: user.email },
      progress: userProgress,
    });
  } catch (e) {
    return res.status(500).json({ error: 'Server error: ' + e.message });
  }
};
