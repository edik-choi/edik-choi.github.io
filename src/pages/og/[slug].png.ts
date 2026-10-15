import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { firstImage } from '../../posts';

// Link previews can't use SVG, so each post's first infographic is rendered to PNG at build time
export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts
		.map((post) => ({ params: { slug: post.id }, props: { src: firstImage(post.body) } }))
		.filter((p) => p.props.src?.endsWith('.svg'));
}

// Previews use the site's dark theme: infographic colors swapped for their dark-mode counterparts
const DARK: Record<string, string> = {
	'#f6fcbb': '#171a10', // background
	'#1a1a1a': '#eef2dc', // text
	'#2f6b0f': '#a6d46a', // primary accent
	'#a14d12': '#e0894a', // secondary accent
	'#4a4a3a': '#c9d0b4', // muted text
	'#5c6b40': '#a0ac82', // source line
	'#eef6b0': '#262c18', // box fill
	'#8a9560': '#6b7650', // thin lines
	'#d3df8a': '#4d5e1c',
	'#ffffff': '#171a10', // text on accent fills
};

export const GET: APIRoute = async ({ props }) => {
	const svg = (await readFile(`public${props.src}`, 'utf8')).replace(/#[0-9a-f]{6}\b/gi, (c) => DARK[c.toLowerCase()] ?? c);
	// 16:9 infographic letterboxed into the 1.91:1 preview size, so nothing gets cropped
	const png = await sharp(Buffer.from(svg), { density: 144 })
		.resize(1200, 630, { fit: 'contain', background: '#171a10' })
		.png()
		.toBuffer();
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
