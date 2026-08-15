# Florida Life Insurance — florida-life-insurance.com

Production domain: **https://florida-life-insurance.com**
Stack: **Astro + TypeScript**, static-first, deployed via **Cloudflare Pages** from **GitHub**.

This repo is being built in phases (see `PHASE-1-NOTES.md` for what's done so far).
Do not build later phases ahead of approval — each phase is delivered as its own
zip + PR/commit so it can be reviewed before the next one starts.

---

## Requirements

- Node.js **18.17+** (Node 20 LTS recommended)
- npm 9+

## Local development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Production build

```bash
npm run build     # outputs static site to /dist
npm run preview   # serve the production build locally to sanity-check it
```

## Project structure

```text
src/
  components/   Header, Nav, MobileNav, Footer, Button, Card, SEO — reusable UI
  layouts/      BaseLayout.astro — html shell every page renders through
  pages/        File-based routes (only "/" exists in Phase 1)
  content/      Reserved for the blog (Astro content collections, Phase 5)
  styles/       global.css — design tokens, reset, layout utilities
  lib/          seo.ts — canonical/title helpers
  data/         site.ts (business info), nav.ts (header/footer navigation)

public/         Static files served as-is (favicon, future og-default.jpg, etc.)
```

## Design system (Phase 1)

- **Color:** deep navy `#0E2238` (ink/trust) + white/cloud neutrals, with a
  coral action color for the primary "Get a Quote" CTA and a gulf-teal
  secondary accent for links/highlights. All text/background color pairs
  used for real text meet WCAG AA (4.5:1) contrast — see the tokens in
  `src/styles/global.css` for exact hex values and where each is safe to use.
- **Type:** Space Grotesk (display/headings), Inter (body), IBM Plex Mono
  (eyebrows/labels/data). Loaded via Google Fonts with `preconnect` +
  `display=swap` so type never blocks first paint.
- **Signature motif:** a horizon/wave line, used in the header mark, favicon,
  and hero background — a nod to the Florida coastline rather than generic
  insurance iconography. Reuse it sparingly elsewhere (e.g. section dividers)
  rather than on every section.
- All spacing, radii, and shadows are CSS custom properties in
  `src/styles/global.css` — change a token once, it updates everywhere.

## What's built in Phase 1

- Astro + TypeScript project scaffold, configured for `https://florida-life-insurance.com`
- Global design system: color tokens, type scale, spacing scale, reset, layout utilities
- Components: `Header`, `Nav` (desktop), `MobileNav` (slide-in panel), `Footer`,
  `Button` (primary/secondary/ghost), `Card` (generic), `SectionHeading`,
  `HowItWorks`, `InsuranceTypeCard`, `TrustSection`, `FAQ`, `CTA`
- `BaseLayout.astro` — shared HTML shell (skip link, fonts, header/footer, SEO slot)
- `SEO.astro` + `src/lib/seo.ts` — reusable title/description/canonical/OG/Twitter meta
- `src/data/site.ts` — single source of truth for business info (phone, email,
  license number placeholders) so nothing is hardcoded in multiple places
- `src/data/nav.ts` — full planned site navigation (header + footer), so the
  nav doesn't need to be rebuilt as pages are added in later phases
- Favicon (SVG, brand mark)
- **Phase 2 added:** the full homepage at `/` — hero, How It Works, Life
  Insurance Types grid, Final Expense & Senior Life spotlight (with a
  cross-link to floridafinalexpense.com), Why Choose Us, FAQ, and a final
  CTA band. See `PHASE-2-NOTES.md` for details. Every other route in the nav
  still 404s until it's built in Phase 3 (`/get-a-quote/`), Phase 4 (product
  pages), Phase 5 (blog), or Phase 6 (about/contact) — expected for now.

### Not in Phase 1 (by design — see the phase plan)

- Every other route in the nav (`/get-a-quote/`, `/life-insurance/`, etc.)
  will 404 until it's built in Phase 3/4/5/6 — this is expected right now.
- `robots.txt`, `sitemap.xml`, `llms.txt`, structured data → Phase 7
- BackNine quote integration (`QuoteRater.astro`) → Phase 3
- `og-default.jpg` social share image doesn't exist yet — add a real one to
  `/public/` before Phase 7, or before sharing links publicly.

## Things that need real information before launch

Search the codebase for `TODO` / `Placeholder` — all in `src/data/site.ts`:

- Legal business/agency name
- Florida insurance license number
- Support phone number and email
- Social profile URLs (or remove them)

## Deployment: GitHub → Cloudflare Pages

1. Push this repo to GitHub (see the commands below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**,
   select this repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add the custom domain `florida-life-insurance.com` under
   **Pages project → Custom domains** once DNS is managed by Cloudflare.
5. No environment variables or backend services are required for Phase 1.

---

## Terminal commands

See `TERMINAL-COMMANDS.md` in this same delivery for the exact copy/paste
commands (unzip, install, run locally, and push this phase to GitHub).
