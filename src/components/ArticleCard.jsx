import { Link } from 'react-router-dom';
import { getCategoryBySlug } from '../lib/content';
import { formatDate } from '../lib/date';

export default function ArticleCard({ article, variant = 'default' }) {
  const category = getCategoryBySlug(article.categorySlug);
  const cardClassName = ['article-card', `article-card--${variant}`].join(' ');

  return (
    <article className={cardClassName} style={{ '--accent': category?.accent || '#3b82f6' }}>
      <Link to={`/noticia/${article.slug}`} className="article-card__media" aria-label={article.title}>
        <img src={article.image} alt={article.imageAlt} loading="lazy" decoding="async" />
        <span className="article-card__badge">{category?.name || article.categoryName}</span>
      </Link>
      <div className="article-card__content">
        <div className="article-card__meta">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span>{article.readTime}</span>
        </div>
        <h3>
          <Link to={`/noticia/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.summary}</p>
        <div className="article-card__footer">
          <span>{article.author}</span>
          <Link to={`/categoria/${article.categorySlug}`}>{category?.name || article.categoryName}</Link>
        </div>
      </div>
    </article>
  );
}
