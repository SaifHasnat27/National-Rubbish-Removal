"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, ClipboardCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ContactForm from '@/components/forms/ContactForm';
import QuickContact from '@/components/contact/QuickContact';
import FAQSection from '@/components/servicecards/faq';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

const operatingHours = [
  { day: 'Monday - Friday', hours: '6:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '7:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 9:00 PM' },
];

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  // ---- Existing scroll-reveal for sections that still use the class ----
  useGSAP(() => {
    const revealSections = gsap.utils.toArray('.scroll-reveal');
    revealSections.forEach((section: any) => {
      gsap.from(section.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%' },
      });
    });
  }, { scope: container });

  // ---- GSAP timeline for the form + info cards (the "wow" moment) ----
  useGSAP(
    () => {
      if (!formSectionRef.current) return;

      // Respect reduced motion: if user prefers reduced motion, just set elements visible immediately
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          isDesktop: `(min-width: ${BUSINESS.mobileBreakpoint + 1}px)`,
        },
        (ctx) => {
          const { reduceMotion } = ctx.conditions!;
          const formCard = (formSectionRef.current as HTMLElement).querySelector('.form-card');
          const infoCards = (formSectionRef.current as HTMLElement).querySelectorAll('.info-card');

          if (!formCard) return;

          if (reduceMotion) {
            // Zero duration – elements appear instantly
            gsap.set([formCard, ...infoCards], { opacity: 1, x: 0, rotationY: 0 });
            return;
          }

          // Build the timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: formSectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });

          // Form card glides in from the left
          tl.fromTo(
            formCard,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
            0
          );

          // Info cards swoop in from the right with a subtle 3D twist, staggered
          if (infoCards.length) {
            tl.fromTo(
              infoCards,
              { x: 60, opacity: 0, rotationY: 15 },
              {
                x: 0,
                opacity: 1,
                rotationY: 0,
                duration: 0.75,
                ease: 'back.out(1.2)',
                stagger: 0.12,
                clearProps: 'transform', // clean up inline styles after animation
              },
              '-=0.3' // overlap slightly for fluidity
            );
          }

          // Add will-change during animation, then remove it
          tl.set([formCard, ...infoCards], { willChange: 'transform' }, 0);
          tl.set([formCard, ...infoCards], { willChange: 'auto' });
        },
        formSectionRef.current // scope so selectors are local (optional but good practice)
      );

      return () => mm.revert(); // clean up matchMedia on unmount
    },
    { scope: formSectionRef }
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-base-secondary min-h-screen"
      ref={container}
    >
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
              Contact | Local Rubbish Removal Near Me &amp; Hard Waste Collection
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[var(--text-primary)]">
              Ready to clear your space? Contact us for instant quotes, same-day service, and professional rubbish removal across Sydney.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS.phoneRaw}`} aria-label="Call Us Now">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  <Phone aria-hidden="true" size={20} />
                  Call Us Now
                </Button>
              </a>
              <a href="#quote-form" aria-label="Get Free Quote">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Get Free Quote
                  <ClipboardCheck aria-hidden="true" size={20} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <SectionWrapper className="bg-base-secondary">
        <div className="scroll-reveal">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Contact Our Hard Rubbish Collection Team
            </h2>
            <p className="text-xl text-[var(--text-primary)]">Choose the method that works best for you</p>
          </div>
          <QuickContact />
        </div>
      </SectionWrapper>

      {/* Form + Info Section – now with custom GSAP entrance */}
      <SectionWrapper id="quote-form">
        <div
          ref={formSectionRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          {/* Form Card */}
          <div className="lg:col-span-8 card !p-10 md:!p-12 form-card hover:border-[var(--border-dark)] transition-colors duration-[var(--transition-fast)]">
            <p className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)] mb-4">
              We’re Here to Help.
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] mb-8 text-[var(--text-primary)]">
              Get a Free Quote
            </h2>
            <ContactForm />
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="card info-card hover:border-[var(--border-dark)] transition-colors duration-[var(--transition-fast)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[var(--text-primary)]">
                <Clock aria-hidden="true" size={24} className="text-[var(--color-accent)] shrink-0" />
                Hard Rubbish Collection Hours
              </h2>
              <div className="space-y-4">
                {operatingHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-[var(--border-dark)]">
                    <span className="font-medium text-[var(--text-primary)]">{schedule.day}</span>
                    <span className="font-semibold text-[var(--text-accent)]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-[var(--radius-btn)] bg-base-third">
                <p className="text-sm text-[var(--text-primary)]">
                  <strong>Emergency Service Available:</strong> Contact us for urgent rubbish removal needs outside regular hours.
                </p>
              </div>
            </div>

            <div className="card info-card hover:border-[var(--border-dark)] transition-colors duration-[var(--transition-fast)]">
              <div className="flex items-center gap-3 mb-5">
                <MapPin aria-hidden="true" className="w-4 h-4 text-[var(--text-muted)]" />
                <p className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-[var(--text-muted)]">
                  Service Area
                </p>
              </div>
              <p className="font-[family-name:var(--font-display)] text-xl text-[var(--text-primary)] leading-snug">
                {BUSINESS.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ – untouched, still using scroll-reveal */}
      <SectionWrapper className="bg-base-secondary">
        <div className="scroll-reveal">
          <FAQSection />
        </div>
      </SectionWrapper>
    </motion.div>
  );
}