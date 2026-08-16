import SeoDetailPage, { metadataFor } from "../../components/seo-page";
import { corePages } from "../../lib/seo-content";

const page = corePages[4];
export const metadata = metadataFor(page);
export default function WebsiteOwnershipPage() { return <SeoDetailPage page={page} />; }
