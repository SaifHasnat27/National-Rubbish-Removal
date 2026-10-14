import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';

export const metadata = buildLocationMetadata('kogarah');

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'kogarah',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Kogarah.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Kogarah',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Kogarah.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Kogarah Made Simple</h2>
          <p>
            Our Kogarah rubbish removal service clears unwanted items from homes, units, offices and building sites. We handle the lifting, loading and disposal, so you do not need to hire a skip or arrange a trip to the tip.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Kogarah Properties</h2>
          <p>
            Kogarah combines apartment buildings near the town centre with established family homes on quieter residential streets. Unit blocks often mean stairs, lifts and shared driveways, while older houses tend to have garages and sheds full of items collected over many years.
          </p>
          <p>
            <Link href="/">National Rubbish Removal</Link> collects from inside the property, including upstairs rooms, garages, sheds and storage cages, so you do not have to carry anything to the kerb first.
          </p>

          <h2>What We Collect</h2>
          <p>
            We remove furniture, mattresses, white goods, green waste, renovation debris, office clutter and general household rubbish. Mixed loads are common, so a single visit can cover everything from an old wardrobe to a pile of garden waste.
          </p>
          <h3>Units and Strata Buildings</h3>
          <p>
            We collect from individual units and common areas, and work around lift bookings and building access times where required.
          </p>
          <h3>Offices and Medical Suites</h3>
          <p>
            For offices, clinics and professional suites, we offer flexible scheduling to keep disruption to a minimum. Our{' '}
            <Link href="/services">rubbish removal services</Link> cover one-off cleanouts as well as larger commercial clearances.
          </p>

          <h2>Responsible Disposal</h2>
          <p>
            We sort suitable items for donation or recycling wherever possible. Anything that cannot be reused is taken to an approved waste facility, and the areas we clear are swept before we leave.
          </p>
          <p>
            <Link href="/contact">Contact our team</Link> with a description or photos of the items, and we will arrange a convenient rubbish removal time in Kogarah.
          </p>
        </>
      }
    />
  );
}
