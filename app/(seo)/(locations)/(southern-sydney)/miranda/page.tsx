import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('miranda');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'miranda',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Miranda.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Miranda',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Miranda.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Miranda Made Simple</h2>
          <p>
            Miranda has more houses, garages and backyards than busy centres like Cronulla and Sutherland. That means more space to fill with old furniture, garden waste and renovation leftovers. When it is time to clear it, we make it quick and easy.
          </p>
          <p>
            Our crew comes to your home, garage, shed or shop. We lift everything, load our truck and sweep up before we go. There is no skip bin sitting on your driveway for days, and no trips to the tip in the family car.
          </p>
          <p>
            Same day pickups are often available when you book early. We give you a clear price before we start, so you know where you stand. We are always one call away from making rubbish removal in Miranda simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Miranda NSW 2228</h2>
          <p>
            Miranda is about 24 km south of the Sydney CBD, in the heart of the Sutherland Shire. Westfield Miranda sits right next to Miranda station on the Cronulla line, with shops running along The Kingsway and Kiora Road.
          </p>
          <p>
            The housing here is different from many nearby suburbs.{' '}
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12656" {...ext}>The 2021 Census</a> shows about 4 in 10 Miranda homes are separate houses, and nearly 2 in 10 are townhouses or semis. About 6 in 10 homes are owned by the people who live in them, and the median age is 39.
          </p>
          <p>
            Owners tend to stay longer, so garages, sheds and spare rooms slowly fill up. Our Miranda rubbish removal team sees a lot of family homes, renovations and big garden jobs.
          </p>

          <h3>Garage Clean Outs and Shed Rubbish Removal</h3>
          <p>A full garage can feel too hard to start. Here is a simple way to tackle it:</p>
          <ol>
            <li>Pick a day and book your pickup for the end of it. A deadline helps.</li>
            <li>Sort everything into four piles: keep, donate, sell and rubbish.</li>
            <li>
              Put aside old paint, pool chemicals and gas bottles. These go to a free{' '}
              <a href="https://www.sutherlandshire.nsw.gov.au/living-here/waste-and-recycling/household-chemical-cleanout" {...ext}>Household Chemical CleanOut</a>, not in a rubbish truck.
            </li>
            <li>Leave the rest to us. We carry it out and sweep the floor.</li>
          </ol>
          <p>
            Old bikes, broken tools, boxes, shelves and that lounge from three moves ago can all go in one load. See our{' '}
            <Link href="/garage-clean-out">garage clean out</Link> service for more.
          </p>

          <h3>Renovation and Building Rubbish Collection</h3>
          <p>
            Many Miranda homes are being updated with new kitchens, bathrooms and outdoor areas. That leaves old cabinets, tiles, timber, plasterboard, bricks and concrete behind.
          </p>
          <p>
            We remove renovation rubbish during or after the job, so your site stays safe and tidy. Learn more about our{' '}
            <Link href="/building-materials-disposal">building materials disposal</Link> and{' '}
            <Link href="/brick-and-concrete-removal">brick and concrete removal</Link> services.
          </p>
          <p>
            Older homes can contain asbestos, often in fibro walls, eaves and old bathrooms. We cannot take it. If you think you have found some, stop work and use a{' '}
            <a href="https://www.asbestos.nsw.gov.au/find-a-licensed-asbestos-removalist" {...ext}>licensed asbestos removalist</a>.
          </p>

          <h2>Green Waste Removal in Miranda: Your New Green Bin and Bigger Garden Jobs</h2>
          <p>
            Big changes are coming to Shire green bins. From 2 November 2026, Sutherland Shire Council is starting{' '}
            <a href="https://www.sutherlandshire.nsw.gov.au/living-here/waste-and-recycling/fogo" {...ext}>FOGO</a>, short for Food Organics and Garden Organics. Food scraps and garden waste will go in the same green lid bin, and it will be{' '}
            <a href="https://www.theleader.com.au/story/9328938/sutherland-shire-new-weekly-fogo-service-starts-november-2/" {...ext}>collected weekly instead of fortnightly</a>, starting with houses.
          </p>
          <p>
            A weekly green bin is great for grass clippings, leaves and small branches. But one bin will not fit a big hedge trim, a fallen tree limb, a pile of palm fronds or a full garden makeover. That is where our{' '}
            <Link href="/green-waste-removal">green waste removal</Link> service helps. We load it all in one visit and take it to be recycled into mulch and compost where possible.
          </p>
          <p>
            One thing we cannot take is noxious weeds. Some plants are listed as{' '}
            <a href="https://weeds.dpi.nsw.gov.au/Region?Id=135" {...ext}>priority weeds for Greater Sydney</a>, and every resident has a duty to manage them properly. If you are not sure what is growing in your yard, Sutherland Shire Council can help you identify it.
          </p>

          <h2>Big Furniture Removal for Miranda Homes</h2>
          <p>
            Wardrobes, sofas, bunk beds and dining tables are hard to get out of a house. They are often stuck upstairs in a townhouse or wedged in a back room. Taking them apart yourself can take hours.
          </p>
          <p>
            Our crew carries large furniture out for you, down stairs and through tight doorways. If an item is in good condition, we set it aside for donation where we can. Everything else is taken away. Read more about our{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> and{' '}
            <Link href="/mattress-removal">mattress removal</Link> services.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Miranda?</h2>
          <p>
            Every job has a ${MIN_CHARGE} minimum charge. After that, residential rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour. Renovation and building waste is charged at our construction rate of ${PRICES['construction-rubbish-removal'].hourlyRate} per hour. Each price includes labour, loading, cleanup and disposal.
          </p>
          <p>
            Want a rough idea first? Our <Link href="/quote-estimator">price estimator</Link> gives you an estimate in seconds. It can also be cheaper and easier than hiring a skip bin that blocks your driveway for a week. Compare both on our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> page.
          </p>

          <h2>Quick Answers about Miranda Junk Removal</h2>
          <p>
            <strong>Can you come to Miranda today?</strong>
            <br />
            Often, yes. If you book in the morning or early afternoon, we can usually offer same day rubbish removal in Miranda.
          </p>
          <p>
            <strong>Should I just wait for the council clean up?</strong>
            <br />
            Sutherland Shire Council gives each home up to{' '}
            <a href="https://www.sutherlandshire.nsw.gov.au/living-here/waste-and-recycling/book-a-clean-up" {...ext}>two pre booked clean ups per financial year</a>. In busy periods, the wait can be more than 8 weeks. If you can wait, it is a good free option. If not, we can usually come within a day.
          </p>
          <p>
            <strong>Can you take a sofa that is still upstairs?</strong>
            <br />
            Yes. You do not need to move anything first. We collect it from wherever it is in the house.
          </p>
          <p>
            <strong>Do you clear shops near Westfield Miranda and The Kingsway?</strong>
            <br />
            Yes. We clear old shop fittings, stock and packaging for local businesses. See our{' '}
            <Link href="/retail-strip-out-removal">retail strip out removal</Link> service.
          </p>
          <p>
            Have a garage, garden or spare room that needs clearing? Give us a call on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>, or message us on WhatsApp at{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. You can also{' '}
            <Link href="/contact">ask for a free quote online</Link> with a few photos of the job. To learn more, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or see the full list of{' '}
            <Link href="/services">rubbish removal services</Link> we offer.
          </p>
        </>
      }
    />
  );
}
