export type SeoSection = {
  title: string;
  answer?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoSource = {
  label: string;
  url: string;
};

export type SeoPage = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  quickAnswer: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
  relatedPaths: string[];
  kind: "service" | "industry" | "guide" | "work" | "profile";
  updated?: string;
  published?: string;
  image?: { src: string; alt: string; position?: string };
  demo?: { label: string; url: string };
  sources?: SeoSource[];
};

import { phaseTwoCorePages, phaseTwoResourcePages, workPages } from "./phase-two-content.ts";

const corePagesBase: SeoPage[] = [
  {
    path: "/services/web-design-for-local-businesses",
    title: "Web Design for Local Businesses",
    metaTitle: "Web Design for Local Businesses | Project Monet",
    metaDescription: "Professional, mobile-friendly websites for local businesses. Preview a homepage direction first, then begin the full project with clear scope and ownership.",
    eyebrow: "Website design service",
    heading: "A clearer website for the moment a customer checks you out.",
    intro: "Local customers rarely judge a business from one place alone. They may discover you on Google or Instagram, then open your website to understand your work, prices, location, credibility and next step. Project Monet builds that next step.",
    quickAnswer: "Project Monet designs professional websites for local businesses in India and internationally. A small free homepage concept can show the visual direction before a paid project begins. Packages start at ₹20,000 for Indian clients and $299 for international clients.",
    kind: "service",
    sections: [
      {
        title: "What the website is meant to do",
        answer: "A local-business website should reduce uncertainty and make the next action obvious.",
        paragraphs: [
          "A visitor should be able to understand what you do, whether you serve their area, why your business is credible and how to contact you without hunting through social posts or sending a vague message.",
          "That does not mean every website needs complicated technology. Many businesses need a focused, fast and well-presented website with strong service explanations, genuine proof and a clean enquiry path. Booking, payment and other systems can be added when the business case justifies them.",
        ],
        bullets: [
          "Explain the business and services in plain language",
          "Show real work, facilities, products or people with permission",
          "Make calling, WhatsApp or form enquiries easy on mobile",
          "Connect the website with Google Business Profile and social channels",
          "Give the business control over its domain, hosting and website files",
        ],
      },
      {
        title: "What is included in a typical Project Monet build",
        paragraphs: [
          "The exact deliverables depend on the selected package and approved scope. Standard work can include website design and development, responsive layouts, clear calls to action, basic on-page SEO, contact forms, Google Maps and trust-focused sections.",
          "Domain registration, hosting, paid tools, advanced SEO, copywriting, booking systems, payment gateways and maintenance are separate unless they are explicitly listed in the proposal.",
        ],
      },
      {
        title: "A process that starts with direction, not pressure",
        paragraphs: [
          "The free demo is a compact homepage concept. It is intended to answer one early question: does this visual and strategic direction feel right for your business? It is not a completed website, a free revision round or permission to use the design commercially.",
          "If the direction works, we confirm the package, pages, features, responsibilities and timeline before the 50% advance starts the paid build. The final balance is due before launch and handover.",
        ],
      },
      {
        title: "Who this service is suited to",
        bullets: [
          "Established local businesses whose online presence does not reflect their real quality",
          "New businesses that need a credible foundation before outreach or advertising",
          "Businesses relying on scattered social posts and directory listings",
          "Owners who want transparent scope and full ownership after final payment",
          "Teams that prefer optional maintenance instead of a permanent agency lock-in",
        ],
      },
    ],
    faqs: [
      { question: "Can I see something before paying?", answer: "You can request a small free homepage concept. It demonstrates a direction only; the full website, revisions, SEO setup, integrations, domain connection and launch begin after project confirmation and advance payment." },
      { question: "Do I own the finished website?", answer: "Yes. After final payment, you receive ownership of the website and the available code and files, along with relevant domain, hosting and platform access. Third-party licences remain subject to their own terms." },
      { question: "Are domain and hosting included?", answer: "No. Domain, hosting, paid tools, add-ons and optional maintenance are separate from the website design price unless a written proposal says otherwise." },
      { question: "Is SEO included?", answer: "Packages include the stated basic on-page or technical foundations. A full ongoing SEO campaign, content production and ranking work are separate services and no ranking or lead outcome is guaranteed." },
    ],
    relatedPaths: ["/pricing", "/free-website-demo", "/industries", "/how-it-works"],
  },
  {
    path: "/pricing",
    title: "Website Pricing",
    metaTitle: "Website Design Pricing in India & Worldwide | Project Monet",
    metaDescription: "Project Monet website packages start at ₹20,000 in India and $299 internationally. Compare scope, payment terms, ownership and separate costs.",
    eyebrow: "Clear regional pricing",
    heading: "Know the starting point before the sales call.",
    intro: "Project Monet uses separate INR and USD price tracks. They are not live currency conversions: they reflect different markets, support expectations and payment friction. Every final quote still depends on a written scope.",
    quickAnswer: "Website packages start at ₹20,000 for Indian clients and $299 for international clients. A multi-page Business Website starts at ₹35,000 or $499, while a Growth Website starts at ₹55,000 or $799. Domain, hosting, paid tools, add-ons and maintenance are separate.",
    kind: "service",
    sections: [
      {
        title: "Starter Website — ₹20,000 / $299",
        answer: "A focused one-page website for a small business that needs a professional online presence.",
        bullets: ["One-page website", "Hero, business introduction and services", "Gallery or trust section", "Contact section and WhatsApp/call CTA", "Responsive layout and basic on-page SEO", "One revision round", "Ownership after final payment"],
      },
      {
        title: "Business Website — ₹35,000 / $499",
        answer: "A complete multi-page website for a business with several services, proof points or customer journeys.",
        bullets: ["Up to five agreed pages", "Contact form and Google Maps when needed", "Basic local SEO structure", "Speed optimisation basics", "Analytics or Search Console setup when included", "Two revision rounds", "Ownership after final payment"],
      },
      {
        title: "Growth Website — ₹55,000+ / $799+",
        answer: "A stronger search and lead-generation foundation for businesses that need more depth.",
        bullets: ["Up to eight agreed pages", "Service or location page structure", "Blog or resources setup", "Conversion-focused sections", "Analytics and Search Console setup", "Technical SEO and schema basics", "Three revision rounds", "Ownership after final payment"],
      },
      {
        title: "What is charged separately",
        paragraphs: ["A low headline price can become misleading when essential costs are hidden. Project Monet separates these items so the proposal shows what the build fee covers and what belongs to a third party or optional service."],
        bullets: ["Domain registration and renewal", "Hosting", "Paid themes, plugins, fonts, stock media or software", "Copywriting and brand identity", "Booking, payment or ecommerce systems", "Advanced or ongoing SEO", "Content production and blog writing", "Optional website maintenance"],
      },
      {
        title: "Payment and revision terms",
        paragraphs: ["The standard structure is 50% advance after scope approval and 50% before final launch and handover. Revisions apply to the agreed scope and package; a new feature or direction may require a change request and separate quote."],
      },
    ],
    faqs: [
      { question: "Why are INR and USD prices different?", answer: "They are separate regional pricing tracks, not currency conversions. The international rate accounts for market positioning, communication time, support expectations and payment friction." },
      { question: "Can the final price be higher than the package price?", answer: "Yes. The displayed figures are starting prices. Extra pages, complex features, integrations, content work, ecommerce and custom requirements are quoted after scope review." },
      { question: "Is maintenance compulsory?", answer: "No. Maintenance is optional and billed separately. If maintenance ends, access is handed over according to the agreement and paid scope." },
      { question: "Do you offer unlimited revisions?", answer: "No. Starter includes one revision round, Business includes two, and Growth includes three. Additional or out-of-scope changes may be quoted separately." },
    ],
    relatedPaths: ["/how-it-works", "/website-ownership", "/free-website-demo", "/resources/small-business-website-cost-india"],
  },
  {
    path: "/free-website-demo",
    title: "Free Website Demo",
    metaTitle: "Request a Free Homepage Concept | Project Monet",
    metaDescription: "Request a small homepage concept for your business. See the website direction before starting a paid Project Monet website project.",
    eyebrow: "See the direction first",
    heading: "A preview that helps you decide—not a disguised contract.",
    intro: "A website is difficult to judge from promises alone. The Project Monet demo gives an eligible business a compact homepage direction before the paid build, while keeping the boundary between preview and finished work clear.",
    quickAnswer: "The free demo is a small homepage concept created to show visual and messaging direction. It is not a complete website, does not include revision rounds, and cannot be used commercially. Full work begins only after scope confirmation and the advance payment.",
    kind: "service",
    sections: [
      {
        title: "What the free demo may contain",
        bullets: ["A proposed hero direction", "Initial typography, colour and layout choices", "A compact selection of relevant homepage sections", "Example calls to action", "Business-specific copy direction based on the information supplied"],
      },
      {
        title: "What it does not contain",
        bullets: ["A complete production website", "Unlimited concepts or revisions", "A full SEO campaign", "Domain or hosting setup", "Booking, payment or custom integrations", "Commercial usage rights before payment and contract", "A guarantee that every request will be accepted"],
      },
      {
        title: "What happens after you like the direction",
        paragraphs: ["We confirm the appropriate package, pages, features, content responsibilities and exclusions. Once the written scope is accepted and the 50% advance is paid, the full project begins. Included revisions happen during the paid project, not during the free preview stage."],
      },
      {
        title: "Information that makes the preview more useful",
        bullets: ["Business name and type", "Google Business Profile or current website", "Primary services and service area", "Preferred contact action", "Real photographs or brand assets you have permission to use", "Any practical problem the current online presence creates"],
      },
    ],
    faqs: [
      { question: "Is the free demo really free?", answer: "There is no charge for an accepted concept request. Project Monet may decline requests that are incomplete, unsuitable, duplicated or outside the standard demo process." },
      { question: "Can I ask for revisions to the free demo?", answer: "No. The free demo is a direction preview, not a revision round. Revisions begin only within the limits of a confirmed paid package." },
      { question: "Can I use the demo design elsewhere?", answer: "No. The demo remains Project Monet's protected preview material until the relevant rights are granted through payment and the project agreement." },
      { question: "How do I request one?", answer: "Use the request form on this page or the homepage and share accurate business details, contact information and any relevant public links." },
    ],
    relatedPaths: ["/how-it-works", "/pricing", "/demo-policy", "/services/web-design-for-local-businesses"],
  },
  {
    path: "/how-it-works",
    title: "How the Website Process Works",
    metaTitle: "Website Design Process | Project Monet",
    metaDescription: "Understand the Project Monet process from free concept and scope confirmation to revisions, payment, launch and website handover.",
    eyebrow: "A defined path from idea to handover",
    heading: "Fewer surprises because the decisions happen in order.",
    intro: "Website projects become confusing when design, scope, content, payment and launch are discussed at the same time. Project Monet separates them into clear stages so each approval has a purpose.",
    quickAnswer: "The process has seven stages: share business details, review a free homepage direction, confirm the package and scope, pay the 50% advance, review the paid build, pay the final balance, then launch and receive the agreed handover.",
    kind: "service",
    sections: [
      { title: "1. Share the business context", paragraphs: ["You provide the business name, services, audience, service area, contact details and useful public links. Real photos, brand files and accurate information help the direction feel specific rather than generic."] },
      { title: "2. Review the concept direction", paragraphs: ["For an accepted request, Project Monet creates a compact homepage concept. This stage tests the direction only; it does not include revisions or a complete website."] },
      { title: "3. Confirm package and written scope", paragraphs: ["We agree on pages, features, content responsibilities, revision limits, exclusions, third-party costs and a project schedule. Custom requests are quoted separately instead of being silently assumed."] },
      { title: "4. Start after the advance", paragraphs: ["The standard advance is 50%. Paid production begins after the agreement or accepted terms, scope confirmation and payment are in place."] },
      { title: "5. Review the working website", paragraphs: ["You review the build against the agreed scope and submit consolidated feedback. Included revision rounds depend on the selected package."] },
      { title: "6. Approve, pay and launch", paragraphs: ["The final balance is paid before production launch and handover. Launch checks cover the agreed pages, links, forms, responsive layouts and configured search foundations."] },
      { title: "7. Receive ownership and access", paragraphs: ["After final payment, Project Monet transfers the agreed website assets and relevant platform access. Optional maintenance can continue separately, but ownership does not depend on keeping a maintenance subscription."] },
    ],
    faqs: [
      { question: "When does paid work officially begin?", answer: "After the written scope is confirmed and the required 50% advance is received." },
      { question: "How should feedback be submitted?", answer: "Consolidated feedback is best. It reduces contradictory requests and helps one revision round solve related issues together." },
      { question: "What happens if the scope changes?", answer: "A meaningful change to pages, features, integrations or direction is documented as a change request and may affect the price and schedule." },
      { question: "Is launch the same as handover?", answer: "They are related but distinct. Launch makes the approved website public; handover transfers the agreed files, access and ownership documentation after final payment." },
    ],
    relatedPaths: ["/pricing", "/free-website-demo", "/website-ownership", "/terms"],
  },
  {
    path: "/website-ownership",
    title: "Website Ownership and Handover",
    metaTitle: "Website Ownership & Handover for Clients | Project Monet",
    metaDescription: "Understand who owns the website, domain, hosting, content and platform access after a Project Monet project is paid and completed.",
    eyebrow: "No hostage websites",
    heading: "Your website should remain useful even if our working relationship ends.",
    intro: "Ownership is easy to ignore at the beginning of a project and painful to discover later. Project Monet makes it part of the commercial conversation before the build, not an unexpected condition at handover.",
    quickAnswer: "After final payment, the client owns the completed website and the available custom code and files included in the agreement. The client should also control the domain, hosting and relevant platform accounts. Maintenance is optional and does not replace ownership.",
    kind: "service",
    sections: [
      {
        title: "What is normally handed over",
        bullets: ["The completed website covered by the paid scope", "Available custom source files and project assets", "Relevant hosting and deployment access", "Domain access when Project Monet was authorised to configure it", "Form, analytics or search-platform access created for the project", "A record of important third-party services and renewal responsibilities"],
      },
      {
        title: "What third-party ownership means",
        paragraphs: ["A client can own the website without owning every underlying tool. Fonts, stock images, plugins, themes, hosted platforms and software libraries remain governed by their licences. The handover identifies these dependencies where relevant so ownership is not confused with permission to redistribute third-party products."],
      },
      {
        title: "Why the domain should stay under business control",
        paragraphs: ["The domain is the public address customers remember and search engines associate with the business. Wherever practical, the business should be the registrant and retain recovery access. Project Monet can be granted the limited access needed for configuration rather than becoming the permanent gatekeeper."],
      },
      {
        title: "Maintenance is a service, not a lock-in",
        paragraphs: ["Optional maintenance can cover agreed updates, checks and support. Ending it does not erase the website or transfer ownership back to Project Monet. Any unpaid invoices, third-party renewals or services outside the maintenance scope are handled according to their agreements."],
      },
    ],
    faqs: [
      { question: "Do I own the free demo?", answer: "No. The free demo is a protected concept preview. Usage and ownership rights apply only after the paid project, final payment and the relevant agreement or handover." },
      { question: "Can Project Monet keep my domain?", answer: "The preferred setup is for the client to control the domain account. If temporary access is needed for configuration, the arrangement should be documented and recoverable by the client." },
      { question: "What happens if I cancel maintenance?", answer: "Maintenance ends according to its notice and payment terms. The paid website remains the client's, and relevant access is handed over cleanly if it has not already been transferred." },
      { question: "Can I move to another developer later?", answer: "Yes, subject to the technical limits and licences of the selected platform. The handover is designed to provide the agreed access and files another qualified developer would need." },
    ],
    relatedPaths: ["/resources/should-business-own-domain", "/resources/domain-vs-hosting", "/resources/website-maintenance", "/pricing"],
  },
];

