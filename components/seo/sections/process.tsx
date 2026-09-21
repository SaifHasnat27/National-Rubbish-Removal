import SectionWrapper from '@/components/ui/SectionWrapper';

const STEPS = [
  { step: '1', title: 'Call or Book Online', description: 'Get a quote by phone or through our online form.' },
  { step: '2', title: 'Schedule Pickup', description: 'Choose a convenient time. Same day rubbish removal available.' },
  { step: '3', title: 'We Load Everything', description: 'Our team handles all the heavy lifting and loading.' },
  { step: '4', title: 'Eco-Friendly Disposal', description: '95% of your waste is recycled or donated responsibly.' },
] as const;

type SeoProcessProps = {
  heading: string;
  subheading: string;
  id?: string;
};

export default function SeoProcess({ heading, subheading, id = 'process' }: SeoProcessProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <div className="text-center mb-16">
        <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
          {heading}
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((item) => (
          <div key={item.step} className="card text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-2xl font-bold text-[var(--text-black)]">
              {item.step}
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
            <p className="text-[var(--text-secondary)]">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
