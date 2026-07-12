"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2, CheckCircle, Phone, ClipboardCheck,
  Clock, AlertTriangle, Recycle, Truck, Shield, Star,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { services } from '@/lib/servicesData';
import { BUSINESS } from '@/lib/constants';

// Derive valid tab IDs dynamically from the data source
const VALID_TABS = services.map(s => s.id);

// ─── Data ────────────────────────────────────────────────────────────────────
const additionalServices: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Clock, title: 'Same Day Service', description: 'Urgent removals available 24/7' },
  { icon: AlertTriangle, title: 'Hazardous Waste Disposal', description: 'Available upon request' },
  { icon: Recycle, title: 'Eco-Friendly Disposal', description: '95% of waste recycled responsibly' },
];

const pricingFactors: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Truck, title: 'Volume of Waste', description: 'Pricing based on how much space your items take up in our truck' },
  { icon: Clock, title: 'Location & Access', description: 'Distance and accessibility can affect pricing - no hidden fees' },
  { icon: Shield, title: 'Type of Waste', description: 'Standard household items included, special items may incur additional costs' },
];

const rateBenefits: { title: string; desc: string }[] = [
  { title: 'No Hidden Fees', desc: 'The price we quote includes everything - labour, disposal, and environmental fees.' },
  { title: 'Competitive Rates', desc: 'Up to 30% less than traditional skip bin hire when you factor in permits and collection.' },
  { title: 'Volume-Based Pricing', desc: 'You only pay for the space your items take up - fair and transparent.' },
];

const priceMatchPoints = [
  'Like-for-like service comparison',
  'Written quote required',
  'Same service area',
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

// ─── Tabs section (unchanged) ────────────────────────────────────────────────
function ServicesContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam && VALID_TABS.includes(tabParam) ? tabParam : services[0].id;

  return (
    <SectionWrapper>
      <Tabs key={activeTab} defaultValue={activeTab}>
        <TabsList className="flex justify-start">
          {services.map(s => (
            <TabsTrigger key={s.id} value={s.id}>{s.name}</TabsTrigger>
          ))}
        </TabsList>

        {services.map(s => (
          <TabsContent key={s.id} value={s.id}>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-start">
              <div className="relative aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden">
                <Image src={s.image} alt={s.name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] mb-6">
                  {s.name}
                </h2>
                <div className="mb-8">
                  {s.longDesc.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`text-[var(--text-secondary)] font-light text-sm leading-[var(--leading-relaxed)] ${idx < s.longDesc.length - 1 ? 'mb-4' : 'mb-6'}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--text-primary)] mb-5">
                    Service Features
                  </h3>
                  <ul className="space-y-6 mb-8">
                    {s.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 text-[var(--color-accent)] shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[var(--text-primary)] text-sm font-medium leading-[var(--leading-snug)] mb-1.5">
                            {bullet.text}
                          </p>
                          <p className="text-[var(--text-secondary)] font-light text-sm leading-[var(--leading-relaxed)]">
                            {bullet.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact">
                  <Button variant="primary">Get a Free Quote</Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="w-full bg-base-secondary">

      {/* Hero — top padding clears the fixed nav so content is evenly centred */}
      <section className="bg-base-secondary pt-[calc(var(--nav-height)+3rem)] pb-12 md:pt-[calc(var(--nav-height)+5rem)] md:pb-20">
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Our Services | Hard Waste Collection &amp; Rubbish Removal Near Me
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[var(--text-primary)]">
              From residential cleanouts to commercial waste management and construction debris removal - we handle it all with professionalism and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS.phoneRaw}`} aria-label="Call Us Now">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  <Phone aria-hidden="true" size={20} />
                  Call Us Now
                </Button>
              </a>
              <Link href="/contact" aria-label="Get Free Quote">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Get Free Quote
                  <ClipboardCheck aria-hidden="true" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs (unchanged) */}
      <Suspense fallback={null}>
        <ServicesContent />
      </Suspense>

      {/* Additional Services */}
      <SectionWrapper className="bg-base-secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Additional Hard Waste Collection Options
          </h2>
          <p className="text-xl text-[var(--text-primary)]">Extra convenience for your peace of mind</p>
        </div>

        <motion.div {...staggerParent} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service) => (
            <motion.article key={service.title} {...staggerChild} className="card !p-8 text-center">
              <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-4 bg-[var(--color-accent)]">
                <service.icon aria-hidden="true" size={32} className="text-[var(--text-black)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{service.title}</h3>
              <p className="text-[var(--text-primary)]">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Pricing Factors */}
      <SectionWrapper className="bg-base-secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Transparent Pricing for Hard Rubbish Collection
          </h2>
          <p className="text-xl text-[var(--text-primary)]">Transparent pricing based on these key factors</p>
        </div>

        <motion.div {...staggerParent} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingFactors.map((factor) => (
            <motion.div key={factor.title} {...staggerChild} className="text-center space-y-4">
              <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto bg-[var(--color-accent)]">
                <factor.icon aria-hidden="true" size={32} className="text-[var(--text-black)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">{factor.title}</h3>
              <p className="text-[var(--text-primary)]">{factor.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Why Choose Our Pricing */}
      <SectionWrapper className="bg-base-secondary">
        <motion.div {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
              Affordable Hard Garbage Collection Rates
            </h2>
            <div className="space-y-6">
              {rateBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <CheckCircle aria-hidden="true" size={20} className="mt-1 shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[var(--text-primary)]">{benefit.title}</h3>
                    <p className="text-[var(--text-primary)]">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card !p-8">
            <div className="text-center mb-6">
              <Star aria-hidden="true" size={48} className="mx-auto mb-4 text-[var(--color-accent)]" />
              <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Price Match Guarantee</h3>
              <p className="text-[var(--text-primary)]">Find a better quote? We&apos;ll match it and beat it by 10%*</p>
            </div>

            <div className="space-y-4 text-sm">
              {priceMatchPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle aria-hidden="true" size={16} className="shrink-0 text-[var(--color-accent)]" />
                  <span className="text-[var(--text-primary)]">{point}</span>
                </div>
              ))}
            </div>

            <a href={`tel:${BUSINESS.phoneRaw}`} className="block mt-6" aria-label="Call Us to Claim Price Match">
              <Button variant="primary" size="md" className="w-full">
                <Phone aria-hidden="true" size={20} />
                Call Us to Claim Price Match
              </Button>
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

    </div>
  );
}
