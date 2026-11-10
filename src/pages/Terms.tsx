import { Link } from 'react-router-dom'

const APPLE_STANDARD_EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'

export function Terms() {
  return (
    <article className="legal-page">
      <h1>Terms of use</h1>
      <p className="updated">Last updated: November 10, 2026</p>

      <p>
        These terms (&quot;Terms&quot;) apply to your use of YCal, including its documentation and this
        website. &quot;We&quot; and &quot;us&quot; means the independent developer of YCal. The YCal mobile
        application (the &quot;App&quot;) is an independent calendar client that connects to calendar
        accounts you already have, such as a Yahoo account, over the standard CalDAV protocol.
      </p>

      <h2>Independent app; trademarks</h2>
      <p>
        YCal is an independent product. It is <strong>not</strong> made by, affiliated with, endorsed by,
        sponsored by, or supported by Yahoo Inc. or its affiliates, Apple Inc., or Google LLC. Nothing
        in the App, its store listings, or this website is meant to suggest any partnership, licence, or
        approval from them.
      </p>
      <p>
        Yahoo, Yahoo Mail, and Yahoo Calendar are trademarks of Yahoo Inc. or its affiliates. Apple,
        iPhone, iPad, and App Store are trademarks of Apple Inc. Google, Android, and Google Play are
        trademarks of Google LLC. Other names belong to their respective owners. We use these names only
        in plain text, to tell you which accounts and devices YCal works with. YCal does not use any
        third-party logo, icon, or brand artwork, and its name, icon, and design are its own.
      </p>
      <p>
        If you own a trademark mentioned here and have a concern about how it is used, email{' '}
        <a href="mailto:ycal.developer@gmail.com">ycal.developer@gmail.com</a> and we will review it and
        respond promptly, including by changing or removing the reference.
      </p>

      <h2>Eligibility</h2>
      <p>
        To use the App you must be old enough to hold the calendar account you sign in with (for example
        a Yahoo account) and the store account you buy through (a Google Play account or an Apple
        Account), under their own terms, and old enough to enter into these Terms under the laws that
        apply to you.
      </p>

      <h2>Third-party accounts and services</h2>
      <p>
        You sign in to YCal with your own calendar account. That account, its data, and its sign-in
        rules belong to the provider (for example Yahoo), not to us, and your use of it stays subject to
        the provider&apos;s own terms and privacy policy. We do not control those services. A provider
        can change, limit, or end CalDAV access or app passwords at any time; if that happens, some or
        all of YCal may stop working, and we are not responsible for that change.
      </p>
      <p>
        You are responsible for keeping your calendar account and any app passwords you use with YCal
        secure. Follow your provider&apos;s guidance on credentials and account safety, and revoke an app
        password from your provider&apos;s account settings if you stop using YCal.
      </p>

      <h2>Backend services are limited</h2>
      <p>
        YCal is client software. We do not run a hosted service that stores your calendar: your
        calendar data and its sign-in credentials pass directly between your device and your calendar
        provider. The only backend services we operate are (a) a narrow purchase-verification service
        that confirms and remembers whether an installation is entitled to Premium, and (b) a service
        that records your signed-in account email address(es) and basic device information so we can
        reach you about your account or subscription. Both are described in our{' '}
        <Link to="/privacy">Privacy policy</Link>.
      </p>

      <h2>Plans and Premium</h2>
      <p>
        YCal is a paid app. After you sign in, using the App requires Premium, offered as an
        auto-renewing monthly or yearly subscription or, where shown, as a one-time Lifetime purchase.
        Purchases are made through the store you installed the App from: Google Play Billing on Android
        or Apple&apos;s App Store on iPhone and iPad. If you were already signed in to the Android App
        before it required Premium, you keep the features that were free at that time on that
        installation; reinstalling the App or using it on another device requires a plan.
      </p>
      <p>
        <strong>Price and renewal.</strong> The price is shown in the App and in the store before you
        confirm, and is charged to your Google Play account or Apple Account. Subscriptions renew
        automatically for the same term at the then-current price unless canceled at least 24 hours
        before the end of the current period; your account is charged for renewal within 24 hours before
        the period ends. Price changes follow the store&apos;s own rules and notices. A Lifetime purchase
        is a single payment that does not renew and unlocks Premium for as long as YCal and its
        purchase-verification service are offered.
      </p>
      <p>
        <strong>Canceling.</strong> Manage or cancel a subscription in Google Play (Payments &amp;
        subscriptions, then Subscriptions) or, on iPhone and iPad, in Settings, then your name, then
        Subscriptions. Deleting the App or signing out does not cancel billing.
      </p>
      <p>
        <strong>Free trials.</strong> A plan may include a free trial, shown before you confirm.
        Eligibility is decided by the store (typically one trial per store account). Unless you cancel at
        least 24 hours before the trial ends, it converts to a paid subscription at the price shown. Where
        the store says so, any unused part of a free trial is forfeited when you buy a subscription.
      </p>
      <p>
        <strong>Refunds.</strong> Payments are processed by Google or Apple, not by us. Refunds are
        handled under Google Play&apos;s or Apple&apos;s own refund policies. A &quot;Restore
        purchases&quot; option in the App reconnects an existing purchase after a reinstall or on a new
        device signed in to the same store account.
      </p>
      <p>
        Premium features are described in the App and may change over time; we will make reasonable
        efforts to keep paying users informed of material changes.
      </p>

      <h2>App Store (Apple) users</h2>
      <p>If you got the App from Apple&apos;s App Store, the following also applies:</p>
      <ul>
        <li>
          These Terms are between you and us only, not with Apple. We, not Apple, are solely responsible
          for the App and its content.
        </li>
        <li>
          Your licence to use the App is limited to Apple-branded devices you own or control, as allowed
          by the Usage Rules in Apple&apos;s Media Services Terms and Conditions. Where these Terms do not
          address something, Apple&apos;s{' '}
          <a href={APPLE_STANDARD_EULA} target="_blank" rel="noopener noreferrer">
            Licensed Application End User License Agreement
          </a>{' '}
          applies.
        </li>
        <li>Apple has no obligation to provide maintenance or support for the App.</li>
        <li>
          If the App fails to conform to any applicable warranty, you may notify Apple and Apple will
          refund the purchase price (if any) for the App; to the maximum extent permitted by law, Apple has
          no other warranty obligation regarding the App.
        </li>
        <li>
          We, not Apple, are responsible for addressing any claims by you or a third party relating to
          the App or your possession or use of it, including product liability claims, claims that the
          App fails to conform to legal or regulatory requirements, and consumer protection or privacy
          claims.
        </li>
        <li>
          If a third party claims that the App or your use of it infringes their intellectual property
          rights, we, not Apple, are responsible for the investigation, defence, settlement, and
          discharge of that claim.
        </li>
        <li>
          You confirm that you are not located in a country subject to a U.S. Government embargo or
          designated as a &quot;terrorist supporting&quot; country, and that you are not on any U.S.
          Government list of prohibited or restricted parties.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them
          against you once you accept them.
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <p>
        Use YCal in line with your calendar provider&apos;s terms, the terms of the store you got it from,
        and applicable law. Do not use the App to abuse services, violate others&apos; privacy, or get
        around security controls.
      </p>

      <h2>No warranty</h2>
      <p>
        To the maximum extent permitted by law, YCal is provided &quot;as is&quot; and &quot;as
        available&quot; without warranty of any kind. Calendar sync depends on third-party services and
        protocol behaviour that we do not control, and features may change as those services change.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for any indirect, incidental, special,
        or consequential damages, or for missed events, reminders, or lost data, arising from your use of
        YCal or this site. Nothing in these Terms limits rights you have under consumer law that cannot
        be excluded.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it and canceling any subscription in your
        store account. We may discontinue the App or the purchase-verification service at any time; if we
        do, subscribers should look to Google Play or Apple for billing remedies for any unused paid
        term.
      </p>

      <h2>This website</h2>
      <p>
        This website is provided for information only and does not create a separate service agreement.
        Links to third-party websites (for example a provider&apos;s help page) are for convenience; we
        are not responsible for their content.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href="mailto:ycal.developer@gmail.com">ycal.developer@gmail.com</a>.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms. The &quot;Last updated&quot; date changes when we do, and continued use
        after a change means you accept the updated Terms.
      </p>
    </article>
  )
}
