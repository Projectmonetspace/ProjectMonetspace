import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { contentSecurityPolicy } from "../security-headers.mjs";

const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const cookieConsent = readFileSync(new URL("../app/components/cookie-consent.tsx", import.meta.url), "utf8");
const analyticsEvents = readFileSync(new URL("../app/components/analytics-events.tsx", import.meta.url), "utf8");
const analytics = readFileSync(new URL("../app/lib/analytics.ts", import.meta.url), "utf8");
const homepage = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const demoForm = readFileSync(new URL("../app/components/demo-request-form.tsx", import.meta.url), "utf8");
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

test("sends custom events only after analytics consent", () => {
  assert.match(layout, /<AnalyticsEvents/);
  assert.match(analytics, /getItem\(CONSENT_STORAGE_KEY\) !== "granted"/);
  assert.match(analytics, /window\.gtag\?\.\("event", eventName, parameters\)/);
});

test("records a lead only after Web3Forms confirms success", () => {
  for (const formSource of [homepage, demoForm]) {
    const successCheck = formSource.indexOf("if (!response.ok || !result.success)");
    const leadEvent = formSource.indexOf('trackAnalyticsEvent("generate_lead"');
    assert.ok(successCheck >= 0 && leadEvent > successCheck);
  }
});

test("tracks meaningful CTA and contact interactions without sending form fields", () => {
  assert.match(homepage, /data-analytics-event="request_demo_click"/);
  assert.match(homepage, /data-analytics-event="portfolio_open"/);
  assert.match(analyticsEvents, /"click_to_call"/);
  assert.match(analyticsEvents, /"click_to_email"/);
  assert.doesNotMatch(analyticsEvents, /business_name|phone|email_address|message/);
  assert.match(privacy, /custom analytics events describe the action and page location only/);
});
