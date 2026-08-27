import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SeoFooter, SeoNav } from "../../components/seo-page";
import { publishedBlogArticles } from "../../lib/blog-content";

export const metadata: Metadata = {
  title: "Project Monet Blog — AI, Creator Tools, Marketing & Web Signals",
  description: "Verified early-signal briefings on AI, creator tools, social media, websites, automation and business growth from Project Monet.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName: "Project Monet",
    title: "Project Monet Blog — Early Signals, Practical Context",
    description: "Verified briefings on AI, creator tools, social media, websites and automation.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Project Monet blog" }],
  },
  twitter: { card: "summary_large_image", title: "Project Monet Blog", description: "Early signals and practical context.", images: ["/og.png"] },
};

export default function BlogIndexPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Project Monet Blog",
    url: "https://www.projectmonet.space/blog",
    blogPost: publishedBlogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.h1,
      url: `https://www.projectmonet.space/blog/${article.slug}`,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
    })),
  };

  return (
    <main className="seo-page seo-hub-page blog-index-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoNav />
      <article>
        <header className="seo-hero">
          <p className="seo-kicker">Project Monet Briefing</p>
          <h1>Early signals. Verified before they become noise.</h1>
          <p>Focused reporting at the intersection of AI, creators, social media, websites, automation and business growth—without turning Project Monet into a generic news feed.</p>
        </header>
        <aside className="seo-answer"><p>Editorial rule</p><strong>Primary sources first. No invented availability, pricing, benchmarks or claims. Every live article passes a human approval gate.</strong></aside>
        <section className="seo-hub-list" aria-labelledby="published-articles">
          <div className="seo-hub-heading"><p className="seo-kicker">{String(publishedBlogArticles.length).padStart(2, "0")} published briefings</p><h2 id="published-articles">What changed—and what it actually means.</h2></div>
          <div className="seo-hub-grid blog-card-grid">
            {publishedBlogArticles.map((article, index) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <span>{String(index + 1).padStart(2, "0")} · {article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <i>Read briefing <ArrowRight size={16} /></i>
              </Link>
            ))}
          </div>
        </section>
        <section className="seo-final-cta">
          <p className="seo-kicker">Project Monet</p>
          <h2>The homepage stays focused. The thinking lives here.</h2>
          <p>Browse practical updates, or explore how Project Monet builds clear websites for local businesses.</p>
          <Link href="/services/web-design-for-local-businesses">Explore website services <ArrowRight size={17} /></Link>
        </section>
      </article>
      <SeoFooter />
    </main>
  );
}
