"use client";

import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageContactForm from "@/components/forms/PageContactForm";

export default function TestPage() {
  return (
    <div className="bg-base-secondary">

      {/* Hero — nav-aware top padding (same pattern as quote-estimator) */}
      <section className="bg-base-secondary pt-[calc(var(--nav-height)+0rem)] pb-12 md:pt-[calc(var(--nav-height)+3rem)] md:pb-20">
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <ImagePlus aria-hidden="true" className="mx-auto mb-4 text-[var(--color-accent)]" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
              Photo & Video Upload Test
            </h1>
            <p className="text-xl text-[var(--text-primary)]">
              Contact form with camera and gallery options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <SectionWrapper className="bg-base-secondary">
        <div className="card !p-6 md:!p-8 max-w-3xl mx-auto hover:!translate-y-0">
          <PageContactForm />
        </div>
      </SectionWrapper>
    </div>
  );
}
