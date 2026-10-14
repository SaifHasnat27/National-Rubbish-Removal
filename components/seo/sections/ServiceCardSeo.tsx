import Link from 'next/link';
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { services } from '@/lib/servicesData';

type ServiceCardSeoProps = {
  heading?: string;
  subheading?: string;
  id?: string;
};

// Server-rendered version of the homepage ServiceCards. No JS animation; hover lift comes from .card.
export default function ServiceCardSeo({
  heading = 'Professional Rubbish Removal Services',
  subheading = 'Hard rubbish collection for residential, commercial, and construction properties across Sydney.',
  id = 'services',
}: ServiceCardSeoProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <div className="text-center mb-12">
        <h2 className="text-[length:var(--font-size-display)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
          {heading}
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">{subheading}</p>
      </div>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id} className="card !p-0 flex h-full flex-col overflow-hidden">
            <Image
              src={service.cardImage}
              alt={`${service.name} in Sydney with same day availability`}
              width={600}
              height={400}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              quality={60}
              className="h-48 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-8">
              <h3 className="mb-3 text-xl font-bold leading-snug text-[var(--text-primary)]">{service.name}</h3>
              <p className="mb-7 leading-relaxed text-[var(--text-secondary)]">{service.shortDesc}</p>

              <ul className="mb-7 space-y-2.5">
                {service.bullets.map((bullet) => (
                  <li key={bullet.slug}>
                    <Link
                      href={`/${bullet.slug}`}
                      className="inline-flex items-center gap-2.5 text-sm leading-snug text-[var(--text-secondary)] transition-colors duration-[var(--transition-fast)] hover:text-[var(--text-accent)]"
                    >
                      <CircleCheck aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[1.5] text-[var(--color-accent)]" />
                      {bullet.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={`/services?tab=${service.id}`}
                className="mt-auto self-start border-b-2 border-current pb-0.5 text-[length:var(--font-size-xs)] font-medium uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors duration-[var(--transition-fast)] hover:text-[var(--text-accent)]"
              >
                Learn more<span className="sr-only"> about {service.name}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
