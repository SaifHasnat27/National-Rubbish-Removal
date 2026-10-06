import type { ReactNode } from 'react';
import SeoHero from '@/components/seo/hero/SeoHero';
import { SEO_HERO } from '@/components/seo/lib/seoHeroData';
import WhyNrrBadges from '@/components/seo/sections/WhyNrrBadges';
import Intro from '@/components/seo/sections/intro';
import PriceCalculator from '@/components/seo/sections/PriceCalculator';
import SeoProcess from '@/components/seo/sections/process';
import Cta from '@/components/seo/sections/Cta';
import TestimonialsSeo from '@/components/seo/sections/TestimonialsSeo';
import RelatedServices from '@/components/seo/sections/relatedService';
import QuickContactsSeo from '@/components/seo/sections/QuickContactsSeo';
import SectionWrapper from '@/components/ui/SectionWrapper';
import FAQSection from '@/components/servicecards/faq';

export type ServicePageCopy = {
  slug: string;
  intro: {
    heading: string;
    subheading: string | readonly string[];
    imageSrc: string;
    imageAlt: string;
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
  articleId: string;
};

type ServicePageProps = {
  copy: ServicePageCopy;
  children: ReactNode;
};

export default function ServicePage({ copy, children }: ServicePageProps) {
  return (
    <div className="w-full bg-base-secondary font-[family-name:var(--font-body)]">
      <SeoHero {...SEO_HERO[copy.slug]} />

      <WhyNrrBadges />

      <Intro {...copy.intro} />

      <PriceCalculator heading={copy.priceHeading} />

      <SeoProcess heading={copy.process.heading} subheading={copy.process.subheading} />

      <TestimonialsSeo
        heading="Google Reviews of Our Rubbish Removal Services"
        subheading="Feedback from customers who booked our junk removal team."
      />

      <Cta heading={copy.cta.heading} subheading={copy.cta.subheading} />

      <SectionWrapper className="bg-base-secondary" id={copy.articleId}>
        {children}
      </SectionWrapper>

      <RelatedServices slug={copy.slug} />

      <SectionWrapper className="bg-base-secondary" id="faq">
        <FAQSection />
      </SectionWrapper>

      <QuickContactsSeo heading={copy.contact.heading} subheading={copy.contact.subheading} />
    </div>
  );
}
