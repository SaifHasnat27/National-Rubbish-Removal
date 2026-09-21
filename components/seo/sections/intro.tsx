import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';

type IntroProps = {
  heading: string;
  subheading: string | readonly string[];
  imageSrc: string;
  imageAlt: string;
};

export default function Intro({ heading, subheading, imageSrc, imageAlt }: IntroProps) {
  const paragraphs = typeof subheading === 'string' ? [subheading] : subheading;

  return (
    <SectionWrapper
      noPadding
      className="bg-base-secondary font-[family-name:var(--font-body)] pt-12 pb-12 md:pt-20 md:pb-20"
      id="intro"
    >
      <div className="space-y-12 md:space-y-20">
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <h2 className="text-center text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]">
            {heading}
          </h2>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="card !p-0 overflow-hidden md:mx-auto md:w-3/4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 75vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
