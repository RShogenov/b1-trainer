# B1 Trainer — Setup Instructions

## Supabase Setup (required for multi-user auth)

1. Go to https://supabase.com and create a free account
2. Create a new project
3. Go to SQL Editor and run the contents of `supabase-schema.sql`
4. Go to Settings → API and copy:
   - Project URL (looks like: https://xxxx.supabase.co)
   - anon/public key
5. In `b1-trainer.html`, find these lines near the top of the `<script>`:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```
   Replace with your actual values.

6. In Supabase Dashboard → Authentication → URL Configuration:
   - Add your Vercel domain to "Redirect URLs": `https://your-app.vercel.app`

## Vercel Deployment

1. Push to GitHub (create repo if needed)
2. Go to vercel.com → New Project → Import from GitHub
3. Deploy (no build settings needed — static file)
4. Your app is live at: https://your-app.vercel.app
