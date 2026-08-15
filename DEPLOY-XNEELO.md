# Deploying to xneelo (static upload)

1. Build the static site:

   ```bash
   npm run build:static
   ```

2. Upload **everything inside `dist/client/`** (`index.html`, `assets/`, `favicon.ico`,
   `robots.txt`, `.htaccess`) into your xneelo web root — usually `public_html/`
   (or `httpdocs/`). Upload the contents, not the folder itself.

3. Visit your domain. The page is fully pre-rendered HTML, so no Node server is needed.

Notes
- `.htaccess` (from `public/.htaccess`) routes unknown paths back to `index.html`.
- Re-run step 1 and re-upload after any content change.
- The normal `npm run build` (used by Lovable Publish) is unchanged.
