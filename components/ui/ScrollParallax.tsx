import Image from 'next/image';
import type { ReactNode } from 'react';

/**
 * ScrollParallax — a full-bleed image section whose photo stays pinned to the
 * viewport while the section scrolls over it, like a window sliding across a
 * poster behind the page.
 *
 * NO JAVASCRIPT. The photo layer is a real `position: fixed` element, so the
 * browser's compositor holds it in place. Nothing runs on scroll, so there is
 * nothing to fall behind and judder.
 *
 * This replaced a GSAP ScrollTrigger version that drove the same look by
 * writing a transform every frame. That approach cannot be made smooth: the
 * page scrolls on the compositor thread, JS runs on the main thread, so the
 * transform always lands a frame late and a layer that is meant to be perfectly
 * still ends up off by one frame of scroll delta — a visible shake, worst when
 * dragging the scrollbar. GSAP's own ScrollTrigger docs say the same thing
 * about its `pinType` option: use "fixed" when transform-based pinning jitters.
 * This component is that advice taken to its conclusion.
 *
 * The clipping trick: `overflow: hidden` does NOT clip a fixed-position child,
 * but `clip-path: inset(0)` does — and, unlike `transform` or `filter`, it does
 * not turn the section into the child's containing block, so the child stays
 * measured against the viewport. Verified in-browser before shipping.
 *
 * Also note this beats plain CSS `background-attachment: fixed`, which is
 * ignored on iOS Safari. `position: fixed` works there.
 */
type ScrollParallaxProps = {
  src: string;
  alt: string;
  children?: ReactNode;
  /** Section-level classes — min-h, padding, flex alignment. */
  className?: string;
  /** Dark scrim over the photo so overlaid content stays legible. 0 = none. */
  overlayOpacity?: number;
  /** Only for a section above the fold. Mid-page sections should stay lazy. */
  priority?: boolean;
};

export default function ScrollParallax({
  src,
  alt,
  children,
  className = '',
  overlayOpacity = 0.5,
  priority = false,
}: ScrollParallaxProps) {
  return (
    <section className={`relative [clip-path:inset(0)] ${className}`}>
      {/* Fixed to the viewport, clipped to this section by the clip-path above.

          Height is `100lvh`, NOT `inset-0`/`100dvh`. On mobile the address bar
          collapses and expands during scroll, which changes the viewport height
          — and a layer sized to the *current* viewport therefore resizes
          mid-scroll and, being object-cover, re-crops on every resize. That is
          a visible judder, and it only shows on mobile because desktop has no
          collapsing toolbar. `lvh` is the LARGE viewport height (toolbar
          hidden): a static value, so the layer is sized once and never resizes.
          It still covers the screen while the bar is showing — the excess just
          falls outside the clip. Do not "fix" this back to dvh.

          DO NOT add `contain: paint` (or `transform`, `filter`, `will-change`)
          to this section. They establish a containing block for fixed-position
          descendants, which makes the image measure against the section instead
          of the viewport — it silently stops being fixed and becomes a static
          background. `clip-path` is deliberately the only thing here, because
          it clips without capturing. Tried and reverted. */}
      <div className="fixed top-0 left-0 w-full h-[100lvh] z-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
        />
        {overlayOpacity > 0 && (
          <div
            className="absolute inset-0 bg-[var(--color-black)]"
            style={{ opacity: overlayOpacity }}
          />
        )}
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
