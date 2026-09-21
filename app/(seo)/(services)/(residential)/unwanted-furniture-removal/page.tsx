import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('unwanted-furniture-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'unwanted-furniture-removal',
        intro: {
          heading: 'Unwanted Furniture Removal Made Simple',
          subheading:
            'Our unwanted furniture removal service makes it simple to clear bulky items from homes, offices and other properties. We handle all lifting and rubbish removal, so you won’t need to hire a skip or arrange transport.',
          imageSrc: '/web images/Services/residential1.webp',
          imageAlt: 'Furniture removal in Sydney — sofa and bulky furniture carried from a home',
        },
        priceHeading: 'Estimate Unwanted Furniture Removal Cost',
        process: {
          heading: 'Our Old Furniture Removal Process',
          subheading: 'Unwanted furniture removal in four easy steps.',
        },
        cta: {
          heading: 'Book Unwanted Furniture Removal in Sydney',
          subheading: 'Call or book online to secure your old furniture removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day unwanted furniture removal.',
        },
        articleId: 'furniture-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Clear Bulky Furniture Without Moving It Yourself</h2>
        <p>
          Furniture is easy to bring into a property one piece at a time, but much harder to remove when several items need to go. Sofas, wardrobes, dining tables, cabinets and bed frames can be heavy, awkward and difficult to transport safely. Our unwanted furniture removal service handles the lifting and collection, so you do not need to hire a vehicle, organise a skip or ask friends to help.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          collects furniture from homes, apartments, offices and managed properties. We can remove items from upstairs rooms, garages, backyards and other areas of the property, provided there is safe access for our team.
        </p>

        <h2 className={headingClass}>Furniture We Commonly Collect</h2>
        <p>
          Our old furniture removal service can help with lounges, armchairs, tables, chairs, wardrobes, drawers, shelving, desks, bed frames and other unwanted pieces. Collections can include a single bulky item or furniture from several rooms.
        </p>
        <p>
          Furniture rubbish removal is particularly useful when moving, downsizing, replacing an old setting, clearing a rental property or preparing rooms for renovation. Instead of moving everything to the kerb and waiting for a council collection, you can arrange a time for our team to collect it directly from the property.
        </p>

        <h2 className={headingClass}>What Happens to the Furniture</h2>
        <p>
          Not every unwanted item needs to be treated as general waste. Furniture in suitable condition may be separated for donation, while recyclable materials are directed to appropriate facilities where possible. Items that cannot be reused or recycled are disposed of responsibly.
        </p>
        <p>
          Our complete{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can also include mattresses, household clutter and other nonhazardous waste in the same job. That makes the service useful when a furniture clearout becomes a larger junk removal project. Heavy, damaged or dismantled items can be handled as part of a hard rubbish removal collection.
        </p>
        <p>
          You identify what needs to go and our team takes care of the physical work.{' '}
          <Link href="/contact" className={linkClass}>
            Contact us
          </Link>{' '}
          to discuss the furniture, property access and preferred collection time.
        </p>
      </article>
    </ServicePage>
  );
}
