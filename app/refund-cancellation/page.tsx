import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Project Monet",
  description: "Refund and cancellation terms for Project Monet digital website design and development services.",
  alternates: { canonical: "/refund-cancellation" },
};

export default function RefundCancellationPolicy() {
  return (
    <LegalShell
      title="Refund & Cancellation"
      description="Because our services are custom and time-based, refund eligibility depends on whether work has begun and what has already been delivered."
    >
      <section>
        <h2>Free demos</h2>
        <p>Free demo concepts do not require payment and therefore have no refund value. Requesting or receiving a free demo does not obligate you to purchase a paid website.</p>
      </section>

      <section>
        <h2>Paid projects and advance payments</h2>
        <p>Paid work begins after the scope, price and payment schedule are confirmed in writing and the required advance is received. Once research, planning, design, development, content work, procurement or other project work has begun, the advance is generally non-refundable because it reserves capacity and covers work performed.</p>
        <p>If you cancel before any paid work begins, you may request a refund of the amount received, less any non-recoverable payment-processing charges, third-party costs or purchases made with your approval.</p>
      </section>

      <section>
        <h2>Cancellation after work begins</h2>
        <p>You may cancel a project by emailing <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>. Amounts already paid will be applied to work completed, time reserved and approved third-party costs. If completed work exceeds the amount paid, any outstanding amount remains payable before eligible work files are released.</p>
        <p>Project-specific proposals or agreements may set different cancellation milestones. Where they do, those written project terms take priority.</p>
      </section>

      <section>
        <h2>Refund exceptions</h2>
        <p>If Project Monet cancels a paid project for reasons unrelated to client breach, misuse or non-cooperation, we will refund any unearned portion of fees after accounting for completed work and approved non-recoverable costs.</p>
        <p>Refunds are not available for change of mind after approval, completed milestones, delivered custom work, delays caused by missing client material or feedback, domain or hosting purchases, software licences, advertising spend, stock assets or other third-party charges.</p>
      </section>

      <section>
        <h2>How to request a refund</h2>
        <p>Email <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a> with your name, business name, project reference, payment date, payment amount and reason for the request. We will review the request against the written project scope and work completed.</p>
        <p>Approved refunds are returned to the original payment method where possible. Processing time can vary by bank, card network or payment provider.</p>
      </section>
    </LegalShell>
  );
}
