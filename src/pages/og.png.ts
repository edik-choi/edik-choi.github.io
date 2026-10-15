import type { APIRoute } from 'astro';
import sharp from 'sharp';
import land from '../assets/world-land.txt?raw';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

// Link-preview card for pages that aren't posts (home, all posts, about)
export const GET: APIRoute = async () => {
	// Tagline on two lines, split after its first comma, so it fits the card
	const cut = SITE_DESCRIPTION.indexOf(', ') + 1 || SITE_DESCRIPTION.length;
	const [line1, line2] = [SITE_DESCRIPTION.slice(0, cut), SITE_DESCRIPTION.slice(cut).trim()];
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="100%" height="100%" fill="#f6fcbb"/>
	<svg x="100" y="40" width="1000" height="500" viewBox="0 0 1000 500"><path d="${land}" fill="#eef6b0"/></svg>
	<rect x="80" y="225" width="12" height="200" fill="#2f6b0f"/>
	<g font-family="Helvetica, Arial, sans-serif">
		<text x="120" y="300" font-size="96" font-weight="700" fill="#1a1a1a">${SITE_TITLE}</text>
		<text x="120" y="365" font-size="36" fill="#4a4a3a">${line1}</text>
		<text x="120" y="412" font-size="36" fill="#4a4a3a">${line2}</text>
		<text x="120" y="560" font-size="30" font-weight="700" fill="#2f6b0f">worldwidehype.live</text>
	</g>
</svg>`;
	const png = await sharp(Buffer.from(svg)).png().toBuffer();
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
