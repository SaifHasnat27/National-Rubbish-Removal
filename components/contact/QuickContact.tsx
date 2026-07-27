import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { Card3DHover } from '@/components/ui/SimpleAnimations';

const contacts = [
  {
    name: "Call Us",
    detail: BUSINESS.phone,
    desc: "Speak directly with our team",
    icon: <Phone aria-hidden="true" className="w-8 h-8" />,
    href: `tel:${BUSINESS.phoneRaw}`,
    external: false,
    show: true,
  },
  {
    name: "Email Us",
    detail: BUSINESS.email,
    desc: "Send us photos and details for accurate quotes",
    icon: <Mail aria-hidden="true" className="w-8 h-8" />,
    href: `mailto:${BUSINESS.email}`,
    external: false,
    show: true,
  },
  {
    name: "WhatsApp",
    detail: "Text Us Online",
    desc: "Quick questions? Chat with our support team",
    icon: <MessageCircle aria-hidden="true" className="w-8 h-8" />,
    href: BUSINESS.whatsappLink,
    external: true,
    show: !!BUSINESS.whatsappLink,
  },
].filter(c => c.show);

export default function QuickContact({ cardClassName = 'bg-base' }: { cardClassName?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
      {contacts.map((contact) => {
        const externalProps = contact.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <Card3DHover key={contact.name}>
            {/* Whole card is ONE link — hovering anywhere lights every part via
                `group`, and the entire card is the tap target. */}
            <a
              href={contact.href}
              {...externalProps}
              aria-label={`${contact.name} — ${contact.detail}`}
              className={`
                group
                card card-lift-managed
                ${cardClassName}
                h-full flex flex-col text-center
                !p-8
                transition-all duration-[var(--transition-base)]
              `}
            >
              {/* Icon chip — orange square, white icon */}
              <span className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-6 bg-[var(--color-accent)] group-hover:bg-[var(--color-accent-dim)] transition-colors duration-[var(--transition-base)] text-[var(--text-black)]">
                {contact.icon}
              </span>

              <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                {contact.name}
              </h3>

              <span className="text-base md:text-lg font-semibold mb-3 text-[var(--text-accent)] [overflow-wrap:anywhere]">
                {contact.detail}
              </span>

              {/* min-h keeps the buttons aligned across cards regardless of copy length */}
              <p className="text-sm mb-6 min-h-[48px] text-[var(--text-secondary)]">
                {contact.desc}
              </p>

              {/* Not <Button> — that variant owns its own hover:, which fires on the
                  button rather than the card. Same recipe as Button's `primary`,
                  rewritten with group-hover: so it reacts to the whole card. */}
              <span
                className="
                  mt-auto inline-flex items-center justify-center w-full
                  min-h-[44px] px-6 py-3 gap-2
                  text-sm font-medium tracking-[var(--tracking-wider)]
                  rounded-lg border-2
                  bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-white)]
                  group-hover:bg-[var(--color-accent-dim)] group-hover:border-[var(--color-accent-dim)]
                  shadow-[inset_0_2px_2px_rgba(255,255,255,0.30),inset_0_-2px_2px_rgba(0,0,0,0.18)]
                  group-hover:shadow-[inset_0_2px_2px_rgba(255,255,255,0.30),inset_0_-2px_2px_rgba(0,0,0,0.18),0_10px_24px_rgba(0,0,0,0.25)]
                  transition-all duration-[var(--transition-base)]
                "
              >
                Contact Now
              </span>
            </a>
          </Card3DHover>
        );
      })}
    </div>
  );
}
