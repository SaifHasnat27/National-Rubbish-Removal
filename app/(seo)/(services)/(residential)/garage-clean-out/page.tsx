import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('garage-clean-out');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'garage-clean-out',
        intro: {
          heading: 'Garage Clean Out Made Simple',
          subheading:
            'Whether you need a few items removed or a complete garage clean out, our team is ready to help. Our rubbish removal service includes all labour, collection and responsible disposal.',
          imageSrc: '/web images/residential rubbish removal near me.webp',
          imageAlt: 'Garage clean out in Sydney — cluttered garage cleared and swept',
        },
        priceHeading: 'Estimate Garage Clean Out Cost',
        process: {
          heading: 'Our Garage Clearance Process',
          subheading: 'Garage clean out in four easy steps.',
        },
        cta: {
          heading: 'Book Garage Clean Out in Sydney',
          subheading: 'Call or book online to secure your garage clearance today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day garage clean out.',
        },
        articleId: 'garage-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Turn a Cluttered Garage Back Into Useful Space</h2>
        <p>
          Garages often become the default storage area for anything without a permanent place inside the home. Old furniture, broken equipment, renovation leftovers and unopened boxes can gradually take over until there is no room left for a vehicle, tools or a proper workspace. A professional garage clean out clears that buildup without requiring you to load a skip or transport everything yourself.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          can complete anything from a small garage clearance to the removal of clutter accumulated over many years. Once you have identified what should stay, our team collects the unwanted items, performs the lifting and loading, and sweeps the cleared area.
        </p>

        <h2 className={headingClass}>What Can Be Cleared From a Garage</h2>
        <p>
          Garage clean ups can include furniture, mattresses, boxes, shelving, whitegoods, timber, packaging, household clutter and suitable renovation debris. We can collect a mixture of nonhazardous items in one job, which is often more convenient than separating everything into several different removal services.
        </p>
        <p>
          Before the collection, it helps to check boxes, drawers and cabinets for personal documents, tools or valuables. Create a clear area for anything you want to keep, then identify the rest for removal. You do not need to carry the unwanted items outside or stack them on the kerb.
        </p>

        <h2 className={headingClass}>More Than Simply Taking Rubbish Away</h2>
        <p>
          A garage clean out can create space for parking, storage, a workshop or a future renovation. It can also make a property easier to prepare for sale, settlement or a new tenant. Clearing the garage early gives you room to organise the belongings you are keeping rather than repeatedly moving unwanted items from one side to the other.
        </p>
        <p>
          Suitable items are separated for donation or recycling where possible. The remainder is handled through the appropriate rubbish removal or hard rubbish removal process. Our other{' '}
          <Link href="/services" className={linkClass}>
            junk removal services
          </Link>{' '}
          are available if the job extends into the house, garden, shed or other parts of the property.
        </p>
        <p>
          <Link href="/contact" className={linkClass}>
            Contact our team
          </Link>{' '}
          with an outline of what is in the garage, and we can help arrange the right collection.
        </p>
      </article>
    </ServicePage>
  );
}
