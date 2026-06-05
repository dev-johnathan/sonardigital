# Sonar Digital

Base em React + JavaScript para um portal editorial de tecnologia com estrutura moderna e navegação clara.

## O que já vem pronto

- Rotas para home, categorias, artigos, busca e páginas institucionais.
- Roteamento SPA com fallback para todas as rotas no Vercel.
- `Article`, `NewsArticle`, `WebSite` e `BreadcrumbList` em JSON-LD.
- `sitemap.xml`, `news-sitemap.xml`, `rss.xml`, `robots.txt` e `ads.txt` gerados no build.
- Espaços reservados para anúncios e layout de cards responsivo.
- Páginas de `Sobre`, `Contato`, `Privacidade` e `Termos`.

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O build gera os arquivos de SEO dentro de `public/` antes de compilar a aplicação, incluindo sitemaps e RSS.

## Deploy

O projeto já inclui `vercel.json` para suportar rotas SPA no Vercel.

```bash
npx vercel --prod
```

Em um deploy Vercel, defina `VITE_SITE_URL` e outras variáveis em `Environment Variables`.

## Variáveis de ambiente

Crie um arquivo `.env` com:

```bash
VITE_SITE_URL=https://seu-dominio.com
VITE_GA_ID=G-XXXXXXXXXX
VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXX
VITE_ADSENSE_SLOT_BANNER=1234567890
VITE_ADSENSE_SLOT_ARTICLE=1234567891
VITE_ADSENSE_SLOT_SIDEBAR=1234567892
```

`VITE_SITE_URL` é importante para canonical, sitemap e Open Graph. No Vercel, configure essas variáveis em `Environment Variables` para manter a publicação consistente.

## Google

- Envie `sitemap.xml` e `news-sitemap.xml` no Search Console.
- Verifique o `ads.txt` no AdSense.
- Se quiser, adicione o meta de verificação do Search Console na hospedagem final.

## Observação

O conteúdo inicial é editorial de demonstração. Substitua as matérias, imagens, autores e credenciais antes da publicação real.
