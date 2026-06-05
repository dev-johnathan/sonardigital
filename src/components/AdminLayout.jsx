import { Link, Outlet, useNavigate } from 'react-router-dom';
import Toast from './Toast';
import { logoutAdmin, getAdminSession } from '../lib/admin';

export default function AdminLayout() {
  const navigate = useNavigate();
  const session = getAdminSession();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-brand">
          <Link to="/">Sonar Digital</Link>
          <span>painel administrativo</span>
        </div>

        <nav className="admin-nav" aria-label="Administração">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/articles/new">Nova matéria</Link>
        </nav>

        <div className="admin-meta">
          <span>Olá, {session?.username || 'editor'}</span>
          <button type="button" className="button button--ghost" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </header>

      <main className="admin-main container">
        <Outlet />
        <Toast />
      </main>
    </div>
  );
}
