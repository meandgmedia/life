import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Florida Life Insurance Team'),
    tags: z.array(z.string()).default([]),
    // Set true to keep a post out of the index/build without deleting the file.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
