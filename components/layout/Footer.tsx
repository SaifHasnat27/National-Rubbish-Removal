"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Wordmark from './Wordmark';
import { BUSINESS } from '@/lib/constants';

// Brand icons — removed from newer lucide-react, so inlined with the original
// lucide paths to render identically to the Vite site.
function BrandIcon({ size = 16, children }: { size?: number; children: React.ReactNode }) {
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
const socialChip =
  'p-2 rounded-lg bg-[var(--bg-social-icons)] hover:bg-[var(--color-accent)] transition-colors cursor-pointer';
const contactChip =
  'p-2 rounded-lg bg-[var(--bg-footer-icons)] hover:bg-[var(--color-accent)] transition-colors cursor-pointer';

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
    <footer className="bg-base text-[var(--color-white)]">
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
              className="w-full flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              aria-label={`${BUSINESS.name} home`}
            >
              <span className="rounded-lg flex-shrink-0 border-[3px] border-[var(--color-accent)]">
                <Image
                  src="/web images/sydney rubbish removal near me logo.webp"
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
            <div className="flex space-x-3 justify-center" role="list" aria-label="Social media links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} className={socialChip} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h4 className="text-lg font-semibold text-[var(--color-accent)]">Quick Links</h4>
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
            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="block text-lg font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dim)] transition-colors duration-300 cursor-pointer"
              aria-label="Get In Touch"
            >
              Get In Touch
            </Link>
            <address
              className="space-y-4 text-sm not-italic"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-center gap-3 justify-center">
                <a href={`tel:${BUSINESS.phoneRaw}`} className={contactChip} aria-label="Call us">
                  <Phone size={14} className="text-[var(--color-accent)]" />
                </a>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="font-medium text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors"
                  itemProp="telephone"
                  aria-label={`Call ${BUSINESS.phone}`}
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <a href={`mailto:${BUSINESS.email}`} className={contactChip} aria-label="Email us">
                  <Mail size={14} className="text-[var(--color-accent)]" />
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-[var(--color-white)] hover:text-[var(--color-accent)] transition-colors"
                  itemProp="email"
                  aria-label={`Email ${BUSINESS.email}`}
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="p-2 rounded-lg bg-[var(--bg-footer-icons)]" aria-label="Location">
                  <MapPin size={14} className="text-[var(--color-accent)]" />
                </div>
                <p itemProp="addressLocality">{BUSINESS.serviceArea}</p>
                <meta itemProp="addressCountry" content="AU" />
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="p-2 rounded-lg bg-[var(--bg-footer-icons)]" aria-label="Hours">
                  <Clock size={14} className="text-[var(--color-accent)]" />
                </div>
                <p>Mon - Sun: 6AM - 9PM</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--color-neutral-700)] mt-8 pt-6 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/policy"
              onClick={(e) => handleNavClick(e, '/policy')}
              className="text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={(e) => handleNavClick(e, '/terms')}
              className="text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
            <a
              href="/sitemap.xml"
              className="text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              aria-label="Sitemap"
            >
              Sitemap
            </a>
          </div>
          <p className="text-[var(--text-secondary)] text-sm">
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
