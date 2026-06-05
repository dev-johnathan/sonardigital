import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Caminho de navegação">
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.url}>
              {isCurrent ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.url}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
