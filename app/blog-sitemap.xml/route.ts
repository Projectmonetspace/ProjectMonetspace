import { blogSitemapEntries, renderUrlSet, xmlResponse } from "../lib/sitemap-content";

export const revalidate = 3600;

export function GET() {
  return xmlResponse(renderUrlSet(blogSitemapEntries));
}
