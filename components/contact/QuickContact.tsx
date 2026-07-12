import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { Card3DHover } from '@/components/ui/SimpleAnimations';

const contacts = [
  {
    name: "Call Us Now",
    detail: BUSINESS.phone,
    highlight: "Response within 2 hours",
    desc: "Speak directly with our team for immediate booking and quotes",
    icon: <Phone aria-hidden="true" className="w-8 h-8" />,
    href: `tel:${BUSINESS.phoneRaw}`,
    external: false,
    show: true,
  },
  {
    name: "Email Us",
    detail: BUSINESS.email,
    highlight: "Response within 2 hours",
    desc: "Send us photos and details for accurate quotes",
    icon: <Mail aria-hidden="true" className="w-8 h-8" />,
    href: `mailto:${BUSINESS.email}`,
    external: false,
    show: true,
  },
  {
    name: "Live Chat",
    detail: "Text Us Online",
    highlight: "Available 24/7",
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
            <div
              className={`
                ${cardClassName}
                h-full flex flex-col text-center
                p-8
                border-[length:var(--border-width)] border-[color:var(--border)]
                rounded-[var(--radius-card)]
                transition-all duration-[var(--transition-base)]
              `}
            >
              {/* Icon chip — yellow square, black icon */}
              <a
                href={contact.href}
                {...externalProps}
                className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] transition-colors duration-[var(--transition-fast)] text-[var(--text-black)]"
                aria-label={contact.name}
              >
                {contact.icon}
              </a>

              <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                {contact.name}
              </h3>

              <a
                href={contact.href}
                {...externalProps}
                className="text-base md:text-lg font-semibold mb-1 text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors duration-[var(--transition-fast)] [overflow-wrap:anywhere]"
                aria-label={contact.detail}
              >
                {contact.detail}
              </a>

              <p className="text-sm font-medium mb-4 text-[var(--text-accent)]">
                {contact.highlight}
              </p>

              <p className="text-sm mb-6 flex-grow text-[var(--text-primary)]">
                {contact.desc}
              </p>

              <a href={contact.href} {...externalProps} className="mt-auto" aria-label="Contact Now">
                <Button variant="primary" size="md" className="w-full">
                  Contact Now
                </Button>
              </a>
            </div>
          </Card3DHover>
        );
      })}
    </div>
  );
}
