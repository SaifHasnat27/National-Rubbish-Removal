"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Heart, CheckCircle, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

// ─── Data ────────────────────────────────────────────────────────────────────
const heroPoints = [
  'Founded by industry veterans with a disruptive vision to transform Sydney’s waste removal through technology and exceptional service',
  'Rapidly expanding across Sydney metro with our signature same-day service that’s setting new industry standards',
  'Fully licensed, comprehensively insured, and pioneering sustainable waste solutions that competitors are now copying',
];

const stats = [
  { number: '100%', label: 'Client-Focused Approach' },
  { number: '50+', label: 'Suburbs Covered' },
  { number: '24/7', label: 'Customer Support' },
];

const values: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Shield, title: 'Reliability', description: 'We show up on time, every time, with professional service you can count on.' },
  { icon: Heart, title: 'Environmental Care', description: 'We recycle 95% of collected waste, contributing to a cleaner, greener Sydney.' },
  { icon: Users, title: 'Customer First', description: 'Your satisfaction is our priority. We go above and beyond for every customer.' },
  { icon: Award, title: 'Excellence', description: 'Industry-leading service standards with fully trained and insured professionals.' },
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
              <p className="text-xl leading-relaxed text-[var(--text-primary)]">
                The innovative startup revolutionizing Sydney&apos;s waste removal industry with cutting-edge efficiency, unmatched reliability, and environmental leadership.
              </p>
            </div>

            <div className="space-y-4">
              {heroPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle aria-hidden="true" size={20} className="mt-1 shrink-0 text-[var(--color-accent)]" />
                  <p className="text-[var(--text-primary)]">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-[var(--color-accent)]">{stat.number}</p>
                  <p className="text-sm text-[var(--text-primary)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image + floating badge */}
          <div className="relative">
            <div className="group/hero rounded-[var(--radius-card)] overflow-hidden border-[length:var(--border-width)] border-[color:var(--border)]">
              <Image
                src="/web images/rubbish removal truck.webp"
                alt="Professional rubbish removal team with modern truck providing reliable same-day waste disposal services in Sydney"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="w-full h-auto object-cover transition-transform duration-500 group-hover/hero:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-[-1.5rem] lg:translate-x-0 p-4 md:p-6 rounded-[var(--radius-card)] whitespace-nowrap bg-base border-[length:var(--border-width)] border-[color:var(--border)]">
              <div className="flex items-center gap-3">
                <Truck aria-hidden="true" size={24} className="text-[var(--color-accent)]" />
                <div>
                  <p className="font-bold text-[var(--text-primary)]">Same Day</p>
                  <p className="text-sm text-[var(--text-primary)]">Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="bg-base-secondary" aria-labelledby="mission-heading">
        <motion.div {...reveal} className="max-w-4xl mx-auto text-center">
          <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
            Our Hard Rubbish Collection Mission
          </h2>
          <div className="card !p-8 md:!p-12">
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-primary)]">
              To provide Sydney with the most reliable, efficient, and environmentally responsible rubbish removal service, making clean-ups stress-free for our customers while contributing to a sustainable future.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-base-secondary" aria-labelledby="values-heading">
        <div className="text-center mb-16">
          <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Why Choose Our Rubbish Removalists
          </h2>
          <p className="text-xl text-[var(--text-primary)]">The principles that guide everything we do</p>
        </div>

        <motion.div {...staggerParent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <motion.article key={value.title} {...staggerChild} className="card !p-6 text-center">
              <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-4 bg-[var(--color-accent)]">
                <value.icon aria-hidden="true" size={32} className="text-[var(--text-black)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{value.title}</h3>
              <p className="text-[var(--text-primary)]">{value.description}</p>
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
                    <p className="text-[var(--text-primary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="group/eco relative aspect-[3/2] w-full lg:max-w-md lg:ml-auto rounded-[var(--radius-card)] overflow-hidden border-[length:var(--border-width)] border-[color:var(--border)]">
            <Image
              src="/web images/rubbish removal Sydney logo.webp"
              alt="Eco-friendly rubbish removal, same day rubbish removal near me in Sydney logo, includes hard rubbish collection and waste removal service."
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover transition-transform duration-500 group-hover/eco:scale-105"
            />
          </div>
        </motion.div>
      </SectionWrapper>

    </div>
  );
}
