import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('brighton-le-sands');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'brighton-le-sands',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Brighton Le Sands.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Brighton Le Sands',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Brighton Le Sands.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Brighton Le Sands Made Simple</h2>
          <p>
            We make getting rid of rubbish in Brighton Le Sands easy. You tell us what needs to go. Our crew comes to you, carries everything out, loads the truck and sweeps up before we leave. You do not need a skip bin, a trailer or a trip to the tip.
          </p>
          <p>
            Brighton Le Sands has lots of apartments close to the beach, plus older homes on the quieter streets back from the water. We work with both. We can collect from a third floor unit, a garage, a backyard or a shop on The Grand Parade. You never have to drag anything down the stairs or out to the kerb.
          </p>
          <p>
            Need it gone today? Book in the morning or early afternoon and we can usually collect the same day. We work seven days a week, and you get a clear price before we start. We are always one call away from making rubbish removal in Brighton Le Sands simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Brighton Le Sands NSW 2216</h2>
          <p>
            Brighton Le Sands sits on the shore of Botany Bay, about 13 km south of the Sydney CBD.{' '}
            <a href="https://bayside.nsw.gov.au/news/lady-robinsons-foreshore-management-plan" {...ext}>Lady Robinsons Beach</a> and Cook Park run along the water. The Grand Parade and Bay Street are lined with cafes, shops and unit blocks.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10566" {...ext}>The 2021 Census</a> shows about 8,300 people live here. Around 6 in 10 homes are flats or apartments. More than 4 in 10 homes are rented. The median age is 43, which is older than the{' '}
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/1GSYD" {...ext}>Greater Sydney median of 37</a>.
          </p>
          <p>
            This tells us a lot about the rubbish people need gone. Renters move in and out often. Older locals downsize or clear out a family home. Our Brighton Le Sands rubbish removal service is set up for both.
          </p>

          <h3>Apartments and Strata Building Rubbish Collection</h3>
          <p>
            Units come with their own problems. There are stairs, small lifts, shared car parks and building rules. Parking near the beach can be tight on busy days.
          </p>
          <p>
            We plan around all of it. We can book the lift with your building manager, protect walls and floors, and carry items down ourselves. We also clear common areas, bin rooms and storage cages. See how our{' '}
            <Link href="/strata-rubbish-removal">strata rubbish removal</Link> works.
          </p>
          <p>
            Moving out of a rental? We take everything you are not keeping, so the unit is empty for your final inspection. Our{' '}
            <Link href="/end-of-lease-rubbish-removal">end of lease rubbish removal</Link> service helps you hand back the keys on time.
          </p>

          <h3>Family Homes, Downsizing and Estate Clear Outs</h3>
          <p>
            Older homes often have full garages, sheds and years of furniture. When you move to a smaller place, or clear a parent&apos;s home, the job can feel too big.
          </p>
          <p>
            We can clear one room or the whole house. We set aside items that can be donated, and we take the rest away. We do this with care and respect. Learn more about our{' '}
            <Link href="/deceased-estate-clearance">deceased estate clearance</Link> and{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> services.
          </p>

          <h2>Bayside Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Bayside Council offers{' '}
            <a href="https://www.bayside.nsw.gov.au/index.php/services/waste-recycling/household-clean-dates" {...ext}>free household clean ups</a> for hard rubbish. Here is how they work:
          </p>
          <ul>
            <li>There are 4 scheduled collections a year, set by zone.</li>
            <li>Each home can put out about 3 cubic metres. That is roughly one box trailer.</li>
            <li>You can put out up to two mattresses.</li>
            <li>Items can only go out on the weekend before your date. Putting them out earlier may be treated as illegal dumping.</li>
            <li>Collection can take up to five business days.</li>
            <li>Fibro and asbestos are not taken.</li>
          </ul>
          <p>
            If your date is close and your load is small, the council clean up is a good free choice. But it does not suit everyone. You might be moving out this week. You might have more than a trailer load. You might live in a unit with no room on the nature strip.
          </p>
          <p>
            That is when a private rubbish collection makes sense. We come when it suits you. There is no size limit, and nothing sits on the street waiting for days.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Brighton Le Sands?</h2>
          <p>
            We keep our pricing affordable and easy to understand. Residential jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, with a minimum charge of ${MIN_CHARGE}. Your price includes labour, loading, cleanup and disposal fees, so there are no hidden costs.
          </p>
          <p>
            For a quick guide, try our <Link href="/quote-estimator">instant price estimator</Link>. For an exact price,{' '}
            <Link href="/contact">send us a few photos</Link> of what needs to go.
          </p>
          <p>
            Thinking about a skip bin? With us there is no permit, no bin blocking your driveway, and no loading it yourself. See how we compare on our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> page.
          </p>

          <h2>What We Take and What We Cannot</h2>
          <p>
            Our junk removal service takes almost everything. That includes furniture,{' '}
            <Link href="/mattress-removal">mattresses</Link>, fridges, washing machines,{' '}
            <Link href="/green-waste-removal">garden waste</Link>, boxes, household clutter and renovation rubbish like timber, plasterboard, bricks and concrete. Mixed loads are fine, so one visit can clear it all.
          </p>
          <p>Some items need special care. Here is where to take them:</p>
          <ul>
            <li>
              Paint, oils, gas bottles, batteries and chemicals can go to a free{' '}
              <a href="https://www.epa.nsw.gov.au/Your-environment/Recycling-and-reuse/household-recycling-overview/household-chemical-cleanout" {...ext}>NSW EPA Household Chemical CleanOut</a>.
            </li>
            <li>
              Old TVs, computers and other electronics can go to a{' '}
              <a href="https://waste.bayside.nsw.gov.au/info-multi-map/1" {...ext}>Bayside drop off point</a>.
            </li>
            <li>
              Asbestos or fibro sheeting needs a{' '}
              <a href="https://www.asbestos.nsw.gov.au/find-a-licensed-asbestos-removalist" {...ext}>licensed asbestos removalist</a>.
            </li>
          </ul>
          <p>We also cannot take food waste, liquids, medical waste, wet concrete or hot ash.</p>

          <h2>Why a Licensed Rubbish Removalist Matters</h2>
          <p>
            Not every cheap operator does the right thing. If rubbish is dumped, it hurts the area and breaks the law. NSW has{' '}
            <a href="https://www.epa.nsw.gov.au/Your-environment/Illegal-dumping/illegal-dumping-laws-penalties" {...ext}>strict laws and big fines for illegal dumping</a>.
          </p>
          <p>
            In 2024, the NSW EPA{' '}
            <a href="https://www.epa.nsw.gov.au/news/media-releases/2024/epamedia240624-geta-skip-company-and-director-fined-%2460000-for-abandoned-waste" {...ext}>fined a Sydney skip bin business and its director a total of $60,000</a>. They left about 6,000 cubic metres of rubbish at a site in Smithfield.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with full public liability insurance. We are{' '}
            <a href="https://www.cm3.com.au/contractors/" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards. We take your rubbish to licensed Sydney sorting facilities. Up to 95% of what we collect is recycled or donated where possible.
          </p>

          <h2>Quick Answers about Brighton Le Sands Junk Removal</h2>
          <p>
            <strong>Can you pick up rubbish in Brighton Le Sands today?</strong>
            <br />
            Usually, yes. We offer same day rubbish removal across Brighton Le Sands. Book in the morning or early afternoon and we can often come that day.
          </p>
          <p>
            <strong>Can you clear a unit on The Grand Parade with no lift?</strong>
            <br />
            Yes. Our crew carries everything down the stairs for you. We can also work around your building&apos;s loading area and parking rules.
          </p>
          <p>
            <strong>What is the cheapest way to get rid of junk in Brighton Le Sands?</strong>
            <br />
            For a small load that can wait, the free Bayside Council clean up is the cheapest choice. For a bigger load, a move out or anything you need gone now, a private pickup saves you time and stress. You also skip the trailer hire and tip fees.
          </p>
          <p>
            <strong>Do you help when a family is downsizing?</strong>
            <br />
            Yes. We can clear the items you are not taking to your new home. We set aside what can be donated and remove the rest in one visit.
          </p>
          <p>
            Ready to book rubbish removal in Brighton Le Sands? Call <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send us a message on WhatsApp on{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. You can also{' '}
            <Link href="/contact">book your pickup online</Link> and we will confirm a time with you. Want to know more about who you are dealing with? Read about{' '}
            <Link href="/">{BUSINESS.name}</Link> and the full range of <Link href="/services">rubbish removal services</Link> we offer across Sydney.
          </p>
        </>
      }
    />
  );
}
