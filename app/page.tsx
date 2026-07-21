"use client";

import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Menu,
  MonitorSmartphone,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

const work = [
  { title: "Ira Carats", category: "Jewellery", url: "https://iracarats.com/", image: "/work/ira-carats.jpg", position: "center 34%" },
  { title: "Dental Health", category: "Dental", url: "https://dental-health-landing.vercel.app/", image: "/work/dental-health.jpg", position: "center top" },
  { title: "Aidus", category: "Home Services", url: "https://aidus.app/", image: "/work/aidus.jpg", position: "center top" },
  { title: "Estatery", category: "Real Estate", url: "https://estatery-landing.vercel.app", image: "/work/estatery.jpg", position: "center top" },
  { title: "Mayank Harsh", category: "Portfolio", url: "https://mayankharsh.space", image: "/work/mayank-harsh.jpg", position: "center 28%" },
  { title: "Shop Co", category: "Ecommerce", url: "https://ecommerce-figma-build.vercel.app/shop-co.html", image: "/work/shop-co.jpg", position: "center top" },
  { title: "Speaker Store", category: "Ecommerce", url: "https://ecommerce-figma-build.vercel.app/speaker.html", image: "/work/speaker.jpg", position: "center top" },
  { title: "Vital Gym", category: "Fitness", url: "https://vitalgym-ashy.vercel.app", image: "/work/vital-gym.jpg", position: "center top" },
];

const pricing = [
  { name: "Starter Website", inr: "₹20,000", usd: "$299", label: "One-page presence" },
  { name: "Business Website", inr: "₹35,000", usd: "$499", label: "Up to five pages" },
  { name: "Growth Website", inr: "₹55,000+", usd: "$799+", label: "Search & lead foundations" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Project Monet",
    url: "https://www.projectmonet.space/",
    email: "contact@projectmonet.space",
    telephone: "+91-8290096163",
    logo: "https://www.projectmonet.space/favicon.svg",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Project Monet",
    url: "https://www.projectmonet.space/",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Design for Local Businesses",
    provider: { "@type": "Organization", name: "Project Monet" },
    areaServed: ["India", "Worldwide"],
    description:
      "Professional, mobile-friendly website design for local businesses with a small free homepage concept preview before a paid project begins.",
    offers: pricing.map((item) => ({
      "@type": "Offer",
      name: item.name,
      price: item.inr.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
    })),
  },
];

