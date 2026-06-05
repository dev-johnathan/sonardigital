import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import StaticPage from './pages/StaticPage';
import NotFoundPage from './pages/NotFoundPage';

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
      </Routes>
    </>
  );
}
