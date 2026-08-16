import type { Metadata } from "next";
import SeoHub from "../../components/seo-hub";
import { resourcePages } from "../../lib/seo-content";

export const metadata: Metadata = {
  title: "Small-Business Website Guides | Project Monet",
  description: "Plain-English guides to website pricing, Google Business Profile, Instagram, domains, hosting, ownership, maintenance and website planning.",
  alternates: { canonical: "/resources" },
  openGraph: { title: "Small-Business Website Guides | Project Monet", description: "Useful website decisions explained for business owners.", url: "/resources", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Small-Business Website Guides | Project Monet", description: "Useful website decisions explained for business owners.", images: ["/og.png"] },
};

export default function ResourcesPage() {
  return <SeoHub eyebrow="Project Monet resources" heading="Website decisions explained without the agency fog." intro="These guides answer the questions business owners repeatedly face before, during and after a website project." answer="Choose the decision you are making now. Each guide begins with a direct answer, then explains the trade-offs, ownership implications and questions worth asking any provider." pages={resourcePages} itemLabel="question" path="/resources" />;
}
