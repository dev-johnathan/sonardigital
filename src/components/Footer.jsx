import { Link } from 'react-router-dom';
import { categories, pages, siteMeta } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__brand">
          <h2>{siteMeta.name}</h2>
          <p>
            Portal editorial para tecnologia com base sólida em SEO, estrutura de conteúdo e monetização
            responsável.
          </p>
          <a href={`mailto:${siteMeta.contactEmail}`}>{siteMeta.contactEmail}</a>
        </div>

        <div className="site-footer__columns">
          <section>
            <h3>Temas</h3>
            <ul>
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link to={`/categoria/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Institucional</h3>
            <ul>
              {pages.map((page) => (
                <li key={page.slug}>
                  <Link to={`/${page.slug}`}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {siteMeta.name}. Conteúdo e estrutura prontos para Search Console,
            AdSense e distribuição orgânica.
          </p>
        </div>
      </div>
    </footer>
  );
}
