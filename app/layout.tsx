import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsEvents from "./components/analytics-events";
import CookieConsent from "./components/cookie-consent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.projectmonet.space"),
  title: "Project Monet — Professional Websites for Local Businesses",
  description:
    "Project Monet builds professional websites for local businesses. Request a free homepage concept, see your website before you pay, and own it after final payment.",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Project Monet",
    title: "See your website before you pay — Project Monet",
    description: "Professional websites for local businesses, with clear pricing and full ownership after final payment.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Project Monet — See your website before you pay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "See your website before you pay — Project Monet",
    description: "Professional websites for local businesses.",
    images: ["/og.png"],
  },
  other: { "codex-preview": "development" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "1024x1024", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-offwhite-black.png", type: "image/png", sizes: "1024x1024", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-orange-black.png", type: "image/png", sizes: "1024x1024" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            var storedConsent = null;
            try { storedConsent = window.localStorage.getItem('pm_analytics_consent'); } catch (error) {}
            gtag('consent', 'default', {
              analytics_storage: storedConsent === 'granted' ? 'granted' : 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
            gtag('set', 'ads_data_redaction', true);
          `}
        </Script>
      </head>
      <body className={inter.variable}>
        {children}
        <AnalyticsEvents />
        <CookieConsent />
      </body>
    </html>
  );
}
