# Phase 7 — Technical SEO: Completion Notes

## 1. Files added

```
public/og-default.jpg         NEW — real 1200x630 branded social share image
public/robots.txt             NEW
public/llms.txt               NEW
src/pages/sitemap.xml.ts      NEW — dynamic endpoint, includes every static
                               page + every published blog post automatically
src/components/Breadcrumbs.astro   NEW — visible trail + BreadcrumbList JSON-LD
src/layouts/ProductLayout.astro    UPDATED — optional breadcrumbs prop
src/layouts/BaseLayout.astro       UPDATED — site-wide Organization + WebSite JSON-LD
src/pages/blog/index.astro         UPDATED — breadcrumb; also fixed a missing <h1> (see below)
src/pages/blog/[slug].astro        UPDATED — breadcrumb + Article JSON-LD
src/pages/*-insurance.astro (9 files)   UPDATED — added breadcrumbs prop
```

## 2. What's in place now

- **Sitemap** (`/sitemap.xml`) — generated from code, not hand-maintained.
  Static pages are listed explicitly (easy to extend as new pages are
  built); every blog post is pulled automatically from the content
  collection with a real `lastmod` date. Validated as well-formed XML —
  16 URLs, matching the 16 pages actually built.
- **robots.txt** — allows all crawling, points at the sitemap.
- **llms.txt** — describes the site, coverage types, blog, and company
  pages for LLM-based crawlers/agents, per the brief.
- **Structured data:**
  - `Organization` + `WebSite` (site-wide, every page)
  - `BreadcrumbList` (every product page + both blog pages)
  - `Article` (each blog post — headline, dates, author, publisher, image)
  - Deliberately **not** added: `AggregateRating`/review schema (nothing
    to attach it to honestly), and a generic `WebPage` type on every page
    (would have been redundant on top of Organization/WebSite/Article
    without adding real information — documenting that choice rather than
    padding out the schema for its own sake)
  - All JSON-LD validated by parsing it back with a JSON parser — every
    block on every page type is syntactically valid
- **Breadcrumbs** — visible trail (Home → Life Insurance → {Type}) on all
  9 product pages and both blog pages, each with matching `BreadcrumbList`
  structured data generated from the same data, so they can't drift apart.
- **Default OG/social image** — a real rendered JPEG (not a placeholder or
  a note-to-self), built from an SVG using the same brand colors and wave
  motif as the rest of the site, so links shared on social media or iMessage
  show a real branded card instead of a blank box.
- **Canonical URLs + Open Graph** — were already being generated per-page
  since Phase 1 via the `SEO` component; this phase's job was mainly
  verifying they're correct now that 16 pages exist, and giving them a real
  image to point to.

## 3. A bug this phase caught

Re-running the heading check across all 16 pages (part of this phase's
verification, not a one-off) found that **the blog index page had zero
`<h1>` tags** — it was using the `SectionHeading` component, which
renders an `<h2>`, as its only heading. That's a real SEO/accessibility
defect that would have shipped unnoticed if I hadn't checked. Fixed by
giving `/blog/` its own proper `<h1>`, matching the pattern every other
top-level page (home, about, contact, each product page) already uses.

## 4. Verification performed

- ✅ `npm run build` — 16 pages + `/sitemap.xml` build clean
- ✅ Sitemap parsed as XML and cross-checked: exactly 16 URLs, matching the
  16 actually-built pages, no extras or omissions
- ✅ Every JSON-LD block on every page type (`homepage`, `product page`,
  `blog post`) parsed successfully as JSON and contains the expected
  `@type`(s)
- ✅ Confirmed `robots.txt`, `llms.txt`, and `og-default.jpg` all land in
  the build output at the root, as required
- ✅ Spot-checked canonical URL and `og:image`/`og:type` tags render with
  real absolute URLs (not relative paths)
- ✅ Full-site link check re-run after adding breadcrumbs: zero broken
  internal links
- ✅ Full-site heading check re-run: all 16 pages now have exactly one
  `<h1>` (this is what caught the blog-index bug above)

## 5. What needs your attention

- Nothing new from this phase specifically. Still open from earlier
  phases: `src/data/site.ts` business info, Web3Forms access key, and the
  three legal pages (`/privacy-policy/`, `/terms-of-use/`, `/disclosures/`).

## 6. What's next — Phase 8

Conversion optimization review: CTA placement, quote funnel, mobile CTA,
form usability, above-the-fold experience, page speed.

Reply **"Continue"** for Phase 8.
