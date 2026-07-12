import React from 'react';

export default function Wordmark({
  className = "",
  isScrolled = false,
  showName = true,
  showTagline = true,
  nameClassName = "",
}: {
  className?: string;
  isScrolled?: boolean;
  showName?: boolean;
  showTagline?: boolean;
  /** Overrides the name's default responsive text sizes (e.g. "text-lg" in the footer). */
  nameClassName?: string;
}) {
  const nameSize =
    nameClassName || (isScrolled ? 'text-base sm:text-xl xl:text-lg' : 'text-base sm:text-xl');

  return (
    <span className={`min-w-0 ${className}`}>
      {showName && (
        <span
          className={`block font-bold leading-tight transition-all duration-300 text-[var(--color-accent)] ${nameSize}`}
        >
          National Rubbish Removal
        </span>
      )}
      {showTagline && (
        <span className="text-xs font-medium text-[var(--color-white)] hidden sm:block">
          Fast • Reliable • Affordable
        </span>
      )}
    </span>
  );
}
