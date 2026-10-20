import { type SchemaContext, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

// Type-check frontmatter using a schema
const schema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.optional(image()),
		category: z.enum(CATEGORIES),
		// Where the story happens; drawn as a dot on the home page map
		location: z
			.object({ name: z.string(), lat: z.number(), lon: z.number() })
			.optional(),
		// Top-of-post indicators; scoring rules in AGENTS.md
		hype: z
			.object({ attention: z.number().int().min(0).max(10), impact: z.number().int().min(0).max(10) })
			.optional(),
	});

// English posts in `src/content/blog/`; Korean translations in `src/content/blog/ko/` with the same file names
const blog = defineCollection({ loader: glob({ base: './src/content/blog', pattern: '*.{md,mdx}' }), schema });
const blogKo = defineCollection({ loader: glob({ base: './src/content/blog/ko', pattern: '*.{md,mdx}' }), schema });

export const collections = { blog, blogKo };
