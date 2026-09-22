import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('end-of-lease-rubbish-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'end-of-lease-rubbish-removal',
        intro: {
          heading: 'End of Lease Rubbish Removal Made Simple',
          subheading:
            'We provide commercial cleanout services for businesses vacating offices, retail premises and warehouses. Our team handles the junk removal and leaves the cleared areas swept and ready for the next stage.',
          imageSrc: '/web images/office rubbish removal near me.webp',
          imageAlt: 'End of lease rubbish removal in Sydney — commercial tenancy cleared before handover',
        },
        priceHeading: 'Estimate End of Lease Rubbish Removal Cost',
        process: {
          heading: 'Our Lease Clean Out Process',
          subheading: 'End of lease rubbish removal in four easy steps.',
        },
        cta: {
          heading: 'Book End of Lease Rubbish Removal in Sydney',
          subheading: 'Call or book online to secure your lease clean out today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day end of lease rubbish removal.',
        },
        articleId: 'end-of-lease-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>End of Lease Rubbish Removal for Commercial Properties</h2>
        <p>
          Vacating a commercial property involves more than moving the items a business wants to keep. Furniture, packaging, obsolete equipment and unwanted fixtures may still need to be cleared before keys can be returned or the property can be prepared for its next occupant.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides end of lease rubbish removal for offices, retail premises, warehouses and other commercial sites. We handle the lifting and collection so your staff can focus on the move and final handover requirements.
        </p>

        <h2 className={headingClass}>End of Lease Clean Out Planning</h2>
        <p>
          An end of lease clean out is easier when the removal scope is established early. Start by separating business records, stock and equipment being transferred to the new location. Everything approved for disposal can then be clearly identified for our team.
        </p>
        <p>
          We can collect desks, chairs, shelving, cabinets, computers, displays, packaging and other approved nonhazardous items. Suitable nonstructural fixtures can also be dismantled and removed where they do not affect the main building structure or connected services.
        </p>

        <h2 className={headingClass}>Commercial Cleanout Services</h2>
        <p>
          Every commercial cleanout is different. A small office may only have a few bulky items, while a warehouse or retail property may require several work areas to be cleared.
        </p>
        <p>
          Our team can coordinate with tenants, property managers, building managers and other nominated contacts. This includes planning access through lifts, loading docks and shared areas, as well as arranging suitable collection times. Evening or weekend work may be available by arrangement when access during normal business hours is difficult.
        </p>

        <h2 className={headingClass}>End of Lease Clean Up Before Handover</h2>
        <p>
          Removing unwanted items early leaves enough time to deal with cleaning, repairs and final property inspections. Waiting until the final day can create unnecessary pressure, particularly when furniture or fixtures require dismantling.
        </p>
        <p>
          Our end of lease clean up service includes sweeping the areas we clear. This does not replace specialist commercial cleaning or repair work, but it leaves the removal areas orderly and ready for the next stage of the handover.
        </p>

        <h2 className={headingClass}>One Service for Mixed Commercial Waste</h2>
        <p>
          End of lease collections often include a combination of furniture, equipment, packaging and general rubbish. Suitable items are sorted for donation or recycling where possible, with remaining waste taken to an appropriate facility.
        </p>
        <p>
          Our wider{' '}
          <Link href="/services" className={linkClass}>
            commercial rubbish removal services
          </Link>{' '}
          include junk removal, furniture collection and hard rubbish removal. This allows several types of approved waste to be collected through one organised service rather than arranging multiple providers.
        </p>

        <h2 className={headingClass}>Get an End of Lease Removal Quote</h2>
        <p>
          The quote will reflect the items being removed, access conditions, dismantling requirements and preferred timing. Photos and an item list are useful, especially when the property contains several rooms or large fixtures.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          as early as possible. We can discuss the deadline and arrange an end of lease rubbish removal service suited to the property.
        </p>
      </article>
    </ServicePage>
  );
}
