/**
 * Vite `import.meta.env.BASE_URL` is `'/'`, `'./'`, or a subdirectory like `'/repo/'`.
 * React Router expects a basename with a leading slash and no trailing slash.
 */
export function viteRouterBasename(baseUrl: string): string | undefined {
  if (baseUrl === '/' || baseUrl === './') {
    return undefined
  }
  const trimmed = baseUrl.replace(/\/$/, '')
  return trimmed || undefined
}
