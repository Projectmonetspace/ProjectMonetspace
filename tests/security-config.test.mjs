import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { contentSecurityPolicy, securityHeaders } from "../security-headers.mjs";
import nextConfig from "../next.config.ts";

const headers = new Map(securityHeaders.map(({ key, value }) => [key.toLowerCase(), value]));
const homepage = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const demoForm = readFileSync(new URL("../app/components/demo-request-form.tsx", import.meta.url), "utf8");
const demoRoute = readFileSync(new URL("../app/api/demo-request/route.ts", import.meta.url), "utf8");

test("sets the expected browser security headers", () => {
  assert.equal(nextConfig.poweredByHeader, false);
  assert.equal(headers.get("x-content-type-options"), "nosniff");
  assert.equal(headers.get("x-frame-options"), "DENY");
  assert.equal(headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(headers.get("x-permitted-cross-domain-policies"), "none");
});

test("CSP denies dangerous defaults and permits only required third parties", () => {
  assert.match(contentSecurityPolicy, /default-src 'self'/);
  assert.match(contentSecurityPolicy, /object-src 'none'/);
  assert.match(contentSecurityPolicy, /frame-ancestors 'none'/);
  assert.match(contentSecurityPolicy, /connect-src 'self'/);
  assert.doesNotMatch(contentSecurityPolicy, /api\.web3forms\.com/);
  assert.match(contentSecurityPolicy, /media-src 'self' https:\/\/d8j0ntlcm91z4\.cloudfront\.net/);
  assert.doesNotMatch(contentSecurityPolicy, /https:\/\/\*/);
});

test("demo submissions keep the Web3Forms access key server-side", () => {
  assert.doesNotMatch(homepage, /access_key/);
  assert.doesNotMatch(demoForm, /access_key/);
  assert.match(homepage, /fetch\("\/api\/demo-request"/);
  assert.match(demoForm, /fetch\("\/api\/demo-request"/);
  assert.match(demoRoute, /process\.env\.WEB3FORMS_ACCESS_KEY/);
});
