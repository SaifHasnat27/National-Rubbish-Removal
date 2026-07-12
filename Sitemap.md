# Context
This codebase was originally built for **Eye Spot Eye Care** (an optometry practice), then forked to create the website for **Just Frameless** (residential fencing), which was then forked for **Fortis Services Group** (commercial maintenance). It has now been forked to create the brand-new website for **National Rubbish Removal** (same-day waste collection in Sydney).

The core services provided by National Rubbish Removal are:
1. **Residential Rubbish Removal** – Household waste, furniture disposal, mattress removal, and general home cleanouts.
2. **Commercial Rubbish Removal** – Office strip-outs, retail waste disposal, and commercial business rubbish management.
3. **Construction Rubbish Removal** – Construction site cleanups, building debris, renovation waste, and concrete disposal.

National Rubbish Removal provides same-day rubbish removal and hard garbage collection services across the Sydney Metro Area.

# Sitemap & Architecture

## 1. Pages & Routes
- `app/page.tsx` (`/`) - Main landing page showcasing services, business specialty (Fast, Reliable & Eco-Friendly Waste Collection), customer testimonials, contact form, and FAQ.
- `app/about/page.tsx` (`/about`) - About page detailing history, values (Eco-friendly recycling, prompt response, transparency), and the rubbish removal booking process.
- `app/contact/page.tsx` (`/contact`) - Booking/Contact hub containing the request form, opening hours (Mon-Sun 6:00 AM - 9:00 PM), and service locations.
- `app/services/page.tsx` (`/services`) - In-depth services list (Residential, Commercial, Construction) utilizing interactive tabs.
- `app/areas-served/page.tsx` (`/areas-served`) - Suburbs and regions served in Sydney (currently "Coming Soon").
- `app/policy/page.tsx` (`/policy`) - Privacy Policy page outlining data protection.
- `app/terms/page.tsx` (`/terms`) - Terms of Service page outlining booking agreements and liabilities.

## 2. Page Connections
- `/` -> Links to `/services`, `/contact` (Get a Free Quote CTA) and direct call/WhatsApp buttons.
- `/about` -> Links to `/contact` (Get a Free Quote CTA).
- `/services` -> Links to `/contact` (Get a Free Quote CTA).
- `/contact` -> Main scheduling and form entry point.
- **Global Footer (All pages)** -> Links to `/policy` and `/terms`.

## 3. Key Components Per Page
- `/`: `components/ui/HeroBanner.tsx`, `components/servicecards/ServiceCards.tsx`, `components/layout/HomeSpecialty.tsx`, `components/ui/TestimonialsCarousel.tsx`, `components/servicecards/faq.tsx`, `components/forms/ContactForm.tsx`, `components/contact/QuickContact.tsx`
- `/about`: `components/ui/SectionWrapper.tsx`, `components/ui/PageBanner.tsx`, `components/ui/Button.tsx`
- `/contact`: `components/forms/ContactForm.tsx`, `components/contact/QuickContact.tsx`, `components/servicecards/faq.tsx`, `components/ui/PageBanner.tsx`
- `/services`: `components/ui/Tabs.tsx`, `components/ui/PageBanner.tsx`

## 4. Shared/Global Components
- `components/layout/Navbar.tsx` - Main site navigation (links to Home, About, Services, Contact, Areas Served).
- `components/layout/Footer.tsx` - Footnote section containing brand wordmark, location tags, standard opening hours, and legal links.
- `components/layout/Wordmark.tsx` - Reusable brand wordmark text/logo component.
- `components/ui/SectionWrapper.tsx` - Container wrapper ensuring consistent padding/margins.
- `components/ui/Button.tsx` - Global button styles.
- `components/contact/QuickContact.tsx` - CTA section featuring Call, Email, and WhatsApp links. Reused on `/` and `/contact`.
- `components/ui/PageBanner.tsx` - Header banner component dynamically used across subpages.

## 5. Data Sources Per Page
- `lib/constants.ts` (BUSINESS data) - Main brand configurations, including email, phone, location coverage, and hours.
- `lib/servicesData.ts` - Array of core services defining titles, descriptions, bullets, default image paths, and Lucide icons.
- `lib/pageBannerData.ts` - Heading/subheading configurations consumed by subpage headers.
- `components/servicecards/answer.tsx` - Array of FAQ items specific to National Rubbish Removal.
- `lib/schema.ts` - Local business structured data (`ProfessionalService`) parsed site-wide inside layout.tsx.

## 6. Tech Stack
- **Framework & Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **Animations**: GSAP, Framer Motion
- **Forms**: React Hook Form, Zod, `@hookform/resolvers`
- **Icons**: Lucide React
