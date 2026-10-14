// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://edik-choi.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Cormorant Garamond',
			cssVariable: '--font-body',
			weights: [400, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'AppleMyungjo', 'Noto Serif KR', 'serif'],
		},
	],
});
