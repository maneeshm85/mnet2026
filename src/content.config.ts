import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    unlisted: z.boolean().optional(),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    display_date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    footer: z.string().optional(),
    banner: z.string().optional(),
    description: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
  }),
});

const reading = defineCollection({
  loader: glob({ pattern: 'reading.md', base: './src/content' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content' }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { posts, photos, work, reading, about };