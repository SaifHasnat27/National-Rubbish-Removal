"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Clock, Shield, Recycle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = { icon: LucideIcon; text: string; subtext: string };

const IMAGES = [
  "/web images/Home/home-slider/affordable1.webp",
  "/web images/Home/home-slider/same-day.webp",
  "/web images/Home/home-slider/insured.webp",
  "/web images/Home/home-slider/home-eco-truck.webp",
];

const BADGES: Stat[] = [
  { icon: Star,    text: "Affordable Pricing", subtext: "Zero Hidden Fees" },
  { icon: Clock,   text: "Same Day Service",   subtext: "Available 24/7" },
  { icon: Shield,  text: "Fully Insured",      subtext: "Licensed & Bonded" },
  { icon: Recycle, text: "Eco-Friendly",       subtext: "95% Recycled" },
];

const BADGE_SHADOW =
  "inset 0 3px 3px rgba(255,255,255,0.18), inset 0 -5px 6px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.25)";

const CYCLE_MS = 2000;
const FADE_S   = 0.8;
const ZOOM_S   = 2;
const BADGE_S  = 0.5;

const IMG_IN    = `opacity ${FADE_S}s ease-in-out, transform ${ZOOM_S}s linear`;
const IMG_OUT   = `opacity ${FADE_S}s ease-in-out, transform 0s linear ${FADE_S}s`;
const BADGE_IN  = `opacity ${BADGE_S}s ease-in-out ${BADGE_S}s`;
const BADGE_OUT = `opacity ${BADGE_S}s ease-in-out`;

export default function TvFrame() {
  const rootRef      = useRef<HTMLDivElement>(null);
  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion = useRef(false);

  const [index,   setIndex]   = useState(0);
  // Flips on mount. Keeps SSR at scale(1) so the client has something to
  // animate FROM. Not a delay — it fires as soon as hydration finishes.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = rootRef.current;
    if (!el) return;

    const start = () => {
      if (timerRef.current || reduceMotion.current) return;
      timerRef.current = setInterval(() => setIndex(i => i + 1), CYCLE_MS);
    };
    const stop = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };

    start();
    const obs = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    obs.observe(el);

    return () => { stop(); obs.disconnect(); };
  }, [mounted]);

  const img   = index % IMAGES.length;
  const badge = index % BADGES.length;

  return (
    <div ref={rootRef} className="relative">
      <div className="!p-[2px] border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-card)]">
        <div className="group/image relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden">
          {IMAGES.map((src, i) => {
            const active = i === img;
            const zoom   = active && mounted && !reduceMotion.current;
            return (
              <div
                key={src}
                className="absolute inset-0"
                style={{
                  opacity: active ? 1 : 0,
                  transform: zoom ? "scale(1.05)" : "scale(1)",
                  transition: active ? IMG_IN : IMG_OUT,
                  // Promote to its own GPU layer ONLY while active. Inactive
                  // slides release their layer, so we hold one compositor layer
                  // instead of four — same animation, less VRAM, better on mobile.
                  willChange: active ? "opacity, transform" : "auto",
                }}
              >
                <Image
                  src={src}
                  alt="National Rubbish Removal professional rubbish removal work across Sydney"
                  fill
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  quality={60}
                  fetchPriority="low"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2 md:inset-x-auto md:block md:left-[-1.4vw] md:bottom-[-1.4vw] md:translate-y-0">
        <div
          className="max-w-[min(80vw,320px)] p-3 md:p-4 rounded-[var(--radius-card)] bg-[var(--bg-nav)] border border-white/10"
          style={{ boxShadow: BADGE_SHADOW }}
        >
          <div className="grid">
            {BADGES.map((stat, i) => {
              const active = i === badge;
              return (
                <div
                  key={stat.text}
                  className="[grid-area:1/1] flex items-center gap-2 min-w-0"
                  style={{
                    opacity: active ? 1 : 0,
                    transition: active ? BADGE_IN : BADGE_OUT,
                  }}
                  aria-hidden={!active}
                >
                  <stat.icon size={20} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-base md:text-lg text-[var(--color-white)] truncate">{stat.text}</p>
                    <p className="text-xs text-[var(--color-white)] truncate">{stat.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}