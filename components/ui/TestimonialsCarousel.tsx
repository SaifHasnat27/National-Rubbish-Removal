"use client";

import React, { useRef, useState, useEffect } from "react";

export interface Testimonial {
  name: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  { name: "Sarah",  review: "Outstanding service they arrived on time worked quickly and left our property spotless highly recommend" },
  { name: "David",  review: "Professional team fair pricing and eco friendly disposal everything you want in a rubbish removal service" },
  { name: "Emma",   review: "Same day service was exactly what we needed the team was courteous and efficient. Will use again" },
  { name: "John",   review: "Needed an old couch and fridge gone before moving out. They showed up within three hours of calling, loaded it all instantly. Cheap and reliable." },
  { name: "Marcus", review: "These guys loaded up my renovation rubbish in half an hour. So much easier and cheaper than hiring a bin." },
  { name: "Olivia", review: "Very friendly team. They cleared out my garage full of years of clutter. they sort out the recycling too which makes me feel a lot better. Highly recommend." },
  { name: "Liam",   review: "Prompt service, clear pricing, no hidden. The boys worked fast and got the job done. Can't recommend highly enough." },
];

// GSAP power2.in → cubic-bezier(0.55, 0.085, 0.68, 0.53)
// GSAP power3.out → cubic-bezier(0.215, 0.61, 0.355, 1)
const OUT = "opacity 0.3s cubic-bezier(0.55,0.085,0.68,0.53), transform 0.3s cubic-bezier(0.55,0.085,0.68,0.53)";
const IN  = "opacity 0.3s cubic-bezier(0.215,0.61,0.355,1) 0.3s, transform 0.3s cubic-bezier(0.215,0.61,0.355,1) 0.3s";

export default function TestimonialsCarousel({
  className = "bg-base-secondary",
  cardClassName = "bg-base",
}: {
  className?: string;
  cardClassName?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Pause auto-play when the section scrolls out of view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotionRef.current || !isInView) return;
    const timer = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [currentIndex, isInView]);

  const t = testimonials[currentIndex];

  return (
    <section
      ref={containerRef}
      className={`py-12 md:py-20 ${className} overflow-hidden`}
      aria-label="Client testimonials"
    >
      <div className="section-wrapper max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
            Customer Reviews for Hard Rubbish Collection
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            What clients say about our rubbish removal services.
          </p>
        </div>

        <div className={`card ${cardClassName} !p-8 md:!p-12`}>
          <div className="flex flex-col items-center text-center" aria-live="polite" aria-atomic="true">
            {/* Row 1 — fixed height stars */}
            <div className="h-16 md:h-20 flex items-start justify-center shrink-0">
              <span className="text-3xl tracking-widest text-[var(--color-accent)]" aria-label="5 stars">
                ★★★★★
              </span>
            </div>

            {/* Row 2 — height locked to the tallest review via stacked invisible
                spacers. Same technique as the original; the container is sized
                to the widest/tallest review and never resizes as it rotates. */}
            <div className="relative w-full">
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

              {/* Active reviews stacked on top — opacity/transform toggled by
                  CSS. No height contribution, so the spacers above decide the
                  final height. */}
              <div className="absolute inset-0">
                {testimonials.map((testimonial, i) => {
                  const active = i === currentIndex;
                  return (
                    <p
                      key={testimonial.name}
                      className="absolute inset-0 flex items-center justify-center w-full font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl leading-[var(--leading-snug)] text-[var(--text-primary)] italic font-light text-center"
                      aria-hidden={!active}
                      style={{
                        opacity: active ? 1 : 0,
                        transform: active ? "translateY(0)" : "translateY(-12px)",
                        transition: active ? IN : OUT,
                        pointerEvents: active ? "auto" : "none",
                        zIndex: active ? 1 : 0,
                      }}
                    >
                      <span>{testimonial.review}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Name — fixed position below the box */}
          <div className="flex flex-col items-center gap-1.5 mt-6">
            <span className="text-sm font-medium tracking-[0.18em] uppercase text-[var(--text-primary)]">
              {t.name}
            </span>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 mt-12" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentIndex}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "bg-[var(--color-accent)] w-10"
                    : "bg-[var(--text-muted)] w-3 hover:w-5 hover:bg-[var(--color-accent)]"
                }`}
                aria-label={`View testimonial from ${testimonials[i].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}