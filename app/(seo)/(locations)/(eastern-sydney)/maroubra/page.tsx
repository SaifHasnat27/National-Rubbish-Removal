import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('maroubra');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'maroubra',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Maroubra.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Maroubra',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Maroubra.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Maroubra Made Simple</h2>
          <p>
            From beachside units to family homes near Maroubra Junction, every home ends up with things that will not fit in the bin. An old fence, a pile of carpet, a lounge that has seen better days. We take them off your hands.
          </p>
          <p>
            Our team comes to you, lifts every item onto our truck and leaves the area tidy. We take the things council clean ups leave behind, like building rubbish, timber and old glass, so one visit really does clear it all.
          </p>
          <p>
            Get in touch by early afternoon and a same day pickup is usually on the cards. Your quote is agreed upfront, with no surprises at the end. We are always one call away from making rubbish removal in Maroubra simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Maroubra NSW 2035</h2>
          <p>
            Maroubra is about 10 km south east of the Sydney CBD and is the largest suburb in Randwick City by both area and population. Maroubra Beach became a National Surfing Reserve in 2006. Inland, Anzac Parade runs through Maroubra Junction, with Pacific Square and a busy row of shops, and Heffron Park sits to the west.
          </p>
          <p>
            About 30,700 people lived here at{' '}
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12511" {...ext}>the 2021 Census</a>. Homes are a real mix. Units make up about half, standalone houses close to a third, and semis or townhouses about a fifth. Almost 3 in 10 homes are owned outright, and 4 in 10 households have two or more cars.
          </p>
          <p>
            That means plenty of long time owners, plenty of full garages and a lot of renovating. We work with every kind of home here, from units to full size family houses.
          </p>

          <h3>Renovation and Backyard Rubbish Removal</h3>
          <p>
            Updating an older Maroubra home leaves a lot behind. Ripped up carpet, old tiles, plasterboard, broken timber and a tired paling fence can fill a front yard fast.
          </p>
          <p>
            These are the very items council clean ups refuse. We take them. Our crew loads building rubbish straight from your site, garage or backyard, so the job can keep moving. Building and renovation waste is charged at ${PRICES['construction-rubbish-removal'].hourlyRate} per hour. Learn more about our{' '}
            <Link href="/construction-site-clean-up">construction site clean up</Link> and{' '}
            <Link href="/timber-removal">timber removal</Link> services.
          </p>

          <h3>Downsizing Clear Outs for Long Time Owners</h3>
          <p>
            Many Maroubra families have lived in the same home for decades. When it is time to move somewhere smaller, sorting through a lifetime of belongings can feel like too much.
          </p>
          <p>
            More local seniors housing is on the way. In June 2026,{' '}
            <a href="https://www.buildaustralia.com.au/projects/catholic-healthcare-to-deliver-99-senior-homes-in-maroubra/" {...ext}>Build Australia reported</a> that Catholic Healthcare&apos;s plan for 99 senior homes on the old Maroubra RSL bowling club site on Malabar Road had reached a major planning milestone with council.
          </p>
          <p>
            If you or your parents are making a move like this, we can help. Show us what is staying, and we will clear the rest at your pace. Anything still useful goes to donation where possible, and we treat every home with care. Our{' '}
            <Link href="/household-rubbish-removal">household rubbish removal</Link> team handles everything from one spare room to the whole house.
          </p>

          <h2>Randwick Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Randwick City Council gives residents{' '}
            <a href="https://www.randwick.nsw.gov.au/services/rubbish-and-recycling/book-a-clean-up" {...ext}>six free clean ups a year</a>. One is scheduled on your waste calendar, and you can book the other five online. The main rules are:
          </p>
          <ul>
            <li>Each pickup has a cap of 2 cubic metres. For more, you need to book a double collection.</li>
            <li>Items go out on public land the day before your booked date.</li>
            <li>Mattresses must sit apart from the rest, as a separate truck collects them.</li>
            <li>Bricks, tiles, timber, plasterboard, carpet and fencing are not accepted.</li>
            <li>Glass, mirrors, tyres, gas bottles and business waste are also refused.</li>
          </ul>
          <p>
            Do not be tempted to put things out without a booking. In 2022, Randwick Council told{' '}
            <a href="https://au.news.yahoo.com/sydney-resident-fumes-disgusting-rubbish-act-083251167.html" {...ext}>Yahoo News</a> that dumping fines range from $750 to $7,500 for individuals and up to $15,000 for businesses.
          </p>
          <p>
            For a small pile of furniture, the council service is very handy. For renovation rubbish, broken glass, a load bigger than 2 cubic metres or anything you need gone today, a private hard rubbish collection is the simpler path.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Maroubra?</h2>
          <p>
            We charge ${PRICES['residential-rubbish-removal'].hourlyRate} per hour for household jobs, ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour for shops and businesses along Anzac Parade, and ${PRICES['construction-rubbish-removal'].hourlyRate} per hour for building and renovation waste. The minimum is ${MIN_CHARGE} per job. Labour, loading, the clean up and all tip fees are part of the price.
          </p>
          <p>
            Want a number now? Try our <Link href="/quote-estimator">rubbish removal cost estimator</Link>. Before you order a skip, have a look at our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link>. With us you need no council permit and no bin sits on your driveway for days.
          </p>

          <h2>Quick Answers about Maroubra Junk Removal</h2>
          <p>
            <strong>Can you clear my Maroubra home today?</strong>
            <br />
            In most cases, yes. Ring us before early afternoon and a crew can usually reach you before the day is out.
          </p>
          <p>
            <strong>How do I get rid of a big piece of furniture?</strong>
            <br />
            Book a pickup and let us do the lifting. We carry wardrobes, sofas, dining tables and bed frames out of your home, take them apart if needed, and donate what we can. See our{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> service.
          </p>
          <p>
            <strong>What do I do if I have too much rubbish for a council clean up?</strong>
            <br />
            Call us instead of booking a double collection and waiting. We have no 2 cubic metre limit, so a full garage, yard or house can go in one visit.
          </p>
          <p>
            <strong>Do you cover South Maroubra, Matraville, Malabar and Kingsford?</strong>
            <br />
            Yes. We work across the whole Randwick City area at the same rates. Pop your address into our{' '}
            <Link href="/contact">online booking form</Link> and we will lock in a time.
          </p>
          <p>
            Clearing out a Maroubra home, yard or renovation? Ring <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>, or snap a few photos and WhatsApp them to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. Rather type it out?{' '}
            <Link href="/contact">Fill in our quick quote form</Link> and we will be in touch. To get to know us better, start at the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page, then look through our{' '}
            <Link href="/services">rubbish removal services</Link> for homes, builders and businesses.
          </p>
        </>
      }
    />
  );
}
