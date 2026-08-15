import { defineConfig } from 'astro/config';

// Production domain — used to generate absolute canonical/OG URLs and (later) the sitemap.
export default defineConfig({
  site: 'https://florida-life-insurance.com',
  trailingSlash: 'always',
  compressHTML: true,
});
