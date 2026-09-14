import { getImageProps } from 'next/image';
import Link from 'next/link';
import { Phone, ClipboardCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';
import TvFrame from './tvframe';

const BTN = 'w-full sm:w-auto !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm';

export default function HeroBanner() {
  // One <picture>, media-split: each device downloads only its own backdrop
  // (a display:none <img> would still fetch; a non-matching <source> won't).
  const common = { alt: '', fill: true as const, priority: true, fetchPriority: 'high' as const, sizes: '100vw' };
  const { props: { srcSet: desktopSrcSet } } = getImageProps({ ...common, src: '/web images/Home/home-hero-desktop4.webp' });
  const { props: { srcSet: mobileSrcSet, ...bgImg } } = getImageProps({ ...common, src: '/web images/Home/home-hero-mobile.webp' });

  return (
    <header className="relative w-full bg-base-secondary text-[var(--text-primary)]" role="banner">
      {/* Slide-up runs on paint, not hydration, and never touches opacity so
          nothing is hidden from LCP. The frame only slides on desktop, where
          it sits beside the card; on mobile it just appears in place. */}
      <style>{`
        @keyframes heroSlideUp {
          from { transform: translateY(32px); }
          to   { transform: none; }
        }
        .hero-rise {
          animation: heroSlideUp 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) both;
        }
        @media (min-width: 1024px) {
          .hero-rise-md { animation: heroSlideUp 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) both; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise, .hero-rise-md { animation: none; }
        }
      `}</style>

      {/* BACKGROUND — desktop 3/1 covers the whole hero; mobile 2/3 covers only
          the top, so the canvas shows through beneath it. */}
      <div className="absolute inset-x-0 top-0 aspect-[2/3] md:aspect-[5/2] overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
          <img
            {...bgImg}
            srcSet={mobileSrcSet}
            alt="Professional rubbish removal truck and team providing same-day waste disposal services across Sydney Metro Area"
            className="object-cover"
          />
        </picture>
      </div>

      {/* TEXT CARD — same aspect as the background so it centres on the photo.
          Desktop max-width leaves room for the frame pinned at the right. */}
      <div className="relative z-20 aspect-[2/3] md:aspect-[5/2] flex items-center">
        <div className="section-wrapper w-full">
          <div className="hero-rise sm:max-md:max-w-xl sm:max-md:mx-auto md:max-w-[calc(100%_-_3vw_-_28vw)] xl:max-w-[calc(100%_-_3vw_-_min(38vw,620px))]">
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
                  <Button variant="primary" size="md" className={BTN}>
                    <Phone aria-hidden="true" size={20} className="shrink-0" />
                    <span className="md:truncate">Call Now: {BUSINESS.phone}</span>
                  </Button>
                </a>
                <Link href="/contact#quote-form" aria-label="Get Free Quote" className="w-full sm:w-auto">
                  <Button variant="primary" size="md" className={BTN}>
                    <span className="md:truncate">Get Free Quote</span>
                    <ClipboardCheck aria-hidden="true" size={20} className="shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TV FRAME — one instance. Mobile: flows below the photo. Desktop:
          pinned right, vertically centred, within the same wrapper bounds. */}
      <div className="relative z-10 section-wrapper pt-8 pb-12 md:absolute md:inset-0 md:py-0 md:flex md:items-center md:justify-end">
        <div className="hero-rise-md md:w-[28vw] xl:w-[38vw] md:max-w-[620px]">
          <TvFrame />
        </div>
      </div>
    </header>
  );
}
