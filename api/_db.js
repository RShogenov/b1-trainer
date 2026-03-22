// Shared Edge Config helpers for all API routes
const EC_ID = process.env.EDGE_CONFIG_ID;
const VERCEL_TOKEN = process.env.VERCEL_API_TOKEN;
const TEAM_ID = process.env.VERCEL_TEAM_ID;

async function ecGet(key) {
  const res = await fetch(
    `https://edge-config.vercel.com/${EC_ID}/item/${key}`,
    { headers: { Authorization: `Bearer ${process.env.EDGE_CONFIG_READ_TOKEN}` } }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`EC read failed: ${res.status}`);
  return res.json();
}

async function ecSet(key, value) {
  const res = await fetch(
    `https://api.vercel.com/v1/edge-config/${EC_ID}/items?teamId=${TEAM_ID}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: [{ operation: 'upsert', key, value }] }),
    }
  );
  if (!res.ok) throw new Error(`EC write failed: ${res.status}`);
  return res.json();
}

module.exports = { ecGet, ecSet };
