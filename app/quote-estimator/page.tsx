"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, Phone, MessageCircle, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuickContact from "@/components/contact/QuickContact";
import ServicePicker from "@/components/forms/ServicePicker";
import SizePicker from "@/components/forms/SizePicker";
import SizeBar from "@/components/forms/SizeBar";
import PriceEstimate from "@/components/forms/PriceEstimate";
import type { ServiceSelection } from "@/components/forms/formSchema";
import { BUSINESS } from "@/lib/constants";

// Field/label styling — mirrors ContactForm so the estimator matches the form.
const labelBase =
  "block text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-[var(--text-secondary)] mb-2";

// ─── Page ────────────────────────────────────────────────────────────────────
export default function QuoteEstimatorPage() {
  // Both start empty — placeholder shows until picked (like ContactForm).
  // ServicePicker speaks in ServiceSelection[] (single-select → length 0 or 1).
  const [serviceSel, setServiceSel] = useState<ServiceSelection[]>([]);
  const [loadId, setLoadId] = useState("");

  return (
    <div className="bg-base-secondary">

      {/* Hero */}
      <SectionWrapper className="bg-base-secondary">
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
      </SectionWrapper>

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
            <SizePicker value={loadId} onChange={setLoadId} />
          </div>

          {/* Truck fill bar */}
          <div className="mb-8">
            <SizeBar loadId={loadId} />
          </div>

          {/* Estimate */}
          <div className="mb-8">
            <PriceEstimate serviceName={serviceSel[0]?.id} loadId={loadId} variant="display" />
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

      {/* Quick Contact */}
      <SectionWrapper className="bg-base-secondary" id="contact-options">
        <div className="scroll-reveal">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
              Get In Touch
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">Reach out now for a fast quote or same day booking.</p>
          </div>
          <QuickContact />
        </div>
      </SectionWrapper>
    </div>
  );
}
