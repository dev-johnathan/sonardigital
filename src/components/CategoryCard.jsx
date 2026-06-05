import { Link } from 'react-router-dom';

export default function CategoryCard({ category, count }) {
  return (
    <Link
      to={`/categoria/${category.slug}`}
      className="category-card"
      style={{ '--accent': category.accent }}
    >
      <span className="category-card__eyebrow">Categoria</span>
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <span className="category-card__count">
        {count} {count === 1 ? 'matéria' : 'matérias'}
      </span>
    </Link>
  );
}
