import assert from "node:assert/strict";
import test from "node:test";

import { contentSecurityPolicy, securityHeaders } from "../security-headers.mjs";
import nextConfig from "../next.config.ts";

const headers = new Map(securityHeaders.map(({ key, value }) => [key.toLowerCase(), value]));

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
  assert.match(contentSecurityPolicy, /connect-src 'self' https:\/\/api\.web3forms\.com/);
  assert.match(contentSecurityPolicy, /media-src 'self' https:\/\/d8j0ntlcm91z4\.cloudfront\.net/);
  assert.doesNotMatch(contentSecurityPolicy, /https:\/\/\*/);
});
