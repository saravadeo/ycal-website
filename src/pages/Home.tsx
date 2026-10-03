import { CREATOR, PREMIUM_FREE_TRIAL_DAYS, playStoreUrl } from '../config'
import { HOME_FAQ } from '../content/homeFaq'

const COMPARE_ROWS: { feature: string; free: string | boolean; premium: string | boolean }[] = [
  { feature: 'Yahoo Calendar sync', free: true, premium: true },
  { feature: 'Month, week & agenda views', free: true, premium: true },
  { feature: 'Event reminders', free: 'Preset times', premium: 'Any time, per event' },
  { feature: 'Pull-to-refresh sync', free: true, premium: true },
  { feature: 'Background sync', free: 'Every 1–12 hours', premium: 'As often as every 15 min' },
  { feature: 'Yahoo accounts', free: '1', premium: 'Multiple, merged' },
  { feature: 'Import .ics files', free: true, premium: true },
  { feature: 'Export / back up to .ics', free: false, premium: true },
  { feature: 'Custom accent color', free: false, premium: true },
  { feature: 'No ads, no trackers', free: true, premium: true },
]


function CompareCell({ value }: { value: string | boolean }) {
  if (value === true) return <span className="compare-yes" aria-label="Included">✓</span>
  if (value === false) return <span className="compare-no" aria-label="Not included">—</span>
  return <span>{value}</span>
}

