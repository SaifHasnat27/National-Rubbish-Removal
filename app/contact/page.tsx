"use client";

import React, { useRef } from 'react';
import { getImageProps } from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, ClipboardCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import PageContactForm from '@/components/forms/PageContactForm';
import QuickContact from '@/components/contact/QuickContact';
import FAQSection from '@/components/servicecards/faq';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// "06:00" -> "6:00 AM"
const to12Hour = (time: string) => {
  const [h, m] = time.split(':').map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
};

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  // Hero backdrop: ONE <picture> with a media-split source (same pattern as
  // HeroBanner) so each device downloads only its own file.
  const heroBgCommon = { alt: '', fill: true as const, sizes: '100vw', priority: true };
  const {
    props: { srcSet: heroBgDesktopSrcSet },
  } = getImageProps({ ...heroBgCommon, src: '/web images/Banner/contact1.webp' });
  const {
    props: { srcSet: heroBgMobileSrcSet, ...heroBgImg },
  } = getImageProps({ ...heroBgCommon, src: '/web images/Banner/contactMobile.webp' });

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
      {/* Hero — full-width ratio box (2/3 mobile, 3/1 desktop), height follows
          width. Split-source <picture> backdrop, content centred on top. */}
      <section className="relative w-full aspect-[2/3] md:aspect-[3/1] overflow-hidden bg-base-secondary">
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroBgDesktopSrcSet} />
            <img {...heroBgImg} srcSet={heroBgMobileSrcSet} fetchPriority="high" alt="" className="object-cover" />
          </picture>
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="section-wrapper w-full">
            {/* Same card-dark treatment as HeroBanner's TextCard: /60 photo
                bleed-through on mobile, /90 on desktop; all sizes min(vw, cap)
                so the card shrinks with the box on narrow devices. */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mx-auto sm:max-md:max-w-xl"
            >
              <div className="card card-dark !p-[min(5.5vw,1.5rem)] space-y-[min(5.5vw,1.5rem)] !bg-[var(--bg-nav)]/60 md:!p-[2.2vw] md:space-y-[1.6vw] md:!bg-[var(--bg-nav)]/90 text-center">
                <div className="space-y-[min(2.8vw,0.75rem)] md:space-y-[0.9vw]">
                  <h1 className="font-[family-name:var(--font-body)] text-[clamp(1.5rem,8.3vw,2.25rem)] md:text-[clamp(2.25rem,4vw,3rem)] font-bold leading-tight text-[var(--color-white)]">
                    Contact | Local Rubbish Removal Near Me &amp; Hard Waste Collection
                  </h1>
                  <p className="text-[clamp(0.8rem,3.7vw,1rem)] sm:text-lg md:text-[clamp(0.9rem,1.3vw,1.35rem)] leading-relaxed max-w-3xl mx-auto text-[var(--color-white)]">
                    Ready to clear your space? Contact us for instant quotes, same-day service, and professional rubbish removal across Sydney.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-[min(2.8vw,0.75rem)] md:gap-4 justify-center">
                  <a href={`tel:${BUSINESS.phoneRaw}`} aria-label="Call Us Now" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm"
                    >
                      <Phone aria-hidden="true" size={20} className="shrink-0" />
                      Call Us Now
                    </Button>
                  </a>
                  <a href="#quote-form" aria-label="Get Free Quote" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm"
                    >
                      Get Free Quote
                      <ClipboardCheck aria-hidden="true" size={20} className="shrink-0" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <SectionWrapper className="bg-base-secondary">
        <div className="scroll-reveal">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Contact Our Hard Rubbish Collection Team
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">Choose the method that works best for you</p>
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
            <PageContactForm />
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="card info-card hover:border-[var(--border-dark)] transition-colors duration-[var(--transition-fast)]">
              <div className="text-center mb-6">
                <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-4 bg-[var(--color-accent)]">
                  <Clock aria-hidden="true" size={32} className="text-[var(--text-black)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Hard Rubbish Collection Hours</h3>
              </div>
              <div className="space-y-4 text-sm">
                {BUSINESS.openingHours.rows.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-[var(--border-light)]">
                    <span className="font-normal text-[var(--text-secondary)]">{schedule.day}</span>
                    <span className="font-semibold text-[var(--text-accent)]">
                      {to12Hour(schedule.opens)} - {to12Hour(schedule.closes)}
                    </span>
                  </div>
                ))}
              </div>
              {/* radius-xl (soft square), not radius-btn: this is a panel of
                  wrapping text, and the pill radius rounded its corners into the
                  copy. radius-btn is for pills and icon chips. */}
              <div className="mt-4 p-4 rounded-[var(--radius-xl)] bg-base-third">
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="font-semibold text-[var(--text-primary)]">Emergency Service Available:</strong> Contact us for urgent rubbish removal needs outside regular hours.
                </p>
              </div>
            </div>

            <div className="card info-card hover:border-[var(--border-dark)] transition-colors duration-[var(--transition-fast)]">
              <div className="text-center">
                <div className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-4 bg-[var(--color-accent)]">
                  <MapPin aria-hidden="true" size={32} className="text-[var(--text-black)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Service Area</h3>
                <p className="text-[var(--text-secondary)]">{BUSINESS.serviceArea}</p>
              </div>
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