import { Link } from 'react-router-dom'

export function Terms() {
  return (
    <article className="legal-page">
      <h1>Terms of use</h1>
      <p className="updated">Last updated: September 26, 2026</p>

      <p>
        These terms (&quot;Terms&quot;) apply to your use of YCal, including documentation and this
        website. The YCal mobile application (the &quot;App&quot;) is an independent client for Yahoo
        Calendar and is <strong>not</strong> an official Yahoo or Google product.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be old enough to hold a Yahoo account and a Google Play account under their respective
        terms, and to enter into these Terms under the laws that apply to you, to use the App.
      </p>

      <h2>Backend services are limited</h2>
      <p>
        YCal is distributed primarily as client software. We do not provide a hosted service that
        stores your calendar on our servers &mdash; that data and its sign-in credentials are handled
        directly between your device and Yahoo. The only backend service we operate is a narrow
        subscription-verification service described in our{' '}
        <Link to="/privacy">Privacy policy</Link>, used solely to confirm and remember whether a device is
        entitled to Premium. Operation of the App otherwise depends on your device, your network, and
        third-party services (such as Yahoo and Google Play) operating as they do today.
      </p>

      <h2>Premium subscriptions</h2>
      <p>
        YCal offers an optional, paid Premium upgrade sold as an auto-renewing monthly or yearly
        subscription through Google Play Billing. By purchasing Premium you agree that:
      </p>
      <p>
        Pricing is shown in the App and in Google Play at the time of purchase and is charged to your
        Google Play account. Subscriptions renew automatically for the same term and price (or the then
        current price, if changed with notice as required by Google Play policy) unless canceled at
        least 24 hours before the end of the current billing period. You can view, manage, or cancel
        your subscription at any time from your Google Play account&apos;s Subscriptions page &mdash;
        canceling in the App&apos;s settings does not by itself stop billing. Refunds, if any, are
        governed by Google Play&apos;s own refund policies, not by YCal directly. Premium features (for
        example multiple accounts, custom per-event reminders, on-demand sync, faster background sync,
        custom accent color, and calendar export) are described in the App and may change over time; we
        will make reasonable efforts to keep active subscribers informed of material changes. A
        &quot;Restore purchases&quot; option is available in the App for reinstalls or new devices.
      </p>

      <h2>No warranty</h2>
      <p>
        YCal is provided &quot;as is&quot; without warranty of any kind. Calendar sync depends on
        third-party services and protocol behavior; features may change as Yahoo, Google Play, or CalDAV
        behavior evolves. Use at your own risk.
      </p>

      <h2>Your Yahoo account</h2>
      <p>
        You are responsible for securing your Yahoo account and any app passwords you use with YCal.
        Follow Yahoo&apos;s guidance on credentials and account safety.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Use YCal in compliance with Yahoo&apos;s and Google Play&apos;s terms and applicable law. Do not
        use the App to abuse services, violate others&apos; privacy, or circumvent security controls.
      </p>

      <h2>Software and use</h2>
      <p>
        YCal&apos;s core features are offered free of charge, with an optional paid Premium upgrade as
        described above. Your use of the App is also subject to any end-user terms presented in the app
        store or at install time, if applicable. This website is provided for informational purposes
        only and does not create a separate cloud service agreement.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it and, if applicable, canceling your
        subscription through Google Play. We may discontinue the App or the subscription-verification
        service described above at any time; if we do, existing Premium subscribers should look to
        Google Play for billing remedies for any unused paid term.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, contributors and maintainers are not liable for any
        indirect or consequential damages arising from your use of YCal or this site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href="mailto:ycal.developer@gmail.com">ycal.developer@gmail.com</a>.
      </p>

      <h2>Changes</h2>
      <p>We may update these Terms. Continued use after changes means you accept the updated Terms.</p>
    </article>
  )
}
