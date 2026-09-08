"use client";

import { MapPin, Clock, Phone, CheckCircle, Home, Building, Truck, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import QuickContact from '@/components/contact/QuickContact';
import Button from '@/components/ui/Button';

// ─── Data ────────────────────────────────────────────────────────────────────
const serviceAreas = [
  { area: 'Eastern Suburbs', suburbs: ['Bondi', 'Coogee', 'Double Bay', 'Paddington', 'Randwick', 'Rose Bay'] },
  { area: 'Northern Beaches', suburbs: ['Manly', 'Dee Why', 'Mona Vale', 'Palm Beach', 'Avalon', 'Freshwater'] },
  { area: 'North Shore', suburbs: ['Chatswood', 'Hornsby', 'Lane Cove', 'Mosman', 'North Sydney', 'Ryde'] },
  { area: 'Inner West', suburbs: ['Leichhardt', 'Newtown', 'Glebe', 'Balmain', 'Marrickville', 'Rozelle'] },
  { area: 'Western Sydney', suburbs: ['Parramatta', 'Penrith', 'Blacktown', 'Liverpool', 'Campbelltown', 'Mount Druitt'] },
  { area: 'Southern Sydney', suburbs: ['Cronulla', 'Bankstown', 'Sutherland', 'Hurstville', 'Kogarah', 'Miranda'] },
];

const responseTimeStats: { icon: LucideIcon; title: string; subtitle: string }[] = [
  { icon: Truck, title: 'Same Day Service', subtitle: 'Available in most areas' },
  { icon: Clock, title: 'Average Response', subtitle: '2-4 hours' },
  { icon: Phone, title: '24/7 Booking', subtitle: 'Always available' },
];

const coverageItems: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Home,
    title: 'Residential Areas',
    desc: 'From beachside suburbs to inner-city apartments, we service all residential areas across Sydney metro.',
  },
  {
    icon: Building,
    title: 'Commercial Districts',
    desc: 'CBD, business parks, and commercial areas - we handle all types of commercial rubbish removal.',
  },
  {
    icon: MapPin,
    title: 'Extended Coverage',
    desc: 'We also service select areas beyond metro Sydney. Is your area not listed? Service may be available in your area. Please contact us for confirmation.',
  },
];

const guarantees = [
  'Same-day service in most areas',
  '2-4 hour response time',
  'No hidden travel fees',
  'Fully insured & licensed',
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function LocationPage() {
  return (
    <div className="bg-base-secondary">

      {/* Hero */}
      <SectionWrapper className="bg-base-secondary">
        <div className="text-center">
          <MapPin aria-hidden="true" className="mx-auto mb-4 text-[var(--color-accent)]" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            Locations We Serve | Rubbish Removal Sydney
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-[var(--text-secondary)]">
            Fast, reliable rubbish removal across Sydney&apos;s metro areas. Same-day service available in most locations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {responseTimeStats.map((stat) => (
              <div key={stat.title} className="card !p-6 text-center">
                <stat.icon aria-hidden="true" className="mx-auto mb-3 text-[var(--color-accent)]" size={32} />
                <h3 className="font-bold text-lg text-[var(--text-primary)]">{stat.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Service Areas Grid */}
      <SectionWrapper className="bg-base-secondary" aria-labelledby="service-areas-heading">
        <div className="text-center mb-16">
          <h2 id="service-areas-heading" className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Hard Rubbish Collection Areas in Sydney
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Professional rubbish removal across Sydney&apos;s diverse neighbourhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((region) => (
            <article
              key={region.area}
              className="card !p-6"
              itemScope
              itemType="https://schema.org/Place"
            >
              <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]" itemProp="name">
                {region.area}
              </h3>
              <div className="space-y-2">
                {region.suburbs.map((suburb) => (
                  <div key={suburb} className="flex items-center gap-2">
                    <CheckCircle aria-hidden="true" size={14} className="text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)]" itemProp="containsPlace">
                      {suburb}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Coverage Details */}
      <SectionWrapper className="bg-base-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
              Complete Sydney Hard Waste Collection Coverage
            </h2>
            <div className="space-y-6">
              {coverageItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-3 rounded-[var(--radius-btn)] bg-[var(--color-accent)] shrink-0">
                    <item.icon aria-hidden="true" size={24} className="text-[var(--text-black)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[var(--text-primary)]">{item.title}</h3>
                    <p className="text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-feature !p-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--text-black)]">Service Guarantee</h3>
            <div className="space-y-4">
              {guarantees.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle aria-hidden="true" size={20} className="text-[var(--text-black)] shrink-0" />
                  <span className="text-[var(--text-black)]">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/contact#quote-form"
              className="block mt-6"
              aria-label="Get Your Free Quote"
            >
              <Button variant="secondary" size="md" className="w-full">
                <ClipboardCheck aria-hidden="true" size={20} />
                Get Your Free Quote
              </Button>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick Contact */}
      <SectionWrapper className="bg-base-secondary">
        <QuickContact />
      </SectionWrapper>

    </div>
  );
}
