"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ClipboardCheck, Clock, Shield, Recycle, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

const trustStats: { icon: LucideIcon; text: string; subtext: string }[] = [
  { icon: Clock, text: 'Same Day Service', subtext: 'Available 24/7' },
  { icon: Shield, text: 'Fully Insured', subtext: 'Licensed & Bonded' },
  { icon: Recycle, text: 'Eco-Friendly', subtext: '95% Recycled' },
];

export default function HeroBanner() {
  return (
    <header className="relative overflow-hidden bg-base text-[var(--text-primary)]" role="banner">
      {/* Full-bleed background banner — desktop + mobile variants (matches Vite) */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/web images/rubbish removal Sydney desktop banner.webp"
          alt="Professional rubbish removal truck and team providing same-day waste disposal services across Sydney Metro Area"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/web images/rubbish removal Sydney mobile banner.webp"
          alt="Same day rubbish removal, hard garbage and junk removal service in Sydney"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="section-wrapper relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="font-[family-name:var(--font-body)] text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]"
                itemProp="headline"
              >
                Hard Rubbish Collection &amp; Rubbish Removal Sydney
              </h1>
              <p className="text-xl leading-relaxed text-[var(--text-primary)]">
                Fast, reliable, and eco-friendly waste disposal. Same-day service available across all Sydney metro areas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} aria-label={`Call Now: ${BUSINESS.phone}`}>
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  <Phone aria-hidden="true" size={20} />
                  Call Now: {BUSINESS.phone}
                </Button>
              </a>
              <Link href="/contact" aria-label="Get Free Quote">
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Get Free Quote
                  <ClipboardCheck aria-hidden="true" size={20} />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {trustStats.map((item) => (
                <div key={item.text} className="text-center space-y-2">
                  <div className="p-3 rounded-[var(--radius-btn)] w-fit mx-auto bg-base border-[length:var(--border-width)] border-[color:var(--border)]">
                    <item.icon aria-hidden="true" size={24} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{item.text}</p>
                    <p className="text-xs text-[var(--text-primary)]">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + floating badge */}
          <div className="relative">
            <div className="group/hero rounded-[var(--radius-card)] overflow-hidden border-[length:var(--border-width)] border-[color:var(--border)]">
              <Image
                src="/web images/rubbish removal Sydney banner.webp"
                alt="National Rubbish Removal professional team with truck providing reliable same-day rubbish removal services across Sydney Metro Area"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="w-full h-auto object-cover transition-transform duration-500 group-hover/hero:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-[-1.5rem] lg:translate-x-0 p-4 rounded-[var(--radius-card)] whitespace-nowrap bg-base border-[length:var(--border-width)] border-[color:var(--border)]">
              <div className="flex items-center gap-2">
                <Star aria-hidden="true" size={20} className="text-[var(--color-accent)]" />
                <div>
                  <p className="text-base md:text-lg text-[var(--text-primary)]">Affordable Pricing</p>
                  <p className="text-xs text-[var(--text-primary)]">Zero Hidden Fees</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
