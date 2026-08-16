import SeoDetailPage, { metadataFor } from "../../components/seo-page";
import { corePages } from "../../lib/seo-content";

const page = corePages[2];
export const metadata = metadataFor(page);
export default function FreeWebsiteDemoPage() { return <SeoDetailPage page={page} />; }
