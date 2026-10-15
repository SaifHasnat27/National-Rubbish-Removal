import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('sutherland');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'sutherland',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Sutherland.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Sutherland',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Sutherland.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Sutherland Made Simple</h2>
          <p>
            Sutherland gave the Shire its name, and its town centre is getting busier every year. Units and townhouses fill the streets around the station, and traffic near the rail crossing can crawl in the afternoon. We plan your pickup around all of that.
          </p>
          <p>
            Our crew comes to your door, carries out what you no longer need, loads our truck and sweeps up. You will not need to book a council date months away or squeeze a trailer into a narrow lane.
          </p>
          <p>
            Book early in the day and we can usually come the same day, often before the afternoon rush. You agree on the price first. We are always one call away from making rubbish removal in Sutherland simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Sutherland NSW 2232</h2>
          <p>
            Sutherland is about 26 km south of the Sydney CBD and is home to Sutherland Shire Council, with its main offices on Eton Street. Sutherland station is where the Cronulla line splits from the Illawarra line. The suburb also sits beside the Woronora River and Prince Edward Park, with the Royal National Park just to the south.
          </p>
          <p>
            Most people here live close to the centre.{' '}
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13716" {...ext}>The 2021 Census</a> shows about two thirds of Sutherland homes are flats or apartments, and around 1 in 7 are townhouses or semis. About 4 in 10 homes are rented, and the average household has 2.1 people.
          </p>
          <p>
            That means a lot of small homes, a lot of moving days and not much storage. Our Sutherland rubbish removal service is set up for exactly that kind of job.
          </p>

          <h3>Town Centre Unit and Townhouse Rubbish Collection</h3>
          <p>
            Sutherland is about to grow even more. The NSW Government has taken over planning for the Sutherland and Kirrawee area to allow more homes. In October 2026,{' '}
            <a href="https://www.theleader.com.au/story/9363765/sutherland-22-storey-tower-fast-tracked-as-traders-push-back/" {...ext}>The Leader reported</a> that a 22 storey tower with 110 apartments on the Old Princes Highway has been fast tracked.
          </p>
          <p>
            The same report shows what locals already know. Traffic near the rail crossing can be gridlocked from 3pm to 5pm, and some back lanes are very narrow. We plan around this. Where we can, we book town centre pickups in the morning, park close and keep the job short.
          </p>
          <p>
            Renting and about to move out? We clear everything you are leaving behind, so the place is ready for your final inspection. See our{' '}
            <Link href="/end-of-lease-rubbish-removal">end of lease rubbish removal</Link> service.
          </p>

          <h3>Homes Near the Woronora River and Bushland</h3>
          <p>
            Some homes near Sutherland back onto the Woronora River and the bush. These properties can have steep driveways, long paths and tricky access for big items. Council also lists Woronora River properties as excluded from its pre booked clean up service.
          </p>
          <p>
            If that sounds like your home, we can help. We carry rubbish up steps and along paths to the truck, so you do not have to.
          </p>
          <p>
            Garden waste needs extra care near bushland. Sutherland Shire Council asks residents{' '}
            <a href="https://sutherlandshire.nsw.gov.au/your-environment/bushcare/weeds" {...ext}>not to throw garden waste into bushland</a>, because it spreads weeds. Our{' '}
            <Link href="/green-waste-removal">green waste removal</Link> team takes cuttings, branches and leaves away so they are handled the right way.
          </p>

          <h2>Sutherland Shire Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Sutherland Shire Council runs a free{' '}
            <a href="https://www.sutherlandshire.nsw.gov.au/living-here/waste-and-recycling/book-a-clean-up" {...ext}>pre booked clean up service</a>. Here are the rules that matter most:
          </p>
          <ul>
            <li>Each property can book up to two clean ups per financial year.</li>
            <li>Your booking is only confirmed once you get a booking reference number.</li>
            <li>In busy periods, the wait can be more than 8 weeks.</li>
            <li>If you cancel or change your date within 7 days of collection, it still counts as one of your two clean ups.</li>
            <li>Items go out neatly on the kerb the night before your date. Putting them out earlier may lead to a fine.</li>
            <li>Mattresses and white goods must be kept apart from the rest, because a separate truck collects them.</li>
          </ul>
          <p>
            It is a good service if you can plan ahead. But if you have already used both clean ups, missed your 7 day window, or simply cannot wait two months, a private pickup is the easy answer. We come at a time that suits you, and nothing has to sit on the kerb.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Sutherland?</h2>
          <p>
            Our minimum charge is ${MIN_CHARGE} per job. Household rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, and shops and offices near the station are charged at our commercial rate of ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. Labour, loading, cleanup and disposal are all included in the price.
          </p>
          <p>
            You can get a quick figure from our <Link href="/quote-estimator">online price estimator</Link>. No skip bin, no permit and no lifting is needed. See how we compare on the{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> page.
          </p>

          <h2>Quick Answers about Sutherland Junk Removal</h2>
          <p>
            <strong>Can you collect rubbish in Sutherland today?</strong>
            <br />
            Usually, yes. Book in the morning or early afternoon and we can often offer same day rubbish removal in Sutherland.
          </p>
          <p>
            <strong>What is the best way to get rid of an old fridge?</strong>
            <br />
            Let us carry it out for you. Fridges are heavy and awkward, and council clean ups need them kept separate on the kerb. We take them straight from your kitchen or garage and send the metal for recycling where possible.
          </p>
          <p>
            <strong>Can you avoid the afternoon traffic near the station?</strong>
            <br />
            Yes. Tell us if your street gets busy, and we will book a morning time slot when we can.
          </p>
          <p>
            <strong>Do you work across the rest of the Sutherland Shire?</strong>
            <br />
            Yes. We also have local pages for <Link href="/miranda">Miranda</Link> and <Link href="/cronulla">Cronulla</Link>, and we work in Kirrawee, Jannali, Gymea, Loftus, Engadine and every other Shire suburb.
          </p>
          <p>
            Ready to clear some space in Sutherland? Ring <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or message our team on WhatsApp at{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. You can also{' '}
            <Link href="/contact">request your free quote online</Link> and we will be in touch soon. To learn more, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or see our full list of{' '}
            <Link href="/services">rubbish removal services</Link> across Sydney.
          </p>
        </>
      }
    />
  );
}
