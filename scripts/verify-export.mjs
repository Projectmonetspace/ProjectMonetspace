import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { publishedBlogArticles } from "../app/lib/blog-content-registry.ts";
import { pagesSitemapEntries, blogSitemapEntries, latestModification, renderUrlSet } from "../app/lib/sitemap-content.ts";
import { securityHeaders } from "../security-headers.mjs";

const origin = "https://www.projectmonet.space";
const entries = [...pagesSitemapEntries, ...blogSitemapEntries];
assert.equal(new Set(entries.map(e => e.url)).size, entries.length, "No duplicate canonicals");
for (const entry of entries) {
  assert.equal(new URL(entry.url).origin, origin);
  const route = new URL(entry.url).pathname;
  const html = await readFile(route === "/" ? "out/index.html" : `out${route}.html`, "utf8");
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${route}: one H1`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${route}: canonical present`);
  assert.equal(new URL(canonical[1]).href, new URL(entry.url).href, `${route}: canonical`);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.ok(html.includes('name="description"'), `${route}: description`);
  assert.doesNotMatch(html, /name="robots"[^>]*noindex/);
  assert.ok(!html.includes("/_next/image?"), `${route}: no runtime image optimizer`);
  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (m[1].startsWith("/__images/") || m[1].startsWith("/_next/static/")) {
      await stat(path.join("out", decodeURIComponent(m[1].split("?")[0])));
    }
  }
}
const blog = await readFile("out/blog.html", "utf8");
for (const article of publishedBlogArticles) {
  const route = `/blog/${article.slug}`;
  const html = await readFile(`out${route}.html`, "utf8");
  assert.ok(blog.includes(route), `${route}: listed`);
  assert.ok(html.includes("BlogPosting") && html.includes("BreadcrumbList"), `${route}: schemas`);
  assert.ok(html.includes(article.datePublished) && html.includes(article.dateModified), `${route}: dates`);
  assert.ok(html.includes(`${origin}${route}/og`), `${route}: production OG metadata`);
  for (const related of article.relatedPaths.filter(p => p.startsWith("/blog/"))) assert.ok(html.includes(related), `${route}: related ${related}`);
  if (article.parentSlug) assert.ok(html.includes(`/blog/${article.parentSlug}`), `${route}: parent`);
  const png = await readFile(`out${route}/og`);
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", `${route}: PNG bytes`);
  assert.equal(png.readUInt32BE(16), 1200, `${route}: OG width`);
  assert.equal(png.readUInt32BE(20), 630, `${route}: OG height`);
}
for (const [name, list] of [["pages", pagesSitemapEntries], ["blog", blogSitemapEntries]]) {
  assert.equal(await readFile(`out/${name}-sitemap.xml`, "utf8"), renderUrlSet(list), `${name}: exact registry sitemap and dates`);
  for (const e of list) assert.match(e.lastModified, /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/);
}
const index = await readFile("out/sitemap.xml", "utf8");
assert.match(index, /<sitemapindex/);
for (const [name, list] of [["pages", pagesSitemapEntries], ["blog", blogSitemapEntries]]) {
  assert.ok(index.includes(`${origin}/${name}-sitemap.xml`));
  assert.ok(index.includes(`<lastmod>${latestModification(list)}</lastmod>`));
}
assert.match(await readFile("out/404.html", "utf8"), /noindex/);
assert.ok((await readFile("out/robots.txt", "utf8")).includes(`${origin}/sitemap.xml`));
const headers = await readFile("out/_headers", "utf8");
for (const { key, value } of securityHeaders) assert.ok(headers.includes(`${key}: ${value}`));
assert.ok(headers.includes("/blog/*/og\n  Content-Type: image/png"));
async function files(dir) {
  const all = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) all.push(...await files(p)); else all.push(p);
  }
  return all;
}
const exported = await files("out");
assert.equal(exported.filter(p => /^out\/blog\/[^/]+\/og$/.test(p)).length, publishedBlogArticles.length, "Exact published OG coverage");
assert.ok(exported.length <= 20000, "Pages Free file limit");
for (const p of exported) assert.ok((await stat(p)).size <= 25 * 1024 * 1024, `Pages asset limit: ${p}`);
for (const p of await files("public")) {
  if (p.startsWith("public/__images/")) continue;
  assert.deepEqual(await readFile(path.join("out", path.relative("public", p))), await readFile(p), `Original asset unchanged: ${p}`);
}
console.log(`Static export verified: ${publishedBlogArticles.length} articles and PNGs (1200x630), ${entries.length} canonical sitemap URLs, ${exported.length} files; original media unchanged.`);
