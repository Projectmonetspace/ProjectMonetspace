"use client";

import { useEffect } from "react";
import { captureFirstTouchAttribution } from "../lib/attribution";

export default function AttributionCapture() {
  useEffect(() => {
    captureFirstTouchAttribution();
  }, []);

  return null;
}
