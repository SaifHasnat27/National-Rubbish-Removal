import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('retail-strip-out-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'retail-strip-out-removal',
        intro: {
          heading: 'Retail Strip Out Removal Made Simple',
          subheading:
            'We provide shop fit out removal for retailers preparing to relocate, renovate or hand back a tenancy. Our junk removal team clears approved fixtures, furniture and general waste from throughout the premises.',
          imageSrc: '/web images/office rubbish removal near me.webp',
          imageAlt: 'Retail strip out removal in Sydney — shop fittings and displays loaded from a store',
        },
        priceHeading: 'Estimate Retail Strip Out Removal Cost',
        process: {
          heading: 'Our Shop Strip Out Process',
          subheading: 'Retail strip out removal in four easy steps.',
        },
        cta: {
          heading: 'Book Retail Strip Out Removal in Sydney',
          subheading: 'Call or book online to secure your shop strip out today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day retail strip out removal.',
        },
        articleId: 'retail-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Retail Strip Out Removal for Vacant and Changing Stores</h2>
        <p>
          Closing, relocating or refurbishing a retail space can leave behind counters, shelving, displays, cabinets and large amounts of packaging or general waste. These items often need to be removed before a lease deadline, property handover or new fit out can begin.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides retail strip out removal for shops, showrooms and other commercial premises. We dismantle and remove suitable nonstructural fixtures while keeping the site clear and organised.
        </p>

        <h2 className={headingClass}>Retail Strip Out Services</h2>
        <p>
          A retail strip out may include the removal of display units, counters, shelving, cabinets, racks, freestanding partitions, signage and loose furniture. We can also clear stockroom contents, packaging, computers and other approved nonhazardous materials.
        </p>
        <p>
          Any item connected to electrical, plumbing or other essential services must be safely isolated where required. Our removal work is focused on fixtures and fittings that can be dismantled without changing the main structure of the building.
        </p>

        <h2 className={headingClass}>Shop Strip Out Planning and Access</h2>
        <p>
          Retail properties can have strict access requirements, especially inside shopping centres and busy commercial areas. Our team can coordinate with store managers, centre management, landlords or other nominated site contacts to confirm suitable access times and loading arrangements.
        </p>
        <p>
          We are open seven days a week, and work outside normal trading hours may be available by arrangement. This can help reduce disruption to customers, neighbouring stores and other contractors working on the site.
        </p>

        <h2 className={headingClass}>Shop Fit Out Removal</h2>
        <p>
          Shop fit out removal is useful when preparing a tenancy for a new occupant or clearing outdated fixtures before refurbishment. We can remove individual displays or assist with a more comprehensive clearance across the sales floor, fitting rooms, counter areas and stockroom.
        </p>
        <p>
          Separating items being retained before work begins helps the project move efficiently. Once the removal scope is confirmed, our team handles dismantling, lifting, loading and the final sweep of the cleared areas.
        </p>

        <h2 className={headingClass}>Clearing Waste Responsibly</h2>
        <p>
          A strip out can produce a mixture of timber, metal, furniture, fixtures, packaging and general rubbish. Suitable materials are sorted for donation or recycling where possible, rather than treating the entire load as general waste.
        </p>
        <p>
          Our other{' '}
          <Link href="/services" className={linkClass}>
            commercial rubbish removal services
          </Link>{' '}
          can support broader cleanouts that include junk removal, office furniture and hard rubbish removal. This provides one practical collection option when a retail project produces several different types of approved waste.
        </p>

        <h2 className={headingClass}>Get a Retail Strip Out Quote</h2>
        <p>
          Pricing depends on the fixtures involved, dismantling requirements, access and the amount of material being removed. Photos or a walkthrough of the space can help establish a clear scope.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          with the site details and preferred timing. We can then provide a quote suited to the retail strip out removal required.
        </p>
      </article>
    </ServicePage>
  );
}
