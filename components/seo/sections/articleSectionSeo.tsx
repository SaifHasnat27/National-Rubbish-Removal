import type { ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';

type ArticleSectionSeoProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  centerHeading?: boolean;
};

// Free-flow SEO copy: write plain <h2>, <h3>, <p>, <Link>. Styling matches the 18 SEO service page articles.
export default function ArticleSectionSeo({
  children,
  id,
  className = 'bg-base-secondary',
  centerHeading = false,
}: ArticleSectionSeoProps) {
  return (
    <SectionWrapper id={id} className={className}>
      <article
        className={`w-full space-y-8 text-left leading-relaxed text-[var(--text-secondary)]
          [&_h2]:text-[length:var(--font-size-display)] [&_h2]:font-bold [&_h2]:leading-[1.1] [&_h2]:tracking-[-0.02em] [&_h2]:text-[var(--text-primary)]
          [&_h3]:text-[length:var(--font-size-title)] [&_h3]:font-bold [&_h3]:leading-[1.2] [&_h3]:tracking-[-0.01em] [&_h3]:text-[var(--text-primary)]
          [&_a]:text-[var(--text-accent)] [&_a]:underline-offset-2 [&_a:hover]:underline
          [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:marker:text-[var(--color-accent)] [&_strong]:text-[var(--text-primary)]
          ${centerHeading ? '[&_h2]:text-center' : ''}`}
      >
        {children}
      </article>
    </SectionWrapper>
  );
}
