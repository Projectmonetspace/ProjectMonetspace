import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Project Monet",
  description: "How Project Monet collects, uses, stores and protects information submitted through projectmonet.space.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <nav className="legal-nav" aria-label="Legal page navigation">
        <Link className="not-found-brand" href="/" aria-label="Project Monet home">
          <span className="brand-orbit" aria-hidden="true"><i></i><i></i></span>
          <span>Project Monet</span>
        </Link>
        <Link className="legal-back" href="/"><ArrowLeft size={15} /> Home</Link>
      </nav>

      <article className="legal-content">
        <header>
          <p className="section-kicker">Legal · Effective July 17, 2026</p>
          <h1>Privacy Policy</h1>
          <p>This policy explains how Project Monet handles information you provide through this website.</p>
        </header>

        <section>
          <h2>Information we collect</h2>
          <p>When you request a free demo or contact us, we may collect your name, business name, business type, phone number, email address, Google Business Profile status, links and any message you choose to provide.</p>
          <p>Our hosting and form providers may also process limited technical information such as IP address, browser information, device information and submission timestamps for security, delivery and abuse prevention.</p>
        </section>

        <section>
          <h2>How we use information</h2>
          <ul>
            <li>To review and respond to your enquiry.</li>
            <li>To prepare or discuss a requested website concept.</li>
            <li>To communicate about a possible or active project.</li>
            <li>To protect the form and website from spam, fraud and misuse.</li>
            <li>To maintain business records and improve our service.</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </section>

        <section>
          <h2>Service providers</h2>
          <p>The website is hosted by Vercel. Form submissions are processed by Web3Forms and delivered to Project Monet&apos;s email account. These providers may process information under their own privacy terms as necessary to provide their services.</p>
          <p>Portfolio links may open third-party websites. Their privacy practices are controlled by their respective owners.</p>
        </section>

        <section>
          <h2>Retention and security</h2>
          <p>We retain enquiry information only for as long as reasonably needed to respond, manage a potential or active business relationship, maintain necessary records and meet applicable legal obligations. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed completely secure.</p>
        </section>

        <section>
          <h2>Your choices and rights</h2>
          <p>You may ask us to access, correct or delete information you submitted, subject to applicable law and legitimate record-keeping requirements. You may also ask us to stop non-essential follow-up communication.</p>
        </section>

        <section>
          <h2>Children&apos;s privacy</h2>
          <p>This website and its services are intended for business owners and adults. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2>International processing</h2>
          <p>Our service providers may process information in countries other than your own. By submitting the form, you understand that information may be transferred and processed where those providers operate, subject to applicable safeguards.</p>
        </section>

        <section>
          <h2>Policy updates</h2>
          <p>We may update this policy as the website or service changes. The effective date above will be revised when material updates are published.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For privacy questions or requests, email <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>.</p>
        </section>
      </article>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} Project Monet</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </footer>
    </main>
  );
}
