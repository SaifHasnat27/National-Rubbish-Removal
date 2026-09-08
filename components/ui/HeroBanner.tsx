"use client";

import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, ClipboardCheck, Clock, Shield, Recycle, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

const trustStats: { icon: LucideIcon; text: string; subtext: string }[] = [
  { icon: Clock, text: 'Same Day Service', subtext: 'Available 24/7' },
  { icon: Shield, text: 'Fully Insured', subtext: 'Licensed & Bonded' },
  { icon: Recycle, text: 'Eco-Friendly', subtext: '95% Recycled' },
];

// Badge rotates through these — Affordable Pricing leads, then the trust stats.
const badgeStats: { icon: LucideIcon; text: string; subtext: string }[] = [
  { icon: Star, text: 'Affordable Pricing', subtext: 'Zero Hidden Fees' },
  ...trustStats,
];

// Foreground TV-frame image rotates through these (test set for now).
const heroImages: string[] = [
  '/web images/Home/home-slider/affordable1.webp',
  '/web images/Home/home-slider/same-day.webp',
  '/web images/Home/home-slider/insured.webp',
  '/web images/Home/home-slider/home-eco-truck.webp',
];

export default function HeroBanner() {
  // ONE shared clock ticks every 2s. Both the badge and the hero image read from
  // this same `tick` (each via % its own list length), so they stay in lockstep
  // with no drift — but each runs its OWN animation. Reduced-motion holds static.
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  // Pause the clock while the hero is scrolled off-screen — no ticks, no
  // crossfades, no background CPU. Resumes from the same frame on re-entry.
  const rootRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, [reduceMotion, inView]);

  const activeStat = badgeStats[tick % badgeStats.length];
  const imageIndex = tick % heroImages.length;
  const activeImage = heroImages[imageIndex];

  // ── Reused pieces (identical markup in both breakpoint branches) ──────────

  // Heading + subheading + buttons on the charcoal card-dark surface. The bg
  // alpha is dropped so the photo reads through — !important beats card-dark's fill.
  // Mobile sizes are min(vw, cap): identical to the old fixed values at ≥~430px,
  // and below that they shrink with the 2/3 box (same lockstep trick as desktop)
  // so the card never outgrows the photo on narrow devices.
  const TextCard = (
    <div className="card card-dark !p-[min(5.5vw,1.5rem)] space-y-[min(5.5vw,1.5rem)] !bg-[var(--bg-nav)]/60 md:!p-[2.2vw] md:space-y-[1.6vw] md:!bg-[var(--bg-nav)]/90">
      <div className="space-y-[min(2.8vw,0.75rem)] md:space-y-[0.9vw]">
        <h1
          className="font-[family-name:var(--font-body)] text-[clamp(1.5rem,8.3vw,2.25rem)] md:text-[clamp(2.25rem,4vw,3rem)] font-bold leading-tight text-[var(--color-white)]"
          itemProp="headline"
        >
          Hard Rubbish Collection &amp; Rubbish Removal Sydney
        </h1>
        <p className="text-[clamp(0.8rem,3.7vw,1rem)] sm:text-lg md:text-[clamp(0.9rem,1.3vw,1.35rem)] leading-relaxed text-[var(--color-white)]">
          Fast, reliable, and eco-friendly waste disposal. Same-day service available across all Sydney metro areas.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-[min(2.8vw,0.75rem)] md:gap-4">
        <a href={`tel:${BUSINESS.phoneRaw}`} aria-label={`Call Now: ${BUSINESS.phone}`} className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm"
          >
            <Phone aria-hidden="true" size={20} className="shrink-0" />
            <span className="md:truncate">Call Now: {BUSINESS.phone}</span>
          </Button>
        </a>
        <Link href="/contact#quote-form" aria-label="Get Free Quote" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm"
          >
            <span className="md:truncate">Get Free Quote</span>
            <ClipboardCheck aria-hidden="true" size={20} className="shrink-0" />
          </Button>
        </Link>
      </div>
    </div>
  );

  // Floating rotating badge. Grid stack: each [icon + text] unit overlaps in one
  // cell so the badge sizes to the WIDEST/TALLEST and never resizes as it rotates
  // (invisible copies are the sizers; the animated one sits on top). One
  // AnimatePresence + one transition drives icon AND text together.
  const RotatingBadge = (
    <div
      className="max-w-[min(80vw,320px)] p-3 md:p-4 rounded-[var(--radius-card)] bg-[var(--bg-nav)] border border-white/10"
      style={{
        boxShadow:
          'inset 0 3px 3px rgba(255,255,255,0.18), inset 0 -5px 6px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.25)',
      }}
    >
      <div className="grid">
        {badgeStats.map((stat) => (
          <div key={stat.text} aria-hidden="true" className="invisible [grid-area:1/1] flex items-center gap-2 min-w-0">
            <stat.icon size={20} className="shrink-0" />
            <div className="min-w-0">
              <p className="text-base md:text-lg text-[var(--color-white)] truncate">{stat.text}</p>
              <p className="text-xs text-[var(--color-white)] truncate">{stat.subtext}</p>
            </div>
          </div>
        ))}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStat.text}
            className="[grid-area:1/1] flex items-center gap-2 min-w-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <activeStat.icon aria-hidden="true" size={20} className="text-[var(--color-accent)] shrink-0" />
            <div className="min-w-0">
              <p className="text-base md:text-lg text-[var(--color-white)] truncate">{activeStat.text}</p>
              <p className="text-xs text-[var(--color-white)] truncate">{activeStat.subtext}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  // Desktop-only rotating TV frame. card-dark = the frame; images Ken-Burns
  // crossfade inside it (dissolve + slow drift-zoom). Frame clips the zoom.
  const TvFrameImage = (
    <div className="p-[2px]! border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-card)]">
      <div className="group/image relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={activeImage}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1.05 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeInOut' },
              scale: { duration: 2, ease: 'linear' },
            }}
          >
            <Image
              src={activeImage}
              alt="National Rubbish Removal professional rubbish removal work across Sydney"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority={imageIndex === 0}
              className="object-cover transition-transform duration-500 group-hover/image:scale-110"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  const entry = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };

  // Backdrop as ONE <picture> with a media-split source instead of two <Image>s:
  // both breakpoint branches live in the DOM, and a display:none <img> still
  // downloads — but a non-matching <source media> is never fetched. So each
  // device downloads exactly one backdrop. Same optimizer URLs as next/image.
  const {
    props: { srcSet: desktopBgSrcSet },
  } = getImageProps({
    alt: '',
    fill: true,
    priority: true,
    fetchPriority: 'high',
    sizes: '100vw',
    src: '/web images/Home/home-hero-desktop4.webp',
  });
  const {
    props: { srcSet: mobileBgSrcSet, ...heroBgImg },
  } = getImageProps({
    alt: '',
    fill: true,
    priority: true,
    fetchPriority: 'high',
    sizes: '100vw',
    src: '/web images/Home/home-hero-mobile.webp',
  });
  const heroBackdrop = (alt: string) => (
    <picture>
      {/* ≥1024 = desktop backdrop; otherwise the <img>'s own (mobile) srcSet wins */}
      <source media="(min-width: 1024px)" srcSet={desktopBgSrcSet} />
      <img {...heroBgImg} srcSet={mobileBgSrcSet} alt={alt} className="object-cover" />
    </picture>
  );

  return (
    <header ref={rootRef} className="relative w-full bg-base-secondary text-[var(--text-primary)]" role="banner">
      {/* ── DESKTOP (≥1024, md: — remapped to 1024px site-wide in globals.css):
             template pattern — bg image in a width-based aspect-[5/2] box
             (crop scales with width, no jump), content overlaid + centred. ── */}
      <div className="relative hidden md:block w-full aspect-[3/1] overflow-hidden">
        {heroBackdrop('Professional rubbish removal truck and team providing same-day waste disposal services across Sydney Metro Area')}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="section-wrapper w-full">
            {/* Fully fluid: card fonts/padding are vw-scaled and the TV image is a
                vw WIDTH, so its 4/3 height (0.75 × its width = 28.5vw) always stays
                under the box height (33.33vw at 3/1) — nothing overflows at any
                desktop resolution; everything scales together. */}
            <motion.div {...entry} className="flex items-center gap-[3vw]">
              <div className="flex-1 min-w-[380px]">{TextCard}</div>
              <div className="relative w-[28vw] xl:w-[38vw] max-w-[620px] shrink-0">
                {TvFrameImage}
                <div className="absolute -bottom-[1.4vw] left-[-1.4vw]">{RotatingBadge}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MOBILE + TABLET (<1024, md:): home-hero-mobile.webp as the section
             backdrop. Pure aspect-[2/3] — same rule as desktop's aspect-[3/1]:
             width = 100vw, height = width × the ratio, no cap. Charcoal text
             card now sits ON TOP of the photo (overlaid, like desktop) instead
             of straddling the seam. Rotating TV-frame slideshow + badge sit
             below on bg-secondary. ── */}
      <div className="md:hidden">
        <div className="relative w-full aspect-[2/3] overflow-hidden">
          {heroBackdrop('Same day rubbish removal, hard garbage and junk removal service in Sydney')}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="section-wrapper w-full">
              <motion.div {...entry} className="sm:max-w-xl sm:mx-auto">
                {TextCard}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="section-wrapper pt-8 pb-12">
          <div className="relative">
            {TvFrameImage}
            <div className="absolute bottom-0 translate-y-1/2 inset-x-0 flex justify-center">{RotatingBadge}</div>
          </div>
        </div>
      </div>
    </header>
  );
}