import { blogSitemapEntries, renderUrlSet, xmlResponse } from "../lib/sitemap-content";

export const revalidate = 300;

export function GET() {
  return xmlResponse(renderUrlSet(blogSitemapEntries));
}
