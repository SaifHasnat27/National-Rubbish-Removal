import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('deceased-estate-clearance');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'deceased-estate-clearance',
        intro: {
          heading: 'Deceased Estate Clearance Made Simple',
          subheading:
            'A deceased estate clearance can feel overwhelming, so our team handles each property with patience and sensitivity. We take care of hard rubbish removal, loading and clean-up while following your requirements throughout.',
          imageSrc: '/web images/residential rubbish removal near me.webp',
          imageAlt: 'Deceased estate clearance in Sydney — household contents cleared from a property',
        },
        priceHeading: 'Estimate Deceased Estate Clearance Cost',
        process: {
          heading: 'Our Deceased Estate Clean Up Process',
          subheading: 'Deceased estate clearance in four easy steps.',
        },
        cta: {
          heading: 'Book Deceased Estate Clearance in Sydney',
          subheading: 'Call or book online to secure your deceased estate clean up today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day deceased estate clearance.',
        },
        articleId: 'estate-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Practical Help With a Difficult Property Clearance</h2>
        <p>
          Managing a property after someone has passed away can involve a large number of decisions at an already demanding time. A deceased estate clearance provides practical help with removing unwanted belongings once the family, executor or property representative has decided what should be retained.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          approaches every property with patience, discretion and respect. You remain in control of what stays and what goes. Our team follows your instructions, removes the nominated items and handles the lifting, loading and clean up throughout the property.
        </p>

        <h2 className={headingClass}>Clearance Based on Your Requirements</h2>
        <p>
          Every estate is different. Some properties require the removal of a few large pieces of furniture, while others need a more complete deceased estate clean up before they can be sold, leased or handed back. We can collect furniture, mattresses, whitegoods, household clutter, boxes and other nonhazardous waste from rooms, cupboards, garages, sheds and outdoor areas.
        </p>
        <p>
          Clear instructions help the process run smoothly. Items being kept can be separated or clearly identified before collection, while everything approved for removal can be handled by our team. This reduces the risk of confusion and allows family members or representatives to focus on documents, valuables and personal belongings that require individual attention.
        </p>

        <h2 className={headingClass}>Responsible Handling of Unwanted Items</h2>
        <p>
          Deceased estate removals often include a mixture of reusable items, recyclable materials and general waste. Suitable belongings are sorted for donation or recycling where possible, while remaining waste is taken to an appropriate facility. Our{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can accommodate mixed loads, including bulky furniture and hard rubbish removal, without requiring the estate representative to arrange several different collections.
        </p>
        <p>
          This is not simply another junk removal job. Clear communication matters, particularly when several family members, an executor or a property agent is involved. We work to the agreed instructions and treat the home and its contents carefully during the clearance.
        </p>
        <p>
          To discuss the property, the items involved and any access requirements,{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>
          . We can then recommend a suitable approach to the deceased estate clearance.
        </p>
      </article>
    </ServicePage>
  );
}
