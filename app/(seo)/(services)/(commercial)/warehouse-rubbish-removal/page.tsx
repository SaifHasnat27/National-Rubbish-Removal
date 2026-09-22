import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('warehouse-rubbish-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'warehouse-rubbish-removal',
        intro: {
          heading: 'Warehouse Rubbish Removal Made Simple',
          subheading:
            'We provide industrial rubbish removal for warehouses, workshops and storage facilities of every size. Our team completes the lifting, loading and junk removal with minimal disruption to your operations.',
          imageSrc: '/web images/office rubbish removal near me.webp',
          imageAlt: 'Warehouse rubbish removal in Sydney — pallets and packaging loaded from a warehouse floor',
        },
        priceHeading: 'Estimate Warehouse Rubbish Removal Cost',
        process: {
          heading: 'Our Warehouse Waste Removal Process',
          subheading: 'Warehouse rubbish removal in four easy steps.',
        },
        cta: {
          heading: 'Book Warehouse Rubbish Removal in Sydney',
          subheading: 'Call or book online to secure your warehouse waste removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day warehouse rubbish removal.',
        },
        articleId: 'warehouse-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Warehouse Rubbish Removal for Clearer Work Areas</h2>
        <p>
          Warehouses can accumulate damaged stock, pallets, packaging, broken equipment and unused fixtures faster than standard waste services can handle them. When these materials begin occupying aisles, loading areas or storage bays, they can interfere with everyday operations.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides warehouse rubbish removal for distribution facilities, storage units, workshops and other commercial properties. We can complete one off clearances or arrange recurring collections where bulky waste is produced regularly.
        </p>

        <h2 className={headingClass}>Warehouse Waste Removal</h2>
        <p>
          Our warehouse waste removal service can collect packaging, shelving, furniture, pallets, stock, computers, fixtures and other approved nonhazardous materials. Larger items, machinery and industrial equipment may also be collected where they can be safely accessed, handled and transported.
        </p>
        <p>
          Accurate item details are important for heavy or oversized equipment. Photos, dimensions and information about available lifting or loading access help us assess the job and organise suitable resources before arrival.
        </p>

        <h2 className={headingClass}>Industrial Rubbish Removal With Site Coordination</h2>
        <p>
          Industrial rubbish removal often requires more planning than a standard household collection. Warehouses may have active loading docks, forklift traffic, restricted work zones and specific site safety procedures.
        </p>
        <p>
          Our team can coordinate with warehouse managers, property managers and other nominated contacts to confirm access and collection timing. Work can be arranged in stages where clearing the entire area at once would interfere with normal operations.
        </p>

        <h2 className={headingClass}>Complete Warehouse Cleanout Services</h2>
        <p>
          A warehouse cleanout may be required at the end of a lease, after a stock change, before refurbishment or when years of unused material need to be cleared. We can work through storage areas, offices, loading zones and other accessible parts of the property.
        </p>
        <p>
          Items being kept should be clearly identified before collection begins. Our team then handles the lifting, loading and rubbish removal, reducing the amount of labour required from your own staff.
        </p>

        <h2 className={headingClass}>Recycling and Responsible Disposal</h2>
        <p>
          Warehouse clearances often contain materials that can be separated rather than sent away as mixed waste. Suitable metal, timber, furniture, equipment and other materials are directed towards donation or recycling where possible.
        </p>
        <p>
          Our complete{' '}
          <Link href="/services" className={linkClass}>
            commercial rubbish removal services
          </Link>{' '}
          can combine general junk removal with hard rubbish removal for bulky fixtures and equipment. Any excluded or hazardous materials require an appropriate specialist service and should be identified before collection.
        </p>

        <h2 className={headingClass}>Request a Warehouse Removal Quote</h2>
        <p>
          Pricing depends on the materials, total volume, item weight, site access and labour required. We do not force every warehouse into the same pricing model.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          with photos and site details. We can then assess the warehouse rubbish removal requirements and provide a clear quote.
        </p>
      </article>
    </ServicePage>
  );
}
