import { buildSeoMetadata } from '@/components/seo/lib/SeoMetas';
import ServicePage from '@/components/seo/template/servicepages';
import Link from 'next/link';

export const metadata = buildSeoMetadata('skip-bin-alternatives');

const headingClass =
  'text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]';
const linkClass = 'text-[var(--text-accent)] underline-offset-2 hover:underline';

export default function Page() {
  return (
    <ServicePage
      copy={{
        slug: 'skip-bin-alternatives',
        intro: {
          heading: 'Skip Bin Alternatives Made Simple',
          subheading:
            'If your rubbish is ready to go, a skip bin alternative can spare you the heavy lifting and the need to leave a bin on site. Our team collects approved waste directly from your property, so you do not have to fill a skip or arrange a street permit for one.',
          imageSrc: '/web images/construction rubbish removal near me.webp',
          imageAlt: 'Skip bin alternatives in Sydney — construction waste loaded straight onto a truck',
        },
        priceHeading: 'Estimate Skip Bin Alternatives Cost',
        process: {
          heading: 'Our Alternative to Skip Bin Process',
          subheading: 'Skip bin alternatives in four easy steps.',
        },
        cta: {
          heading: 'Book Skip Bin Alternatives in Sydney',
          subheading: 'Call or book online to secure your alternative to skip bin today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day skip bin alternatives.',
        },
        articleId: 'skip-bin-guide',
      }}
    >
      <article className="w-full space-y-8 text-left text-[var(--text-secondary)] leading-relaxed">
        <h2 className={headingClass}>Skip Bin Alternatives Without the Heavy Lifting</h2>
        <p>
          A skip bin gives you somewhere to put waste, but you still have to load it yourself. If there is no suitable space on your property, placing a skip on the street may also involve council permits. For a completed cleanout, renovation or property clearance, that can mean carrying heavy items outside and spending hours loading a bin before it is collected.
        </p>
        <p>
          <Link href="/" className={linkClass}>
            National Rubbish Removal
          </Link>{' '}
          offers one of the practical skip bin alternatives for jobs where the unwanted items are ready to go. Our team arrives with a truck, loads the approved items and takes them away, without leaving a bin behind or needing a permit.
        </p>

        <h2 className={headingClass}>When a Skip Bin Alternative Makes Sense</h2>
        <p>
          A skip bin alternative can be useful when you need bulky items removed but do not want a bin occupying the driveway or another part of the property. It also removes the need to do the lifting and loading yourself.
        </p>
        <p>
          The choice depends on the job. A skip may suit work that generates waste gradually over several days. A collection is often more convenient when the rubbish has already accumulated, you want it gone in one visit, or items are too awkward for you to load safely.
        </p>

        <h2 className={headingClass}>An Alternative to Skip Bin Hire for Mixed Waste</h2>
        <p>
          A home or business cleanout rarely produces just one kind of item. Furniture, mattresses, packaging, renovation debris and general clutter can all need attention at the same time.
        </p>
        <p>
          As an alternative to skip bin hire, our service lets you identify the approved items for removal and leave the physical work to our team. We collect from accessible rooms, garages, yards and work areas, rather than asking you to carry everything outside first. Our broader{' '}
          <Link href="/services" className={linkClass}>
            rubbish removal services
          </Link>{' '}
          cover many of these common mixed loads.
        </p>

        <h2 className={headingClass}>Skip Bin vs Rubbish Removal</h2>
        <p>
          When weighing up skip bin vs rubbish removal, consider more than the space available for waste. Think about who will load it, how long it needs to stay on site, what access is available and when you need the area cleared.
        </p>
        <p>
          Permit requirements for a skip can also depend on where it is placed. A truck collection avoids leaving a bin on site, though the best option still depends on your property and the work underway. If you are unsure, describe the items and timing when requesting a quote.
        </p>

        <h2 className={headingClass}>What Happens After Collection</h2>
        <p>
          Our team sorts suitable items for donation or recycling where possible. Remaining approved waste is taken to an appropriate facility. The areas we clear are swept before we leave.
        </p>
        <p>
          Like any removal service, there are materials we cannot take, including asbestos, hazardous waste, wet concrete and other excluded items. Mention anything unusual when you enquire so the quote reflects what can actually be collected.
        </p>

        <h2 className={headingClass}>Find the Right Option for Your Job</h2>
        <p>
          Whether you are clearing a single bulky item or several areas of a property, the useful starting point is a clear description of what needs to go. Photos help us assess mixed rubbish, access and the approximate size of the collection.
        </p>
        <p>
          Complete the free quote form or{' '}
          <Link href="/contact" className={linkClass}>
            contact our team
          </Link>{' '}
          for a quote. We&apos;ll help you decide whether a loaded collection is the right fit for your job.
        </p>
      </article>
    </ServicePage>
  );
}
