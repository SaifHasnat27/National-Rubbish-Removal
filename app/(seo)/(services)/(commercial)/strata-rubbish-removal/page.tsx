import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('strata-rubbish-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'strata-rubbish-removal',
        intro: {
          heading: 'Strata Rubbish Removal Made Simple',
          subheading:
            'Our strata waste removal service clears unwanted furniture, bulky items and general waste from managed properties. We handle the entire rubbish removal process, including lifting, loading and final clean up.',
          imageSrc: '/web images/office rubbish removal near me.webp',
          imageAlt: 'Strata rubbish removal in Sydney — waste collected from an apartment common area',
        },
        priceHeading: 'Estimate Strata Rubbish Removal Cost',
        process: {
          heading: 'Our Strata Waste Removal Process',
          subheading: 'Strata rubbish removal in four easy steps.',
        },
        cta: {
          heading: 'Book Strata Rubbish Removal in Sydney',
          subheading: 'Call or book online to secure your strata waste removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day strata rubbish removal.',
        },
        articleId: 'strata-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Strata Rubbish Removal for Managed Properties</h2>
        <p>
          Keeping a strata property clear and presentable requires more than relying on ordinary council collections. Abandoned furniture, overflowing storage areas and bulky household items can quickly become problems for residents, visitors and building management.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides strata rubbish removal for apartment buildings, townhouse complexes and other shared residential properties. We assist with individual collections, larger property cleanouts and recurring services based on the needs of the building.
        </p>

        <h2 className={headingClass}>Strata Waste Removal Without Unnecessary Disruption</h2>
        <p>
          Every strata property has its own access arrangements and building requirements. Our team can coordinate with strata managers, building managers, caretakers and other nominated contacts before collection.
        </p>
        <p>
          This may include confirming access times, arranging lift use, working around loading areas and following reasonable instructions for protecting common property. We collect items from apartments, storage cages, garages and shared spaces, so residents or building staff do not need to move everything to the street.
        </p>

        <h2 className={headingClass}>Apartment Rubbish Removal for Residents and Managers</h2>
        <p>
          Our apartment rubbish removal service can collect furniture, mattresses, whitegoods, boxes, computers, general clutter and other nonhazardous items. Collections can be arranged for a single apartment or multiple areas within the same property.
        </p>
        <p>
          Apartment access can make bulky items particularly difficult to remove. Narrow corridors, lifts, stairs and restricted parking all require planning. Providing access details when requesting a quote helps us organise the collection properly and avoid unnecessary delays on arrival.
        </p>

        <h2 className={headingClass}>Common Area Rubbish Removal</h2>
        <p>
          Items left in foyers, hallways, bin rooms, car parks and shared storage areas can obstruct access and affect the appearance of the property. Common area rubbish removal helps strata representatives deal with these items promptly before they attract further dumping.
        </p>
        <p>
          We can assist with abandoned furniture, packaging, discarded household goods and other approved waste. Our team handles the lifting and loading, then sweeps the cleared area so it is ready for residents to use again.
        </p>

        <h2 className={headingClass}>One Off and Recurring Rubbish Removal</h2>
        <p>
          Some properties need help after a move, renovation or large building clean up. Others benefit from scheduled junk removal to prevent bulky waste from accumulating around bin rooms and common areas.
        </p>
        <p>
          Our{' '}
          <Link href="/services" className={linkClass}>
            commercial rubbish removal services
          </Link>{' '}
          can be arranged as a one off collection or on a recurring basis. Suitable items are sorted for donation or recycling where possible, while remaining waste is taken to an appropriate facility. Larger furniture and appliances can also be included as part of a hard rubbish removal collection.
        </p>

        <h2 className={headingClass}>Request a Strata Collection Quote</h2>
        <p>
          Pricing depends on the items involved, access conditions and the requirements of the property. We provide clear quotes without locking every building into the same collection format.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          with photos, item details and access information. We can then recommend a suitable approach for your strata property.
        </p>
      </article>
    </ServicePage>
  );
}
