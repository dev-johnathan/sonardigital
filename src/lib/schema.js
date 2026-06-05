import { siteConfig, absoluteUrl } from '../config/site';

const compactString = (value) => value.replace(/\s+/g, ' ').trim();

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.publisherName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.publisherLogo),
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/buscar?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: compactString(item.name),
      item: absoluteUrl(item.url),
    })),
  };
}

export function buildArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: compactString(article.title),
    description: compactString(article.summary),
    image: [absoluteUrl(article.image || siteConfig.defaultImage)],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    articleSection: article.categoryName,
    keywords: article.tags.join(', '),
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.publisherName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.publisherLogo),
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/noticia/${article.slug}`),
    },
  };
}

export function buildCollectionSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: absoluteUrl(url),
  };
}
