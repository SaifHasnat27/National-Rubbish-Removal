import { CircleCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { BUSINESS } from '@/lib/constants';

const BADGES = [
  'Transparent Pricing',
  'Fully Licensed & Insured',
  'Fast Response Time',
  'No Permits Required',
  'Same Day Rubbish Removal',
  'Zero Heavy Lifting',
  'Swept Clean Finish',
  'Eco Friendly Recycling',
] as const;

type WhyNrrBadgesProps = {
  heading?: string;
  id?: string;
};

export default function WhyNrrBadges({ heading = `Why Choose ${BUSINESS.name}`, id = 'why-us' }: WhyNrrBadgesProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <div className="text-center mb-8">
        <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]">
          {heading}
        </h2>
      </div>
      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
        {BADGES.map((label) => (
          <li
            key={label}
            className="card flex min-h-11 items-center gap-3 !rounded-[var(--radius-btn)] !px-4 !py-3 hover:!translate-y-0"
          >
            <CircleCheck
              aria-hidden="true"
              className="h-5 w-5 shrink-0 stroke-[1.5] text-[var(--color-accent)]"
            />
            <p className="min-w-0 leading-snug text-[var(--text-secondary)]">{label}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
