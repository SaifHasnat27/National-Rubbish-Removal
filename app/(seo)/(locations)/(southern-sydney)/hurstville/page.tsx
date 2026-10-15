import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('hurstville');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'hurstville',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Hurstville.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Hurstville',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Hurstville.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Hurstville Made Simple</h2>
          <p>
            Hurstville has two sides. There are tall apartment towers around Forest Road and the station, and there are big family homes on the quieter streets around them. We handle rubbish removal for both, from a single couch on the 15th floor to a whole house clear out.
          </p>
          <p>
            Our crew does the heavy work. We collect from inside your home, load our truck and sweep the area clean. If English is not your first language, just send us photos on WhatsApp and we will reply with a quote.
          </p>
          <p>
            We can often collect the same day when you book in the morning. The price is agreed before we start. We are always one call away from making rubbish removal in Hurstville simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Hurstville NSW 2220</h2>
          <p>
            Hurstville is about 16 km south of the Sydney CBD and works as the business centre of the St George area. Forest Road is the main shopping strip, with Westfield Hurstville and Hurstville Central close by. Hurstville station is a major stop on the T4 and South Coast lines, and Georges River Council has its main offices here.
          </p>
          <p>
            It is also the biggest suburb we cover in Southern Sydney.{' '}
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11971" {...ext}>The 2021 Census</a> counted about 31,200 people in Hurstville. Around 6 in 10 homes are apartments and 3 in 10 are separate houses. Households are also bigger than in most nearby suburbs, with an average of 2.8 people each.
          </p>
          <p>
            That mix shapes our work. One day we clear a unit in a new tower, and the next day we clear a family home that has been full for decades.
          </p>

          <h3>High Rise Apartment Rubbish Collection</h3>
          <p>
            Hurstville keeps growing up.{' '}
            <a href="https://www.theleader.com.au/story/9226233/horizon-hurstville-95-apartments-sold-amid-sydney-demand" {...ext}>The Leader reported</a> in April 2026 on Horizon Hurstville, a 19 storey tower with 179 apartments on Forest Road, due to be finished in late 2026. New towers like this mean more people moving in and out every month.
          </p>
          <p>
            Large buildings come with their own rules. Many have a goods lift, a loading dock and set times when removals are allowed. Tell us your building&apos;s booking times, and we will plan around them. Our crew brings items down in the goods lift, uses the loading dock and leaves the area clean for the next resident. Old beds and mattresses are a common job, and our{' '}
            <Link href="/mattress-removal">mattress removal</Link> service makes them easy to get rid of.
          </p>

          <h3>Whole House Clearances for Hurstville Family Homes</h3>
          <p>
            How do you get rid of a house full of furniture? This is one of the most common questions we hear. It often comes up when a home is being sold, when a parent moves into care, or after someone passes away.
          </p>
          <p>Here is how we make it easier:</p>
          <ol>
            <li>Walk through the home first and mark anything the family wants to keep.</li>
            <li>Set aside items for family, sale or donation.</li>
            <li>Let us clear the rest, one room at a time, garage and backyard included.</li>
          </ol>
          <p>
            We are patient and respectful, especially when a family is going through a hard time. Read about our{' '}
            <Link href="/deceased-estate-clearance">deceased estate clearance</Link> and{' '}
            <Link href="/household-rubbish-removal">household rubbish removal</Link> services.
          </p>

          <h2>How to Book a Georges River Council Bulky Waste Collection</h2>
          <p>
            Many Hurstville locals ask how to schedule a big rubbish collection with council. Georges River Council lets you{' '}
            <a href="https://www.georgesriver.nsw.gov.au/Services/Waste/Kerbside-Clean-Up" {...ext}>book a bulky waste pickup</a> online or through its Waste Hotline on 1800 079 390. A few tips:
          </p>
          <ul>
            <li>Book at least two weeks ahead. Online bookings open up to nine weeks in advance.</li>
            <li>Plan around the holidays. Council does not collect from 24 December 2026 to 6 January 2027.</li>
            <li>Use your pickups before the end of the year. They do not carry over.</li>
          </ul>
          <p>
            If your date is too far away, or your load is too big, a private hard rubbish collection is the quickest fix. We work seven days a week.
          </p>

          <h2>Free E Waste and Extras Drop Off for Georges River Residents</h2>
          <p>
            We do not take electronic waste, but council does. Georges River Council runs a free{' '}
            <a href="https://www.georgesriver.nsw.gov.au/Services/Waste/E-Waste-Drop-Off" {...ext}>E Waste and Extras Drop Off</a> at Mortdale Depot, 100 Roberts Avenue, Mortdale. The next one is on Sunday 29 November 2026, from 9am to 3:30pm.
          </p>
          <p>
            You can bring TVs, computers, phones, cables, small appliances, cardboard, clean polystyrene, bikes and old child car seats. You will need proof that you live in the Georges River area.
          </p>
          <p>
            Large white goods, furniture and building materials are not accepted at the drop off. Those are exactly the things we take, so the two services work well together.
          </p>

          <h2>How Much Does Hard Rubbish Removal Cost in Hurstville?</h2>
          <p>
            We charge for the time the job takes. Residential rubbish removal is ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, with a ${MIN_CHARGE} minimum for every job. Loading, labour, cleanup and disposal fees are included. A single unit is usually quick. A full house takes longer, so we always give you a clear quote first.
          </p>
          <p>
            To get a rough idea online, use our <Link href="/quote-estimator">price estimator</Link>. For a firm quote, send us a few photos.
          </p>

          <h2>Quick Answers about Hurstville Junk Removal</h2>
          <p>
            <strong>Can you come to Hurstville today?</strong>
            <br />
            In most cases, yes. Book in the morning or early afternoon and we can usually offer same day rubbish removal in Hurstville.
          </p>
          <p>
            <strong>Can you clear out what I am not taking before moving day?</strong>
            <br />
            Yes. Broken furniture, old mattresses and anything that will not fit in your new home can go in one visit before the removalists arrive. Less to move often means a quicker and cheaper move.
          </p>
          <p>
            <strong>Can you work with my building&apos;s loading dock booking?</strong>
            <br />
            Yes. Send us your building rules and booking times, and we will arrive in your time slot.
          </p>
          <p>
            <strong>Do you cover suburbs near Hurstville?</strong>
            <br />
            Yes. We work across Penshurst, Mortdale, Beverly Hills, Bexley, Peakhurst and the rest of the St George area.
          </p>
          <p>
            Need rubbish gone from your Hurstville home? Call <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>, or send photos to our WhatsApp at{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">fill in our quote form</Link> online. To find out more about us, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or explore our{' '}
            <Link href="/services">rubbish removal services</Link> for homes, businesses and building sites.
          </p>
        </>
      }
    />
  );
}
