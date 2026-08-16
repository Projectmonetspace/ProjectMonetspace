import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoDetailPage, { metadataFor } from "../../../components/seo-page";
import { industryPages, pageSlug } from "../../../lib/seo-content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return industryPages.map((page) => ({ slug: pageSlug(page.path) })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPages.find((item) => pageSlug(item.path) === slug);
  return page ? metadataFor(page) : {};
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const page = industryPages.find((item) => pageSlug(item.path) === slug);
  if (!page) notFound();
  return <SeoDetailPage page={page} />;
}
