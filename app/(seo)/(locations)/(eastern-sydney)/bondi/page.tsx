import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('bondi');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'bondi',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Bondi.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Bondi',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Bondi.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Bondi Made Simple</h2>
          <p>
            No car, no trailer and no spare weekend? That is normal in Bondi, and it is exactly why we exist. You show us what needs to go, and our crew does the rest.
          </p>
          <p>
            We carry everything out of your flat, terrace or shop on Bondi Road, load it onto our truck and sweep up before we leave. Old lounges, beds, boxes, broken fans and bags of clutter can all go in one visit. You do not need to book a council date or find room for a skip bin on a busy street.
          </p>
          <p>
            Get in touch before lunch and we can often be at your door that same day. You will know the price before we lift a thing. We are always one call away from making rubbish removal in Bondi simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Bondi NSW 2026</h2>
          <p>
            Bondi sits about 7 km east of the Sydney CBD, between Bondi Junction and Bondi Beach. It is part of Waverley Council. Bondi Road runs through the middle as the main shopping strip, and the streets around it are lined with Victorian and Federation homes, old walk up flats and newer unit blocks.
          </p>
          <p>
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL10462" {...ext}>The 2021 Census</a> counted about 10,400 people in Bondi. Close to 8 in 10 homes are flats or apartments, and more than half of all homes are rented. The median age is 34, and about half of locals were born overseas. One more number stands out. More than 1 in 5 Bondi homes have no car at all.
          </p>
          <p>
            So a lot of people here move often, live in small spaces and have no easy way to get to the tip. We built our Bondi service to solve all three.
          </p>

          <h3>Rented Flat and Unit Rubbish Collection</h3>
          <p>
            Moving out of a Bondi rental can be stressful. Your bond depends on a clean, empty home, and the old couch will not fit on the bus. Some renters also have flat pack furniture they would rather not take to the next place.
          </p>
          <p>
            We clear what you are leaving behind, from one bed frame to a full flat, and our team does all the stair work. Book us a day or two before your final inspection so there is time to clean. See how our{' '}
            <Link href="/end-of-lease-rubbish-removal">end of lease rubbish removal</Link> service works.
          </p>

          <h3>Heritage Terrace and Semi Rubbish Removal</h3>
          <p>
            Bondi&apos;s older terraces and semis are full of character, but they can be hard to clear. Halls are narrow, stairs are steep, and some homes only have rear lane access. A wardrobe that came in years ago may not want to come out.
          </p>
          <p>
            Our crew takes care with old floors, walls and doorways. We can take apart large items when needed and carry everything out by hand. Have a look at our{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> service for the kinds of items we take.
          </p>

          <h2>Waverley Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Waverley Council offers{' '}
            <a href="https://www.waverley.nsw.gov.au/residents/waste_and_recycling/book_a_clean-up_collection" {...ext}>free clean up collections</a> for bulky household items. Each home gets one scheduled collection plus two &ldquo;Your Call&rdquo; bookings per calendar year. Here are the key rules:
          </p>
          <ul>
            <li>Each collection is limited to 2 cubic metres. That is a pile 2 metres long, 1 metre wide and 1 metre high.</li>
            <li>Mattresses are capped at 2 singles or 1 larger mattress per collection.</li>
            <li>Council will not take items that need more than two people to lift, such as gym equipment, carpet rolls and glass.</li>
            <li>Bricks, tiles, concrete and other building materials are not accepted.</li>
            <li>Loose green waste, soil and turf are not taken.</li>
          </ul>
          <p>
            Timing matters too. Items without a confirmed booking are treated as illegal dumping, and Waverley says on the spot fines{' '}
            <a href="https://www.waverley.nsw.gov.au/residents/waste_and_recycling/illegal_dumping" {...ext}>can reach $8,000 for individuals and $16,000 for businesses</a>.
          </p>
          <p>
            The council service is great for a small, light pile that can wait. A private pickup suits everything else. That includes a heavy treadmill, a bathroom full of old tiles, a full flat on moving day, or a fourth pickup after all three for the year are gone.
          </p>

          <h2>Strata Rubbish Removal for Bondi Apartment Blocks</h2>
          <p>
            With so many units in Bondi, shared spaces fill up fast. More are on the way too. Next door in Bondi Junction, council has approved a{' '}
            <a href="https://www.abc.net.au/news/2026-07-22/nsw-bondi-junction-homes-waverley-council-masterplan/106943174" {...ext}>masterplan for at least 3,000 new homes</a>. Bin rooms, garages and storage cages collect broken furniture and old boxes that no one claims.
          </p>
          <p>
            This is a real cost for owners. Waverley Council says it{' '}
            <a href="https://www.waverley.nsw.gov.au/residents/waste_and_recycling/waste_management_for_apartments" {...ext}>may seek to recover costs from strata</a> that do not contain illegal dumping caused by residents. Regular clear outs help stop that from happening.
          </p>
          <p>
            We work with building managers, strata committees and real estate agents. We clear common areas, carry items up from basements and leave the space swept. Learn more about our{' '}
            <Link href="/strata-rubbish-removal">strata rubbish removal</Link> service.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>Recycle It Saturday for Batteries, E Waste and Old Clothes</h2>
          <p>
            We do not take electronic waste or batteries, but there is a free option for Bondi locals. Waverley, the City of Sydney and Woollahra run{' '}
            <a href="https://www.waverley.nsw.gov.au/residents/waste_and_recycling/dispose_of_tricky_household_waste" {...ext}>Recycle It Saturday</a> at the Alexandra Canal Depot, 67C Bourke Road, Alexandria. The next one is on Saturday 21 November 2026, from 9am to 3pm. Bring proof of your address.
          </p>
          <p>
            You can drop off old electronics, batteries, light globes, paint in sealed tins, gas bottles and clothes too worn to donate. Mattresses and white goods are not accepted, but we can take those for you.
          </p>
          <p>
            Please keep batteries out of your bins. Waverley Council has warned of a{' '}
            <a href="https://www.waverley.nsw.gov.au/top/news_and_media/media_releases/all/2024/spike_in_garbage_truck_fires_prompts_safety_warning_for_battery_disposal" {...ext}>spike in garbage truck fires</a> caused by batteries crushed inside trucks.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Bondi?</h2>
          <p>
            Household rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, with a ${MIN_CHARGE} minimum per job. Shops and cafes on Bondi Road pay our commercial rate of ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. Your quote covers the lifting, the loading, the sweep up and the tip fees.
          </p>
          <p>
            Get a quick figure with our <Link href="/quote-estimator">rubbish removal price estimator</Link>. Finding room for a skip bin on a busy Bondi street is not easy, which is why many locals look at our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> instead.
          </p>

          <h2>Quick Answers about Bondi Junk Removal</h2>
          <p>
            <strong>Can you collect rubbish in Bondi today?</strong>
            <br />
            Most days, yes. Call us early, ideally before 1pm, and our same day rubbish removal in Bondi can usually fit you in.
          </p>
          <p>
            <strong>How can I get rid of a sofa quickly?</strong>
            <br />
            Book a pickup with us. We carry the sofa out of your home and take it away in the same visit, so it never sits on the footpath waiting for council.
          </p>
          <p>
            <strong>What is the easiest way to get rid of an old mattress in Bondi?</strong>
            <br />
            Let us take it. Council clean ups only take 2 single mattresses or 1 larger one per pickup, and you still have to get it to the kerb. We carry mattresses out of your home, even from upper floors, with no limit on how many. See our{' '}
            <Link href="/mattress-removal">mattress removal</Link> service.
          </p>
          <p>
            <strong>Do you also work in Bondi Beach, North Bondi and Bondi Junction?</strong>
            <br />
            Yes. We cover all of Waverley, including Tamarama, Bronte and Waverley itself. You get the same hourly rates and the same day pickups when you book early. Just tell us your street when you{' '}
            <Link href="/contact">request a quote</Link>, and we will plan parking and access before we arrive.
          </p>
          <p>
            Ready to clear out your Bondi flat, terrace or shop? Phone us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. Prefer to type? You can{' '}
            <Link href="/contact">ask for a free quote online</Link> and we will get back to you quickly. To find out more, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse all our{' '}
            <Link href="/services">rubbish removal services</Link> across Sydney.
          </p>
        </>
      }
    />
  );
}
