# Deployment — GitHub → Cloudflare Pages → florida-life-insurance.com

## 1. Push the final code to GitHub

You've been pushing each phase already. This is the same repo,
`https://github.com/meandgmedia/life`, with everything from Phase 10 added.

```bash
cd ~/Downloads
unzip -o florida-life-insurance-phase-10.zip
cd florida-life-insurance
git add .
git commit -m "Phase 10: final QA + legal page placeholders"
git push
```

## 2. Connect the repo to Cloudflare Pages

1. Log in to the Cloudflare dashboard.
2. Go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the `meandgmedia/life` repository.
4. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** leave blank (the project is at the repo root)
5. No environment variables are required for this build.
6. Click **Save and Deploy**. Cloudflare will run `npm install` (or `npm ci`)
   and `npm run build` automatically — both were tested in this phase and
   complete cleanly with no errors.

## 3. Add the custom domain

1. In the Pages project, go to **Custom domains → Set up a custom domain**.
2. Enter `florida-life-insurance.com` (and `www.florida-life-insurance.com`
   if you want both).
3. If the domain's DNS is already managed by Cloudflare, this is usually a
   one-click confirmation. If it's registered elsewhere, Cloudflare will
   give you the DNS records to add at your registrar.
4. Cloudflare issues and manages the SSL certificate automatically — no
   manual certificate setup needed.

## 4. Verify the live site

Once DNS propagates, check:

- `https://florida-life-insurance.com/` loads
- `https://florida-life-insurance.com/sitemap.xml` returns valid XML
- `https://florida-life-insurance.com/robots.txt` returns the robots file
- `https://florida-life-insurance.com/llms.txt` returns the llms file

All four are static files/endpoints generated at build time — nothing
server-side to configure.

---

# Final Go-Live Checklist

Everything below is a genuinely open item — not a "nice to have." The site
builds and deploys cleanly as-is, but these are the placeholders you should
fill in before directing real traffic to it.

## Required before launch

- [ ] **Real business info** — `src/data/site.ts`: legal business name,
      Florida license number, phone, email, social links (or remove the
      social fields if you don't have profiles yet).
- [ ] **BackNine embed** — `src/components/QuoteRater.astro`: replace the
      skeleton loader with your real embed code between the
      `BACKNINE EMBED START/END` comments.
- [ ] **Contact form** — `src/pages/contact.astro`: add your real Web3Forms
      access key (or swap in a different form provider — instructions are
      in the file's top comment).
- [ ] **Legal pages** — `/privacy-policy/`, `/terms-of-use/`,
      `/disclosures/` are structural drafts only, clearly marked as such
      and set to `noindex` so they can't get indexed prematurely. Have a
      licensed attorney complete and review the actual legal content, then
      remove the `noindex={true}` prop from each page (in
      `src/pages/privacy-policy.astro`, `terms-of-use.astro`,
      `disclosures.astro`) so they get indexed once they're real.

## Recommended before launch

- [ ] Add real values for Google Analytics / Search Console / Google Ads
      conversion tracking / Meta Pixel if you're using them — no tracking
      IDs are included anywhere in this build (per the brief, nothing was
      invented), so these are additions, not replacements.
- [ ] Consider self-hosting the three Google Fonts instead of loading them
      from Google's CDN, for slightly better performance/privacy — the
      font loading is centralized in `src/layouts/BaseLayout.astro`, so
      it's a small, contained change.
- [ ] Submit the sitemap to Google Search Console once the domain is live.

## Not required, but easy to add later

- Additional blog posts (just drop a new `.md` file in `src/content/blog/`)
- Additional coverage-type or location pages (the brief's architecture
  supports this without a rebuild — see `PHASE-1-NOTES.md` through
  `PHASE-9-NOTES.md` for the full build history and reasoning behind each
  decision)
