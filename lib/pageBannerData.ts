export interface BannerData {
  heading: string;
  subheading: string;
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}

export const PAGE_BANNERS: Record<string, BannerData> = {
  contact: {
    heading: "Contact | Local Rubbish Removal Near Me & Hard Waste Collection",
    subheading:
      "Ready to clear your space? Contact us for instant quotes, same-day service, and professional rubbish removal across Sydney.",
    desktopSrc: "/web images/Banner/contact1.webp",
    mobileSrc: "/web images/Banner/contactMobile.webp",
    alt: "Same day rubbish removal and hard waste collection team serving Sydney",
  },
};
