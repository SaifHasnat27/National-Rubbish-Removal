import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';

const estimatorPoints = [
  'Pick your service and load size',
  'Get an instant estimated price',
  'No obligation, no sign up needed',
] as const;

type PriceCalculatorProps = {
  heading: string;
};

export default function PriceCalculator({ heading }: PriceCalculatorProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id="pricing">
      <div className="card card-dark !p-8 mx-auto w-full space-y-8 text-center md:w-3/4">
        <h2 className="text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-balance">{heading}</h2>
        <div className="mx-auto w-fit space-y-4 text-left">
          {estimatorPoints.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle aria-hidden="true" size={20} className="shrink-0 text-[var(--text-black)]" />
              <span className="text-xl">{item}</span>
            </div>
          ))}
        </div>
        <Link
          href="/quote-estimator"
          className="block"
          aria-label="Calculate Your Rubbish Removal Price"
        >
          <Button variant="primary" size="md" className="w-full">
            Get an Instant Price Estimate
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
