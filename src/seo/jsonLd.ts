import { GOOGLE_PLAY_URL, SITE_ORIGIN } from '../config'
import { HOME_FAQ } from '../content/homeFaq'

const APP_JSON_LD = {
  '@type': 'SoftwareApplication',
  name: 'YCal',
  description:
    'Android calendar for Yahoo accounts: CalDAV sync, reminders, agenda, week and month views. Yearly, monthly or one-time Lifetime plans through Google Play. Independent client—not affiliated with Yahoo.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Android',
  // Subscription prices vary by country; Lifetime is the one fixed USD price.
  offers: {
    '@type': 'Offer',
    name: 'YCal Lifetime',
    price: '19.99',
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

const FAQ_JSON_LD = {
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [APP_JSON_LD, FAQ_JSON_LD],
}
