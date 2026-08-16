import SeoDetailPage, { metadataFor } from "../../../components/seo-page";
import { corePages } from "../../../lib/seo-content";

const page = corePages[0];
export const metadata = metadataFor(page);
export default function WebDesignForLocalBusinessesPage() { return <SeoDetailPage page={page} />; }
