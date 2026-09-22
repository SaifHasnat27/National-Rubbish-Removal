import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('office-cubicle-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'office-cubicle-removal',
        intro: {
          heading: 'Office Cubicle Removal Made Simple',
          subheading:
            'We provide office partition removal for suitable nonstructural dividers, cubicles and internal fixtures. Our junk removal team handles the heavy work and clears the resulting materials from the property.',
          imageSrc: '/web images/office rubbish removal near me.webp',
          imageAlt: 'Office cubicle removal in Sydney — workstations dismantled and loaded from an office floor',
        },
        priceHeading: 'Estimate Office Cubicle Removal Cost',
        process: {
          heading: 'Our Workstation Removal Process',
          subheading: 'Office cubicle removal in four easy steps.',
        },
        cta: {
          heading: 'Book Office Cubicle Removal in Sydney',
          subheading: 'Call or book online to secure your workstation removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day office cubicle removal.',
        },
        articleId: 'cubicle-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Office Cubicle Removal Without the Heavy Work</h2>
        <p>
          Cubicles and workstations are designed to remain securely in place, which makes removing them more involved than clearing ordinary office furniture. Panels, desktops, frames, drawers and storage components need to be dismantled carefully before they can be moved safely.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides office cubicle removal for businesses, property managers and commercial tenants. Our team can dismantle and remove unwanted cubicles while keeping the site organised throughout the process.
        </p>

        <h2 className={headingClass}>Workstation Removal for Layout Changes</h2>
        <p>
          Workstation removal may be required when a business changes its floor plan, reduces staff numbers, relocates or replaces older office furniture. We can remove individual workstations, complete rows of cubicles or furniture from an entire office floor.
        </p>
        <p>
          The service can include desktops, frames, divider screens, drawers, cabinets and associated loose furniture. Reusable furniture and recyclable materials are separated where possible, while the remaining items are handled through the appropriate rubbish removal process.
        </p>

        <h2 className={headingClass}>Office Partition Removal</h2>
        <p>
          Our office partition removal service covers suitable nonstructural partitions and internal dividers that can be safely dismantled without altering the main building structure. Any electrical, data, plumbing or other connected services must be safely isolated where required before removal proceeds.
        </p>
        <p>
          Access and site requirements are reviewed before work begins. This helps determine how materials will be moved through corridors, lifts and loading areas without creating avoidable disruption for neighbouring businesses.
        </p>

        <h2 className={headingClass}>Office Strip Out Support</h2>
        <p>
          An office strip out can involve more than removing cubicles. We can also clear desks, chairs, shelving, cabinets, counters, storage units, computers, monitors and other approved workplace items.
        </p>
        <p>
          Where a larger project involves several contractors, our team can coordinate with the nominated site contact and complete the removal in practical stages. Our work is limited to suitable nonstructural elements and waste removal, which keeps the scope clear from the beginning.
        </p>

        <h2 className={headingClass}>Planning a Safe and Orderly Removal</h2>
        <p>
          Before the collection, businesses should identify anything being retained and arrange for connected services to be handled appropriately. Clear labels or separate areas for retained items can prevent confusion when similar workstations are located throughout the office.
        </p>
        <p>
          Our broader{' '}
          <Link href="/services" className={linkClass}>
            commercial junk removal services
          </Link>{' '}
          can also handle packaging, general office waste and hard rubbish removal from storage rooms or other parts of the property. Evening and weekend scheduling may be available by arrangement when work during normal business hours would be disruptive.
        </p>

        <h2 className={headingClass}>Request an Office Cubicle Removal Quote</h2>
        <p>
          The cost of office cubicle removal depends on the number and type of workstations, dismantling requirements, access and collection timing. Photos, floor plans or an item list can help us understand the scope before providing a quote.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss your office. We will recommend a practical approach based on the site and the work required.
        </p>
      </article>
    </ServicePage>
  );
}
