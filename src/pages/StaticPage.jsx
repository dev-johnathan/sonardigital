import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { buildBreadcrumbSchema } from '../lib/schema';
import { getPageBySlug } from '../lib/content';
import NotFoundPage from './NotFoundPage';

export default function StaticPage({ pageSlug }) {
  const params = useParams();
  const slug = pageSlug || params.slug;
  const page = getPageBySlug(slug);

  if (!page) {
    return <NotFoundPage pathname={`/${slug}`} />;
  }

  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: page.title, url: `/${page.slug}` },
  ];

  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        pathname={`/${page.slug}`}
        structuredData={[buildBreadcrumbSchema(breadcrumbItems)]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="page-hero">
        <span className="eyebrow">Institucional</span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>

      <section className="home-section">
        <div className="article-flow">
          {page.sections.map((section, sectionIndex) => (
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
        </div>
      </section>
    </>
  );
}
