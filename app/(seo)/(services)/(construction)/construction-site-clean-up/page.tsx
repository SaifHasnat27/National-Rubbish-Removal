import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('construction-site-clean-up');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'construction-site-clean-up',
        intro: {
          heading: 'Construction Site Clean Up Made Simple',
          subheading:
            'Our construction rubbish removal service collects suitable offcuts, packaging and debris as work progresses or after it ends so the site stays safe and accessible. We load the approved waste and sweep the areas we clear.',
          imageSrc: '/web images/construction rubbish removal near me.webp',
          imageAlt: 'Construction site clean up in Sydney — debris loaded from a building site',
        },
        priceHeading: 'Estimate Construction Site Clean Up Cost',
        process: {
          heading: 'Our Construction Rubbish Removal Process',
          subheading: 'Construction site clean up in four easy steps.',
        },
        cta: {
          heading: 'Book Construction Site Clean Up in Sydney',
          subheading: 'Call or book online to secure your construction rubbish removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day construction site clean up.',
        },
        articleId: 'site-clean-up-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Construction Site Clean Up That Keeps Work Moving</h2>
        <p>
          A clear site is easier to work on. Offcuts, packaging and demolition debris can accumulate quickly as different trades complete their jobs, leaving less room for deliveries, equipment and the next stage of construction.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides construction site clean up for suitable nonhazardous waste across Sydney. We can collect debris during a project or help clear the site towards completion. Our role is to remove approved materials, load them and sweep the areas we clear, not to provide structural demolition or a detailed builders clean.
        </p>

        <h2 className={headingClass}>Construction Rubbish Removal Between Stages</h2>
        <p>
          Waiting until the end of a project is not always practical. Once waste begins occupying work zones or access routes, a collection can give trades more room to continue.
        </p>
        <p>
          Our construction rubbish removal service can be arranged around project stages. That may mean clearing materials after a strip out, removing packaging and offcuts before new work begins, or collecting another load as the project progresses. You can identify the areas that need attention so the collection supports the schedule rather than getting in its way.
        </p>

        <h2 className={headingClass}>Building Site Clean Up at Completion</h2>
        <p>
          The final pile often contains a mixture of materials from throughout the job. A building site clean up can remove suitable timber, plasterboard, bricks, concrete rubble, packaging and other approved debris that remains after the main work is done.
        </p>
        <p>
          Clearing that material creates a better starting point for any final cleaning, inspection or handover tasks. We sweep the areas we have cleared, but detailed cleaning of surfaces, windows and fixtures should be arranged separately if required.
        </p>

        <h2 className={headingClass}>Plan Access Before Collection Day</h2>
        <p>
          A construction site can change from one week to the next. Materials may be stored upstairs, in a backyard, near a loading area or behind active work zones. Letting us know where the waste is located helps us plan a safe and efficient collection.
        </p>
        <p>
          For larger or heavier items, photos and access details are especially useful. Our team can coordinate with the nominated site contact so everyone knows what is approved for removal and which areas need to remain undisturbed. Items attached to the building should be assessed separately, with any removal limited to suitable nonstructural work.
        </p>

        <h2 className={headingClass}>Separate What Stays From What Goes</h2>
        <p>
          Leftover materials are not always waste. Unused supplies may still be needed by another trade, and fittings set aside for reuse can look similar to discarded items. Clearly identifying what stays helps prevent confusion when several people are working on the same site.
        </p>
        <p>
          We sort suitable collected materials for recycling where possible. Excluded materials, including asbestos or fibro cement sheeting, hazardous waste, foam insulation, wet concrete and silica, need appropriate specialist handling and should not be added to the collection pile. Our wider{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can cover other approved bulky items alongside site debris where needed.
        </p>

        <h2 className={headingClass}>Arrange a Site Collection</h2>
        <p>
          Tell us the type and approximate amount of waste, the location on site and the stage of the project. If you need more than one collection, we can discuss timing that fits the work.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          for a clear quote on your construction site clean up.
        </p>
      </article>
    </ServicePage>
  );
}
