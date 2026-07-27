"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { services } from "@/lib/servicesData";
import {
    SERVICE_PRICING,
    LOAD_SIZES,
    calculateQuote,
    formatPrice,
    type ServiceId,
} from "@/lib/quote";

// Map a servicesData name → pricing ServiceId (arrays share order & count).
const nameToServiceId: Record<string, ServiceId> = Object.fromEntries(
    services.map((s, i) => [s.name, SERVICE_PRICING[i].id])
);

// ─── Animated price (springs between values) ────────────────────────────────
function AnimatedPrice({ value }: { value: number }) {
    const spring = useSpring(value, { stiffness: 110, damping: 20 });
    const text = useTransform(spring, (v) => formatPrice(Math.round(v)));
    useEffect(() => {
        spring.set(value);
    }, [value, spring]);
    return <motion.span>{text}</motion.span>;
}

interface PriceEstimateProps {
    /** ServicePicker selection label (value[0]?.id) */
    serviceName?: string;
    /** SizePicker selection id */
    loadId?: string;
    /**
     * "display" — the estimator's big animated number (shows $0 until both picked).
     * "compact" — one-line strip for forms; renders nothing until both picked.
     */
    variant?: "display" | "compact";
    /** Extra classes on the root (e.g. margins from the parent) */
    className?: string;
}

/** Estimated price shell — same lib/quote.ts math everywhere it appears. */
export default function PriceEstimate({ serviceName, loadId, variant = "compact", className = "" }: PriceEstimateProps) {
    const serviceId = serviceName ? nameToServiceId[serviceName] : undefined;
    const load = LOAD_SIZES.find((l) => l.id === loadId);
    const quote = serviceId && load ? calculateQuote({ serviceId, volumeM3: load.m3 }) : null;

    if (variant === "compact") {
        if (!quote) return null;
        return (
            <div className={`rounded-[var(--radius-xl)] bg-[var(--bg-third)] px-4 py-3 text-sm ${className}`}>
                <span className="font-semibold text-[var(--text-primary)]">Estimated Price: </span>
                <span className="font-semibold text-[var(--color-accent)]">
                    {formatPrice(quote.low)} – {formatPrice(quote.high)}
                </span>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Exact price will be confirmed by our team.
                </p>
            </div>
        );
    }

    return (
        <div className="text-center">
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
    );
}
