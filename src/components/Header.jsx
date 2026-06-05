import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigation, siteMeta } from '../data/content';

export default function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollingUp = currentScrollY < lastScrollY;
      setHeaderVisible(currentScrollY <= 0 || scrollingUp);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = query.trim();
    if (!value) {
      return;
    }

    navigate(`/buscar?q=${encodeURIComponent(value)}`);
    setQuery('');
  };

  return (
    <header className={`site-header ${isHeaderVisible ? 'site-header--visible' : 'site-header--hidden'}`}>
      <div className="site-header__inner container">
        <div className="site-header__topline">
          <span className="eyebrow">SEO, AdSense e Search Console</span>
          <p>Portal editorial pronto para publicar, indexar e monetizar com estrutura limpa.</p>
        </div>

        <div className="site-header__main">
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              TP
            </span>
            <span className="brand__text">
              <strong>{siteMeta.name}</strong>
              <small>{siteMeta.description}</small>
            </span>
          </Link>

          <form className="site-search" role="search" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="site-search">
              Buscar notícias
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar notícias, tags e autores"
            />
            <button type="submit">Buscar</button>
          </form>
        </div>

        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'site-nav__link is-active' : 'site-nav__link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
