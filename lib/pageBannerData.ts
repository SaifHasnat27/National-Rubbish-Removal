export interface BannerData {
  heading: string;
  subheading: string;
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

export const PAGE_BANNERS: Record<string, BannerData> = {
  contact: {
    heading: "Contact Our Rubbish Removal Team in Sydney",
    subheading:
      "Reach out to us for instant quotes, same day rubbish removal, and hard rubbish collection across Sydney.",
    desktopSrc: "/web images/Banner/contact1.webp",
    mobileSrc: "/web images/Banner/contactMobile.webp",
    alt: "Same day rubbish removal and hard waste collection team serving Sydney",
  },
};
