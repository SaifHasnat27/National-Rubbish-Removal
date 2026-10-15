import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('mascot');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'mascot',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Mascot.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Mascot',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Mascot.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Mascot Made Simple</h2>
          <p>
            Mascot moves fast. Planes overhead, new towers near the station and people moving in and out every weekend. When something big needs to go, you do not want to wait weeks for a council date or wrestle a couch into a lift on your own.
          </p>
          <p>
            That is our job. We come to your apartment, office or shop, carry out the rubbish, load the truck and clean up after ourselves. One old bed or a full office floor, it all goes in a single visit.
          </p>
          <p>
            Ring us before midday and a same day pickup is often possible. Your price is confirmed before any lifting starts. We are always one call away from making rubbish removal in Mascot simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Mascot NSW 2020</h2>
          <p>
            Mascot is about 7 km south of the Sydney CBD and is home to Sydney Airport. Shops line Botany Road, Coward Street holds the council chambers and the Qantas head office, and the streets around Mascot station are filled with high rise apartments and offices.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12529" {...ext}>The 2021 Census</a> counted about 21,600 people in Mascot. Three quarters of local homes are units, over half are rentals, and half of all residents are 30 or younger. About 6 in 10 people also speak a language other than English at home.
          </p>
          <p>
            The growth is not slowing down. In October 2026,{' '}
            <a href="https://urbandigest.com.au/ssd-96054212-900-million-176-o-riordan-street-and-247-263-king-street-housing-proposal/" {...ext}>Urban Digest reported</a> on a $900 million plan for around 1,400 apartments on old industrial land along O&apos;Riordan Street. More towers mean more moving days, and that is where our Mascot junk removal crew comes in.
          </p>

          <h3>High Rise Apartment Rubbish Collection</h3>
          <p>
            Getting a wardrobe out of a tower is not as simple as carrying it to the lift. Many NSW strata schemes have a bylaw that says you must give the strata committee notice before you move furniture or large objects through common property. You can see an example in the{' '}
            <a href="https://www.austlii.edu.au/au/legis/nsw/consol_reg/ssmr2016333/sch2.html" {...ext}>standard NSW strata bylaws</a> for older schemes. Newer buildings usually have their own rules, with lift bookings and set loading times.
          </p>
          <p>
            We work inside those rules. Send us your building&apos;s move times and we will book around them. Our crew protects the lift, uses the loading dock and takes everything straight to the truck. Building managers can also book us to clear bin rooms and basement cages. Find out how our{' '}
            <Link href="/strata-rubbish-removal">strata rubbish removal</Link> service.
          </p>

          <h3>Furniture Removal for Mascot Renters</h3>
          <p>
            With most Mascot homes rented, leases are ending somewhere in the suburb every week. Moving to a smaller place, heading overseas or moving in with a partner often means the bed, desk and sofa have to go.
          </p>
          <p>
            We take what you are not keeping, from a single bedside table to a whole unit of furniture. Usable items are donated where possible. See our{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> page for the full list.
          </p>

          <h2>Office and Commercial Rubbish Removal Near Sydney Airport</h2>
          <p>
            Mascot is packed with offices, airport hotels, cafes and restaurants. When a business refits, downsizes or moves out, the old gear has to go fast so the next tenant can move in.
          </p>
          <p>
            We clear office desks, chairs, partitions, filing cabinets and meeting tables. We also remove hotel beds and mattresses during a room refresh, and old tables, chairs and shelving from cafes and shops. We can work early mornings, late evenings or on weekends, so your business stays open. Our{' '}
            <Link href="/retail-strip-out-removal">retail strip out removal</Link> team leaves the space empty and swept.
          </p>
          <p>
            One thing to plan for. We do not take computers, monitors or other electronic waste, so set those aside for a separate e waste recycler before we arrive.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>Bayside Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Bayside Council runs four free clean ups a year on dates set by zone. For 2026, council sent out{' '}
            <a href="https://www.bayside.nsw.gov.au/your-council/latest-news/2026-bayside-waste-calendar-rollout" {...ext}>new waste calendars</a> with the clean up dates on them. But if you live in a building with more than 30 units, you will not get a paper calendar. You will need to check the Bayside Waste Services app or call council on 1300 581 299.
          </p>
          <p>
            Living in a tower also makes a council clean up harder. You still have to carry everything down yourself, find a spot outside that does not block the footpath, and only put it out in the short window before your date.
          </p>
          <p>
            If you would rather skip all of that, book a private pickup. Our crew picks up directly from your unit, office or storage cage on a day that suits you, and nothing has to sit on the street.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Mascot?</h2>
          <p>
            Rubbish removal for homes costs ${PRICES['residential-rubbish-removal'].hourlyRate} per hour and business jobs are ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. Every job has a ${MIN_CHARGE} minimum, and the cost of labour, loading, cleaning up and disposal is built into your quote.
          </p>
          <p>
            Check our <Link href="/quote-estimator">price estimator</Link> for a quick idea, or send us photos for a firm figure. There is rarely space for a skip bin outside a Mascot tower, so most people find our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> a lot easier.
          </p>

          <h2>Quick Answers about Mascot Junk Removal</h2>
          <p>
            <strong>Can you remove rubbish from a Mascot high rise today?</strong>
            <br />
            Usually, yes. Call in the morning with your building&apos;s lift and loading rules, and we will try to book a same day time that fits them.
          </p>
          <p>
            <strong>Can I put my extra rubbish in my neighbour&apos;s bin?</strong>
            <br />
            Not without asking. The standard NSW strata bylaws say you must not put anything in another lot&apos;s bin without permission. If you have too much for your own bin, let our crew take the overflow away in one trip.
          </p>
          <p>
            <strong>Who can pick up white goods for free?</strong>
            <br />
            Bayside clean ups take fridges and washing machines on your zone&apos;s date, but you must get them to the kerb with the doors off. If you need it gone sooner, or carried out of your unit for you, we can collect it the same day.
          </p>
          <p>
            <strong>Do you also cover Rosebery, Alexandria and Eastlakes?</strong>
            <br />
            Yes. Every suburb around the airport gets the same hourly rates and the same service. Tell us your suburb when you{' '}
            <Link href="/contact">book online</Link> and we will plan the pickup around your building.
          </p>
          <p>
            Moving out, refitting an office or just running out of space in Mascot? Call <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or message us on WhatsApp at{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. You can also{' '}
            <Link href="/contact">request a quote through our website</Link> and our team will reply with a price. Learn more about{' '}
            <Link href="/">{BUSINESS.name}</Link>, or browse our{' '}
            <Link href="/services">rubbish removal services</Link> for homes and businesses across Sydney.
          </p>
        </>
      }
    />
  );
}
