export function Privacy() {
  return (
    <article className="legal-page">
      <h1>Privacy policy</h1>
      <p className="updated">Last updated: May 11, 2026</p>

      <p>
        This policy describes how YCal approaches privacy. The YCal mobile application (the
        &quot;App&quot;) is an independent, free client for Yahoo Calendar over standard CalDAV
        protocols. It is not affiliated with, endorsed by, or officially supported by Yahoo or Verizon
        Media.
      </p>

      <h2>No YCal-operated servers or accounts</h2>
      <p>
        YCal does not run a backend service for the App or this website. There is no YCal cloud
        database, no YCal user accounts, and no YCal-hosted API that receives or stores your calendar
        data or credentials. We do not sell personal information because we do not collect it on our
        own infrastructure.
      </p>

      <h2>This website</h2>
      <p>
        This site is a static marketing page (built with standard web tooling). It does not embed
        sign-in, forms, analytics, or advertising trackers in the published code. Your browser still
        connects to whichever host serves the files (for example GitHub Pages or another static host);
        that provider may process routine technical data such as IP address and access logs under its
        own policies, which we do not control.
      </p>

      <h2>The App: what stays on your device</h2>
      <p>
        To work offline and avoid signing in every launch, the App stores sign-in details in the
        device&apos;s secure credential storage and keeps a local copy of synced calendars and events
        on the device (for example in a local database). That data remains on your phone or tablet
        unless you remove the App or use in-app sign-out and data-clearing options as provided. YCal
        does not receive a copy on our servers-because there are none for that purpose.
      </p>

      <h2>Direct connection to Yahoo</h2>
      <p>
        Calendar sync and authentication traffic go directly between your device and Yahoo&apos;s
        services (or other services you configure, if applicable), not through a YCal intermediary.
        Yahoo hosts your account and calendar data and sets the rules for that processing; review
        Yahoo&apos;s privacy policy and terms when you use their services.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, use the contact or support channel published for YCal when available
        (for example project links from the repository or app store listing).
      </p>

      <h2>Changes</h2>
      <p>We may update this policy occasionally. The &quot;Last updated&quot; date will change when we do.</p>
    </article>
  )
}
