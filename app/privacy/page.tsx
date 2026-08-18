import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Project Monet",
  description: "How Project Monet collects, uses, stores and protects information through projectmonet.space.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="This policy explains what Project Monet collects through this website, why we use it, who processes it and the choices available to you."
      effectiveDate="August 18, 2026"
    >
      <section>
        <h2>Who is responsible for your information</h2>
        <p>Project Monet operates projectmonet.space and is responsible for deciding how information collected through this website is used. Privacy questions and requests can be sent to <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>.</p>
      </section>

      <section>
        <h2>Information you provide</h2>
        <p>When you request a free demo or contact us, we may collect your name, business name, business type, phone number, email address, Google Business Profile status, links and any message you choose to provide.</p>
      </section>

      <section>
        <h2>Information collected automatically</h2>
        <p>Vercel, Web3Forms and related infrastructure may process limited technical information such as IP address, browser and device details, request or submission timestamps, referring pages and security logs to host the website, deliver form submissions and prevent abuse.</p>
        <p>If you accept analytics cookies, Google Analytics collects website-use data including page views, session statistics, approximate location derived from network information, browser and device information, referral source and enabled interaction events such as scrolling, outbound link clicks, file downloads, site searches, video engagement and form-start or form-submit events where available. We do not intentionally configure Analytics to collect the text entered into form fields.</p>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To review and respond to your enquiry.</li>
          <li>To prepare or discuss a requested website concept.</li>
          <li>To communicate about a possible or active project.</li>
          <li>To protect the form and website from spam, fraud and misuse.</li>
          <li>To maintain business records and improve our service.</li>
          <li>With your consent, to measure website audiences and interactions so we can improve content, navigation and marketing decisions.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>

      <section>
        <h2>Consent and other grounds for processing</h2>
        <p>We ask for consent before enabling non-essential Google Analytics cookies. You may reject them without losing access to the website and may change your choice at any time through the Cookie settings control.</p>
        <p>We process enquiry information to take steps you request before a possible contract and to communicate with you. Essential hosting, security and record-keeping information may be processed where necessary to provide and protect the website, comply with law and manage legitimate business records.</p>
      </section>

      <section>
        <h2>Service providers and sharing</h2>
        <p>The website is hosted by Vercel. Form submissions are processed by Web3Forms and delivered to Project Monet&apos;s email account. If you accept analytics, website usage is measured by Google Analytics. These providers may process information under their own terms as necessary to provide their services.</p>
        <p>We may also disclose information where required by law, to protect legal rights or security, or in connection with professional advisers and a genuine business transfer. Portfolio links may open third-party websites whose privacy practices are controlled by their respective owners.</p>
      </section>

      <section>
        <h2>Analytics and cookies</h2>
        <p>Analytics is disabled by default and the Google Analytics tag loads only after you select “Accept analytics.” Advertising storage, advertising user-data and advertising-personalisation consent remain denied because this site does not currently use Google Analytics for personalised advertising or remarketing.</p>
        <p>When accepted, Google Analytics may set first-party <code>_ga</code> and <code>_ga_&lt;container-id&gt;</code> cookies to distinguish visitors and maintain session state. We do not intentionally send names, email addresses, phone numbers or free-form enquiry content to Google Analytics. See our <a href="/cookies">Cookie Policy</a> for cookie durations and controls.</p>
      </section>

      <section>
        <h2>How long we keep information</h2>
        <p>Enquiry information is generally retained for up to 24 months after our last meaningful contact unless you become a client, ask us to delete it, or a longer period is reasonably required for an active project, accounting, dispute prevention or a legal obligation.</p>
        <p>Google Analytics user-level and event-level data is retained according to the property&apos;s configured retention period, which will not exceed 14 months for this website. Some aggregated reports may remain available without directly identifying an individual visitor. Provider security and delivery logs are retained under the applicable provider&apos;s settings and policies.</p>
      </section>

      <section>
        <h2>Security</h2>
        <p>We use reasonable technical and organisational safeguards appropriate to the website and the information handled. No internet transmission or storage system can be guaranteed completely secure.</p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p>Depending on applicable law, you may ask us to access, correct, update or delete information you submitted; withdraw consent; object to or restrict certain processing; or ask us to stop non-essential follow-up communication. Withdrawal does not affect processing that was lawful before withdrawal, and some records may be retained where legally or operationally required.</p>
        <p>You can withdraw analytics consent at any time using Cookie settings. We will stop future analytics storage and remove accessible Google Analytics cookies from this domain. You may also clear cookies in your browser.</p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>This website and its services are intended for business owners and adults. We do not knowingly collect personal information from children.</p>
      </section>

      <section>
        <h2>International processing</h2>
        <p>Our service providers may process information in countries other than your own. Where required, we rely on the provider&apos;s contractual and legal safeguards for those transfers.</p>
      </section>

      <section>
        <h2>Policy updates</h2>
        <p>We may update this policy as the website, providers or service changes. The effective date above will be revised when material updates are published.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>For privacy questions or requests, email <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>. Please describe the information or request clearly so we can respond appropriately.</p>
      </section>
    </LegalShell>
  );
}
