import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

import { pageMetadata } from "../app/lib/page-metadata.ts";

test("shared page metadata keeps canonical and Open Graph URLs aligned", () => {
  const metadata = pageMetadata({
    title: "Example — Project Monet",
    description: "A representative description for a Project Monet page.",
    path: "/example",
  });

  assert.equal(metadata.alternates.canonical, "/example");
  assert.equal(metadata.openGraph.type, "website");
  assert.equal(metadata.openGraph.url, "/example");
  assert.equal(metadata.openGraph.title, metadata.title);
  assert.equal(metadata.openGraph.description, metadata.description);
});

test("legal and information pages use the canonical-aware metadata helper", async () => {
  for (const page of ["contact", "cookies", "demo-policy", "privacy", "refund-cancellation", "shipping-delivery", "terms"]) {
    const source = await readFile(new URL(`../app/${page}/page.tsx`, import.meta.url), "utf8");
    assert.match(source, /pageMetadata\(\{/);
    assert.match(source, new RegExp(`path: "/${page}"`));
  }
});

test("SEO hubs declare an Open Graph website type", async () => {
  for (const hub of ["industries", "resources", "work"]) {
    const source = await readFile(new URL(`../app/(seo)/${hub}/page.tsx`, import.meta.url), "utf8");
    assert.match(source, /openGraph: \{ type: "website"/);
  }
});
