import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('botany');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'botany',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Botany.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Botany',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Botany.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Botany Made Simple</h2>
          <p>
            Botany is a suburb of two halves. On one side there are family homes, semis and units around Botany Road. On the other there are warehouses, workshops and yards close to the port. We clear rubbish from both, often on the same day.
          </p>
          <p>
            Point out what you want gone. Our crew turns up with a truck, does all the carrying and loading, and leaves the space swept. A spare room, a backyard full of old play gear or a warehouse floor stacked with pallets can all go in one trip.
          </p>
          <p>
            Ring before early afternoon and a same day pickup is usually possible. The price is locked in before we start. We are always one call away from making rubbish removal in Botany simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Botany NSW 2019</h2>
          <p>
            Botany lies along the northern shore of Botany Bay, roughly 11 km south of the Sydney CBD and just east of Sydney Airport. Shops and cafes line Botany Road, and Sir Joseph Banks Park offers walking tracks, wetlands and a big playground. To the south and east is Port Botany, Sydney&apos;s main container port, along with the industrial streets that serve it.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10515" {...ext}>The 2021 Census</a> counted about 13,000 people in Botany. About half of homes are flats or apartments, but almost 3 in 10 are separate houses and another 2 in 10 are semis, terraces or townhouses. Half of all families are couples with children, and the average household has 2.6 people. Around 4 in 10 homes are being paid off with a mortgage.
          </p>
          <p>
            So Botany is full of busy families who are settled in for the long haul, right next door to a working industrial area. We have built our Botany rubbish collection service around both.
          </p>

          <h3>Family Home and Backyard Rubbish Removal</h3>
          <p>
            Kids grow fast, and the stuff they outgrow piles up even faster. Cots, high chairs, bunk beds, bikes and boxes of toys end up in the garage. Outside, it might be a rusty trampoline, a broken cubby house or a worn out outdoor setting.
          </p>
          <p>
            We take all of it. Our crew can pull apart larger items like trampolines and play sets on site, then carry everything through the side gate to the truck. Good items are set aside for donation where possible. See our{' '}
            <Link href="/household-rubbish-removal">household rubbish removal</Link> service for more.
          </p>
          <p>
            Got a garden that has run wild? Branches, palm fronds, hedge cuttings and old turf can go in the same load. Our{' '}
            <Link href="/green-waste-removal">green waste removal</Link> team does not need anything bagged or bundled. We just load it up.
          </p>

          <h2>Commercial Rubbish Collection for Botany Warehouses and Workshops</h2>
          <p>
            Botany and nearby Banksmeadow are home to a lot of freight, storage and trade businesses. When a tenant moves out, a fit out changes or stock is written off, the mess can fill a whole loading bay.
          </p>
          <p>Here is what we often clear for local businesses:</p>
          <ul>
            <li>Broken pallets, crates and timber offcuts</li>
            <li>Old racking, shelving and workbenches</li>
            <li>Office desks, chairs and filing cabinets</li>
            <li>Bulk cardboard, plastic wrap and packaging</li>
            <li>Damaged or old stock that cannot be sold</li>
          </ul>
          <p>
            Before you hire anyone, check they are allowed to do the job. The Australian Government&apos;s business licence finder notes that in the Bayside area, anyone who{' '}
            <a href="https://ablis.business.gov.au/service/nsw/approval-to-transport-waste-through-a-public-place-bayside-council/10965" {...ext}>collects waste for a fee needs approval</a>, unless they are already licensed through another agency.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards. If your site needs copies of our licences or insurance before we arrive, just ask. Pallets and timber are a big part of these jobs, and our{' '}
            <Link href="/timber-removal">timber removal</Link> service sends clean wood for recycling where possible.
          </p>

          <h2>Bayside Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Bayside Council runs{' '}
            <a href="https://www.bayside.nsw.gov.au/index.php/services/waste-recycling/household-clean-dates" {...ext}>free household clean ups</a> on set dates for each zone. They are a great free option, but they come with a fair bit of prep work. Council asks you to:
          </p>
          <ul>
            <li>Stack items in a neat box shape that two people can safely lift.</li>
            <li>Keep the pile within 3 cubic metres, which is about one box trailer.</li>
            <li>Bundle, tie and bag green waste, and remove any spikes.</li>
            <li>Take the doors off fridges and other white goods.</li>
            <li>Remove locks and hinges from old doors.</li>
            <li>Take batteries out of old toys and appliances.</li>
            <li>Put everything on the nature strip, not in the rear lane or gutter.</li>
          </ul>
          <p>
            If you have the time, the space and a date coming up, that works well. If not, a private pickup takes all of that off your plate. We do the sorting and lifting, we take loads bigger than a trailer, and we collect straight from your backyard, garage or rear lane access. Nothing has to wait on the footpath.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Botany?</h2>
          <p>
            We have three simple hourly rates. Homes are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, businesses are ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour, and building and renovation waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour. There is a ${MIN_CHARGE} minimum for every job, and every quote already covers the crew, the truck, the sweep up and the tip.
          </p>
          <p>
            Use our <Link href="/quote-estimator">online quote estimator</Link> for a fast figure. For a warehouse or larger job, send us photos and we will give you a fixed quote. You also skip the skip bin, the permit and the days of waiting. Here is how our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> compare.
          </p>

          <h2>Quick Answers about Botany Junk Removal</h2>
          <p>
            <strong>Can you clear a warehouse in Botany or Banksmeadow today?</strong>
            <br />
            Often, yes. Call us in the morning and tell us roughly how much there is. We can usually send a crew the same day, or book a time outside your trading hours.
          </p>
          <p>
            <strong>What is the minimum charge for junk removal?</strong>
            <br />
            Our minimum charge is ${MIN_CHARGE} per job. That covers the crew, the truck, the loading and the disposal fees, so you are not hit with extra costs later.
          </p>
          <p>
            <strong>How do I get rid of lots of garden waste at once?</strong>
            <br />
            Book one pickup with us. We load branches, cuttings, leaves and turf straight from your yard, with no bagging or bundling needed.
          </p>
          <p>
            <strong>Do you also cover Pagewood, Hillsdale, Eastlakes and Mascot?</strong>
            <br />
            Yes. We work right across the Bayside area at the same hourly rates. Just give us your address when you{' '}
            <Link href="/contact">book your rubbish removal</Link>, and we will lock in a time that suits you.
          </p>
          <p>
            Have a Botany home, yard or warehouse that needs clearing? Call <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or WhatsApp your photos to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. Or{' '}
            <Link href="/contact">send your job details through our website</Link> and our team will come back to you with a price. Want to know more first? Visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or check out every{' '}
            <Link href="/services">rubbish removal service</Link> we offer for Sydney homes and businesses.
          </p>
        </>
      }
    />
  );
}
