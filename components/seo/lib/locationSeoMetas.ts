import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

type LocationPageMeta = {
  title: string;
  description: string;
  canonical: string;
};

export const LOCATION_META = {
  'brighton-le-sands': {
    title: 'Rubbish Removal Brighton Le Sands | Same Day, No Lifting',
    description: `Rubbish removal in Brighton Le Sands. Same day pickup available. Swept clean finish. Affordable prices. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/brighton-le-sands',
  },
  kogarah: {
    title: 'Rubbish Removal Kogarah | Fast Pickup, Fair Prices',
    description: 'Rubbish removal in Kogarah without the hassle. No skip bin. No permit. No lifting. Same day pickup available & transparent prices. Call for a free quote.',
    canonical: '/kogarah',
  },
  miranda: {
    title: 'Rubbish Removal Miranda | Fast Pickup, Fair Prices',
    description: 'Rubbish removal in Miranda, gone in one visit. Same day pickup available. We lift, load & sweep up. Clear pricing, no hidden costs. Free quotes.',
    canonical: '/miranda',
  },
  cronulla: {
    title: 'Rubbish Removal Cronulla | Same Day Pickup Available',
    description: 'Rubbish removal in Cronulla. Same day pickup available. Our crew does all the lifting. Licensed & insured. Get a free quote now.',
    canonical: '/cronulla',
  },
  rockdale: {
    title: 'Rubbish Removal Rockdale | Fast, Easy, Affordable',
    description: 'Rubbish removal in Rockdale with no skip bin, no permit & no lifting. Same day pickup available. Affordable, transparent prices. Free quotes.',
    canonical: '/rockdale',
  },
  hurstville: {
    title: 'Rubbish Removal Hurstville | Fast, Easy, Affordable',
    description: 'Rubbish removal in Hurstville, one item or a full clear out. Same day pickup available. Zero lifting for you. Clear prices. Call us today.',
    canonical: '/hurstville',
  },
  sutherland: {
    title: 'Rubbish Removal Sutherland | Same Day Pickup',
    description: 'Rubbish removal in Sutherland, seven days a week. Same day pickup available. We do the heavy lifting & the cleanup. Clear prices. Free quotes.',
    canonical: '/sutherland',
  },
  bondi: {
    title: 'Rubbish Removal Bondi | No Lifting, No Skip Bin',
    description: 'Rubbish removal in Bondi, done for you. Same day pickup available. We lift, load & sweep up. No skip bin needed. Affordable, transparent prices.',
    canonical: '/bondi',
  },
  botany: {
    title: 'Rubbish Removal Botany | Licensed, Insured, Same Day',
    description: 'Rubbish removal in Botany by a licensed, insured crew. Same day pickup available. Zero heavy lifting. Up to 95% recycled. Get a free quote.',
    canonical: '/botany',
  },
  mascot: {
    title: 'Rubbish Removal Mascot | Quick Pickup, Clear Prices',
    description: 'Rubbish removal in Mascot. Same day pickup available. Affordable prices. No hidden costs. Get a free quote now.',
    canonical: '/mascot',
  },
  maroubra: {
    title: 'Rubbish Removal Maroubra | One Call, All Gone',
    description: 'Rubbish removal in Maroubra. Same day pickup available. No lifting, no skip bin, no mess left behind. Affordable prices. Free quotes.',
    canonical: '/maroubra',
  },
  randwick: {
    title: 'Rubbish Removal Randwick | Open 7 Days',
    description: 'Rubbish removal in Randwick. Open 7 days, early to late. Same day pickup available. Zero lifting. Affordable prices. Get a free quote.',
    canonical: '/randwick',
  },
  coogee: {
    title: 'Rubbish Removal Coogee | Same Day Pickup',
    description: 'Rubbish removal in Coogee. Same day pickup available. Zero heavy lifting. Transparent prices. Get your free quote.',
    canonical: '/coogee',
  },
  paddington: {
    title: 'Rubbish Removal Paddington | Free Quotes, Fast Pickup',
    description: 'Rubbish removal in Paddington. Same day pickup available. No lifting for you. Swept clean finish. Transparent prices. Get a free quote.',
    canonical: '/paddington',
  },
} as const satisfies Record<string, LocationPageMeta>;

export function buildLocationMetadata(key: keyof typeof LOCATION_META): Metadata {
  const seo = LOCATION_META[key];
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
  };
}
