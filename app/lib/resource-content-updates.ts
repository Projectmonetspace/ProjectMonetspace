import type { SeoPage } from "./seo-content.ts";

const updates: Record<string, Partial<SeoPage>> = {
  "/resources/small-business-website-cost-india": {
    "heading": "How much does a small-business website cost in India?",
    "sections": [
      {
        "title": "Compare the scope with an honest concept",
        "paragraphs": [
          "Project Monet’s Shop.co ecommerce concept illustrates store structure and product discovery; its interior-design concept illustrates project proof and a service enquiry path. Both are speculative design concepts, not paid client case studies or evidence of improved sales. Use them to discuss the kind of structure your quote needs."
        ]
      },
      {
        "title": "Ask for a proposal you can compare",
        "bullets": [
          "List the pages, content responsibilities and features in writing.",
          "Separate build fees from recurring services and third-party charges.",
          "Confirm domain and account ownership, handover and exit arrangements.",
          "Choose one primary enquiry action and agree how it will be tested.",
          "Ask for a written quote tied to your scope; starting prices are not a universal market average."
        ]
      }
    ],
    "relatedPaths": [
      "/pricing",
      "/services/web-design-for-local-businesses",
      "/resources/write-small-business-website-brief",
      "/work/shop-co-ecommerce-concept",
      "/work/interior-design-website-concept"
    ]
  },
  "/resources/one-page-vs-multi-page-website": {
    "heading": "One-page vs multi-page website: which fits your business and SEO?",
    "quickAnswer": "A one-page website can suit one clear offer and a short decision journey. A multi-page website is more useful when services, locations or customer questions need distinct explanations and search intents. Page count alone does not determine rankings; each indexable page should earn its place with a useful, distinct purpose.",
    "sections": [
      {
        "title": "Give each search intent an accountable page",
        "paragraphs": [
          "Keep one page for closely related questions that a customer can answer in one sitting. Separate a service only when it needs different scope, proof or purchase decisions. Do not create several thin location pages merely to increase the URL count.",
          "A multi-page structure can give distinct services their own title, canonical and internal links. A one-page structure can remain easier to maintain for a business with one straightforward offer. Choose around real content and customer needs."
        ]
      },
      {
        "title": "Compare two concept journeys",
        "paragraphs": [
          "The restaurant concept puts menu, atmosphere and contact decisions into a focused journey. The construction concept has a different need for project scope and proof. These are design examples, not experiments showing that one page count converts better."
        ]
      }
    ],
    "relatedPaths": [
      "/services/web-design-for-local-businesses",
      "/resources/small-business-website-cost-india",
      "/resources/local-business-website-sections",
      "/work/restaurant-website-concept",
      "/work/construction-company-website-concept"
    ]
  },
  "/resources/google-business-profile-vs-website": {
    "heading": "Do you need a website if you have a Google Business Profile?",
    "sections": [
      {
        "title": "Use the website for questions the profile cannot answer well",
        "paragraphs": [
          "For an interior designer, a profile helps a nearby customer discover the business; a project page can explain the room, constraint, approach and work involved. For a home-service business, the website can clarify coverage, scope, exclusions and what information is needed for a quote.",
          "Project Monet’s interior-design and home-services concepts show ways to organise those decisions. They are speculative concepts and do not establish ranking improvements or customer outcomes."
        ]
      },
      {
        "title": "Measure the next step honestly",
        "paragraphs": [
          "Use consistent campaign parameters on the profile’s website link if your analytics supports them. Record relevant enquiries and review their quality. A website visit or WhatsApp click is an intent signal; it is not automatically a qualified lead or sale.",
          "Keep the profile and site consistent on contact details and services. Check the complete journey after changing a link, phone number or form."
        ]
      }
    ],
    "relatedPaths": [
      "/services/web-design-for-local-businesses",
      "/resources/website-more-calls-whatsapp-enquiries",
      "/work/interior-design-website-concept",
      "/work/ahs-home-services-website-concept"
    ]
  },
  "/resources/local-business-website-sections": {
    "heading": "What sections does a local-business website need?",
    "sections": [
      {
        "title": "Match each section to a customer question",
        "bullets": [
          "Offer: what service is available and for whom?",
          "Scope: where do you work, what is included and what is excluded?",
          "Proof: what genuine work, credentials or process can the business show?",
          "Next step: what happens after a call, WhatsApp message or brief?",
          "Ownership and policies: who operates the business and where are relevant terms?"
        ]
      },
      {
        "title": "Use concepts for structure and real evidence for trust",
        "paragraphs": [
          "The home-services concept demonstrates service and contact organisation; the restaurant concept demonstrates menu and visit decisions. A concept can help choose a structure, but it must not be labelled as a customer success story.",
          "Replace placeholders with real photographs, authorised testimonials and accurate service information before launch. Check the finished mobile page and test the primary contact action."
        ]
      }
    ],
    "relatedPaths": [
      "/services/web-design-for-local-businesses",
      "/resources/write-small-business-website-brief",
      "/resources/website-more-calls-whatsapp-enquiries",
      "/work/ahs-home-services-website-concept",
      "/work/restaurant-website-concept"
    ]
  }
};
export function improveResourcePage(page: SeoPage): SeoPage {
  const update = updates[page.path];
  if (!update) return page;
  return { ...page, ...update, updated: "October 5, 2026", modified: "2026-10-05",
    sections: [...page.sections, ...(update.sections ?? [])],
    relatedPaths: [...new Set([...page.relatedPaths, ...(update.relatedPaths ?? [])])] };
}
