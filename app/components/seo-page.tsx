import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Clock3 } from "lucide-react";
import DemoRequestForm from "./demo-request-form";
import { findSeoPage, SeoPage } from "../lib/seo-content";

const siteUrl = "https://www.projectmonet.space";

export function metadataFor(page: SeoPage): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.path },
    authors: [{ name: "Mayank — Project Monet", url: siteUrl }],
    openGraph: {
      type: page.kind === "guide" ? "article" : "website",
      url: page.path,
      siteName: "Project Monet",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${page.title} — Project Monet` }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/og.png"],
    },
  };
}

function breadcrumbFor(page: SeoPage) {
  const middle = page.kind === "industry"
    ? { name: "Industries", path: "/industries" }
    : page.kind === "guide"
      ? { name: "Resources", path: "/resources" }
      : { name: "Services", path: "/services/web-design-for-local-businesses" };

  return [
    { name: "Home", path: "/" },
    middle,
    { name: page.title, path: page.path },
  ];
}

function schemaFor(page: SeoPage) {
  const breadcrumbs = breadcrumbFor(page);
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };

  const primary = page.kind === "guide"
    ? {
        "@type": "Article",
        headline: page.title,
        description: page.metaDescription,
        datePublished: "2026-08-16",
        dateModified: "2026-08-16",
        mainEntityOfPage: `${siteUrl}${page.path}`,
        author: { "@type": "Person", name: "Mayank", url: siteUrl },
        publisher: { "@type": "Organization", name: "Project Monet", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
        image: `${siteUrl}/og.png`,
      }
    : {
        "@type": "Service",
        name: page.title,
        description: page.metaDescription,
        url: `${siteUrl}${page.path}`,
        provider: { "@type": "Organization", name: "Project Monet", url: siteUrl },
        areaServed: ["India", "Worldwide"],
      };

  return { "@context": "https://schema.org", "@graph": [primary, breadcrumbSchema] };
}

export function SeoNav() {
  return (
    <header className="seo-nav">
      <Link className="seo-brand" href="/" aria-label="Project Monet home">
        <span className="brand-orbit" aria-hidden="true"><i></i><i></i></span>
        <span>Project Monet</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/services/web-design-for-local-businesses">Services</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/pricing">Pricing</Link>
      </nav>
      <Link className="seo-nav-cta" href="/free-website-demo">Request demo <ArrowUpRight size={14} /></Link>
    </header>
  );
}

export function SeoFooter() {
  return (
    <footer className="seo-footer">
      <Link href="/">Project Monet<span>.</span></Link>
      <p>Professional websites for local businesses. Full ownership after final payment.</p>
      <div>
        <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/demo-policy">Demo policy</Link><Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default function SeoDetailPage({ page }: { page: SeoPage }) {
  const breadcrumbs = breadcrumbFor(page);
  const related = page.relatedPaths.map(findSeoPage).filter((item): item is SeoPage => Boolean(item));

  return (
    <main className="seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(page)) }} />

      <SeoNav />

      <article>
        <div className="seo-breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((item, index) => (
            <span key={`${item.path}-${index}`}>
              {index < breadcrumbs.length - 1 ? <Link href={item.path}>{item.name}</Link> : item.name}
              {index < breadcrumbs.length - 1 && <i>/</i>}
            </span>
          ))}
        </div>

        <header className="seo-hero">
          <p className="seo-kicker">{page.eyebrow}</p>
          <h1>{page.heading}</h1>
          <p>{page.intro}</p>
          <div className="seo-hero-actions">
            <Link className="seo-primary-button" href={page.path === "/free-website-demo" ? "#request-demo" : "/free-website-demo"}>Request free demo <ArrowRight size={16} /></Link>
            <Link className="seo-text-link" href="/pricing">See website pricing <ArrowUpRight size={15} /></Link>
          </div>
          {page.updated && <p className="seo-updated"><Clock3 size={14} /> Updated {page.updated} · Reviewed by Mayank, Project Monet</p>}
        </header>

        <aside className="seo-answer" aria-labelledby="quick-answer-title">
          <p id="quick-answer-title">Quick answer</p>
          <strong>{page.quickAnswer}</strong>
        </aside>

        <div className="seo-reading-grid">
          <aside className="seo-toc" aria-label="On this page">
            <p>On this page</p>
            {page.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{section.title}</a>)}
            <a href="#questions">Common questions</a>
          </aside>

          <div className="seo-article-body">
            {page.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <p className="seo-section-number">{String(index + 1).padStart(2, "0")}</p>
                <h2>{section.title}</h2>
                {section.answer && <p className="seo-section-answer">{section.answer}</p>}
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}><Check size={16} aria-hidden="true" /> <span>{bullet}</span></li>)}</ul>
                )}
              </section>
            ))}

            {page.demo && (
              <aside className="seo-demo-callout">
                <div><p>Related live work</p><h2>Open the direction in a real browser.</h2></div>
                <a href={page.demo.url} target="_blank" rel="noreferrer">{page.demo.label} <ArrowUpRight size={16} /></a>
              </aside>
            )}

            <section className="seo-faq" id="questions">
              <p className="seo-section-number">Questions</p>
              <h2>What business owners usually ask</h2>
              {page.faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}<span>+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>

            {page.sources && (
              <section className="seo-sources">
                <p className="seo-section-number">Sources</p>
                <h2>Authoritative references</h2>
                <p>These references support platform or technical facts. Project Monet pricing and policies come from our own published service terms.</p>
                <ul>{page.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight size={14} /></a></li>)}</ul>
              </section>
            )}
          </div>
        </div>

        {page.path === "/free-website-demo" && <DemoRequestForm />}

        <section className="seo-related" aria-labelledby="related-title">
          <p className="seo-kicker">Continue with context</p>
          <h2 id="related-title">Related pages</h2>
          <div>{related.map((item) => <Link href={item.path} key={item.path}><span>{item.eyebrow}</span><strong>{item.title}</strong><ArrowRight size={18} /></Link>)}</div>
        </section>

        {page.path !== "/free-website-demo" && (
          <section className="seo-final-cta">
            <p className="seo-kicker">See the direction first</p>
            <h2>A small concept before a full commitment.</h2>
            <p>Share the business essentials. If the request fits the process, Project Monet can prepare a compact homepage direction before the paid project begins.</p>
            <Link href="/free-website-demo">Request a free homepage concept <ArrowRight size={17} /></Link>
          </section>
        )}
      </article>

      <SeoFooter />
    </main>
  );
}
