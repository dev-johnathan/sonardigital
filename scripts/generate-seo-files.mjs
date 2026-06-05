import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles, categories, pages, siteMeta } from '../src/data/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
const publisherId = (process.env.VITE_ADSENSE_PUBLISHER_ID || '').trim();
const now = new Date();
const newsCutoff = now.getTime() - 2 * 24 * 60 * 60 * 1000;

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const absoluteUrl = (pathname = '/') => new URL(pathname.startsWith('/') ? pathname : `/${pathname}`, `${siteUrl}/`).toString();

const newestArticleDate = (items) =>
  items.reduce((latest, item) => {
    const value = new Date(item.updatedAt || item.publishedAt).getTime();
    return value > latest ? value : latest;
  }, 0);

const sitemapEntries = [
  { url: '/', lastmod: new Date(newestArticleDate(articles) || now).toISOString() },
  ...categories.map((category) => ({
    url: `/categoria/${category.slug}`,
    lastmod: new Date(newestArticleDate(articles.filter((article) => article.categorySlug === category.slug)) || now).toISOString(),
  })),
  ...pages.map((page) => ({
    url: `/${page.slug}`,
    lastmod: now.toISOString(),
  })),
  ...articles.map((article) => ({
    url: `/noticia/${article.slug}`,
    lastmod: (article.updatedAt || article.publishedAt),
  })),
];

const newsEntries = articles
  .filter((article) => new Date(article.publishedAt).getTime() >= newsCutoff)
  .sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime());

function buildSitemap() {
  const entries = sitemapEntries
    .map(
      (entry) => `  <url>\n    <loc>${escapeXml(absoluteUrl(entry.url))}</loc>\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function buildNewsSitemap() {
  const entries = newsEntries
    .map(
      (article) => `  <url>\n    <loc>${escapeXml(absoluteUrl(`/noticia/${article.slug}`))}</loc>\n    <news:news>\n      <news:publication>\n        <news:name>${escapeXml(siteMeta.name)}</news:name>\n        <news:language>${escapeXml(siteMeta.newsLanguage)}</news:language>\n      </news:publication>\n      <news:publication_date>${escapeXml(article.publishedAt)}</news:publication_date>\n      <news:title>${escapeXml(article.title)}</news:title>\n    </news:news>\n  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n${entries}\n</urlset>\n`;
}

function buildRss() {
  const items = [...articles]
    .sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime())
    .slice(0, 20)
    .map(
      (article) => `    <item>\n      <title>${escapeXml(article.title)}</title>\n      <link>${escapeXml(absoluteUrl(`/noticia/${article.slug}`))}</link>\n      <guid isPermaLink="true">${escapeXml(absoluteUrl(`/noticia/${article.slug}`))}</guid>\n      <description>${escapeXml(article.summary)}</description>\n      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>\n      <category>${escapeXml(article.categoryName)}</category>\n    </item>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${escapeXml(siteMeta.name)}</title>\n    <link>${escapeXml(siteUrl)}</link>\n    <description>${escapeXml(siteMeta.description)}</description>\n    <language>${escapeXml(siteMeta.locale)}</language>\n    <lastBuildDate>${now.toUTCString()}</lastBuildDate>\n    <atom:link href="${escapeXml(absoluteUrl('/rss.xml'))}" rel="self" type="application/rss+xml" />\n${items}\n  </channel>\n</rss>\n`;
}

function buildRobots() {
  return `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl('/sitemap.xml')}\nSitemap: ${absoluteUrl('/news-sitemap.xml')}\n`;
}

function buildAdsTxt() {
  if (!publisherId) {
    return `# Configure VITE_ADSENSE_PUBLISHER_ID before production.\n# Example:\n# google.com, pub-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0\n`;
  }

  return `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`;
}

async function main() {
  await fs.mkdir(publicDir, { recursive: true });

  await Promise.all([
    fs.writeFile(path.join(publicDir, 'sitemap.xml'), buildSitemap(), 'utf8'),
    fs.writeFile(path.join(publicDir, 'news-sitemap.xml'), buildNewsSitemap(), 'utf8'),
    fs.writeFile(path.join(publicDir, 'rss.xml'), buildRss(), 'utf8'),
    fs.writeFile(path.join(publicDir, 'robots.txt'), buildRobots(), 'utf8'),
    fs.writeFile(path.join(publicDir, 'ads.txt'), buildAdsTxt(), 'utf8'),
  ]);

  if (!process.env.VITE_SITE_URL && !process.env.SITE_URL) {
    console.warn('VITE_SITE_URL not set. Generated sitemap and robots.txt with https://example.com.');
  }

  console.log('SEO files generated in public/.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
