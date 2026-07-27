"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { LOAD_SIZES } from "@/lib/quote";

interface SizePickerProps {
    value: string; // LoadSize id ("" = nothing picked)
    onChange: (id: string) => void;
    disabled?: boolean;
    error?: string;
}

export default function SizePicker({ value, onChange, disabled, error }: SizePickerProps) {
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
            {/* Trigger button */}
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={`
                    w-full px-4 py-3
                    text-[var(--text-primary)]
                    bg-base-secondary
                    border border-[var(--border)]
                    rounded-[var(--radius-xl)] text-sm leading-[var(--leading-normal)]
                    transition-all duration-[var(--transition-fast)]
                    focus:outline-none focus:border-[var(--color-neutral-400)]
                    focus:ring-1 focus:ring-[var(--color-neutral-400)]
                    hover:border-[var(--border-light)]
                    flex justify-between items-center gap-2
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                    ${error ? "border-red-600" : ""}
                `}
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
                <ChevronDown className={`w-4 h-4 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown */}
            {isOpen && !disabled && (
                <div className="absolute z-50 mt-2 w-full bg-base border border-[var(--border)] rounded-[var(--radius-xl)] overflow-hidden shadow-lg">
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
                                className={`
                                    w-full text-left px-4 py-3
                                    border-b border-[var(--border)] last:border-b-0
                                    transition-colors duration-[var(--transition-fast)]
                                    ${isSelected
                                        ? "bg-bg-secondary text-[var(--text-primary)]"
                                        : "bg-bg-third text-[var(--text-secondary)] hover:bg-bg-fifth hover:text-[var(--text-primary)]"
                                    }
                                `}
                            >
                                <span className="block text-sm font-medium">
                                    {l.label} <span className="text-[var(--color-accent)]">≈ {l.m3} m³</span>
                                </span>
                                <span className="block text-xs text-[var(--text-muted)] mt-0.5">{l.hint}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
