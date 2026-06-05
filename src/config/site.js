import { siteMeta } from '../data/content';

const fallbackUrl = typeof window !== 'undefined' ? window.location.origin : 'https://example.com';

export const siteConfig = {
  ...siteMeta,
  url: (import.meta.env.VITE_SITE_URL || fallbackUrl).replace(/\/$/, ''),
  locale: siteMeta.locale,
  newsLanguage: siteMeta.newsLanguage,
  analytics: {
    gaId: import.meta.env.VITE_GA_ID || '',
  },
  adsense: {
    clientId: import.meta.env.VITE_ADSENSE_CLIENT || '',
    slots: {
      banner: import.meta.env.VITE_ADSENSE_SLOT_BANNER || '',
      article: import.meta.env.VITE_ADSENSE_SLOT_ARTICLE || '',
      sidebar: import.meta.env.VITE_ADSENSE_SLOT_SIDEBAR || '',
    },
  },
};

export function absoluteUrl(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(normalizedPath, `${siteConfig.url}/`).toString();
}
