"use client";

import { Phone, ClipboardCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import HeroBanner from '@/components/ui/HeroBanner';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';
import ServiceCards from '@/components/servicecards/ServiceCards';
import HomeSpecialty from '@/components/layout/HomeSpecialty';
import WhyUs from '@/components/servicecards/whyUs';
import QuickContact from '@/components/contact/QuickContact';
import PageContactForm from '@/components/forms/PageContactForm';
import FAQSection from '@/components/servicecards/faq';

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

      {/* 2. Our Service */}
      <SectionWrapper className="bg-base-secondary" id="services-preview">
        <div className="scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
              Professional Rubbish Removal Services
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">Residential, commercial & construction rubbish removal in Sydney</p>
          </div>
          <ServiceCards />
        </div>
      </SectionWrapper>

      {/* 2b. Specialty (full-bleed GSAP zoom-out banner) */}
      <HomeSpecialty />

      {/* 3b. Why Choose Us */}
      <WhyUs />

      {/* 4. Customer Reviews */}
      <TestimonialsCarousel />

      {/* 5b. Free Quote form */}
      <SectionWrapper className="bg-base-secondary" id="quote-form">
        <div className="card !p-6 md:!p-8 w-full md:w-3/4 mx-auto hover:!translate-y-0">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)] mb-4">
            We&rsquo;re Here to Help.
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] mb-8 text-[var(--text-primary)]">
            Get a Free Quote
          </h2>
          <PageContactForm />
        </div>
      </SectionWrapper>

      {/* 5c. Our Process */}
      <SectionWrapper className="bg-base-secondary" id="process">
        <div className="scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
              Same Day Hard Rubbish Collection Process
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">Simple, fast, and hassle-free rubbish removal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process) => (
              <div key={process.step} className="card text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto bg-[var(--color-accent)] text-[var(--text-black)]">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{process.title}</h3>
                <p className="text-[var(--text-secondary)]">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>




                  {/* 5d. Book CTA */}
      <SectionWrapper className="bg-base-secondary" id="book-cta">
        <div className="scroll-reveal card card-feature !p-8 w-full md:w-3/4 mx-auto text-center space-y-8">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em]">
            Book Your Hard Rubbish Collection Today
          </h2>
          <p className="text-xl">
            Get an instant quote and book your rubbish removal service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phoneRaw}`} aria-label="Call Us Now">
              <Button variant="secondary" size="md" className="w-full sm:w-auto">
                <Phone aria-hidden="true" size={20} />
                Call Us Now
              </Button>
            </a>
            <a href="#quote-form" aria-label="Get Free Quote">
              <Button variant="secondary" size="md" className="w-full sm:w-auto">
                Get Free Quote
                <ClipboardCheck aria-hidden="true" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </SectionWrapper>



      {/* 6. Quick Contact */}
      <SectionWrapper className="bg-base-secondary" id="contact-options">
        <div className="scroll-reveal">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
              Get In Touch
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">Reach out now for a fast quote or same day booking.</p>
          </div>
          <QuickContact />
        </div>
      </SectionWrapper> 

      {/* 7. FAQ */}
      <SectionWrapper className="bg-base-secondary" id="faq">
        <div className="scroll-reveal">
          <FAQSection />
        </div>
      </SectionWrapper>

    </div>
  );
}
