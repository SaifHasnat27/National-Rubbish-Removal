import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('building-materials-disposal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'building-materials-disposal',
        intro: {
          heading: 'Building Materials Disposal Made Simple',
          subheading:
            'From renovation offcuts to dismantled fittings, our building materials removal team clears approved waste without you having to load a skip. We handle the rubbish removal so you can focus on the next stage of work.',
          imageSrc: '/web images/construction rubbish removal near me.webp',
          imageAlt: 'Building materials disposal in Sydney — leftover materials loaded from a construction site',
        },
        priceHeading: 'Estimate Building Materials Disposal Cost',
        process: {
          heading: 'Our Building Waste Disposal Process',
          subheading: 'Building materials disposal in four easy steps.',
        },
        cta: {
          heading: 'Book Building Materials Disposal in Sydney',
          subheading: 'Call or book online to secure your building waste disposal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day building materials disposal.',
        },
        articleId: 'building-materials-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Building Materials Disposal Without the Pile-Up</h2>
        <p>
          A renovation can leave useful space buried under offcuts, old fittings, packaging and materials that are no longer needed. Those piles get in the way of the next stage of work and are often too varied or bulky for ordinary bins.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides building materials disposal for renovation projects, property improvements and commercial works across Sydney. Tell us what needs to go, and our team will collect the approved materials from accessible areas of the property, handle the loading and take them away.
        </p>

        <h2 className={headingClass}>Building Waste Removal for Mixed Loads</h2>
        <p>
          Building waste rarely arrives in neat categories. A bathroom renovation might produce tiles, timber, plasterboard and packaging, while an office refurbishment can leave shelving, partitions and old fittings alongside general debris.
        </p>
        <p>
          Our building waste removal service can handle suitable nonhazardous materials in one collection. That means you can clear the work area without organising a separate trip for every type of waste. If items are attached to the property, we can discuss the safe removal of suitable nonstructural elements as part of the job.
        </p>

        <h2 className={headingClass}>Building Materials Removal During a Project</h2>
        <p>
          You do not have to wait until the renovation is finished to clear unwanted materials. Collecting waste between stages can make it easier for trades to access the site and keep new supplies separate from discarded ones.
        </p>
        <p>
          Building materials removal is also useful when a project changes direction. Leftover supplies, dismantled fittings and old materials can occupy valuable space long after they have stopped being useful. A planned collection gives the next stage of work a clearer starting point.
        </p>

        <h2 className={headingClass}>How We Approach Building Waste Disposal</h2>
        <p>
          Some materials can be separated for recycling rather than going into mixed waste. Where suitable facilities accept them, we prioritise recycling and direct the remaining materials to an appropriate disposal facility.
        </p>
        <p>
          The type and condition of the material matter. Asbestos and fibro cement sheeting, hazardous or contaminated waste, polystyrene or foam insulation, wet concrete and silica are excluded from our service. If you are unsure what a material is, let us know before booking rather than assuming it can go in the load.
        </p>

        <h2 className={headingClass}>Collection Without a Skip on Site</h2>
        <p>
          A skip can be useful when waste needs to be added over several days. If the materials are already ready to go, a collection may be simpler: our team arrives, loads the approved waste and takes it away. You do not need to spend time filling a bin yourself.
        </p>
        <p>
          Our broader{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can also help when a renovation has left behind old furniture, appliances or other hard rubbish removal items. Keeping those collections together can make the final clear-out easier to organise.
        </p>

        <h2 className={headingClass}>Get a Quote for Your Materials</h2>
        <p>
          The most helpful details are what the materials are, roughly how much there is and where they are located on the property. Photos can make it easier to assess a mixed pile or materials stored across several areas.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss your building materials disposal needs. We&apos;ll help you plan a collection that suits the work taking place.
        </p>
      </article>
    </ServicePage>
  );
}
