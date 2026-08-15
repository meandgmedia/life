import { SITE } from '../data/site';

export type SeoProps = {
  /** Page title WITHOUT the site name suffix — the SEO component appends it. */
  title: string;
  description: string;
  /** Absolute or root-relative path, e.g. "/get-a-quote/". Used to build the canonical URL. */
  path: string;
  /** Defaults to "website"; use "article" for blog posts. */
  ogType?: 'website' | 'article';
  /** Root-relative path to a social share image. Falls back to the site default. */
  ogImage?: string;
  /** Set true only on pages that should NOT be indexed (e.g. thank-you pages). */
  noindex?: boolean;
};

export function resolveCanonical(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return new URL(clean, SITE.domain).toString();
}

export function resolveTitle(title: string): string {
  return title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
}
