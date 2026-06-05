import { articles, categories, pages } from '../data/content';

export { articles, categories, pages };

const normalizeText = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const getDateValue = (article) => new Date(article.updatedAt || article.publishedAt).getTime();

const sortByDateDesc = (left, right) => getDateValue(right) - getDateValue(left);

const articleSearchText = (article) =>
  normalizeText(
    [
      article.title,
      article.summary,
      article.author,
      article.role,
      article.categoryName,
      article.tags.join(' '),
      article.sections
        .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.items || [])])
        .join(' '),
    ].join(' ')
  );

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getPageBySlug(slug) {
  return pages.find((page) => page.slug === slug);
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getLatestArticles(limit = articles.length) {
  return [...articles].sort(sortByDateDesc).slice(0, limit);
}

export function getFeaturedArticles(limit = 3) {
  return [...articles]
    .filter((article) => article.featured)
    .sort(sortByDateDesc)
    .slice(0, limit);
}

export function getArticlesByCategory(slug) {
  return [...articles].filter((article) => article.categorySlug === slug).sort(sortByDateDesc);
}

export function getLatestFromCategory(slug, limit = 4) {
  return getArticlesByCategory(slug).slice(0, limit);
}

export function getRelatedArticles(article, limit = 3) {
  return [...articles]
    .filter((candidate) => candidate.slug !== article.slug)
    .sort((left, right) => {
      const categoryBoost =
        Number(right.categorySlug === article.categorySlug) - Number(left.categorySlug === article.categorySlug);
      if (categoryBoost !== 0) {
        return categoryBoost;
      }

      return sortByDateDesc(left, right);
    })
    .slice(0, limit);
}

export function searchArticles(query) {
  const search = normalizeText(query.trim());
  if (!search) {
    return getLatestArticles();
  }

  return [...articles]
    .filter((article) => articleSearchText(article).includes(search))
    .sort(sortByDateDesc);
}

export function getArticleCountByCategory(slug) {
  return articles.filter((article) => article.categorySlug === slug).length;
}

export function getTotalArticleCount() {
  return articles.length;
}
