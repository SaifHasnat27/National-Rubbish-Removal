import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { services } from '@/lib/servicesData';

type RelatedServicesProps = {
  slug: string;
  id?: string;
};

// Links to the other pages in the same category (residential, commercial or
// construction). Built from servicesData, so new pages show up automatically.
export default function RelatedServices({ slug, id = 'related-services' }: RelatedServicesProps) {
  const group = services.find((s) => s.bullets.some((b) => b.slug === slug));
  if (!group) return null;

  const related = group.bullets.filter((b) => b.slug !== slug);

  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <div className="text-center mb-12">
        <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
          Related Rubbish Removal Services
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">
          You might also need these {group.name.toLowerCase()} services. Our team can take the whole lot in a single trip.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/${item.slug}`}
              className="group card flex min-h-11 items-center justify-between gap-3 !rounded-[var(--radius-btn)] !px-4 !py-3"
            >
              <span className="min-w-0 font-medium leading-snug text-[var(--text-primary)] group-hover:text-[var(--text-accent)]">
                {item.text}
              </span>
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[1.5] text-[var(--color-accent)]" />
            </Link>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
