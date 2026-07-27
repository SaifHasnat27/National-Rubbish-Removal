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
    "inline-flex items-center justify-center font-medium transition-all duration-[var(--transition-base)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";

  const variantClasses = {

    // Primary — solid orange accent, white text. THE jewel CTA.
    primary:
      "rounded-lg normal-case tracking-normal bg-[var(--color-accent)] text-[var(--color-white)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent-dim)] hover:border-[var(--color-accent-dim)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.30),inset_0_-2px_2px_rgba(0,0,0,0.18)] hover:shadow-[inset_0_2px_2px_rgba(255,255,255,0.30),inset_0_-2px_2px_rgba(0,0,0,0.18),0_10px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0",

    // Secondary — charcoal sibling to primary. Same 3D pop recipe, same shape, dark fill.
    secondary:
      "rounded-lg normal-case tracking-normal bg-[var(--bg-nav)] text-[var(--text-black)] border-2 border-[var(--bg-nav)] hover:bg-[var(--color-accent-dim)] hover:border-[var(--color-accent-dim)] shadow-[inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-2px_2px_rgba(0,0,0,0.35)] hover:shadow-[inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-2px_2px_rgba(0,0,0,0.35),0_10px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0",
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
