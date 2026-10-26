import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('manly');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'manly',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Manly.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Manly',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Manly.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Manly Made Simple</h2>
          <p>
            Rubbish removal in Manly works best when nobody has to load a car and drive out to Terrey Hills. Most homes here are units, so we come to you, carry everything down and take it away.
          </p>
          <p>
            Our crew handles furniture, mattresses, renovation rubbish and general junk, loads our truck and sweeps up before we leave. There is no skip bin, no council permit and no waiting for a booked collection.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price before we start. We are always one call away from making rubbish removal in Manly simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Manly NSW 2095</h2>
          <p>
            We clear apartments, houses and renovation jobs across Manly, usually on the same day you call. From the units around The Corso and the wharf to the streets running back towards North Manly, our crew does all the lifting so you do not have to.
          </p>
          <p>
            <a href="https://www.abs.gov.au/census/find-census-data/quickstats/2021/SAL12485" {...ext}>The 2021 Census</a> shows how Manly lives. More than 3 in 4 homes are apartments, compared with about 1 in 5 across NSW, and nearly 6 in 10 have two bedrooms or fewer. About 1 in 6 households has no car at all. Getting rid of a sofa or a stack of boxes yourself means finding a car or trailer and driving to Kimbriki, the Northern Beaches tip at Terrey Hills. We save you the trip and take everything straight from your door.
          </p>
          <p>
            More units are on the way. In August 2026, the{' '}
            <a href="https://manlyobserver.com.au/land-and-environment-court-approves-six-storey-building-in-manly-south-curl-curl-slsc-get-upgrades-and-a-18m-development-proposed-for-fairlight-in-this-weeks-da-round-up/" {...ext}>Manly Observer reported</a> that the Land and Environment Court had approved a new six storey building in Manly, and the local planning panel{' '}
            <a href="https://manlyobserver.com.au/manly-and-mona-vale-developments-get-the-green-light-while-two-big-projects-planned-for-frenchs-forest-and-balgowlah-take-shape-in-this-weeks-da-round-up/" {...ext}>approved changes</a> to a 24 apartment shop top development on Belgrave Street. New buildings bring moving days and renovation strip outs, and our junk removal crew clears what is left behind.
          </p>

          <h3>Apartment and Strata Rubbish Removal in Manly</h3>
          <p>
            With so little storage space, broken furniture and old mattresses in a Manly unit have nowhere to wait for the next council collection, and households can only book two of those a year. We collect straight from your apartment and carry everything down the stairs, through the lift or along tight entries, then load it into our truck in one visit. See our{' '}
            <Link href="/unwanted-furniture-removal">Unwanted Furniture Removal</Link> and{' '}
            <Link href="/mattress-removal">Mattress Removal</Link> services.
          </p>
          <p>
            Building managers and strata committees can also book our{' '}
            <Link href="/strata-rubbish-removal">Strata Rubbish Removal</Link> service to clear common areas, basements and items left behind by past residents.
          </p>

          <h3>Bathroom and Kitchen Renovation Rubbish Removal in Manly</h3>
          <p>
            Northern Beaches Council will only take one built in item per bulky goods collection: a single cabinet, sink, toilet or door. Everything else from a renovation is refused, along with bricks, rubble, insulation, glass and mirrors. That means a typical bathroom update, with its old vanity, toilet, shower screen and tiles, cannot go out on the kerb.
          </p>
          <p>
            We take all of it, either during the job or once it is finished, carried from the room straight to our truck. Renovation and building waste is charged at our construction rate. We do not take asbestos or fibro sheeting, so have older bathrooms tested before work starts. See our{' '}
            <Link href="/building-materials-disposal">Building Materials Disposal</Link> and{' '}
            <Link href="/brick-and-concrete-removal">Brick and Concrete Removal</Link> services.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>Northern Beaches Council Bulky Goods or a Private Hard Rubbish Collection?</h2>
          <p>
            Northern Beaches Council lets each household book{' '}
            <a href="https://www.northernbeaches.nsw.gov.au/services/rubbish-and-recycling/bulky-goods-collection/what-we-can-and-cant-collect" {...ext}>two bulky goods collections</a> a year. Here are the rules to know before you book:
          </p>
          <ul>
            <li>Each booking is capped at 3 cubic metres.</li>
            <li>Items can only go out the night before, and you need a booking number.</li>
            <li>No single item can weigh more than 40kg (whitegoods aside) or be longer than 1.8 metres.</li>
            <li>Pianos are refused because of their weight and size.</li>
            <li>Only one built in item is accepted per collection.</li>
            <li>Garden waste, glass, mirrors, building material, TVs, computers and hazardous waste are not accepted.</li>
            <li>Anything refused is left behind, and you must clear it from the kerb straight away.</li>
          </ul>
          <p>
            Council also says most bulky goods are compacted, crushed and sent to landfill, and it has set a target to cut that by 25% by 2030. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>
          <p>
            Putting items out without a booking, or adding to someone else&apos;s pile, counts as{' '}
            <a href="https://www.northernbeaches.nsw.gov.au/services/rubbish-and-recycling/illegal-dumping" {...ext}>illegal dumping</a>, with fines of up to $4,000. A private hard rubbish collection suits everything the council service does not: more than two clear outs a year, heavy or long items, renovation rubbish, or a job that cannot wait.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Manly?</h2>
          <p>
            Our rates are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour for homes and apartments, ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour for shops and offices, and ${PRICES['construction-rubbish-removal'].hourlyRate} per hour for renovation and building waste, with a ${MIN_CHARGE} minimum per job. Your quote covers the labour, loading, sweep up and disposal fees, so there are no hidden costs.
          </p>
          <p>
            A skip bin can cost more than it first looks. Northern Beaches Council charges{' '}
            <a href="https://ablis.business.gov.au/service/nsw/approval-to-place-a-skip-bin-in-a-public-place-northern-beaches-council/10483" {...ext}>$224 to place a skip in a public place</a> for the first 7 days, $226 for every week after that, and $1,113 if the skip arrives before the permit is approved. You still have to fill it yourself, and neighbours often add their own junk. We need no permit, load everything straight away and leave in one visit. Compare the options on our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page, or get a quick figure from our{' '}
            <Link href="/quote-estimator">Quote Estimator</Link>.
          </p>

          <h2>Quick Answers about Manly Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in Manly?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your Manly apartment or home the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer apartment rubbish removal in Manly so I do not have to drive to Kimbriki tip?</strong>
            <br />
            Yes. Kimbriki is off Mona Vale Road at Terrey Hills, and getting there means loading a car or trailer, driving out and unloading it yourself. About 1 in 6 Manly households has no car at all. Our apartment rubbish removal service starts at your door: we carry everything down from your unit and take it to licensed sorting and transfer facilities, so you never have to make the trip.
          </p>
          <p>
            <strong>Do you offer junk removal in Manly for items over 40kg or longer than 1.8 metres?</strong>
            <br />
            Yes. Northern Beaches Council&apos;s bulky goods collection refuses anything over 40kg (whitegoods aside) or longer than 1.8 metres. Our junk removal crew handles solid timber furniture, sofa beds, long dining tables and other heavy or oversized items, with enough hands to carry them safely down stairs and out to the truck.
          </p>
          <p>
            <strong>Do you offer hard rubbish collection in Manly for items left on the kerb after a Northern Beaches bulky goods collection?</strong>
            <br />
            Yes. Council leaves refused items behind and expects residents to clear them from the kerb straight away. Our hard rubbish collection service can usually pick them up the same day you call, so the pile is gone before it becomes an illegal dumping problem.
          </p>
          <p>
            Have a Manly unit, home or renovation to clear? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send a few photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">book your pickup online</Link> and choose a time that suits you. To see how we work, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse our full range of{' '}
            <Link href="/services">rubbish removal services</Link>.
          </p>
        </>
      }
    />
  );
}
