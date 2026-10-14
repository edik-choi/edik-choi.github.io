# The Hype (Astro blog)

Deployed to GitHub Pages (https://edik-choi.github.io). Pushing to `main` triggers the GitHub Actions build and deploy.

## Auto-posting rules

1. Check titles and dates of existing posts in `src/content/blog/` and avoid topics covered in the last 7 days. A meaningful new development in the same story is fine.
2. Use web search to find world issues from the last 24–48 hours and pick one that matters to a global audience. Rotate category (politics, economy, conflict, climate, technology, society) and region so recent posts aren't lopsided.
3. Cross-check facts against at least 2 reputable sources (Reuters, AP, BBC, Al Jazeera, government or international-organization releases, etc.). Leave out anything unverified, or attribute it explicitly ("according to ..."). Copy numbers, dates and names exactly as the sources give them.
4. File: `src/content/blog/YYYY-MM-DD-english-slug.md` (UTC date, lowercase, hyphens).
   `pubDate` must be the actual current time: run `date -u +%Y-%m-%dT%H:%M:00Z` and paste the output as-is. Never round or guess a time, and never use a future time.
5. Frontmatter (quotes required):
   ```
   ---
   title: 'Title (under 70 characters)'
   description: 'One or two sentences shown in search results'
   pubDate: 'YYYY-MM-DDTHH:mm:00Z'
   ---
   ```
6. Body structure (English, 800–1200 words):
   - Lead: 2–3 sentences on what happened
   - `## What happened`: the key facts
   - `## Background`: why it happened
   - `## Why it matters`: the impact on the world
   - `## What to watch`
   - `## Sources`: `- [Outlet: Article title](URL)`, listing only URLs you actually opened
7. Images: every post includes 3–4 infographics that you draw yourself as SVG files (no photos, no AI-generated images, no images copied from other sites).
   - Kinds to choose from: a chart of key numbers (bar/line), a timeline of events, a key-figure card (one big number with a short label), a map-style or relationship diagram of the actors involved. Pick the kinds that suit the story; don't repeat the same kind more than twice.
   - Use only facts and numbers that are in the post and verified by its sources. Put a small "Source: <outlet>" line at the bottom of each graphic.
   - Files: `public/images/<post-slug>/<name>.svg` (the slug is the post filename without `.md`). Embed in the body with `![Descriptive alt text](/images/<post-slug>/<name>.svg)` right after the paragraph it illustrates. Spread them through the post, not all in one place.
   - SVG format: `viewBox="0 0 1200 675"`, white background `<rect width="100%" height="100%" fill="#ffffff"/>`, dark text (#1a1a1a), at most 3 accent colors, `font-family="Helvetica, Arial, sans-serif"`, text at least 28px so it stays legible on phones. Self-contained: no external fonts, images or scripts. Make sure text never overflows or overlaps.
   - Commit the SVG files together with the post.
8. Tone: neutral and explanatory. No opinion, sensational headlines or speculation. Handle deaths and casualties with restraint.
9. When `npm run build` passes, commit and push to `main`. Commit message: `글 추가: <title>`.

## Commits

Write all commit messages in Korean (e.g. `글 추가: <title>`, `UI 스타일 수정`).

## Development

Requires Node 22 or later. Dev server: `npx astro dev --background`
