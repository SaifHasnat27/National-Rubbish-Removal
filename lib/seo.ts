import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

/* ────────────────────────────────────────────────────────────────
   Central SEO copy for every page.

   All titles/descriptions/keywords live here so there is ONE place
   to edit. Phone/email/url are pulled from BUSINESS (constants.ts)
   so they never drift out of sync.

   Each page.tsx does:  export const metadata = buildMetadata("about");
   ──────────────────────────────────────────────────────────────── */

type PageKey =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "location"
  | "policy"
  | "terms"
  | "quoteEstimator";

interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  /** Path only, e.g. "/about". Home is "/". */
  canonical: string;
}

export const PAGE_SEO: Record<PageKey, PageSeo> = {
  home: {
    title: "Hard Rubbish Collection & Rubbish Removal Sydney",
    description: `Fast, Cheap, Same Day Rubbish Removal and Hard Garbage Collection in Sydney. | FREE QUOTE | CALL NOW | ${BUSINESS.phone}`,
    keywords: "rubbish removal near me, rubbish removal Sydney, hard rubbish collection",
    canonical: "/",
  },
  about: {
    title: "About Us | Sydney Rubbish Removal Experts",
    description:
      "Meet Sydney's local rubbish removal experts. We specialize in hard rubbish collection, hard garbage removal, and hard waste collection.",
    keywords: "rubbish removal Sydney, hard rubbish collection, rubbish removalists",
    canonical: "/about",
  },
  services: {
    title: "Hard Waste Collection & Rubbish Removal Services",
    description: `Affordable Rubbish Removalists Sydney | Same Day Service Available | FREE QUOTE | BOOK NOW | ${BUSINESS.phone}`,
    keywords: "hard rubbish collection, hard garbage collection, rubbish removal Sydney",
    canonical: "/services",
  },
  contact: {
    title: "Contact | Hard Rubbish Collection | Rubbish Removal Sydney",
    description: `Need rubbish removal near me? CALL US | ${BUSINESS.phone} | GET FREE QUOTE | Same Day Service Available`,
    keywords: "rubbish removal near me, hard rubbish collection, hard waste collection",
    canonical: "/contact",
  },
  location: {
    title: "Hard Rubbish Collection | Sydney Service Areas",
    description:
      "Serving Sydney suburbs for hard rubbish collection. We provide hard waste collection to residential and commercial clients",
    keywords: "rubbish removal Sydney, hard waste collection, rubbish removal near me",
    canonical: "/location",
  },
  policy: {
    title: "Privacy Policy | Rubbish Removal Sydney",
    description:
      "Our privacy policy explains how your data is protected during rubbish removal bookings. Trusted hard waste collection in Sydney.",
    keywords: "hard waste collection, hard rubbish collection, privacy policy",
    canonical: "/policy",
  },
  terms: {
    title: "Terms of Service | Hard Rubbish Collection Sydney",
    description:
      "Our terms and conditions for hard waste collection in Sydney. Transparent rubbish removal policies you can trust.",
    keywords: "hard waste collection, hard rubbish collection, terms of service",
    canonical: "/terms",
  },
  quoteEstimator: {
    title: "Instant Rubbish Removal Quote Estimator | Sydney",
    description:
      "Get an instant rubbish removal price. Pick your service and load size to see a live estimate for hard rubbish collection in Sydney. No details needed.",
    keywords: "rubbish removal quote, rubbish removal cost Sydney, hard rubbish collection price",
    canonical: "/quote-estimator",
  },
};

/**
 * Build a Next.js Metadata object for a page from its central SEO entry.
 * Title suffix (`| National Rubbish Removal`) is applied by the root
 * layout's title template, so titles here stay clean.
 */
export function buildMetadata(key: PageKey): Metadata {
  const seo = PAGE_SEO[key];
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: BUSINESS.name,
      locale: "en_AU",
      type: "website",
    },
  };
}
