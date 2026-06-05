import { Helmet } from 'react-helmet-async';
import { siteConfig, absoluteUrl } from '../config/site';
import { buildOrganizationSchema } from '../lib/schema';

function toJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function SEO({
  title,
  description,
  pathname = '/',
  image = siteConfig.defaultImage,
  type = 'website',
  noIndex = false,
  structuredData = [],
  article = null,
}) {
  const canonicalUrl = absoluteUrl(pathname);
  const socialImage = absoluteUrl(image);
  const pageTitle = title ? `${title} · ${siteConfig.shortName}` : siteConfig.name;
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';
  const schemas = [buildOrganizationSchema(), ...structuredData];

  return (
    <Helmet htmlAttributes={{ lang: siteConfig.locale }}>
      <title>{pageTitle}</title>
      <meta name="description" content={description || siteConfig.description} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#07111f" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || siteConfig.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description || siteConfig.description} />
      <meta name="twitter:image" content={socialImage} />
      <link rel="canonical" href={canonicalUrl} />
      {article ? (
        <>
          <meta property="article:published_time" content={article.publishedAt} />
          <meta property="article:modified_time" content={article.updatedAt || article.publishedAt} />
          <meta property="article:section" content={article.categoryName} />
          <meta name="author" content={article.author} />
          {article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      ) : null}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {toJsonLd(schema)}
        </script>
      ))}
    </Helmet>
  );
}
