"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, ChevronDown, Phone, MessageCircle, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicePicker from "@/components/forms/ServicePicker";
import type { ServiceSelection } from "@/components/forms/formSchema";
import { services } from "@/lib/servicesData";
import { BUSINESS } from "@/lib/constants";
import {
  SERVICE_PRICING,
  LOAD_SIZES,
  FULL_LOAD_M3,
  calculateQuote,
  formatPrice,
  type ServiceId,
} from "@/lib/quote";

// Map a servicesData name → pricing ServiceId (arrays share order & count).
const nameToServiceId: Record<string, ServiceId> = Object.fromEntries(
  services.map((s, i) => [s.name, SERVICE_PRICING[i].id])
);

// Field/label styling — mirrors ContactForm so the estimator matches the form.
const labelBase =
  "block text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-[var(--text-secondary)] mb-2";

// ─── Animated price (springs between values) ────────────────────────────────
function AnimatedPrice({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 110, damping: 20 });
  const text = useTransform(spring, (v) => formatPrice(Math.round(v)));
  useEffect(() => {
    spring.set(value);
  }, [value, spring]);
  return <motion.span>{text}</motion.span>;
}

// ─── Load-size dropdown (styled like ContactForm's custom dropdowns) ────────
function LoadPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = LOAD_SIZES.find((l) => l.id === value);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-[var(--text-primary)] bg-base-secondary border border-[var(--border)] rounded-none text-sm leading-[var(--leading-normal)] transition-all duration-[var(--transition-fast)] focus:outline-none focus:border-[var(--border-dark)] hover:border-[var(--border-dark)] flex justify-between items-center gap-2"
      >
        <span className="flex-1 min-w-0 truncate text-left">
          {selected ? (
            <>
              {selected.label} <span className="text-[var(--text-muted)]">(≈ {selected.m3} m³)</span>
            </>
          ) : (
            <span className="text-[var(--text-muted)]">Select approximate volume...</span>
          )}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-base border border-[var(--border)] shadow-lg">
          {LOAD_SIZES.map((l) => {
            const isSelected = l.id === value;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => {
                  onChange(l.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 border-b border-[var(--border)] last:border-b-0 transition-colors duration-[var(--transition-fast)] ${
                  isSelected
                    ? "bg-bg-fifth text-[var(--text-primary)]"
                    : "bg-bg-third text-[var(--text-secondary)] hover:bg-bg-fifth hover:text-[var(--text-primary)]"
                }`}
              >
                <span className="block text-sm font-medium">
                  {l.label} <span className="text-[var(--color-accent)]">≈ {l.m3} m³</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function QuoteEstimatorPage() {
  // Both start empty — placeholder shows until picked (like ContactForm).
  // ServicePicker speaks in ServiceSelection[] (single-select → length 0 or 1).
  const [serviceSel, setServiceSel] = useState<ServiceSelection[]>([]);
  const [loadId, setLoadId] = useState("");

  const serviceId = nameToServiceId[serviceSel[0]?.id];
  const load = LOAD_SIZES.find((l) => l.id === loadId);

  // Price only exists once BOTH are chosen; otherwise it stays 0.
  const quote = serviceId && load ? calculateQuote({ serviceId, volumeM3: load.m3 }) : null;
  const fillPercent = load ? Math.min((load.m3 / FULL_LOAD_M3) * 100, 100) : 0;

  return (
    <div className="bg-base-secondary">

      {/* Hero — nav-aware top padding (same pattern as location/about pages) */}
      <section className="bg-base-secondary pt-[calc(var(--nav-height)+0rem)] pb-12 md:pt-[calc(var(--nav-height)+3rem)] md:pb-20">
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Calculator aria-hidden="true" className="mx-auto mb-4 text-[var(--color-accent)]" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Calculate Your Rubbish Removal Price
            </h1>
            <p className="text-xl text-[var(--text-primary)]">
              Choose your service type and load size to calculate your approximate costs instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <SectionWrapper className="bg-base-secondary">
        <div className="card !p-0 overflow-hidden max-w-2xl mx-auto hover:!translate-y-0">

          {/* ── Section 1: calculator ── */}
          <div className="p-6 md:p-8">

          {/* Service */}
          <label className={labelBase}>Type of Service:</label>
          <div className="mb-6">
            <ServicePicker value={serviceSel} onChange={setServiceSel} />
          </div>

          {/* Load size */}
          <label className={labelBase}>Estimated Volume:</label>
          <div className="mb-6">
            <LoadPicker value={loadId} onChange={setLoadId} />
          </div>

          {/* Truck fill bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[var(--text-primary)]">Truck space used</span>
              <span className="font-semibold text-[var(--color-accent)]">{Math.round(fillPercent)}%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden bg-[var(--bg-third)]">
              <motion.div
                className="h-full rounded-full bg-[var(--color-accent)]"
                animate={{ width: `${fillPercent}%` }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </div>

          {/* Estimate */}
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] mb-2 text-[var(--color-accent)]">
              Estimated Price
            </p>
            <p className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              {quote ? (
                <>
                  <AnimatedPrice value={quote.low} />
                  <span className="text-[var(--color-accent)]"> – </span>
                  <AnimatedPrice value={quote.high} />
                </>
              ) : (
                <AnimatedPrice value={0} />
              )}
            </p>
          </div>

          {/* CTAs */}
          <Link href="/contact" className="block" aria-label="Get Exact Quote">
            <Button variant="primary" size="lg" className="w-full">
              Get Exact Quote
            </Button>
          </Link>

          {/* Quick contact — stacked, centered rows under the CTA */}
          <div className="mt-6 pt-6 border-t border-[var(--border-light)] flex flex-col items-center gap-3 text-center">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone size={16} aria-hidden="true" className="text-[var(--color-accent)]" />
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" className="text-[var(--color-accent)]" />
              Live Chat
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)] [overflow-wrap:anywhere]"
              aria-label={`Email ${BUSINESS.email}`}
            >
              <Mail size={16} aria-hidden="true" className="text-[var(--color-accent)] shrink-0" />
              {BUSINESS.email}
            </a>
          </div>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
}
