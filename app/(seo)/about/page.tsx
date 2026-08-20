import SeoDetailPage, { metadataFor } from "../../components/seo-page";
import { findSeoPage } from "../../lib/seo-content";

const aboutPage = findSeoPage("/about")!;

export const metadata = metadataFor(aboutPage);

export default function AboutPage() {
  return <SeoDetailPage page={aboutPage} />;
}
