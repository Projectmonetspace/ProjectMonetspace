import type { Metadata } from "next";
import SeoHub from "../../components/seo-hub";
import { industryPages } from "../../lib/seo-content";

export const metadata: Metadata = {
  title: "Website Design by Industry | Project Monet",
  description: "Focused website design guidance and services for dentists, restaurants, salons, interiors, construction, clinics, gyms, real estate and more.",
  alternates: { canonical: "/industries" },
  openGraph: { title: "Website Design by Industry | Project Monet", description: "Explore website requirements for twelve local-business categories.", url: "/industries", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Website Design by Industry | Project Monet", description: "Explore website requirements for twelve local-business categories.", images: ["/og.png"] },
};

export default function IndustriesPage() {
  return <SeoHub eyebrow="Industry website library" heading="Different businesses create different moments of doubt." intro="A useful industry page should reflect how that customer evaluates, compares and contacts the business—not repeat the same template with a new noun." answer="Start with your business category, then compare the recommended information, buying journey and boundaries with your current online presence. Every page links back to transparent pricing and the free concept process." pages={industryPages} itemLabel="business category" path="/industries" />;
}
