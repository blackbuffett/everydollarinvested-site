# Every Dollar Invested — ConvertKit hookup (Step-by-step)

## What’s in this bundle
- `waitlist.html` — high-converting landing page at /waitlist.html
- `js/config.js` — already set to use ConvertKit (fill in FORM_ID and API_KEY)
- `contact.html.patch.html` — the corrected form HTML block if you want first names + interest mapped

## 1) Upload files to GitHub
1. Go to your repo → `EveryDollarInvested_Site/`
2. Click **Add file → Upload files**
3. Drag in:
   - `waitlist.html`
   - `js/config.js` (this will overwrite your existing config.js — OK)
4. Commit changes → Netlify redeploys.

## 2) Fill in your ConvertKit credentials
- Edit `EveryDollarInvested_Site/js/config.js` in GitHub.
- Replace:
    - `FORM_ID_HERE` with your actual ConvertKit Form ID (e.g., 1234567)
    - `API_KEY_HERE` with your ConvertKit API KEY
- Commit changes.

## 3) Optional: Map fields correctly on /contact.html
- Open `EveryDollarInvested_Site/contact.html` → click the pencil.
- Replace your existing form block with the contents of `contact.html.patch.html` (copy & paste).
- Commit changes.

## 4) Make the new landing page the main CTA (optional)
- In `index.html` and the nav of other pages, change the "Join Waitlist" link target to `/waitlist.html`.

## 5) Test
- Visit https://everydollarinvested.com/waitlist.html
- Submit a test (first name + email).
- In ConvertKit → Subscribers, confirm you received the contact.
- If double opt-in is enabled, check your inbox for the confirmation email.

## Notes
- SSL, DNS, and site structure are already correct.
- Real-time markets/news can be toggled later by adding keys in `js/config.js` (Alpha Vantage, Finnhub, Polygon, NewsAPI).
