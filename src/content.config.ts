import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Where the story happens; drawn as a dot on the home page map
			location: z
				.object({ name: z.string(), lat: z.number(), lon: z.number() })
				.optional(),
			// Top-of-post indicators; scoring rules in AGENTS.md
			hype: z
				.object({ attention: z.number().int().min(0).max(10), impact: z.number().int().min(0).max(10) })
				.optional(),
		}),
});

export const collections = { blog };
