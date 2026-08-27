import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { findPublishedArticle } from "../../../../lib/blog-content";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findPublishedArticle(slug);
  if (!article) notFound();

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#111214", color: "#efeee8", padding: "68px 76px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, letterSpacing: 1.5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}><span style={{ width: 22, height: 22, border: "5px solid #ff6a2a", transform: "rotate(45deg)" }} />Project Monet</div>
        <div style={{ display: "flex", color: "#ff6a2a", textTransform: "uppercase" }}>{article.category} · Briefing</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ maxWidth: 1040, fontSize: article.h1.length > 80 ? 56 : 66, lineHeight: 1.02, letterSpacing: -2.5 }}>{article.h1}</div>
        <div style={{ width: 210, height: 8, background: "#ff6a2a" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#969798", fontSize: 22 }}><span>Verified before publication</span><span>projectmonet.space/blog</span></div>
    </div>,
    { width: 1200, height: 630 },
  );
}
