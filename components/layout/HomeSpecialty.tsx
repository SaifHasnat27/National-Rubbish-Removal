"use client";

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import ScrollParallax from '@/components/ui/ScrollParallax';

const estimatorPoints = [
  'Instant price in under a minute',
  'Pick your service and load size',
  'Transparent pricing, no hidden fees',
  'No obligation, no sign-up needed',
];

export default function HomeSpecialty() {
  return (
    <ScrollParallax
      src="/web images/Home/home-specialty3.webp"
      alt={`${BUSINESS.name} waste collection truck in Sydney`}
      overlayOpacity={0}
      className="specialty-section min-h-[60vh] py-12 md:py-16 flex items-center"
    >
      {/* Instant price estimator card, aligned to the site container over the image */}
      <div className="section-wrapper w-full flex justify-center">
        <div className="card card-dark !p-8 w-full lg:w-1/2">
          <h3 className="text-2xl font-bold mb-6 text-center">Know the Price Before You Book</h3>
          <div className="space-y-4">
            {estimatorPoints.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle aria-hidden="true" size={20} className="text-[var(--text-black)] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/quote-estimator"
            className="block mt-6"
            aria-label="Calculate Your Rubbish Removal Price"
          >
            <Button variant="primary" size="md" className="w-full">
              Get an Instant Price Estimate
            </Button>
          </Link>
        </div>
      </div>
    </ScrollParallax>
  );
}
