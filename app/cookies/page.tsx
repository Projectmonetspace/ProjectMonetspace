import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Cookie Policy — Project Monet",
  description: "How Project Monet uses essential browser storage and optional Google Analytics cookies on projectmonet.space.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicy() {
  return (
    <LegalShell
      title="Cookie Policy"
      description="This policy explains the browser storage and optional analytics cookies used on projectmonet.space, including how to accept, reject or withdraw consent."
      effectiveDate="August 18, 2026"
    >
      <section>
        <h2>What cookies are</h2>
        <p>Cookies are small text files stored by a website in your browser. Similar browser storage can remember settings without being a cookie. We separate storage needed to remember your privacy choice from optional analytics storage.</p>
      </section>

      <section>
        <h2>Storage used on this website</h2>
        <div className="legal-table-wrap">
          <table>
            <thead><tr><th>Name</th><th>Provider</th><th>Purpose</th><th>Typical duration</th></tr></thead>
            <tbody>
              <tr><td><code>pm_analytics_consent</code></td><td>Project Monet</td><td>Local storage that remembers whether you accepted or rejected analytics.</td><td>Until you clear site data or change your choice.</td></tr>
              <tr><td><code>_ga</code></td><td>Google Analytics</td><td>Distinguishes one visitor from another for audience measurement.</td><td>Up to 2 years, subject to browser limits.</td></tr>
              <tr><td><code>_ga_&lt;container-id&gt;</code></td><td>Google Analytics</td><td>Persists the state of an analytics session.</td><td>Up to 2 years, subject to browser limits.</td></tr>
            </tbody>
          </table>
        </div>
        <p>The Google Analytics cookies are not set unless you accept analytics. Their duration can be shortened by browser restrictions, cookie deletion or a change to our configuration.</p>
      </section>

      <section>
        <h2>What analytics measures</h2>
        <p>With consent, Google Analytics helps us measure visitor and session counts, pages viewed, approximate location, browser and device details, referrals and enabled interactions such as scrolling and outbound clicks. This information is used to understand website performance and improve content and navigation.</p>
        <p>We do not currently grant Google advertising-storage, advertising user-data or advertising-personalisation consent, and we do not use these cookies for personalised advertising or remarketing.</p>
      </section>

      <section>
        <h2>Your controls</h2>
        <p>On your first visit, analytics is off until you choose “Accept analytics.” Selecting “Reject optional cookies” keeps it off. You can reopen the banner with the Cookie settings button available on every page and change your choice at any time.</p>
        <p>You can also delete cookies or block them in your browser. Blocking optional analytics does not prevent you from viewing the site or submitting the demo-request form.</p>
      </section>

      <section>
        <h2>Google information</h2>
        <p>Google explains its Analytics cookie usage and how it processes information from websites using its services. Those materials are available in <a href="https://support.google.com/analytics/answer/11397207">Google Analytics Cookie Usage</a> and <a href="https://policies.google.com/technologies/partner-sites">How Google uses information from partner sites</a>.</p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>We will update this policy if the storage, analytics configuration or purposes materially change. Questions can be sent to <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>.</p>
      </section>
    </LegalShell>
  );
}
