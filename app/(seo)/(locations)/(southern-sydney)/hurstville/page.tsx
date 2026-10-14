import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';

export const metadata = buildLocationMetadata('hurstville');

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'hurstville',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Hurstville.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Hurstville',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Hurstville.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Hurstville Made Simple</h2>
          <p>
            Our Hurstville rubbish removal service clears unwanted items from homes, apartments, shops and building sites. We handle the lifting, loading and disposal, so you do not need to hire a skip or arrange a trip to the tip.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Hurstville Properties</h2>
          <p>
            Hurstville is a major centre in the St George area, with high rise apartments, busy shopping strips and established homes in the surrounding streets. Each property type brings its own access needs, from loading docks and lifts to long driveways.
          </p>
          <p>
            <Link href="/">National Rubbish Removal</Link> collects from inside the property, including apartments, garages, shopfronts and storage areas, so you do not have to carry anything to the kerb first.
          </p>

          <h2>What We Collect</h2>
          <p>
            We remove furniture, mattresses, white goods, green waste, renovation debris, office clutter and general household rubbish. Mixed loads are common, so a single visit can cover everything from an old bed frame to a pile of garden waste.
          </p>
          <h3>Apartments and Strata Buildings</h3>
          <p>
            We collect from individual units and common areas, and work around lift bookings and building access times where required.
          </p>
          <h3>Shops, Restaurants and Offices</h3>
          <p>
            For retailers, restaurants and offices, we offer flexible scheduling to keep disruption to a minimum. Our{' '}
            <Link href="/services">rubbish removal services</Link> cover one-off cleanouts as well as larger commercial clearances.
          </p>

          <h2>Responsible Disposal</h2>
          <p>
            We sort suitable items for donation or recycling wherever possible. Anything that cannot be reused is taken to an approved waste facility, and the areas we clear are swept before we leave.
          </p>
          <p>
            <Link href="/contact">Contact our team</Link> with a description or photos of the items, and we will arrange a convenient rubbish removal time in Hurstville.
          </p>
        </>
      }
    />
  );
}
