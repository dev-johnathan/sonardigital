import { Link } from 'react-router-dom';
import AdSlot from '../components/AdSlot';
import ArticleCard from '../components/ArticleCard';
import CategoryCard from '../components/CategoryCard';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';
import { buildWebSiteSchema } from '../lib/schema';
import {
  categories,
  getArticleCountByCategory,
  getFeaturedArticles,
  getLatestArticles,
  getTotalArticleCount,
} from '../lib/content';
import { siteMeta } from '../data/content';

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3);
  const allLatestArticles = getLatestArticles(8);
  const leadArticle = featuredArticles[0] || allLatestArticles[0];
  const secondaryFeatured = featuredArticles.slice(1, 3);
  const latestArticles = leadArticle
    ? allLatestArticles.filter((article) => article.slug !== leadArticle.slug)
    : allLatestArticles;
  const categoryCards = categories.map((category) => ({
    ...category,
    count: getArticleCountByCategory(category.slug),
  }));
  const heroStats = [
    { value: getTotalArticleCount(), label: 'matérias na base' },
    { value: categoryCards.length, label: 'categorias principais' },
    { value: 'Leitura', label: 'foco no conteúdo' },
  ];

  return (
    <>
      <SEO
        title="Portal de tecnologia, SEO e monetização"
        description={siteMeta.description}
        pathname="/"
        structuredData={[buildWebSiteSchema()]}
      />

      <section className="hero">
        <div className="hero__intro">
          <span className="eyebrow">Portal editorial</span>
          <h1>Notícias de tecnologia com estrutura pensada para leitura rápida.</h1>
          <p>
            Cobertura técnica organizada para leitura rápida, com navegação clara e espaços pensados para monetização responsável.
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to={`/noticia/${leadArticle.slug}`}>
              Ler manchete
            </Link>
            <Link className="button button--ghost" to="/buscar">
              Explorar notícias
            </Link>
          </div>

          <div className="hero__stats">
            {heroStats.map((stat) => (
              <article key={stat.label} className="hero__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__feature">
          <ArticleCard article={leadArticle} variant="featured" />
        </div>
      </section>

      <section className="home-section">
        <SectionHeading
          eyebrow="Cobertura"
          title="Pautas quentes do momento"
          description="Análises sobre lançamentos, segurança e infraestrutura para leitores que acompanham tecnologia."
        />
        <div className="featured-stack">
          {secondaryFeatured.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
      </section>

      <div className="home-ad">
        <AdSlot placement="banner" label="Banner superior do portal" />
      </div>

      <section className="home-section">
        <SectionHeading
          eyebrow="Categorias"
          title="Organização editorial por tema"
          description="Temas selecionados para facilitar navegação, descoberta e indexação editorial."
          action={
            <Link className="text-link" to="/sobre">
              Como o portal funciona
            </Link>
          }
        />
        <div className="category-grid">
          {categoryCards.map((category) => (
            <CategoryCard key={category.slug} category={category} count={category.count} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeading
          eyebrow="Últimas"
          title="Publicações recentes"
          description="Artigos curtos e consistentes, com metadados alinhados para distribuição digital."
        />
        <div className="content-grid">
          <div className="content-grid__main">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <aside className="content-grid__aside">
            <AdSlot placement="sidebar" label="Espaço lateral do portal" />
            <div className="panel panel--soft">
              <span className="eyebrow">Checklist editorial</span>
              <h3>Pronto para publicar com confiança</h3>
              <ul className="checklist">
                <li>URLs limpas e canônicas</li>
                <li>Article schema por página</li>
                <li>ads.txt e sitemap no build</li>
                <li>Meta tags e Open Graph consistentes</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
