# YCal · Marketing site

Public marketing site for **YCal**, the mobile Yahoo Calendar (CalDAV) client. Built with **Vite 6**, **React 19**, and **React Router**.

- **Production site** follows your hosting setup (historically GitHub Pages / static hosting compatible with SPA routing via `public/_redirects`).

## Develop

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build
yarn preview   # sanity-check production bundle + basename
```

SEO helpers live under **`src/seo/`**; `yarn build` runs `scripts/finish-seo.mjs` as wired in **`package.json`**.
