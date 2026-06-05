import { loadAdminContent } from './admin';
import {
  articles as defaultArticles,
  categories as defaultCategories,
  pages as defaultPages,
  navigation as defaultNavigation,
  siteMeta as defaultSiteMeta,
} from '../data/content';

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

function loadContent() {
  return loadAdminContent({
    articles: defaultArticles,
    categories: defaultCategories,
    pages: defaultPages,
    navigation: defaultNavigation,
    siteMeta: defaultSiteMeta,
  });
}

export function getSiteMeta() {
  return loadContent().siteMeta;
}

export function getNavigation() {
  return loadContent().navigation;
}

export function getCategories() {
  return loadContent().categories;
}

export function getPages() {
  return loadContent().pages;
}

export function getAdminContent() {
  return loadContent();
}

export function getAllArticles(includeDrafts = false) {
  return loadContent().articles.filter((article) => includeDrafts || article.published !== false);
}

export function getCategoryBySlug(slug) {
  return getCategories().find((category) => category.slug === slug);
}

export function getPageBySlug(slug) {
  return getPages().find((page) => page.slug === slug);
}

export function getArticleBySlug(slug) {
  return getAllArticles(true).find((article) => article.slug === slug);
}

export function getLatestArticles(limit = getAllArticles().length) {
  return [...getAllArticles()].sort(sortByDateDesc).slice(0, limit);
}

export function getFeaturedArticles(limit = 3) {
  return [...getAllArticles()]
    .filter((article) => article.featured)
    .sort(sortByDateDesc)
    .slice(0, limit);
}

export function getArticlesByCategory(slug) {
  return [...getAllArticles()].filter((article) => article.categorySlug === slug).sort(sortByDateDesc);
}

export function getLatestFromCategory(slug, limit = 4) {
  return getArticlesByCategory(slug).slice(0, limit);
}

export function getRelatedArticles(article, limit = 3) {
  return [...getAllArticles()]
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

  return [...getAllArticles()]
    .filter((article) => articleSearchText(article).includes(search))
    .sort(sortByDateDesc);
}

export function getArticleCountByCategory(slug) {
  return getAllArticles().filter((article) => article.categorySlug === slug).length;
}

export function getTotalArticleCount() {
  return getAllArticles().length;
}

export const categories = getCategories();
export const pages = getPages();
export const navigation = getNavigation();
export const siteMeta = getSiteMeta();
