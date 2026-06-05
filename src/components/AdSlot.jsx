import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/site';

let adsenseScriptPromise = null;

function loadAdsenseScript(clientId) {
  if (!clientId || typeof document === 'undefined') {
    return Promise.resolve(false);
  }

  if (!adsenseScriptPromise) {
    adsenseScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[data-adsense="true"]');
      if (existingScript) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.dataset.adsense = 'true';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Unable to load AdSense script.'));
      document.head.appendChild(script);
    });
  }

  return adsenseScriptPromise;
}

export default function AdSlot({ placement = 'banner', label = 'Espaço reservado para anúncio' }) {
  const slotId = siteConfig.adsense.slots[placement];
  const hasAdConfig = Boolean(siteConfig.adsense.clientId && slotId);
  const [isVisible, setIsVisible] = useState(false);
  const slotRef = useRef(null);

  useEffect(() => {
    if (!hasAdConfig || typeof window === 'undefined' || !slotRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    observer.observe(slotRef.current);

    return () => observer.disconnect();
  }, [hasAdConfig]);

  useEffect(() => {
    if (!hasAdConfig || !isVisible) {
      return;
    }

    loadAdsenseScript(siteConfig.adsense.clientId)
      .then(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          // Ignore push errors in development or when an ad blocker is present.
        }
      })
      .catch(() => {
        // Script load failed; do nothing and keep placeholder.
      });
  }, [hasAdConfig, isVisible]);

  const className = ['ad-slot', `ad-slot--${placement}`].join(' ');

  if (!hasAdConfig) {
    return (
      <aside className={className} aria-label={label} data-nosnippet="true">
        <div className="ad-slot__placeholder">
          <span className="ad-slot__label">Publicidade inativa</span>
          <strong>{label}</strong>
          <p>Este espaço está reservado para anúncios. A publicidade aparecerá quando os parâmetros de AdSense estiverem configurados.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className={className} aria-label={label} data-nosnippet="true" ref={slotRef}>
      {isVisible ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={siteConfig.adsense.clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="ad-slot__placeholder">
          <span className="ad-slot__label">Ad aguardando visibilidade</span>
          <strong>{label}</strong>
          <p>Role a página para carregar o anúncio.</p>
        </div>
      )}
    </aside>
  );
}
