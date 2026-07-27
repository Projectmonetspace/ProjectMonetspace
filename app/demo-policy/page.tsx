import type { Metadata } from "next";
import LegalShell from "../components/legal-shell";

export const metadata: Metadata = {
  title: "Demo Policy — Project Monet",
  description: "Evaluation-only terms and intellectual-property rules for free website and design demos created by Project Monet.",
  alternates: { canonical: "/demo-policy" },
};

export default function DemoPolicy() {
  return (
    <LegalShell
      title="Demo Policy"
      description="Our free demo lets you evaluate a possible creative direction before committing to a paid website project."
    >
      <section>
        <h2>Evaluation purpose</h2>
        <p>Free demo websites, homepage concepts, layouts and design previews are created solely for evaluation. A demo is intended to help a prospective client assess Project Monet&apos;s proposed direction; it is not a completed website, licensed template, transferable deliverable or free commercial asset.</p>
      </section>

      <section>
        <h2>Project Monet retains ownership</h2>
        <p>The demo—including its original design direction, layout, presentation, code, copy created by Project Monet, generated or selected assets and related working files—remains the intellectual property of Project Monet unless and until rights are expressly transferred in writing.</p>
        <p>Client-provided names, logos, trademarks, photographs and other pre-existing materials remain the property of their respective owners. Their appearance in a demo does not transfer ownership of the demo itself.</p>
      </section>

      <section>
        <h2>Prohibited use</h2>
        <p>Without prior written permission from Project Monet, a prospective client or any third party may not copy, publish, deploy, host, reuse, reproduce, modify, distribute, sell, reverse engineer or commercially use the demo or any substantial part of it.</p>
        <p>The demo may not be given to another designer, developer, agency, AI service or vendor to recreate, complete or derive a commercial website from it.</p>
      </section>

      <section>
        <h2>When rights transfer</h2>
        <p>Ownership and usage rights are transferred only after the parties finalize the project contract or written engagement, the agreed scope is completed, and the agreed payment—including final payment—is received in full. The project agreement will identify what is transferred and any third-party licences or exclusions that continue to apply.</p>
      </section>

      <section>
        <h2>If you do not proceed</h2>
        <p>If a prospective client declines, does not respond or otherwise decides not to proceed with a paid engagement, Project Monet retains all rights to the demo and its assets. Project Monet may remove demo access at any time and may reuse general, non-confidential ideas, components or know-how in future work.</p>
      </section>

      <section>
        <h2>Permission requests</h2>
        <p>Questions about demo use or requests for written permission can be sent to <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>. Silence or access to a demo link does not constitute permission.</p>
      </section>
    </LegalShell>
  );
}
