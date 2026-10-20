import { SITE_DESCRIPTION } from './consts';

// English lives at the root, Korean under /ko/. Posts share the same slug in both languages.
export type Lang = 'en' | 'ko';

export const langOf = (url: URL): Lang => (/^\/ko(\/|$)/.test(url.pathname) ? 'ko' : 'en');

// '/blog/x/' → '/ko/blog/x/' for Korean
export const localize = (lang: Lang, path: string) => (lang === 'ko' ? `/ko${path}` : path);

// The same page in the other language
export const twinPath = (pathname: string) => (pathname.startsWith('/ko/') || pathname === '/ko' ? pathname.slice(3) || '/' : `/ko${pathname}`);

export const dateLocale = { en: 'en-US', ko: 'ko-KR' } as const;

const ui = {
	en: {
		description: SITE_DESCRIPTION,
		home: 'Home',
		allPosts: 'All posts',
		about: 'About',
		switchLang: 'KO',
		today: 'Today in the world',
		latest: 'Latest posts',
		seeAll: 'See all posts →',
		all: 'All',
		categories: 'Categories',
		empty: 'No posts in this category yet.',
		newer: '← Newer',
		older: 'Older →',
		lastUpdated: 'Last updated on',
		share: 'Share this story',
		copied: 'Link copied ✓',
		next: 'Next story',
		previous: 'Previous story',
		infographic: 'Infographic',
		footer: 'Written by AI, with sources cited.',
		trusted: 'Well-sourced',
		trustedTitle: 'Cross-checked against 3+ sources and covered by 6+ news outlets',
		indicators: 'Story indicators',
		attention: 'Attention',
		attentionTitle: 'News outlets found covering this story (capped at 10)',
		impact: 'Impact',
		impactTitle: 'Scored on people, countries, economy, safety and duration',
		verified: 'Verified',
		verifiedTitle: 'Independent sources this post was cross-checked against',
		sources: (n: number) => `${n} source${n > 1 ? 's' : ''}`,
		mapLabel: 'Map of where recent stories happened',
		stories: (n: number) => `${n} stories`,
		showInList: 'show them in the list',
		backToMap: '↑ Back to map',
		returnNow: 'I’d still like to return to Earth now.',
		darkMode: 'Dark mode',
		category: { politics: 'politics', economy: 'economy', conflict: 'conflict', climate: 'climate', technology: 'technology', society: 'society' } as Record<string, string>,
	},
	ko: {
		description: '세계가 주목해야 할 이슈를 하루 두 번 포스팅합니다.',
		home: '홈',
		allPosts: '전체 글',
		about: '소개',
		switchLang: 'EN',
		today: '오늘의 세계',
		latest: '최신 글',
		seeAll: '전체 글 보기 →',
		all: '전체',
		categories: '카테고리',
		empty: '이 카테고리에는 아직 글이 없습니다.',
		newer: '← 최신',
		older: '이전 →',
		lastUpdated: '최종 수정',
		share: '이 기사 공유하기',
		copied: '링크 복사됨 ✓',
		next: '다음 기사',
		previous: '이전 기사',
		infographic: '인포그래픽',
		footer: 'AI가 작성하고 출처를 밝힙니다.',
		trusted: '신뢰도 높음',
		trustedTitle: '3개 이상의 출처로 교차 확인했고 6곳 이상의 언론이 보도한 기사',
		indicators: '기사 지표',
		attention: '관심도',
		attentionTitle: '이 사건을 보도한 언론사 수 (최대 10)',
		impact: '영향력',
		impactTitle: '영향받는 사람·국가, 경제, 안전, 지속 기간으로 매긴 점수',
		verified: '검증',
		verifiedTitle: '이 기사를 교차 확인한 독립 출처 수',
		sources: (n: number) => `출처 ${n}곳`,
		mapLabel: '최근 기사가 일어난 곳을 표시한 지도',
		stories: (n: number) => `기사 ${n}개`,
		showInList: '목록에서 보기',
		backToMap: '↑ 지도로 돌아가기',
		returnNow: '그래도 지금 지구로 돌아갈래요.',
		darkMode: '다크 모드',
		category: { politics: '정치', economy: '경제', conflict: '분쟁', climate: '기후', technology: '기술', society: '사회' } as Record<string, string>,
	},
};

export const t = (lang: Lang) => ui[lang];
