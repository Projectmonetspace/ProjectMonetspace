import type { Metadata } from "next";
import SeoHub from "../../components/seo-hub";
import { workPages } from "../../lib/seo-content";

export const metadata: Metadata = {
  title: "Website Concepts & Design Breakdowns | Project Monet Work",
  description: "Explore clearly labelled Project Monet website concepts for ecommerce, construction, home services, dental clinics, interiors and restaurants.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Website Concepts & Design Breakdowns | Project Monet", description: "Six live website concepts with honest design and customer-journey breakdowns.", url: "/work", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Project Monet Work", description: "Live website concepts with honest design breakdowns.", images: ["/og.png"] },
};

export default function WorkPage() {
  return <SeoHub eyebrow="Project Monet work" heading="Concepts you can enter. Decisions you can inspect." intro="These are live, speculative website concepts—not disguised client case studies. Each breakdown explains the business problem, page hierarchy and what a real production build would still require." answer="Open the concept closest to your business, read the reasoning, then enter the live website. Visual work is labelled honestly: no invented clients, conversion figures, testimonials or outcomes." pages={workPages} itemLabel="concept" path="/work" />;
}
