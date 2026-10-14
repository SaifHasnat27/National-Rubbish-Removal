import type { ReactNode } from 'react';
import SeoHero from '@/components/seo/hero/SeoHero';
import { LOCATION_HERO } from '@/components/seo/lib/locationHeroData';
import WhyNrrBadges from '@/components/seo/sections/WhyNrrBadges';
import ArticleSectionSeo from '@/components/seo/sections/articleSectionSeo';
import ServiceCardSeo from '@/components/seo/sections/ServiceCardSeo';
import PriceCalculator from '@/components/seo/sections/PriceCalculator';
import SeoProcess from '@/components/seo/sections/process';
import TestimonialsSeo from '@/components/seo/sections/TestimonialsSeo';
import Cta from '@/components/seo/sections/Cta';
import QuickContactsSeo from '@/components/seo/sections/QuickContactsSeo';

export type LocationPageCopy = {
  slug: string;
  services: {
    heading: string;
    subheading: string;
  };
  priceHeading: string;
  process: {
    heading: string;
    subheading: string;
  };
  cta: {
    heading: string;
    subheading: string;
  };
  contact: {
    heading: string;
    subheading: string;
  };
};

type LocationPageProps = {
  copy: LocationPageCopy;
  shortArticle: ReactNode;
  longArticle: ReactNode;
};

export default function LocationPage({ copy, shortArticle, longArticle }: LocationPageProps) {
  return (
    <div className="w-full bg-base-secondary font-[family-name:var(--font-body)]">
      <SeoHero {...LOCATION_HERO[copy.slug]} />

      <WhyNrrBadges />

      <ArticleSectionSeo id="intro" centerHeading>{shortArticle}</ArticleSectionSeo>

      <ServiceCardSeo heading={copy.services.heading} subheading={copy.services.subheading} />

      <PriceCalculator heading={copy.priceHeading} />

      <SeoProcess heading={copy.process.heading} subheading={copy.process.subheading} />

      <TestimonialsSeo
        heading="Google Reviews of Our Rubbish Removal Services"
        subheading="Feedback from customers who booked our junk removal team."
      />

      <Cta heading={copy.cta.heading} subheading={copy.cta.subheading} />

      <ArticleSectionSeo id={`${copy.slug}-guide`}>{longArticle}</ArticleSectionSeo>

      <QuickContactsSeo heading={copy.contact.heading} subheading={copy.contact.subheading} />
    </div>
  );
}
