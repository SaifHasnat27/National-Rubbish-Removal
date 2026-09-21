import Link from 'next/link';
import { Phone, ClipboardCheck } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

type CtaProps = {
  heading: string;
  subheading: string;
  id?: string;
};

export default function Cta({ heading, subheading, id = 'book-cta' }: CtaProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <div className="card card-feature !p-8 mx-auto w-full space-y-8 text-center md:w-3/4">
        <h2 className="text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-balance">{heading}</h2>
        <p className="text-xl">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              <Phone aria-hidden="true" size={20} />
              Call {BUSINESS.phone}
            </Button>
          </a>
          <Link href="/contact#quote-form" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full sm:w-auto">
              Get a free quote
              <ClipboardCheck aria-hidden="true" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
