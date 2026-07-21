import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.projectmonet.space"),
  title: "Project Monet — Professional Websites for Local Businesses",
  description:
    "Project Monet builds professional websites for local businesses. Request a free homepage concept, see your website before you pay, and own it after final payment.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Project Monet",
    title: "See your website before you pay — Project Monet",
    description: "Professional websites for local businesses, with clear pricing and full ownership after final payment.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Project Monet — See your website before you pay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "See your website before you pay — Project Monet",
    description: "Professional websites for local businesses.",
    images: ["/og.svg"],
  },
  other: { "codex-preview": "development" },
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}