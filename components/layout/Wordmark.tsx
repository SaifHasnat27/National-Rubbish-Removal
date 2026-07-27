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
  /* Sizes are static. The scrolled-state shrink used to animate font-size,
     which re-runs layout on every frame of the transition — the whole nav
     (and the page below it) reflowed 60x per collapse. The Link wrapper in
     Navbar now scales the logo + wordmark together with a transform instead,
     which the compositor handles for free. See gsap-performance: animate
     transform/opacity, never width/height/font-size. */
  const nameSize = nameClassName || 'text-base sm:text-xl';

  return (
    <span className={`min-w-0 ${className}`}>
      {showName && (
        <span
          className={`block font-bold leading-tight text-[var(--color-accent)] ${nameSize}`}
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
