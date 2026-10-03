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
 * Play listing link tagged with where on the site it was clicked. Google Play Console's
 * acquisition report attributes installs by these UTM values; nothing is tracked on this site.
 */
export function playStoreUrl(placement: string): string {
  const referrer = `utm_source=ycal_website&utm_medium=${placement}&utm_campaign=site`
  return `${GOOGLE_PLAY_URL}&referrer=${encodeURIComponent(referrer)}`
}

/**
 * Length of the Premium free trial configured in Play Console, in days. 0 hides every trial
 * mention on the site — only set this once the trial offer is live, or the copy is false.
 */
export const PREMIUM_FREE_TRIAL_DAYS = 0

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
