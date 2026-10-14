import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

type LocationPageMeta = {
  title: string;
  description: string;
  canonical: string;
};

export const LOCATION_META = {
  'brighton-le-sands': {
    title: 'Rubbish Removal Brighton Le Sands',
    description: `Fast and affordable rubbish removal in Brighton Le Sands for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/brighton-le-sands',
  },
  kogarah: {
    title: 'Rubbish Removal Kogarah',
    description: `Fast and affordable rubbish removal in Kogarah for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/kogarah',
  },
  miranda: {
    title: 'Rubbish Removal Miranda',
    description: `Fast and affordable rubbish removal in Miranda for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/miranda',
  },
  cronulla: {
    title: 'Rubbish Removal Cronulla',
    description: `Fast and affordable rubbish removal in Cronulla for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/cronulla',
  },
  rockdale: {
    title: 'Rubbish Removal Rockdale',
    description: `Fast and affordable rubbish removal in Rockdale for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/rockdale',
  },
  hurstville: {
    title: 'Rubbish Removal Hurstville',
    description: `Fast and affordable rubbish removal in Hurstville for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/hurstville',
  },
  sutherland: {
    title: 'Rubbish Removal Sutherland',
    description: `Fast and affordable rubbish removal in Sutherland for homes, businesses and building sites. Same day pick up available. Call ${BUSINESS.phone} for a free quote.`,
    canonical: '/sutherland',
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
