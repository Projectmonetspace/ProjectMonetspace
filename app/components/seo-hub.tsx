import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SeoPage } from "../lib/seo-content";
import { SeoFooter, SeoNav } from "./seo-page";

type SeoHubProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  answer: string;
  pages: SeoPage[];
  itemLabel: string;
  path: "/industries" | "/resources";
};

export default function SeoHub({ eyebrow, heading, intro, answer, pages, itemLabel, path }: SeoHubProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", name: heading, description: intro, url: `https://www.projectmonet.space${path}` },
      {
        "@type": "ItemList",
        itemListElement: pages.map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: page.title,
          url: `https://www.projectmonet.space${page.path}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.projectmonet.space/" },
          { "@type": "ListItem", position: 2, name: eyebrow, item: `https://www.projectmonet.space${path}` },
        ],
      },
    ],
  };

  return (
    <main className="seo-page seo-hub-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoNav />
      <article>
        <header className="seo-hero">
          <p className="seo-kicker">{eyebrow}</p>
          <h1>{heading}</h1>
          <p>{intro}</p>
          <div className="seo-hero-actions">
            <Link className="seo-primary-button" href="/free-website-demo" data-analytics-event="request_demo_click" data-analytics-location="seo_hub_hero">Request free demo <ArrowRight size={16} /></Link>
            <Link className="seo-text-link" href="/pricing">See website pricing</Link>
          </div>
        </header>
        <aside className="seo-answer"><p>How to use this library</p><strong>{answer}</strong></aside>
        <section className="seo-hub-list" aria-labelledby="hub-list-title">
          <div className="seo-hub-heading">
            <p className="seo-kicker">{String(pages.length).padStart(2, "0")} focused pages</p>
            <h2 id="hub-list-title">Choose the {itemLabel} closest to your decision.</h2>
          </div>
          <div className="seo-hub-grid">
            {pages.map((page, index) => (
              <Link href={page.path} key={page.path}>
                <span>{String(index + 1).padStart(2, "0")} · {page.eyebrow}</span>
                <h3>{page.title}</h3>
                <p>{page.metaDescription}</p>
                <i>Read page <ArrowRight size={16} /></i>
              </Link>
            ))}
          </div>
        </section>
        <section className="seo-final-cta">
          <p className="seo-kicker">Project Monet</p>
          <h2>Useful information first. A clear next step when you are ready.</h2>
          <p>See a compact website direction before confirming the full paid project.</p>
          <Link href="/free-website-demo" data-analytics-event="request_demo_click" data-analytics-location="seo_hub_final_cta">Request a free homepage concept <ArrowRight size={17} /></Link>
        </section>
      </article>
      <SeoFooter />
    </main>
  );
}
