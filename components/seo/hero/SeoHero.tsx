import { getImageProps } from 'next/image';
import Link from 'next/link';
import { Phone, ClipboardCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';
import type { SeoHeroData } from '@/components/seo/lib/seoHeroData';

const DESKTOP_SRC = '/web images/Seo/servicepage-desktop.webp';
const MOBILE_SRC = '/web images/Seo/servicepage-mobile1.webp';
const BTN =
  'w-full sm:w-auto !px-[min(5.5vw,1.5rem)] !text-[clamp(0.75rem,3.7vw,0.875rem)] md:!px-3 xl:!px-6 md:!gap-1.5 xl:!gap-2 md:!text-xs xl:!text-sm';

const imageOpts = {
  alt: '',
  fill: true as const,
  sizes: '100vw',
  priority: true,
  fetchPriority: 'high' as const,
};

const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({ ...imageOpts, src: DESKTOP_SRC });
const {
  props: { srcSet: mobileSrcSet, ...bgImg },
} = getImageProps({ ...imageOpts, src: MOBILE_SRC });

export default function SeoHero({ heading, subheading }: SeoHeroData) {
  return (
    <section className="relative w-full aspect-[2/3] md:aspect-[3/1] overflow-hidden bg-base-secondary font-[family-name:var(--font-body)]">
      <style>{`
        @keyframes seoHeroSlideUp {
          from { transform: translateY(32px); }
          to { transform: none; }
        }
        .seo-hero-rise {
          animation: seoHeroSlideUp 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .seo-hero-rise { animation: none; }
        }
      `}</style>

      <div className="absolute inset-0">
        <picture>
          <source
            media={`(min-width: ${BUSINESS.mobileBreakpoint + 1}px)`}
            srcSet={desktopSrcSet}
          />
          <img
            {...bgImg}
            srcSet={mobileSrcSet}
            fetchPriority="high"
            alt={heading}
            className="object-cover"
          />
        </picture>
      </div>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="section-wrapper w-full">
          <div className="rise mx-auto sm:max-md:max-w-xl">
            <div className="card card-dark space-y-[min(5.5vw,1.5rem)] !bg-[var(--bg-nav)]/60 !p-[min(5.5vw,1.5rem)] text-center md:space-y-[1.6vw] md:!bg-[var(--bg-nav)]/90 md:!p-[2.2vw]">
              <div className="space-y-[min(2.8vw,0.75rem)] md:space-y-[0.9vw]">
                <h1 className="text-pretty text-[clamp(1.5rem,8.3vw,2.25rem)] font-bold leading-tight text-[var(--color-white)] md:text-[clamp(2.25rem,4vw,3rem)]">
                  {heading}
                </h1>
                <p className="mx-auto max-w-3xl text-[clamp(0.8rem,3.7vw,1rem)] leading-relaxed text-[var(--color-white)] sm:text-lg md:text-[clamp(0.9rem,1.3vw,1.35rem)]">
                  {subheading}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-[min(2.8vw,0.75rem)] sm:flex-row md:gap-4">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  aria-label={`Call ${BUSINESS.phone}`}
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="md" className={BTN}>
                    <Phone aria-hidden="true" size={20} className="shrink-0" />
                    <span className="md:truncate">Call {BUSINESS.phone}</span>
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
    </section>
  );
}
