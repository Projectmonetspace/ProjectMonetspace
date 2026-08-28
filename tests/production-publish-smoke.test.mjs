import assert from "node:assert/strict";
import test from "node:test";

const base = "https://www.projectmonet.space";
const articles = [
  {
    slug: "photoshop-27-10-ai-assisted-editor-prompt-to-edit",
    marker: "Photoshop 27.10 Adds AI Assisted Editor",
    links: ["/blog/how-to-use-photoshop-prompt-to-edit-ai-assisted-editor", "/blog/photoshop-light-adjustment-layer"],
  },
  {
    slug: "how-to-use-photoshop-prompt-to-edit-ai-assisted-editor",
    marker: "How to Use Photoshop Prompt to Edit",
    links: ["/blog/photoshop-27-10-ai-assisted-editor-prompt-to-edit", "/blog/photoshop-light-adjustment-layer"],
  },
  {
    slug: "photoshop-light-adjustment-layer",
    marker: "How to Use Photoshop’s New Light Adjustment Layer",
    links: ["/blog/photoshop-27-10-ai-assisted-editor-prompt-to-edit", "/blog/how-to-use-photoshop-prompt-to-edit-ai-assisted-editor"],
  },
  {
    slug: "google-site-reputation-policy-eea-2026",
    marker: "Google’s Site Reputation Policy Changes in the EEA",
    links: ["/blog/fix-google-site-reputation-manual-action", "/blog/parasite-seo-google-site-reputation-policy-eea"],
  },
  {
    slug: "fix-google-site-reputation-manual-action",
    marker: "How to Fix a Google Site Reputation Policy Manual Action",
    links: ["/blog/google-site-reputation-policy-eea-2026", "/blog/parasite-seo-google-site-reputation-policy-eea"],
  },
  {
    slug: "parasite-seo-google-site-reputation-policy-eea",
    marker: "What Google’s 2026 EEA Site Reputation Policy Change Means for Parasite SEO",
    links: ["/blog/google-site-reputation-policy-eea-2026", "/blog/fix-google-site-reputation-manual-action"],
  },
];

async function get(path) {
  const response = await fetch(`${base}${path}`, {
    headers: {
      "user-agent": "ProjectMonet-production-verification/1.0",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    redirect: "follow",
    cache: "no-store",
  });
  return { response, body: await response.text() };
}

test("all six newly published articles are live with canonical, schema, OG and reciprocal cluster links", async () => {
  for (const article of articles) {
    const path = `/blog/${article.slug}`;
    const { response, body } = await get(path);
    assert.equal(response.status, 200, `${path} returns 200`);
    assert.ok(body.includes(article.marker), `${path} renders the intended article`);
    assert.ok(body.includes(`rel=\"canonical\" href=\"${base}${path}\"`) || body.includes(`rel="canonical" href="${base}${path}"`), `${path} has the exact canonical`);
    assert.ok(body.includes("BlogPosting"), `${path} includes BlogPosting schema`);
    for (const href of article.links) assert.ok(body.includes(href), `${path} links to ${href}`);

    const og = await fetch(`${base}${path}/og`, { cache: "no-store", redirect: "follow" });
    assert.equal(og.status, 200, `${path}/og returns 200`);
    assert.match(og.headers.get("content-type") ?? "", /^image\/png/, `${path}/og returns PNG`);
  }
});

test("blog index exposes every newly published canonical URL", async () => {
  const blog = await get("/blog");
  assert.equal(blog.response.status, 200, "/blog returns 200");
  for (const article of articles) assert.ok(blog.body.includes(`/blog/${article.slug}`), `/blog lists ${article.slug}`);
  assert.match(blog.body, /27(?:<!-- -->)? published briefings/, "/blog reports 27 published briefings");
});

test("sitemap index and child sitemaps expose every new URL and all 77 indexable URLs", async () => {
  const rootSitemap = await get("/sitemap.xml");
  assert.equal(rootSitemap.response.status, 200, "/sitemap.xml returns 200");
  assert.ok(rootSitemap.body.includes("<sitemapindex"), "root sitemap is a sitemap index");
  assert.ok(rootSitemap.body.includes("/pages-sitemap.xml"), "root sitemap links pages child");
  assert.ok(rootSitemap.body.includes("/blog-sitemap.xml"), "root sitemap links blog child");

  const pages = await get("/pages-sitemap.xml");
  const blogSitemap = await get("/blog-sitemap.xml");
  assert.equal(pages.response.status, 200, "/pages-sitemap.xml returns 200");
  assert.equal(blogSitemap.response.status, 200, "/blog-sitemap.xml returns 200");
  for (const article of articles) assert.ok(blogSitemap.body.includes(`/blog/${article.slug}`), `blog sitemap lists ${article.slug}`);
  const all = `${pages.body}\n${blogSitemap.body}`;
  assert.equal((all.match(/<url>/g) ?? []).length, 77, "child sitemaps expose all 77 indexable URLs");
});
