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
  'strata-rubbish-removal': {
    title: 'Strata Rubbish Removal Sydney',
    description: `We collect rubbish from strata-managed apartment blocks and common areas across Sydney Metro. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/strata-rubbish-removal',
  },
  'office-rubbish-removal': {
    title: 'Office Rubbish Removal Sydney',
    description: `We remove general office waste, old paperwork and everyday business rubbish across Sydney Metro. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/office-rubbish-removal',
  },
  'office-cubicle-removal': {
    title: 'Office Cubicle Removal Sydney',
    description: `We dismantle and remove office cubicles, partitions and workstation furniture in Sydney Metro. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/office-cubicle-removal',
  },
  'retail-strip-out-removal': {
    title: 'Retail Strip Out Removal Sydney',
    description: `We clear shop fittings, displays and fixtures during retail strip outs and store closures across Sydney. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/retail-strip-out-removal',
  },
  'warehouse-rubbish-removal': {
    title: 'Warehouse Rubbish Removal Sydney',
    description: `We collect pallets, packaging and general waste from warehouses and storage facilities across Sydney. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/warehouse-rubbish-removal',
  },
  'end-of-lease-rubbish-removal': {
    title: 'End of Lease Rubbish Removal Sydney',
    description: `We clear furniture, fittings and rubbish left behind at the end of a commercial lease in Sydney. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/end-of-lease-rubbish-removal',
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
