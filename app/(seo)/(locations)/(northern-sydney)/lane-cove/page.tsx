import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS, to12Hour } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('lane-cove');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'lane-cove',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Lane Cove.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Lane Cove',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Lane Cove.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Lane Cove Made Simple</h2>
          <p>
            Rubbish removal in Lane Cove usually comes down to time. Between work and family, few people have a free Saturday to load a trailer and queue at the tip. That is the part we take off your list.
          </p>
          <p>
            Our crew comes to your unit, house or renovation site, carries everything out, loads our truck and sweeps up after. Old furniture, boxes from a move, garden waste and renovation rubbish can all go in the same visit, including the things the council clean up will not take.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price before we start. We are always one call away from making rubbish removal in Lane Cove simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Lane Cove NSW 2066</h2>
          <p>
            We clear rubbish from Lane Cove units, family homes, gardens and renovation sites, often on the same day you call. Lane Cove sits about 9 km north west of the Sydney CBD, with the village shops along Longueville Road and bushland reserves running through the gullies and along the river.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12275" {...ext}>The 2021 Census</a> shows a suburb of busy young families. Nearly half of all families are couples with children, and more than 1 in 4 residents are aged 30 to 44. In about 1 in 3 couple families, both partners work full time, compared with about 1 in 5 across NSW. When the week is that full, a trip to the tip rarely makes the list. We work seven days a week, from early morning until {to12Hour(BUSINESS.openingHours.rows[0].closes)}, so you can book a pickup that fits around work and school.
          </p>
          <p>
            Homes here are often small, too. About 6 in 10 are apartments and 4 in 10 have just two bedrooms, so cots, toys and spare furniture soon run out of room. And more homes are coming. The NSW Government has set a{' '}
            <a href="https://www.planning.nsw.gov.au/the-planning-system/housing/housing-targets/lane-cove-councils-snapshot" {...ext}>target of 3,400 new homes</a> in the Lane Cove Council area by 2029. In July 2026,{' '}
            <a href="https://www.theweeklysource.com.au/australian-unity-gains-approval-for-83-m-development-in-lane-cove-sydney-after-eight-year-battle/" {...ext}>The Weekly SOURCE reported</a> that an $83 million seniors housing development in Lane Cove had finally been approved after eight years. Every new building means more people moving in and out, and our junk removal crew clears what they leave behind.
          </p>

          <h3>Kitchen and Bathroom Renovation Rubbish Removal in Lane Cove</h3>
          <p>
            When a growing family updates a kitchen or bathroom, the council clean up will not help with the rubbish. Lane Cove Council refuses baths, sinks, vanities, toilets and laundry tubs, along with bricks, tiles, plasterboard, doors, timber, fencing and pallets. Soil, stones and concrete are out too.
          </p>
          <p>
            We take all of it. Our crew can collect during the job or once it is finished, straight from the house, garage or driveway, so the site stays safe and tidy. See our{' '}
            <Link href="/building-materials-disposal">Building Materials Disposal</Link>,{' '}
            <Link href="/brick-and-concrete-removal">Brick and Concrete Removal</Link> and{' '}
            <Link href="/timber-removal">Timber Removal</Link> services. We cannot take asbestos or wet concrete, so if you are pulling apart an older bathroom, have it checked before work starts.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h3>Green Waste Removal Beside the Bush</h3>
          <p>
            Lane Cove&apos;s bushland sits in small reserves through the gullies and along the foreshore, and{' '}
            <a href="https://www.lanecove.nsw.gov.au/Environment-Sustainability/Bushland/Threats-to-Bushland" {...ext}>council says</a> every part of it is within 100 metres of homes or industry. Rubbish and dumped garden waste are among the main threats council lists, because they carry weeds into the bush.
          </p>
          <p>
            The trouble is that a big garden clean up has few easy places to go. The council clean up takes no green waste at all, not even branches, and the green bin is only collected once a fortnight. We take garden waste of any size, from fallen branches and hedge prunings to overgrown shrubs and piles of leaves, and send it to licensed facilities for recycling where possible. See our{' '}
            <Link href="/green-waste-removal">Green Waste Removal</Link> service.
          </p>

          <h2>Lane Cove Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Lane Cove Council gives each household four free{' '}
            <a href="https://www.lanecove.nsw.gov.au/Services/Waste-and-Recycling/Book-a-Council-Clean-up" {...ext}>booked clean ups</a> a year. It is a handy service for a pile of old furniture or a broken appliance. Here is what to know before you book:
          </p>
          <ul>
            <li>Wait times can apply, so you may need to book well ahead.</li>
            <li>Each booking is capped at 3 cubic metres.</li>
            <li>No single item can weigh 90kg or more, or be longer than 1.5 metres.</li>
            <li>Items go out the night before collection. Putting them out earlier can lead to a fine.</li>
            <li>Building waste, green waste, mirrors, plate glass and bulk cardboard are not accepted, and TVs and computers are refused too.</li>
            <li>Anything over the limit, or not accepted, is investigated as illegal dumping.</li>
          </ul>
          <p>
            Council also says items from its clean ups have a low recycling rate. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>
          <p>
            So the council service suits a small pile of household items when you can wait for a date. A private hard rubbish collection suits the rest: a renovation, a full garden clean up, a load bigger than 3 cubic metres, or a move that cannot wait. We do not take TVs or computers either, so set those aside for an e waste drop off.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Lane Cove?</h2>
          <p>
            Home and apartment jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour. Renovation and building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour, and every booking has a ${MIN_CHARGE} minimum. Your price includes the crew, the loading, the sweep up and the tip fees, so there is nothing extra at the end.
          </p>
          <p>
            Try our <Link href="/quote-estimator">Quote Estimator</Link> for a fast figure, or send photos for a firm quote. If you are weighing up a skip bin, our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page shows how a pickup compares.
          </p>

          <h2>Quick Answers about Lane Cove Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in Lane Cove?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your Lane Cove home the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer renovation rubbish removal in Lane Cove for bathrooms and kitchens?</strong>
            <br />
            Yes. Lane Cove Council&apos;s{' '}
            <a href="https://www.lanecove.nsw.gov.au/Services/Waste-and-Recycling/Book-a-Council-Clean-up" {...ext}>clean up</a> refuses baths, vanities, toilets, tiles and plasterboard, but our renovation rubbish removal covers all of it. Building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour, and we can come during the job or once it is finished. We cannot take asbestos or wet concrete. See our{' '}
            <Link href="/building-materials-disposal">Building Materials Disposal</Link> service.
          </p>
          <p>
            <strong>Do you offer junk removal in Lane Cove for moving boxes and cardboard?</strong>
            <br />
            Yes. The Lane Cove Council clean up does not accept bulk cardboard, so a big move can leave a garage full of flattened boxes. Our junk removal crew clears cardboard and packing paper along with any furniture you are not keeping, and sends the cardboard for recycling where possible.
          </p>
          <p>
            <strong>Do I need a council permit if I book rubbish removal instead of a skip bin in Lane Cove?</strong>
            <br />
            No. Lane Cove Council asks for a{' '}
            <a href="https://www.lanecove.nsw.gov.au/Services/Waste-and-Recycling/Waste-FAQs" {...ext}>written application</a> at least 7 days before a skip bin goes on the street or footpath. Our rubbish removal truck needs no permit, because we load everything and leave in the same visit. See our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page.
          </p>
          <p>
            Got a Lane Cove unit, home or renovation to clear? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send a few photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">book a pickup online</Link> and we will lock in a time around your week. To see how we work, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or look through our{' '}
            <Link href="/services">rubbish removal services</Link> for homes, gardens and building sites.
          </p>
        </>
      }
    />
  );
}
