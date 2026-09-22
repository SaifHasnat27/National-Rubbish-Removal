import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('green-waste-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'green-waste-removal',
        intro: {
          heading: 'Green Waste Removal Made Simple',
          subheading:
            'Our green waste removal team collects garden waste directly from homes and properties across Sydney. As part of our rubbish removal service, we load everything and prioritise responsible recycling.',
          imageSrc: '/web images/residential rubbish removal near me.webp',
          imageAlt: 'Green waste removal in Sydney — garden clippings and branches loaded from a yard',
        },
        priceHeading: 'Estimate Green Waste Removal Cost',
        process: {
          heading: 'Our Green Waste Disposal Process',
          subheading: 'Green waste removal in four easy steps.',
        },
        cta: {
          heading: 'Book Green Waste Removal in Sydney',
          subheading: 'Call or book online to secure your green waste disposal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day green waste removal.',
        },
        articleId: 'green-waste-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>A Better Way to Clear Garden Waste</h2>
        <p>
          Pruning trees, cutting back hedges and restoring an overgrown garden can produce far more waste than expected. Branches, leaves, grass clippings and plant material quickly pile up, especially after seasonal maintenance, landscaping or stormy weather. Our green waste removal service clears that material from your property so you can enjoy the result of the work without dealing with transport or repeated trips to the tip.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides garden waste removal for homes, rental properties and managed sites. We collect green waste from backyards, side access areas, driveways and other parts of the property, then complete the lifting and loading for you.
        </p>

        <h2 className={headingClass}>Green Waste We Commonly Collect</h2>
        <p>
          Collections can include branches, leaves, grass clippings, hedge trimmings, plants, small logs and general garden debris. Loose material should be gathered into a safe, accessible pile where practical, but you will not need to load it into a vehicle or dispose of it yourself.
        </p>
        <p>
          Our green waste disposal process prioritises responsible recycling at suitable facilities. Separating garden material from mixed rubbish gives it a better chance of being processed appropriately rather than treated as general waste. Noxious weeds and contaminated garden material cannot be accepted, so these require a specialist disposal method.
        </p>

        <h2 className={headingClass}>Useful After More Than a Garden Tidy</h2>
        <p>
          Green waste can build up after landscaping, preparing a rental property, clearing an overgrown yard or getting an outdoor area ready for summer. Prompt collection also prevents cut vegetation from taking over usable space or becoming harder to handle as it settles.
        </p>
        <p>
          If your project has produced more than garden material, our other{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can help with outdoor furniture, household clutter and other nonhazardous items. This allows green waste removal and general junk removal to be organised without leaving separate piles around the property. Larger unwanted items may also be handled through our hard rubbish removal service.
        </p>
        <p>
          <Link href="/contact" className={linkClass}>
            Contact our team
          </Link>{' '}
          to discuss the type and approximate amount of garden waste you need collected.
        </p>
      </article>
    </ServicePage>
  );
}
