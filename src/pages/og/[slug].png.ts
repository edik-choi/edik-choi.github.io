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

export const GET: APIRoute = async ({ props }) => {
	const svg = await readFile(`public${props.src}`);
	// 16:9 infographic letterboxed into the 1.91:1 preview size, so nothing gets cropped
	const png = await sharp(svg, { density: 144 })
		.resize(1200, 630, { fit: 'contain', background: '#f6fcbb' })
		.png()
		.toBuffer();
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
