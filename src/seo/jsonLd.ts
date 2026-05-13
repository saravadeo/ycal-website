import { GOOGLE_PLAY_URL, SITE_ORIGIN } from '../config'

export const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'YCal',
  description:
    'Mobile calendar for Yahoo accounts: CalDAV sync, reminders, agenda and month views. Free independent client—not affiliated with Yahoo.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  installUrl: GOOGLE_PLAY_URL,
  ...(SITE_ORIGIN
    ? {
        url: SITE_ORIGIN,
        image: `${SITE_ORIGIN}/app-icon-unified.png`,
      }
    : {}),
}
