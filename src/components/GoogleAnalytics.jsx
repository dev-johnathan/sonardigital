import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';

let scriptLoaded = false;

function injectScript(gaId) {
  if (!gaId || scriptLoaded || typeof document === 'undefined') {
    return;
  }

  scriptLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
  window.gtag('js', new Date());
  window.gtag('config', gaId, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.dataset.ga = 'true';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    injectScript(siteConfig.analytics.gaId);
  }, []);

  useEffect(() => {
    if (!siteConfig.analytics.gaId || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', 'page_view', {
      page_path: `${location.pathname}${location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
