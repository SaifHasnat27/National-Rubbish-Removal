"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Wordmark from './Wordmark';
import { BUSINESS, to12Hour } from '@/lib/constants';

// Brand icons — removed from newer lucide-react, so inlined with the original
// lucide paths to render identically to the Vite site.
/* Default size 14 matches the lucide contact icons in the Get In Touch column,
   so both footer icon chips carry the same weight. These are hand-rolled because
   lucide-react dropped its brand icons (GOTCHA #8) — being a separate component
   is exactly why they drifted to a different size and colour from their lucide
   siblings, so the defaults live HERE rather than at each call site. */
function BrandIcon({ size = 14, children }: { size?: number; children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const Facebook = () => (
  <BrandIcon>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </BrandIcon>
);

const Instagram = () => (
  <BrandIcon>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </BrandIcon>
);

const Twitter = () => (
  <BrandIcon>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </BrandIcon>
);

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/location', label: 'Location' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'Follow us on Facebook', Icon: Facebook },
  { href: '#', label: 'Follow us on Instagram', Icon: Instagram },
  { href: '#', label: 'Follow us on Twitter', Icon: Twitter },
];

// Icon chips — the dark rounded squares behind footer icons (tokens in globals.css)
/* Chip background stays put on hover; only the ICON changes colour. An earlier
   version filled the chip orange too, but these rows are one hover target now
   (chip + text light together), so a colour-filling chip AND orange text meant
   the whole row changed at once — too much movement for a hover. The steady
   chip anchors the row while its contents react.
   group-hover, not hover: the <a> wrapping chip+text owns the state.
   --text-black is WHITE (misleading name, left alone — renaming means touching
   every call site). */
const socialChip =
  'p-2 rounded-lg bg-[var(--bg-social-icons)]';
const contactChip =
  'p-2 rounded-lg bg-[var(--bg-footer-icons)] text-[var(--text-accent)] group-hover:text-[var(--text-black)] transition-colors cursor-pointer';

/* Location + Hours are not links, so they get the chip's look with no hover. */
const contactChipStatic =
  'p-2 rounded-lg bg-[var(--bg-footer-icons)] text-[var(--text-accent)]';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Links are real <a href> (via next/link) so right-click "open in new tab",
  // middle-click, and copy-link all work. We only intercept a PLAIN same-page
  // left-click to smooth-scroll to the top (matches Vite). Modifier/middle
  // clicks are left to the browser, and cross-page nav is handled by <Link>.
  const handleNavClick = (e: MouseEvent<HTMLElement>, href: string) => {
    const plainClick =
      !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;
    if (href === pathname && plainClick) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    /* Shadow hardcoded, matching Navbar's NAV_SURFACE_SHADOW. Deliberate: the
       token --shadow-dark in globals holds the same recipe for .card-dark, but
       the nav and footer keep their own copies so this one-off surface treatment
       can't be changed out from under them by a card-level edit. Overrides the
       older diagonal recipe .bg-nav still carries.
       If you change this, change Navbar's copy too — they must match. */
    <footer
      className="bg-nav text-[var(--color-white)]"
      style={{
        boxShadow:
          'inset -3px -4px 8px rgba(0,0,0,0.16), inset -6px -9px 18px 0px rgba(0,0,0,0.20), inset -9px -15px 15px 0px rgba(0,0,0,0.22)',
      }}
    >
      <div className="section-wrapper py-12">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          itemScope
          itemType="https://schema.org/Organization"
        >
          {/* Company Info */}
          <div className="space-y-4 text-center">
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="w-full flex items-center justify-center gap-2 cursor-pointer"
              aria-label={`${BUSINESS.name} home`}
            >
              {/* Logo artwork is self-framed (baked-in border + rounding) — no CSS border */}
              <span className="flex-shrink-0">
                <Image
                  src="/web images/sydney rubbish removal near me logo2.png"
                  alt="Same day rubbish removal near me in Sydney logo, includes hard rubbish collection and waste removal service."
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </span>
              <Wordmark showTagline={false} nameClassName="text-lg" />
            </Link>
            <p className="text-sm leading-relaxed text-center text-[var(--color-white)]">
              Sydney&apos;s premier rubbish removal service. We provide fast, reliable, and
              eco-friendly waste disposal solutions for residential, commercial, and construction
              needs.
            </p>
            <div className="flex space-x-3 justify-center">
              {socialLinks.map(({ label, Icon }) => (
                <span key={label} title={label} className={socialChip}>
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold text-[var(--color-accent)]">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block w-full text-center text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center">
            {/* Plain heading, not a link — the contact details below are the
                actionable items; making the header clickable too was redundant. */}
            <p className="text-lg font-semibold text-[var(--color-accent)]">
              Get In Touch
            </p>
            <address
              className="space-y-4 text-sm not-italic"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              {/* ONE <a> wrapping chip + text, so hovering either lights both.
                  Previously two sibling links — the chip and the number had
                  separate hover states and only whichever you were actually over
                  would react. `group` on the link drives the chip's states via
                  group-hover; the hover effects themselves are unchanged. */}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="group flex items-center gap-3 justify-center"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <span className={contactChip}>
                  <Phone size={14} />
                </span>
                <span
                  className="font-medium text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors"
                  itemProp="telephone"
                >
                  {BUSINESS.phone}
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="group flex items-center gap-3 justify-center"
                aria-label={`Email ${BUSINESS.email}`}
              >
                <span className={contactChip}>
                  <Mail size={14} />
                </span>
                <span
                  className="text-[var(--color-white)] group-hover:text-[var(--color-accent)] transition-colors"
                  itemProp="email"
                >
                  {BUSINESS.email}
                </span>
              </a>
              <div className="flex items-center gap-3 justify-center">
                <div className={contactChipStatic}>
                  <MapPin size={14} aria-hidden="true" />
                </div>
                <p itemProp="addressLocality">{BUSINESS.serviceArea}</p>
                <meta itemProp="addressCountry" content="AU" />
              </div>
              {BUSINESS.openingHours.rows.map((schedule) => (
                <div key={schedule.day} className="flex items-center gap-3 justify-center">
                  <div className={contactChipStatic}>
                    <Clock size={14} aria-hidden="true" />
                  </div>
                  <p>
                    {schedule.day}: {to12Hour(schedule.opens)} - {to12Hour(schedule.closes)}
                  </p>
                </div>
              ))}
            </address>
          </div>
        </div>

        {/* Bottom Section — three distinct rows rather than one centred pile.
            Desktop and mobile are SEPARATE blocks (not one grid that collapses):
            the desktop row needs its outer items pushed to the edges, which is a
            different intent from the mobile stack's centring. Trying to express
            both with one set of classes is what made this look thrown together. */}
        <div className="border-t border-[var(--border-dark)] mt-8 pt-6 text-sm">

          {/* Desktop row 1 — Privacy (left) | Terms (centre) | Sitemap (right).
              Three links map onto three columns, so each sits in its own cell and
              the row reads as deliberate spacing instead of wrapped text. */}
          <div className="hidden md:grid md:grid-cols-3 items-center mb-4">
            <Link
              href="/policy"
              onClick={(e) => handleNavClick(e, '/policy')}
              className="justify-self-start text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={(e) => handleNavClick(e, '/terms')}
              className="justify-self-center text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
            <a
              href="/sitemap.xml"
              className="justify-self-end text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Sitemap"
            >
              Sitemap
            </a>
          </div>

          {/* Desktop row 2 — copyright, centred on its own line */}
          <div className="hidden md:block text-center mb-4">
            <p className="text-[var(--color-white)]">
              &copy; {currentYear} {BUSINESS.name}. All rights reserved.
            </p>
          </div>

          {/* Desktop row 3 — developer credit, centred on its own line */}
          <div className="hidden md:block text-center">
            <p className="text-[var(--color-white)]">
              Developed by{' '}
              <a
                href="https://integrateai.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
              >
                Integrate AI
              </a>
            </p>
          </div>

          {/* Mobile — every item centred on its own row */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            <Link
              href="/policy"
              onClick={(e) => handleNavClick(e, '/policy')}
              className="text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={(e) => handleNavClick(e, '/terms')}
              className="text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
            <a
              href="/sitemap.xml"
              className="text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Sitemap"
            >
              Sitemap
            </a>
            {/* text-center, not just the parent's items-center: items-center
                centres the BLOCK, but this string wraps to two lines on narrow
                phones and those lines align left inside it. */}
            <p className="text-center text-[var(--color-white)]">
              &copy; {currentYear} {BUSINESS.name}. All rights reserved.
            </p>
            {/* Developer credit. Blue is hardcoded on purpose — it is Integrate AI's
                brand colour, not NRR's, so it must NOT follow this site's tokens
                (matches how the template site does it). */}
            <p className="text-center text-[var(--color-white)]">
              Developed by{' '}
              <a
                href="https://integrateai.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
              >
                Integrate AI
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
