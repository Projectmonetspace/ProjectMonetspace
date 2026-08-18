import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { contentSecurityPolicy } from "../security-headers.mjs";

const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const cookieConsent = readFileSync(new URL("../app/components/cookie-consent.tsx", import.meta.url), "utf8");
const privacy = readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
const cookies = readFileSync(new URL("../app/cookies/page.tsx", import.meta.url), "utf8");

test("loads the approved Google Analytics stream only through the consent component", () => {
  assert.match(layout, /<CookieConsent/);
  assert.match(cookieConsent, /G-5QS7ECZJGD/);
  assert.equal((cookieConsent.match(/<GoogleAnalytics/g) ?? []).length, 1);
  assert.match(cookieConsent, /choice === "granted"/);
});

test("defaults analytics and advertising consent to denied", () => {
  assert.match(layout, /analytics_storage: storedConsent === 'granted' \? 'granted' : 'denied'/);
  assert.match(layout, /ad_storage: 'denied'/);
  assert.match(layout, /ad_user_data: 'denied'/);
  assert.match(layout, /ad_personalization: 'denied'/);
  assert.match(cookieConsent, /Reject optional cookies/);
  assert.match(cookieConsent, /Cookie settings/);
});

test("allows only the Google endpoints required for Analytics", () => {
  assert.match(contentSecurityPolicy, /script-src[^;]+https:\/\/www\.googletagmanager\.com/);
  assert.match(contentSecurityPolicy, /connect-src[^;]+https:\/\/www\.google-analytics\.com/);
  assert.match(contentSecurityPolicy, /connect-src[^;]+https:\/\/region1\.google-analytics\.com/);
});

test("discloses analytics collection without claiming form data is tracked", () => {
  assert.match(privacy, /Google Analytics/);
  assert.match(privacy, /do not intentionally send names, email addresses, phone numbers/);
  assert.match(privacy, /disabled by default/);
  assert.match(cookies, /_ga/);
  assert.match(cookies, /Up to 2 years/);
});
