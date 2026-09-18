import { BUSINESS } from './constants';
import { services } from './servicesData';

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// "Monday - Friday" -> every day in that range; "Saturday" -> just that day.
const expandDays = (label: string) => {
  const [from, to] = label.split(' - ');
  if (!to) return [from];
  return WEEK.slice(WEEK.indexOf(from), WEEK.indexOf(to) + 1);
};

// Each service becomes an Offer wrapping a Service, with its bullets nested as
// a child catalog — so "Mattress Removal" reads as part of "Residential
// Rubbish Removal" rather than as a loose, unrelated service.
const serviceCatalog = {
  "@type": "OfferCatalog",
  "name": "Rubbish Removal Services",
  "itemListElement": services.map((service) => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": service.name,
      "description": service.shortDesc,
      "serviceType": service.name,
      "url": `${BUSINESS.url}/services#${service.id}`,
      "image": `${BUSINESS.url}${encodeURI(service.image)}`,
      "provider": { "@id": `${BUSINESS.url}/#business` },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": BUSINESS.serviceArea,
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": service.name,
        "itemListElement": service.bullets.map((bullet) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": bullet.text,
            "description": bullet.desc,
          },
        })),
      },
    },
  })),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BUSINESS.url}/#business`,
  "name": BUSINESS.name,
  "image": `${BUSINESS.url}/og-image.jpg`,
  "telephone": BUSINESS.phone,
  "email": BUSINESS.email,
  "url": BUSINESS.url,
  "sameAs": [BUSINESS.googleBusinessProfile],
  "openingHoursSpecification": BUSINESS.openingHours.rows.map((row) => ({
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": expandDays(row.day),
    "opens": row.opens,
    "closes": row.closes,
  })),
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": BUSINESS.serviceArea
  },
  "hasOfferCatalog": serviceCatalog,
  "priceRange": "$$",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
};
