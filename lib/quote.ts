// ════════════════════════════════════════════════════════════════════
//  QUOTE ESTIMATOR — pricing source of truth (no React, pure math)
//  Formula:  quote = max(minCharge, volume × ratePerM3), shown as a
//  range up to QUOTE_RANGE_SPREAD. Rates are all-inclusive (labour,
//  loading, transport, tip fees) — benchmarked against Sydney market
//  rates ($70–$200/m³, full 10 m³ load $700–$900, minimums $150–$250).
// ════════════════════════════════════════════════════════════════════

// ─── Types ───────────────────────────────────────────────
export type ServiceId =
  | "residential-rubbish-removal"
  | "commercial-rubbish-removal"
  | "construction-rubbish-removal";

export interface ServicePricing {
  id: ServiceId;
  label: string;          // Display name on the estimator
  blurb: string;          // One-liner under the label
  iconName: "Home" | "Building" | "HardHat"; // Lucide icon (mapped in UI)
  ratePerM3: number;      // $ per cubic metre — all-inclusive
  minCharge: number;      // $ minimum job charge
}

export interface LoadSize {
  id: string;
  label: string;          // "½ Truck Load"
  m3: number;             // Volume in cubic metres
  hint: string;           // Real-world size hint for customers
}

export interface QuoteInput {
  serviceId: ServiceId;
  volumeM3: number;
}

export interface QuoteEstimate {
  low: number;            // Rounded low end of the range ($)
  high: number;           // Rounded high end of the range ($)
  volumeM3: number;
  minChargeApplied: boolean;
  service: ServicePricing;
}

// ─── Dials (tune freely — everything else derives from these) ───────
export const QUOTE_RANGE_SPREAD = 1.15; // high end = quote × 1.15
export const ROUND_TO = 10;             // round displayed prices to nearest $10
export const FULL_LOAD_M3 = 10;         // truck capacity, drives the fill bar

export const SERVICE_PRICING: ServicePricing[] = [
  {
    id: "residential-rubbish-removal",
    label: "Residential",
    blurb: "Household junk, furniture, garden waste & cleanouts",
    iconName: "Home",
    ratePerM3: 80,
    minCharge: 150,
  },
  {
    id: "commercial-rubbish-removal",
    label: "Commercial",
    blurb: "Office clearances, shop strip-outs & business waste",
    iconName: "Building",
    ratePerM3: 95,
    minCharge: 200,
  },
  {
    id: "construction-rubbish-removal",
    label: "Construction",
    blurb: "Renovation debris, building materials & heavy waste",
    iconName: "HardHat",
    ratePerM3: 130,
    minCharge: 250,
  },
];

export const LOAD_SIZES: LoadSize[] = [
  { id: "single-item", label: "Single Item",  m3: 1,   hint: "A mattress, fridge or couch" },
  { id: "quarter",     label: "¼ Truck",      m3: 2.5, hint: "A few furniture items & bags" },
  { id: "half",        label: "½ Truck",      m3: 5,   hint: "Studio declutter or garden cleanup" },
  { id: "three-qtr",   label: "¾ Truck",      m3: 7.5, hint: "Garage or shed cleanout" },
  { id: "full",        label: "Full Truck",   m3: 10,  hint: "Whole-home or big reno cleanup" },
];

// ─── Math ────────────────────────────────────────────────
const roundTo = (n: number, step: number = ROUND_TO) =>
  Math.round(n / step) * step;

export function getServicePricing(serviceId: ServiceId): ServicePricing {
  return SERVICE_PRICING.find((s) => s.id === serviceId) ?? SERVICE_PRICING[0];
}

export function calculateQuote({ serviceId, volumeM3 }: QuoteInput): QuoteEstimate {
  const service = getServicePricing(serviceId);
  const raw = volumeM3 * service.ratePerM3;
  const minChargeApplied = raw < service.minCharge;
  const base = Math.max(raw, service.minCharge);

  return {
    low: roundTo(base),
    high: roundTo(base * QUOTE_RANGE_SPREAD),
    volumeM3,
    minChargeApplied,
    service,
  };
}

export const formatPrice = (n: number) => `$${n.toLocaleString("en-AU")}`;
