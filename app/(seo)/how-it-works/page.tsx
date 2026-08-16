import SeoDetailPage, { metadataFor } from "../../components/seo-page";
import { corePages } from "../../lib/seo-content";

const page = corePages[3];
export const metadata = metadataFor(page);
export default function HowItWorksPage() { return <SeoDetailPage page={page} />; }
