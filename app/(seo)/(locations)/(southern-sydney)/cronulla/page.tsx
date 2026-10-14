import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';

export const metadata = buildLocationMetadata('cronulla');

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'cronulla',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Cronulla.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Cronulla',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Cronulla.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Cronulla Made Simple</h2>
          <p>
            Our Cronulla rubbish removal service clears unwanted items from homes, apartments, shops and building sites. We handle the lifting, loading and disposal, so you do not need to hire a skip or arrange a trip to the tip.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Cronulla Properties</h2>
          <p>
            Cronulla is a beachside suburb with plenty of apartment buildings, holiday rentals and busy cafes and shops near the beaches. Tight parking and narrow streets can make getting rid of bulky items harder than it should be.
          </p>
          <p>
            <Link href="/">National Rubbish Removal</Link> works around these conditions. Our team collects from inside the property, including apartments, balconies, garages and storage cages, so you do not have to carry anything to the kerb first.
          </p>

          <h2>What We Collect</h2>
          <p>
            We remove furniture, mattresses, white goods, green waste, renovation debris, office clutter and general household rubbish. Mixed loads are common, so a single visit can cover everything from an old sofa to a pile of garden waste.
          </p>
          <h3>Apartments and Rentals</h3>
          <p>
            Moving out, changing tenants or refreshing a rental? We can clear unwanted furniture and rubbish from units and holiday properties, and work around lift bookings and building access times where required.
          </p>
          <h3>Cafes, Shops and Businesses</h3>
          <p>
            For hospitality venues, retailers and offices, we offer flexible scheduling to keep disruption to a minimum. Our{' '}
            <Link href="/services">rubbish removal services</Link> cover one-off cleanouts as well as larger commercial clearances.
          </p>

          <h2>Responsible Disposal</h2>
          <p>
            We sort suitable items for donation or recycling wherever possible. Anything that cannot be reused is taken to an approved waste facility, and the areas we clear are swept before we leave.
          </p>
          <p>
            <Link href="/contact">Contact our team</Link> with a description or photos of the items, and we will arrange a convenient rubbish removal time in Cronulla.
          </p>
        </>
      }
    />
  );
}
