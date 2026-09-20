import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryKeys } from './config/categories';

const projects = defineCollection({
  // Files starting with "_" (e.g. _template.md) are ignored.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(categoryKeys),
      /** One-line description used on the Projects page and in meta tags. */
      summary: z.string(),
      /** One or two sentences on the problem the project solves. Shown on the card. */
      problem: z.string().optional(),
      /** Short bullets — the things the project actually does. */
      features: z.array(z.string()).default([]),
      /** What you personally designed and built. Be specific on team projects. */
      contribution: z.string().optional(),
      tech: z.array(z.string()).default([]),
      /** Lower numbers appear first. */
      order: z.number().default(100),
      github: z.url().optional(),
      demo: z.url().optional(),
      /** Optional small visual shown on the case study page. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Marks a case study as in progress — shows a visible "Draft" note. */
      draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    organization: z.string().optional(),
    /** Free-form so partial dates are possible, e.g. "2026" or "Jun 2025 – Present". */
    date: z.string().optional(),
    /** Lower numbers appear first (most recent first). */
    order: z.number().default(100),
    responsibilities: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    /** Marks an entry whose details still need to be verified by the site owner. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
