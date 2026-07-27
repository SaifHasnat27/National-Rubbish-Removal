"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Clock, BadgeDollarSign, UserCheck, Recycle, ThumbsUp, Sparkles } from 'lucide-react';
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
  {
    id: 6,
    sector: "Swept Clean Finish",
    detail: "We leave the space tidier than we found it. Every job ends with a full sweep, so there is nothing left behind for you to deal with.",
    icon: Sparkles,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WhyUs() {
  return (
    <SectionWrapper className="bg-base-secondary">

      {/* Header — same centred heading + subheading pattern as every other
          section on the home page */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-16"
      >
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
          Why Choose Us
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">
          Fast, transparent, and reliable rubbish removal across Sydney
        </p>
      </motion.div>

      {/* Six reasons, 3 across on desktop */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                /* framer-motion owns transform, so .card:hover's lift never
                   fires here (learnings GOTCHA #3) — drive it from motion. */
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                className="group card !p-7 text-center space-y-4"
              >
                {/* Same orange disc as the Process cards, icon instead of a number */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-[var(--color-accent)] text-[var(--text-black)]">
                  <Icon
                    aria-hidden="true"
                    className="w-7 h-7 stroke-[1.5] transition-transform duration-[var(--transition-base)] group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {item.sector}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </motion.li>
            );
          })}
      </ul>

    </SectionWrapper>
  );
}
