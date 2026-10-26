import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('north-sydney');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'north-sydney',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in North Sydney.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in North Sydney',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in North Sydney.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in North Sydney Made Simple</h2>
          <p>
            Rubbish removal in North Sydney usually starts on a high floor. Most people here rent a unit, many live on their own, and the council pick up gives each apartment only a small share of space at the kerb.
          </p>
          <p>
            Our crew comes up to your unit or office, carries everything down, loads our truck and sweeps up before we leave. Sofas, beds, boxes from a move and old office workstations can all go in one booking, with no skip bin and no permit.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price before we start. We are always one call away from making rubbish removal in North Sydney simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for North Sydney NSW 2060</h2>
          <p>
            We clear apartments, towers and offices across North Sydney, usually on the same day you call. Our trucks work around Walker Street, Miller Street and the blocks near North Sydney station, where most jobs mean a lift, a loading dock or a tight kerb.
          </p>
          <p>
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL13020" {...ext}>The 2021 Census</a> shows who lives here. More than 8 in 10 homes are apartments, compared with about 1 in 5 across NSW. About 6 in 10 households rent, and more than 4 in 10 are one person living alone. Nearly 3 in 10 homes have no car. For a renter on their own with no car, getting a bed or a couch out of the building is a real job. Our crew does all the lifting and carrying, so all you need to do is point at what goes.
          </p>
          <p>
            The towers keep coming. On 1 July 2026,{' '}
            <a href="https://www.theurbandeveloper.com/articles/153-157-walker-street-freecity-approval-nsw-sydney-north" {...ext}>The Urban Developer reported</a> that a 51 storey tower at 153 to 157 Walker Street had been approved, with 296 apartments and a 170 room hotel. More towers mean more people moving in and out, and more furniture that has to come down. We plan each pickup around your building&apos;s dock and lift bookings.
          </p>

          <h3>Apartment and Tower Rubbish Collection in North Sydney</h3>
          <p>
            North Sydney Council&apos;s household pick up runs every second Monday. A house can put out 2 cubic metres, but each unit only gets 0.5 cubic metres, a quarter of what a house gets. In a studio or one bedroom unit, a single sofa can use up that whole share, and anything extra waits two weeks for the next round.
          </p>
          <p>
            We have no volume limit per unit. Our crew collects straight from your apartment, storage cage or car space, takes it down in one trip and loads it onto the truck, so nothing sits in the bin room in the meantime. See our{' '}
            <Link href="/unwanted-furniture-removal">Unwanted Furniture Removal</Link> service. Building managers can also book our{' '}
            <Link href="/strata-rubbish-removal">Strata Rubbish Removal</Link> service to clear abandoned furniture from car parks, basements and other common areas.
          </p>

          <h3>Office Refit and Cubicle Junk Removal in North Sydney</h3>
          <p>
            North Sydney is a major office centre, with towers lining Walker Street, Miller Street and the Pacific Highway. When a company refits a floor or moves out, the old workstations, partitions, chairs, filing cabinets and meeting tables all have to go, and the council pick up is for household items only.
          </p>
          <p>
            We clear office furniture of any amount, from a few desks to a full floor, and work with building management on dock times and lift access. Commercial jobs are charged at our commercial rate. See our{' '}
            <Link href="/office-cubicle-removal">Office Cubicle Removal</Link> and{' '}
            <Link href="/office-rubbish-removal">Office Rubbish Removal</Link> services. Please set computers, screens and printers aside for an e waste recycler, as we cannot take them.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>North Sydney Council Pick Up or a Private Hard Rubbish Collection?</h2>
          <p>
            North Sydney Council runs a{' '}
            <a href="https://www.northsydney.nsw.gov.au/waste-recycling/book-bulky-waste-pick" {...ext}>household waste pick up</a> every second Monday. It works well for a small pile if you plan ahead. Here are the rules:
          </p>
          <ul>
            <li>Book online or by phone by 4pm on the Sunday before the collection.</li>
            <li>Houses get 2 cubic metres, and each unit gets 0.5 cubic metres.</li>
            <li>Items cannot go out before the Sunday before the Monday collection.</li>
            <li>Large items and whitegoods must sit on a main street frontage, not in a rear laneway, so the truck can reach them.</li>
            <li>Whitegoods must weigh 90kg or less, with doors taped shut or removed.</li>
            <li>E waste, building waste, baths, sinks, vanities, toilets, pianos, hot water heaters, cardboard, mirrors and large glass are not accepted.</li>
            <li>Green waste needs a separate garden waste booking.</li>
          </ul>
          <p>
            The{' '}
            <a href="https://www.northsydney.nsw.gov.au/waste-recycling/book-garden-waste-pick" {...ext}>garden waste pick up</a> has its own rules. Branches must be tied in bundles no thicker than 7.5cm and no longer than 1.2 metres, and loose leaves need a green bin that residents buy themselves. For a terrace courtyard or a small garden, our{' '}
            <Link href="/green-waste-removal">Green Waste Removal</Link> service loads it all as it is.
          </p>
          <p>
            So the council service suits a small pile that fits your unit&apos;s share and can wait for the next Monday. A private hard rubbish collection suits the rest: more than your share, items stuck behind a laneway, anything council refuses, or a job that needs doing this week. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>

          <h2>How Much Does Rubbish Removal Cost in North Sydney?</h2>
          <p>
            Apartment and home jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, offices and shops are ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour, and renovation or building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour. Every job has a ${MIN_CHARGE} minimum, and your quote covers the labour, loading, sweep up and disposal fees.
          </p>
          <p>
            A skip bin is hard to place in North Sydney. A skip on the road needs a{' '}
            <a href="https://www.northsydney.nsw.gov.au/projects-works/works-road-andor-footpath-permit-application/2" {...ext}>council permit</a>, it can only sit in a permissive parking space, it must be no wider than 1.8 metres, and the application needs a photo of the spot. On busy streets that often rules a skip out. Our truck parks, our crew loads and we leave in one visit. Compare the options on our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page, or get a quick figure from our{' '}
            <Link href="/quote-estimator">Quote Estimator</Link>.
          </p>

          <h2>Quick Answers about North Sydney Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in North Sydney?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your North Sydney apartment or office the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer apartment rubbish removal in North Sydney for more than the 0.5 cubic metre council allowance per unit?</strong>
            <br />
            Yes. Our apartment rubbish removal has no volume cap. Whether it is one couch or everything in a studio, we clear it in a single booking and you only pay for the time we spend, instead of splitting the job across several fortnightly council pick ups.
          </p>
          <p>
            <strong>Do you offer end of lease rubbish removal in North Sydney before my final inspection?</strong>
            <br />
            Yes. With about 6 in 10 North Sydney homes rented, leases end here all the time. Our crew clears the furniture, mattresses and boxes you are not taking and sweeps up, so the unit is ready to hand back. See our{' '}
            <Link href="/end-of-lease-rubbish-removal">End of Lease Rubbish Removal</Link> service.
          </p>
          <p>
            <strong>Do you offer hard rubbish collection in North Sydney for terraces with rear laneway access?</strong>
            <br />
            Yes. Council&apos;s pick up needs large items on a main street frontage, so laneway homes have to carry everything round to the front. Our hard rubbish collection crew carries items from your house, garage or laneway to wherever our truck can safely park, so you do not have to move a thing.
          </p>
          <p>
            Ready to clear a North Sydney unit, office or terrace? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send a few photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">book your pickup online</Link> and choose a time that suits you. We work right across the area too, including{' '}
            <Link href="/chatswood">Chatswood</Link>, <Link href="/mosman">Mosman</Link>, <Link href="/lane-cove">Lane Cove</Link>,{' '}
            <Link href="/ryde">Ryde</Link>, <Link href="/hornsby">Hornsby</Link> and <Link href="/manly">Manly</Link>. To see how we work, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse our full range of{' '}
            <Link href="/services">rubbish removal services</Link>.
          </p>
        </>
      }
    />
  );
}
