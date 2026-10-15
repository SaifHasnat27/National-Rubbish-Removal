import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('coogee');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'coogee',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Coogee.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Coogee',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Coogee.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Coogee Made Simple</h2>
          <p>
            Coogee is a beautiful place to live, but it is not an easy place to move a fridge. Most homes are units, many are up a few flights of stairs, and parking near the beach can vanish on a sunny day. We handle all of that for you.
          </p>
          <p>
            Our crew arrives, carries out everything you want gone, loads up and sweeps the space clean. Old furniture, boxes, a broken washing machine or the contents of a whole flat can go in a single trip.
          </p>
          <p>
            Ring us early and the truck can often be outside your building the same day, ahead of the beach crowds. Your price is agreed upfront. We are always one call away from making rubbish removal in Coogee simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Coogee NSW 2034</h2>
          <p>
            Coogee sits on the coast roughly 8 km from the Sydney CBD, in Randwick City. Coogee Bay Road runs from Randwick to the beach, where Goldstein Reserve, the Coogee Bay Hotel and the ocean pools draw crowds all summer. Its streets are lined with apartment buildings in every style from the 1930s onwards, plus a few grand old houses.
          </p>
          <p>
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL11015" {...ext}>The 2021 Census</a> shows that units make up about 80% of Coogee homes. More than half are rented, and about 1 in 8 homes is a group or share household. Many residents also come from abroad, with around 1 in 10 born in England and 1 in 20 in Ireland.
          </p>
          <p>
            It all adds up to a suburb where people come and go often and space is always tight. That is the kind of junk removal work we do every day.
          </p>

          <h3>Older Apartment Block Rubbish Collection</h3>
          <p>
            Some of Coogee&apos;s older unit blocks have no lift at all. Stairwells can be narrow, storage cages are small, and shared laundries and garages slowly fill with things no one owns up to.
          </p>
          <p>
            We carry everything down by hand and out to the truck, taking care with old walls, rails and doors. We also clear shared spaces for owners and strata managers, so the building looks cared for again. Owners corporations can read about our{' '}
            <Link href="/strata-rubbish-removal">strata rubbish removal</Link> service.
          </p>

          <h3>Moving Home or Heading Overseas Clear Outs</h3>
          <p>
            When you are flying home or moving on, everything has to go before the flight. Selling or giving away a whole flat of furniture in a week is hard work.
          </p>
          <p>
            Book us for the day before your final inspection. We take the bed, the sofa, the desk and whatever else is left, and donate usable items where possible. You get to spend your last days in Coogee at the beach, not on the stairs. This is exactly what our{' '}
            <Link href="/end-of-lease-rubbish-removal">end of lease rubbish removal</Link> crew does every week.
          </p>

          <h2>Beat the Beach Parking with an Early Pickup</h2>
          <p>
            Parking near Coogee Beach is already a sore point. In March 2026, the{' '}
            <a href="https://www.abc.net.au/news/2026-03-06/randwick-city-council-propose-paid-beach-parking-for-visitors/106418590" {...ext}>ABC reported</a> that Randwick City Council was asking for feedback on paid parking for visitors at Coogee and other local beaches, with residents to be exempt. One Coogee resident warned that visitors would park in nearby streets instead, &ldquo;leaving no parking for residents.&rdquo;
          </p>
          <p>
            We plan around it. In summer and on weekends, we try to book Coogee pickups early in the morning, when there is still room for the truck. Our weekday start is 6am, so the job is often finished before the beach gets busy. Tell us about any narrow lane or tricky driveway when you book, and we will plan for it.
          </p>

          <h2>Rubbish Dumped on Your Property? We Can Clear It</h2>
          <p>
            It is a common question. What do you do when someone dumps rubbish on your driveway, in your building&apos;s car park or on your front lawn?
          </p>
          <p>
            If it is on public land, report it to{' '}
            <a href="https://www.randwick.nsw.gov.au/services/rubbish-and-recycling/report-a-rubbish-or-recycling-problem/report-illegal-dumping" {...ext}>Randwick City Council</a> using its online form, or call 1300 722 542 if it is urgent. Council says the details you provide may help it prosecute the dumper.
          </p>
          <p>
            If it is on your own property, you often just want it gone. We can remove dumped mattresses, furniture, boxes and general junk from private homes, unit blocks and shops. Take photos first in case you need them for council or your strata, then let us take it away.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Coogee?</h2>
          <p>
            Homes pay ${PRICES['residential-rubbish-removal'].hourlyRate} an hour and cafes, shops and other businesses pay ${PRICES['commercial-rubbish-removal'].hourlyRate} an hour. A ${MIN_CHARGE} minimum applies to each booking, and there are no extra charges for the crew, the loading, the tidy up or the tip.
          </p>
          <p>
            Our <Link href="/quote-estimator">online pricing tool</Link> gives you a rough figure in a minute, or send photos for an exact quote. With street parking this tight, a skip bin is rarely practical in Coogee, so read about our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> before you hire one.
          </p>

          <h2>Quick Answers about Coogee Junk Removal</h2>
          <p>
            <strong>Can you come early, before the beach traffic?</strong>
            <br />
            Yes. We start at 6am on weekdays, 7am on Saturdays and 8am on Sundays. An early slot is often the easiest time to park and load in Coogee.
          </p>
          <p>
            <strong>How much does it cost to take rubbish to the tip in Sydney?</strong>
            <br />
            Tip fees vary by site and load, so we cannot quote them for you. What we can say is that our price already includes disposal. You skip the trailer hire, the drive and the queue at the tip.
          </p>
          <p>
            <strong>Can you clear my unit before I fly out?</strong>
            <br />
            Yes. Pick a slot shortly before your flight and our crew will clear out whatever is not coming with you, leaving the flat empty for the agent.
          </p>
          <p>
            <strong>Do you cover South Coogee, Clovelly and Bronte?</strong>
            <br />
            Yes. We work right along the coast, and we also have local pages for <Link href="/randwick">Randwick</Link> and <Link href="/bondi">Bondi</Link>. Share your street on our{' '}
            <Link href="/contact">booking page</Link> and we will suggest the best time to come.
          </p>
          <p>
            Need to clear out a Coogee flat, house or shop? Phone <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>, or WhatsApp a few photos to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. If you prefer,{' '}
            <Link href="/contact">tell us about the job online</Link> and we will be in touch. Get to know{' '}
            <Link href="/">{BUSINESS.name}</Link> a little better, or browse the{' '}
            <Link href="/services">rubbish removal services</Link> we provide from the beaches to the west.
          </p>
        </>
      }
    />
  );
}
