"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const GOOGLE_ANALYTICS_ID = "G-5QS7ECZJGD";
const CONSENT_STORAGE_KEY = "pm_analytics_consent";

type ConsentChoice = "granted" | "denied";
type ConsentSnapshot = ConsentChoice | "unset" | "loading";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function removeAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    }
  });
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("pm-consent-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("pm-consent-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getConsentSnapshot(): ConsentSnapshot {
  try {
    const storedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return storedChoice === "granted" || storedChoice === "denied" ? storedChoice : "unset";
  } catch {
    return "unset";
  }
}

function getServerConsentSnapshot(): ConsentSnapshot {
  return "loading";
}

export default function CookieConsent() {
  const choice = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);
  const [isEditing, setIsEditing] = useState(false);

  function saveChoice(nextChoice: ConsentChoice) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice);
    } catch {
      // Consent still applies for the current page when storage is unavailable.
    }

    updateGoogleConsent(nextChoice);
    if (nextChoice === "denied") removeAnalyticsCookies();
    window.dispatchEvent(new Event("pm-consent-change"));
    setIsEditing(false);
  }

  return (
    <>
      {choice === "granted" && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}

      {(choice === "unset" || isEditing) && (
        <section className="cookie-consent" role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title">
          <div>
            <p className="cookie-kicker">Your privacy</p>
            <h2 id="cookie-consent-title">Choose whether we may use analytics cookies.</h2>
            <p>
              Google Analytics helps us understand visits, pages, approximate location, device details, scrolling and link interactions. We do not use advertising cookies, and analytics remains off unless you accept. Read our <Link href="/cookies">Cookie Policy</Link>.
            </p>
          </div>
          <div className="cookie-actions">
            <button className="cookie-reject" type="button" onClick={() => saveChoice("denied")}>Reject optional cookies</button>
            <button className="cookie-accept" type="button" onClick={() => saveChoice("granted")}>Accept analytics</button>
          </div>
        </section>
      )}

      {(choice === "granted" || choice === "denied") && !isEditing && (
        <button className="cookie-settings" type="button" onClick={() => setIsEditing(true)}>
          Cookie settings
        </button>
      )}
    </>
  );
}
