# Phase 2 — Homepage: Completion Notes

## 1. Files & components added/changed since Phase 1

```
src/pages/index.astro          REWRITTEN — full homepage (was a placeholder)
src/components/
  SectionHeading.astro         NEW — eyebrow + h2 + optional lead, left/center align
  HowItWorks.astro             NEW — numbered 3-step process
  InsuranceTypeCard.astro      NEW — coverage-type card for the 8-item grid
  TrustSection.astro           NEW — "why choose us" point grid
  FAQ.astro                    NEW — accessible accordion (native <details>)
  CTA.astro                    NEW — reusable final-conversion band
src/data/
  coverageTypes.ts             NEW — the 8 life insurance types shown on the homepage
  faq.ts                       NEW — homepage FAQ content
src/styles/global.css          UPDATED — added a tablet (640px) breakpoint for 4-col
                                grids, darkened --color-teal-dark for text contrast
```

Components from Phase 1 (`Header`, `Nav`, `MobileNav`, `Footer`, `Button`,
`Card`, `SEO`, `BaseLayout`) are unchanged and reused as-is.

## 2. What's on the homepage now

- **Hero** — headline, supporting copy, primary + secondary CTA, and a
  CSS-built "quote flow" mockup card (coverage amount / ZIP / DOB / "See My
  Options") instead of stock photography — visible from tablet width up,
  hidden on small phones where it would just add scroll.
- **How It Works** — Get Your Quote → Compare Your Options → Apply & Get
  Covered, with the exact compliant copy from the brief.
- **Life Insurance Types** — all 8 types from the brief (Term, Whole,
  Universal, Final Expense, Guaranteed Issue, No Medical Exam, Senior Life,
  Burial), each linking to its future dedicated page (built in Phase 4).
- **Final Expense & Senior Life spotlight** — a dedicated, larger section (not
  just two grid cards) per the brief's instruction that final expense should
  be one of the largest topical areas on this site. Includes the natural
  cross-link to `floridafinalexpense.com`.
- **Why Choose Us** — six factual trust points (Florida-focused, online
  convenience, multiple options, simple process, personalized options,
  educational resources). No invented stats, ratings, or testimonials.
- **FAQ** — six compliant, educational Q&As using a native `<details>`
  accordion (keyboard accessible with no extra JS).
- **Final CTA** — "Ready to Explore Your Life Insurance Options?" band.

## 3. Verification performed

- ✅ `npm run build` — clean, no errors, from both the working copy and after
  syncing into the delivered project
- ✅ Heading order checked programmatically: exactly one `<h1>`, every `<h2>`
  followed by its own `<h3>`s with no skipped levels
- ✅ Re-ran WCAG contrast checks after adding new text/background pairs —
  found `teal-dark` (used for eyebrows/links on white and light-cloud
  backgrounds) was borderline (4.15–4.46:1, under the 4.5:1 AA minimum for
  normal-size text) and darkened it to `#0A7373` (5.3–5.7:1) before shipping
- ✅ Responsiveness: added a 640px tablet breakpoint so the 8-card coverage
  grid goes 1 → 2 → 4 columns instead of jumping straight from 1 to 4;
  reviewed the hero, final-expense spotlight, trust grid, and FAQ at mobile/
  tablet/desktop widths in code
- ✅ Accessibility: FAQ uses native `<details>/<summary>` (keyboard + screen
  reader accessible with zero custom JS), decorative hero mockup and section
  icons are `aria-hidden`, heading hierarchy is unbroken
- ✅ Performance: homepage is static HTML with the same one small inline
  script from Phase 1 (mobile nav) — no new JavaScript added; built CSS is
  ~20KB, built HTML ~30KB uncompressed

## 4. What needs your attention

- Every coverage-type link and the "Learn more" links on this page point to
  pages that don't exist yet (`/term-life-insurance/`, `/life-insurance/`,
  etc.) — expected, they're built in Phase 4. `/get-a-quote/` is next, in
  Phase 3.
- The hero and hero mockup use illustrative numbers ($250,000 coverage, ZIP
  32901, a sample DOB) — purely decorative, not a real quote. Let me know if
  you'd rather see different placeholder values.
- Still open from Phase 1: real legal business name, FL license number,
  phone, email in `src/data/site.ts`.

## 5. What's next — Phase 3

Build `/get-a-quote/` and the `QuoteRater.astro` component: a polished,
production-ready container designed to hold your real BackNine embed code.

Reply **"Continue"** when you're ready for Phase 3.
