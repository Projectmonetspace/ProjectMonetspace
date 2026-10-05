import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SeoFooter, SeoNav } from "../../components/seo-page";
import { publishedBlogArticles } from "../../lib/blog-content-registry";
import { websiteArticleSlugs } from "../../lib/content-policy";
import { resourcePages, workPages } from "../../lib/seo-content";

export const metadata: Metadata = {
  title: "Website, SEO & Business Growth Guides | Project Monet",
  description: "Practical guides to website costs, local search, AI search visibility and better enquiry journeys. Explore honest design concepts and useful implementation workflows.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website", url: "/blog", siteName: "Project Monet",
    title: "Website & Search Guides | Project Monet",
    description: "Website decisions, search visibility and practical business workflows.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Project Monet website and search guides" }],
  },
  twitter: { card: "summary_large_image", title: "Website & Search Guides | Project Monet", description: "Practical website and search decisions.", images: ["/og.png"] },
};

const websiteGuides = publishedBlogArticles.filter(article => websiteArticleSlugs.has(article.slug));
const legacyArticles = publishedBlogArticles.filter(article => !websiteArticleSlugs.has(article.slug));
const priorityResources = new Set([
  "/resources/small-business-website-cost-india", "/resources/one-page-vs-multi-page-website",
  "/resources/google-business-profile-vs-website", "/resources/local-business-website-sections",
]);
const orderedResources = [...resourcePages].sort((a, b) => Number(priorityResources.has(b.path)) - Number(priorityResources.has(a.path)));

export default function BlogIndexPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "Blog", name: "Project Monet Website & Search Guides",
    url: "https://www.projectmonet.space/blog",
    blogPost: publishedBlogArticles.map((article) => ({
      "@type": "BlogPosting", headline: article.h1,
      url: `https://www.projectmonet.space/blog/${article.slug}`,
      datePublished: article.datePublished, dateModified: article.dateModified,
    })),
  };
  return (
    <main className="seo-page seo-hub-page blog-index-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoNav />
      <article>
        <header className="seo-hero">
          <p className="seo-kicker">Project Monet guides</p>
          <h1>Build a clearer website. Help the right customers find it.</h1>
          <p>Practical decisions about website scope, search visibility, proof and enquiries—grounded in what a business can actually deliver.</p>
        </header>
        <aside className="seo-answer"><p>Start with the decision</p><strong>What does your customer need to know before contacting you? Give that question a clear answer, credible evidence and a useful next step.</strong></aside>
        <section className="seo-hub-list" aria-labelledby="website-decisions">
          <div className="seo-hub-heading"><p className="seo-kicker">Website planning</p><h2 id="website-decisions">Choose the scope, structure and budget.</h2></div>
          <div className="seo-hub-grid blog-card-grid">
            {orderedResources.map(page => <Link key={page.path} href={page.path}><span>Website decision guide</span><h3>{page.title}</h3><p>{page.metaDescription}</p><i>Read guide <ArrowRight size={16} /></i></Link>)}
          </div>
        </section>
        <section className="seo-hub-list" aria-labelledby="concept-proof">
          <div className="seo-hub-heading"><p className="seo-kicker">Explore the reasoning</p><h2 id="concept-proof">See how different businesses need different journeys.</h2><p>These are speculative design concepts. They demonstrate structure and visual direction; they do not claim paid client outcomes.</p></div>
          <div className="seo-hub-grid blog-card-grid">
            {workPages.slice(0, 3).map(page => <Link key={page.path} href={page.path}><span>Design concept</span><h3>{page.title}</h3><p>{page.metaDescription}</p><i>Explore concept <ArrowRight size={16} /></i></Link>)}
          </div>
        </section>
        <section className="seo-hub-list" aria-labelledby="published-articles">
          <div className="seo-hub-heading"><p className="seo-kicker">Search and implementation</p><h2 id="published-articles">Use tools with a clear business purpose.</h2></div>
          <div className="seo-hub-grid blog-card-grid">
            {websiteGuides.map(article => <Link href={`/blog/${article.slug}`} key={article.slug}><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><i>Read guide <ArrowRight size={16} /></i></Link>)}
          </div>
        </section>
        <section className="seo-hub-list" aria-labelledby="legacy-archive">
          <h2 id="legacy-archive">Earlier technology coverage</h2>
          <p>Historical articles remain available for readers. Product information reflects the dates shown on each page and should be checked against the current vendor documentation.</p>
          <details className="blog-legacy-archive">
            <summary>Browse {legacyArticles.length} earlier articles</summary>
            <div className="seo-hub-grid blog-card-grid">
              {legacyArticles.map(article => <Link href={`/blog/${article.slug}`} key={article.slug}><span>{article.category} · Historical coverage</span><h3>{article.title}</h3><p>{article.excerpt}</p><i>Read article <ArrowRight size={16} /></i></Link>)}
            </div>
          </details>
        </section>
        <section className="seo-final-cta">
          <p className="seo-kicker">Plan your website</p><h2>Turn the right questions into a useful website.</h2>
          <p>Explore the service scope, pricing and concept process before deciding what your business needs.</p>
          <Link href="/services/web-design-for-local-businesses">Explore website services <ArrowRight size={17} /></Link>
        </section>
      </article>
      <SeoFooter />
    </main>
  );
}
