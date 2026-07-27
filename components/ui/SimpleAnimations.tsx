"use client";

import type { ReactNode } from "react";

/**
 * CardLift — hover interaction shared by the site's "special" cards.
 *
 * On a real pointer device the card rises and casts a soft, layered floor
 * shadow. It moves with `translate` only — no `scale`, `rotate`, `will-change`,
 * or 3D context — so text stays perfectly crisp (those were what caused the
 * blur and the stray hard edge on the old version). Touch devices get no
 * sticky hover state, and reduced-motion users get no movement.
 *
 * GPU cost is nil at rest: nothing is promoted to its own layer until the
 * pointer is actually over the card, which keeps the page fast on mobile.
 */
type CardLiftProps = {
  children: ReactNode;
  className?: string;
  /** Shrink-wrap to content width instead of filling the container. */
  fit?: boolean;
};

function CardLift({ children, className = "", fit = false }: CardLiftProps) {
  return (
    <div className={`card-lift${fit ? " card-lift--fit" : ""} ${className}`}>
      {children}
      <style jsx>{`
        .card-lift {
          height: 100%;
          /* Match the child card's rounding so the wrapper box (and its floor
             shadow) share the card's rounded corners — otherwise a square
             rectangle shows around the rounded card on hover. */
          border-radius: var(--radius-card);
          transition:
            transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .card-lift--fit {
          display: inline-block;
          width: fit-content;
          height: auto;
        }

        /* Lift only where a precise pointer can hover — never on touch. */
        @media (hover: hover) and (pointer: fine) {
          .card-lift:hover {
            transform: translateY(-10px);
            box-shadow:
              0 10px 20px -12px rgba(0, 0, 0, 0.18),
              0 26px 46px -22px rgba(0, 0, 0, 0.28);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-lift {
            transition: box-shadow 200ms ease;
          }
          .card-lift:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

/** For cards that fill their grid cell / container (service + contact cards). */
export const Card3DHover = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <CardLift className={className}>{children}</CardLift>;

/** For standalone cards sized to their content (e.g. the specialty card). */
export const Card3DHoverFit = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <CardLift className={className} fit>
    {children}
  </CardLift>
);