function animation(delay: number) {
  return { animationDelay: `${delay}ms` };
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [loadHeroVideo, setLoadHeroVideo] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: { effectiveType?: string; saveData?: boolean };
      }
    ).connection;
    const constrainedConnection =
      connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");

    const updateVideoPreference = () => {
      setLoadHeroVideo(desktop.matches && !reducedMotion.matches && !constrainedConnection);
    };

    const loadVideoAfterInteraction = () => {
      if (!desktop.matches && !reducedMotion.matches && !constrainedConnection) {
        setLoadHeroVideo(true);
      }
    };

    updateVideoPreference();
    desktop.addEventListener("change", updateVideoPreference);
    reducedMotion.addEventListener("change", updateVideoPreference);
    window.addEventListener("pointerdown", loadVideoAfterInteraction, { once: true, passive: true });
    window.addEventListener("keydown", loadVideoAfterInteraction, { once: true });

    return () => {
      desktop.removeEventListener("change", updateVideoPreference);
      reducedMotion.removeEventListener("change", updateVideoPreference);
      window.removeEventListener("pointerdown", loadVideoAfterInteraction);
      window.removeEventListener("keydown", loadVideoAfterInteraction);
    };
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cards = Array.from(gallery.querySelectorAll<HTMLElement>(".work-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        const closest = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (closest) setActiveProject(Number((closest.target as HTMLElement).dataset.index));
      },
      { root: gallery, threshold: [0.5, 0.65, 0.8] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function goToProject(index: number) {
    const next = Math.max(0, Math.min(work.length - 1, index));
    const card = galleryRef.current?.querySelector<HTMLElement>(`[data-index="${next}"]`);
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveProject(next);
  }

  function cardPosition(index: number) {
    const offset = index - activeProject;
    if (offset === 0) return "is-active";
    if (offset === -1) return "is-left";
    if (offset === 1) return "is-right";
    return offset < 0 ? "is-far-left" : "is-far-right";
  }

  async function submitDemoRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) throw new Error("Submission failed");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="site-header">
        <a className="brand animate-blur-fade-up" style={animation(0)} href="#top" aria-label="Project Monet home">
          <span className="brand-orbit" aria-hidden="true"><i></i><i></i></span>
          <span>Project Monet</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {["Work", "Pricing", "Ownership"].map((label, index) => (
            <a className="animate-blur-fade-up" style={animation(100 + index * 60)} href={`#${label.toLowerCase()}`} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="liquid-glass header-cta animate-blur-fade-up" style={animation(340)} href="#demo-form">
            Request Demo <ArrowUpRight size={15} />
          </a>
          <button
            className="liquid-glass menu-toggle animate-blur-fade-up"
            style={animation(360)}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu className={menuOpen ? "icon-hidden" : "icon-visible"} size={19} />
            <X className={menuOpen ? "icon-visible" : "icon-hidden"} size={19} />
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          {["Work", "Pricing", "Ownership"].map((label, index) => (
            <a href={`#${label.toLowerCase()}`} key={label} style={{ transitionDelay: `${index * 60}ms` }} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <a href="#demo-form" onClick={() => setMenuOpen(false)}><span>04</span>Request Free Demo</a>
        </div>
      </header>

      <main id="top">
        <section className="cinematic-hero" aria-labelledby="hero-title">
          <Image
            className="hero-poster"
            src="/hero-poster.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          {loadHeroVideo && (
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero-poster.webp"
              aria-hidden="true"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4" type="video/mp4" />
            </video>
          )}
          <div className="bottom-blur" aria-hidden="true" />

          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-meta animate-blur-fade-up" style={animation(300)}>
                <span><Sparkles size={16} /> Website studio</span>
                <span><MonitorSmartphone size={16} /> Local businesses</span>
                <span><Globe2 size={16} /> India & worldwide</span>
              </div>
              <h1 id="hero-title">
                See your website<br />before you pay.
              </h1>
              <p className="animate-blur-fade-up" style={animation(500)}>
                Professional websites for local businesses. Preview the direction first,
                start the full project only if it feels right.
              </p>
              <div className="hero-buttons">
                <a className="solid-button animate-blur-fade-up" style={animation(600)} href="#demo-form">
                  Request Free Demo <ArrowUpRight size={17} />
                </a>
                <a className="liquid-glass glass-button animate-blur-fade-up" style={animation(700)} href="#work">
                  View Work <ArrowDown size={17} />
                </a>
              </div>
            </div>
            <div className="hero-side animate-blur-fade-up" style={animation(800)}>
              <span>Design direction first.</span>
              <span>Full build after approval.</span>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="work-heading">
            <div>
              <p className="section-kicker">Selected live work · 01—08</p>
              <h2 id="work-title">A gallery you can enter.</h2>
            </div>
            <p>Swipe through the reel. Every frame opens a real, live website.</p>
          </div>

          <div className="gallery-stage">
            <div className="gallery-haze" aria-hidden="true" />
            <div className="curved-gallery" ref={galleryRef} aria-label="Scrollable live website gallery">
              <div className="gallery-spacer" aria-hidden="true" />
              {work.map((item, index) => (
                <article className={`work-card ${cardPosition(index)}`} data-index={index} key={item.url}>
                  <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} live website`}>
                    <div className={`work-image fallback-${index + 1}`}>
                      <Image
                        src={item.image}
                        alt={`${item.title} website preview`}
                        fill
                        sizes="(max-width: 767px) 272px, 28vw"
                        style={{ objectPosition: item.position }}
                      />
                      <div className="work-scrim" />
                      <span className="live-pill"><i></i> Live website</span>
                      <span className="open-project">Open <ArrowUpRight size={16} /></span>
                    </div>
                    <div className="work-caption">
                      <div>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.category}</p>
                    </div>
                  </a>
                </article>
              ))}
              <div className="gallery-spacer" aria-hidden="true" />
            </div>
          </div>

          <div className="gallery-controls">
            <div className="gallery-count"><span>{String(activeProject + 1).padStart(2, "0")}</span> / {String(work.length).padStart(2, "0")}</div>
            <div className="gallery-progress" aria-hidden="true"><i style={{ width: `${((activeProject + 1) / work.length) * 100}%` }} /></div>
            <div className="gallery-arrows">
              <button className="liquid-glass" type="button" aria-label="Previous project" onClick={() => goToProject(activeProject - 1)} disabled={activeProject === 0}><ChevronLeft size={18} /></button>
              <button className="liquid-glass" type="button" aria-label="Next project" onClick={() => goToProject(activeProject + 1)} disabled={activeProject === work.length - 1}><ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="pricing-intro">
            <p className="section-kicker">Transparent from the start</p>
            <h2 id="pricing-title">Three ways to begin.</h2>
          </div>
          <div className="price-list">
            {pricing.map((item, index) => (
              <article key={item.name}>
                <span>0{index + 1}</span>
                <div><h3>{item.name}</h3><small>{item.label}</small></div>
                <p>{item.inr} <i>/</i> {item.usd}</p>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            INR pricing is for Indian clients. USD pricing is for international clients.
            Domain, hosting, paid tools, add-ons and maintenance are charged separately.
          </p>
        </section>

        <section className="ownership-section" id="ownership" aria-label="Website ownership promise">
          <p className="section-kicker">Made for your business · Owned by your business</p>
          <h2>No lock-ins.<br />No hidden ownership.<br /><em>No hostage websites.</em></h2>
          <p>
            After final payment, you own the website, available code and files,
            and the relevant domain and hosting access. Maintenance is optional.
          </p>
        </section>

        <section className="demo-section" id="demo-form" aria-labelledby="demo-title">
          <div className="demo-intro">
            <p className="section-kicker">Free homepage concept</p>
            <h2 id="demo-title">Let&apos;s give your business a direction.</h2>
            <p>
              Share the essentials. We&apos;ll create a small homepage concept so you can
              see the visual direction before deciding on a full project.
            </p>
            <div className="demo-note">
              <span>What you receive</span>
              <p>A compact concept preview—not a complete website and not a revision round.</p>
            </div>
          </div>

          <form onSubmit={submitDemoRequest}>
            <input type="hidden" name="access_key" value="90f82656-9d87-4f58-965e-fb7bd90a0019" />
            <input type="hidden" name="subject" value="New Project Monet free demo request" />
            <input type="hidden" name="from_name" value="Project Monet Website" />
            <input type="hidden" name="source" value="projectmonet.space homepage" />
            <input
              className="botcheck"
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-label="Leave this field empty"
            />
            <div className="field-pair">
              <label><span>Your name</span><input name="name" type="text" autoComplete="name" placeholder="Mayank" required /></label>
              <label><span>Business name</span><input name="business_name" type="text" placeholder="Your business" required /></label>
            </div>
            <label><span>Type of business</span><input name="business_type" type="text" placeholder="Dental clinic, restaurant, salon…" required /></label>
            <div className="field-pair">
              <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91" required /></label>
              <label><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@business.com" required /></label>
            </div>
            <label>
              <span>Google Business Profile</span>
              <select name="google_business_profile" defaultValue="">
                <option value="" disabled>Select one</option><option value="Yes">Yes</option><option value="No">No</option><option value="I don't know">I don&apos;t know</option>
              </select>
            </label>
            <label><span>Anything we should know? <small>Optional</small></span><textarea name="message" rows={3} placeholder="Share your existing website, Google profile, or what you want to improve." /></label>
            <button className="form-submit" type="submit" disabled={formStatus === "submitting"}>
              {formStatus === "submitting" ? "Sending request…" : "Request Free Demo"}
              {formStatus !== "submitting" && <ArrowUpRight size={17} />}
            </button>
            <div className={`form-status ${formStatus}`} aria-live="polite" role="status">
              {formStatus === "success" && (
                <><strong>Request received.</strong><span>Thank you—we&apos;ll review your details and get back to you soon.</span></>
              )}
              {formStatus === "error" && (
                <><strong>We couldn&apos;t send that.</strong><span>Please try again, or email contact@projectmonet.space.</span></>
              )}
            </div>
            <p className="form-disclaimer">
              The free demo is a concept preview. Full website work, revisions, SEO setup,
              domain connection and launch begin after project confirmation and advance payment.
            </p>
            <p className="form-privacy">
              By submitting this form, you agree that we may use your information to respond to your request as described in our <a href="/privacy">Privacy Policy</a>.
            </p>
          </form>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#top">Project Monet<span>.</span></a>
        <div className="footer-contact">
          <a href="mailto:contact@projectmonet.space">contact@projectmonet.space</a>
          <a href="tel:+918290096163">+91 82900 96163</a>
        </div>
        <div className="footer-meta">
          <span>Websites for local businesses</span>
          <div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><span>© {new Date().getFullYear()} Project Monet</span></div>
        </div>
      </footer>
    </>
  );
}