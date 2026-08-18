"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { trackAnalyticsEvent } from "../lib/analytics";

export default function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Submission failed");
      trackAnalyticsEvent("generate_lead", {
        form_location: "free_website_demo_page",
        lead_type: "free_demo",
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="seo-form-card" id="request-demo" aria-labelledby="request-demo-title">
      <div>
        <p className="seo-kicker">Request the direction</p>
        <h2 id="request-demo-title">Tell us what the business actually needs.</h2>
        <p>Accurate details and public links help us decide whether the request fits the free concept process.</p>
      </div>
      <form onSubmit={submit}>
        <input type="hidden" name="access_key" value="90f82656-9d87-4f58-965e-fb7bd90a0019" />
        <input type="hidden" name="subject" value="New Project Monet free demo request" />
        <input type="hidden" name="from_name" value="Project Monet Website" />
        <input type="hidden" name="source" value="projectmonet.space free demo page" />
        <input className="botcheck" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />
        <div className="field-pair">
          <label><span>Your name</span><input name="name" autoComplete="name" required maxLength={80} /></label>
          <label><span>Business name</span><input name="business_name" required maxLength={120} /></label>
        </div>
        <label><span>Type of business</span><input name="business_type" placeholder="Dental clinic, restaurant, salon…" required maxLength={100} /></label>
        <div className="field-pair">
          <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" required maxLength={30} /></label>
          <label><span>Email address</span><input name="email" type="email" autoComplete="email" required maxLength={120} /></label>
        </div>
        <label>
          <span>Google Business Profile</span>
          <select name="google_business_profile" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="I don't know">I don&apos;t know</option>
          </select>
        </label>
        <label><span>Business link or context <small>Optional</small></span><textarea name="message" rows={4} maxLength={1200} placeholder="Share your website, Google profile, location or the problem you want the website to solve." /></label>
        <button className="form-submit" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending request…" : "Request Free Demo"}
          {status !== "submitting" && <ArrowUpRight size={17} />}
        </button>
        <div className={`form-status ${status}`} aria-live="polite" role="status">
          {status === "success" && <><strong>Request received.</strong><span>We&apos;ll review the details and reply through the contact information you supplied.</span></>}
          {status === "error" && <><strong>We couldn&apos;t send that.</strong><span>Try again or email contact@projectmonet.space.</span></>}
        </div>
        <p className="form-disclaimer">The free demo is a concept preview—not a complete website or revision round. Full work begins after project confirmation and advance payment.</p>
        <p className="form-privacy">By submitting, you agree that we may use your information to respond as described in our <a href="/privacy">Privacy Policy</a>.</p>
      </form>
    </section>
  );
}
