import { publishedBlogArticles } from "./blog-content";
import { allSeoPages } from "./seo-content";

const baseUrl = "https://www.projectmonet.space";

export type SitemapEntry = {
  url: string;
  lastModified: string;
};

const fixedPages: SitemapEntry[] = [
  { url: `${baseUrl}/`, lastModified: "2026-08-20" },
  { url: `${baseUrl}/industries`, lastModified: "2026-08-16" },
  { url: `${baseUrl}/resources`, lastModified: "2026-08-28" },
  { url: `${baseUrl}/work`, lastModified: "2026-08-20" },
  { url: `${baseUrl}/blog`, lastModified: "2026-08-28" },
  { url: `${baseUrl}/privacy`, lastModified: "2026-08-18" },
  { url: `${baseUrl}/cookies`, lastModified: "2026-08-18" },
  { url: `${baseUrl}/terms`, lastModified: "2026-08-18" },
  { url: `${baseUrl}/refund-cancellation`, lastModified: "2026-07-27" },
  { url: `${baseUrl}/shipping-delivery`, lastModified: "2026-07-27" },
  { url: `${baseUrl}/demo-policy`, lastModified: "2026-07-27" },
  { url: `${baseUrl}/contact`, lastModified: "2026-07-27" },
];

const seoPages: SitemapEntry[] = allSeoPages
  .filter((page) => page.kind !== "work")
  .map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.modified ?? page.published ?? "2026-08-16",
  }));

const projectPages: SitemapEntry[] = allSeoPages
  .filter((page) => page.kind === "work")
  .map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.modified ?? page.published ?? "2026-08-20",
  }));

const blogPages: SitemapEntry[] = publishedBlogArticles.map((article) => ({
  url: `${baseUrl}/blog/${article.slug}`,
  lastModified: article.dateModified,
}));

export const pagesSitemapEntries = [...fixedPages, ...seoPages];
export const blogSitemapEntries = [...projectPages, ...blogPages];

export function latestModification(entries: SitemapEntry[]): string {
  return entries.reduce(
    (latest, entry) => (entry.lastModified > latest ? entry.lastModified : latest),
    "1970-01-01",
  );
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function renderUrlSet(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      ({ url, lastModified }) =>
        `  <url>\n    <loc>${escapeXml(url)}</loc>\n    <lastmod>${escapeXml(lastModified)}</lastmod>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=300",
    },
  });
}
