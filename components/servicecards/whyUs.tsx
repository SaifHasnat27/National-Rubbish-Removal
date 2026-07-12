"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Clock, BadgeDollarSign, UserCheck, Recycle, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ─── Why Us Data ──────────────────────────────────────────────────────────────
const WHY_US: {
  id: number;
  sector: string;
  detail: string;
  icon: LucideIcon;
}[] = [
  {
    id: 1,
    sector: "Same-Day Service",
    detail: "We collect your rubbish on the same day you contact us. Fast, responsive waste disposal across all Sydney suburbs.",
    icon: Clock,
  },
  {
    id: 2,
    sector: "Upfront Volume Pricing",
    detail: "You only pay for the exact volume your items occupy in our truck. Zero hidden fees, labor costs, or surprise charges.",
    icon: BadgeDollarSign,
  },
  {
    id: 3,
    sector: "We Do the Loading",
    detail: "No heavy lifting or back pain. Our friendly two-man crew handles all the packing, carrying, loading, and sweeps up afterwards.",
    icon: UserCheck,
  },
  {
    id: 4,
    sector: "Eco-Friendly Recycling",
    detail: "We sort through everything we collect, recycling and diverting up to 95% of materials away from Sydney landfills.",
    icon: Recycle,
  },
  {
    id: 5,
    sector: "No Permits Required",
    detail: "Avoid council skip bin permit costs and blocking your driveway. Our truck pulls up, loads the waste, and drives away.",
    icon: ThumbsUp,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WhyUs() {
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
          Why Choose Us
        </h2>
      </motion.div>

      {/* Cards — each has its own whileInView observer so on mobile
          each card fires individually as it scrolls into view         */}
      <div className="flex flex-col gap-4">
        {WHY_US.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1.7fr] border-[length:var(--border-width)] border-[color:var(--border)] hover:border-[color:var(--border-dark)] rounded-[var(--radius-card)] transition-colors duration-[var(--transition-base)] overflow-hidden"
            >
              {/* Title zone */}
              <div className="bg-base flex items-center gap-4 px-7 py-4 pb-2 md:py-7">
                <Icon
                  aria-hidden="true"
                  className="w-6 h-6 stroke-[1.5] text-[var(--color-accent)] shrink-0 transition-transform duration-[var(--transition-base)] group-hover:scale-110 origin-left"
                />
                <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-medium text-[var(--text-primary)] leading-snug">
                  {item.sector}
                </h3>
              </div>

              {/* Detail zone */}
              <div className="bg-base flex items-center px-7 pt-2 pb-5 md:py-7">
                <p className="text-[var(--text-secondary)] font-light text-sm leading-[var(--leading-relaxed)]">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </SectionWrapper>
  );
}
