import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdminAuthenticated, loginAdmin, hasAdminPassword } from '../../lib/admin';
import { getSiteMeta } from '../../lib/content';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const siteMeta = getSiteMeta();
  const [needsSetup, setNeedsSetup] = useState(false);

  useEffect(() => {
    if (isAdminAuthenticated()) {
      navigate('/admin');
    }

    (async () => {
      const exists = await hasAdminPassword();
      setNeedsSetup(!exists);
    })();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      await loginAdmin(username.trim(), password);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-panel">
        <span className="eyebrow">Área administrativa</span>
        <h1>{needsSetup ? 'Configurar acesso administrativo' : 'Faça login para gerenciar o Sonar Digital'}</h1>
        <p>
          {needsSetup
            ? 'Este é o primeiro acesso: defina uma senha segura para o usuário `admin`. Essa senha será armazenada localmente no seu navegador.'
            : 'Use o painel para criar, editar e publicar matérias sem precisar alterar código manualmente.'}
        </p>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label>
            Usuário
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
              required
              autoFocus
            />
          </label>

          <label>
            Senha
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Senha secreta"
                required
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="button button--ghost"
                onClick={() => setShowPassword((v) => !v)}
                aria-pressed={showPassword}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </label>

          {error ? <p className="form-error">{error}</p> : null}

          <button type="submit" className="button button--primary">
            Entrar
          </button>
        </form>

        <div className="admin-login-note">
          <p>Login único para o painel administrativo. As alterações são gravadas localmente no navegador.</p>
          <p>
            Para publicar definitivamente no site, mantenha o painel aberto e sincronize as mudanças com o GitHub.
          </p>
        </div>

        <footer className="admin-login-footer">
          <small>{siteMeta.name} — {siteMeta.description}</small>
        </footer>
      </div>
    </div>
  );
}
