import { Link, useParams } from 'react-router-dom';
import AdSlot from '../components/AdSlot';
import ArticleCard from '../components/ArticleCard';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import NotFoundPage from './NotFoundPage';
import { buildArticleSchema, buildBreadcrumbSchema } from '../lib/schema';
import { formatDateTime } from '../lib/date';
import {
  getArticleBySlug,
  getCategoryBySlug,
  getRelatedArticles,
} from '../lib/content';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <NotFoundPage pathname={`/noticia/${slug}`} />;
  }

  const category = getCategoryBySlug(article.categorySlug);
  const relatedArticles = getRelatedArticles(article, 3);
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: category?.name || article.categoryName, url: `/categoria/${article.categorySlug}` },
    { name: article.title, url: `/noticia/${article.slug}` },
  ];

  return (
    <>
      <SEO
        title={article.title}
        description={article.summary}
        pathname={`/noticia/${article.slug}`}
        image={article.image}
        type="article"
        article={article}
        structuredData={[buildBreadcrumbSchema(breadcrumbItems), buildArticleSchema(article)]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <article className="article-page">
        <header className="article-hero" style={{ '--accent': category?.accent || '#3b82f6' }}>
          <div className="article-hero__content">
            <span className="eyebrow">{category?.name || article.categoryName}</span>
            <h1>{article.title}</h1>
            <p className="article-hero__summary">{article.summary}</p>
            <div className="article-hero__meta">
              <span>{article.author}</span>
              <span>{article.role}</span>
              <span>
                Publicado em{' '}
                <time dateTime={article.publishedAt}>{formatDateTime(article.publishedAt)}</time>
              </span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="article-hero__visual">
            <img
              src={article.image}
              alt={article.imageAlt}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </header>

        <div className="article-layout">
          <div className="article-body">
            <div className="article-lead">
              <p>{article.summary}</p>
            </div>

            {article.highlights?.length ? (
              <section className="article-panel">
                <h2>Principais pontos</h2>
                <ul className="checklist">
                  {article.highlights.map((item, itemIndex) => (
                    <li key={`highlight-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="article-inline-ad">
              <AdSlot placement="article" label="Espaço de anúncio dentro da matéria" />
            </div>

            {article.sections.map((section, sectionIndex) => (
              <section key={`section-${sectionIndex}-${section.heading}`} className="article-panel">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`paragraph-${sectionIndex}-${paragraphIndex}`}>{paragraph}</p>
                ))}
                {section.items?.length ? (
                  <ul className="bullets">
                    {section.items.map((item, itemIndex) => (
                      <li key={`item-${sectionIndex}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="article-panel article-panel--soft">
              <h2>Tags da matéria</h2>
              <div className="tag-row">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside className="article-sidebar">
            <AdSlot placement="sidebar" label="Espaço lateral da matéria" />
            <section className="panel panel--soft">
              <span className="eyebrow">Ficha rápida</span>
              <h3>Metadados úteis</h3>
              <dl className="fact-list">
                <div>
                  <dt>Autor</dt>
                  <dd>{article.author}</dd>
                </div>
                <div>
                  <dt>Categoria</dt>
                  <dd>{article.categoryName}</dd>
                </div>
                <div>
                  <dt>Data</dt>
                  <dd>{formatDateTime(article.publishedAt)}</dd>
                </div>
                <div>
                  <dt>Leitura</dt>
                  <dd>{article.readTime}</dd>
                </div>
              </dl>
            </section>

            <section className="panel panel--soft">
              <span className="eyebrow">Relacionadas</span>
              <div className="sidebar-stack">
                {relatedArticles.map((related) => (
                  <ArticleCard key={related.slug} article={related} variant="compact" />
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="home-section">
          <SectionIntro />
        </section>
      </article>
    </>
  );
}

function SectionIntro() {
  return (
    <div className="panel panel--soft">
      <span className="eyebrow">Próximo passo</span>
      <h2>O conteúdo está pronto para Search Console e distribuição orgânica</h2>
      <p>
        Esta base já inclui canonical, Article schema, breadcrumbs, sitemap e espaços de anúncio com
        altura reservada. Basta trocar o conteúdo de demonstração pelos artigos do seu portal.
      </p>
    </div>
  );
}
