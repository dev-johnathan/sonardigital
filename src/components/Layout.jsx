import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import GoogleAnalytics from './GoogleAnalytics';

export default function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        Pular para o conteúdo
      </a>
      <GoogleAnalytics />
      <Header />
      <main id="content" className="site-main container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
