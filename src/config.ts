/**
 * Public site origin — no trailing slash.
 * Examples: GitHub Pages `https://username.github.io/repo`, or `https://yourdomain.com`
 * if you connect a custom domain to the Pages site later.
 *
 * Used at **build time** for canonical/meta (set `VITE_SITE_ORIGIN` in `.env` or CI).
 */
export const SITE_ORIGIN =
  (import.meta.env.VITE_SITE_ORIGIN as string | undefined)?.replace(/\/$/, '').trim() ?? ''

/**
 * Set this to your public GitHub repository URL so the site can link to it.
 * Leave empty to hide the GitHub link in the footer.
 */
export const GITHUB_REPO_URL = 'https://github.com/saravadeo/ycal-website'

/** Public listing on Google Play (Android). */
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.ycal.mobile'

/**
 * Homepage “From the creator” — fill in your public details (optional but recommended).
 *
 * Example:
 *   name: 'Alex Kim',
 *   line: 'Long-time Yahoo user · Creator of YCal',
 *   email: 'hello@example.com',
 *   links: [{ label: 'GitHub', url: 'https://github.com/...' }],
 */
export const CREATOR = {
  name: '',
  line: '',
  email: '',
  links: [] as { label: string; url: string }[],
}
