import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { getGalleryGestureIntent } from "../app/lib/gallery-gesture.ts";

test("gallery gesture intent keeps vertical and mostly vertical movement with the page", () => {
  assert.equal(getGalleryGestureIntent(0, 20), "vertical");
  assert.equal(getGalleryGestureIntent(12, 24), "vertical");
  assert.equal(getGalleryGestureIntent(20, 24), "vertical");
});

test("gallery gesture intent requires clear horizontal dominance", () => {
  assert.equal(getGalleryGestureIntent(30, 10), "horizontal");
  assert.equal(getGalleryGestureIntent(-30, 10), "horizontal");
  assert.equal(getGalleryGestureIntent(10, 9), "pending");
  assert.equal(getGalleryGestureIntent(4, 3), "pending");
});

test("gallery CSS reserves touch scrolling for the vertical page axis", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.curved-gallery\s*\{[^}]*touch-action:\s*pan-y pinch-zoom;/s);
});

test("gallery wheel input stays native", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(page, /onWheel(?:Capture)?=/);
});
