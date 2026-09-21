export interface SeoHeroData {
  heading: string;
  subheading: string;
}

// Keyed by page slug — matches the folder name under app/(seo)/.
// Banner images live in SeoHero.tsx; every page shares the same one.
export const SEO_HERO: Record<string, SeoHeroData> = {
  "mattress-removal": {
    heading: "Mattress Removal Sydney",
    subheading:
      "Professional mattress removal in Sydney, with prompt collection and responsible disposal.",
  },
  "green-waste-removal": {
    heading: "Green Waste Removal Sydney",
    subheading:
      "Eco-friendly green waste removal across Sydney without the hassle of loading, transport or tip runs.",
  },
  "unwanted-furniture-removal": {
    heading: "Unwanted Furniture Removal Sydney",
    subheading:
      "We remove unwanted furniture from your homes, offices and properties in Sydney.",
  },
  "household-rubbish-removal": {
    heading: "Household Rubbish Removal Sydney",
    subheading:
      "Remove unwanted household rubbish from your houses without hiring a skip or doing the heavy lifting.",
  },
  "garage-clean-out": {
    heading: "Garage Clean Out Sydney",
    subheading:
      "We provide fast and affordable garage clean out services across Sydney Metro.",
  },
  "deceased-estate-clearance": {
    heading: "Deceased Estate Clearance Sydney",
    subheading:
      "Professional deceased estate clearance in Sydney, carried out with care, discretion and respect.",
  },
};
