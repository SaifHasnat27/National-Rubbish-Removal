"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Home, HardHat, Building2, Key, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ─── ICP Data ─────────────────────────────────────────────────────────────────
const ICP_INDUSTRIES: {
  id: number;
  sector: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  {
    id: 1,
    sector: "Homeowners & Tenants",
    detail: "Fast, cheap, same-day rubbish removal for houses, townhouses, and apartments when decluttering or moving.",
    icon: Home,
  },
  {
    id: 2,
    sector: "Builders & Renovators",
    detail: "A faster, cleaner alternative to skip bins. We load construction materials, renovation debris, and concrete on-site.",
    icon: HardHat,
  },
  {
    id: 3,
    sector: "Offices & Retail Businesses",
    detail: "Full office strip-outs, commercial retail waste collections, and packaging removal without business disruption.",
    icon: Building2,
  },
  {
    id: 4,
    sector: "Real Estate & Property Managers",
    detail: "Rapid end-of-lease cleanouts, garden waste clearing, and removal of abandoned tenant items across Sydney.",
    icon: Key,
  },
  {
    id: 5,
    sector: "Deceased Estates",
    detail: "Compassionate, efficient, and thorough cleanout services, handling all sorting, packing, loading, and disposal.",
    icon: Heart,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ICP() {
  return (
    <SectionWrapper className="bg-base-secondary">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-14"
      >
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] max-w-2xl">
          Who We Work With
        </h2>
      </motion.div>

      {/* Industry cards — each has its own whileInView observer so on
          mobile each card fires individually as it scrolls into view   */}
      <div className="flex flex-col gap-4">
        {ICP_INDUSTRIES.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1.7fr] border-[length:var(--border-width)] border-[color:var(--border)] hover:border-[color:var(--border-dark)] transition-colors duration-[var(--transition-base)] overflow-hidden"
            >
              {/* Title zone */}
              <div className="bg-base flex items-center gap-4 px-7 py-4 pb-2 md:py-7">
                <Icon
                  aria-hidden="true"
                  className="w-6 h-6 stroke-[1.5] text-[var(--color-accent)] shrink-0 transition-transform duration-[var(--transition-base)] group-hover:scale-110 origin-left"
                />
                <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-medium text-[var(--text-primary)] leading-snug">
                  {industry.sector}
                </h3>
              </div>

              {/* Detail zone */}
              <div className="bg-base flex items-center px-7 pt-2 pb-5 md:py-7">
                <p className="text-[var(--text-secondary)] font-light text-sm leading-[var(--leading-relaxed)]">
                  {industry.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </SectionWrapper>
  );
}
