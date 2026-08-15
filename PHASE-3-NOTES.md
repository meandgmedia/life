# Phase 3 — BackNine Quote Integration: Completion Notes

## 1. Files added

```
src/components/QuoteRater.astro   NEW — reusable container for the real BackNine embed
src/pages/get-a-quote.astro       NEW — builds to /get-a-quote/
src/data/faq.ts                   UPDATED — added quotePageFaq
```

## 2. How the BackNine integration works

`QuoteRater.astro` is the drop-in point. Right now it shows a polished,
animated skeleton loader (not a "coming soon" message) so the page already
looks production-ready. To add your real embed:

1. Open `src/components/QuoteRater.astro`.
2. Delete the `<div class="quote-rater__skeleton">...</div>` block.
3. Paste your real BackNine embed code in its place, between the
   `<!-- BACKNINE EMBED START -->` / `<!-- BACKNINE EMBED END -->` comments.

Nothing else needs to change — the card, border, shadow, and responsive
sizing around it are already built and already match the rest of the site.
The component takes an optional `label` prop and can be reused later on
other pages (homepage, final expense, term/whole life) exactly the same way.

## 3. The `/get-a-quote/` page

- Hero: "Get Your Florida Life Insurance Quote" + the exact supporting copy
  from the brief, plus three small trust chips (Florida-Focused, Multiple
  Coverage Options, Apply Online — no fake ratings or counts).
- `<QuoteRater />` as the visual centerpiece, in a narrow, focused container.
- The required compliance disclosure directly under the embed ("subject to
  eligibility and underwriting... may be issued quickly depending on
  eligibility and carrier underwriting").
- A "What Happens Next" 3-step recap (reuses the `HowItWorks` component).
- A quote-specific FAQ (is it free, what info is needed, credit check, what
  happens after) — different content from the homepage FAQ, reuses the
  `FAQ` component.

Every "Get a Free Quote" button and link across the site (header, mobile
nav, footer, homepage CTAs) now resolves to a real page instead of a 404.

## 4. Verification performed

- ✅ `npm run build` — clean, 2 pages built (`/`, `/get-a-quote/`)
- ✅ Heading check: single `<h1>`, no skipped levels
- ✅ Confirmed the BackNine start/end comment markers are present in the
  built output, so they're easy to find when the real embed is ready
- ✅ Contrast-checked the new trust-chip colors (teal on teal-tint): 5.1:1, AA
- ✅ Skeleton loader animation respects `prefers-reduced-motion`
- ✅ Per-page CSS stayed small (~16KB homepage, ~24KB quote page)

## 5. What needs your attention

- The skeleton loader is a placeholder until you paste the real BackNine
  embed — see the instructions in `QuoteRater.astro`.
- Still open from earlier phases: real business info in `src/data/site.ts`.

## 6. What's next — Phase 4

Core product pages: Life Insurance, Term Life, Whole Life, Universal Life,
Final Expense, Burial, Senior Life, No Medical Exam, Guaranteed Issue.

Reply **"Continue"** for Phase 4.
