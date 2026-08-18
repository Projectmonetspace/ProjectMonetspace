"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "../lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function trackLinkClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a");
      if (!link) return;

      const eventName = link.dataset.analyticsEvent;
      const eventLocation = link.dataset.analyticsLocation ?? "site";

      if (eventName) {
        trackAnalyticsEvent(eventName, {
          link_location: eventLocation,
          page_path: window.location.pathname,
        });
        return;
      }

      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackAnalyticsEvent("click_to_call", {
          link_location: eventLocation,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        trackAnalyticsEvent("click_to_email", {
          link_location: eventLocation,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", trackLinkClick);
    return () => document.removeEventListener("click", trackLinkClick);
  }, []);

  return null;
}
