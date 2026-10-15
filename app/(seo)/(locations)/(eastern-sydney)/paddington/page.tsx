import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('paddington');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'paddington',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Paddington.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Paddington',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Paddington.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Paddington Made Simple</h2>
          <p>
            Paddington terraces are beautiful, but they were built in a time before big lounges and king beds. Narrow halls, steep stairs and tiny front yards make getting rubbish out the hardest part of the job. Leave that part to us.
          </p>
          <p>
            Our crew carries everything out through the front door with care, loads our truck and leaves your home and the footpath tidy. A spare room, a full terrace or an Oxford Street shop can all be cleared in one visit.
          </p>
          <p>
            A morning call usually means an afternoon pickup. The cost is agreed before anything moves. We are always one call away from making rubbish removal in Paddington simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Paddington NSW 2021</h2>
          <p>
            Just 3 km from the city centre, Paddington is a suburb of terraces and leafy back streets. Oxford Street runs through it with boutiques, cafes and the Saturday Paddington Markets, which have run since 1973. Five Ways has its own village feel, and landmarks include the sandstone Victoria Barracks and Juniper Hall, the oldest house in the suburb. In 1968, much of Paddington became the first conservation area in Australia.
          </p>
          <p>
            The terraces still define the place.{' '}
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL13126" {...ext}>The 2021 Census</a> shows about 6 in 10 Paddington homes are terraces, semis or townhouses, compared with just over 1 in 10 across NSW. Around 1 in 5 homes have no car, and households are small, with 2.1 people on average.
          </p>
          <p>
            That heritage is valued deeply. In May 2026,{' '}
            <a href="https://cityhub.com.au/proposed-oxford-street-mid-rise-concerns-paddington-locals/" {...ext}>City Hub reported</a> that the National Trust was opposing an eight storey plan at 160 Oxford Street, calling Paddington &ldquo;a unique urban area.&rdquo; We bring the same respect to every home we work in.
          </p>

          <h3>Victorian Terrace Rubbish Collection</h3>
          <p>
            In most terraces, there is only one way in and out. Everything has to come down a narrow staircase, along a thin hallway and out the front door. Sofas get stuck on landings and wardrobes will not turn the corner.
          </p>
          <p>
            Our crew is used to it. We take large pieces apart when needed, protect banisters and door frames, and carry items out by hand. Backyard junk comes through the house or out the rear lane where there is one. Our{' '}
            <Link href="/household-rubbish-removal">household rubbish removal</Link> work covers everything from one old armchair to a full terrace clear out.
          </p>

          <h3>Shop and Gallery Rubbish Removal on Oxford Street</h3>
          <p>
            Paddington is known for its fashion boutiques and private galleries. When a store refits, closes or changes hands, there are old shelves, racks, counters, display stands, packing crates and piles of cardboard to clear.
          </p>
          <p>
            We work before opening or after closing, so you do not lose trading time, and we keep the footpath clear for shoppers. Business jobs are charged at ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. Find out more on our{' '}
            <Link href="/retail-strip-out-removal">retail strip out removal</Link> page.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>Woollahra Council or City of Sydney Clean Up?</h2>
          <p>
            Paddington is split in two. Homes north of Oxford Street are in Woollahra, and homes south of it are in the City of Sydney. Each council runs a different service.
          </p>
          <p>
            <strong>Woollahra Council</strong> runs a{' '}
            <a href="https://www.woollahra.nsw.gov.au/Services/Waste-and-Recycling/Scheduled-Clean-Up-Service" {...ext}>scheduled clean up</a>:
          </p>
          <ul>
            <li>Items go out on the Sunday night before your date, not earlier and not later.</li>
            <li>Each household can put out one ute load.</li>
            <li>Building materials, garden organics, e waste and batteries are not taken.</li>
            <li>Clean up notices start at $320 for breaking the rules.</li>
          </ul>
          <p>
            <strong>City of Sydney</strong> offers a{' '}
            <a href="https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items" {...ext}>free bulky item pickup</a> you can book each week:
          </p>
          <ul>
            <li>Book by 2pm the day before your collection day.</li>
            <li>Houses and terraces can put out 1 cubic metre per booking.</li>
            <li>Items longer than 1.5 metres or heavier than 100 kg are not collected.</li>
            <li>Carpet, mirrors, glass topped furniture and renovation waste are refused.</li>
          </ul>
          <p>
            Both are handy for small, light loads. But there is a catch in a terrace street. Someone has to haul it all through the house and stack it on a narrow footpath. If your load is big, heavy, or full of things council will not take, a private hard rubbish collection is much easier. We collect from inside your home at a time you choose, so nothing waits outside.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Paddington?</h2>
          <p>
            Residential jobs are billed at ${PRICES['residential-rubbish-removal'].hourlyRate} an hour and shop or office jobs cost ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. The minimum charge for any job is ${MIN_CHARGE}. The quote covers the crew, the truck and disposal, so it is the price you pay.
          </p>
          <p>
            Get a quick estimate with our <Link href="/quote-estimator">online quote calculator</Link>. Many Paddington streets are too narrow for a skip bin, so a pickup is usually the simpler choice. Compare the two on our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> page.
          </p>

          <h2>Quick Answers about Paddington Junk Removal</h2>
          <p>
            <strong>Can you get a sofa out of a narrow terrace?</strong>
            <br />
            Yes. If it came in, we can usually get it out. We take legs, cushions and frames apart when we need to, and carry everything down the stairs and out the front door for you.
          </p>
          <p>
            <strong>Can you take things council clean ups will not, like old carpet or a glass table?</strong>
            <br />
            Yes. We take carpet, glass topped furniture and renovation rubbish such as timber, tiles and plasterboard, all in the same load as your furniture.
          </p>
          <p>
            <strong>Can you avoid the Saturday market crowds?</strong>
            <br />
            Yes. If you live near Oxford Street, we can book a weekday or an early morning slot, when the street is quieter and parking is easier.
          </p>
          <p>
            <strong>Do you also cover Woollahra, Edgecliff, Darlinghurst and Surry Hills?</strong>
            <br />
            Yes. We work across the eastern suburbs and the inner city at the same rates. We also have a local page for <Link href="/bondi">Bondi</Link>. Pop your street into the{' '}
            <Link href="/contact">booking form</Link>.
          </p>
          <p>
            Have a Paddington terrace, flat or shop that needs clearing? Our phone line is <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>, and our WhatsApp is{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> if you would rather send pictures. There is also an{' '}
            <Link href="/contact">online enquiry form</Link> that takes about a minute. Before you book, you are welcome to read more about{' '}
            <Link href="/">{BUSINESS.name}</Link> and the{' '}
            <Link href="/services">rubbish removal services</Link> we provide around the city.
          </p>
        </>
      }
    />
  );
}
