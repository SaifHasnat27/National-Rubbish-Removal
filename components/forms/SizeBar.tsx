"use client";

import { motion } from "framer-motion";
import { LOAD_SIZES, FULL_LOAD_M3 } from "@/lib/quote";

interface SizeBarProps {
    /** SizePicker selection id ("" / undefined = empty bar) */
    loadId?: string;
}

/** "Truck space used" fill bar — reads LOAD_SIZES/FULL_LOAD_M3 from lib/quote.ts. */
export default function SizeBar({ loadId }: SizeBarProps) {
    const load = LOAD_SIZES.find((l) => l.id === loadId);
    const fillPercent = load ? Math.min((load.m3 / FULL_LOAD_M3) * 100, 100) : 0;

    return (
        <div>
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
    );
}
