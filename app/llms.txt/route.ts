import { BUSINESS, to12Hour } from "@/lib/constants";
import { services } from "@/lib/servicesData";
import { faqs } from "@/components/servicecards/answer";

// llms.txt — machine-readable summary for AI assistants/answer engines
// (ChatGPT, Claude, Perplexity, etc.), per the community llms.txt convention:
// https://llmstxt.org/. Sourced live from lib/constants.ts + lib/servicesData.ts
// so it can never drift out of sync with the real site content.
export async function GET() {
  const hours = BUSINESS.openingHours.rows
    .map((row) => `- ${row.day}: ${to12Hour(row.opens)} - ${to12Hour(row.closes)}`)
    .join("\n");

  const serviceList = services
    .map((s) => {
      const bullets = s.bullets
        .map((b) => `- ${b.text}: ${b.desc}`)
        .join("\n");
      return `### ${s.name}\n\n${s.shortDesc}\n\n${bullets}`;
    })
    .join("\n\n");

  const faqBlock = faqs
    .map((f) => `### ${f.q}\n${f.a}`)
    .join("\n\n");

  const body = `# ${BUSINESS.name}

> ${BUSINESS.name} provides fast, reliable, and eco-friendly rubbish removal services across ${BUSINESS.serviceArea}, including residential, commercial, and construction waste disposal with same-day availability.

## Services

${serviceList}

## Contact

- Phone: ${BUSINESS.phone} (tel:${BUSINESS.phoneRaw})
- WhatsApp: ${BUSINESS.whatsapp} (${BUSINESS.whatsappLink})
- Email: ${BUSINESS.email}
- Service area: ${BUSINESS.serviceArea}
- Get a free quote: ${BUSINESS.url}/contact#quote-form

## Opening Hours

${hours}

## Frequently Asked Questions

${faqBlock}

## Pages

- [Home](${BUSINESS.url}): Overview of all rubbish removal services and same-day booking.
- [Services](${BUSINESS.url}/services): Full breakdown of residential, commercial, and construction rubbish removal.
- [About](${BUSINESS.url}/about): Company background, mission, and eco-friendly recycling approach.
- [Location](${BUSINESS.url}/location): Suburbs and areas served across Sydney Metro.
- [Contact](${BUSINESS.url}/contact): Get a free quote or book a same-day collection.
- [Privacy Policy](${BUSINESS.url}/policy): How customer data is collected and used.
- [Terms of Service](${BUSINESS.url}/terms): Terms governing use of our services.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
