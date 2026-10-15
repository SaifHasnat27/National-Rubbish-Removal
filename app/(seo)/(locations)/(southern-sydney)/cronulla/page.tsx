import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('cronulla');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

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
            Living near the beach is great until you need to move a couch down three flights of stairs. In Cronulla, most people live in units, streets are tight and parking near the water fills up fast. We take that hassle off your hands.
          </p>
          <p>
            Our team arrives with a truck, carries your rubbish out of the unit, house, holiday rental or shop, and cleans up behind us. You stay out of the stairwell, and your car stays where it is.
          </p>
          <p>
            Call or book online in the morning or early afternoon and we can usually be there the same day. You agree to the price before any work starts. We are always one call away from making rubbish removal in Cronulla simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Cronulla NSW 2230</h2>
          <p>
            Cronulla sits on a peninsula about 26 km south of the Sydney CBD. It has Cronulla Beach and North Cronulla on one side, Gunnamatta Bay on the other, and the ferry to Bundeena. Cronulla station is the last stop on the line, and Cronulla Street and Cronulla Plaza are the main shopping strip.
          </p>
          <p>
            It is also one of the most unit heavy suburbs in the Sutherland Shire.{' '}
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11120" {...ext}>The 2021 Census</a> shows about 72% of Cronulla homes are flats or apartments. Around 4 in 10 homes are rented, the average household has just 2.1 people, and the median age is 43.
          </p>
          <p>
            Small homes, lots of stairs and plenty of people moving in and out. That is what Cronulla rubbish removal looks like, and our crew is ready for it.
          </p>

          <h3>Walk Up Unit and Beachside Apartment Rubbish Removal</h3>
          <p>
            Some Cronulla unit blocks have no lift at all, and others have a lift too small for a couch. Stairwells are narrow, and street parking near the beach can be hard to find on a warm weekend.
          </p>
          <p>
            We plan the job before we arrive. We find the closest spot for the truck, check the access with you, and carry everything down by hand. Old lounges, beds, wardrobes and boxes all come out without you lifting a thing.
          </p>
          <p>
            If you live in a large complex, note that Sutherland Shire Council clean ups for blocks of 7 or more homes{' '}
            <a href="https://www.sutherlandshire.nsw.gov.au/living-here/waste-and-recycling/book-a-clean-up" {...ext}>must be booked by the strata or body corporate</a>. If you cannot wait for that, our{' '}
            <Link href="/strata-rubbish-removal">strata rubbish removal</Link> service works for owners, tenants and building managers.
          </p>

          <h3>Holiday Rental Clean Outs Between Guests</h3>
          <p>
            Cronulla is a popular spot for short stays. In NSW, hosts must{' '}
            <a href="https://www.nsw.gov.au/housing-and-construction/short-term-rental-accommodation/host-obligations" {...ext}>register their property and follow a code of conduct</a>. That includes following strata by laws, which often ban leaving furniture in shared areas.
          </p>
          <p>
            So when you replace a worn out lounge, a broken bed frame or an outdoor setting, the old one needs to go fast. We can collect it between guest stays, so the next booking arrives to a clean, tidy home. See our{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> and{' '}
            <Link href="/mattress-removal">mattress removal</Link> pages for more.
          </p>

          <h2>Too Much Rubbish for Your Bins? Your Options in the Shire</h2>
          <p>
            Holidays, parties, a move or a big clean out can leave far more rubbish than your bins can hold. Here are your choices in the Sutherland Shire:
          </p>
          <ul>
            <li>
              <strong>Everyday rubbish</strong> goes in your red lid bin as usual.
            </li>
            <li>
              <strong>Old TVs, computers, laptops and phones</strong> can go to the council&apos;s{' '}
              <a href="https://www.sutherlandshire.nsw.gov.au/living-here/waste-and-recycling/electronic-and-hazardous-waste" {...ext}>free e waste drop off</a>. It runs twice a year at Bellingara Road in Miranda. Wipe your personal data first.
            </li>
            <li>
              <strong>Bulky items</strong> can go out in a council clean up, if you can book one and wait for the date.
            </li>
            <li>
              <strong>Everything else, today,</strong> is where we come in. Our{' '}
              <Link href="/household-rubbish-removal">household rubbish removal</Link> service takes furniture, mattresses, boxes, white goods and general junk in one trip.
            </li>
          </ul>
          <p>
            Please do not leave rubbish on the street without a booking. Sutherland Shire Council treats it as{' '}
            <a href="https://sutherlandshire.nsw.gov.au/your-environment/report-illegal-dumping" {...ext}>illegal dumping</a>, and on the spot fines apply.
          </p>

          <h2>Commercial Rubbish Removal for Cronulla Cafes, Restaurants and Shops</h2>
          <p>
            Cronulla has a busy cafe, food and retail scene close to the beach and the station. When a venue refits, closes or changes hands, there is a lot to clear. Think old tables and chairs, shelving, signage, display units and piles of cardboard.
          </p>
          <p>
            We work early in the morning or after closing time, so you do not lose trading hours. Our{' '}
            <Link href="/retail-strip-out-removal">retail strip out removal</Link> team clears the space and leaves it swept and ready for the next fit out.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Cronulla?</h2>
          <p>
            Pricing is based on time and the type of job. Home rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, and commercial jobs for shops and cafes are ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. There is a ${MIN_CHARGE} minimum charge per job. Labour, loading, cleanup and disposal are all included.
          </p>
          <p>
            Want a quick figure? Try our <Link href="/quote-estimator">instant price estimator</Link>. There is rarely room for a skip bin outside a beachside unit block, so most Cronulla locals find our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> easier.
          </p>

          <h2>Quick Answers about Cronulla Junk Removal</h2>
          <p>
            <strong>Can you come to Cronulla today?</strong>
            <br />
            Usually, yes. Book before early afternoon and we can often offer same day rubbish removal in Cronulla.
          </p>
          <p>
            <strong>Can you get a lounge out of a Cronulla unit with no lift?</strong>
            <br />
            Yes. Our crew carries it down the stairs by hand, takes it apart if it will not fit, and loads it straight onto the truck. You do not have to lift a thing.
          </p>
          <p>
            <strong>Can you clear a holiday rental on a changeover day?</strong>
            <br />
            Yes. Tell us your checkout and check in times, and we will book a pickup that fits between them.
          </p>
          <p>
            <strong>Do you also cover Woolooware, Burraneer and Kurnell?</strong>
            <br />
            Yes. We work across Cronulla and all the nearby Shire suburbs.
          </p>
          <p>
            Ready to clear out your unit, holiday rental or shop? Call <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or text us on WhatsApp at{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. You can also{' '}
            <Link href="/contact">send us your job details and photos</Link> for a free quote. Find out more about{' '}
            <Link href="/">{BUSINESS.name}</Link>, or look through every{' '}
            <Link href="/services">rubbish removal service</Link> we provide across Sydney.
          </p>
        </>
      }
    />
  );
}
