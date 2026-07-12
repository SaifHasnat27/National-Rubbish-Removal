import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-[var(--transition-base)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none hover:shadow-md active:scale-[0.98] cursor-pointer";

  const variantClasses = {

    // Primary — solid NRR yellow, black text. THE jewel CTA, matches Vite.
    primary:
      "rounded-lg normal-case tracking-normal bg-[var(--color-accent)] text-[var(--color-black)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] hover:border-[var(--color-accent-dim)]",

    // Secondary — quieter sibling on dark. Subtler border, warms on hover.
    secondary:
      "rounded-none uppercase bg-[var(--btn-secondary-bg,var(--color-neutral-800))] text-[var(--btn-secondary-text,var(--color-neutral-100))] border border-[var(--btn-secondary-border,var(--color-neutral-600))] hover:bg-[var(--btn-secondary-hover-bg,var(--color-neutral-700))] hover:border-[var(--btn-secondary-hover-border,var(--color-neutral-400))]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2 min-h-[44px]",
    md: "px-6 py-3 text-sm tracking-[var(--tracking-wider)] gap-2 min-h-[44px]",
    lg: "px-8 py-4 text-base tracking-[var(--tracking-wider)] gap-3 min-h-[48px]",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
