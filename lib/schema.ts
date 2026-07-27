import { BUSINESS } from './constants';

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// "Monday - Friday" -> every day in that range; "Saturday" -> just that day.
const expandDays = (label: string) => {
  const [from, to] = label.split(' - ');
  if (!to) return [from];
  return WEEK.slice(WEEK.indexOf(from), WEEK.indexOf(to) + 1);
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": BUSINESS.name,
  "image": `${BUSINESS.url}/og-image.jpg`,
  "telephone": BUSINESS.phone,
  "email": BUSINESS.email,
  "url": BUSINESS.url,
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
  "priceRange": "$$",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
};
