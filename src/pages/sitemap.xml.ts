import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

export const prerender = true;

// Every static route currently built. Add new pages here as they're built
// in later phases (or swap this for a fully automatic route scan if the
// site grows large enough to make that worthwhile).
const staticRoutes = [
  '/',
  '/get-a-quote/',
  '/life-insurance/',
  '/term-life-insurance/',
  '/whole-life-insurance/',
  '/universal-life-insurance/',
  '/final-expense-insurance/',
  '/burial-insurance/',
  '/senior-life-insurance/',
  '/no-medical-exam-life-insurance/',
  '/guaranteed-issue-life-insurance/',
  '/about/',
  '/contact/',
  '/blog/',
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const urls: { path: string; lastmod?: string }[] = [
    ...staticRoutes.map((path) => ({ path })),
    ...posts.map((post) => ({
      path: `/blog/${post.id}/`,
      lastmod: (post.data.updatedDate ?? post.data.publishDate)
        .toISOString()
        .split('T')[0],
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${new URL(u.path, SITE.domain).toString()}</loc>${
      u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
