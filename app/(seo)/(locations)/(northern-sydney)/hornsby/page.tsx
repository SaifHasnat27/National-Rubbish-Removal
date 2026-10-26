import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('hornsby');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'hornsby',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Hornsby.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Hornsby',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Hornsby.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Hornsby Made Simple</h2>
          <p>
            Rubbish removal in Hornsby should not mean waiting months for a council date or driving loads to Thornleigh. Whether you live in a unit near the station or a house backing onto the bush, we come to you.
          </p>
          <p>
            Our crew carries everything out, from old sofas and mattresses to branches and garden waste, loads our truck and sweeps up. You do not need a car, a trailer or a strata booking.
          </p>
          <p>
            Book in the morning or early afternoon and we can usually collect the same day. You get a clear price before we start. We are always one call away from making rubbish removal in Hornsby simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Hornsby NSW 2077</h2>
          <p>
            We remove furniture, mattresses, garden waste and general junk from Hornsby apartments and houses, often on the same day you call. Hornsby is the hub of the Upper North Shore, with the town centre and station at its heart and bushland around its edges.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL11943" {...ext}>The 2021 Census</a> shows how Hornsby lives. Nearly 6 in 10 homes are apartments, compared with about 1 in 5 across NSW, and almost half have just two bedrooms. About 1 in 6 households has no car at all. Without a car, the recycling centre and the tip are hard to reach, so our crew comes to your door and does all the carrying.
          </p>
          <p>
            More apartments are on the way. In March 2026,{' '}
            <a href="https://insidelocalgovernment.com.au/hornsby-council-calls-for-govt-infrastructure-support/" {...ext}>Inside Local Government reported</a> that the NSW Government&apos;s masterplan for the Hornsby Transport Oriented Development precinct lines up with council&apos;s own town centre plan, with new towers clustered near the station. Building is already underway, including the 67 apartment Habitat Hornsby, which{' '}
            <a href="https://www.buildaustralia.com.au/projects/habitat-hornsby-answers-growing-housing-demand/" {...ext}>Build Australia reports</a> is due for completion in early 2027. Every new building brings move in days and old furniture to clear, and our junk removal crew works around your building&apos;s access rules.
          </p>

          <h3>Apartment Rubbish Removal in Hornsby</h3>
          <p>
            Council&apos;s bulky waste service depends on the height of your building. Complexes of five storeys or fewer share one monthly collection of 5 cubic metres for the whole building. In buildings of six storeys or more,{' '}
            <a href="https://www.hornsby.nsw.gov.au/__data/assets/pdf_file/0011/162002/Bulky-Waste-6-Storeys-A3.pdf" {...ext}>collections can only be booked by strata</a>, they are user pays, and any refused items are left for strata to deal with. Individual residents cannot book at all.
          </p>
          <p>
            With us, any resident can book. Our crew collects straight from your unit, storage cage or car space and carries everything out, so nothing sits in the bin room waiting for the next collection. See our{' '}
            <Link href="/unwanted-furniture-removal">Unwanted Furniture Removal</Link> service for sofas, beds, mattresses and anything else you are not taking with you. Strata managers can also book us for common area clear outs.
          </p>

          <h3>Green Waste Removal After Bushfire Clearing in Hornsby</h3>
          <p>
            If your property is in a 10/50 area, the{' '}
            <a href="https://www.rfs.nsw.gov.au/plan-and-prepare/1050-vegetation-clearing" {...ext}>NSW Rural Fire Service rule</a> lets you clear trees within 10 metres of your home and shrubs within 50 metres without approval, as long as you follow the Code of Practice. Check the RFS online tool first, because not every block qualifies.
          </p>
          <p>
            Clearing leaves big piles, and few easy ways to get rid of them. Hornsby&apos;s bulky waste collection does not take any garden waste, including tree trunks and stumps, and the green bin is only collected once a fortnight. We collect cut branches, shrubs, leaf litter and prunings in any amount, and send them to licensed facilities for recycling where possible. See our{' '}
            <Link href="/green-waste-removal">Green Waste Removal</Link> service.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>Hornsby Council Bulky Waste or a Private Hard Rubbish Collection?</h2>
          <p>
            For houses, Hornsby Shire Council offers{' '}
            <a href="https://www.hornsby.nsw.gov.au/property/waste-and-recycling/your-weekly-collection/Waste-and-Recycling-Services" {...ext}>scheduled bulky waste collections</a> twice a year. Here are the rules to know:
          </p>
          <ul>
            <li>Houses get two scheduled dates a year. Any extra booked collection is user pays.</li>
            <li>Each collection is capped at 3 cubic metres.</li>
            <li>Items go out on the weekend before your scheduled collection.</li>
            <li>Every item must be light enough for two people to lift and no longer than 2 metres. Fridge and freezer doors must be removed.</li>
            <li>
              Garden waste, building waste, asbestos, glass, mirrors, TVs, computers and hazardous waste are{' '}
              <a href="https://www.hornsby.nsw.gov.au/Property/Waste-and-recycling/Bulky-waste-collection/What-items-are-accepted-for-bulky-waste-collections" {...ext}>not accepted</a>.
            </li>
          </ul>
          <p>
            Council also says that apart from metals, wood and mattresses, everything it collects goes straight to landfill, and calls bulky waste a last resort. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>
          <p>
            So the council service suits a small pile when your date is coming up. A private hard rubbish collection suits the rest: when your next date is months away, when the pile is bigger than 3 cubic metres, or when it includes garden waste or renovation rubbish.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Hornsby?</h2>
          <p>
            Home and apartment jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour. Renovation and building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour, and every booking has a ${MIN_CHARGE} minimum. The price covers the crew, the carrying, the loading, the sweep up and the tip fees, so there are no surprises at the end.
          </p>
          <p>
            For a fast figure, try our <Link href="/quote-estimator">Quote Estimator</Link>, or send photos for a firm quote. Weighing up a skip bin? A skip still has to be filled by you and may need a permit if it sits on the street. Our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page shows how a pickup compares.
          </p>

          <h2>Quick Answers about Hornsby Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in Hornsby?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your Hornsby home the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer apartment rubbish removal in Hornsby without booking through strata?</strong>
            <br />
            Yes. Council&apos;s bulky waste for buildings of six storeys or more can only be booked by strata, but any resident can book our apartment rubbish removal directly. We work around your building&apos;s access rules, so it helps to let your building manager know when we are coming.
          </p>
          <p>
            <strong>Do you offer junk removal in Hornsby for the furniture, mattresses and rugs the Thornleigh Community Recycling Centre does not accept?</strong>
            <br />
            Yes. The{' '}
            <a href="https://www.hornsby.nsw.gov.au/Property/Waste-and-recycling/Recycling/Community-Recycling-Centre" {...ext}>Thornleigh Community Recycling Centre</a> at 29 Sefton Road only takes problem waste such as paint, gas bottles, batteries and e waste, and it refuses household textiles like rugs, pillows and doonas. Furniture and mattresses are not on its list either. Our junk removal crew handles all of those, plus garden waste and general household junk, so only your paint and gas bottles need the trip to Thornleigh.
          </p>
          <p>
            <strong>Do you offer green waste removal in Hornsby for branches and shrubs cleared under the 10/50 bushfire rule?</strong>
            <br />
            Yes. Our green waste removal crew clears cut branches, shrubs and prunings from Hornsby properties in one visit, with no bundling or cutting to size. Council&apos;s bulky waste will not take garden waste, so booking us is the quickest way to clear the pile before bushfire season.
          </p>
          <p>
            Got a Hornsby unit, house or garden to clear? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send a few photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">book your pickup online</Link> and pick a time that suits you. To see how we work, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse our{' '}
            <Link href="/services">rubbish removal services</Link> for homes, apartments and gardens.
          </p>
        </>
      }
    />
  );
}
