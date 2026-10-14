import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';

export const metadata = buildLocationMetadata('sutherland');

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'sutherland',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Sutherland.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Sutherland',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Sutherland.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Sutherland Made Simple</h2>
          <p>
            Our Sutherland rubbish removal service clears unwanted items from homes, units, businesses and building sites. We handle the lifting, loading and disposal, so you do not need to hire a skip or arrange a trip to the tip.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Sutherland Properties</h2>
          <p>
            Sutherland has a mix of family homes, townhouses and units, along with shops and offices near the station. Leafy streets and larger blocks mean garden waste and garage clutter build up quickly, especially after a weekend cleanup.
          </p>
          <p>
            <Link href="/">National Rubbish Removal</Link> collects from inside the property, including garages, sheds, backyards and upstairs rooms, so you do not have to carry anything to the kerb first.
          </p>

          <h2>What We Collect</h2>
          <p>
            We remove furniture, mattresses, white goods, green waste, renovation debris, office clutter and general household rubbish. Mixed loads are common, so a single visit can cover everything from an old fridge to a pile of garden waste.
          </p>
          <h3>Green Waste and Garden Cleanups</h3>
          <p>
            Branches, clippings, leaves and old garden furniture can all go in one collection, without needing a skip bin on the driveway.
          </p>
          <h3>Shops and Businesses</h3>
          <p>
            For retailers and offices, we offer flexible scheduling to keep disruption to a minimum. Our{' '}
            <Link href="/services">rubbish removal services</Link> cover one-off cleanouts as well as larger commercial clearances.
          </p>

          <h2>Responsible Disposal</h2>
          <p>
            We sort suitable items for donation or recycling wherever possible. Anything that cannot be reused is taken to an approved waste facility, and the areas we clear are swept before we leave.
          </p>
          <p>
            <Link href="/contact">Contact our team</Link> with a description or photos of the items, and we will arrange a convenient rubbish removal time in Sutherland.
          </p>
        </>
      }
    />
  );
}
