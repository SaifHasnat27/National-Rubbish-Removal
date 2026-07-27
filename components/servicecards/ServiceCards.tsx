"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Card3DHover } from '@/components/ui/SimpleAnimations';
import { services } from '@/lib/servicesData';

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
                            className={`card card-lift-managed ${cardClassName} group h-full flex flex-col !p-0 overflow-hidden`}
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
                            </div>

                            <div className="p-8 flex flex-col flex-1">

                            {/* Service name */}
                            <h3 className="text-xl font-bold mb-3 text-left leading-snug text-[var(--text-primary)]">
                                {service.name}
                            </h3>

                            {/* Short description */}
                            <p className="text-[var(--text-secondary)] text-sm leading-[var(--leading-relaxed)] mb-7 text-left">
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
