import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('household-rubbish-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'household-rubbish-removal',
        intro: {
          heading: 'Household Rubbish Removal Made Simple',
          subheading:
            'Our household rubbish removal service makes it easy to clear unwanted items without hiring a skip or lifting anything yourself. We handle the entire rubbish removal process and leave the cleared area swept clean.',
          imageSrc: '/web images/residential rubbish removal near me.webp',
          imageAlt: 'Household rubbish removal in Sydney, bags and clutter loaded from inside a home',
        },
        priceHeading: 'Estimate Household Rubbish Removal Cost',
        process: {
          heading: 'Our Domestic Rubbish Removal Process',
          subheading: 'Household rubbish removal in four easy steps.',
        },
        cta: {
          heading: 'Book Household Rubbish Removal in Sydney',
          subheading: 'Call or book online to secure your house rubbish removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day household rubbish removal.',
        },
        articleId: 'household-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Clear More Than Clutter From Your Home</h2>
        <p>
          Unwanted household items have a habit of accumulating quietly. A spare room fills with boxes, broken appliances sit in the laundry, and cupboards hold things nobody uses anymore. Our household rubbish removal service gives you a practical way to clear that clutter without hiring a skip, borrowing a vehicle or spending your weekend making trips to the tip.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          collects unwanted items from anywhere on your property, including bedrooms, garages, sheds, backyards and upstairs areas. Our team handles the lifting and loading, making house rubbish removal straightforward even when the items are bulky, heavy or difficult to carry.
        </p>

        <h2 className={headingClass}>What We Can Remove From Your Home</h2>
        <p>
          Our domestic rubbish removal service can help with general clutter, furniture, mattresses, whitegoods, boxes, packaging, renovation debris and other nonhazardous household waste. Whether you are clearing one room or working through the entire property, you can show us what needs to go and leave the physical work to our team.
        </p>
        <p>
          This type of junk removal is useful when moving house, preparing a property for sale, clearing space for renovations or simply dealing with years of accumulated belongings. We can remove a mixture of items in one collection, so you do not need to organise separate services for furniture, appliances and general household rubbish.
        </p>

        <h2 className={headingClass}>A Practical Alternative to Skip Bins</h2>
        <p>
          A skip bin still needs to be filled, may require space or permits, and can remain outside your property for days. With our rubbish removal service, the labour is included. We arrive, collect the nominated items and sweep the cleared area before leaving.
        </p>
        <p>
          Suitable items are sorted for donation or recycling where possible, with the remaining waste taken to an appropriate facility. Our broader range of{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can also help when your cleanout includes mattresses, unwanted furniture, garden waste or a cluttered garage.
        </p>
        <p>
          If you need household items removed without doing the heavy lifting yourself,{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss the job and arrange a collection.
        </p>
      </article>
    </ServicePage>
  );
}
