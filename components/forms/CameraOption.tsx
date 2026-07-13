"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Images, X } from "lucide-react";

interface CameraOptionProps {
  open: boolean;
  onClose: () => void;
  onTakePhoto: () => void;
  onUpload: () => void;
  /** Camera option only meaningful on a device with a camera; hidden on desktop. */
  showCamera?: boolean;
}

export default function CameraOption({
  open,
  onClose,
  onTakePhoto,
  onUpload,
  showCamera = true,
}: CameraOptionProps) {
  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center"
          style={{ padding: 20 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Popup — same shell as every NRR card (gradient bg, yellow border) */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Add a photo or video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.8 }}
            style={{
              position: "relative",
              width: "100%",
              // Never wider or taller than the viewport, whatever the device.
              maxWidth: "min(400px, calc(100vw - 40px))",
              maxHeight: "calc(100dvh - 40px)",
              overflowY: "auto",
              background: "var(--bg-primary)",
              border: "var(--border-width) solid var(--border)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-modal)",
              padding: "2rem 1.5rem 1.5rem",
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              style={{ position: "absolute", top: 12, right: 12 }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[var(--radius-btn)] text-[var(--text-muted)] transition-colors duration-[var(--transition-fast)] hover:bg-[var(--bg-third)] hover:text-[var(--text-primary)]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Heading — matches site heading style */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Add Photos or Videos
              </h3>
              <p className="mt-1 text-sm text-[var(--text-primary)]">
                Helps us quote faster and more accurately
              </p>
            </div>

            {/* Two choices — elevated tiles, yellow chip + label (QuickContact pattern) */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {showCamera && (
                <ChoiceTile
                  icon={<Camera aria-hidden="true" className="w-8 h-8" />}
                  label="Camera"
                  onClick={() => {
                    onTakePhoto();
                    onClose();
                  }}
                />
              )}
              <ChoiceTile
                icon={<Images aria-hidden="true" className="w-8 h-8" />}
                label="Gallery"
                onClick={() => {
                  onUpload();
                  onClose();
                }}
                className={showCamera ? "" : "col-span-2"}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// ── One choice tile — mini QuickContact card on an elevated surface ──
function ChoiceTile({
  icon,
  label,
  onClick,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group flex cursor-pointer flex-col items-center justify-center
        rounded-[var(--radius-card)]
        bg-[var(--bg-third)]
        py-6
        transition-all duration-[var(--transition-fast)]
        hover:bg-[var(--bg-fourth)] hover:-translate-y-0.5
        active:scale-[0.98] active:translate-y-0
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
        ${className}
      `}
    >
      {/* Yellow icon chip — black glyph on yellow, the NRR signature */}
      <span className="mb-3 rounded-[var(--radius-btn)] bg-[var(--color-accent)] p-4 text-[var(--text-black)] transition-colors duration-[var(--transition-fast)] group-hover:bg-[var(--color-accent-dim)]">
        {icon}
      </span>
      <span className="text-base font-bold text-[var(--text-primary)]">
        {label}
      </span>
    </button>
  );
}
