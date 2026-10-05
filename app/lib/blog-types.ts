export type ArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "note"; html: string };

export type ArticleSection = {
  id: string;
  title: string;
  blocks: ArticleBlock[];
};

export type BlogCategory =
  | "AI"
  | "Social Media"
  | "Marketing"
  | "Creator Tools"
  | "Web"
  | "Automation"
  | "SEO"
  | "Other";

export type BlogArticle = {
  editorial?: {
    focus: "website-search-conversion";
    businessPurpose: string;
    audience: string;
    originalContribution: string;
    evidenceUrls: string[];
    servicePath: string;
    cta: string;
  };
  status: "published" | "draft";
  articleType: "main" | "supporting";
  cluster: string;
  targetSearchIntent: string;
  targetQuery: string;
  parentSlug?: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  datePublished: string;
  dateModified: string;
  ogAlt: string;
  sections: ArticleSection[];
  sources: { label: string; url: string }[];
  relatedPaths: string[];
};
