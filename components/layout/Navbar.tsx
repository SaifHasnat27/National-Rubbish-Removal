"use client";

import { useState, useEffect, type MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Wordmark from './Wordmark';

/* The charcoal surface depth, in ONE place. Worn by both the sticky nav wrapper
   and the full-screen mobile menu panel — they must always match, since on mobile
   they read as a single continuous plane.
   These were two separate hardcoded copies and they DID drift: one got updated and
   the other was left on an older recipe, which showed up as the bar and the panel
   looking different once the burger was open.
   Three stacked falloffs rather than one: a single wide blur over a low-contrast
   range bands into visible steps, while short/mid/long layers put each one's
   banding in a different place so they dissolve. Negative X biases right, negative
   Y biases down, and the negative spread on the wider layers keeps the top clean. */
const NAV_SURFACE_SHADOW =
  'inset -3px -4px 8px rgba(0,0,0,0.16), inset -6px -9px 18px 0px rgba(0,0,0,0.20), inset -9px -15px 15px 0px rgba(0,0,0,0.22)';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/location', label: 'Location' },
  { href: '/contact', label: 'Contact' },
];

// prefetch={false} on all <Link> below — PageSpeed fix, 2026-09-10.
// To revert: delete every `prefetch={false}` here and in Footer.tsx.
// See Notes/recentChanges.txt.

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll while the full-screen mobile menu is open, so the page
  // behind can't move. Always restored on close/unmount.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isCurrentPage = (href: string) => pathname === href;

  // Links are real <a href> (via next/link) so right-click "open in new tab",
  // middle-click, and copy-link all work. We only intercept a PLAIN same-page
  // left-click to smooth-scroll to the top (matches Vite). Modifier/middle
  // clicks are left to the browser, and cross-page nav is handled by <Link>
  // itself (instant top-jump = Vite's ScrollToTop).
  const handleNavClick = (e: MouseEvent<HTMLElement>, href: string) => {
    setIsMobileMenuOpen(false);
    const plainClick =
      !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;
    if (href === pathname && plainClick) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    /* Sticky wrapper = the ONE charcoal surface (bg-nav). Inner bars stay
       transparent so no seam divides them; on-dark text uses --color-black (white).

       `sticky top-[-36px]` (xl only) is what stops the contact bar's collapse
       from relaying out the page. The wrapper is 36px taller than the nav bar
       because of the contact bar; by pinning it 36px ABOVE the viewport top, the
       contact bar scrolls up out of sight and the nav lands flush at y=0 — with
       the wrapper's own height never changing.

       Why that matters here specifically: the home page's ScrollParallax section
       uses `clip-path: inset(0)`, and a clipped layer's clip region is tied to
       its box. Plain scrolling is cheap (the compositor just offsets it), but
       any LAYOUT shift moves the box and forces a full re-raster of a 90vh
       full-width region containing a viewport-sized image. The old collapse
       shifted every element below it for 300ms straight — ~18 re-rasters, worse
       on big monitors where the clipped area is more pixels. Nothing below the
       nav moves now, so the parallax box never moves. */
    /* SURFACE DEPTH — derived from Button.tsx's `secondary` variant, NOT invented.
       That button sits on this exact same charcoal (--bg-nav) and already solves
       depth-on-charcoal with `inset 0 2px 2px rgba(255,255,255,0.12),
       inset 0 -2px 2px rgba(0,0,0,0.35)`. Reusing it puts the bar and the
       "Get Quote" button inside it on ONE elevation scale.

       Only change: the highlight alpha is halved (0.12 -> 0.06). The button is
       ~150px wide, this bar is up to 2560px — the same alpha spread over ~17x the
       width stops reading as a sheen and starts reading as a drawn line.

       Rules this obeys (globals.css:105 — "shadows are FELT, not SEEN, never a
       harsh hard edge"):
         - vertical only, never diagonal. A full-width bar is lit from above; the
           old globals recipe's top-LEFT glow is what read as a grubby corner patch.
         - no outer cast shadow. Buttons stay flat here (--shadow-btn: none), and
           casting onto the parallax photo below would be exactly the hard edge
           the token comment forbids.
         - the bottom inset keeps 3px of blur so the edge settles rather than draws.

       DO NOT move this into .bg-nav in globals.css. That class is also worn by the
       FULL-SCREEN MOBILE MENU (below, ~L227), which relies on blending seamlessly
       into this bar — a shadow there would paint a seam across it. Six bespoke
       one-off recipes were tried before this and all were rejected; the fix was
       reusing the system's existing step, not inventing a seventh. */
    <div
      className="sticky w-full z-50 top-0 xl:top-[-36px] bg-nav"
      style={{
        /* Shade OFF while the mobile menu is open. The bar's bottom edge is only
           a real edge when the page is below it; with the menu open the panel
           continues the same charcoal.

           An earlier version switched this shadow OFF while the menu was open,
           to avoid a seam at the join. That was worse: the bar visibly changed
           the instant you tapped the burger. A surface that restyles itself
           mid-interaction reads as a glitch, which is louder than any seam.
           The bar keeps ONE appearance in every state. */
        boxShadow:
          NAV_SURFACE_SHADOW,
      }}
    >
      {/* Top Contact Bar — scrolls away with the wrapper (see above) AND fades,
         so it is gone before it would collide with the nav. Desktop only. */}
      <div
        className={`
          hidden xl:block
          h-9 overflow-hidden
          [transition:opacity_300ms_ease-in-out]
          motion-reduce:transition-none
          ${isScrolled ? 'opacity-0' : 'opacity-100'}
        `}
        aria-hidden={isScrolled}
      >
        <div className="h-full py-2 mx-auto w-full max-w-[var(--container-max-width)] [padding-inline:var(--container-gutter-mobile)] lg:[padding-inline:calc(var(--container-gutter-desktop)*0.75)] flex justify-between items-center">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors duration-300"
            aria-label="Call us"
          >
            <Phone size={12} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors duration-300"
            aria-label="Email us"
          >
            <Mail size={12} aria-hidden="true" />
            {BUSINESS.email}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      {/* No backdrop-blur here. The wrapper is already an opaque bg-nav surface,
          so a backdrop filter had nothing to reveal — but it still forced the
          browser to re-blur everything behind the nav on every scroll frame,
          which got expensive once a full-viewport fixed image sat behind it.
          Removing it also removes the containing-block trap in GOTCHA #13. */}
      <nav className="w-full py-3 sm:py-4">
        <div className="section-wrapper flex justify-between items-center min-h-[60px]">
          {/* Logo + Wordmark */}
          <Link
            href="/"
            prefetch={false}
            onClick={(e) => handleNavClick(e, '/')}
            className={`
              flex items-center gap-2 flex-1 xl:flex-none cursor-pointer text-left
              origin-left transition-transform duration-300 motion-reduce:transition-none
              ${isScrolled ? 'xl:scale-90' : 'scale-100'}
            `}
            aria-label={`${BUSINESS.name} home`}
          >
            {/* Logo artwork is self-framed (baked-in border + rounding) — no CSS border */}
            <span className="flex-shrink-0">
              <Image
                src="/web images/sydney rubbish removal near me logo2.png"
                alt="Same day rubbish removal near me in Sydney logo, includes hard rubbish collection and waste removal service."
                width={40}
                height={40}
                className="rounded-lg object-cover w-8 h-8 sm:w-10 sm:h-10"
                priority
              />
            </span>
            <Wordmark isScrolled={isScrolled} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative group font-medium text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-[var(--color-accent)]
                    transition-all duration-300 group-hover:w-full
                    ${isCurrentPage(item.href) ? 'w-full' : 'w-0'}
                  `}
                />
              </Link>
            ))}
            <Link href="/contact#quote-form" prefetch={false} onClick={(e) => handleNavClick(e, '/contact#quote-form')} aria-label="Get Quote">
              <Button
                variant="primary"
                size="md"
                className="hover:scale-105"
                tabIndex={-1}
              >
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Contact & Menu */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="p-2.5 rounded-lg bg-[var(--color-black)] text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-white)]"
              style={{
                boxShadow:
                  'inset -1px -1px 2px rgba(0,0,0,0.16), inset -2px -3px 5px -1px rgba(0,0,0,0.20), inset -3px -4px 8px -2px rgba(0,0,0,0.22)',
              }}
              aria-label="Call us now"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[var(--color-black)] text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-white)]"
              style={{
                boxShadow:
                  'inset -1px -1px 2px rgba(0,0,0,0.16), inset -2px -3px 5px -1px rgba(0,0,0,0.20), inset -3px -4px 8px -2px rgba(0,0,0,0.22)',
              }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — the original dropdown, now a full-screen panel that fills
         from just below the (untouched) nav bar to the bottom. Same charcoal
         bg-nav so it blends seamlessly under the bar. Rendered outside the
         backdrop-blur <nav> so `fixed` resolves to the viewport. Page scroll is
         locked while open; the X in the bar (or a link) exits. */}
      {isMobileMenuOpen && (
        /* Same charcoal depth as the bar above, but with the TOP HIGHLIGHT
           DELIBERATELY OMITTED. This panel starts at top-[84px] — flush under the
           bar — so a light edge here would draw a bright seam exactly where the
           two surfaces are supposed to read as one continuous charcoal plane.
           It keeps only the bottom shade, so the panel still settles into the
           screen without announcing where it begins. */
        <div
          className="fixed inset-x-0 bottom-0 top-[84px] sm:top-[92px] z-40 flex flex-col bg-nav section-wrapper xl:hidden"
          style={{
            boxShadow:
              NAV_SURFACE_SHADOW,
          }}
        >
          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  block w-fit text-left py-3 font-medium cursor-pointer
                  transition-colors duration-200
                  ${isCurrentPage(item.href)
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-white)]'}
                `}
                aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                aria-label={item.label}
              >
                {item.label}
                {/* Active underline — same language as the desktop nav
                    (orange, full-width of the label). w-fit on the Link
                    keeps this rule as wide as the TEXT, not the row. */}
                <span
                  className={`
                    block h-0.5 mt-1 bg-[var(--color-accent)]
                    transition-all duration-300
                    ${isCurrentPage(item.href) ? 'w-full' : 'w-0'}
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Mobile CTA — pinned to the bottom with breathing room, clear of the
             home indicator on notch devices */}
          <div className="py-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
            <Link
              href="/contact#quote-form"
              prefetch={false}
              onClick={(e) => handleNavClick(e, '/contact#quote-form')}
              className="block"
              aria-label="Get Free Quote"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full hover:scale-105"
                tabIndex={-1}
              >
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

