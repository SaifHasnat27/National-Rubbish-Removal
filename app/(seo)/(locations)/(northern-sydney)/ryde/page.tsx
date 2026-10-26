import { buildLocationMetadata } from '@/components/seo/lib/locationSeoMetas';
import LocationPage from '@/components/seo/template/locationpages';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import { PRICES, MIN_CHARGE } from '@/lib/prices';

export const metadata = buildLocationMetadata('ryde');

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Page() {
  return (
    <LocationPage
      copy={{
        slug: 'ryde',
        services: {
          heading: 'Professional Rubbish Removal Services',
          subheading: 'Hard rubbish collection for residential, commercial and construction properties in Ryde.',
        },
        priceHeading: 'Estimate Rubbish Removal Cost',
        process: {
          heading: 'Hard Rubbish Collection Process',
          subheading: 'Junk removal in four easy steps.',
        },
        cta: {
          heading: 'Book Rubbish Removal in Ryde',
          subheading: 'Call or book online to secure your rubbish collection today.',
        },
        contact: {
          heading: 'Get In Touch',
          subheading: 'Reach out now for a fast quote or same day rubbish removal in Ryde.',
        },
      }}
      shortArticle={
        <>
          <h2>Rubbish Removal in Ryde Made Simple</h2>
          <p>
            Rubbish removal in Ryde gets easier when you do not have to squeeze everything into one trailer load. Old sofas, the desk from the spare room, a broken fridge and the boxes stacked in the garage can all go in a single visit.
          </p>
          <p>
            Our crew comes to your house or unit, lifts and carries everything, loads our truck and leaves the space swept. There is no sorting into piles, no labels and no waiting for your bin day.
          </p>
          <p>
            Call in the morning or early afternoon and we can usually collect the same day. You get a clear price before we start. We are always one call away from making rubbish removal in Ryde simple and effortless.
          </p>
        </>
      }
      longArticle={
        <>
          <h2>Local Rubbish Removal for Ryde NSW 2112</h2>
          <p>
            We clear unwanted furniture, home office gear, appliances and general junk from Ryde houses and apartments, usually on the same day you call. Our trucks work right across the suburb, from the streets around Top Ryde to the homes and unit blocks along Victoria Road.
          </p>
          <p>
            <a href="https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13469" {...ext}>The 2021 Census</a> shows a young suburb. The median age in Ryde is 36, compared with 39 across NSW, and about 3 in 10 residents are aged 25 to 39. More than half of all homes are apartments, and most have just one or two bedrooms. In a small home, one new sofa or a baby&apos;s cot can push the old furniture out, and our junk removal crew takes it away before it takes over the balcony.
          </p>
          <p>
            Ryde is also growing fast. The NSW Government has set the City of Ryde a{' '}
            <a href="https://www.planning.nsw.gov.au/the-planning-system/housing/housing-targets/ryde-councils-snapshot" {...ext}>target of 11,600 new homes</a> by 2029, and{' '}
            <a href="https://www.northshorelorikeet.com.au/p/infrastructure-infrastructure-infrastructure-city-of-ryde-calls-for-more-as-it-surpasses-housing-tar" {...ext}>North Shore Lorikeet reports</a> that the area is already ahead of its building schedule, with councillors now calling for more state infrastructure. Every new building means more people moving in and out, and every move leaves something behind for us to clear.
          </p>

          <h3>Home Office Furniture Removal in Ryde</h3>
          <p>
            On Census day in 2021, 43% of working Ryde residents worked from home, compared with 31% across NSW. Spare rooms became offices, and as those setups change, old desks, worn out chairs, filing cabinets and bookshelves start to pile up. We take them all, whole or flat packed, and carry them out from upstairs rooms and tight hallways. See our{' '}
            <Link href="/unwanted-furniture-removal">Unwanted Furniture Removal</Link> service.
          </p>
          <p>
            Running a small business from home or a shopfront? City of Ryde does not let business or commercial properties use its clean up at all. Our{' '}
            <Link href="/office-rubbish-removal">Office Rubbish Removal</Link> service clears desks, shelving, archive boxes and fit out rubbish at a time that suits your trading hours. We do not take computers, monitors or printers, but council runs a separate{' '}
            <a href="https://www.ryde.nsw.gov.au/Environment-and-Waste/Waste-and-Recycling/Other-Services/Hazardous-Waste/Television-and-Computer-Collection-Service" {...ext}>free TV and computer collection</a> for residents.
          </p>

          <h3>Heavy and Oversized Items the Council CleanUp Leaves Behind</h3>
          <p>
            The council clean up only takes furniture that two people can lift and that is no longer than 2 metres. Pianos are refused outright, and council&apos;s advice is to contact a waste removal company. Timber is refused too, and so are built in wardrobes and cabinetry, which council counts as building waste.
          </p>
          <p>
            That is where we come in. Our crew removes pianos, solid timber furniture, long dining tables and anything pulled out during a renovation, with the right equipment and enough hands to move them safely. See our{' '}
            <Link href="/timber-removal">Timber Removal</Link> and{' '}
            <Link href="/building-materials-disposal">Building Materials Disposal</Link> services.
          </p>
          <p>
            {BUSINESS.name} is a fully licensed waste carrier with public liability insurance. We are{' '}
            <a href="https://cm3.com.au/contractors" {...ext}>Cm3 certified</a>, which means our licences, insurance and safety practices have been independently checked. We are also{' '}
            <a href="https://www.iso.org/certification.html" {...ext}>ISO certified</a>, so the way we run our business meets international standards.
          </p>

          <h2>City of Ryde Clean Up or a Private Hard Rubbish Collection?</h2>
          <p>
            City of Ryde gives each household up to five free{' '}
            <a href="https://www.ryde.nsw.gov.au/Environment-and-Waste/Waste-and-Recycling/Household-Waste-Services/Pre-Booked-Household-CleanUp-Collection" {...ext}>Household CleanUp collections</a> a year. Before you book, it helps to know the rules:
          </p>
          <ul>
            <li>Each collection is capped at 1.5 cubic metres, which council describes as one box trailer load.</li>
            <li>Bookings must be made at least 10 business days ahead, and they fill fast around holidays.</li>
            <li>Collections only happen on your regular bin day.</li>
            <li>Items must be sorted into three piles (metals, garden organics and general waste) and labelled with your booking details.</li>
            <li>Items go out exactly one day before collection. Putting them out early, or without a booking, can lead to fines over $2,000.</li>
            <li>Fridges and freezers need a separate booking, and TVs and computers have their own collection.</li>
            <li>Garden waste must be bundled, tied and thinner than 8cm. Garden waste in bags goes to landfill.</li>
          </ul>
          <p>
            Anything the clean up refuses has to go to the Cleanaway resource recovery centre on Wicks Road in North Ryde, where you load, drive and pay the fees yourself. For building and trade waste, council&apos;s own advice is to hire a skip bin or contact a waste removal company.
          </p>
          <p>
            A private hard rubbish collection skips the sorting, the labels and the wait. Every load we collect goes to licensed Sydney sorting and transfer facilities, and up to 95% of what we collect is recycled or donated where possible.
          </p>

          <h2>How Much Does Rubbish Removal Cost in Ryde?</h2>
          <p>
            Home and apartment jobs are ${PRICES['residential-rubbish-removal'].hourlyRate} per hour. Renovation and building waste is ${PRICES['construction-rubbish-removal'].hourlyRate} per hour, and every booking has a ${MIN_CHARGE} minimum. The price includes the crew, the lifting, the sweep up and the tip fees, so you know the cost before we start.
          </p>
          <p>
            For a quick figure, try our <Link href="/quote-estimator">Quote Estimator</Link>, or send photos for a firm quote. Council suggests a skip bin for building waste, but before you book one, read our{' '}
            <Link href="/skip-bin-alternatives">Skip Bin Alternatives</Link> page. With us there is no bin on your driveway and nothing to fill yourself.
          </p>

          <h2>Quick Answers about Ryde Junk Removal</h2>
          <p>
            <strong>Do you offer same day rubbish removal in Ryde?</strong>
            <br />
            Most days, yes. Call us in the morning or early afternoon and our rubbish removal crew can usually be at your Ryde home or business the same day, weekends included.
          </p>
          <p>
            <strong>Do you offer junk removal in Ryde for old fridges and freezers?</strong>
            <br />
            Yes. Our junk removal crew carries old fridges and freezers out from the kitchen, laundry or garage of Ryde homes. The City of Ryde clean up does not take fridges or freezers and needs a separate booking, but we can usually come the same day and send them for recycling where possible.
          </p>
          <p>
            <strong>Do you offer hard rubbish collection in Ryde for pianos?</strong>
            <br />
            Yes. City of Ryde refuses pianos in its clean up and tells residents to contact a waste removal company. Our hard rubbish collection crew handles pianos with the right equipment and enough hands to move them safely down steps and through doorways.
          </p>
          <p>
            <strong>Can rubbish removal in Ryde include paint and chemicals?</strong>
            <br />
            No. Our rubbish removal service cannot take paint, chemicals, solvents or gas bottles. City of Ryde accepts household chemicals for free at its{' '}
            <a href="https://www.ryde.nsw.gov.au/Environment-and-Waste/Waste-and-Recycling/Other-Services/Hazardous-Waste/Household-Chemical-CleanOut" {...ext}>Household Chemical CleanOut</a> events. Set those aside, and we will clear everything else from your Ryde home in the same visit.
          </p>
          <p>
            Have a Ryde home, office or garage to clear? Call us on <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a> or send a few photos on WhatsApp to{' '}
            <a href={BUSINESS.whatsappLink} {...ext}>{BUSINESS.whatsapp}</a> for a quick quote. You can also{' '}
            <Link href="/contact">book your pickup online</Link> and choose a time that works for you. To learn more about how we work, visit the{' '}
            <Link href="/">{BUSINESS.name}</Link> home page or browse our{' '}
            <Link href="/services">rubbish removal services</Link> for homes, offices and renovations.
          </p>
        </>
      }
    />
  );
}
