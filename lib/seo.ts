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
    title: "Rubbish Removal Sydney",
    description: `We provide rubbish removal services in Sydney for homes and businesses. Same day pick up available. Call ${BUSINESS.phone} for a FREE QUOTE.`,
    keywords: "rubbish removal near me, rubbish removal Sydney, hard rubbish collection",
    canonical: "/",
  },
  about: {
    title: "About Us | National Rubbish Removal Sydney",
    description:
      "We're a local rubbish removal team serving Sydney homes and businesses, fully licensed and insured with flexible same day availability.",
    keywords: "rubbish removal Sydney, hard rubbish collection, rubbish removalists",
    canonical: "/about",
  },
  services: {
    title: "Rubbish Removal Services Sydney",
    description: `Professional rubbish removal services in Sydney with transparent pricing and same day service. Call ${BUSINESS.phone} for a FREE QUOTE.`,
    keywords: "hard rubbish collection, hard garbage collection, rubbish removal Sydney",
    canonical: "/services",
  },
  contact: {
    title: "Contact Us | National Rubbish Removal Sydney",
    description: `Get in touch for rubbish removal services across Sydney. Same day service available. Call ${BUSINESS.phone} or request a free quote online.`,
    keywords: "rubbish removal near me, hard rubbish collection, hard waste collection",
    canonical: "/contact",
  },
  location: {
    title: "Rubbish Removal Service Areas across Sydney Metro",
    description:
      `Rubbish removal service areas across Sydney metro. Fast response times with same day service available. Call ${BUSINESS.phone} for a FREE QUOTE.`,
    keywords: "rubbish removal Sydney, hard waste collection, rubbish removal near me",
    canonical: "/location",
  },
  policy: {
    title: "Privacy Policy | National Rubbish Removal",
    description:
      "Our privacy policy explains how we collect, use and protect your personal data when you book our rubbish removal service in Sydney.",
    keywords: "hard waste collection, hard rubbish collection, privacy policy",
    canonical: "/policy",
  },
  terms: {
    title: "Terms of Service | National Rubbish Removal",
    description:
      "These terms and conditions outline the rules for booking, pricing and cancellations for our rubbish removal service across Sydney metro.",
    keywords: "hard waste collection, hard rubbish collection, terms of service",
    canonical: "/terms",
  },
  quoteEstimator: {
    title: "Rubbish Removal Cost Calculator",
    description:
      "Get an instant rubbish removal price for Sydney. Pick your service and load size to see a live estimate, no personal details needed.",
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
