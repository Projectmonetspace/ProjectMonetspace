import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

const policyLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
  { href: "/refund-cancellation", label: "Refunds" },
  { href: "/shipping-delivery", label: "Delivery" },
  { href: "/demo-policy", label: "Demo Policy" },
  { href: "/contact", label: "Contact" },
];

type LegalShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  effectiveDate?: string;
};

export default function LegalShell({ title, description, children, effectiveDate = "July 27, 2026" }: LegalShellProps) {
  return (
    <main className="legal-page">
      <nav className="legal-nav" aria-label="Policy page navigation">
        <Link className="not-found-brand" href="/" aria-label="Project Monet home">
          <span className="brand-orbit" aria-hidden="true"><i></i><i></i></span>
          <span>Project Monet</span>
        </Link>
        <Link className="legal-back" href="/"><ArrowLeft size={15} /> Home</Link>
      </nav>

      <article className="legal-content">
        <header>
          <p className="section-kicker">Business policy · Effective {effectiveDate}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        {children}
      </article>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} Project Monet</span>
        <div>
          {policyLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </div>
      </footer>
    </main>
  );
}
