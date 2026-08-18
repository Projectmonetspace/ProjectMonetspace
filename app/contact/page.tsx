import type { Metadata } from "next";
import Link from "next/link";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Contact — Project Monet",
  description: "Contact Project Monet for website services, project support, payments, policy questions and free demo requests.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <LegalShell
      title="Contact"
      description="Talk to Project Monet about a new website, an active project, a payment or any of our business policies."
    >
      <section>
        <h2>Business contact</h2>
        <p>Email: <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a></p>
        <p>Phone: <a href="tel:+918290096163">+91 82900 96163</a></p>
        <p>Website: <a href="https://www.projectmonet.space/">www.projectmonet.space</a></p>
      </section>

      <section>
        <h2>Service area</h2>
        <p>Project Monet is an India-based, online-first website design studio serving businesses in India and internationally. Services, meetings, approvals and delivery are generally handled digitally.</p>
      </section>

      <section>
        <h2>New projects</h2>
        <p>For a free homepage concept, use the <Link href="/#demo-form" data-analytics-event="request_demo_click" data-analytics-location="contact_page">Request Free Demo form</Link>. Include your business name, business type, contact details and any existing website or Google Business Profile so we can assess the request.</p>
      </section>

      <section>
        <h2>Project, payment or policy support</h2>
        <p>For an active project, payment query, cancellation request, delivery issue, privacy request or demo-permission question, email us from the address associated with your enquiry or project. Include your name, business name and relevant project or payment reference.</p>
      </section>

      <section>
        <h2>Response</h2>
        <p>We aim to acknowledge genuine business enquiries within two business days. Complex project, refund, privacy or account-access requests may require additional verification and review.</p>
      </section>
    </LegalShell>
  );
}
