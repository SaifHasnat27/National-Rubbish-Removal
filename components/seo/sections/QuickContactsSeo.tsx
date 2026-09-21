import { Phone, Mail, MessageCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { BUSINESS } from '@/lib/constants';

const CONTACTS = [
  {
    name: 'Call Us',
    detail: BUSINESS.phone,
    desc: 'Speak directly with our team',
    href: `tel:${BUSINESS.phoneRaw}`,
    Icon: Phone,
    external: false,
  },
  {
    name: 'Email Us',
    detail: BUSINESS.email,
    desc: 'Send us photos and details for accurate quotes',
    href: `mailto:${BUSINESS.email}`,
    Icon: Mail,
    external: false,
  },
  {
    name: 'WhatsApp',
    detail: 'Text Us Online',
    desc: 'Quick questions? Chat with our support team',
    href: BUSINESS.whatsappLink,
    Icon: MessageCircle,
    external: true,
  },
] as const;

type QuickContactsSeoProps = {
  heading: string;
  subheading: string;
  id?: string;
};

export default function QuickContactsSeo({
  heading,
  subheading,
  id = 'contact-options',
}: QuickContactsSeoProps) {
  return (
    <SectionWrapper className="bg-base-secondary font-[family-name:var(--font-body)]" id={id}>
      <div className="text-center mb-12">
        <h2 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-[var(--text-primary)]">
          {heading}
        </h2>
        <p className="text-xl text-[var(--text-secondary)]">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {CONTACTS.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            aria-label={`${contact.name} — ${contact.detail}`}
            className="group card bg-base h-full flex flex-col text-center !p-8"
          >
            <span className="p-4 rounded-[var(--radius-card)] w-fit mx-auto mb-6 bg-[var(--color-accent)] text-[var(--text-black)] transition-colors duration-[var(--transition-base)] group-hover:bg-[var(--color-accent-dim)]">
              <contact.Icon aria-hidden="true" className="w-8 h-8" />
            </span>

            <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{contact.name}</h3>

            <span className="text-[clamp(0.8125rem,3.7vw,1rem)] md:text-lg font-semibold mb-3 text-[var(--text-accent)] [overflow-wrap:anywhere]">
              {contact.detail}
            </span>

            <p className="text-sm mb-6 min-h-[48px] text-[var(--text-secondary)]">{contact.desc}</p>

            <span className="mt-auto inline-flex items-center justify-center w-full min-h-[44px] px-6 py-3 gap-2 text-sm font-medium tracking-[var(--tracking-wider)] rounded-lg border-2 bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-white)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.30),inset_0_-2px_2px_rgba(0,0,0,0.18)] transition-all duration-[var(--transition-base)] group-hover:bg-[var(--color-accent-dim)] group-hover:border-[var(--color-accent-dim)] group-hover:shadow-[inset_0_2px_2px_rgba(255,255,255,0.30),inset_0_-2px_2px_rgba(0,0,0,0.18),0_10px_24px_rgba(0,0,0,0.25)]">
              Contact Now
            </span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
