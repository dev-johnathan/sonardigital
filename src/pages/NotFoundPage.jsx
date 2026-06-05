import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage({
  pathname = '/404',
  title = 'Página não encontrada',
  description = 'A página solicitada não existe.',
}) {
  return (
    <>
      <SEO title={title} description={description} pathname={pathname} noIndex />

      <section className="page-hero page-hero--center">
        <span className="eyebrow">404</span>
        <h1>Essa página não foi encontrada</h1>
        <p>Use a busca ou volte para a home para continuar navegando no portal.</p>
        <div className="hero__actions">
          <Link className="button button--primary" to="/">
            Voltar para a home
          </Link>
          <Link className="button button--ghost" to="/buscar">
            Ir para a busca
          </Link>
        </div>
      </section>
    </>
  );
}
