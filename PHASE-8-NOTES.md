# Phase 8 — Conversion Optimization: Completion Notes

This phase was a review pass with one concrete fix, rather than new pages.
Here's what was checked and what changed.

## 1. File added

```
src/components/StickyMobileCTA.astro   NEW
src/layouts/BaseLayout.astro           UPDATED — renders it; body gets
                                        bottom padding on mobile so it never
                                        covers footer content
src/styles/global.css                  UPDATED — the padding rule above
```

## 2. The gap this phase found and fixed

The header's "Get a Free Quote" button is intentionally hidden below 640px
to keep the mobile header uncluttered (that was a Phase 1 decision). But
checking it against the brief's own conversion-design instructions
("always make the quote action easy to find... consider a subtle sticky
mobile CTA") surfaced a real gap: **below 640px, the only way to reach a
quote CTA was to open the hamburger menu first.** That's an extra step
between a mobile visitor and the primary conversion action.

Fixed with a sticky bottom bar (`StickyMobileCTA.astro`) — a "Get a Free
Quote" button plus a phone icon button, fixed to the bottom of the screen,
visible only below 640px. It's automatically hidden on `/get-a-quote/`
itself, since showing "Get a Quote" while already on that page is
redundant. No JavaScript involved — it's pure CSS (`position: fixed` +
a media query), so it adds zero script weight.

## 3. CTA placement audit

Counted every link to `/get-a-quote/` on a representative sample:

| Page | Quote CTA count |
|---|---|
| Homepage | 7 (header, mobile nav, hero, sticky bar, footer, final CTA band, + 1 more contextual link) |
| A product page (Term Life) | 7 |
| Life Insurance pillar | 7 |
| Get a Quote page itself | 4 (header/mobile nav/footer/sticky-bar-equivalent — the page itself *is* the CTA) |

Matches the brief's placement checklist (hero, navigation, major sections,
end of informational content, footer) without the page feeling
CTA-saturated, since header/mobile-nav/sticky-bar are mutually exclusive
depending on viewport — a visitor never sees all of them competing for
attention at once.

## 4. Quote funnel review

Homepage → `/get-a-quote/` → (BackNine embed once added) is a direct,
one-click path from every entry point (hero, header, footer, sticky bar).
Product pages funnel the same way via `ProductLayout`'s guaranteed closing
`<CTA />`. No dead ends found — the full-site link check (re-run this
phase, see below) confirms every CTA actually resolves.

## 5. Form usability

Re-checked the contact form from Phase 6: labels are correctly paired to
inputs (verified then, still true), required fields are marked, and the
"Need a Quote?" card next to the form gives anyone who came to *ask a
question* a one-click way to *get a quote* instead — the two most likely
intents on that page are both one click away from each other.

## 6. Above-the-fold experience

Reviewed the homepage hero's spacing tokens: eyebrow + h1 + lead + CTA
buttons stack up to roughly 400–450px of content before any scrolling,
which fits comfortably within a typical mobile viewport (~650–800px
visible height) alongside the ~76px sticky header. The decorative quote-flow
mockup is intentionally hidden below 640px specifically so it doesn't push
the real CTA below the fold on small screens.

## 7. Page speed

- Zero external JavaScript files in the build — the one bit of interactive
  script (mobile nav toggle) is inlined directly into the HTML rather than
  a separate network request.
- Homepage: ~41KB combined HTML + CSS, uncompressed. Get-a-quote page:
  ~23KB. These will typically compress another 70%+ over the wire with
  standard gzip/brotli, which Cloudflare Pages applies automatically.
- Only one raster image on the entire site (`og-default.jpg`), and it's
  never loaded by a visitor's browser — it's referenced only in
  `<meta>` tags for link previews, not rendered on any page.

## 8. Verification performed

- ✅ `npm run build` — all 16 pages + sitemap build clean
- ✅ Confirmed the sticky bar renders on ordinary pages and is correctly
  absent on `/get-a-quote/`
- ✅ Full-site link check re-run: zero broken links
- ✅ Full-site heading check re-run: all 16 pages still have exactly one `<h1>`
- ✅ Measured real byte sizes (not disk-block-rounded `du` output) for
  homepage and quote page to get accurate page-weight numbers

## 9. What needs your attention

- Nothing new. Once you add your real BackNine embed and Web3Forms key,
  the quote and contact funnels are both fully live end-to-end.

## 10. What's next — Phase 9

Performance + accessibility audit: Core Web Vitals considerations,
JavaScript, images, CSS, mobile, keyboard navigation, forms — a dedicated
pass across the whole site rather than the lighter checks folded into each
phase so far.

Reply **"Continue"** for Phase 9.
