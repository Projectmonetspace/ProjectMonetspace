import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — Project Monet",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Link className="not-found-brand" href="/" aria-label="Project Monet home">
        <span className="brand-orbit" aria-hidden="true"><i></i><i></i></span>
        <span>Project Monet</span>
      </Link>

      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="not-found-code">Error 404 · Page not found</p>
        <h1 id="not-found-title">This page left the frame.</h1>
        <p>The address may be incorrect or the page may have moved. The main Project Monet site is still right where it should be.</p>
        <Link className="not-found-home" href="/"><ArrowLeft size={16} /> Back to homepage</Link>
      </section>

      <footer className="not-found-footer">
        <span>Websites for local businesses</span>
        <span>© {new Date().getFullYear()} Project Monet</span>
      </footer>
    </main>
  );
}
