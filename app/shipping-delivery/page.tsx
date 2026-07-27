import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy — Project Monet",
  description: "How Project Monet digitally delivers website concepts, project milestones, websites and access credentials.",
  alternates: { canonical: "/shipping-delivery" },
};

export default function ShippingDeliveryPolicy() {
  return (
    <LegalShell
      title="Shipping / Delivery"
      description="Project Monet provides digital services. Nothing is physically shipped unless a written project agreement expressly says otherwise."
    >
      <section>
        <h2>Digital delivery only</h2>
        <p>Website concepts, design previews, project updates and completed work are delivered electronically. Delivery may include a private or public preview link, email, shared files, repository access, hosting access, domain access or another digital handover method agreed with the client.</p>
      </section>

      <section>
        <h2>Delivery timelines</h2>
        <p>Free demo timing is communicated after we review a complete request. Paid-project timelines are stated in the applicable proposal, quotation, statement of work or written confirmation and begin only after the required payment and client materials are received.</p>
        <p>Timelines are estimates unless expressly agreed as fixed. Missing content, delayed feedback, revision requests, scope changes, third-party outages or delayed approvals can move the delivery date.</p>
      </section>

      <section>
        <h2>Client responsibilities</h2>
        <p>To keep delivery on schedule, the client must provide accurate business information, content, images, brand assets, credentials, approvals and feedback reasonably requested for the project. The client is responsible for confirming that submitted materials may lawfully be used.</p>
      </section>

      <section>
        <h2>Completion and handover</h2>
        <p>A milestone is considered delivered when its preview, files or access details are sent to the contact method agreed for the project. Final launch, source-file transfer, code or repository handover, and transfer of relevant account access occur after the agreed final payment clears and the engagement requirements are complete.</p>
        <p>Third-party services such as domains, hosting, plugins and external platforms remain subject to their own availability, licences and transfer rules.</p>
      </section>

      <section>
        <h2>Delivery support</h2>
        <p>If you cannot access a delivered item, contact <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a> or call <a href="tel:+918290096163">+91 82900 96163</a>. We will verify the delivery details and resend or restore access where reasonably possible.</p>
      </section>
    </LegalShell>
  );
}
