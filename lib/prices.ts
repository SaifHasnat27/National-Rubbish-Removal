import { services } from './servicesData';

// Pricing source of truth. Keys match the service ids in servicesData.ts.
// quote.ts will read from here later; don't duplicate prices anywhere else.

export type PricedServiceId =
  | 'residential-rubbish-removal'
  | 'commercial-rubbish-removal'
  | 'construction-rubbish-removal';

export interface ServicePrice {
  hourlyRate: number; // $ per hour, "from" price
  ratePerM3: number;  // $ per cubic metre, all-inclusive
  minCharge: number;  // $ minimum job charge for this service
}

// Universal minimum. Each service points to it for now but can override it later.
export const MIN_CHARGE = 250;

export const PRICES = {
  'residential-rubbish-removal': {
    hourlyRate: 90,
    ratePerM3: 80,
    minCharge: MIN_CHARGE,
  },
  'commercial-rubbish-removal': {
    hourlyRate: 120,
    ratePerM3: 95,
    minCharge: MIN_CHARGE,
  },
  'construction-rubbish-removal': {
    hourlyRate: 150,
    ratePerM3: 130,
    minCharge: MIN_CHARGE,
  },
} as const satisfies Record<PricedServiceId, ServicePrice>;

// Safety check: fails dev and build if servicesData.ts and PRICES ever drift apart.
const serviceIds = services.map((s) => s.id);
for (const id of serviceIds) {
  if (!(id in PRICES)) throw new Error(`prices.ts: no price for service "${id}"`);
}
for (const id of Object.keys(PRICES)) {
  if (!serviceIds.includes(id)) throw new Error(`prices.ts: "${id}" is not a service in servicesData.ts`);
}
