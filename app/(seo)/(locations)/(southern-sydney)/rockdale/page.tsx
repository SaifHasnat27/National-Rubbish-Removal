import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';

export const metadata = buildLocationMetadata('rockdale');

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'rockdale',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Rockdale.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Rockdale',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Rockdale.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Rockdale Made Simple</h2>
          <p>
            Our Rockdale rubbish removal service clears unwanted items from homes, units, shops and building sites. We handle the lifting, loading and disposal, so you do not need to hire a skip or arrange a trip to the tip.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Rockdale Properties</h2>
          <p>
            Rockdale has a growing number of apartment buildings around the station, alongside older houses and small businesses along the main roads. Renovations, move outs and building work all create rubbish that is too bulky for council bins.
          </p>
          <p>
            <Link href="/">National Rubbish Removal</Link> collects from inside the property, including upstairs rooms, garages, backyards and storage cages, so you do not have to carry anything to the kerb first.
          </p>

          <h2>What We Collect</h2>
          <p>
            We remove furniture, mattresses, white goods, green waste, renovation debris, office clutter and general household rubbish. Mixed loads are common, so a single visit can cover everything from an old dining set to a pile of garden waste.
          </p>
          <h3>Units and Strata Buildings</h3>
          <p>
            We collect from individual units and common areas, and work around lift bookings and building access times where required.
          </p>
          <h3>Renovations and Building Sites</h3>
          <p>
            Timber offcuts, plasterboard, packaging and other approved building waste can be collected during or after the job. Our{' '}
            <Link href="/services">rubbish removal services</Link> cover residential, commercial and construction clearances.
          </p>

          <h2>Responsible Disposal</h2>
          <p>
            We sort suitable items for donation or recycling wherever possible. Anything that cannot be reused is taken to an approved waste facility, and the areas we clear are swept before we leave.
          </p>
          <p>
            <Link href="/contact">Contact our team</Link> with a description or photos of the items, and we will arrange a convenient rubbish removal time in Rockdale.
          </p>
        </>
      }
    />
  );
}
