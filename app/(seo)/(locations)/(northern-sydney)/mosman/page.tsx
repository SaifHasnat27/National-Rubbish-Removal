import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('mosman');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'mosman',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Mosman.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Mosman',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Mosman.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Mosman Made Simple</h2>
          <p>
            Rubbish removal in Mosman often means clearing a home that has been lived in for a long time. Big wardrobes, old sideboards, boxes in the garage and a garden that has got away from you. We take care of all of it.
          </p>
          <p>
            Our crew comes to your house or unit, carries everything out, loads our truck and sweeps up before we leave. We take the heavy pieces the council clean up will not, and we set good items aside for donation where we can.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price before we start. We are always one call away from making rubbish removal in Mosman simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Mosman NSW 2088</h2>
          <p>
            We help Mosman families clear out homes, garages and gardens, from a single wardrobe to a whole house. Mosman sits about 8 km north east of the Sydney CBD, on a peninsula between Sydney Harbour and Middle Harbour, with shops along Military Road and around Spit Junction. Many homes here have been in the same hands for decades, and that is the kind of job our junk removal crew does best.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL12749" {...ext}>The 2021 Census</a> shows why. The median age in Mosman is 45, compared with 39 across NSW, and about 1 in 5 locals are 65 or older. Nearly 4 in 10 homes are owned outright, and more than 1 in 4 have four or more bedrooms. Large homes that stay in one family fill up over the years, so when it is time to move, there is a lot to clear. Our crew does all the lifting and carrying, so you or your parents do not have to.
          </p>
          <p>
            Many of those moves are to smaller homes nearby. In August 2026, Mosman Council{' '}
            <a href="https://mosman.nsw.gov.au/node/13591" {...ext}>endorsed a draft Masterplan</a> for about 4,700 more homes, which is now with the State Government for review. That same month,{' '}
            <a href="https://www.theweeklysource.com.au/twilight-aged-care-to-launch-30m-luxury-retirement-development-in-mosman" {...ext}>The Weekly SOURCE reported</a> that the local planning panel had approved 22 new independent living units near the town centre. When someone moves from a family home into an apartment or a retirement village, most of the furniture cannot come too. We clear what is left, so the house is ready for sale or for the next owner.
          </p>

          <h3>Downsizing and Deceased Estate Clearance in Mosman</h3>
          <p>
            Nearly 1 in 3 Mosman households is one person living alone. When that person moves into care or passes away, the family is often left to sort a full house while dealing with a lot else. We make that part easier.
          </p>
          <p>
            Show us what the family is keeping, in person or with a few photos, and we will take care of the rest. That includes the bedrooms, the garage and the garden shed. Good furniture and household items are set aside for donation where possible. Our{' '}
            <Link href="/deceased-estate-clearance">Deceased Estate Clearance</Link> team works at your pace and with respect, and our{' '}
            <Link href="/unwanted-furniture-removal">Unwanted Furniture Removal</Link> service handles the big pieces.
          </p>
          <p>
            Big pieces matter here. Mosman has around 500{' '}
            <a href="https://mosman.nsw.gov.au/planning-and-development/heritage/listings" {...ext}>heritage items and 13 heritage conservation areas</a>, and older homes often hold solid timber wardrobes, sideboards and dining tables. These are exactly the items the council clean up leaves behind, because nothing over 30kg or longer than 1.5 metres is collected. Our crew lifts them, takes them apart if needed and carries them out with care for old floors, stairs and doorways.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h3>Green Waste Removal for Mosman Gardens</h3>
          <p>
            Mosman gardens can produce a lot of green waste, but the council green bin is only collected once a month. Bundles must be tied with natural string and weigh under 20kg, and branches must be shorter than 1 metre and thinner than 100mm. Soil, tree stumps and green waste in plastic bags are not collected.
          </p>
          <p>
            The free alternative is driving it yourself to Kimbriki at Terrey Hills, which takes up to 300kg per visit. Without a ute or trailer, that is not much help. Our crew takes garden waste in any shape. Long branches, loose clippings, dead shrubs and stacks of empty pots can all go in one trip. See our{' '}
            <Link href="/green-waste-removal">Green Waste Removal</Link> service, and if the garage needs clearing at the same time, our{' '}
            <Link href="/garage-clean-out">Garage Clean Out</Link> service too.
          </p>

          <h2>Mosman Council Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            Mosman Council runs a free{' '}
            <a href="https://mosman.nsw.gov.au/residents/waste-and-recycling/household-clean-up" {...ext}>household clean up</a> twice a year, on dates set for your zone. It allows up to 5 cubic metres per collection, which is generous. Here are the rules to know:
          </p>
          <ul>
            <li>Items go out in front of your property the night before collection, without blocking footpaths or driveways.</li>
            <li>No single item can weigh more than 30kg or have a side longer than 1.5 metres.</li>
            <li>Building and demolition waste, bricks, concrete, tiles, vegetation, hot water units and tyres are not accepted.</li>
            <li>Paint, chemicals, asbestos and e waste are also refused.</li>
            <li>Extra paid collections are limited to four a year and need three working days&apos; notice.</li>
          </ul>
          <p>
            Council also says all non metal items from its clean ups end up in landfill. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>
          <p>
            So the council service suits a pile of light items when your zone&apos;s date is coming up. A private hard rubbish collection suits the rest: heavy furniture, long tables, renovation leftovers, a full garden clean up, or a house that needs to be empty before settlement.
          </p>
          <p>
            Mosman Council has also banned e waste from landfill, so TVs and computers are never taken in clean ups. We do not take e waste either, so check the council&apos;s{' '}
            <a href="https://mosman.nsw.gov.au/residents/waste-and-recycling/e-waste" {...ext}>e waste page</a> for the next free drop off day.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Mosman?</h2>
          <p>
            House and apartment jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour, with a ${MIN_CHARGE} minimum per booking. Renovation and building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour. The price covers the crew, the truck, the carrying, the clean up and the tip fees, so even a whole house clear out is quoted upfront with nothing added later.
          </p>
          <p>
            For a rough figure, use our <Link href="/quote-estimator">Quote Estimator</Link>. For an estate or a large home, send us photos and we will give you a firm quote. A skip bin still needs someone to fill it, and one left on the street may need a council permit. Our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page explains the difference.
          </p>

          <h2>Quick Answers about Mosman Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in Mosman?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your Mosman home the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer deceased estate rubbish removal and downsizing clear outs in Mosman?</strong>
            <br />
            Yes. Our crew clears whole Mosman homes, from a single room to the garage and garden shed, in one visit or in stages that suit the family. Show us what you are keeping and we handle the rest, setting good items aside for donation. See our{' '}
            <Link href="/deceased-estate-clearance">Deceased Estate Clearance</Link> service.
          </p>
          <p>
            <strong>Do you offer junk removal in Mosman for heavy furniture over 30kg, like wardrobes and sideboards?</strong>
            <br />
            Yes. Mosman Council&apos;s{' '}
            <a href="https://mosman.nsw.gov.au/residents/waste-and-recycling/household-clean-up" {...ext}>household clean up</a> refuses anything over 30kg or longer than 1.5 metres. Our junk removal crew lifts solid wardrobes, sideboards and long dining tables, takes them apart if needed and carries them out with care for old floors, stairs and doorways.
          </p>
          <p>
            <strong>Does your rubbish removal in Mosman include donating good condition furniture?</strong>
            <br />
            Yes, where possible. On every Mosman rubbish removal job we set aside usable furniture and household items for donation, and send metals, timber and cardboard for recycling. Up to 95% of what we collect is recycled or donated, so less of your home ends up in landfill.
          </p>
          <p>
            Clearing a Mosman home, garden or garage? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">arrange your pickup online</Link> and we will find a time that suits the family. Want to know more about how we work? Visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or look through our full range of{' '}
            <Link href="/services">rubbish removal services</Link> for homes, estates and gardens.
          </p>
        </>
      }
    />
  );
}
