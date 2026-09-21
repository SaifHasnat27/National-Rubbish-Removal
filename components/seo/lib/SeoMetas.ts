import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

type SeoPageMeta = {
  title: string;
  description: string;
  canonical: string;
};

export const SEO_META = {
  'household-rubbish-removal': {
    title: 'Household Rubbish Removal Sydney',
    description: `We remove household junk, clutter and unwanted items across Sydney Metro. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/household-rubbish-removal',
  },
  'mattress-removal': {
    title: 'Mattress Removal Sydney',
    description: `We remove old and unwanted mattresses and bed bases in Sydney Metro. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/mattress-removal',
  },
  'green-waste-removal': {
    title: 'Green Waste Removal Sydney',
    description: `Fast and affordable green waste removal services in Sydney. Eco-friendly recycling of green waste. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/green-waste-removal',
  },
  'unwanted-furniture-removal': {
    title: 'Unwanted Furniture Removal Sydney',
    description: `We remove all old and unwanted furniture from Sydney homes, including sofas, wardrobes and bulky furniture. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/unwanted-furniture-removal',
  },
  'garage-clean-out': {
    title: 'Garage Clean Out Sydney',
    description: `We provide fast and affordable garage clean out services across Sydney. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/garage-clean-out',
  },
  'deceased-estate-clearance': {
    title: 'Deceased Estate Clearance Sydney',
    description: `We assist families and solicitors with professional deceased estate clearance services across Sydney metro. Same day clearance available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/deceased-estate-clearance',
  },
} as const satisfies Record<string, SeoPageMeta>;

export function buildSeoMetadata(key: keyof typeof SEO_META): Metadata {
  const seo = SEO_META[key];
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
  };
}
