import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('brick-and-concrete-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'brick-and-concrete-removal',
        intro: {
          heading: 'Brick and Concrete Removal Made Simple',
          subheading:
            'Our concrete rubble removal service collects suitable broken-up material from accessible areas of your property. We handle the lifting and hard rubbish collection, saving you repeated trips to a disposal facility.',
          imageSrc: '/web images/construction rubbish removal near me.webp',
          imageAlt: 'Brick and concrete removal in Sydney — rubble loaded from a renovation site',
        },
        priceHeading: 'Estimate Brick and Concrete Removal Cost',
        process: {
          heading: 'Our Brick and Rubble Removal Process',
          subheading: 'Brick and concrete removal in four easy steps.',
        },
        cta: {
          heading: 'Book Brick and Concrete Removal in Sydney',
          subheading: 'Call or book online to secure your brick and rubble removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day brick and concrete removal.',
        },
        articleId: 'brick-concrete-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Brick and Concrete Removal Without the Heavy Lifting</h2>
        <p>
          A pile of bricks or concrete rubble can remain on a property long after a renovation has finished. These materials are dense, difficult to transport in an ordinary vehicle and rarely suitable for household bins.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides brick and concrete removal for suitable material that has already been broken up or dismantled. Our team collects the approved rubble from accessible areas, loads it and takes it away, saving you the work of repeated trips to a disposal facility.
        </p>

        <h2 className={headingClass}>Concrete Removal After Renovations</h2>
        <p>
          Removing an old path, replacing pavers or updating a property can produce more concrete than expected. Once the breaking-up work is complete, concrete removal helps clear the resulting pieces so the next stage of landscaping or building can begin.
        </p>
        <p>
          Let us know whether the material is loose, stacked or spread across the site. Approximate pile size and photos help us assess the weight and access before collection. We do not treat intact slabs or structural concrete as ordinary loose rubble, so any dismantling work should be discussed separately.
        </p>

        <h2 className={headingClass}>Concrete Rubble Removal From Accessible Areas</h2>
        <p>
          Concrete rubble removal does not require you to carry every piece to the street. Our team can collect from a backyard, driveway, garage or other accessible area, subject to a safe route for moving the material.
        </p>
        <p>
          Access is particularly important with dense waste. Stairs, narrow side passages and distance to the truck can affect how a job is planned. Sharing those details upfront lets us give you a clearer quote and organise the collection properly.
        </p>

        <h2 className={headingClass}>Brick and Rubble Removal for Property Projects</h2>
        <p>
          Loose bricks may come from a renovation, an old garden feature or a nonstructural element that has already been dismantled. Brick and rubble removal can clear these materials along with suitable tiles, pavers and other approved masonry debris.
        </p>
        <p>
          If some bricks are being kept for reuse, separate or clearly mark them before collection. This is particularly helpful when usable supplies and discarded rubble are stored in the same area. Our team will collect the items you have identified for removal.
        </p>

        <h2 className={headingClass}>Where the Rubble Goes</h2>
        <p>
          Suitable brick and concrete may be accepted by recycling facilities for processing into other materials. We prioritise that route where possible, with remaining waste handled at an appropriate facility.
        </p>
        <p>
          Our broader{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can also collect other approved renovation waste or bulky junk removal items. Asbestos or fibro cement sheeting, contaminated material, wet concrete and silica are excluded, so do not mix them into a brick or concrete pile.
        </p>

        <h2 className={headingClass}>Get a Quote Before Moving the Pile</h2>
        <p>
          A description alone can make heavy materials difficult to estimate. Photos showing the whole pile, individual pieces and the access route are useful when requesting a quote.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss your brick and concrete removal job. We can advise on a practical collection based on what is already loose and ready to go.
        </p>
      </article>
    </ServicePage>
  );
}
