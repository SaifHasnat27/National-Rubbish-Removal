"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import PageContactForm from "@/components/forms/PageContactForm";

export default function FreeQuotePage() {
  return (
    <div className="bg-base-secondary">

      {/* Form — pure landing page: heading + form, nothing else competing for attention */}
      <SectionWrapper className="bg-base-secondary">
        <div className="card !p-6 md:!p-8 max-w-3xl mx-auto hover:!translate-y-0">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] mb-2 text-[var(--text-primary)]">
            Get Your Free Rubbish Removal Quote
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mb-8">
            Fill in your details, add a few photos or videos, and we&apos;ll get back to you with your free quote.
          </p>
          <PageContactForm />
        </div>
      </SectionWrapper>
    </div>
  );
}
