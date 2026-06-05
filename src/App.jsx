import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import StaticPage from './pages/StaticPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLayout from './components/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminArticleEditorPage from './pages/admin/AdminArticleEditorPage';
import AdminRoute from './components/AdminRoute';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="categoria/:slug" element={<CategoryPage />} />
          <Route path="noticia/:slug" element={<ArticlePage />} />
          <Route path="buscar" element={<SearchPage />} />
          <Route path="sobre" element={<StaticPage pageSlug="sobre" />} />
          <Route path="contato" element={<StaticPage pageSlug="contato" />} />
          <Route path="privacidade" element={<StaticPage pageSlug="privacidade" />} />
          <Route path="termos" element={<StaticPage pageSlug="termos" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="admin">
          <Route path="login" element={<AdminLoginPage />} />
          <Route element={<AdminLayout />}>
            <Route element={<AdminRoute />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="articles/new" element={<AdminArticleEditorPage />} />
              <Route path="articles/:slug/edit" element={<AdminArticleEditorPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
