import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoDetailPage, { metadataFor } from "../../../components/seo-page";
import { pageSlug, resourcePages } from "../../../lib/seo-content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return resourcePages.map((page) => ({ slug: pageSlug(page.path) })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = resourcePages.find((item) => pageSlug(item.path) === slug);
  return page ? metadataFor(page) : {};
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const page = resourcePages.find((item) => pageSlug(item.path) === slug);
  if (!page) notFound();
  return <SeoDetailPage page={page} />;
}
