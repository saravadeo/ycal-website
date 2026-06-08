import { SITE_ORIGIN } from '../config'
import routeMeta from './routeMeta.json'

type RouteMeta = { title: string; description: string }

export const ROUTE_META = routeMeta as Record<string, RouteMeta>

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Updates title, description, canonical, and social tags after client navigation.
 * Static HTML + build-time tags provide a baseline for crawlers that do not run JS.
 */
export function applyDocumentMeta(pathname: string) {
  const meta = ROUTE_META[pathname] ?? ROUTE_META['/']

  document.title = meta.title

  setMetaName('description', meta.description)
  setMetaProperty('og:title', meta.title)
  setMetaProperty('og:description', meta.description)
  setMetaName('twitter:title', meta.title)
  setMetaName('twitter:description', meta.description)

  if (SITE_ORIGIN) {
    const href =
      pathname === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${pathname.startsWith('/') ? pathname : `/${pathname}`}`

    setMetaProperty('og:url', href)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', href)
  }
}
