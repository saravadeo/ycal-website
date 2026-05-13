import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base works on GitHub Pages (project sites and custom domains).
// For a GitHub *project* site (username.github.io/repo/), set `base: '/repo/'` here
// so assets and BrowserRouter paths align; then add 404.html (see `yarn deploy`).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteOrigin = env.VITE_SITE_ORIGIN?.replace(/\/$/, '').trim() ?? ''

  return {
    plugins: [
      react(),
      {
        name: 'html-seo-inject',
        transformIndexHtml(html) {
          if (!siteOrigin) {
            return html
          }
          const image = `${siteOrigin}/app-icon-unified.png`
          const homeUrl = `${siteOrigin}/`
          const block = `
    <link rel="canonical" href="${homeUrl}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="YCal app icon" />
    <meta name="twitter:image" content="${image}" />`
          return html.replace('</head>', `${block}\n  </head>`)
        },
      },
    ],
    base: './',
  }
})
