import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const distDir = join(rootDir, 'dist')

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
function loadViteSiteOrigin() {
  const fromShell = process.env.VITE_SITE_ORIGIN?.replace(/\/$/, '').trim()
  if (fromShell) {
    return fromShell
  }
  const files = ['.env', '.env.local', '.env.production', '.env.production.local']
  let raw = ''
  for (const f of files) {
    const parsed = parseEnvFile(join(rootDir, f))
    if (parsed.VITE_SITE_ORIGIN !== undefined && parsed.VITE_SITE_ORIGIN !== '') {
      raw = parsed.VITE_SITE_ORIGIN
    }
  }
  return raw.replace(/\/$/, '').trim()
}

const origin = loadViteSiteOrigin()

let robots = `User-agent: *
Allow: /
`

const paths = ['/', '/privacy', '/terms']

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
