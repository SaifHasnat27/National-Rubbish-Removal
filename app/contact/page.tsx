"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Clock, MapPin } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import PageBanner from '@/components/layout/PageBanner';
import PageContactForm from '@/components/forms/PageContactForm';
import QuickContact from '@/components/contact/QuickContact';
import FAQSection from '@/components/servicecards/faq';
import { BUSINESS } from '@/lib/constants';
import { PAGE_BANNERS } from '@/lib/pageBannerData';

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

  // ---- GSAP: form card slides in from the left, info cards from the right ----
  useGSAP(
    () => {
      if (!formSectionRef.current) return;
      const formCard = formSectionRef.current.querySelector('.form-card');
      const infoCards = formSectionRef.current.querySelectorAll('.info-card');
      if (!formCard) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([formCard, ...infoCards], { opacity: 1, x: 0 });
      });

      // Offset scales down on mobile: a full-width stacked card sliding 60px
      // reads as a layout jump, not motion. Desktop's wide columns have room.
      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: no-preference)',
          isDesktop: `(min-width: ${BUSINESS.mobileBreakpoint + 1}px)`,
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions!;
          const offset = isDesktop ? 60 : 24;

          // Set the hidden state immediately so there's no flash-then-jump
          // before each card's own trigger fires.
          gsap.set(formCard, { x: -offset, opacity: 0 });
          gsap.set(infoCards, { x: offset, opacity: 0 });

          // Stacked on mobile, the form card and info cards sit far apart in
          // scroll position — one shared trigger on the container fired all
          // three at once, so the info cards animated off-screen before the
          // user ever scrolled to them. batch() gives each card its own
          // trigger (still transform/opacity only, so still compositor-only)
          // and coalesces near-simultaneous entries, which is what makes
          // desktop's side-by-side cards still animate together.
          ScrollTrigger.batch(formCard, {
            start: 'top 85%',
            once: true,
            onEnter: (elements) =>
              gsap.to(elements, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', overwrite: true }),
          });

          if (infoCards.length) {
            ScrollTrigger.batch(infoCards, {
              start: 'top 85%',
              once: true,
              onEnter: (elements) =>
                gsap.to(elements, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12, overwrite: true }),
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: formSectionRef }
  );

  return (
    <div className="w-full bg-base-secondary min-h-screen" ref={container}>
      <PageBanner {...PAGE_BANNERS.contact} />

      {/* Quick Contact */}
      <SectionWrapper className="bg-base-secondary">
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Contact Our Hard Rubbish Collection Team
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">Choose the method that works best for you.</p>
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
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">Our Opening Hours</h3>
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

      {/* FAQ */}
      <SectionWrapper className="bg-base-secondary">
        <FAQSection />
      </SectionWrapper>
    </div>
  );
}