export const industryPages: SeoPage[] = [
  {
    path: "/industries/dentists",
    title: "Website Design for Dentists",
    metaTitle: "Website Design for Dentists & Dental Clinics | Project Monet",
    metaDescription: "Trust-focused dental website design with treatment pages, doctor profiles, mobile appointment paths and clear patient information.",
    eyebrow: "Dental website design",
    heading: "Help a nervous patient feel informed before they call.",
    intro: "A dental website is often visited between a Google Maps result and an appointment decision. The patient may be checking the dentist's credentials, a specific treatment, the clinic environment, location and whether contacting the practice feels straightforward.",
    quickAnswer: "A useful dentist website should clearly present the doctors, treatments, clinic location, hours and appointment options. It should work well on mobile, avoid exaggerated medical promises, and help patients understand what to do next without treating the website as medical advice.",
    kind: "industry",
    demo: { label: "View the 0900 Dental demo", url: "https://dentist-peach-tau.vercel.app/" },
    sections: [
      { title: "What a dental website should make easy", bullets: ["Find the clinic, timings and contact details", "Understand available treatments in plain language", "Review dentist qualifications and areas of practice", "See genuine clinic photographs and facilities", "Request an appointment by call, WhatsApp or form", "Read practical pre-visit information without receiving a diagnosis online"] },
      { title: "Treatment pages need more than a list", paragraphs: ["A long list of procedure names leaves patients with the same uncertainty they had before visiting. Priority treatments can have focused pages explaining who the service may be relevant to, what the consultation covers, what questions to ask and which claims require an in-person assessment.", "Medical and dental copy should not guarantee outcomes or hide material limitations. Final clinical advice belongs with a qualified practitioner who has examined the patient."] },
      { title: "Trust is specific", paragraphs: ["Real doctor profiles, registration details where appropriate, accessible contact information and original clinic photography are stronger than vague claims such as ‘best dentist’. Testimonials and before-and-after media should only be used with genuine permission and in accordance with applicable professional rules."] },
      { title: "A sensible starting scope", paragraphs: ["A small practice may begin with Home, About the Dentists, Treatments, Clinic and Contact. A larger clinic may need individual treatment pages, multiple practitioners, appointment integrations or location pages. Booking systems, medical content writing and advanced local SEO are quoted separately when required."] },
    ],
    faqs: [
      { question: "How much does a dental website cost?", answer: "Project Monet packages start at ₹20,000 in India and $299 internationally. A multi-page clinic website generally begins with the Business package at ₹35,000 or $499; integrations, copywriting and additional treatment pages can increase the scope." },
      { question: "Can you add online appointment booking?", answer: "Yes, when the selected system and workflow are agreed. Booking integrations are not included by default and may involve third-party fees." },
      { question: "Can the website promise treatment results?", answer: "No. Copy should remain accurate and responsible. Diagnosis, suitability and outcomes depend on professional assessment and cannot be guaranteed by a marketing page." },
      { question: "Do we need a page for every treatment?", answer: "Not automatically. Start with the treatments patients actively search for or struggle to understand, then expand when the clinic has accurate, useful content for each page." },
    ],
    relatedPaths: ["/resources/local-business-website-sections", "/pricing", "/free-website-demo", "/industries/clinics", "/work/dental-clinic-website-concept"],
  },
  {
    path: "/industries/restaurants",
    title: "Website Design for Restaurants",
    metaTitle: "Restaurant Website Design for Menus, Bookings & Orders | Project Monet",
    metaDescription: "Mobile-first restaurant websites with clear menus, hours, directions, reservation or ordering paths and an atmosphere customers can understand.",
    eyebrow: "Restaurant website design",
    heading: "Put the menu, mood and next decision within thumb's reach.",
    intro: "Restaurant visitors are rarely browsing patiently. They want to know what you serve, what it costs, whether you are open, where you are and how to reserve or order. The website should answer those questions before decoration gets in the way.",
    quickAnswer: "A restaurant website should prioritise a mobile-readable menu, location, opening hours, phone number and the correct reservation or ordering action. Strong food and venue photography can express the atmosphere, but essential information should never be hidden inside images or a difficult PDF.",
    kind: "industry",
    demo: { label: "View the restaurant demo", url: "https://restaurant-tan-eta.vercel.app/" },
    sections: [
      { title: "The essentials diners look for first", bullets: ["Current menu with prices where appropriate", "Opening hours and holiday updates", "Address, map and parking or access details", "Reservation, call or ordering button", "Dietary and allergen guidance where supplied", "Original food, venue and team photography"] },
      { title: "Make the menu part of the website", paragraphs: ["A downloadable menu can remain available, but it should not be the only format. A structured web menu is easier to read on a phone, easier to update and gives search engines clearer information about cuisine and offerings.", "The menu should reflect what the restaurant can reliably maintain. If prices or dishes change daily, the content workflow matters as much as the visual design."] },
      { title: "One primary action per dining journey", paragraphs: ["A table-booking guest, a delivery customer and someone planning a private event may need different paths. The page can support all three without giving them six equally loud buttons. The restaurant decides the primary commercial action; supporting options remain easy to find."] },
      { title: "What can expand the scope", bullets: ["Multiple branches with separate hours and menus", "Reservation-platform integration", "Online ordering or payment", "Private dining and event enquiries", "Gift cards or loyalty systems", "Frequent menu management and photography"] },
    ],
    faqs: [
      { question: "Can customers order directly from the website?", answer: "Yes, but ordering and payment systems require separate scoping. The website can also link cleanly to an existing delivery or ordering platform." },
      { question: "Can we keep using a PDF menu?", answer: "Yes, as a secondary download. A mobile-readable web menu is usually easier for customers and search engines, especially when the PDF has small text." },
      { question: "How much does a restaurant website cost?", answer: "Project Monet starts at ₹20,000 or $299 for a focused one-page site. Multi-page menus, locations, ordering, reservations and ongoing updates can require a Business, Growth or custom scope." },
      { question: "Do you provide food photography?", answer: "Photography is not included by default. We can design around original images supplied with permission or quote sourcing and production separately." },
    ],
    relatedPaths: ["/resources/local-business-website-sections", "/pricing", "/free-website-demo", "/industries/ecommerce"],
  },
  {
    path: "/industries/salons",
    title: "Website Design for Salons",
    metaTitle: "Salon Website Design for Services & Bookings | Project Monet",
    metaDescription: "Elegant salon websites that present services, specialists, prices, real work and a simple mobile booking path.",
    eyebrow: "Salon website design",
    heading: "Turn visual taste into a booking decision.",
    intro: "Instagram can show recent transformations, but a prospective client still needs a stable place to compare services, understand starting prices, find the salon and choose the right booking route. A salon website connects the inspiration to the appointment.",
    quickAnswer: "A salon website should present services, starting prices or consultation requirements, stylist expertise, location, hours and booking options. Before-and-after work should be genuine and used with permission, while the booking journey should remain simple on mobile.",
    kind: "industry",
    sections: [
      { title: "What clients need before they book", bullets: ["Service categories and realistic descriptions", "Starting prices or a clear consultation note", "Stylist or specialist profiles", "Original portfolio images with client permission", "Location, hours and contact details", "One clear booking or WhatsApp path"] },
      { title: "Organise services the way clients think", paragraphs: ["Internal salon terminology may not match the questions a new client asks. Grouping services by need—hair colour, cuts, skin, nails, bridal or grooming—can make the menu easier to scan. Complex services can explain consultation, duration and starting-price variables without pretending every client receives the same quote."] },
      { title: "Use social media and the website for different jobs", paragraphs: ["Social media is useful for fresh work and personality. The website should hold the dependable information that should not disappear in a feed: service details, policies, team, location, booking route and frequently asked questions. Each can link to the other without duplicating every post."] },
      { title: "Useful additions when the salon is ready", bullets: ["Third-party booking integration", "Branch-specific pages", "Bridal or event enquiry forms", "Gift cards and deposits", "Care guides and policy pages", "Ongoing portfolio and service updates"] },
    ],
    faqs: [
      { question: "Can you connect our existing booking app?", answer: "Usually, yes. The exact setup depends on the provider and is confirmed in scope; subscription or transaction fees remain third-party costs." },
      { question: "Should every service show a price?", answer: "Show fixed prices when they are genuinely fixed. For variable services, a starting price and the factors that affect the final quote are more honest than an artificial single number." },
      { question: "Can Instagram replace the website?", answer: "Instagram can support discovery and proof, while the website provides organised, searchable and business-controlled information. Most salons benefit from using both for different roles." },
      { question: "Can you use photos from our Instagram?", answer: "Only when the salon owns or has permission to use them on a commercial website, including any client likenesses shown." },
    ],
    relatedPaths: ["/resources/website-vs-instagram", "/pricing", "/free-website-demo", "/resources/local-business-website-sections"],
  },
  {
    path: "/industries/interior-designers",
    title: "Website Design for Interior Designers",
    metaTitle: "Website Design for Interior Designers | Project Monet",
    metaDescription: "Portfolio-led interior design websites that explain project type, process, service area and enquiry fit without overwhelming the work.",
    eyebrow: "Interior design website design",
    heading: "Give the work room to speak—and the client a reason to enquire.",
    intro: "An interior designer's website has to do more than display beautiful images. A serious client also wants to understand the type of projects accepted, the design process, geography, level of involvement and whether the studio is suited to the brief.",
    quickAnswer: "An effective interior design website combines a curated project portfolio with clear services, process, studio perspective, service area and a qualifying enquiry form. Project images should include useful context rather than functioning as an unexplained mood board.",
    kind: "industry",
    demo: { label: "View the interior design demo", url: "https://interior-three-omega.vercel.app/" },
    sections: [
      { title: "A portfolio needs context", paragraphs: ["A project becomes more persuasive when the visitor can see the property type, design challenge, scope and relevant decisions. That context helps prospective clients recognise work similar to their own instead of judging only by one photograph.", "Project credits and image permissions should be accurate. If a photograph includes another professional's work, the website should not quietly imply sole authorship."] },
      { title: "What the core website can include", bullets: ["Selected residential, commercial or hospitality projects", "Service scope and project types", "Studio or designer profile", "A clear design process", "Service locations and working model", "A project enquiry form with budget and timeline fields", "Press or awards only when genuine and verifiable"] },
      { title: "Qualify without making the form hostile", paragraphs: ["A useful enquiry form can ask property type, location, approximate area, desired services, budget range and intended start. It should explain why those details matter and still allow a prospective client to share context in their own words."] },
      { title: "Visual quality without a slow experience", paragraphs: ["High-resolution work deserves careful presentation, but sending full original files to every phone can make the portfolio frustrating. Responsive image sizes, purposeful cropping and restrained motion protect both the work and the browsing experience."] },
    ],
    faqs: [
      { question: "Can the website include a large project gallery?", answer: "Yes. The project count, image volume and desired interactions affect the package and performance work, so the gallery is scoped before production." },
      { question: "Do we need to publish project budgets?", answer: "Not necessarily. You can state minimum engagement levels or use budget ranges in the enquiry form if that helps qualify projects without disclosing client finances." },
      { question: "Can you write the project case studies?", answer: "Copywriting can be added separately. The studio must supply accurate project facts, permissions and credits." },
      { question: "How much does an interior design website cost?", answer: "Project Monet starts at ₹20,000 or $299. Portfolio-heavy multi-page sites commonly require Business, Growth or custom scope depending on projects, copy and imagery." },
    ],
    relatedPaths: ["/resources/local-business-website-sections", "/pricing", "/free-website-demo", "/industries/construction-companies"],
  },
  {
    path: "/industries/construction-companies",
    title: "Website Design for Construction Companies",
    metaTitle: "Construction Company Website Design | Project Monet",
    metaDescription: "Credibility-focused construction websites for capabilities, sectors, completed projects, safety information and qualified enquiries.",
    eyebrow: "Construction website design",
    heading: "Make capability easier to verify before the first meeting.",
    intro: "Construction buyers, partners and property owners look for evidence that a company can handle the relevant scale and sector. The website should connect capability claims to completed work, team experience and a professional enquiry path.",
    quickAnswer: "A construction company website should clearly explain services, sectors, geographic coverage, completed projects and how to request a quote or capability discussion. Licences, certifications, safety claims and project figures should be published only when current and verifiable.",
    kind: "industry",
    demo: { label: "View the construction demo", url: "https://construction-azure-five.vercel.app/" },
    sections: [
      { title: "Build the structure around buying questions", bullets: ["What type and scale of work does the company undertake?", "Which sectors and locations are served?", "What relevant projects have been completed?", "Who leads delivery and coordination?", "Which certifications or registrations are current?", "How should a prospect share drawings, BOQs or project details securely?"] },
      { title: "Projects should demonstrate relevance", paragraphs: ["A gallery of finished buildings is visually strong but incomplete. A project page can identify the sector, location, scope, delivery model and challenges that the company is permitted to discuss. Confidential projects can remain anonymous rather than inventing details."] },
      { title: "Separate proof from marketing language", paragraphs: ["Claims such as ‘zero incidents’, ‘on-time delivery’ or a large square-footage total require reliable internal records. The website can be confident without publishing numbers that cannot be substantiated. Current client approvals and photography rights matter too."] },
      { title: "Enquiries may need more structure", paragraphs: ["A quote form can collect project type, location, approximate size, stage, expected start and document availability. Sensitive drawings or commercial files should not be requested through an insecure generic form; the process can move to an approved channel after initial qualification."] },
    ],
    faqs: [
      { question: "Can the website host tender documents?", answer: "A public or controlled document area can be scoped, but permissions, file security and update responsibility need to be defined separately." },
      { question: "Can we show client logos?", answer: "Only with permission or another valid right to do so. A commercial relationship does not automatically grant marketing usage rights." },
      { question: "Do you create project case studies?", answer: "The layout can support them. Copywriting and project documentation may be added, while the construction company remains responsible for accurate facts and approvals." },
      { question: "What package suits a construction company?", answer: "A multi-page Business or Growth website is usually more suitable than a single page because capabilities, sectors and projects need separate space. Final scope determines the quote." },
    ],
    relatedPaths: ["/industries/interior-designers", "/pricing", "/free-website-demo", "/website-ownership", "/industries/real-estate"],
  },
  {
    path: "/industries/clinics",
    title: "Website Design for Clinics",
    metaTitle: "Clinic Website Design for Clear Patient Information | Project Monet",
    metaDescription: "Responsible clinic website design with practitioner profiles, services, timings, accessibility information and simple appointment routes.",
    eyebrow: "Clinic website design",
    heading: "Clear patient information without turning marketing copy into medical advice.",
    intro: "A clinic website must balance visibility with responsibility. Patients need to understand the practitioners, services, timings and appointment process, while health information must avoid diagnosis, fear-based selling or guaranteed outcomes.",
    quickAnswer: "A clinic website should publish accurate practitioner details, services, location, timings, accessibility information and appointment routes. Health content should be reviewed by qualified professionals and should clearly distinguish general information from personalised medical advice.",
    kind: "industry",
    sections: [
      { title: "Core information patients should find quickly", bullets: ["Practitioner names, qualifications and relevant registrations", "Services and appropriate consultation pathways", "Clinic address, timings and accessibility", "Appointment, call and emergency-contact guidance", "Accepted payment or insurance information when accurate", "Privacy-conscious contact forms"] },
      { title: "Service pages should set expectations", paragraphs: ["A service page can explain what the clinic offers, when someone might seek a consultation and what to bring. It should not diagnose a visitor or imply that one treatment is suitable before assessment. A clear emergency disclaimer is important where the form is not monitored continuously."] },
      { title: "Protect patient privacy", paragraphs: ["A general website form should collect only the information needed to respond. Detailed medical records, reports or sensitive symptoms require an appropriately secured and approved system, not an ordinary marketing form by default."] },
      { title: "Review and update responsibility", paragraphs: ["Practitioner details, hours, services and health content can change. The clinic should assign an owner for factual review, especially for regulated claims, fees, urgent-care instructions and credentials."] },
    ],
    faqs: [
      { question: "Can patients upload medical reports?", answer: "That requires separate privacy, security and workflow review. It should not be added to a standard contact form without an appropriate system." },
      { question: "Can you write medical content?", answer: "Copy support can be scoped, but factual health content must be reviewed and approved by an appropriately qualified professional." },
      { question: "Can the website offer emergency advice?", answer: "It can display clinic-approved emergency contact instructions, but a website form should not be presented as an emergency service unless it truly is monitored and equipped for that purpose." },
      { question: "How is a clinic site different from a normal service site?", answer: "It needs stronger attention to credentials, medical-claim accuracy, privacy, urgent-care boundaries and accessibility while still providing a simple appointment path." },
    ],
    relatedPaths: ["/industries/dentists", "/pricing", "/free-website-demo", "/privacy"],
  },
  {
    path: "/industries/gyms",
    title: "Website Design for Gyms",
    metaTitle: "Gym Website Design for Memberships & Trial Leads | Project Monet",
    metaDescription: "Energetic gym websites with membership context, class schedules, trainer profiles, facilities and a focused trial or enquiry path.",
    eyebrow: "Gym website design",
    heading: "Move someone from curiosity to the right first visit.",
    intro: "A gym prospect may be comparing distance, atmosphere, equipment, coaching and price—all from a phone. A useful website shows what the experience is like and makes the next step clear without relying on unrealistic transformation promises.",
    quickAnswer: "A gym website should explain membership options, facilities, class schedules, trainers, location and the process for a tour or trial. Real imagery and clear expectations build more trust than generic fitness photography or guaranteed body-transformation claims.",
    kind: "industry",
    demo: { label: "View the Vital Gym demo", url: "https://vitalgym-ashy.vercel.app" },
    sections: [
      { title: "Information that reduces membership friction", bullets: ["Location, hours and contact details", "Facilities and equipment that are genuinely available", "Membership types or a clear consultation path", "Class timetable and booking method", "Trainer profiles and relevant qualifications", "Trial, tour or callback CTA"] },
      { title: "Choose the primary conversion", paragraphs: ["A gym can ask visitors to claim a trial, book a tour, call, WhatsApp or buy a membership. Presenting all options with equal weight creates indecision. The website should promote the action the team can follow up consistently and keep secondary routes accessible."] },
      { title: "Show the actual environment", paragraphs: ["Prospects often care about crowding, cleanliness, training culture and whether people like them will feel comfortable. Original photographs and a short facility walkthrough can answer those questions more honestly than stock images of professional athletes."] },
      { title: "Keep changing information maintainable", paragraphs: ["Class times, trainers and offers change. The chosen website setup should match who will update them and how often. A highly animated schedule that stays outdated is less useful than a simple current timetable."] },
    ],
    faqs: [
      { question: "Can members buy plans online?", answer: "Yes, with a separately scoped payment and membership workflow. Gateway, platform and transaction fees are not included in standard website pricing." },
      { question: "Can we add a live class schedule?", answer: "Yes. It can be managed on the site or connected to an existing platform, depending on update needs and budget." },
      { question: "Can you use transformation photos?", answer: "Only when they are genuine, responsibly presented and covered by clear permission. Results should never be guaranteed." },
      { question: "What is a good first version?", answer: "For one location, a focused site with facilities, coaching, memberships, schedule, location and trial CTA can be enough. Multiple branches or systems may need a larger scope." },
    ],
    relatedPaths: ["/resources/local-business-website-sections", "/pricing", "/free-website-demo", "/resources/website-maintenance"],
  },
  {
    path: "/industries/real-estate",
    title: "Website Design for Real Estate Businesses",
    metaTitle: "Real Estate Website Design for Projects & Enquiries | Project Monet",
    metaDescription: "Real estate websites for projects, listings, locality context, agent enquiries and clear compliance information.",
    eyebrow: "Real estate website design",
    heading: "Help a buyer understand the property before asking for a brochure.",
    intro: "Property decisions involve more than a polished render. Buyers and investors need location context, configuration, status, amenities, pricing guidance and a trustworthy contact route. The website should organise those questions without inventing certainty.",
    quickAnswer: "A real estate website should provide accurate project or listing information, location context, approved media, contact details and required regulatory disclosures. Enquiry forms should route leads clearly, while availability, pricing and possession claims must stay current.",
    kind: "industry",
    demo: { label: "View the Estatery demo", url: "https://estatery-landing.vercel.app" },
    sections: [
      { title: "What each property page should clarify", bullets: ["Property type, configuration and location", "Current status and availability wording", "Approved plans, images and specifications", "Amenities without exaggerated claims", "Price guidance or a transparent enquiry step", "Agent or team contact route", "Applicable registration and disclaimer information"] },
      { title: "Separate discovery from qualification", paragraphs: ["The public page should answer enough to establish fit. The enquiry can then ask budget, preferred configuration, purchase purpose and contact preference. Hiding every useful detail behind a phone-number form may increase raw leads while reducing trust and quality."] },
      { title: "Listings need an update workflow", paragraphs: ["Availability and prices can change quickly. Before creating a large listing system, decide who owns updates, how often information is checked and what happens to sold or unavailable properties. Stale inventory damages trust and can create compliance problems."] },
      { title: "Use location content carefully", paragraphs: ["A locality guide should contain useful transport, infrastructure and lifestyle context supported by reliable information. It should not promise appreciation, rental yield or future development outcomes that the business cannot substantiate."] },
    ],
    faqs: [
      { question: "Can the website import property listings automatically?", answer: "Possibly, if the source offers a suitable feed or API. Data mapping, licences, update frequency and platform fees require separate scoping." },
      { question: "Can each agent receive their own leads?", answer: "Yes. Lead-routing logic can be designed around project, location or agent, but it must be defined and tested as part of the scope." },
      { question: "Can we publish project renders?", answer: "Only approved media should be used, with the relevant illustrative disclaimers and regulatory information." },
      { question: "Is real estate SEO included?", answer: "Basic page foundations may be included as stated in the package. Competitive project, locality and listing SEO requires separate ongoing research and content work." },
    ],
    relatedPaths: ["/pricing", "/free-website-demo", "/resources/local-business-website-sections", "/website-ownership"],
  },
  {
    path: "/industries/jewellery",
    title: "Website Design for Jewellery Businesses",
    metaTitle: "Jewellery Website Design for Collections & Appointments | Project Monet",
    metaDescription: "Premium jewellery websites for collections, craftsmanship, store visits, custom enquiries and carefully scoped ecommerce.",
    eyebrow: "Jewellery website design",
    heading: "Present the detail and trust that a small product card cannot carry.",
    intro: "Jewellery buyers may discover a piece through social media, then look for material details, craftsmanship, policies and a credible business behind it. The website can support appointments, custom enquiries or direct sales depending on how the brand actually operates.",
    quickAnswer: "A jewellery website should combine strong product imagery with accurate material details, collection structure, business information and a clear purchase or appointment path. Ecommerce requires additional work for inventory, payments, shipping, returns, security and product-data management.",
    kind: "industry",
    sections: [
      { title: "Choose the commercial model first", bullets: ["Editorial catalogue with store or WhatsApp enquiries", "Appointment-led high-value sales", "Custom design consultation", "Full ecommerce with checkout", "Hybrid model with selected products online"] },
      { title: "Product information is part of the design", paragraphs: ["A beautiful photograph cannot replace accurate information about metal, purity, stone, size, weight conventions, care and what is included. The product template should make those details readable without overwhelming the visual experience."] },
      { title: "Trust belongs in the buying journey", paragraphs: ["Store details, business identity, certification practices, shipping, returns, resizing, warranty and support should be easy to find. Claims about materials or stones must match the documentation and policies the business actually provides."] },
      { title: "Why ecommerce is quoted separately", paragraphs: ["A catalogue page and a functioning store are different products. Ecommerce adds product data, inventory behaviour, payment configuration, order notifications, delivery rules, taxes, customer support and legal policies. The quote depends on the selected platform and operational workflow."] },
    ],
    faqs: [
      { question: "Can we start without online checkout?", answer: "Yes. A catalogue and appointment or WhatsApp enquiry path can validate the presentation before the business commits to full ecommerce operations." },
      { question: "Do you photograph jewellery?", answer: "Product photography and retouching are not included by default. Supplied media must be owned or licensed for commercial use." },
      { question: "Can prices change with metal rates?", answer: "Dynamic pricing may be possible depending on the platform and data source, but the calculation, reliability and update process require custom scoping." },
      { question: "What legal pages does a jewellery store need?", answer: "The exact requirements depend on where and how it sells. Ecommerce commonly needs clear privacy, terms, shipping, return, cancellation and product-information policies reviewed for the business." },
    ],
    relatedPaths: ["/industries/ecommerce", "/pricing", "/free-website-demo", "/website-ownership"],
  },
  {
    path: "/industries/ecommerce",
    title: "Ecommerce Website Design",
    metaTitle: "Ecommerce Website Design for Focused Online Stores | Project Monet",
    metaDescription: "Ecommerce website design covering product structure, mobile shopping, checkout, policies, analytics and the operational work behind a store.",
    eyebrow: "Ecommerce website design",
    heading: "Design the store around fulfilment, not just the first sale.",
    intro: "An online store is a customer interface for a larger operation. Product data, stock, payment, shipping, returns and support have to work together. Good visual design helps the sale, but operational clarity protects the experience after checkout.",
    quickAnswer: "An ecommerce website needs clear product information, mobile navigation, secure payment, shipping and return policies, order communication and an update process. Because catalogue size and integrations vary widely, ecommerce is scoped and quoted separately rather than treated as a standard brochure site.",
    kind: "industry",
    demo: { label: "View the Shop Co demo", url: "https://ecommerce-figma-build.vercel.app/shop-co.html" },
    sections: [
      { title: "Decisions required before design", bullets: ["Product count, variants and categories", "Inventory source and update responsibility", "Payment gateway and settlement requirements", "Shipping zones, rates and fulfilment", "Returns, cancellations and support workflow", "Tax and invoice requirements", "Analytics, marketing and consent tools"] },
      { title: "Product pages should answer purchase questions", paragraphs: ["Useful pages combine clear imagery, price, variants, availability, delivery expectations, return information and product-specific details. Copy should reduce uncertainty without manufacturing urgency, fake scarcity or unsupported claims."] },
      { title: "Mobile checkout is the critical path", paragraphs: ["Navigation, filters, cart and payment must work with one hand and imperfect connections. Every unnecessary field or surprise charge adds friction. The final experience also depends on the chosen platform and payment provider, not front-end design alone."] },
      { title: "Plan for the work after launch", paragraphs: ["Someone must add products, correct stock, answer order questions, manage returns and keep policies current. The handover should identify who owns those tasks and which platform permissions they need."] },
    ],
    faqs: [
      { question: "How much does an ecommerce website cost?", answer: "It depends on catalogue size, platform, product data, payments, shipping and integrations. Project Monet provides a custom quote after these operational requirements are understood." },
      { question: "Can you add Razorpay or another gateway?", answer: "Gateway setup can be scoped, subject to the provider approving the business and website. Project Monet cannot guarantee account approval or settlement." },
      { question: "Will I be able to add products myself?", answer: "That is usually the goal when a suitable commerce platform is selected. Training and content migration should be explicitly included in the scope." },
      { question: "Is ongoing store management included?", answer: "No. Product entry, inventory, customer service, promotions and maintenance are separate unless the proposal lists them." },
    ],
    relatedPaths: ["/industries/jewellery", "/pricing", "/website-ownership", "/resources/website-maintenance"],
  },
  {
    path: "/industries/home-services",
    title: "Website Design for Home-Service Businesses",
    metaTitle: "Home-Service Business Website Design | Project Monet",
    metaDescription: "Lead-focused websites for cleaning, repairs, maintenance and other home services with clear areas, response expectations and request forms.",
    eyebrow: "Home-service website design",
    heading: "Make it easy to know whether you cover the job and the address.",
    intro: "A home-service customer often arrives with an immediate practical problem. They need to know whether the company performs the service, reaches their location, is trustworthy and can respond through a channel they are comfortable using.",
    quickAnswer: "A home-service website should clearly list services, service areas, hours, contact routes and what information is needed for an estimate. Trust should come from verifiable business details, real work and transparent expectations rather than fake urgency or unprovable guarantees.",
    kind: "industry",
    demo: { label: "View the AHS home-services demo", url: "https://ahs-teal.vercel.app/" },
    sections: [
      { title: "Structure the website around real requests", bullets: ["Service categories with inclusions and exclusions", "Areas, postcodes or cities genuinely covered", "Operating hours and realistic response expectations", "Call, WhatsApp or quote-request action", "Photos of real work and team where permitted", "Visit fee or estimate policy when applicable", "Licence or insurance details only when current"] },
      { title: "Service-area pages need substance", paragraphs: ["A business serving several locations does not need dozens of pages that merely change the city name. A location deserves a page when it has distinct coverage, team information, examples, logistics or customer questions. Otherwise, one accurate service-area section is more useful."] },
      { title: "Ask only what helps the team respond", paragraphs: ["An initial request may need service type, location, urgency, preferred contact and a short description. Photo uploads or detailed property information require appropriate storage and privacy handling; they should be added intentionally, not because every competitor form has them."] },
      { title: "Set expectations before the technician arrives", paragraphs: ["The website can explain assessment, estimates, parts, cancellation windows and what the customer should prepare. Clear policies reduce misunderstandings without making the page feel defensive."] },
    ],
    faqs: [
      { question: "Should we create a page for every city?", answer: "Only when each page has genuine local value. Mass-produced city pages with nearly identical copy can confuse users and weaken the site." },
      { question: "Can customers upload a photo of the problem?", answer: "Yes, if a secure and practical upload workflow is included. File storage, privacy and team access need to be defined." },
      { question: "Can the website show instant estimates?", answer: "Only when pricing rules are reliable enough to automate. Otherwise, a guided quote request may be more accurate and safer for the business." },
      { question: "What is a good CTA for home services?", answer: "Use the action the team can answer consistently—often call, WhatsApp or request a quote—and state realistic response hours." },
    ],
    relatedPaths: ["/resources/google-business-profile-vs-website", "/pricing", "/free-website-demo", "/resources/local-business-website-sections", "/work/ahs-home-services-website-concept"],
  },
  {
    path: "/industries/coaches-consultants",
    title: "Website Design for Coaches and Consultants",
    metaTitle: "Website Design for Coaches & Consultants | Project Monet",
    metaDescription: "Clear personal-brand websites for expertise, offers, fit, calls and useful resources without inflated outcome promises.",
    eyebrow: "Coach and consultant website design",
    heading: "Explain the value before asking someone to book a call.",
    intro: "A coach or consultant often sells an invisible service. The website has to make the audience, problem, working method and offer understandable—without relying on vague transformation language or turning every visitor into an unqualified calendar booking.",
    quickAnswer: "A coach or consultant website should define who the service is for, the problem addressed, the engagement format, credible experience and the appropriate next step. Claims about income, health, career or business outcomes should remain truthful and avoid guarantees.",
    kind: "industry",
    sections: [
      { title: "Clarity before personality", bullets: ["Specific audience and problem", "What the engagement includes", "Who may not be a fit", "Background and relevant experience", "A useful point of view demonstrated through content", "Call, application or enquiry route", "Transparent terms for programmes or digital products"] },
      { title: "Choose the right lead filter", paragraphs: ["An open calendar is convenient but can fill with poor-fit calls. Depending on the offer, the better path may be a short application, a paid consultation, an email enquiry or a useful resource before booking. The website should match the actual sales process."] },
      { title: "Proof needs context", paragraphs: ["A testimonial is stronger when it is genuine, permitted and clear about the type of engagement. It should not imply that every client will achieve the same result. Anonymous or edited proof should not be used in a misleading way."] },
      { title: "Build authority through useful explanations", paragraphs: ["A focused resource library can show how the consultant thinks and answer questions before a call. It works best when the material contains original experience and decisions, not generic articles written only to occupy keywords."] },
    ],
    faqs: [
      { question: "Can the website connect to Calendly or another scheduler?", answer: "Yes. Scheduling integrations can be included or quoted depending on the selected tool and desired qualification flow." },
      { question: "Do I need to publish my prices?", answer: "Not always. You can show clear starting points, programme prices or explain that scope is custom. The choice should reduce unsuitable enquiries without hiding essential conditions." },
      { question: "Can you build a course platform?", answer: "A course platform is separate from a standard marketing website and requires custom scoping for content access, payments, accounts and support." },
      { question: "Can you write the personal brand copy?", answer: "Copywriting can be quoted separately. The coach or consultant must provide accurate experience, offer details and substantiation for claims." },
    ],
    relatedPaths: ["/resources/website-vs-instagram", "/pricing", "/free-website-demo", "/resources/local-business-website-sections", "/industries/gyms"],
  },
];

