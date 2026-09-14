import { getImageProps } from 'next/image';
import { Phone, ClipboardCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';
import type { BannerData } from '@/lib/pageBannerData';

export default function PageBanner({
  heading,
  subheading,
  desktopSrc,
  mobileSrc,
  alt,
}: BannerData) {
  // ONE <picture> with a media-split source so each device downloads only its
  // own backdrop — a display:none <img> would still fetch.
  const common = { alt: '', fill: true as const, sizes: '100vw', priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktopSrc });
  const {
    props: { srcSet: mobileSrcSet, ...bgImg },
  } = getImageProps({ ...common, src: mobileSrc });

  return (
    <section className="relative w-full aspect-[2/3] md:aspect-[3/1] overflow-hidden bg-base-secondary">
      {/* Slide-up runs on paint, not hydration — and never animates opacity, so
          the card counts for LCP the moment it renders. */}
      <style>{`
        @keyframes bannerSlideUp {
          from { transform: translateY(32px); }
          to   { transform: none; }
        }
        .banner-card {
          animation: bannerSlideUp 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-card { animation: none; }
        }
      `}</style>
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
          <img {...bgImg} srcSet={mobileSrcSet} fetchPriority="high" alt={alt} className="object-cover" />
        </picture>
      </div>
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="section-wrapper w-full">
          {/* card-dark at /60 on mobile so the photo bleeds through, /90 on
              desktop; sizes are min(vw, cap) so the card shrinks with the box. */}
          <div className="banner-card mx-auto sm:max-md:max-w-xl">
            <div className="card card-dark !p-[min(5.5vw,1.5rem)] space-y-[min(5.5vw,1.5rem)] !bg-[var(--bg-nav)]/60 md:!p-[2.2vw] md:space-y-[1.6vw] md:!bg-[var(--bg-nav)]/90 text-center">
              <div className="space-y-[min(2.8vw,0.75rem)] md:space-y-[0.9vw]">
                <h1 className="font-[family-name:var(--font-body)] text-[clamp(1.5rem,8.3vw,2.25rem)] md:text-[clamp(2.25rem,4vw,3rem)] font-bold leading-tight text-[var(--color-white)]">
                  {heading}
                </h1>
                <p className="text-[clamp(0.8rem,3.7vw,1rem)] sm:text-lg md:text-[clamp(0.9rem,1.3vw,1.35rem)] leading-relaxed max-w-3xl mx-auto text-[var(--color-white)]">
                  {subheading}
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
          </div>
        </div>
      </div>
    </section>
  );
}
