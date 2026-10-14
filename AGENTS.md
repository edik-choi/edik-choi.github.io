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
7. Tone: neutral and explanatory. No opinion, sensational headlines or speculation. Handle deaths and casualties with restraint.
8. When `npm run build` passes, commit and push to `main`. Commit message: `글 추가: <title>`.

## Commits

Write all commit messages in Korean (e.g. `글 추가: <title>`, `UI 스타일 수정`).

## Backlog

Todo and done items live in `BACKLOG.md`. Update it when you start or finish a task.

## Development

Requires Node 22 or later. Dev server: `npx astro dev --background`
