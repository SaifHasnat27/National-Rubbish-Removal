import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('scrap-metal-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'scrap-metal-removal',
        intro: {
          heading: 'Scrap Metal Removal Made Simple',
          subheading:
            'From workshop leftovers to renovation scrap, our scrap metal removal team clears approved items that are difficult to transport yourself. This junk removal service can also accommodate other suitable materials in the same collection.',
          imageSrc: '/web images/construction rubbish removal near me.webp',
          imageAlt: 'Scrap metal removal in Sydney — steel offcuts loaded from a building site',
        },
        priceHeading: 'Estimate Scrap Metal Removal Cost',
        process: {
          heading: 'Our Metal Waste Removal Process',
          subheading: 'Scrap metal removal in four easy steps.',
        },
        cta: {
          heading: 'Book Scrap Metal Removal in Sydney',
          subheading: 'Call or book online to secure your steel scrap removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day scrap metal removal.',
        },
        articleId: 'metal-scrap-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Scrap Metal Removal for Clearer Sites</h2>
        <p>
          Metal left behind after renovations, fit outs or equipment replacements can take up surprising amounts of space. Even when pieces are compact, their weight and sharp edges can make them awkward to handle without a plan for collection.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides scrap metal removal from homes, workplaces and project sites across Sydney. Our team collects approved items, handles the lifting and loading, and removes the scrap so the area can be used again.
        </p>

        <h2 className={headingClass}>Steel Scrap Removal After Project Work</h2>
        <p>
          Steel offcuts, frames, shelving and dismantled fittings often remain after a project has moved on. Steel scrap removal gives builders, property managers and business owners a way to clear those materials without storing them indefinitely or arranging their own transport.
        </p>
        <p>
          The size and form of the scrap matter. Long lengths, heavy sections and awkward assemblies are worth flagging when you request a quote. Photos and approximate dimensions help us assess access and plan how the materials can be moved safely.
        </p>

        <h2 className={headingClass}>Metal Waste Removal From More Than One Area</h2>
        <p>
          Metal waste is not always stacked in a single pile. It might be spread between a garage, backyard, workshop, storage room or loading area. We can collect from accessible areas of the property, so you do not need to move every item to the kerb first.
        </p>
        <p>
          Our metal waste removal service can cover suitable loose items and nonstructural fixtures that can be safely removed. Anything connected to electrical, plumbing or other services must be appropriately isolated before collection. Structural elements are outside the scope of a standard scrap collection.
        </p>

        <h2 className={headingClass}>Construction Scrap Removal During Refurbishment</h2>
        <p>
          A refurbishment can generate metal alongside timber, plasterboard, packaging and old fittings. Construction scrap removal can be arranged while the work is underway, making it easier to prevent debris from spreading into areas needed for deliveries or the next trade.
        </p>
        <p>
          If the job includes several types of approved waste, there is no need to organise the metal in isolation. Our{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          can accommodate mixed nonhazardous collections, including suitable hard rubbish removal items, once we understand what is on site.
        </p>

        <h2 className={headingClass}>Giving Suitable Metal Another Use</h2>
        <p>
          Metal is worth keeping separate where practical because suitable scrap can be directed to recycling facilities. We prioritise recycling for accepted materials rather than treating reusable resources as general rubbish.
        </p>
        <p>
          There are still limits to what can be collected. Metal that is contaminated or attached to excluded hazardous materials requires specialist advice. If you are unsure about a particular item, describe it when requesting your quote so we can confirm whether it belongs in the load.
        </p>

        <h2 className={headingClass}>Request a Scrap Metal Collection Quote</h2>
        <p>
          For the quickest assessment, tell us what kind of metal you have, how much there is and where it sits on the property. Include photos of heavy, long or unusually shaped pieces.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss scrap metal removal. We&apos;ll provide a clear quote based on the materials and collection requirements.
        </p>
      </article>
    </ServicePage>
  );
}
