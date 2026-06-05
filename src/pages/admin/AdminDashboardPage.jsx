import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAdminContent } from '../../lib/content';
import { saveAdminContent, clearAdminContent } from '../../lib/admin';

export default function AdminDashboardPage() {
  const [content, setContent] = useState(getAdminContent());

  useEffect(() => {
    const handleUpdate = () => setContent(getAdminContent());
    window.addEventListener('admin-content-updated', handleUpdate);
    return () => window.removeEventListener('admin-content-updated', handleUpdate);
  }, []);

  const { articles = [], categories = [], pages = [] } = content;
  const publishedArticles = articles.filter((article) => article.published !== false);
  const draftArticles = articles.filter((article) => article.published === false);

  const deleteArticle = (slug) => {
    if (!window.confirm('Deseja mesmo excluir esta matéria? Esta ação não pode ser desfeita.')) {
      return;
    }

    const updated = {
      ...content,
      articles: articles.filter((article) => article.slug !== slug),
    };

    saveAdminContent(updated);
    setContent(updated);
  };

  const exportContent = () => {
    const payload = JSON.stringify(content, null, 2);
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sonar-admin-content.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    try { window.dispatchEvent(new CustomEvent('admin-notification', { detail: { message: 'Exportado sonar-admin-content.json' } })); } catch {}
  };

  const exportToGitFlow = () => {
    const payload = JSON.stringify(content, null, 2);
    // create json file
    const jsonBlob = new Blob([payload], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);
    const jsonLink = document.createElement('a');
    jsonLink.href = jsonUrl;
    jsonLink.download = 'sonar-admin-content.json';
    document.body.appendChild(jsonLink);
    jsonLink.click();
    jsonLink.remove();
    URL.revokeObjectURL(jsonUrl);

    // create PS1 script
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const branchName = `admin/content-${timestamp}`;
    const script = `# PowerShell script to import admin content into the repo\n# Place this file in the root of your local repository where 'sonar-admin-content.json' is located.\n\n$remote = git remote get-url origin 2>$null\nif (!$remote) { Write-Host 'Não foi possível obter remote origin. Execute manualmente os passos do script.'; exit 1 }\nif ($remote -match '^git@(.+):(.+)\\.git$') { $https = "https://$($matches[1])/$($matches[2])" } elseif ($remote -match '^(https?://.+?)(?:\\.git)?$') { $https = $matches[1] } else { $https = $remote }\n$branch = '${branchName}'\nWrite-Host "Criando branch $branch..."\ngit checkout -b $branch\nWrite-Host 'Adicionando arquivo sonar-admin-content.json'\ngit add sonar-admin-content.json\nWrite-Host 'Commitando mudanças'\ngit commit -m "chore(admin): import content changes"\nWrite-Host 'Fazendo push para origin'\ngit push -u origin $branch\nWrite-Host 'Abrindo tela de PR no navegador...'\nStart-Process "$https/compare/main...$branch?expand=1"\n`;

    const scriptBlob = new Blob([script], { type: 'text/plain' });
    const scriptUrl = URL.createObjectURL(scriptBlob);
    const scriptLink = document.createElement('a');
    scriptLink.href = scriptUrl;
    scriptLink.download = 'apply-admin-content.ps1';
    document.body.appendChild(scriptLink);
    scriptLink.click();
    scriptLink.remove();
    URL.revokeObjectURL(scriptUrl);

    try { window.dispatchEvent(new CustomEvent('admin-notification', { detail: { message: 'Gerado JSON e script PS1 para Git flow' } })); } catch {}
  };

  const resetContent = () => {
    if (!window.confirm('Reverter para o conteúdo original apagará todas as alterações locais.')) {
      return;
    }

    clearAdminContent();
    setContent(getAdminContent());
  };

  return (
    <section className="admin-dashboard">
      <div className="admin-dashboard__hero">
        <div>
          <span className="eyebrow">Painel de administração</span>
          <h1>Gerencie artigos e publique com controle total</h1>
          <p>
            Este painel permite criar, editar, deletar e exportar o conteúdo do portal. As mudanças são mantidas localmente no navegador enquanto o site estiver em uso.
          </p>
        </div>

        <div className="admin-dashboard__actions">
          <Link to="/admin/articles/new" className="button button--primary button-icon">
            <span>➕</span>
            <span>Nova matéria</span>
          </Link>
          <button type="button" className="button button--ghost button-icon" onClick={exportContent}>
            <span>📤</span>
            <span>Exportar</span>
          </button>
          <button type="button" className="button button--ghost button-icon" onClick={exportToGitFlow}>
            <span>🔀</span>
            <span>Exportar → Git</span>
          </button>
          <button type="button" className="button button--ghost button-icon" onClick={resetContent}>
            <span>♻️</span>
            <span>Reverter</span>
          </button>
        </div>
      </div>

      <div className="admin-cards">
        <article className="admin-card">
          <h2>Artigos <span className="admin-badge">{articles.length}</span></h2>
          <p>{publishedArticles.length} publicados · {draftArticles.length} rascunhos</p>
        </article>
        <article className="admin-card">
          <h2>Categorias <span className="admin-badge">{categories.length}</span></h2>
          <p>Categorias disponíveis para seleção de matérias.</p>
        </article>
        <article className="admin-card">
          <h2>Páginas <span className="admin-badge">{pages.length}</span></h2>
          <p>Conteúdo institucional e legal do portal.</p>
        </article>
      </div>

      <section className="admin-listing">
        <div className="admin-listing__header">
          <h2>Matérias</h2>
          <p>Edite títulos, altere status e atualize conteúdo a qualquer momento.</p>
        </div>

        {articles.length === 0 ? (
          <p>Não há matérias cadastradas no painel.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Categoria</th>
                  <th>Status</th>
                  <th>Atualizado</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.slug}>
                    <td>{article.title}</td>
                    <td>{article.categoryName}</td>
                    <td>{article.published === false ? 'Rascunho' : 'Publicado'}</td>
                    <td>{new Date(article.updatedAt || article.publishedAt).toLocaleDateString('pt-BR')}</td>
                    <td className="admin-table__actions">
                      <Link className="button button--ghost" to={`/admin/articles/${article.slug}/edit`}>
                        Editar
                      </Link>
                      <button type="button" className="button button--ghost" onClick={() => deleteArticle(article.slug)}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </section>
  );
}
