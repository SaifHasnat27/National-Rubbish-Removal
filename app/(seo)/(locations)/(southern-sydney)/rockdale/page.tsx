import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('rockdale');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

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
            Rockdale is changing fast. New unit blocks are going up near the station, older homes are being renovated, and people are moving in and out every week. All of that creates rubbish that will not fit in a wheelie bin.
          </p>
          <p>
            That is where we help. Tell us what you need gone, and our crew will arrive, load it onto our truck and sweep the area when we finish. Boxes from a move, an old kitchen, a broken bed or a garage full of junk can all go in one visit.
          </p>
          <p>
            We can usually collect on the same day if you book early. Your price is agreed upfront, so there are no surprises. We are always one call away from making rubbish removal in Rockdale simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Rockdale NSW 2216</h2>
          <p>
            Rockdale is about 13 km south of the Sydney CBD and is home to the main offices of Bayside Council. The suburb is built around Rockdale station on the Illawarra line and the Princes Highway, with Rockdale Plaza, a busy bus interchange and the 1940 Art Deco Town Hall.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13394" {...ext}>The 2021 Census</a> counted about 15,500 people living in Rockdale. Almost 7 in 10 homes are flats or apartments, close to half of all homes are rented, and the median age is just 34.
          </p>
          <p>
            Big growth is on the way. The NSW Government has named Rockdale and Banksia as a{' '}
            <a href="https://www.planning.nsw.gov.au/news/more-homes-way-wollongong-central-coast-and-sydney" {...ext}>Transport Oriented Development precinct</a> with room for around 11,300 new homes over 15 years. In October 2026,{' '}
            <a href="https://www.theleader.com.au/story/9365099/rockdale-masterplan-bayside-council-reveals-70-backing/" {...ext}>The Leader reported</a> that 70% of people who gave feedback backed Bayside Council&apos;s new Rockdale Centre masterplan, which includes six to nine storey unit blocks near the town centre.
          </p>
          <p>
            More homes means more moving days, more fit outs and more building work. Our Rockdale rubbish removal service is built for all three.
          </p>

          <h3>Move In and Move Out Rubbish Collection</h3>
          <p>
            Moving into a new unit leaves a mountain of cardboard, foam and plastic wrap behind. Moving out often means the old couch, the spare bed and the desk you do not want to take with you.
          </p>
          <p>
            We clear both. We take boxes and packaging from the unit or car park and send the cardboard for recycling where possible. We also remove the furniture you are leaving behind, even from upper floors. See our{' '}
            <Link href="/household-rubbish-removal">household rubbish removal</Link> service for the full list.
          </p>

          <h3>Renovation Rubbish Removal for Older Rockdale Homes</h3>
          <p>
            Many older houses and units in Rockdale are being updated. That means old kitchens, bathroom tiles, carpet, plasterboard, timber and broken concrete.
          </p>
          <p>
            We can collect during the job or once it is done, so rubbish does not pile up on site. Learn more about our{' '}
            <Link href="/timber-removal">timber removal</Link> and{' '}
            <Link href="/construction-site-clean-up">construction site clean up</Link> services.
          </p>

          <h2>How to Choose a Safe Rubbish Removalist in Rockdale</h2>
          <p>
            Here is something most people do not know. If a contractor dumps your rubbish illegally, you can be in trouble too. A{' '}
            <a href="https://epa.nsw.gov.au/sites/default/files/19p1761-construction-and-demolition-waste-disposal-fact-sheet.pdf" {...ext}>NSW EPA guide on building waste</a> says the owner of the waste and the person who transports it may both be guilty of an offence.
          </p>
          <p>The EPA suggests a few simple checks before you pay anyone:</p>
          <ul>
            <li>
              Look up their business on the free <a href="https://abr.business.gov.au/" {...ext}>ABN Lookup</a> website.
            </li>
            <li>Get a written price that explains what is being taken.</li>
            <li>Ask where your rubbish will go.</li>
            <li>Keep your receipts and job records.</li>
          </ul>
          <p>
            We are happy to answer all of these questions. {BUSINESS.name} is fully licensed and insured,{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a> and{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>. Every load goes to licensed Sydney sorting and transfer facilities.
          </p>

          <h2>Skip Bin Hire or Rubbish Removal in Rockdale?</h2>
          <p>
            Skip bins can seem cheap at first. But you pay for the bin by size and by how many days you keep it. You also have to load it yourself, and it sits outside your home until it is picked up. Outside a unit block on a busy street, there is often nowhere to put one.
          </p>
          <p>
            With us, there is no bin to place and nothing to fill yourself. Our crew does all the lifting, loads the truck and leaves in one visit. If you are weighing up both options, read our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> guide.
          </p>

          <h2>Free Bayside Recycling Drop Off Days</h2>
          <p>
            If you have a car or trailer and only a small load, Bayside Council runs free{' '}
            <a href="https://www.bayside.nsw.gov.au/whats-on/community-recycling-drop-2026-bexley-depot" {...ext}>community recycling drop off days</a>. Here is what to know:
          </p>
          <ul>
            <li>They are held at Bexley Depot, 10 to 14 Rye Avenue, from 8am to 3pm.</li>
            <li>There are 22 events a year across the Bexley and Botany depots.</li>
            <li>They are for Bayside residents only, and you need proof of address.</li>
            <li>Each resident can bring up to 3 cubic metres per event.</li>
          </ul>
          <p>
            It is a good choice for a small, sorted load. If you have no way to get it there, have too much, or need it gone today, book us instead.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Rockdale?</h2>
          <p>
            The minimum charge for any job is ${MIN_CHARGE}. Household rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, and renovation and building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour. Every price includes labour, loading, cleanup and disposal.
          </p>
          <p>
            For a fast estimate, use our <Link href="/quote-estimator">rubbish removal price calculator</Link>. It only takes a minute.
          </p>

          <h2>Quick Answers about Rockdale Junk Removal</h2>
          <p>
            <strong>Can you pick up rubbish in Rockdale today?</strong>
            <br />
            Most days, yes. Book in the morning or early afternoon and we can usually offer same day rubbish removal in Rockdale.
          </p>
          <p>
            <strong>How do I get rid of a lot of rubbish at once?</strong>
            <br />
            Book one pickup for the whole lot. We take mixed loads, so furniture, boxes, garden waste and building rubbish can all go together.
          </p>
          <p>
            <strong>Can you take away boxes and packaging after I move in?</strong>
            <br />
            Yes. We collect cardboard, foam and plastic wrap, and recycle the cardboard wherever we can.
          </p>
          <p>
            <strong>Can you take renovation rubbish as well as furniture?</strong>
            <br />
            Yes. Old kitchens, tiles, timber, plasterboard and broken concrete can go in the same load as your furniture. Building and renovation waste is charged at ${PRICES['construction-rubbish-removal'].hourlyRate} per hour, and we can collect during the job or once it is finished.
          </p>
          <p>
            Got a move, a renovation or a big clean out coming up? Call our team on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or message us on WhatsApp at{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. You can also{' '}
            <Link href="/contact">book a pickup online</Link> and we will confirm your time. Learn more about{' '}
            <Link href="/">{BUSINESS.name}</Link> and the full range of{' '}
            <Link href="/services">Sydney rubbish removal services</Link> we offer.
          </p>
        </>
      }
    />
  );
}
