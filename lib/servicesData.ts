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
    shortDesc: "Complete household waste, garden refuse, furniture disposal, and general home cleanouts for Sydney residents.",
    longDesc: [
      "We provide fast, reliable, and eco-friendly household waste disposal solutions across all Sydney Metro suburbs. From single item furniture collections to complete multi-room house cleanouts, our professional crew handles the heavy lifting, packing, loading, and disposal so you don't have to lift a finger.",
      "We prioritize recycling and responsible waste diversion. Rather than letting your old items end up in landfills, we sort through all collections to ensure up to 95% of household junk, garden green waste, appliances, and materials are recycled at licensed Sydney facilities.",
    ],
    bullets: [
      {
        text: "Household Junk Removal",
        desc: "We clear out old general rubbish, cardboard, clothes, toys, and general domestic clutter from any part of your house, apartment, or garden.",
      },
      {
        text: "Furniture & Appliance Disposal",
        desc: "Eco-friendly disposal of bulky mattresses, sofas, whitegoods, and old electrical appliances, ensuring they are sent to dedicated recycling centers.",
      },
      {
        text: "Garden Waste Clearance",
        desc: "Fast removal of green waste, branches, hedge clippings, soil, lawn waste, and garden debris following landscaping or storm cleanups.",
      },
      {
        text: "Garage & Shed Cleanouts",
        desc: "Reclaim your storage space with full cleanouts of cluttered garages, attics, storage units, and backyard sheds.",
      },
    ],
    image: "/web images/residential rubbish removal near me.webp",
    cardImage: "/web images/residential rubbish removal near me.webp",
    iconName: "Home",
  },
  {
    id: "commercial-rubbish-removal",
    name: "Commercial Rubbish Removal",
    shortDesc: "Reliable, scheduled or one-off commercial rubbish disposal, office strip-outs, and retail waste management.",
    longDesc: [
      "Keep your business clean, compliant, and running smoothly with our commercial waste management solutions. We work with offices, retailers, restaurants, and corporate facilities throughout Sydney to manage daily waste, office relocations, shop strip-outs, and commercial packaging.",
      "We offer flexible after-hours and weekend booking options so our cleanups never disrupt your business operations. Our licensed rubbish removalists work quickly and quietly to ensure minimal downtime for your team and clients.",
    ],
    bullets: [
      {
        text: "Office Clearances",
        desc: "Swift removal of redundant office desks, chairs, filing cabinets, partition walls, carpets, and corporate office equipment.",
      },
      {
        text: "Retail & Shop Strip-Outs",
        desc: "Clearing out retail fittings, point-of-sale displays, display cases, cardboard packaging, and general store waste.",
      },
      {
        text: "Restaurant & Cafe Cleanups",
        desc: "Disposal of old commercial kitchen machinery, stainless steel fittings, broken appliances, and dry food packaging.",
      },
      {
        text: "Document Destruction & E-Waste",
        desc: "Secure recycling of electronic waste (computers, monitors, cabling) and destruction of confidential business documents.",
      },
    ],
    image: "/web images/office rubbish removal near me.webp",
    cardImage: "/web images/office rubbish removal near me.webp",
    iconName: "Building",
  },
  {
    id: "construction-rubbish-removal",
    name: "Construction Rubbish Removal",
    shortDesc: "Heavy-duty site cleanups, building materials disposal, and renovation debris removal for builders and homeowners.",
    longDesc: [
      "Managing builder's waste requires speed, heavy loading capacity, and strict safety compliance. We provide professional construction rubbish removal services for renovation sites, residential builders, and commercial developers across Sydney.",
      "Skip bins block driveways, require costly council permits, and invite neighbors to dump their rubbish in them. Our truck-and-crew alternative is faster, requires no council permits, and includes full loading and sweeping of the site when finished.",
    ],
    bullets: [
      {
        text: "Building Materials Disposal",
        desc: "Fast removal of heavy builder waste including timber offcuts, plasterboard, tiles, insulation, and scrap metal.",
      },
      {
        text: "Renovation Debris Removal",
        desc: "We clear out debris from kitchen, bathroom, and home extension projects, leaving your site clean for the next trade.",
      },
      {
        text: "Concrete, Brick & Rubble Loading",
        desc: "Heavy loading of masonry waste, concrete blocks, broken bricks, roof tiles, and soil from excavation sites.",
      },
      {
        text: "Skip Bin Alternatives",
        desc: "No street permits needed. We pull up, load the waste immediately, clean up the area, and cart it away in one go.",
      },
    ],
    image: "/web images/construction rubbish removal near me.webp",
    cardImage: "/web images/construction rubbish removal near me.webp",
    iconName: "HardHat",
  },
];
