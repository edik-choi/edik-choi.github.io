# World Wide Hype (Astro blog)

Deployed to GitHub Pages (https://worldwidehype.live). Pushing to `main` triggers the GitHub Actions build and deploy.

## Auto-posting rules

1. Check titles and dates of existing posts in `src/content/blog/` and avoid topics covered in the last 7 days. A meaningful new development in the same story is fine.
2. On Sundays (UTC), write a weekly explainer instead (rule 13). On other days, use web search to find world issues from the last 24–48 hours and pick the one with the biggest global impact (judge candidates by the `impact` criteria in rule 5). Rotate category (politics, economy, conflict, climate, technology, society) and region so recent posts aren't lopsided.
3. Cross-check facts against at least 2 reputable sources (Reuters, AP, BBC, Al Jazeera, government or international-organization releases, etc.). Leave out anything unverified, or attribute it explicitly ("according to ..."). Copy numbers, dates and names exactly as the sources give them.
4. File: `src/content/blog/YYYY-MM-DD-english-slug.md` (UTC date, lowercase, hyphens).
   `pubDate` must be the actual current time: run `date -u +%Y-%m-%dT%H:%M:00Z` and paste the output as-is. Never round or guess a time, and never use a future time.
5. Frontmatter (quotes required):
   ```
   ---
   title: 'Title (under 70 characters)'
   description: 'One or two sentences shown in search results'
   pubDate: 'YYYY-MM-DDTHH:mm:00Z'
   category: 'economy'
   location: { name: 'Place', lat: 0.0, lon: 0.0 }
   hype: { attention: 0, impact: 0 }
   ---
   ```
   `hype` is shown as indicator bars at the top of the post. Score them with these rules only, never by feel:
   - `attention` (0–10): run one standard web search on the story's key terms (no domain filter) and count the distinct news outlets among the results that cover this story, including earlier coverage of it. Cap at 10. Charities, agencies and blogs don't count.
   - `impact` (0–10): the sum of five criteria, 0–2 each, using only facts in the post. People affected (0: under 1 million, 1: 1–100 million, 2: over 100 million). Countries affected (0: one, 1: 2–10, 2: more than 10 or global). Economy (0: little, 1: a sector or region, 2: global markets or prices). Human safety (0: none, 1: risk to lives or health, 2: reported deaths or a declared humanitarian emergency). Duration (0: days, 1: months, 2: years or longer).
   - The "Verified" bar is counted automatically from the Sources list; nothing to add.
   `category` is exactly one of: politics, economy, conflict, climate, technology, society (the build fails otherwise). It powers the category filter on the All posts page.
   `location` is where the story happens (city, or country if it is nationwide); it puts a dot on the home page map. Use approximate coordinates with 1–2 decimals.
6. Body structure (English, 900–1300 words):
   - Lead: 2–3 sentences on what happened
   - `## What happened`: the key facts
   - `## Background`: why it happened
   - `## Why it matters`: the impact on the world
   - `## What to watch`
   - `## Editor's Insight`: original analysis of what the story means for geopolitics, the economy or tech trends (3–4 paragraphs). Add what a news report alone doesn't give: compare with a past case or an earlier post on this site, connect it to other stories, and name who gains and who loses. Every claim builds on facts in the post or on analysts named in the sources; label forecasts as possibilities, not facts. Never restate the summary.
   - `## Sources`: `- [Outlet: Article title](URL)`, listing only URLs you actually opened
   - Keep the H2 names above as they are. Inside a long section, split it with `###` subheadings that name the specific point (e.g. `### How the tariff hits EU carmakers`), not generic labels.
   - SEO: work the long-tail phrases a reader would search for (e.g. "why did Japan raise interest rates", "Sudan ceasefire talks 2026") naturally into the title, description, lead and `###` subheadings. Never stuff keywords or repeat a phrase unnaturally.
7. Images: every post includes 3–4 infographics that you draw yourself as SVG files (no photos, no AI-generated images, no images copied from other sites).
   - Kinds to choose from: a chart of key numbers (bar/line), a timeline of events, a key-figure card (one big number with a short label), a map-style or relationship diagram of the actors involved. Pick the kinds that suit the story; don't repeat the same kind more than twice.
   - Use only facts and numbers that are in the post and verified by its sources. Put a small "Source: <outlet>" line at the bottom of each graphic.
   - Files: `public/images/<post-slug>/<name>.svg` (the slug is the post filename without `.md`). Embed in the body with `![Descriptive alt text](/images/<post-slug>/<name>.svg)` right after the paragraph it illustrates. Spread them through the post, not all in one place.
   - SVG format: `viewBox="0 0 1200 675"`, background matching the site `<rect width="100%" height="100%" fill="#f6fcbb"/>`. Colors: text #1a1a1a; primary accent #2f6b0f (forest green); secondary accent #a14d12 (rust) for contrast or the one thing to emphasise; muted text #4a4a3a; source line #5c6b40; box fills #eef6b0; thin lines #8a9560. No other colors. `font-family="Helvetica, Arial, sans-serif"`, text at least 28px so it stays legible on phones. Self-contained: no external fonts, images or scripts. Make sure text never overflows or overlaps.
   - Commit the SVG files together with the post.
8. Highlights: mark 5–7 key facts per post with `<mark>...</mark>` (rendered bold with a highlighter-pen effect). Each is a short phrase or one clause (a number, a decision, the core claim), never a whole sentence. Spread them across sections; never inside headings, links, image alt text or the Sources list. Keep using `**Label:**` only for list labels.
9. Internal links: if an earlier post covers the same story or a closely related one, link to it once or twice in the body with a natural anchor phrase, as `[phrase](/blog/<post-slug>/)` (no `.md`). Only link posts that exist in `src/content/blog/`; never in headings or the Sources list. Skip it when nothing related exists.
10. Tone: neutral and explanatory. No sensational headlines, partisan opinion or unsupported speculation; analysis belongs only in `## Editor's Insight`, under the rules above. Handle deaths and casualties with restraint.
11. Korean translation: every post also gets a Korean version at `src/content/blog/ko/<same filename>.md` (served at `/ko/blog/<slug>/`, linked to the English page with hreflang). Translate the finished English post faithfully; add or drop nothing.
   - Frontmatter: translate `title` (natural Korean headline, under 40 characters), `description` and `location.name`. Copy `pubDate`, `category`, `lat`/`lon` and `hype` unchanged.
   - H2 names, in this order: `## 무슨 일이 있었나`, `## 배경`, `## 왜 중요한가`, `## 주목할 점`, `## 에디터 인사이트`, `## 출처`. Translate `###` subheadings too, keeping the long-tail search phrasing in Korean (e.g. `### 일본은 왜 금리를 올렸나`).
   - Keep the same `<mark>` highlights (on the matching Korean phrase), the same images in the same places with translated alt text, and the same numbers. Internal links point to `/ko/blog/<post-slug>/`.
   - Images: make a Korean copy of every infographic at `public/images/<post-slug>/ko/<name>.svg` and embed that one. Same layout, numbers and colours; translate all text (keep outlet names in the source line, e.g. `출처: Al Jazeera`) and set `font-family="Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', Helvetica, Arial, sans-serif"`. Korean is wider per character, so keep labels short and check that no text overflows or overlaps.
   - Leave the `## 출처` list as in English (outlet names and article titles untranslated). Write names of people and places the way Korean news media usually do.
12. When `npm run build` passes, commit and push to `main` (English post, Korean post and SVGs together). Commit message: `글 추가: <title>`.
13. Weekly explainer (Sundays UTC): an evergreen post that answers one question readers search for about a concept, institution or process behind recent news (e.g. "how do central banks set interest rates", "how does a UN Security Council veto work"). Pick it from stories posted in the last 7 days and link 2–3 of those posts (rule 9). Avoid questions already answered by an earlier explainer.
   - Everything in rules 3–5 and 7–12 applies. `location` is where the institution sits or the clearest example happens; score `hype` from the example story.
   - Body (1000–1500 words) uses these H2s instead of rule 6's: `## The short answer` (2–3 sentences), `## How it works`, `## A recent example` (the news story it explains), `## Common misconceptions`, `## What to watch`, `## Editor's Insight`, `## Sources`. Korean: `## 짧은 답`, `## 어떻게 작동하나`, `## 최근 사례`, `## 흔한 오해`, `## 주목할 점`, `## 에디터 인사이트`, `## 출처`.
   - Prefer official explanations (central banks, UN, government sites, international organizations) and established reference reporting as sources.

## Commits

Write all commit messages in Korean (e.g. `글 추가: <title>`, `UI 스타일 수정`).

## Development

Requires Node 22 or later. Dev server: `npx astro dev --background`
