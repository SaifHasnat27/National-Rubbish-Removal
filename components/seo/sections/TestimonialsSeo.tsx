import { ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/lib/constants';

// Real Google reviews, copied as written. Same list as TestimonialsCarousel.tsx.
const REVIEWS = [
  { name: 'Ali Hijazi', review: 'The team at National Rubbish Removal were beyond amazing. I had built up alot of junk over the years and I called them this morning. My garage was spotless by midday. Their service and professionalism was outstanding. I highly recommend them 🙌' },
  { name: 'Jollibee Macabare', review: 'Really happy with the service from National Rubbish Removal. They came out to our home in Parramatta and removed some old furniture, boxes, and general rubbish from the garage. The guys were friendly, on time, and got everything cleared out quickly without any hassle.' },
  { name: 'Mika N.', review: 'Fast and reliable team! Called National Rubbish Removal to get rid of old appliances and rubbish from our shop in North Sydney. They arrived right on schedule, worked quickly, and charged a fair price. Very happy with the job!' },
  { name: 'JBS JBS', review: 'The Guys come in and cleaned up all my rubbish that i needed taken away in my garage, They where in and out in no time and now have made so much more room for me to work on bike .Great job boys.Thankyou' },
  { name: 'Nathan Nicolas', review: 'Great experience with National Rubbish Removal. The team were punctual, efficient and professional, made the whole process easy and left the area clean afterwards. Would definitely recommend NRR to anyone looking for reliable rubbish removal.' },
  { name: '24 Hour Power', review: 'Great service from National Rubbish Removal. The team helped clear out rubbish from our property and made the whole process quick and easy. They turned up on time, were friendly, professional and left everything clean and tidy. Would definitely recommend NRR to anyone needing rubbish removal.' },
] as const;

type TestimonialsSeoProps = {
  heading: string;
  subheading: string;
  id?: string;
};

// Same easing as TestimonialsCarousel: old review leaves, new one enters after it.
const OUT = 'cubic-bezier(0.55,0.085,0.68,0.53)';
const IN = 'cubic-bezier(0.215,0.61,0.355,1)';

// No JS: each dot is a label for a hidden radio. The checked radio shows its
// review and widens its dot via the CSS below. All reviews stay in the HTML.
export default function TestimonialsSeo({ heading, subheading, id = 'reviews' }: TestimonialsSeoProps) {
  const radioId = (i: number) => `${id}-review-${i}`;

  const base =
    `#${id} [data-review]{opacity:0;transform:translateY(-12px);visibility:hidden;` +
    `transition:opacity .3s ${OUT},transform .3s ${OUT},visibility 0s linear .3s}` +
    `@media (prefers-reduced-motion:reduce){#${id} [data-review],#${id} label span{transition:none!important}}`;

  const css = base + REVIEWS.map((_, i) => {
    const r = `#${radioId(i)}`;
    return (
      `${r}:checked~* [data-review="${i}"]{opacity:1;transform:none;visibility:visible;` +
      `transition:opacity .3s ${IN} .3s,transform .3s ${IN} .3s,visibility 0s linear .3s}` +
      `${r}:checked~* [data-name="${i}"]{visibility:visible}` +
      `${r}:checked~* label[for="${radioId(i)}"] span{width:2.5rem;background:var(--color-accent)}` +
      `${r}:focus-visible~* label[for="${radioId(i)}"] span{outline:2px solid var(--color-accent);outline-offset:3px}`
    );
  }).join('');

  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <style>{css}</style>

      <div className="text-center mb-12">
        <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
          {heading}
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">{subheading}</p>
      </div>

      <div className="card !p-8 md:!p-12">
        {REVIEWS.map((item, i) => (
          <input
            key={item.name}
            type="radio"
            name={`${id}-review`}
            id={radioId(i)}
            defaultChecked={i === 0}
            aria-label={`Review ${i + 1} of ${REVIEWS.length}, from ${item.name}`}
            className="sr-only"
          />
        ))}

        <div className="flex justify-center mb-8">
          <span role="img" aria-label="5 out of 5 stars" className="text-3xl tracking-widest text-[var(--color-accent)]">
            ★★★★★
          </span>
        </div>

        {/* All reviews share one grid cell, so the card is always as tall as the longest one. */}
        <div className="grid">
          {REVIEWS.map((item, i) => (
            <blockquote
              key={item.name}
              data-review={i}
              className="col-start-1 row-start-1 flex items-center justify-center text-center"
            >
              <p className="text-lg md:text-xl leading-[var(--leading-relaxed)] italic text-[var(--text-primary)] [overflow-wrap:anywhere]">
                {item.review}
              </p>
            </blockquote>
          ))}
        </div>

        {/* Names sit outside the animated reviews and swap instantly, like the homepage. */}
        <div className="grid mt-6 text-center">
          {REVIEWS.map((item, i) => (
            <p
              key={item.name}
              data-name={i}
              className="invisible col-start-1 row-start-1 text-sm font-medium tracking-[var(--tracking-wider)] text-[var(--text-secondary)]"
            >
              {item.name}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-center gap-1 mt-8">
          {REVIEWS.map((item, i) => (
            <label
              key={item.name}
              htmlFor={radioId(i)}
              className="group flex h-11 min-w-11 cursor-pointer items-center justify-center"
            >
              <span className="block h-1 w-3 rounded-full bg-[var(--text-muted)] transition-all duration-500 group-hover:w-5 group-hover:bg-[var(--color-accent)]" />
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 md:mt-12">
        <a
          href={BUSINESS.googleReviewsAll}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View All Google Reviews (opens in a new tab)"
        >
          <Button variant="secondary" size="md">
            View All Google Reviews
            <ExternalLink aria-hidden="true" size={18} />
          </Button>
        </a>
      </div>
    </SectionWrapper>
  );
}
