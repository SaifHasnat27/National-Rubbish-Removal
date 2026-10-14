import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export const metadata = buildLocationMetadata('kogarah');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'kogarah',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Kogarah.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Kogarah',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Kogarah.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Kogarah Made Simple</h2>
          <p>
            Most homes in Kogarah are units, and most rubbish jobs start with the same question. How do I get this down the stairs? With us, you do not have to. Our crew collects from inside your unit, house, garage or office, loads everything onto our truck and sweeps the area clean.
          </p>
          <p>
            We work around lift bookings, loading zones and busy streets near the station and the Princes Highway. You point to what needs to go, and we handle the heavy lifting from start to finish.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price first, with no surprises. That is rubbish removal in Kogarah made simple.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Kogarah NSW 2217</h2>
          <p>
            Kogarah sits about 14 km south west of the Sydney CBD and is often called the centre of the St George area. It is home to Jubilee Oval, Kogarah station on the T4 line, two hospitals including St George Hospital, and lots of medical centres and offices.
          </p>
          <p>
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL12190" {...ext}>The 2021 Census</a> counted about 16,400 people in Kogarah. Around 7 in 10 homes are flats or apartments, and almost half of all homes are rented. The median age is 35, a little younger than the{' '}
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/1GSYD" {...ext}>Greater Sydney median of 37</a>.
          </p>
          <p>
            So most Kogarah rubbish removal jobs happen in unit blocks, and many happen on moving day. Our team is set up for exactly that.
          </p>
          <p>
            One thing many locals do not know is that Kogarah is split between two councils. Most of the suburb is in Georges River Council, and some streets are in Bayside Council. Your rates notice or lease will tell you which one is yours.
          </p>

          <h3>Unit Block and Strata Rubbish Collection in Kogarah</h3>
          <p>
            Georges River Council has a rule that catches a lot of unit owners out. Blocks with 6 or more units must arrange council bulky waste pickups through their strata or body corporate. You cannot simply book one for your own unit.
          </p>
          <p>
            With us, anyone can book. That could be a resident clearing out their own unit, or a strata manager clearing common areas, basements and storage cages. Visit our{' '}
            <Link href="/strata-rubbish-removal">strata rubbish removal</Link> page to learn more.
          </p>
          <p>To make the day smooth, it helps to sort out a few things before we arrive:</p>
          <ul>
            <li>Book the lift with your building manager, if your block needs it.</li>
            <li>Tell us about loading zones, visitor parking or a rear lane.</li>
            <li>Let us know if anything is in a locked storage cage or car space.</li>
          </ul>
          <p>
            We do the rest. We carry everything out, protect walls and lift doors, and sweep up before we leave.
          </p>

          <h3>End of Lease Rubbish Removal for Kogarah Renters</h3>
          <p>
            When you move out of a rental in NSW, the{' '}
            <a href="https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live/ending-a-residential-tenancy/moving-out-of-a-rental-home" {...ext}>NSW Government says</a> you must leave the property clean and empty. If it is not left in a similar condition to when you moved in, your landlord or agent can claim part of your bond.
          </p>
          <p>
            That makes the last few days of a lease stressful. Old couches, broken chairs and boxes of junk can stand between you and your bond. Book our{' '}
            <Link href="/end-of-lease-rubbish-removal">end of lease rubbish removal</Link> service before your final inspection, and we will clear everything you are leaving behind.
          </p>

          <h2>Georges River Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Georges River Council offers a free{' '}
            <a href="https://www.georgesriver.nsw.gov.au/Services/Waste/Kerbside-Clean-Up" {...ext}>bulky waste collection</a> for homes. It is a good service, but it has limits:
          </p>
          <ul>
            <li>Each home gets two 3 cubic metre pickups a year, or one 6 cubic metre pickup.</li>
            <li>You must book at least two weeks ahead. In the busy months from November to January, the wait can be up to eight weeks.</li>
            <li>Each 3 cubic metre pickup takes up to two mattresses.</li>
            <li>Bricks, tiles, baths, glass, electronics and items longer than 2 metres are not taken.</li>
            <li>Unused pickups do not roll over to the next year.</li>
          </ul>
          <p>
            Timing matters too. Council says items left on the kerb without a booking, or put out too early, count as{' '}
            <a href="https://www.georgesriver.nsw.gov.au/Services/Waste/Illegal-Dumping" {...ext}>illegal dumping</a>. So do bags left outside a charity bin when the charity is closed.
          </p>
          <p>
            If you can plan ahead and your load fits the rules, the council service is a great free option. If you are moving out next week, have renovation rubbish, or need it gone today, a private pickup is the faster and safer choice.
          </p>

          <h2>Fridge, Washing Machine and White Goods Removal</h2>
          <p>
            Old fridges and washing machines are some of the hardest things to move out of a unit. They are heavy, awkward and often stuck behind tight corners. Council will take fridges and freezers, but only with the doors removed and only if they are out on the kerb.
          </p>
          <p>
            We take fridges, freezers, washing machines and dryers straight from your kitchen or laundry. Our crew does the lifting, and the metal goes to licensed facilities for recycling wherever possible.
          </p>
          <p>Please note that we cannot take TVs, computers or other electronic waste.</p>

          <h2>How Much Does Rubbish Removal Cost in Kogarah?</h2>
          <p>
            We charge $90 per hour for residential jobs, and there is a minimum charge of $250 per job. That covers labour, loading, cleanup and disposal fees. Nothing is added later.
          </p>
          <p>
            A skip bin is hard to fit outside most unit blocks, and you still have to fill it yourself. Our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> page explains the difference. To see a rough price in under a minute, use our{' '}
            <Link href="/quote-estimator">online price estimator</Link>.
          </p>

          <h2>Rubbish Removal for Kogarah Offices and Medical Suites</h2>
          <p>
            Kogarah has a busy health and business precinct, with plenty of clinics, practices and offices near the hospitals and the station. When a practice moves, upgrades or refits, there is often a lot to clear.
          </p>
          <p>
            We remove old desks, chairs, filing cabinets, waiting room furniture, partitions and boxes. We can work early or late to keep disruption low. See our{' '}
            <Link href="/office-rubbish-removal">office rubbish removal</Link> and{' '}
            <Link href="/office-cubicle-removal">office cubicle removal</Link> services.
          </p>
          <p>
            We do not take medical waste such as sharps. In NSW,{' '}
            <a href="https://www.epa.nsw.gov.au/Your-environment/Waste/industrial-waste/clinical-and-related-waste" {...ext}>clinical waste</a> is classed as special waste and needs a licensed clinical waste service.
          </p>
          <p>
            For business clients, our paperwork is in order. We are fully licensed and insured,{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a> and{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>.
          </p>

          <h2>Quick Answers about Kogarah Junk Removal</h2>
          <p>
            <strong>Can you collect rubbish in Kogarah today?</strong>
            <br />
            In most cases, yes. Book in the morning or early afternoon and we can usually offer same day rubbish removal in Kogarah.
          </p>
          <p>
            <strong>How much does it cost to remove one washing machine?</strong>
            <br />
            A single item job is charged at our $250 minimum. If you have other rubbish to go, add it to the same visit so you get more value from the booking.
          </p>
          <p>
            <strong>Do I need my strata manager&apos;s approval to book you?</strong>
            <br />
            Not for clearing your own unit. You just need to follow your building&apos;s rules for lifts and loading. For common areas, the strata manager or owners corporation should book the job.
          </p>
          <p>
            <strong>Is my street in Georges River or Bayside Council?</strong>
            <br />
            Most of Kogarah is in Georges River Council. Check your rates notice, or search your address on the council website if you are not sure.
          </p>
          <p>
            Need your rubbish gone? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send a WhatsApp message to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. If you prefer, you can{' '}
            <Link href="/contact">request a free quote online</Link> and we will get back to you quickly. To find out how we work, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse our{' '}
            <Link href="/services">residential, commercial and construction services</Link>.
          </p>
        </>
      }
    />
  );
}
