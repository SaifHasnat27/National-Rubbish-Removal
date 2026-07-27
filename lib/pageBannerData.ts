export interface BannerData {
  heading: string;
  subheading: string;
  desktopSrc: string;
  mobileSrc: string;
}

export const PAGE_BANNERS: Record<string, BannerData> = {
  about: {
    heading: "About National Rubbish Removal",
    subheading: "Sydney's trusted team for same-day rubbish removal, hard garbage collection, and eco-friendly waste disposal.",
    desktopSrc: "/web images/rubbish removal truck.webp",
    mobileSrc: "/web images/rubbish removal truck.webp",
  },
  services: {
    heading: "Our Rubbish Removal Services",
    subheading: "From household junk and garden cleanups to commercial office strip-outs and heavy building waste.",
    desktopSrc: "/web images/rubbish removal Sydney desktop banner.webp",
    mobileSrc: "/web images/rubbish removal Sydney mobile banner.webp",
  },
  contact: {
    heading: "Get a Free Quote",
    subheading: "Speak to our team today for an upfront, transparent quote with zero hidden fees. Same-day service across Sydney.",
    desktopSrc: "/web images/Banner/contact.webp",
    mobileSrc: "/web images/Banner/contactMobile1.webp",
  },
  areasServed: {
    heading: "Areas We Serve",
    subheading: "Providing fast, professional, and cheap same-day rubbish removal services throughout the entire Sydney Metro Area.",
    desktopSrc: "/web images/rubbish removal truck.webp",
    mobileSrc: "/web images/rubbish removal truck.webp",
  },
};