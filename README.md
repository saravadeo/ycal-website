# YCal · Marketing site

Public marketing site for **YCal**, the mobile Yahoo Calendar (CalDAV) client. Built with **Vite 6**, **React 19**, and **React Router**.

- **Production:** https://saravadeo.github.io/ycal-website/ — deployed by **GitHub Actions** on every push to `main` (see `.github/workflows/deploy-github-pages.yml`). In the repo once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
- **Manual deploy** (branch `gh-pages` via CLI): after `yarn install`, run `yarn deploy` (sets `VITE_BASE` / `VITE_SITE_ORIGIN` for the project URL and copies SPA `404.html`).

## Develop

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build
yarn preview
```

GitHub Pages serves this repo under **`/ycal-website/`**. To preview that layout locally:

```bash
VITE_BASE=/ycal-website/ VITE_SITE_ORIGIN=https://saravadeo.github.io/ycal-website yarn build
cp dist/index.html dist/404.html   # SPA deep-link fallback (workflow does this too)
npx vite preview --base /ycal-website/
```

SEO helpers live under **`src/seo/`**; `yarn build` runs `scripts/finish-seo.mjs` as wired in **`package.json`**.
