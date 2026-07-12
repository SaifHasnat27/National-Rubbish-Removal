"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Building, HardHat, CheckCircle2 } from 'lucide-react';
import { Card3DHover } from '@/components/ui/SimpleAnimations';
import { services } from '@/lib/servicesData';
import type { LucideIcon } from 'lucide-react';


// ─── Icon Map ────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
    Home, Building, HardHat,
};

export default function ServiceCards({ cardClassName = 'bg-base' }: { cardClassName?: string }) {
    return (
        /*
         * items-stretch (grid default) makes every card fill its row height.
         * Each card is a flex column; `mt-auto` on the Learn More row pushes
         * it to the bottom — so all buttons align on desktop where cards sit
         * side-by-side. On mobile each card is its own height, button sits
         * naturally after the text. Zero JS, original spacing preserved.
         */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
                const Icon = iconMap[service.iconName];
                return (
                    <Card3DHover key={service.id}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: index * 0.08, duration: 0.5 },
                                },
                            }}
                            className={`${cardClassName} group h-full flex flex-col border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-card)] overflow-hidden transition-all duration-[var(--transition-base)]`}
                        >
                            {/* Service image — zooms in only when hovering the image itself */}
                            <div className="group/image relative overflow-hidden">
                                <Image
                                    src={service.cardImage}
                                    alt={`${service.name} - Professional ${service.name.toLowerCase()} services in Sydney with same-day availability`}
                                    width={600}
                                    height={400}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    className="w-full h-48 object-cover group-hover/image:scale-110 transition-transform duration-500"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                                />
                                {/* Service icon — white icon in a yellow chip, overlaid on the image */}
                                <div className="icon-wrapper absolute bottom-4 left-4 p-3 rounded-[var(--radius-btn)] bg-[var(--color-accent)] text-[var(--text-black)] transition-transform duration-[var(--transition-base)]">
                                    {Icon && <Icon aria-hidden="true" className="w-6 h-6 stroke-[1.5]" />}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">

                            {/* Service name */}
                            <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] mb-3 text-left leading-snug">
                                {service.name}
                            </h3>

                            {/* Short description */}
                            <p className="text-[var(--text-secondary)] font-light text-sm leading-[var(--leading-relaxed)] mb-7 text-left">
                                {service.shortDesc}
                            </p>

                            <ul className="space-y-2.5 mb-7">
                                {service.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-center gap-2.5">
                                        <CheckCircle2
                                            className="w-4 h-4 text-[var(--color-accent)] shrink-0"
                                            aria-hidden="true"
                                        />
                                        <span className="text-[var(--text-secondary)] text-xs leading-snug">
                                            {bullet.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Learn more — mt-auto keeps it pinned to bottom */}
                            <Link
                                href={`/services?tab=${service.id}`}
                                className="mt-auto inline-flex items-center self-start text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors duration-[var(--transition-fast)] border-b md:border-b-2 border-current pb-0.5"
                            >
                                Learn more
                            </Link>
                            </div>
                        </motion.div>
                    </Card3DHover>
                );
            })}
        </div>
    );
}
