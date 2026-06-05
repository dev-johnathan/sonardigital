const SESSION_KEY = 'sonar-admin-session';
const CONTENT_OVERRIDE_KEY = 'sonar-admin-content';
const ADMIN_PASSWORD_HASH_KEY = 'sonar-admin-passhash';

export function getAdminSession() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return JSON.parse(window.localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

export function isAdminAuthenticated() {
  return Boolean(getAdminSession());
}

async function hashPassword(password) {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    // Fallback: simple text (not ideal) — this environment should be browser.
    return Promise.resolve(password);
  }

  const enc = new TextEncoder();
  const data = enc.encode(password);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function hasAdminPassword() {
  if (typeof window === 'undefined') return false;
  return Boolean(window.localStorage.getItem(ADMIN_PASSWORD_HASH_KEY));
}

export async function setAdminPassword(password) {
  if (typeof window === 'undefined') return false;
  const hash = await hashPassword(password);
  window.localStorage.setItem(ADMIN_PASSWORD_HASH_KEY, hash);
  return true;
}

export async function loginAdmin(username, password) {
  if (typeof window === 'undefined') throw new Error('Ambiente inválido');

  if (username !== 'admin') {
    throw new Error('Usuário inválido');
  }

  const stored = window.localStorage.getItem(ADMIN_PASSWORD_HASH_KEY);
  if (!stored) {
    // First-time setup: store provided password as the admin password
    await setAdminPassword(password);
    const session = { username, loggedAt: new Date().toISOString() };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  const providedHash = await hashPassword(password);
  if (providedHash === stored) {
    const session = { username, loggedAt: new Date().toISOString() };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  throw new Error('Usuário ou senha inválidos');
}

export function logoutAdmin() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
}

export function loadAdminContent(defaultContent) {
  if (typeof window === 'undefined') {
    return defaultContent;
  }

  try {
    const raw = window.localStorage.getItem(CONTENT_OVERRIDE_KEY);
    if (!raw) {
      return defaultContent;
    }

    const stored = JSON.parse(raw);
    return {
      ...defaultContent,
      ...stored,
    };
  } catch {
    return defaultContent;
  }
}

export function saveAdminContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(CONTENT_OVERRIDE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event('admin-content-updated'));
  try {
    window.dispatchEvent(new CustomEvent('admin-notification', { detail: { message: 'Conteúdo salvo localmente' } }));
  } catch (e) {
    // ignore if CustomEvent is not supported
  }
}

export function clearAdminContent() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(CONTENT_OVERRIDE_KEY);
  window.dispatchEvent(new Event('admin-content-updated'));
}
