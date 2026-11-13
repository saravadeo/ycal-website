import { APP_STORE_URL, playStoreUrl } from '../config'

/**
 * Google Play and App Store buttons with equal weight, so visitors on either platform see their
 * store named. `placement` tags the Play link for the Play Console acquisition report.
 */
export function StoreButtons({ placement, children }: { placement: string; children?: React.ReactNode }) {
  return (
    <p className="home-store-cta">
      <a className="home-store-cta-btn" href={playStoreUrl(placement)} target="_blank" rel="noopener noreferrer">
        Get it on Google Play
      </a>
      <a className="home-store-cta-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
        Download on the App Store
      </a>
      {children}
    </p>
  )
}
