import type { CollectionEntry } from 'astro:content';

// Links listed under "## Sources" (the Verified bar)
export const sourceCount = (body = '') => (body.split('## Sources')[1]?.match(/^- \[/gm) ?? []).length;

// "Well-sourced" badge: cross-checked by 3+ sources and covered by 6+ outlets.
// Impact is left out on purpose: how big a story is says nothing about how reliable it is.
export const isTrusted = (post: CollectionEntry<'blog'>) =>
	sourceCount(post.body) >= 3 && (post.data.hype?.attention ?? 0) >= 6;
