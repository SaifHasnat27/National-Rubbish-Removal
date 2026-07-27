"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Heart, CheckCircle, Truck, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

// ─── Data ────────────────────────────────────────────────────────────────────
const heroPoints = [
  'Founded by industry veterans with a disruptive vision to transform Sydney’s waste removal through technology and exceptional service',
  'Rapidly expanding across Sydney metro with our signature same-day service that’s setting new industry standards',
  'Fully licensed, comprehensively insured, and pioneering sustainable waste solutions that competitors are now copying',
];

const stats = [
  { number: '100%', label: 'Client Focused Approach' },
  { number: '50+', label: 'Suburbs Covered' },
  { number: '24/7', label: 'Customer Support' },
];

const missionPillars: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Zap, title: 'Rapid Response', description: 'To eliminate waiting around by providing fast turnaround times and reliable arrival windows.' },
  { icon: Heart, title: 'Sustainable Disposal', description: 'To keep Sydney green by sorting every collection and keeping up to 95% of waste out of landfill.' },
  { icon: Users, title: 'Straightforward Pricing', description: 'To offer honest service with clear upfront quotes before a single item is loaded.' },
  { icon: Shield, title: 'Safe Execution', description: 'To protect your property by handling every cleanout with careful, licensed, and safe practices.' },
];

const values: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Shield, title: 'Fully Licensed & Insured', description: 'Full EPA compliance and comprehensive public liability insurance for total protection on your property.' },
  { icon: Heart, title: 'Zero Heavy Lifting', description: 'Leave everything where it stands. Our team handles all the heavy carrying, loading, and haulage.' },
  { icon: Users, title: 'Same Day Availability', description: 'Flexible booking options including same-day service, early mornings, and weekend slots.' },
  { icon: Award, title: 'Swept Clean Finish', description: 'We do not just haul your junk away. We sweep your driveway, garage, or room clean before leaving.' },
];

const ecoPoints: { title: string; desc: string }[] = [
  { title: '95% Recycling Rate', desc: 'We sort and recycle the majority of collected waste, diverting it from landfills.' },
  { title: 'Eco-Friendly Disposal', desc: 'Partnerships with certified recycling facilities and donation centers.' },
  { title: 'Carbon Neutral Fleet', desc: 'Modern, fuel-efficient vehicles and route optimization to minimize emissions.' },
];

// ─── Shared animations (framer-motion) ───────────────────────────────────────
const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const staggerParent = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-60px' },
  variants: { visible: { transition: { staggerChildren: 0.12 } } },
};

const staggerChild = {
  variants: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  },
  whileHover: { y: -3, transition: { duration: 0.18 } },
};

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-base-secondary">

      {/* Hero */}
      <SectionWrapper className="bg-base-secondary">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
                Meet Your Local Rubbish Removalists | Hard Garbage Collection
              </h1>
              <p className="text-xl leading-relaxed text-[var(--text-secondary)]">
                The innovative startup revolutionizing Sydney&apos;s waste removal industry with cutting-edge efficiency, unmatched reliability, and environmental leadership.
              </p>
            </div>

            <div className="space-y-4">
              {heroPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle aria-hidden="true" size={20} className="mt-1 shrink-0 text-[var(--color-accent)]" />
                  <p className="text-[var(--text-secondary)]">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:flex sm:justify-between sm:w-3/4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-start text-center p-4 rounded-[var(--radius-card)] bg-base border-[length:var(--border-width)] border-[color:var(--border)] sm:aspect-square sm:w-32 sm:shrink-0 sm:p-3 sm:justify-center"
                  style={{
                    boxShadow:
                      'inset 0 2px 2px rgba(255,255,255,0.85), inset 0 -3px 4px rgba(0,0,0,0.08)',
                  }}
                >
                  <p className="text-2xl font-bold text-[var(--color-accent)]">{stat.number}</p>
                  <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image + floating badge */}
          <div className="relative">
            <div className="group/hero relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden border-[length:var(--border-width)] border-[color:var(--border)]">
              <Image
                src="/web images/NRR-Logo-With-Text/NRR-Logo-Dark.webp"
                alt="Professional rubbish removal team with modern truck providing reliable same-day waste disposal services in Sydney"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover transition-transform duration-500 group-hover/hero:scale-105"
              />
            </div>
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-[-1.5rem] lg:translate-x-0 p-4 md:p-6 rounded-[var(--radius-card)] whitespace-nowrap bg-base border-[length:var(--border-width)] border-[color:var(--border)]"
              style={{
                boxShadow:
                  'inset 0 3px 3px rgba(255,255,255,0.90), inset 0 -5px 6px rgba(0,0,0,0.14)',
              }}
            >
              <div className="flex items-center gap-3">
                <Truck aria-hidden="true" size={24} className="text-[var(--color-accent)]" />
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Same Day</p>
                  <p className="text-sm text-[var(--text-muted)]">Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="bg-base-secondary" aria-labelledby="mission-heading">
        <div className="text-center mb-16">
          <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Our Rubbish Collection Mission
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">What drives every job we do across Sydney.</p>
        </div>

        <motion.div {...staggerParent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPillars.map((pillar) => (
            <motion.article key={pillar.title} {...staggerChild} className="card !p-6 text-center">
              <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-4 bg-[var(--color-accent)]">
                <pillar.icon aria-hidden="true" size={32} className="text-[var(--text-black)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{pillar.title}</h3>
              <p className="text-[var(--text-secondary)]">{pillar.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-base-secondary" aria-labelledby="values-heading">
        <div className="text-center mb-16">
          <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Why Choose Our Rubbish Removalists
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">How we make your cleanup completely effortless.</p>
        </div>

        <motion.div {...staggerParent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <motion.article key={value.title} {...staggerChild} className="card !p-6 text-center">
              <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-4 bg-[var(--color-accent)]">
                <value.icon aria-hidden="true" size={32} className="text-[var(--text-black)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{value.title}</h3>
              <p className="text-[var(--text-secondary)]">{value.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Environmental Commitment */}
      <SectionWrapper className="bg-base-secondary" aria-labelledby="environmental-heading">
        <motion.div {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="environmental-heading" className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
              Eco-Friendly Hard Waste Collection
            </h2>
            <div className="space-y-6">
              {ecoPoints.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-2 rounded-[var(--radius-btn)] bg-[var(--color-accent)] shrink-0">
                    <CheckCircle aria-hidden="true" size={20} className="text-[var(--text-black)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="group/eco relative aspect-[4/3] w-full rounded-[var(--radius-card)] overflow-hidden border-[length:var(--border-width)] border-[color:var(--border)]">
            <Image
              src="/web images/Home/home-hero-desktop.webp"
              alt="Eco-friendly rubbish removal, same day rubbish removal near me in Sydney logo, includes hard rubbish collection and waste removal service."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover/eco:scale-105"
            />
          </div>
        </motion.div>
      </SectionWrapper>

    </div>
  );
}
