import {
  blogSitemapEntries,
  latestModification,
  pagesSitemapEntries,
  xmlResponse,
} from "../lib/sitemap-content";

const baseUrl = "https://www.projectmonet.space";

export const revalidate = 300;

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/pages-sitemap.xml</loc>
    <lastmod>${latestModification(pagesSitemapEntries)}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/blog-sitemap.xml</loc>
    <lastmod>${latestModification(blogSitemapEntries)}</lastmod>
  </sitemap>
</sitemapindex>
`;

  return xmlResponse(xml);
}
