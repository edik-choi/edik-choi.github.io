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
			name: 'Source Serif 4',
			cssVariable: '--font-body',
			weights: [400, 600],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'AppleMyungjo', 'Noto Serif KR', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'DM Sans',
			cssVariable: '--font-heading',
			weights: [500, 700],
			styles: ['normal'],
			fallbacks: ['Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
		},
	],
});
