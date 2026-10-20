// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://worldwidehype.live',
	// i18n: adds hreflang alternates between /x/ and /ko/x/ to the sitemap
	integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ko: 'ko' } } })],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-body',
			weights: [400, 700],
			styles: ['normal', 'italic'],
			// Latin glyphs use Source Serif 4; Hangul falls through to Pretendard (loaded only on /ko/ pages, BaseHead)
			fallbacks: ['Georgia', 'Pretendard Variable', 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'serif'],
		},
	],
});
