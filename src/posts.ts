import { type CollectionEntry, getCollection } from 'astro:content';
import type { Lang } from './i18n';

export type Post = CollectionEntry<'blog'> | CollectionEntry<'blogKo'>;

export const newestFirst = async (lang: Lang = 'en'): Promise<Post[]> =>
	(await getCollection(lang === 'ko' ? 'blogKo' : 'blog')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
// Stories on the home map; reading all of them takes the reader to space
export const MAP_SIZE = 10;

// Links listed under "## Sources" (the Verified bar)
export const sourceCount = (body = '') => (body.split(/^## (?:Sources|출처)$/m)[1]?.match(/^- \[/gm) ?? []).length;

// "Well-sourced" badge: cross-checked by 3+ sources and covered by 6+ outlets.
// Impact is left out on purpose: how big a story is says nothing about how reliable it is.
export const isTrusted = (post: Post) =>
	sourceCount(post.body) >= 3 && (post.data.hype?.attention ?? 0) >= 6;

// First image in the post body: list thumbnail and link-preview image
export const firstImage = (body = '') => body.match(/!\[[^\]]*\]\(([^)\s]+)\)/)?.[1];

// getStaticPaths for every page: English at the root ([...lang] left empty), Korean under /ko/
export const LANGS = [{ lang: 'en' as Lang, param: undefined }, { lang: 'ko' as Lang, param: 'ko' }];
