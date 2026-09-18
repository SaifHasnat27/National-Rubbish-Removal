// ─── Types ───────────────────────────────────────────────
export interface ServiceBullet {
  text: string;            // Short feature title (as shown on /services checklist)
  desc: string;            // Rich description of the feature
}

export interface Service {
  id: string;
  name: string;
  shortDesc: string;       // Used on homepage service cards
  longDesc: string[];      // Detailed paragraphs on /services page
  bullets: ServiceBullet[];// Feature list (title + description) on /services page
  image: string;           // Path to service image
  cardImage: string;       // Homepage service card image (separate field so it can differ later)
  iconName: string;        // Lucide icon component name (mapped in consuming components)
}

// ─── Data ────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: "residential-rubbish-removal",
    name: "Residential Rubbish Removal",
    shortDesc: "Household rubbish removal, including furniture, mattresses, green waste, and garage clean outs.",
    longDesc: [
      "We provide fast, reliable, and eco-friendly household waste disposal solutions across all Sydney Metro suburbs. From single item furniture collections to complete multi-room house cleanouts, our professional crew handles the heavy lifting, packing, loading, and disposal so you don't have to lift a finger.",
      "We prioritize recycling and responsible waste diversion. Rather than letting your old items end up in landfills, we sort through all collections to ensure up to 95% of household junk, garden green waste, appliances, and materials are recycled at licensed Sydney facilities.",
    ],
    bullets: [
      {
        text: "Household Rubbish Removal",
        desc: "Removal of general household junk, unwanted items, and clutter from any room, garage, or outdoor area.",
      },
      {
        text: "Green Waste Removal",
        desc: "Collection of garden clippings, branches, leaves, and lawn waste from residential properties.",
      },
      {
        text: "Deceased Estate Clearance",
        desc: "Full clearance of furniture, belongings, and household items following a deceased estate, handled with care and discretion.",
      },
      {
        text: "Furniture Removal",
        desc: "Collection and disposal of sofas, wardrobes, tables, and other bulky furniture no longer needed.",
      },
      {
        text: "Garage Clean Out",
        desc: "Clearing garages, sheds, and storage areas of accumulated tools, boxes, and unused equipment.",
      },
      {
        text: "Mattress Removal",
        desc: "Collection and disposal of old or damaged mattresses and bed bases.",
      },
    ],
    image: "/web images/Services/residential1.webp",
    cardImage: "/web images/residential rubbish removal near me.webp",
    iconName: "Home",
  },
  {
    id: "commercial-rubbish-removal",
    name: "Commercial Rubbish Removal",
    shortDesc: "Scheduled or one off commercial rubbish removal for offices, warehouses, retail stores, and strata buildings.",
    longDesc: [
      "Keep your business clean, compliant, and running smoothly with our commercial waste management solutions. We work with offices, retailers, restaurants, and corporate facilities throughout Sydney to manage daily waste, office relocations, shop strip-outs, and commercial packaging.",
      "We offer flexible after-hours and weekend booking options so our cleanups never disrupt your business operations. Our licensed rubbish removalists work quickly and quietly to ensure minimal downtime for your team and clients.",
    ],
    bullets: [
      {
        text: "Strata Rubbish Removal",
        desc: "Scheduled or one off rubbish collection for strata-managed apartment blocks and common areas.",
      },
      {
        text: "Office Rubbish Removal",
        desc: "Removal of general office waste, old paperwork, and everyday business rubbish.",
      },
      {
        text: "Office Cubicle Removal",
        desc: "Dismantling and removal of office cubicles, partitions, and workstation furniture during fit-outs or relocations.",
      },
      {
        text: "Retail Strip Out Removal",
        desc: "Clearing shop fittings, displays, and fixtures during a retail strip out or store closure.",
      },
      {
        text: "Warehouse Rubbish Removal",
        desc: "Collection of pallets, packaging, and general waste from warehouses and storage facilities.",
      },
      {
        text: "End of Lease Rubbish Removal",
        desc: "Clearing furniture, fittings, and rubbish left behind at the end of a commercial lease.",
      },
    ],
    image: "/web images/Services/office1.webp",
    cardImage: "/web images/office rubbish removal near me.webp",
    iconName: "Building",
  },
  {
    id: "construction-rubbish-removal",
    name: "Construction Rubbish Removal",
    shortDesc: "Site cleanups, skip bin alternatives, and other construction rubbish removal services for builders and homeowners.",
    longDesc: [
      "Managing builder's waste requires speed, heavy loading capacity, and strict safety compliance. We provide professional construction rubbish removal services for renovation sites, residential builders, and commercial developers across Sydney.",
      "Skip bins block driveways, require costly council permits, and invite neighbors to dump their rubbish in them. Our truck-and-crew alternative is faster, requires no council permits, and includes full loading and sweeping of the site when finished.",
    ],
    bullets: [
      {
        text: "Building Materials Disposal",
        desc: "Disposal of offcuts, packaging, and leftover building materials from renovation or construction sites.",
      },
      {
        text: "Construction Site Clean Up",
        desc: "General site clean up during and after construction, clearing debris to keep the site safe and accessible.",
      },
      {
        text: "Metal and Steel Scrap Removal",
        desc: "Collection of scrap metal, steel offcuts, and other metal waste from building sites.",
      },
      {
        text: "Brick and Concrete Removal",
        desc: "Removal of broken bricks, concrete rubble, and masonry waste from demolition or renovation work.",
      },
      {
        text: "Timber Removal",
        desc: "Collection of timber offcuts, old framing, and wood waste from construction and renovation projects.",
      },
      {
        text: "Skip Bin Alternatives",
        desc: "A faster alternative to skip bin hire, with no council permits needed and full loading included.",
      },
    ],
    image: "/web images/Services/construction1.webp",
    cardImage: "/web images/construction rubbish removal near me.webp",
    iconName: "HardHat",
  },
];
