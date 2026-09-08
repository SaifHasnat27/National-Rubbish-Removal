"use client";

import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Phone, ClipboardCheck, Clock, Shield, Recycle, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

const trustStats: { icon: LucideIcon; text: string; subtext: string }[] = [
  { icon: Clock, text: 'Same Day Service', subtext: 'Available 24/7' },
  { icon: Shield, text: 'Fully Insured', subtext: 'Licensed & Bonded' },
  { icon: Recycle, text: 'Eco-Friendly', subtext: '95% Recycled' },
];

const badgeStats: { icon: LucideIcon; text: string; subtext: string }[] = [
  { icon: Star, text: 'Affordable Pricing', subtext: 'Zero Hidden Fees' },
  ...trustStats,
];

const heroImages: string[] = [
  '/web images/Home/home-slider/affordable1.webp',
  '/web images/Home/home-slider/same-day.webp',
  '/web images/Home/home-slider/insured.webp',
  '/web images/Home/home-slider/home-eco-truck.webp',
];

const TICK_MS = 2000;
const HOLD_MS = 1500;

const heroCss = `
@keyframes nrr-entry { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
.nrr-entry { animation: nrr-entry .8s cubic-bezier(.25,.46,.45,.94) both; }

.nrr-slide { position: absolute; inset: 0; opacity: 0; transition: opacity .8s ease-in-out; }
.nrr-slide[data-on="1"] { opacity: 1; }

@keyframes nrr-kenburns { from { transform: scale(1); } to { transform: scale(1.05); } }
.nrr-slide { transform: scale(1.05); }
.nrr-slide[data-on="1"] { will-change: transform, opacity; }

.nrr-slide[data-on="1"]:not([data-run="1"]) { transform: scale(1); }
.nrr-slide[data-on="1"][data-run="1"] { animation: nrr-kenburns ${TICK_MS}ms linear forwards; }

.nrr-badge { grid-area: 1/1; opacity: 0; transition: opacity .5s ease-in-out; }
.nrr-badge[data-on="1"] { opacity: 1; transition-delay: .5s; }

@media (prefers-reduced-motion: reduce) {
  .nrr-entry { animation: none; }
  .nrr-slide { transition: none; animation: none !important; transform: none; }
  .nrr-badge { transition: none; }
}
`;

export default function HeroBanner() {
  const [tick, setTick] = useState(0);
  const [started, setStarted] = useState(false);

  const rootRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heldRef = useRef(false);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    let hold: ReturnType<typeof setTimeout> | undefined;

    const begin = () => {
      heldRef.current = true;
      setStarted(true);
      interval = setInterval(() => setTick((t) => t + 1), TICK_MS);
    };

    if (heldRef.current) {
      begin();
    } else {
      hold = setTimeout(begin, HOLD_MS);
    }

    return () => {
      clearTimeout(hold);
      clearInterval(interval);
    };
  }, [inView]);

  const statIndex = tick % badgeStats.length;
  const imageIndex = tick % heroImages.length;

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
        <a href={`tel:${BUSINESS.phoneRaw}`} aria-label={`Call Now: ${BUSINESS.phone}`} className="w-full sm:flex-1 sm:min-w-0">
          <Button
            variant="primary"
            size="md"
            className="w-full !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm"
          >
            <Phone aria-hidden="true" size={20} className="shrink-0" />
            <span className="md:truncate">Call Now: {BUSINESS.phone}</span>
          </Button>
        </a>
        <Link href="/contact#quote-form" aria-label="Get Free Quote" className="w-full sm:flex-1 sm:min-w-0">
          <Button
            variant="primary"
            size="md"
            className="w-full !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm"
          >
            <span className="md:truncate">Get Free Quote</span>
            <ClipboardCheck aria-hidden="true" size={20} className="shrink-0" />
          </Button>
        </Link>
      </div>
    </div>
  );

  const RotatingBadge = (
    <div
      className="max-w-[min(80vw,320px)] p-3 md:p-4 rounded-[var(--radius-card)] bg-[var(--bg-nav)] border border-white/10"
      style={{
        boxShadow:
          'inset 0 3px 3px rgba(255,255,255,0.18), inset 0 -5px 6px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.25)',
      }}
    >
      <div className="grid">
        {badgeStats.map((stat, i) => {
          const on = i === statIndex;
          return (
            <div
              key={stat.text}
              data-on={on ? '1' : '0'}
              aria-hidden={on ? undefined : 'true'}
              className="nrr-badge flex items-center gap-2 min-w-0"
            >
              <stat.icon aria-hidden="true" size={20} className="text-[var(--color-accent)] shrink-0" />
              <div className="min-w-0">
                <p className="text-base md:text-lg text-[var(--color-white)] truncate">{stat.text}</p>
                <p className="text-xs text-[var(--color-white)] truncate">{stat.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const TvFrameImage = (
    <div className="p-[2px]! border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-card)]">
      <div className="group/image relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            data-on={i === imageIndex ? '1' : '0'}
            data-run={started ? '1' : '0'}
            className="nrr-slide"
          >
            <Image
              src={src}
              alt="National Rubbish Removal professional rubbish removal work across Sydney"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority={i === 0}
              className="object-cover transition-transform duration-500 group-hover/image:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const {
    props: { srcSet: desktopBgSrcSet },
  } = getImageProps({
    alt: '', fill: true, priority: true, fetchPriority: 'high', sizes: '100vw',
    src: '/web images/Home/home-hero-desktop4.webp',
  });
  const {
    props: { srcSet: mobileBgSrcSet, ...heroBgImg },
  } = getImageProps({
    alt: '', fill: true, priority: true, fetchPriority: 'high', sizes: '100vw',
    src: '/web images/Home/home-hero-mobile.webp',
  });
  const heroBackdrop = (alt: string) => (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopBgSrcSet} />
      <img {...heroBgImg} srcSet={mobileBgSrcSet} alt={alt} className="object-cover" />
    </picture>
  );

  return (
    <header ref={rootRef} className="relative w-full bg-base-secondary text-[var(--text-primary)]" role="banner">
      <style>{heroCss}</style>

      <div className="relative hidden md:block w-full aspect-[3/1] overflow-hidden">
        {heroBackdrop('Professional rubbish removal truck and team providing same-day waste disposal services across Sydney Metro Area')}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="section-wrapper w-full">
            <div className="nrr-entry flex items-center gap-[3vw]">
              <div className="flex-1 min-w-[380px]">{TextCard}</div>
              <div className="relative w-[28vw] xl:w-[38vw] max-w-[620px] shrink-0">
                {TvFrameImage}
                <div className="absolute -bottom-[1.4vw] left-[-1.4vw]">{RotatingBadge}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative w-full aspect-[2/3] overflow-hidden">
          {heroBackdrop('Same day rubbish removal, hard garbage and junk removal service in Sydney')}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="section-wrapper w-full">
              <div className="nrr-entry sm:max-w-xl sm:mx-auto">
                {TextCard}
              </div>
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
