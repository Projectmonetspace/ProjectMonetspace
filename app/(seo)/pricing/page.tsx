import SeoDetailPage, { metadataFor } from "../../components/seo-page";
import { corePages } from "../../lib/seo-content";

const page = corePages[1];
export const metadata = metadataFor(page);
export default function PricingPage() { return <SeoDetailPage page={page} />; }
