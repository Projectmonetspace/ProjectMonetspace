import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import type { BlogArticle } from "../lib/blog-content";
import { findSeoPage } from "../lib/seo-content";
import { SeoFooter, SeoNav } from "./seo-page";

const siteUrl = "https://www.projectmonet.space";

function renderBlock(block: BlogArticle["sections"][number]["blocks"][number], index: number) {
  if (block.type === "subheading") return <h3 key={`${block.text}-${index}`}>{block.text}</h3>;
  if (block.type === "paragraph") return <p key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;
  if (block.type === "note") return <aside className="blog-note" key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;

  const List = block.ordered ? "ol" : "ul";
  return (
    <List key={index}>
      {block.items.map((item) => <li key={item}>{item}</li>)}
    </List>
  );
}

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
  const canonical = `${siteUrl}/blog/${article.slug}`;
  const image = `${canonical}/og`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.h1,
        description: article.metaDescription,
        image,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        author: { "@type": "Organization", name: article.author, url: siteUrl },
        publisher: {
          "@type": "Organization",
          name: "Project Monet",
          url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  };
  const related = article.relatedPaths.map((path) => {
    if (path.startsWith("/blog/")) {
      const slug = path.slice("/blog/".length);
      return { path, title: slug === "qwen3-8-flash-next" ? "Qwen3.8-Flash-Next explained" : slug === "gemini-3-5-transcribe" ? "Gemini 3.5 Transcribe guide" : "Instagram First Draft guide" };
    }
    const page = findSeoPage(path);
    return page ? { path, title: page.title } : null;
  }).filter((item): item is { path: string; title: string } => Boolean(item));

  return (
    <main className="seo-page blog-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoNav />
      <article>
        <div className="seo-breadcrumbs" aria-label="Breadcrumb">
          <span><Link href="/">Home</Link><i>/</i></span>
          <span><Link href="/blog">Blog</Link><i>/</i></span>
          <span>{article.title}</span>
        </div>

        <header className="seo-hero blog-hero">
          <p className="seo-kicker">{article.category} · Project Monet Briefing</p>
          <h1>{article.h1}</h1>
          <p>{article.excerpt}</p>
          <p className="seo-updated"><Clock3 size={14} /> Published {article.datePublished} · Updated {article.dateModified} · By {article.author}</p>
        </header>

        <figure className="blog-cover">
          <Image src={`/blog/${article.slug}/og`} alt={article.ogAlt} width={1200} height={630} priority sizes="(max-width: 767px) 100vw, 92vw" unoptimized />
        </figure>

        <div className="seo-reading-grid blog-reading-grid">
          <aside className="seo-toc" aria-label="On this page">
            <p>On this page</p>
            {article.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
            <a href="#sources">Sources</a>
          </aside>

          <div className="seo-article-body blog-body">
            {article.sections.map((section, index) => (
              <section id={section.id} key={section.id}>
                <p className="seo-section-number">{String(index + 1).padStart(2, "0")}</p>
                <h2>{section.title}</h2>
                {section.blocks.map(renderBlock)}
              </section>
            ))}

            <section id="sources" className="blog-sources">
              <p className="seo-section-number">Sources</p>
              <h2>Primary and supporting sources</h2>
              <p>Facts were rechecked against the linked sources immediately before publication. Pricing, product availability and rollout status can change.</p>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={15} aria-hidden="true" /></a></li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {related.length > 0 && (
          <section className="seo-related" aria-labelledby="related-title">
            <h2 id="related-title">Continue reading</h2>
            <div>
              {related.map((item) => <Link href={item.path} key={item.path}><span>Project Monet</span><strong>{item.title}</strong><ArrowRight size={18} /></Link>)}
            </div>
          </section>
        )}

        <section className="seo-final-cta">
          <p className="seo-kicker">Project Monet</p>
          <h2>Useful signals. Clear decisions. Better digital work.</h2>
          <p>Project Monet turns relevant shifts in AI, creator tools and the web into practical context—and builds focused websites for businesses ready to grow.</p>
          <Link href="/free-website-demo" data-analytics-event="request_demo_click" data-analytics-location="blog_article_final_cta">Request a free homepage concept <ArrowRight size={17} /></Link>
        </section>
      </article>
      <SeoFooter />
    </main>
  );
}
