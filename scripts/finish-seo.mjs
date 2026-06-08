import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const distDir = join(rootDir, 'dist')

const ROUTE_META = JSON.parse(
  readFileSync(join(rootDir, 'src/seo/routeMeta.json'), 'utf8'),
)

function parseEnvFile(path) {
  if (!existsSync(path)) {
    return {}
  }
  const out = {}
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let val = trimmed.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    out[key] = val
  }
  return out
}

/** Merge env files like Vite production mode (later files override). */
function loadViteEnvVar(name) {
  const fromShell = process.env[name]?.trim()
  if (fromShell) {
    return fromShell
  }
  const files = ['.env', '.env.local', '.env.production', '.env.production.local']
  let raw = ''
  for (const f of files) {
    const parsed = parseEnvFile(join(rootDir, f))
    if (parsed[name] !== undefined && parsed[name] !== '') {
      raw = parsed[name]
    }
  }
  return raw.trim()
}

function normalizeBase(raw) {
  const s = raw?.trim()
  if (!s || s === '.' || s === './') {
    return './'
  }
  const withLead = s.startsWith('/') ? s : `/${s}`
  return withLead.endsWith('/') ? withLead : `${withLead}/`
}

const origin = loadViteEnvVar('VITE_SITE_ORIGIN').replace(/\/$/, '').trim()
const base = normalizeBase(loadViteEnvVar('VITE_BASE'))

const paths = ['/', '/privacy', '/terms']

function replaceMetaContent(html, attr, key, value) {
  const re = new RegExp(
    `(<meta[^>]+${attr}="${key}"[^>]*content=")[^"]*(")`,
    'i',
  )
  return html.replace(re, `$1${value}$2`)
}

function routeCanonical(pathname) {
  if (!origin) {
    return ''
  }
  return pathname === '/' ? `${origin}/` : `${origin}${pathname}`
}

/** Per-route HTML so GitHub Pages returns 200 (not 404.html) for deep links. */
function htmlForRoute(pathname, template) {
  const meta = ROUTE_META[pathname] ?? ROUTE_META['/']
  let html = template

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
  html = replaceMetaContent(html, 'name', 'description', meta.description)
  html = replaceMetaContent(html, 'property', 'og:title', meta.title)
  html = replaceMetaContent(html, 'property', 'og:description', meta.description)
  html = replaceMetaContent(html, 'name', 'twitter:title', meta.title)
  html = replaceMetaContent(html, 'name', 'twitter:description', meta.description)

  const canonical = routeCanonical(pathname)
  if (canonical) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${canonical}" />`,
    )
    if (html.includes('property="og:url"')) {
      html = replaceMetaContent(html, 'property', 'og:url', canonical)
    } else {
      html = html.replace(
        '</head>',
        `    <meta property="og:url" content="${canonical}" />\n  </head>`,
      )
    }
  }

  if (pathname !== '/' && base !== './') {
    html = html.replace(/href="\.\//g, `href="${base}`)
  }

  return html
}

function prerenderRouteHtml() {
  const indexPath = join(distDir, 'index.html')
  if (!existsSync(indexPath)) {
    console.error('dist/index.html missing — run vite build before finish-seo')
    process.exit(1)
  }

  const template = readFileSync(indexPath, 'utf8')

  for (const pathname of paths) {
    if (pathname === '/') {
      continue
    }
    const segment = pathname.slice(1)
    const outDir = join(distDir, segment)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), htmlForRoute(pathname, template))
  }
}

let robots = `User-agent: *
Allow: /
`

if (origin) {
  robots += `Sitemap: ${origin}/sitemap.xml
`
  const urls = paths
    .map((path) => {
      const loc = path === '/' ? `${origin}/` : `${origin}${path}`
      return `  <url><loc>${loc}</loc></url>`
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
}

writeFileSync(join(distDir, 'robots.txt'), robots)
prerenderRouteHtml()
