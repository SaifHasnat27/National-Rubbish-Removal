import { Plus } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import type { SeoFaqItem } from '@/components/seo/lib/seoFaqData';

type FaqSeoProps = {
  heading: string;
  items: readonly SeoFaqItem[];
  id?: string;
};

export default function FaqSeo({ heading, items, id = 'faq' }: FaqSeoProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-10 text-[var(--text-primary)]">
        {heading}
      </h2>

      <div className="divide-y divide-[var(--border)]">
        {items.map((faq) => (
          <details key={faq.q} className="group py-6 first:pt-0 last:pb-0">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="text-sm font-medium leading-snug text-[var(--text-primary)]">
                {faq.q}
              </span>
              <Plus
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-[var(--transition-base)] group-open:rotate-45"
              />
            </summary>
            <p className="pt-4 text-sm font-light leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}
