import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';
import { t } from '../../i18n';
import { newestFirst } from '../../posts';

// Korean feed; the English one is /rss.xml
export async function GET(context) {
	return rss({
		title: SITE_TITLE,
		description: t('ko').description,
		site: new URL('/ko/', context.site),
		customData: '<language>ko</language>',
		items: (await newestFirst('ko')).map((post) => ({
			...post.data,
			link: `/ko/blog/${post.id}/`,
		})),
	});
}
