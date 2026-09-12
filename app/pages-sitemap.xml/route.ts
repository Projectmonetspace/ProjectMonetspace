import { pagesSitemapEntries, renderUrlSet, xmlResponse } from "../lib/sitemap-content";

// Materialized once per release; content dates remain registry-derived.
export const dynamic = "force-static";

export function GET() {
  return xmlResponse(renderUrlSet(pagesSitemapEntries));
}
