import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getAdminContent } from '../../lib/content';
import { saveAdminContent } from '../../lib/admin';

const createSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

function normalizeParagraphs(text) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function AdminArticleEditorPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const content = getAdminContent();
  const categories = content.categories || [];
  const existingArticle = slug ? content.articles.find((item) => item.slug === slug) : null;

  const initialSections = existingArticle?.sections?.map((section) => ({
    heading: section.heading,
    paragraphsText: section.paragraphs.join('\n\n'),
  })) || [{ heading: '', paragraphsText: '' }];

  const [title, setTitle] = useState(existingArticle?.title || '');
  const [articleSlug, setArticleSlug] = useState(existingArticle?.slug || '');
  const [summary, setSummary] = useState(existingArticle?.summary || '');
  const [categorySlug, setCategorySlug] = useState(existingArticle?.categorySlug || categories[0]?.slug || '');
  const [categoryName, setCategoryName] = useState(existingArticle?.categoryName || categories[0]?.name || '');
  const [author, setAuthor] = useState(existingArticle?.author || '');
  const [role, setRole] = useState(existingArticle?.role || '');
  const [publishedAt, setPublishedAt] = useState(existingArticle?.publishedAt || new Date().toISOString().slice(0, 16));
  const [updatedAt, setUpdatedAt] = useState(existingArticle?.updatedAt || new Date().toISOString().slice(0, 16));
  const [readTime, setReadTime] = useState(existingArticle?.readTime || '4 min');
  const [tagsText, setTagsText] = useState((existingArticle?.tags || []).join(', '));
  const [highlightsText, setHighlightsText] = useState((existingArticle?.highlights || []).join('\n'));
  const [sections, setSections] = useState(initialSections);
  const [featured, setFeatured] = useState(existingArticle?.featured || false);
  const [published, setPublished] = useState(existingArticle?.published !== false);
  const [error, setError] = useState('');

  useEffect(() => {
    const selectedCategory = categories.find((item) => item.slug === categorySlug);
    if (selectedCategory) {
      setCategoryName(selectedCategory.name);
    }
  }, [categorySlug, categories]);

  const existingSlugs = useMemo(
    () => content.articles.filter((article) => article.slug !== existingArticle?.slug).map((article) => article.slug),
    [content.articles, existingArticle]
  );

  const handleSectionChange = (index, key, value) => {
    const next = [...sections];
    next[index] = { ...next[index], [key]: value };
    setSections(next);
  };

  const addSection = () => {
    setSections([...sections, { heading: '', paragraphsText: '' }]);
  };

  const removeSection = (index) => {
    setSections(sections.filter((_, sectionIndex) => sectionIndex !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!title.trim() || !summary.trim() || !articleSlug.trim() || !author.trim() || !categorySlug) {
      setError('Título, resumo, autor, categoria e slug são obrigatórios.');
      return;
    }

    const normalizedSlug = createSlug(articleSlug);
    if (!normalizedSlug) {
      setError('O slug deve conter letras ou números.');
      return;
    }

    if (existingSlugs.includes(normalizedSlug)) {
      setError('Já existe uma matéria com esse slug. Escolha outro valor.');
      return;
    }

    const article = {
      slug: normalizedSlug,
      title: title.trim(),
      summary: summary.trim(),
      categorySlug,
      categoryName: categories.find((item) => item.slug === categorySlug)?.name || categoryName,
      author: author.trim(),
      role: role.trim(),
      publishedAt: new Date(publishedAt).toISOString(),
      updatedAt: new Date(updatedAt).toISOString(),
      readTime: readTime.trim(),
      featured,
      published,
      tags: tagsText.split(',').map((tag) => tag.trim()).filter(Boolean),
      highlights: highlightsText.split(/\n/).map((item) => item.trim()).filter(Boolean),
      sections: sections
        .filter((section) => section.heading.trim() || section.paragraphsText.trim())
        .map((section) => ({
          heading: section.heading.trim(),
          paragraphs: normalizeParagraphs(section.paragraphsText),
        })),
    };

    const updatedArticles = existingArticle
      ? content.articles.map((item) => (item.slug === existingArticle.slug ? article : item))
      : [article, ...content.articles];

    saveAdminContent({ ...content, articles: updatedArticles });
    navigate('/admin');
  };

  return (
    <section className="admin-editor">
      <div className="admin-editor__header">
        <span className="eyebrow">Editor de artigo</span>
        <div>
          <h1>{existingArticle ? 'Editar matéria' : 'Nova matéria'}</h1>
          <p>Atualize o conteúdo, defina o status e salve a matéria diretamente no painel.</p>
        </div>
      </div>

      <form className="admin-editor__form" onSubmit={handleSubmit}>
        <div className="admin-form-grid">
          <label>
            Título
            <input value={title} onChange={(event) => setTitle(event.target.value)} required />
          </label>

          <label>
            Slug
            <div className="slug-actions">
              <input
                value={articleSlug}
                onChange={(event) => setArticleSlug(event.target.value)}
                placeholder="exemplo-de-materia"
                required
              />
              <button
                type="button"
                className="button button--ghost"
                onClick={() => setArticleSlug(createSlug(title || summary || Date.now().toString()))}
                title="Gerar slug a partir do título"
              >
                Gerar
              </button>
              <button
                type="button"
                className="button button--ghost"
                onClick={() => window.open(`/noticia/${articleSlug}`, '_blank')}
                title="Abrir pré-visualização em nova aba"
              >
                Ver
              </button>
            </div>
          </label>

          <label>
            Resumo
            <textarea value={summary} onChange={(event) => setSummary(event.target.value)} rows={4} required />
          </label>

          <label>
            Categoria
            <select value={categorySlug} onChange={(event) => setCategorySlug(event.target.value)} required>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Autor
            <input value={author} onChange={(event) => setAuthor(event.target.value)} required />
          </label>

          <label>
            Função
            <input value={role} onChange={(event) => setRole(event.target.value)} />
          </label>

          <label>
            Publicado em
            <input
              type="datetime-local"
              value={publishedAt}
              onChange={(event) => setPublishedAt(event.target.value)}
              required
            />
          </label>

          <label>
            Atualizado em
            <input
              type="datetime-local"
              value={updatedAt}
              onChange={(event) => setUpdatedAt(event.target.value)}
              required
            />
          </label>

          <label>
            Tempo de leitura
            <input value={readTime} onChange={(event) => setReadTime(event.target.value)} />
          </label>

          <label>
            Tags (separadas por vírgula)
            <input value={tagsText} onChange={(event) => setTagsText(event.target.value)} />
          </label>

          <label>
            Destaques (uma linha por ponto)
            <textarea value={highlightsText} onChange={(event) => setHighlightsText(event.target.value)} rows={4} />
          </label>

            <fieldset className="admin-editor__toggles">
            <legend>Status</legend>
            <label className="admin-toggle">
              <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} />
              <span className={`status-pill ${published ? 'published' : 'draft'}`}>{published ? 'Publicado' : 'Rascunho'}</span>
            </label>
            <label className="admin-toggle">
              <input type="checkbox" checked={featured} onChange={(event) => setFeatured(event.target.checked)} />
              Em destaque
            </label>
          </fieldset>
        </div>

        <section className="admin-sections">
          <div className="admin-sections__header">
            <h2>Seções</h2>
            <button type="button" className="button button--ghost" onClick={addSection}>
              Adicionar seção
            </button>
          </div>

          {sections.map((section, index) => (
            <div key={`section-${index}`} className="admin-section">
              <label>
                Subtítulo
                <input
                  value={section.heading}
                  onChange={(event) => handleSectionChange(index, 'heading', event.target.value)}
                />
              </label>
              <label>
                Parágrafos
                <textarea
                  value={section.paragraphsText}
                  onChange={(event) => handleSectionChange(index, 'paragraphsText', event.target.value)}
                  rows={5}
                />
              </label>
              <button type="button" className="button button--ghost" onClick={() => removeSection(index)}>
                Remover seção
              </button>
            </div>
          ))}
        </section>

        {error ? <p className="form-error">{error}</p> : null}

        <div className="admin-editor__actions">
          <button type="submit" className="button button--primary">
            Salvar matéria
          </button>
          <Link to="/admin" className="button button--ghost">
            Voltar ao painel
          </Link>
        </div>
      </form>
    </section>
  );
}
