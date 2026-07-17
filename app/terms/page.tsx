import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Terms — Project Monet",
  description: "Terms governing use of the Project Monet website and free website concept request.",
  alternates: { canonical: "/terms" },
};

export default function WebsiteTerms() {
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
          <h1>Website Terms</h1>
          <p>These terms govern your use of projectmonet.space. A paid client project is governed by its separate proposal, agreement and statement of work.</p>
        </header>

        <section>
          <h2>Website use</h2>
          <p>You may use this website to learn about Project Monet, view public work examples and submit a genuine business enquiry. You must not misuse the website, interfere with its operation, attempt unauthorized access, submit unlawful or deceptive content, or use automated systems to abuse the form.</p>
        </section>

        <section>
          <h2>Free demo requests</h2>
          <p>A free demo is a small homepage concept intended to show a possible visual direction. It is not a complete website, a revision round, an SEO campaign, a guaranteed deliverable or a commitment to accept every request.</p>
          <p>Project Monet may decline a request, ask for more information or limit the concept based on availability and fit. Full website work begins only after the scope is confirmed and the required advance payment is received.</p>
        </section>

        <section>
          <h2>Pricing and service information</h2>
          <p>Website prices shown on this site are starting package prices. INR pricing is for Indian clients and USD pricing is for international clients. Domain, hosting, paid tools, add-ons and maintenance are separate unless a written proposal expressly states otherwise.</p>
          <p>Final scope, price, timing, revisions, payment terms, ownership and handover terms are confirmed in project-specific documents before paid work begins.</p>
        </section>

        <section>
          <h2>Ownership and intellectual property</h2>
          <p>Project Monet owns this website&apos;s original branding, copy, design and code unless otherwise stated. External portfolio websites, trademarks, images and content may belong to their respective owners.</p>
          <p>Ownership of paid client work is governed by the applicable client agreement. Project Monet&apos;s standard position is that agreed website assets, available code/files and relevant access are handed over after final payment, subject to third-party licenses and the written project scope.</p>
        </section>

        <section>
          <h2>External links</h2>
          <p>Portfolio and other external links are provided for reference. Project Monet does not control every third-party website and is not responsible for its availability, security, content or privacy practices.</p>
        </section>

        <section>
          <h2>No guarantees</h2>
          <p>Website examples and service descriptions do not guarantee search rankings, traffic, leads, calls, sales, revenue or any particular business result. Information on this site is general and may be updated.</p>
        </section>

        <section>
          <h2>Limitation</h2>
          <p>To the extent permitted by applicable law, Project Monet is not liable for indirect, incidental or consequential loss arising solely from use of, inability to use, or reliance on this public website. Nothing in these terms excludes rights or liability that cannot legally be excluded.</p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>We may update the website and these terms. Continued use after revised terms are published means the current version applies to subsequent website use.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>.</p>
        </section>
      </article>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} Project Monet</span>
        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </footer>
    </main>
  );
}
