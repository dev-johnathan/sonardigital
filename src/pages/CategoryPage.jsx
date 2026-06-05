import { Link, useParams } from 'react-router-dom';
import AdSlot from '../components/AdSlot';
import ArticleCard from '../components/ArticleCard';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import NotFoundPage from './NotFoundPage';
import { buildBreadcrumbSchema, buildCollectionSchema } from '../lib/schema';
import {
  getArticleCountByCategory,
  getArticlesByCategory,
  getCategoryBySlug,
} from '../lib/content';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return <NotFoundPage pathname={`/categoria/${slug}`} />;
  }

  const articles = getArticlesByCategory(category.slug);
  const count = getArticleCountByCategory(category.slug);
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: category.name, url: `/categoria/${category.slug}` },
  ];

  return (
    <>
      <SEO
        title={category.name}
        description={category.description}
        pathname={`/categoria/${category.slug}`}
        structuredData={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildCollectionSchema({
            name: category.name,
            description: category.description,
            url: `/categoria/${category.slug}`,
          }),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="page-hero" style={{ '--accent': category.accent }}>
        <span className="eyebrow">Categoria</span>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <div className="page-hero__meta">
          <strong>{count} matérias</strong>
          <Link className="text-link" to="/buscar">
            Buscar nesta cobertura
          </Link>
        </div>
      </section>

      <div className="home-ad">
        <AdSlot placement="banner" label={`Banner da categoria ${category.name}`} />
      </div>

      <section className="home-section">
        <div className="category-feed">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
