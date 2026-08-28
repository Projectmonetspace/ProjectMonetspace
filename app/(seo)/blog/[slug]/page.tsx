import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticlePage from "../../../components/blog-article";
import { findPublishedArticle, publishedBlogArticles } from "../../../lib/blog-content-registry";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedBlogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findPublishedArticle(slug);
  if (!article) return {};
  const path = `/blog/${article.slug}`;
  const image = `${path}/og`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: path },
    authors: [{ name: article.author, url: "https://www.projectmonet.space/about" }],
    openGraph: {
      type: "article",
      url: path,
      siteName: "Project Monet",
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      images: [{ url: image, width: 1200, height: 630, alt: article.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: article.metaTitle, description: article.metaDescription, images: [image] },
  };
}

export default async function ArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const article = findPublishedArticle(slug);
  if (!article) notFound();
  return <BlogArticlePage article={article} />;
}