function IconFree() {
  return (
    <svg className="home-card-icon" width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconSync() {
  return (
    <svg className="home-card-icon" width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36M20.49 15a9 9 0 01-14.85 3.36"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconBell() {
  return (
    <svg className="home-card-icon" width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCalendarViews() {
  return (
    <svg className="home-card-icon" width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M3 10h18M9 4v4M15 4v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconStar() {
  return (
    <svg className="home-card-icon" width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.1 6.1-.7L12 3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="home-card-icon" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconRocket() {
  return (
    <svg className="home-card-icon" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03.55 4-2c1.08-1.62 0-5 0-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg className="home-link-icon" width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Home() {
  const base = import.meta.env.BASE_URL
  const hasCreatorDetails = Boolean(
    CREATOR.name ||
      CREATOR.line ||
      CREATOR.email ||
      (CREATOR.links && CREATOR.links.length > 0)
  )

  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero-glow" aria-hidden />
        <div className="home-hero-inner">
          <div className="home-hero-icon-wrap">
            <img
              src={`${base}app-icon-unified.png`}
              className="home-hero-icon"
              alt="YCal"
              width={112}
              height={112}
            />
          </div>
          <p className="home-eyebrow">Yahoo Calendar · Android</p>
          <h1 id="hero-title">Never miss a Yahoo Calendar invite again</h1>
          <p className="tagline">
            Your Yahoo calendar on your phone with reminders that actually go off — month, week and
            agenda views, synced straight from Yahoo.
          </p>
          <p className="home-store-cta">
            <a
              className="home-store-cta-btn"
              href={playStoreUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get it free on Google Play
            </a>
            <a className="home-store-cta-secondary" href="#premium">
              Compare Free &amp; Premium
            </a>
          </p>
          <ul className="home-hero-trust" aria-label="Highlights">
            <li>Free to use</li>
            <li>No ads</li>
            <li>No trackers</li>
            <li>Data stays on your phone</li>
          </ul>
        </div>
      </section>

      <section className="home-pillars" aria-labelledby="pillars-title">
        <header className="home-section-head">
          <span className="home-kicker">At a glance</span>
          <h2 id="pillars-title" className="home-section-title">
            What you get with YCal
          </h2>
        </header>

        <div className="grid home-card-grid">
          <article className="card home-card">
            <div className="home-card-top">
              <span className="home-card-icon-wrap" aria-hidden>
                <IconFree />
              </span>
              <h3 className="home-card-title">Free</h3>
            </div>
            <p>
              Sync, views and reminders are free with no ads — built so anyone with a Yahoo account can
              stay organized without paying. Premium is there if you want more.
            </p>
          </article>
          <article className="card home-card">
            <div className="home-card-top">
              <span className="home-card-icon-wrap" aria-hidden>
                <IconSync />
              </span>
              <h3 className="home-card-title">Yahoo sync</h3>
            </div>
            <p>
              Your Yahoo calendars and events on your phone — synced over CalDAV, with pull-to-refresh and
              the option to choose which calendars to show so it matches what you use on the web.
            </p>
          </article>
          <article className="card home-card">
            <div className="home-card-top">
              <span className="home-card-icon-wrap" aria-hidden>
                <IconBell />
              </span>
              <h3 className="home-card-title">Reminders</h3>
            </div>
            <p>
              Local notifications for timed and all-day events — so meetings and invites are harder to miss
              on your phone, not lost in a tab or inbox.
            </p>
          </article>
          <article className="card home-card">
            <div className="home-card-top">
              <span className="home-card-icon-wrap" aria-hidden>
                <IconCalendarViews />
              </span>
              <h3 className="home-card-title">Agenda &amp; views</h3>
            </div>
            <p>
              Month grid, agenda list, and day detail — fewer hops than juggling Yahoo in the browser when
              you just need to see what&apos;s next or scan the month.
            </p>
          </article>
          <article className="card home-card">
            <div className="home-card-top">
              <span className="home-card-icon-wrap" aria-hidden>
                <IconStar />
              </span>
              <h3 className="home-card-title">Premium, if you want more</h3>
            </div>
            <p>
              An optional upgrade for people who juggle more than one calendar or want extra control —
              multiple accounts in one app, faster sync, custom reminders, and a calendar backup
              export. <a href="#premium">See what&apos;s included</a>.
            </p>
          </article>
        </div>
      </section>

      <section id="premium" className="home-compare" aria-labelledby="compare-title">
        <header className="home-section-head">
          <span className="home-kicker">Free &amp; Premium</span>
          <h2 id="compare-title" className="home-section-title">
            Start free. Upgrade if you need more.
          </h2>
          <p className="home-section-sub">
            Everything you need for one Yahoo calendar is free. Premium is for people who run more than
            one account or want reminders exactly their way
            {PREMIUM_FREE_TRIAL_DAYS > 0
              ? ` — try it free for ${PREMIUM_FREE_TRIAL_DAYS} days in the app.`
              : '.'}
          </p>
        </header>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Free</th>
                <th scope="col" className="compare-premium-col">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>
                    <CompareCell value={row.free} />
                  </td>
                  <td className="compare-premium-col">
                    <CompareCell value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="home-store-cta">
          <a
            className="home-store-cta-btn"
            href={playStoreUrl('compare')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PREMIUM_FREE_TRIAL_DAYS > 0 ? 'Install free & start your trial' : 'Install YCal free'}
          </a>
        </p>
        <p className="compare-footnote">
          Premium is a monthly or yearly subscription through Google Play. Cancel any time in Google
          Play.
        </p>
      </section>

      <section className="info-section home-info" aria-labelledby="info-heading">
        <header className="home-section-head home-section-head--compact">
          <span className="home-kicker">Before you install</span>
          <h2 id="info-heading" className="home-section-title">
            Sign-in &amp; what&apos;s next
          </h2>
        </header>

        <div className="home-info-grid">
          <article className="info-block info-block--muted">
            <div className="info-block-head">
              <span className="info-block-icon" aria-hidden>
                <IconShield />
              </span>
              <h3 className="info-block-title">Yahoo app password</h3>
            </div>
            <p>
              YCal connects over CalDAV using a <strong>Yahoo app password</strong> — not your normal email
              password. Create it once in Yahoo account settings and enter it in YCal.{' '}
              <strong>Only people who can use Yahoo app passwords can sign in</strong> this way; it is the
              supported path for third‑party calendar clients.
            </p>
            <a
              className="home-text-link"
              href="https://help.yahoo.com/kb/SLN15241.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yahoo: app passwords
              <IconExternal />
            </a>
          </article>

          <article className="info-block info-block--accent">
            <div className="info-block-head">
              <span className="info-block-icon" aria-hidden>
                <IconRocket />
              </span>
              <h3 className="info-block-title">Help us show Yahoo there&apos;s demand</h3>
            </div>
            <p>
              Right now YCal is independent. If enough people find it useful, our plan is to reach out to
              Yahoo and work toward a <strong>real, supported product</strong> together — the calendar
              experience millions of Yahoo users deserve on mobile.
            </p>
            <p>
              Leave an <strong>honest review</strong> wherever you installed the app (App Store,{' '}
              <a href={playStoreUrl('review_note')} target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
              , etc.). Reviews and strong numbers make a serious conversation easier.
            </p>
          </article>
        </div>
      </section>

      <section className="creator-section home-creator" aria-labelledby="creator-heading">
        <header className="home-section-head home-section-head--compact">
          <span className="home-kicker">Personal note</span>
          <h2 id="creator-heading" className="home-section-title">
            From the creator
          </h2>
        </header>
        <div className="creator-story">
          <p>
            I&apos;ve been a Yahoo user for a very long time — it&apos;s my primary email. So many times
            when I got a meeting invite, I still missed it: no reliable reminder, no proper notification,
            or the calendar experience on my phone simply wasn&apos;t enough to keep me on time.
          </p>
          <p>
            That&apos;s why I built YCal. I made it for myself first, and I&apos;ve been using it daily for a
            long time. I&apos;m sharing it with you in the hope it helps you the same way — so invites
            don&apos;t slip through the cracks.
          </p>
        </div>
        {hasCreatorDetails ? (
          <div className="creator-meta">
            {CREATOR.name ? <p className="creator-name">{CREATOR.name}</p> : null}
            {CREATOR.line ? <p className="creator-line">{CREATOR.line}</p> : null}
            {(CREATOR.email || (CREATOR.links?.length ?? 0) > 0) ? (
              <div className="creator-links">
                {CREATOR.email ? (
                  <a href={`mailto:${CREATOR.email}`}>{CREATOR.email}</a>
                ) : null}
                {CREATOR.links?.map((item) => (
                  <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </section>

      <section className="home-faq" aria-labelledby="faq-heading">
        <header className="home-section-head home-section-head--compact">
          <span className="home-kicker">Questions</span>
          <h2 id="faq-heading" className="home-section-title">
            Frequently asked
          </h2>
        </header>
        <div className="faq-list">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="home-final-cta" aria-labelledby="final-cta-heading">
        <h2 id="final-cta-heading" className="home-section-title">
          Stop missing meetings from Yahoo
        </h2>
        <p className="tagline">Set up takes about two minutes with a Yahoo app password.</p>
        <p className="home-store-cta">
          <a
            className="home-store-cta-btn"
            href={playStoreUrl('footer_cta')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get it free on Google Play
          </a>
        </p>
      </section>
    </div>
  )
}
