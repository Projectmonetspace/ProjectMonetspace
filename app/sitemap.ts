import type { MetadataRoute } from "next";
import { allSeoPages } from "./lib/seo-content";
import { publishedBlogArticles } from "./lib/blog-content";

const baseUrl = "https://www.projectmonet.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: "2026-08-20", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/industries`, lastModified: "2026-08-16", changeFrequency: "monthly", priority: .8 },
    { url: `${baseUrl}/resources`, lastModified: "2026-08-20", changeFrequency: "weekly", priority: .8 },
    { url: `${baseUrl}/work`, lastModified: "2026-08-20", changeFrequency: "monthly", priority: .8 },
    { url: `${baseUrl}/blog`, lastModified: "2026-08-27", changeFrequency: "daily", priority: .8 },
    { url: `${baseUrl}/privacy`, lastModified: "2026-08-18", changeFrequency: "yearly", priority: .2 },
    { url: `${baseUrl}/cookies`, lastModified: "2026-08-18", changeFrequency: "yearly", priority: .2 },
    { url: `${baseUrl}/terms`, lastModified: "2026-08-18", changeFrequency: "yearly", priority: .2 },
    { url: `${baseUrl}/refund-cancellation`, lastModified: "2026-07-27", changeFrequency: "yearly", priority: .2 },
    { url: `${baseUrl}/shipping-delivery`, lastModified: "2026-07-27", changeFrequency: "yearly", priority: .2 },
    { url: `${baseUrl}/demo-policy`, lastModified: "2026-07-27", changeFrequency: "yearly", priority: .2 },
    { url: `${baseUrl}/contact`, lastModified: "2026-07-27", changeFrequency: "yearly", priority: .4 },
  ];

  const seoPages: MetadataRoute.Sitemap = allSeoPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.published ?? "2026-08-16",
    changeFrequency: "monthly",
    priority: page.kind === "service" ? .9 : page.kind === "profile" || page.kind === "work" ? .8 : .7,
  }));

  const blogPages: MetadataRoute.Sitemap = publishedBlogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.dateModified,
    changeFrequency: "weekly",
    priority: .75,
  }));

  return [...fixedPages, ...seoPages, ...blogPages];
}
