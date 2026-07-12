"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

export interface Testimonial {
  name: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah",
    review: "Outstanding service they arrived on time worked quickly and left our property spotless highly recommend",
  },
  {
    name: "David",
    review: "Professional team fair pricing and eco friendly disposal everything you want in a rubbish removal service",
  },
  {
    name: "Emma",
    review: "Same day service was exactly what we needed the team was courteous and efficient. Will use again",
  },
  {
    name: "John",
    review: "Needed an old couch and fridge gone before moving out. They showed up within three hours of calling, loaded it all instantly. Cheap and reliable.",
  },
  {
    name: "Marcus",
    review: "These guys loaded up my renovation rubbish in half an hour. So much easier and cheaper than hiring a bin.",
  },
  {
    name: "Olivia",
    review: "Very friendly team. They cleared out my garage full of years of clutter. they sort out the recycling too which makes me feel a lot better. Highly recommend.",
  },
  {
    name: "Liam",
    review: "Prompt service, clear pricing, no hidden. The boys worked fast and got the job done. Can't recommend highly enough.",
  },
];


export default function TestimonialsCarousel({ className = 'bg-base-secondary', cardClassName = 'bg-base' }: { className?: string; cardClassName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(currentIndex);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  indexRef.current = currentIndex;

  const transitionTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex === indexRef.current || !textRef.current) return;

      timelineRef.current?.kill();
      timelineRef.current = null;

      const tl = gsap.timeline({
        onComplete: () => {
          timelineRef.current = null;
        },
      });

      tl.to(textRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.3,
        ease: "power2.in",
      })
        .call(() => {
          setCurrentIndex(nextIndex);
          indexRef.current = nextIndex;
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });

      timelineRef.current = tl;
      resetAutoPlay();
    },
    []
  );

  const handleDotClick = useCallback(
    (index: number) => {
      transitionTo(index);
    },
    [transitionTo]
  );

  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      const next = (indexRef.current + 1) % testimonials.length;
      transitionTo(next);
    }, 4500);
  }, [transitionTo]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      timelineRef.current?.kill();
    };
  }, [resetAutoPlay]);

  const t = testimonials[currentIndex];

  return (
    <section
      ref={containerRef}
      className={`py-12 md:py-20 ${className} overflow-hidden`}
      aria-label="Client testimonials"
    >
      <div className="section-wrapper max-w-4xl mx-auto">
        <div className="scroll-reveal">
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-center">
              Customer Reviews for Hard Rubbish Collection
            </h2>
          </div>

          <div className={`${cardClassName} border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-card)] p-8 md:p-12`}>
            <div
              ref={textRef}
              className="flex flex-col items-center text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Row 1 — fixed height stars */}
              <div className="h-16 md:h-20 flex items-start justify-center shrink-0">
                <span
                  className="text-3xl tracking-widest text-[var(--color-accent)]"
                  aria-label="5 stars"
                >
                  ★★★★★
                </span>
              </div>

              {/* Row 2 — height locked to tallest review via stacked invisible spacers */}
              <div className="relative w-full">
                {/* All reviews in one grid cell → container height = tallest review */}
                <div aria-hidden="true" className="grid">
                  {testimonials.map((testimonial) => (
                    <p
                      key={testimonial.name}
                      className="col-start-1 row-start-1 invisible w-full font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl leading-[var(--leading-snug)] italic font-light text-center"
                    >
                      {testimonial.review}
                    </p>
                  ))}
                </div>

                {/* Active review centred over spacers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="w-full font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl leading-[var(--leading-snug)] text-[var(--text-primary)] italic font-light text-center">
                    {t.review}
                  </p>
                </div>
              </div>
            </div>

            {/* Name — fixed position below the box */}
            <div className="flex flex-col items-center gap-1.5 mt-6">
              <span className="text-sm font-medium tracking-[0.18em] uppercase text-[var(--text-primary)]">
                {t.name}
              </span>
            </div>

            <div
              className="flex justify-center items-center gap-3 mt-12"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  onClick={() => handleDotClick(i)}
                  className={`
                    h-1 rounded-full transition-all duration-500
                    ${i === currentIndex
                      ? "bg-[var(--testimonial-dot-active,var(--text-primary))] w-10"
                      : "bg-[var(--testimonial-dot-bg,var(--color-stone-400))] w-3 hover:w-5 hover:bg-[var(--testimonial-dot-hover-bg,var(--color-stone-600))]"
                    }
                  `}
                  aria-label={`View testimonial from ${testimonials[i].name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
