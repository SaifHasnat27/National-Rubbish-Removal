"use client";

import Link from 'next/link';
import { Phone, ClipboardCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import HeroBanner from '@/components/ui/HeroBanner';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';
import ServiceCards from '@/components/servicecards/ServiceCards';

const processSteps = [
  { step: '1', title: 'Call or Book Online', description: 'Get an instant quote by phone or through our online form' },
  { step: '2', title: 'Schedule Pickup', description: 'Choose a convenient time - same day service available' },
  { step: '3', title: 'We Load Everything', description: 'Our team handles all the heavy lifting and loading' },
  { step: '4', title: 'Eco-Friendly Disposal', description: '95% of your waste is recycled or donated responsibly' },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* 1. Hero */}
      <HeroBanner />

      {/* 2. Our Services */}
      <SectionWrapper className="bg-base-secondary" id="services-preview">
        <div className="scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
              Professional Rubbish Removal Services
            </h2>
            <p className="text-xl text-[var(--text-primary)]">Residential, commercial & construction rubbish removal in Sydney</p>
          </div>
          <ServiceCards />
        </div>
      </SectionWrapper>

      {/* 3. Our Process */}
      <SectionWrapper className="bg-base-secondary" id="process">
        <div className="scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
              Same Day Hard Rubbish Collection Process
            </h2>
            <p className="text-xl text-[var(--text-primary)]">Simple, fast, and hassle-free rubbish removal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process) => (
              <div key={process.step} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto bg-[var(--color-accent)] text-[var(--text-black)]">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{process.title}</h3>
                <p className="text-[var(--text-primary)]">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Customer Reviews */}
      <TestimonialsCarousel />

      {/* 5. Book CTA */}
      <SectionWrapper className="bg-base-secondary" id="book-cta">
        <div className="scroll-reveal text-center space-y-8">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]">
            Book Your Hard Rubbish Collection Today
          </h2>
          <p className="text-xl text-[var(--text-primary)]">
            Get an instant quote and book your rubbish removal service today
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
        </div>
      </SectionWrapper>

    </div>
  );
}
