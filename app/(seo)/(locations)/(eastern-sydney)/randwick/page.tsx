import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('randwick');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'randwick',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Randwick.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Randwick',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Randwick.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Randwick Made Simple</h2>
          <p>
            Randwick never really stops. Hospital staff head to work at all hours, students move in and out each semester, and the shops around the Junction stay busy all week. Your rubbish removal should fit around that, not the other way round.
          </p>
          <p>
            We start as early as 6am on weekdays and keep going until 9pm, seven days a week. Our crew comes to your unit, terrace or share house, does every bit of the carrying and loading, then leaves the place swept.
          </p>
          <p>
            Ring before early afternoon for a pickup that same day. You will have a fixed price before the first item moves. We are always one call away from making rubbish removal in Randwick simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Randwick NSW 2031</h2>
          <p>
            Randwick is about 6 km south east of the Sydney CBD and is the home of Randwick City Council. Belmore Road is the main shopping street, Avoca Street meets Alison Road at Randwick Junction, and The Spot is known for its cafes and the art deco Ritz Cinema. The suburb also takes in Royal Randwick Racecourse, the Prince of Wales Hospital and the end of the light rail line.
          </p>
          <p>
            About 28,900 people lived in Randwick at{' '}
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13325" {...ext}>the 2021 Census</a>. Units make up close to 70% of local homes, about half are rented, and over 2,300 residents were studying at university. Hospitals were the top industry people worked in.
          </p>
          <p>
            So Randwick is full of renters, students and shift workers. That shapes how our Randwick rubbish collection crew works, from the hours we keep to the jobs we do most.
          </p>

          <h3>Share House and Student Rubbish Removal</h3>
          <p>
            UNSW sits right next door, with around 70,000 students. In March 2026, the{' '}
            <a href="https://www.abc.net.au/news/2026-03-30/randwick-council-calls-for-ban-to-commercial-student-housing/106465546" {...ext}>ABC reported</a> that share houses near the university were &ldquo;absolutely flooded with applicants.&rdquo; When rooms turn over that fast, so does the furniture.
          </p>
          <p>
            At the end of a lease, housemates often leave behind beds, desks, chairs, broken lamps and bags of stuff nobody claims. We clear the lot in one visit, so the house is ready for the final inspection and the bond is not held up by a pile of junk. Our{' '}
            <Link href="/end-of-lease-rubbish-removal">end of lease rubbish removal</Link> page explains how it works.
          </p>
          <p>
            Splitting the bill? Tell us when you book and we can give you one clear quote to share between housemates.
          </p>

          <h3>Early and Late Pickups for Shift Workers</h3>
          <p>
            With so many locals working at the hospitals, a 9 to 5 pickup does not suit everyone. That is why we work long hours:
          </p>
          <ul>
            <li>Monday to Friday, 6am to 9pm</li>
            <li>Saturday, 7am to 9pm</li>
            <li>Sunday, 8am to 9pm</li>
          </ul>
          <p>
            Coming off a night shift? Book a morning slot and we will be done before you sleep. Starting an afternoon shift? We can come after breakfast and be gone by lunch. You can also leave us clear instructions and send photos on WhatsApp, so we know exactly what is going.
          </p>

          <h2>Randwick Recycling Centre: What It Takes and What We Take</h2>
          <p>
            Many locals search for the Randwick Community Recycling Centre, and it is a great free option for tricky items. Here is what to know about the{' '}
            <a href="https://www.randwick.nsw.gov.au/services/rubbish-and-recycling/recycling-centre/about-recycling-centre" {...ext}>Randwick Recycling Centre</a>:
          </p>
          <ul>
            <li>It is at 72 Perry Street, Matraville.</li>
            <li>New trial hours started on 25 July 2026. It is open 7am to 4pm on Monday, Tuesday, Thursday and Friday, and 7am to 2pm on weekends. It is closed on Wednesdays and public holidays.</li>
            <li>It takes e waste, batteries, paint, gas bottles, light globes, clothes and textiles.</li>
            <li>Randwick residents can also drop off old fridges, washing machines and other white goods, with ID.</li>
            <li>It does not take green waste, and sorting is required before you arrive.</li>
          </ul>
          <p>
            The centre works well if you have a car and a few small items. But it is a drop off service, so you still have to load, drive and unload yourself. It also does not list furniture, mattresses or renovation rubbish.
          </p>
          <p>
            That is where we come in. We collect sofas, beds, mattresses, wardrobes, garden waste and building rubbish straight from your home, then deliver every load to a licensed sorting and transfer facility in Sydney, where as much as 95% gets a second life through recycling or donation. We do not take e waste, so the recycling centre is the right place for your old TV or laptop.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Randwick?</h2>
          <p>
            Our minimum charge is ${MIN_CHARGE} per job. After that, home rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour and business jobs are ${PRICES['commercial-rubbish-removal'].hourlyRate} per hour. Labour, loading, cleaning and tip costs are all built into the quote.
          </p>
          <p>
            For a fast guide, use our <Link href="/quote-estimator">rubbish removal quote estimator</Link>. Street parking near the Junction and the hospitals is tight, so a skip bin can be hard to place. Read why a pickup often beats a skip on our{' '}
            <Link href="/skip-bin-alternatives">skip bin alternatives</Link> guide.
          </p>

          <h2>Quick Answers about Randwick Junk Removal</h2>
          <p>
            <strong>Can you come before or after my hospital shift?</strong>
            <br />
            Yes. We work from 6am on weekdays and until 9pm every day. Tell us your shift times when you book and we will pick a slot that works for you.
          </p>
          <p>
            <strong>Can you clear a whole share house when everyone moves out?</strong>
            <br />
            Yes. We clear every room, the backyard and any shared spaces in one visit. Send us photos for a single quote the whole house can split.
          </p>
          <p>
            <strong>How can I dispose of furniture in Randwick?</strong>
            <br />
            The quickest way is to let our crew collect it. We carry it out of your home, donate what we can, and take the rest away. Our{' '}
            <Link href="/unwanted-furniture-removal">unwanted furniture removal</Link> service handles everything from one chair to a full house.
          </p>
          <p>
            <strong>Do you also work in Kensington, Kingsford and Clovelly?</strong>
            <br />
            Yes. Every part of Randwick City gets the same rates and service, including <Link href="/maroubra">Maroubra</Link>, where we explain how the council clean up works. Just give us your address when you{' '}
            <Link href="/contact">book online</Link>.
          </p>
          <p>
            Got a Randwick unit, terrace or share house to clear? Call <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> at a time that suits your shift, or WhatsApp photos to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a>. Or{' '}
            <Link href="/contact">send us your job online</Link> and we will come back with a price. You can read more about{' '}
            <Link href="/">{BUSINESS.name}</Link> and the{' '}
            <Link href="/services">rubbish removal services</Link> we run for homes, renters and businesses across Sydney.
          </p>
        </>
      }
    />
  );
}
