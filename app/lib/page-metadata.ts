import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Project Monet",
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Project Monet" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
