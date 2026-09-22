import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('office-rubbish-removal');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'office-rubbish-removal',
        intro: {
          heading: 'Office Rubbish Removal Made Simple',
          subheading:
            'Our office waste removal service clears furniture, equipment and general clutter from workplaces of every size. We handle the lifting and junk removal so your team can stay focused on the business.',
          imageSrc: '/web images/office rubbish removal near me.webp',
          imageAlt: 'Office rubbish removal in Sydney — workplace waste loaded from a commercial floor',
        },
        priceHeading: 'Estimate Office Rubbish Removal Cost',
        process: {
          heading: 'Our Commercial Rubbish Removal Process',
          subheading: 'Office rubbish removal in four easy steps.',
        },
        cta: {
          heading: 'Book Office Rubbish Removal in Sydney',
          subheading: 'Call or book online to secure your commercial rubbish removal today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day office rubbish removal.',
        },
        articleId: 'office-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Office Rubbish Removal for Businesses of Every Size</h2>
        <p>
          Office clutter can build up during daily operations, staff changes, renovations and equipment upgrades. Unused desks, damaged chairs, old filing cabinets and boxes take up valuable space that could be used more effectively.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          provides office rubbish removal for individual workplaces, shared offices and larger commercial properties. We can complete a single collection, clear several rooms or arrange recurring rubbish removal where a business produces bulky waste regularly.
        </p>

        <h2 className={headingClass}>Commercial Rubbish Removal With Minimal Disruption</h2>
        <p>
          Waste removal should not bring the working day to a halt. Our team plans access with your nominated contact and can work around reception areas, lifts, loading docks and building requirements.
        </p>
        <p>
          We are open seven days a week, with extended operating hours. Collections outside your usual business hours may be available by arrangement, helping reduce disruption to employees and customers. Call ahead if your property requires a particular access window.
        </p>

        <h2 className={headingClass}>Office Waste Removal for Furniture and Equipment</h2>
        <p>
          Our office waste removal service can collect desks, chairs, filing cabinets, shelving, computers, monitors, printers, packaging and general workplace clutter. We can also remove nonhazardous renovation debris and unwanted fixtures that have been safely disconnected.
        </p>
        <p>
          You decide what needs to stay and identify what can be removed. Our team collects the approved items from across the workplace, including offices, meeting rooms, storage areas and upstairs locations.
        </p>

        <h2 className={headingClass}>Clearing Space During Business Changes</h2>
        <p>
          Office rubbish removal is particularly useful during relocations, refurbishments, downsizing and changes to workplace layouts. Removing unwanted furniture before new equipment arrives creates a safer, more organised environment for the next stage of the project.
        </p>
        <p>
          If the office must remain operational, the work can be divided into practical stages. This allows particular rooms or departments to be cleared without unnecessarily affecting the rest of the workplace.
        </p>

        <h2 className={headingClass}>Responsible Junk Removal for Workplaces</h2>
        <p>
          Suitable furniture and equipment are sorted for donation or recycling where possible. Remaining waste is taken to an appropriate facility, giving businesses a more responsible alternative to leaving unwanted items in storerooms or beside general waste bins.
        </p>
        <p>
          Our wider{' '}
          <Link href="/services" className={linkClass}>
            commercial rubbish removal services
          </Link>{' '}
          include workstation removal, office strip outs and hard rubbish removal. This makes it possible to combine general office junk removal with larger furniture and fixture collections when required.
        </p>

        <h2 className={headingClass}>Get a Clear Office Removal Quote</h2>
        <p>
          Every office has different items, access conditions and time requirements, so the simplest way to get accurate pricing is to tell us about the job. Photos are helpful when several rooms or bulky items are involved.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          to discuss the property, collection size and preferred timing. We will provide a clear quote based on the work required.
        </p>
      </article>
    </ServicePage>
  );
}
