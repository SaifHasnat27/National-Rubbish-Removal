import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('chatswood');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'chatswood',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Chatswood.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Chatswood',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Chatswood.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Chatswood Made Simple</h2>
          <p>
            Chatswood is a suburb of towers. Most people here live in apartments, and that changes how rubbish removal works. A sofa on the 20th floor does not get to the kerb on its own, and the council clean up only collects from the nature strip.
          </p>
          <p>
            That is where we come in. Our crew collects from inside your unit, house, office or shop, brings it down in the lift, loads our truck and sweeps up before we leave. Old furniture, mattresses, boxes, garden waste and office clutter can all go in one visit.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price before we lift a thing. We are always one call away from making rubbish removal in Chatswood simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Chatswood NSW 2067</h2>
          <p>
            Chatswood sits about 10 km north of the Sydney CBD and is home to Willoughby City Council. Office towers line the Pacific Highway around the train and Metro interchange, while the streets to the east and west are full of family homes and gardens. We handle rubbish removal for both, from a unit on the 30th floor to a backyard full of branches.
          </p>
          <p>
            Most of our Chatswood jobs start in a lift.{' '}
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL10891" {...ext}>The 2021 Census</a> shows about 2 in 3 homes here are apartments, three times the NSW rate. Half of all homes are rented, so move out days are common. More than 1 in 5 homes have no car, which rules out a run to the tip. That is why our crew comes to you and carries everything out, so you do not need to borrow a ute or queue at the tip.
          </p>
          <p>
            The number of lift jobs is only going up. The NSW Government&apos;s developer,{' '}
            <a href="https://www.landcom.nsw.gov.au/projects/chatswood" {...ext}>Landcom, plans up to 1,500 new homes</a> on the old Metro construction site on the Pacific Highway. In July 2026,{' '}
            <a href="https://www.buildaustralia.com.au/projects/billbergia-and-metrics-unveil-1-3b-urban-vision-for-chatswood-cbd/" {...ext}>Build Australia reported</a> on a plan for two towers of 58 and 60 storeys, with 552 apartments near the interchange. Every new tower means more move in days, more lift bookings and more furniture to clear, and our junk removal crew plans each job around the building&apos;s rules.
          </p>

          <h3>High Rise Apartment Rubbish Collection</h3>
          <p>
            Council clean ups in Willoughby are built around the kerb. Items go on the nature strip outside your property, and only on the Sunday night of your collection week. In a tower, there is no nature strip of your own. You would need to carry everything down in the lift, find a spot that does not block the footpath, and leave it there. It may sit for days, because collection can happen any time from Monday to Friday.
          </p>
          <p>
            We take that job off your hands. Send us your building&apos;s lift booking and loading dock times, and we will plan around them. Our crew protects the lift, carries everything out of your unit and loads it straight onto the truck. Building managers can also book us to clear bin rooms, basements and storage cages through our{' '}
            <Link href="/strata-rubbish-removal">Strata Rubbish Removal</Link> service.
          </p>
          <p>
            Renting? With half of Chatswood homes rented, leases end here every week. We clear what you are leaving behind before your final inspection, from one bed to a whole unit. See how our{' '}
            <Link href="/end-of-lease-rubbish-removal">End of Lease Rubbish Removal</Link> service works.
          </p>

          <h3>Garden and Garage Clean Outs for Chatswood Houses</h3>
          <p>
            Not all of Chatswood is high rise. About 3 in 10 homes are separate houses, many on leafy blocks east and west of the CBD. Garden jobs here can be big, and the council vegetation pickup has strict rules. Branches must be bundled, tied and cut to under 1 metre. Loose cuttings, branches thicker than 75mm, tree stumps and logs are all refused.
          </p>
          <p>
            We load garden waste just as it is. You do not need to cut, tie or bag anything. Big branches, hedge trimmings, old pot plants and lawn clippings can go in the same load as a broken outdoor setting or a garage full of boxes. See our{' '}
            <Link href="/green-waste-removal">Green Waste Removal</Link> and{' '}
            <Link href="/garage-clean-out">Garage Clean Out</Link> services.
          </p>

          <h2>Willoughby Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Willoughby City Council offers a free{' '}
            <a href="https://www.willoughby.nsw.gov.au/Residents/Waste-and-recycling/Kerbside-bulky-waste-clean-up-collections" {...ext}>kerbside bulky waste clean up</a>. It is a good service if you can plan ahead. Here is how it works:
          </p>
          <ul>
            <li>Each home gets three scheduled clean ups and one free booked clean up each calendar year.</li>
            <li>Each collection is capped at 2 cubic metres, and no item can be longer than 2 metres.</li>
            <li>The crew only takes items that two people can lift safely.</li>
            <li>Council suggests booking at least a month ahead to get the date you want.</li>
            <li>Every pile needs a clean up label. Items put out before the Sunday night of your collection week count as illegal dumping.</li>
            <li>Cancel a booked collection within 7 days of the date and you lose your free booking until next year.</li>
            <li>Commercial waste is not accepted.</li>
          </ul>
          <p>
            Do not add your items to a neighbour&apos;s pile either. Council treats that as illegal dumping too, with a fine of $4,000.
          </p>
          <p>
            There is one more thing to know. Council says most clean up material ends up in landfill. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>
          <p>
            So the council service suits a small, light pile with a date coming up. A private hard rubbish collection suits everything else: a load bigger than 2 cubic metres, heavy items, rubbish that needs to go this week, or a unit with no kerb of its own.
          </p>
          <p>
            Got old TVs, laptops, paint or batteries? Take them to the free{' '}
            <a href="https://willoughby.nsw.gov.au/Residents/Waste-and-recycling/Reduce-reuse-recycle/Community-Recycling-Centre-Northern-Sydney" {...ext}>Community Recycling Centre</a> at 8 Waltham Street, Artarmon. We do not take e waste, but we take almost everything else.
          </p>

          <h2>Mattress Removal After the Willoughby Council Change</h2>
          <p>
            Since 1 August 2025, Willoughby Council no longer takes mattresses in its clean ups. Instead, residents can book a free mattress collection through council&apos;s recycling partner, Soft Landing. It takes up to four mattresses or ensemble bases per booking, left out at the kerb. Bed frames and other furniture are not included.
          </p>
          <p>
            That works well if you can get the mattress down to the street. If you cannot, or the bed frame, bedside tables and wardrobe need to go too, book us instead. We carry it all out of your unit in one visit, even from the top floor. Our{' '}
            <Link href="/mattress-removal">Mattress Removal</Link> page has more detail.
          </p>

          <h2>Office and Shop Junk Removal in the Chatswood CBD</h2>
          <p>
            Chatswood is a major commercial centre, with office towers along the Pacific Highway, two large shopping centres and a busy mix of shops, cafes and restaurants. Council&apos;s bulky waste service is for homes only. So when a business refits, downsizes or moves out, it needs a private service.
          </p>
          <p>
            We clear old desks, chairs, partitions, filing cabinets, shelving and shop fittings. We can start early in the morning or come after closing time, so you do not lose trading hours. See our{' '}
            <Link href="/office-rubbish-removal">Office Rubbish Removal</Link>,{' '}
            <Link href="/office-cubicle-removal">Office Cubicle Removal</Link> and{' '}
            <Link href="/retail-strip-out-removal">Retail Strip Out Removal</Link> services. Please set computers and monitors aside for an e waste recycler, as we cannot take them.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards. If your building manager needs our insurance details first, we can send them before the day.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Chatswood?</h2>
          <p>
            Apartment and house jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour. Offices, shops and other businesses pay ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. Every job has a ${MIN_CHARGE} minimum, and your quote already includes the crew, the loading, the sweep up and the disposal fees.
          </p>
          <p>
            For a quick figure, try our <Link href="/quote-estimator">Quote Estimator</Link>. Want an exact price? Send us a few photos. There is rarely room for a skip bin outside a Chatswood tower, and you would still have to fill it yourself. Our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page explains the difference.
          </p>

          <h2>Quick Answers about Chatswood Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in Chatswood?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your Chatswood home or office the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer rubbish removal from Chatswood apartment towers with lifts and loading docks?</strong>
            <br />
            Yes. About 2 in 3 Chatswood homes are apartments, so tower jobs are a big part of our rubbish removal work here. Our crew comes up to your unit, uses the service lift and loading dock, and works to your building&apos;s booking times. Let your building manager know when we are coming and we will handle the rest.
          </p>
          <p>
            <strong>Do you offer junk removal in Chatswood for mattresses and bed frames?</strong>
            <br />
            Yes. Willoughby Council stopped taking mattresses in its{' '}
            <a href="https://www.willoughby.nsw.gov.au/Residents/Waste-and-recycling/Kerbside-bulky-waste-clean-up-collections" {...ext}>kerbside clean ups</a> from 1 August 2025. Our junk removal crew carries mattresses, bed bases and bed frames out of your bedroom, usually the same day, and sends them for recycling where possible.
          </p>
          <p>
            <strong>Do you offer hard rubbish collection in Chatswood for more than the 2 cubic metre council limit?</strong>
            <br />
            Yes. Willoughby Council caps each clean up at 2 cubic metres, but our hard rubbish collection has no volume limit. Whether it is one room or a whole apartment, we clear it in a single visit and you only pay for the time we spend.
          </p>
          <p>
            Ready to clear out your Chatswood unit, house or office? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>, or send a few photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a fast quote. You can also{' '}
            <Link href="/contact">book your pickup online</Link> and we will confirm a time that suits you. To see how we work across homes, offices and building sites, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse our full range of{' '}
            <Link href="/services">rubbish removal services</Link>.
          </p>
        </>
      }
    />
  );
}
