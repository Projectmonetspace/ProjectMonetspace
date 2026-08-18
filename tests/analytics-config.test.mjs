import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { contentSecurityPolicy } from "../security-headers.mjs";

const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const privacy = readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");

test("installs the approved Google Analytics stream once in the root layout", () => {
  assert.match(layout, /GoogleAnalytics/);
  assert.match(layout, /G-5QS7ECZJGD/);
  assert.equal((layout.match(/<GoogleAnalytics/g) ?? []).length, 1);
});

test("allows only the Google endpoints required for Analytics", () => {
  assert.match(contentSecurityPolicy, /script-src[^;]+https:\/\/www\.googletagmanager\.com/);
  assert.match(contentSecurityPolicy, /connect-src[^;]+https:\/\/www\.google-analytics\.com/);
  assert.match(contentSecurityPolicy, /connect-src[^;]+https:\/\/region1\.google-analytics\.com/);
});

test("discloses analytics collection without claiming form data is tracked", () => {
  assert.match(privacy, /Google Analytics/);
  assert.match(privacy, /do not intentionally send names, email addresses, phone numbers/);
});
