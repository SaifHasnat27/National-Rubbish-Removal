import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('mattress-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'mattress-removal',
        intro: {
          heading: 'Mattress Removal Made Simple',
          subheading:
            'Our mattress removal service provides a quick and convenient way to clear unwanted mattresses from your property. We handle the lifting, loading and rubbish removal, with responsible disposal wherever possible.',
          imageSrc: '/web images/Services/residential1.webp',
          imageAlt: 'Mattress removal in Sydney — mattress and bed base loaded from a home',
        },
        priceHeading: 'Estimate Mattress Removal Cost',
        process: {
          heading: 'Our Mattress Disposal Process',
          subheading: 'Mattress removal in four easy steps.',
        },
        cta: {
          heading: 'Book Mattress Removal in Sydney',
          subheading: 'Call or book online to secure your mattress disposal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day mattress removal.',
        },
        articleId: 'mattress-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Remove an Old Mattress Without the Struggle</h2>
        <p>
          Mattresses are bulky, difficult to carry and rarely fit into an ordinary car. Even getting one down a staircase or through a narrow hallway can be challenging without enough people or suitable equipment. Our mattress removal service collects unwanted mattresses directly from your property and handles the lifting, loading and transport.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          can collect mattresses from bedrooms, upstairs areas, garages and other accessible parts of the property. There is no need to drag the mattress outside, leave it on the kerb or arrange your own trip to a disposal facility.
        </p>

        <h2 className={headingClass}>When to Arrange Mattress Collection</h2>
        <p>
          Mattress removal is useful when replacing an old bed, moving house, clearing a spare room or preparing a rental property for its next occupant. We can collect a single mattress or include it with other unwanted household items.
        </p>
        <p>
          Bed frames, bases and nearby furniture may also be removed where required. Our broader{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can accommodate these mixed collections, saving you from arranging one service for the mattress and another for the remaining items. Larger loads can also include junk removal or hard rubbish removal from other areas of the property.
        </p>

        <h2 className={headingClass}>Responsible Mattress Disposal</h2>
        <p>
          A mattress contains several materials, and its size makes it unsuitable for ordinary household bins. Our mattress disposal process prioritises appropriate recycling options where available. Suitable components can be recovered and processed, while anything that cannot be recycled is taken to an approved waste facility.
        </p>
        <p>
          Arranging professional collection also keeps unwanted mattresses from sitting outside in the weather. Once wet or heavily damaged, a mattress becomes harder to handle and may have fewer recycling options. Keeping it dry and arranging removal promptly is the better approach where practical.
        </p>
        <p>
          <Link href="/contact" className={linkClass}>
            Contact our team
          </Link>{' '}
          with the number and size of the mattresses, their location on the property and any access details. We can then arrange a convenient mattress removal collection.
        </p>
      </article>
    </ServicePage>
  );
}
