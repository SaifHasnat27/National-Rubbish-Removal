import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('timber-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'timber-removal',
        intro: {
          heading: 'Timber Removal Made Simple',
          subheading:
            'Our timber waste removal service collects approved offcuts, dismantled fittings and leftover renovation materials. We handle the rubbish removal and direct suitable timber towards reuse or recycling where possible.',
          imageSrc: '/web images/construction rubbish removal near me.webp',
          imageAlt: 'Timber removal in Sydney — timber offcuts loaded from a renovation site',
        },
        priceHeading: 'Estimate Timber Removal Cost',
        process: {
          heading: 'Our Wood Waste Removal Process',
          subheading: 'Timber removal in four easy steps.',
        },
        cta: {
          heading: 'Book Timber Removal in Sydney',
          subheading: 'Call or book online to secure your wood waste removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day timber removal.',
        },
        articleId: 'timber-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Timber Removal That Frees Up Working Space</h2>
        <p>
          Timber has a way of spreading across a project. Offcuts collect near the saw, old shelving leans against a wall, and dismantled fittings end up in a garage or yard until someone has time to deal with them.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides timber removal for homes, businesses and renovation sites across Sydney. We collect approved loose timber and suitable nonstructural items, handle the loading and take the unwanted material away.
        </p>

        <h2 className={headingClass}>Timber Waste Removal During Renovations</h2>
        <p>
          Renovations can leave a mixture of cut lengths, old cabinetry, shelving, skirting and packaging timber. Timber waste removal can be arranged during the work or once the project is finished, depending on when the material starts taking up space.
        </p>
        <p>
          You do not need to cut every piece into bin-sized lengths. Tell us about long, heavy or awkward items when requesting a quote so we can assess how they will be carried through the property and loaded safely.
        </p>

        <h2 className={headingClass}>Wood Waste Removal Beyond the Building Site</h2>
        <p>
          Not all wood waste comes from construction. Broken furniture, worn storage units, old garden structures and leftover timber from home projects can sit unused for years.
        </p>
        <p>
          Our wood waste removal service helps clear those items from accessible areas such as sheds, garages and backyards. If the collection also includes unwanted furniture, packaging or other approved clutter, our wider{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          may allow them to be handled in the same job.
        </p>

        <h2 className={headingClass}>Keep Useful Timber Separate</h2>
        <p>
          A board left over from a renovation may still be useful, while the damaged pieces beside it are ready to go. Before collection, set aside anything you plan to reuse and identify what should be removed.
        </p>
        <p>
          That simple step matters on active sites as well as at home. It prevents new materials from being mistaken for waste and makes it easier for our team to work efficiently. Nails, screws and sharp edges should also be mentioned when they are present, particularly in dismantled frames or fittings.
        </p>

        <h2 className={headingClass}>Responsible Handling of Timber Waste</h2>
        <p>
          Suitable timber may be accepted for reuse or recycling, depending on its condition and the facilities available. We sort materials for those options where possible rather than assuming every piece belongs in general waste.
        </p>
        <p>
          Timber contaminated with hazardous material needs a different approach and should be identified before collection. Our team can also handle suitable mixed loads that include hard rubbish removal or general junk removal, provided the materials fall within the service’s accepted waste types.
        </p>

        <h2 className={headingClass}>Arrange a Timber Collection</h2>
        <p>
          The amount of timber, length of the pieces and access to the pile all affect the job. Photos are useful if the material is spread between several rooms or stored behind a property.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss your timber removal needs. We&apos;ll provide a quote based on the material ready for collection.
        </p>
      </article>
    </ServicePage>
  );
}
