import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { searchArticles } from '../lib/content';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const searchTerm = query.trim();
  const results = useMemo(() => searchArticles(searchTerm), [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = query.trim();
    setSearchParams(value ? { q: value } : {});
  };

  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Busca', url: '/buscar' },
  ];

  return (
    <>
      <SEO
        title="Busca"
        description="Busque notícias, tags e autores no portal."
        pathname="/buscar"
        noIndex
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="page-hero">
        <span className="eyebrow">Busca</span>
        <h1>Encontre notícias por tema, autor ou palavra-chave</h1>
        <p>Use a busca para encontrar conteúdo entre as matérias mais recentes.</p>

        <form className="search-panel" role="search" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="search-page-query">
            Pesquisar
          </label>
          <input
            id="search-page-query"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Digite um tema, tag ou autor"
          />
          <button type="submit">Buscar</button>
        </form>
      </section>

      <section className="home-section">
        <div className="results-meta">
          <strong>{results.length} resultados</strong>
          <span>{searchTerm ? `para "${searchTerm}"` : 'nas publicações mais recentes'}</span>
        </div>

        {results.length ? (
          <div className="category-feed">
            {results.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="panel panel--soft">
            <h2>Nenhum resultado encontrado</h2>
            <p>Tente outro termo ou navegue pelas categorias do portal.</p>
          </div>
        )}
      </section>
    </>
  );
}
