"use client";

import { useState, useEffect, type MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Wordmark from './Wordmark';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/location', label: 'Location' },
  { href: '/contact', label: 'Contact' },
];

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
    <div className="fixed w-full z-50 top-0">
      {/* Top Contact Bar */}
      <div
        className={`
          hidden xl:block bg-base
          transition-all duration-300
          ${isScrolled ? 'py-1' : 'py-2'}
        `}
      >
        <div className="mx-auto max-w-[var(--container-max-width)] [padding-inline:var(--container-gutter-mobile)] lg:[padding-inline:calc(var(--container-gutter-desktop)*0.75)] flex justify-between items-center">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-white)] hover:opacity-80 transition-opacity duration-300"
            aria-label="Call us"
          >
            <Phone size={12} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-white)] hover:opacity-80 transition-opacity duration-300"
            aria-label="Email us"
          >
            <Mail size={12} aria-hidden="true" />
            {BUSINESS.email}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-base backdrop-blur-sm py-3 sm:py-4 transition-all duration-300">
        <div className="section-wrapper flex justify-between items-center min-h-[60px]">
          {/* Logo + Wordmark */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className={`
              flex items-center gap-2 flex-1 xl:flex-none cursor-pointer text-left
              transition-all duration-300
              ${isScrolled ? 'xl:scale-90' : 'scale-100'}
            `}
            aria-label={`${BUSINESS.name} home`}
          >
            <span className="rounded-lg flex-shrink-0 border-[3px] border-[var(--color-accent)]">
              <Image
                src="/web images/sydney rubbish removal near me logo.webp"
                alt="Same day rubbish removal near me in Sydney logo, includes hard rubbish collection and waste removal service."
                width={40}
                height={40}
                className={`
                  rounded-lg object-cover transition-all duration-300
                  ${isScrolled ? 'w-8 h-8 xl:w-6 xl:h-6' : 'w-8 h-8 sm:w-10 sm:h-10'}
                `}
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
            <Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')} aria-label="Get Quote">
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
              className="p-2.5 rounded-lg shadow-md bg-[var(--color-black)] text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-neutral-800)]"
              aria-label="Call us now"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg shadow-md bg-[var(--color-white)] text-[var(--color-black)] transition-colors duration-300 hover:bg-[var(--color-neutral-200)]"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden backdrop-blur-sm border-t border-[var(--border-dark)] shadow-xl bg-base section-wrapper">
            {/* Navigation Items */}
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    block w-full text-left px-4 py-3 rounded-xl font-medium cursor-pointer
                    text-[var(--color-white)] transition-all duration-200
                    ${isCurrentPage(item.href) ? 'bg-[var(--color-accent-glow)]' : 'bg-transparent'}
                  `}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="py-4 border-t border-[var(--border-dark)]">
              <Link
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
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
      </nav>
    </div>
  );
}