const resourcePagesBase: SeoPage[] = [
  {
    path: "/resources/small-business-website-cost-india",
    title: "How Much Does a Small-Business Website Cost in India?",
    metaTitle: "Small-Business Website Cost in India (2026 Guide)",
    metaDescription: "A practical 2026 guide to small-business website costs in India, including Project Monet packages, separate expenses and the choices that change a quote.",
    eyebrow: "Website pricing guide",
    heading: "The useful price is the one attached to a defined scope.",
    intro: "Website estimates vary because the word ‘website’ can mean a single presentation page, a multi-page lead-generation site or an online store connected to payments and operations. Comparing quotes requires comparing what is actually being delivered.",
    quickAnswer: "At Project Monet, a small-business website starts at ₹20,000 for a one-page Starter Website. A multi-page Business Website starts at ₹35,000, and a Growth Website starts at ₹55,000. Domain, hosting, paid tools, maintenance, add-ons and out-of-scope content are separate.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "Project Monet package starting points", bullets: ["Starter Website — ₹20,000: one-page presence, basic SEO and one revision round", "Business Website — ₹35,000: up to five agreed pages, basic local SEO and two revision rounds", "Growth Website — ₹55,000+: up to eight agreed pages, stronger search structure and three revision rounds"] },
      { title: "What usually changes the price", paragraphs: ["Page count matters, but two five-page websites can require very different work. A service business with supplied copy and photographs is not the same as a clinic needing professionally reviewed content or a retailer needing hundreds of products."], bullets: ["Original copywriting and content strategy", "Number and complexity of page templates", "Booking, payment, ecommerce or account features", "Product, listing or portfolio data", "Photography, video and asset preparation", "Third-party platform integration", "Migration from an existing website", "Accessibility, compliance or multilingual requirements"] },
      { title: "Costs outside the design quote", paragraphs: ["A professional quote should distinguish the agency's work from products purchased from other companies. These costs may recur even when the website build is a one-time project."], bullets: ["Domain registration and annual renewal", "Hosting or platform subscription", "Business email", "Paid plugins, apps, fonts or media", "Payment-gateway and transaction charges", "Ongoing maintenance, SEO or content"] },
      { title: "How to compare two website proposals", bullets: ["Check the exact pages and features", "Confirm who writes and uploads content", "Count revision rounds and define what a revision means", "Identify all recurring costs", "Ask who controls the domain, hosting and accounts", "Confirm what is handed over after final payment", "Look for exclusions instead of relying on a headline total"] },
      { title: "When the cheapest quote becomes expensive", paragraphs: ["A low price can be reasonable for a limited scope. It becomes costly when the business later discovers that it cannot edit the website, does not control the domain, must pay to leave the provider or needs the entire site rebuilt to add a basic function. Ownership and technical fit are part of the value, not administrative details."] },
    ],
    faqs: [
      { question: "Is ₹20,000 the final price for every one-page website?", answer: "No. It is the Starter package price for its defined scope. Custom animation, copywriting, integrations, ecommerce and other additions can change the quote." },
      { question: "Is hosting included in the website price?", answer: "No. Hosting, domain, paid tools and maintenance are charged separately unless a written proposal specifically includes an item." },
      { question: "Why does ecommerce cost more?", answer: "A store adds product data, inventory, payments, shipping, returns, customer communication and security-sensitive workflows. It is operational software as well as a marketing website." },
      { question: "How are payments split?", answer: "Project Monet normally requires 50% advance to begin the paid build and the remaining 50% before launch and handover." },
    ],
    relatedPaths: ["/pricing", "/how-it-works", "/website-ownership", "/free-website-demo", "/resources/one-page-vs-multi-page-website"],
  },
  {
    path: "/resources/google-business-profile-vs-website",
    title: "Do You Need a Website If You Have a Google Business Profile?",
    metaTitle: "Google Business Profile vs Website: Do You Need Both?",
    metaDescription: "A Google Business Profile can help customers find you. A website helps them evaluate you. Learn what each controls and why many local businesses use both.",
    eyebrow: "Local visibility question",
    heading: "Google can help someone find you. Your website can help them choose you.",
    intro: "A Google Business Profile is valuable and free. It can show a local business in Search and Maps with contact information, hours, photos and reviews. The question is not whether the profile is useful; it is whether that small standardised profile can answer the full set of questions a customer has before buying.",
    quickAnswer: "You can operate a Google Business Profile without a website, but the two do different jobs. The profile supports discovery on Google Search and Maps. A website gives the business more control over its services, proof, positioning, lead capture and customer journey. For many established local businesses, using both is stronger than treating them as substitutes.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "What a Google Business Profile does well", bullets: ["Shows the business in eligible local Search and Maps results", "Publishes hours, phone, address or service area", "Collects and displays customer reviews", "Supports photos, updates and basic actions", "Provides a familiar discovery point for nearby customers"] },
      { title: "What the website adds", bullets: ["Detailed service and product explanations", "A presentation designed around the brand", "Case studies, portfolios and structured proof", "Forms that collect the information needed for a useful response", "Pages that can target distinct services and questions", "An asset on a domain controlled by the business"] },
      { title: "The Bhiwadi interior-designer example", paragraphs: ["Imagine a customer searches for an interior designer and sees several profiles. Hours, ratings and photographs help create a shortlist. The next question is comparative: which studio has handled a project like mine, what is its design approach, where does it work and what happens after I enquire? A well-built website can answer those questions without asking the customer to reconstruct the business from scattered posts."] },
      { title: "How the two should work together", paragraphs: ["Keep the business name, contact details, hours and service information consistent. Link the profile to the most relevant website page, use the website to explain depth, and use genuine reviews and profile activity as complementary trust signals. Neither channel should contain promises the business cannot keep."] },
      { title: "When a profile alone may be enough for now", paragraphs: ["A newly started solo service with a tiny budget and a simple offer may begin with a complete, accurate profile. The website becomes more valuable when customers need to compare work, understand multiple services, submit qualified details or see a brand that reflects the quality of the offline business."] },
    ],
    faqs: [
      { question: "Is a Google Business Profile free?", answer: "Google states that creating and managing a Business Profile is free. Eligibility and representation rules still apply." },
      { question: "Will a website guarantee higher Google rankings?", answer: "No. A useful, crawlable website creates more opportunities to explain services and be discovered, but rankings depend on many factors and are never guaranteed." },
      { question: "Should the website replace the profile?", answer: "Usually no. Keep the profile accurate and use it as a local discovery channel that leads customers into the deeper website experience." },
      { question: "What should the profile link to?", answer: "For a single-location business, the homepage or most relevant location page is common. Campaign parameters can help analytics identify profile traffic." },
    ],
    relatedPaths: ["/services/web-design-for-local-businesses", "/industries/home-services", "/resources/website-vs-instagram", "/free-website-demo"],
    sources: [{ label: "Create or claim a Google Business Profile", url: "https://support.google.com/business/answer/2911778" }, { label: "Google guidelines for representing your business", url: "https://support.google.com/business/answer/3038177" }],
  },
  {
    path: "/resources/website-vs-instagram",
    title: "Website vs Instagram for a Local Business",
    metaTitle: "Website vs Instagram: What Does a Local Business Need?",
    metaDescription: "Instagram supports discovery and ongoing content. A website provides organised, searchable, business-controlled information. Learn how to use both.",
    eyebrow: "Channel comparison",
    heading: "Use the feed for attention and the website for decisions.",
    intro: "Instagram is excellent at showing recent work, personality and momentum. It is less effective at holding stable information that a customer needs to compare services, understand policies or submit a structured enquiry. A website and an Instagram account are not duplicate assets.",
    quickAnswer: "Instagram is useful for discovery, community and fresh visual proof. A website is better for organised service information, search visibility, lead capture and control over the customer journey. Most local businesses should connect the two rather than choose one forever.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "Where Instagram is stronger", bullets: ["Frequent visual updates", "Short-form reach and conversation", "Behind-the-scenes personality", "Social proof through public interaction", "Direct messages for informal questions"] },
      { title: "Where a website is stronger", bullets: ["Stable pages for every core service", "Searchable explanations and FAQs", "Clear ownership, policies and contact details", "Forms designed for useful enquiries", "Analytics across a deliberate customer path", "Presentation not limited to a social platform's layout"] },
      { title: "The problem with making customers search a feed", paragraphs: ["A potential client should not need to scroll through six months of posts to find starting prices, service areas or the booking policy. Important information gets buried as the feed grows. The website can keep those facts in predictable places while Instagram links to them."] },
      { title: "A practical division of work", paragraphs: ["Post recent projects, timely offers and day-to-day culture on Instagram. Use the website for your core offer, best work, process, policies, team and enquiry flow. Link specific posts to relevant pages instead of sending every visitor to an undifferentiated homepage."] },
      { title: "Do not build on a platform you do not control", paragraphs: ["A business does not control a social platform's algorithm, interface or account decisions. That is not a reason to abandon social media; it is a reason to keep a domain, website and customer information strategy that can survive changes elsewhere."] },
    ],
    faqs: [
      { question: "Can a small business start with Instagram only?", answer: "Yes, especially while validating a simple offer. A website becomes more useful as the service range, proof, search demand and lead qualification needs grow." },
      { question: "Will a website automatically get traffic?", answer: "No. The website needs promotion, search relevance, links and time. Its immediate value can still include trust and a clearer destination for people already discovering the business elsewhere." },
      { question: "Should all Instagram posts appear on the website?", answer: "Not usually. Curate the strongest relevant work and keep critical information native to the website instead of making it dependent on an embedded feed." },
      { question: "What link should go in the Instagram bio?", answer: "Use the page that best matches the current objective—often a focused service, booking or enquiry page rather than a crowded list of unrelated links." },
    ],
    relatedPaths: ["/resources/google-business-profile-vs-website", "/services/web-design-for-local-businesses", "/industries/salons", "/industries/coaches-consultants"],
  },
  {
    path: "/resources/domain-vs-hosting",
    title: "What Is the Difference Between a Domain and Hosting?",
    metaTitle: "Domain vs Hosting: A Plain-English Guide for Businesses",
    metaDescription: "A domain is the website address; hosting stores and serves the website. Learn who charges for each, what renews and what a business should control.",
    eyebrow: "Website ownership guide",
    heading: "One is the address. The other is where the website runs.",
    intro: "Domain and hosting are often sold together, which makes them sound like one product. They are separate services with different providers, renewal dates and access risks. Understanding the distinction makes handover and vendor changes much easier.",
    quickAnswer: "A domain is the human-readable address people type, such as projectmonet.space. Hosting is the infrastructure that stores or serves the website files so the site can load. You normally pay separately to register the domain and to host the website, even when one provider bundles the invoices.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "What the domain controls", paragraphs: ["The domain connects a memorable name to online services through DNS records. Those records can point the website to one host and business email to another provider. Losing domain access can affect both, which is why the registrant and recovery details matter."] },
      { title: "What hosting controls", paragraphs: ["Hosting makes the website available on the internet. Depending on the platform, it may include servers, deployment, content management, databases, security features or bandwidth. Moving hosts can be possible without changing the public domain, provided the website and platform allow migration."] },
      { title: "A simple analogy—and where it stops", paragraphs: ["People compare a domain to a street address and hosting to the building. It is useful for the basic distinction, but digital systems are more flexible: the same domain can route website, email and subdomains to different services, and hosting can change without asking customers to learn a new address."] },
      { title: "What a business should record", bullets: ["Domain registrar and registrant details", "Renewal date, auto-renew status and payment owner", "Recovery email and multi-factor authentication", "DNS provider and nameservers", "Website hosting provider and project owner", "Business email provider", "Who has administrative access and why"] },
      { title: "How Project Monet treats the costs", paragraphs: ["Domain and hosting are separate from Project Monet's website design price. The recommended arrangement is business-controlled accounts with documented access granted for the work, followed by a clear handover after final payment."] },
    ],
    faqs: [
      { question: "Can I buy a domain from one company and host elsewhere?", answer: "Yes. DNS records can connect a domain registrar to a separate hosting provider." },
      { question: "Will changing hosting change my domain name?", answer: "Not necessarily. The domain can stay the same while its DNS records are updated to the new hosting environment." },
      { question: "What happens if the domain expires?", answer: "The website and domain-based email can stop working. Recovery rules and fees vary by registrar and domain type, so auto-renew and current contact details are important." },
      { question: "Does Project Monet include domain and hosting?", answer: "No. They are separate costs unless an approved proposal explicitly lists a specific item." },
    ],
    relatedPaths: ["/resources/should-business-own-domain", "/website-ownership", "/resources/website-maintenance", "/pricing"],
    sources: [{ label: "ICANN: About domain names", url: "https://www.icann.org/resources/pages/about-domain-names-2018-08-30-en" }],
  },
  {
    path: "/resources/should-business-own-domain",
    title: "Should a Business Owner Buy and Control Their Own Domain?",
    metaTitle: "Should Your Business Own Its Domain? | Project Monet",
    metaDescription: "Why the business should normally control its domain registration, recovery details, renewals and access—even when an agency manages the website.",
    eyebrow: "Control and continuity",
    heading: "The agency can manage the setup without becoming the permanent owner.",
    intro: "A domain may cost less than many monthly software subscriptions, but it can become one of the business's most important digital assets. It connects the public website, branded email and years of recognition. Administrative convenience should not turn into dependency.",
    quickAnswer: "Yes. In most cases, the business or its authorised owner should be the domain registrant and keep recovery access. A developer or agency can receive the limited permissions needed to configure DNS without being the only person capable of renewing, transferring or recovering the domain.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "What can go wrong when someone else controls it", bullets: ["Renewal notices go to an old contractor", "The business cannot update DNS or email", "A supplier dispute blocks a transfer", "Recovery codes and payment details are unavailable", "The registered contact no longer works", "Nobody knows which account holds the domain"] },
      { title: "A safer account arrangement", paragraphs: ["Create the registrar account with a durable business-controlled email, accurate registrant information, multi-factor authentication and reliable payment details. Grant technical access only as needed and remove it when the work ends. Store recovery information somewhere the business can reach without the website or domain email."] },
      { title: "Management is not the same as ownership", paragraphs: ["An agency may manage renewals or DNS as part of maintenance. That can be convenient, but the client should still know where the domain is registered, who is listed as the registrant and how access can be recovered. The arrangement belongs in writing."] },
      { title: "What to request at handover", bullets: ["Registrar name and login ownership", "Confirmation of registrant contact details", "Renewal date and auto-renew status", "DNS record or nameserver documentation", "Removal or review of obsolete administrator access", "A transfer code only when an actual transfer is required"] },
      { title: "Project Monet's ownership rule", paragraphs: ["Project Monet prefers client-controlled domain and hosting access. After final payment, relevant project access is handed over, and optional maintenance does not change who owns the website or domain."] },
    ],
    faqs: [
      { question: "Can my developer still manage DNS?", answer: "Yes. The business can grant appropriate access or approve specific changes without giving up registrant control." },
      { question: "Should I use my personal email for the registrar?", answer: "Use a durable address the business can reliably recover. Avoid relying only on an email address that itself stops working if the domain expires." },
      { question: "Can a domain be transferred later?", answer: "Usually, subject to the domain type, registrar policies, lock periods and accurate authorisation. Keep control current before a transfer becomes urgent." },
      { question: "Does owning the domain mean I own all website code?", answer: "No. Domain registration, hosting, website code, content and third-party licences are separate rights. The project agreement and handover should address each relevant item." },
    ],
    relatedPaths: ["/website-ownership", "/resources/domain-vs-hosting", "/resources/website-maintenance", "/how-it-works"],
    sources: [{ label: "ICANN: Domain registrant rights and responsibilities", url: "https://www.icann.org/resources/pages/benefits-2013-09-16-en" }],
  },
  {
    path: "/resources/website-maintenance",
    title: "What Is Website Maintenance, and Do You Need It?",
    metaTitle: "Website Maintenance Explained for Small Businesses",
    metaDescription: "Understand website maintenance, what it may cover, what remains separate and when a local business needs an ongoing plan.",
    eyebrow: "Post-launch operations",
    heading: "A launched website still has software, content and business details that change.",
    intro: "Maintenance is not one universal service. For one site it means dependency updates and form checks. For another it includes monthly content changes, product support and performance monitoring. The agreement should describe the actual work rather than sell the word alone.",
    quickAnswer: "Website maintenance is ongoing work that keeps the agreed technical components, content and integrations current. A business may need it when nobody internally can handle updates or when the website contains software that requires active care. Maintenance is optional at Project Monet and is separate from hosting and the initial build.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "Work a maintenance plan may cover", bullets: ["Software and dependency updates", "Form, link and uptime checks", "Backups where the platform supports them", "Small text, image or hours changes", "Security and performance review", "Analytics or Search Console checks", "Support for agreed third-party integrations"] },
      { title: "What is commonly separate", bullets: ["A redesign or new visual direction", "New pages beyond the allowance", "New integrations or custom features", "Ongoing SEO campaigns and article writing", "Paid advertising", "Third-party subscription and renewal fees", "Emergency recovery caused by unauthorised changes"] },
      { title: "When maintenance is worth paying for", paragraphs: ["It is useful when the website drives important enquiries, contains changing content or runs on a platform that needs regular updates. It can also be sensible when the owner values a known support route more than learning the technical system.", "A simple static website with rare changes may need a smaller plan or occasional paid updates instead of a large monthly retainer."] },
      { title: "Hosting and maintenance are different", paragraphs: ["Hosting keeps the website available. Maintenance is human or automated work performed on the website and its configuration. Paying for hosting does not automatically mean someone is reviewing your content, testing enquiries or fixing problems."] },
      { title: "Project Monet maintenance starting points", bullets: ["Basic Maintenance — ₹1,999 / $29 per month", "Care Maintenance — ₹3,999 / $49 per month", "Growth Maintenance — ₹7,999 / $99 per month", "Custom scope for ecommerce, integrations or high-support websites"] },
    ],
    faqs: [
      { question: "Is maintenance compulsory after launch?", answer: "No. It is optional. The client continues to own the paid website after maintenance ends." },
      { question: "Does maintenance include hosting?", answer: "Not by default. Hosting and maintenance are separate unless the agreement explicitly combines a particular cost." },
      { question: "Can I request unlimited changes?", answer: "No. Each plan has an agreed allowance and boundaries. New pages, features or redesign work may need a separate quote." },
      { question: "What happens when maintenance is cancelled?", answer: "It ends according to the notice and payment terms. Relevant access and current information are handed over cleanly if not already provided." },
    ],
    relatedPaths: ["/pricing", "/website-ownership", "/resources/domain-vs-hosting", "/how-it-works"],
  },
  {
    path: "/resources/how-long-to-build-small-business-website",
    title: "How Long Does It Take to Build a Small-Business Website?",
    metaTitle: "How Long Does a Small-Business Website Take to Build?",
    metaDescription: "Website timelines depend on scope, content, feedback and integrations. Learn what determines the schedule and how a business can prevent avoidable delays.",
    eyebrow: "Website timeline guide",
    heading: "The schedule is usually shaped by decisions and content, not typing speed.",
    intro: "A simple page can be coded quickly, but a business-ready website requires accurate content, approvals, responsive design, testing and access to the systems being connected. A responsible timeline begins after the scope and dependencies are known.",
    quickAnswer: "There is no reliable universal website timeline. A focused one-page site is usually faster than a multi-page or ecommerce project, but content readiness, decision-making, revision rounds, integrations and client feedback can matter more than raw page count. Project Monet confirms the schedule in the approved project scope rather than promising one before discovery.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "The five biggest schedule factors", bullets: ["Number and complexity of pages", "Whether copy and media are ready", "Booking, payment, ecommerce or data integrations", "Speed and clarity of client feedback", "Number of stakeholders and revision rounds"] },
      { title: "What happens before development", paragraphs: ["The team must agree on the audience, goals, page structure, responsibilities and technical platform. Skipping those decisions can make the first screen appear faster while creating expensive rework later."] },
      { title: "Content is frequently the hidden dependency", paragraphs: ["A page cannot be finalised around missing service details, unapproved claims or photographs that the business cannot use. Collecting accurate copy, pricing, policies, team information and media before the build protects both quality and schedule."] },
      { title: "How feedback can shorten or lengthen the project", paragraphs: ["One consolidated response from an authorised decision-maker is easier to act on than several conflicting message threads. Feedback should identify the problem and business reason, not prescribe disconnected visual changes without reference to the agreed direction."] },
      { title: "How to prepare before requesting a quote", bullets: ["List the pages and actions customers need", "Collect current business facts and contact details", "Identify the final approver", "Prepare owned or licensed photographs and logos", "List required systems and account access", "Decide what must be ready for launch and what can wait"] },
    ],
    faqs: [
      { question: "Can Project Monet promise a timeline before reviewing the scope?", answer: "No. A schedule is confirmed only after the pages, content, features, responsibilities and review process are understood and approved." },
      { question: "Does the free demo count as the full build?", answer: "No. It is a compact direction preview. Full production begins after scope confirmation and advance payment." },
      { question: "Can a website launch with some content missing?", answer: "Sometimes a phased launch is possible, but placeholder or incomplete information can damage trust and search quality. The decision should be documented rather than assumed." },
      { question: "What causes the most avoidable delay?", answer: "Missing content, unclear ownership of decisions, slow account access and scattered feedback are common causes." },
    ],
    relatedPaths: ["/how-it-works", "/free-website-demo", "/pricing", "/resources/local-business-website-sections"],
  },
  {
    path: "/resources/local-business-website-sections",
    title: "What Sections Should a Local-Business Website Have?",
    metaTitle: "Essential Local-Business Website Sections & Pages",
    metaDescription: "A practical framework for local-business website sections: offer, services, proof, process, location, FAQs and a clear contact path.",
    eyebrow: "Homepage anatomy",
    heading: "Every section should resolve a customer question or move the decision forward.",
    intro: "A website does not become persuasive by adding every popular section. The right structure depends on what customers need to understand before they trust the business and take the next step.",
    quickAnswer: "Most local-business websites need a clear hero, service explanation, relevant proof, business or team information, process, location or service area, common-question answers and a visible contact action. The order should follow the customer's decision rather than a generic template.",
    kind: "guide",
    updated: "August 16, 2026",
    sections: [
      { title: "1. A hero that identifies the offer", paragraphs: ["The first screen should say what the business does, for whom or where when relevant, and what the visitor can do next. A clever slogan can support that message but should not replace it."] },
      { title: "2. Services organised around customer needs", paragraphs: ["Name the real services and explain their differences. A short overview can link to dedicated pages when customers search for or evaluate each service separately."] },
      { title: "3. Proof that matches the claim", bullets: ["Original project or product images", "Qualified team profiles", "Genuine testimonials with permission", "Relevant certifications or registrations", "Case studies that explain context", "Clear business identity and contact details"] },
      { title: "4. A process that reduces uncertainty", paragraphs: ["Explain what happens after an enquiry, what the customer needs to prepare and how the service moves from first contact to delivery. Process content is especially useful for considered or unfamiliar purchases."] },
      { title: "5. Location, service area and availability", paragraphs: ["A customer should not need to call to discover that the business does not serve their area or is closed. Publish accurate hours, address, service area, map and access information where relevant."] },
      { title: "6. Frequently asked questions", paragraphs: ["Use questions that genuinely affect the buying decision: price structure, preparation, cancellation, booking, timing, ownership or eligibility. Avoid an FAQ section filled with promotional questions nobody asks."] },
      { title: "7. One primary contact action", paragraphs: ["Choose the action the business can handle reliably—call, WhatsApp, booking, quote request or contact form. Repeat it at sensible points and keep secondary contact options available without turning every section into a hard sell."] },
      { title: "What may deserve a separate page", bullets: ["Important services with distinct search intent", "Locations with genuinely different information", "Project or case-study details", "Team and practitioner profiles", "Pricing and package comparison", "Policies that affect purchase decisions", "Useful guides that answer recurring questions"] },
    ],
    faqs: [
      { question: "Does every small business need a multi-page website?", answer: "No. A clear one-page site can work for a focused offer. Separate pages become valuable when services, locations, proof or buyer questions need more depth." },
      { question: "Should the homepage contain all the website copy?", answer: "No. It should provide the main decision path and link to deeper pages instead of becoming an endless document." },
      { question: "How many CTAs should a page have?", answer: "A page can repeat one primary action and provide necessary secondary options. Too many unrelated actions compete with each other." },
      { question: "Do FAQs help SEO?", answer: "Useful questions can improve clarity and cover real language customers use. They should exist for readers first; adding generic FAQs or schema does not guarantee special search treatment." },
    ],
    relatedPaths: ["/services/web-design-for-local-businesses", "/industries", "/free-website-demo", "/resources/how-long-to-build-small-business-website"],
    sources: [{ label: "Google Search Essentials", url: "https://developers.google.com/search/docs/essentials" }, { label: "Google: Creating helpful, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }],
  },
];

export const corePages: SeoPage[] = [...corePagesBase, ...phaseTwoCorePages];
export const resourcePages: SeoPage[] = [...resourcePagesBase, ...phaseTwoResourcePages];
export { workPages };

export const allSeoPages = [...corePages, ...industryPages, ...resourcePages, ...workPages];

export function findSeoPage(path: string) {
  return allSeoPages.find((page) => page.path === path);
}

export function pageSlug(path: string) {
  return path.split("/").filter(Boolean).at(-1) ?? "";
}
