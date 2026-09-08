import assert from "node:assert/strict";
import test from "node:test";
import { parseFirstTouchAttribution } from "../app/lib/attribution.ts";

test("captures all first-touch UTMs and excludes query strings from page URLs", () => {
  const attribution = parseFirstTouchAttribution(
    "https://www.projectmonet.space/free-website-demo?utm_source=email&utm_medium=cold_outreach&utm_campaign=local_sites&utm_content=lead_019_t2&email=private@example.com",
    "https://mail.example/inbox?recipient=private@example.com",
  );
  assert.deepEqual(attribution, {
    version: 1,
    initialLandingPage: "https://www.projectmonet.space/free-website-demo",
    initialReferrer: "https://mail.example/inbox",
    utmSource: "email",
    utmMedium: "cold_outreach",
    utmCampaign: "local_sites",
    utmContent: "lead_019_t2",
  });
});

test("ignores non-web referrers", () => {
  assert.equal(parseFirstTouchAttribution("https://www.projectmonet.space/", "javascript:alert(1)").initialReferrer, undefined);
});
