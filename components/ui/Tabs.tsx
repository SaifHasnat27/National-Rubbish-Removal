"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('useTabs must be used within Tabs');
  return ctx;
}

export function Tabs({
  defaultValue,
  children,
  className = '',
}: {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsList must be used within Tabs');

  const { activeTab, setActiveTab } = context;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Extract value + label from each TabsTrigger child for the dropdown
  const options = React.Children.toArray(children).flatMap(child => {
    if (React.isValidElement(child) && (child.props as { value?: string }).value) {
      const props = child.props as { value: string; children: React.ReactNode };
      return [{ value: props.value, label: props.children }];
    }
    return [];
  });

  const activeLabel = options.find(o => o.value === activeTab)?.label ?? activeTab;

  return (
    <>
      {/* ── Mobile: custom dropdown ───────────────────── */}
      <div ref={containerRef} className="relative md:hidden mb-10 w-full">
        {/* Closed state — stays as-is */}
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center justify-between w-full px-5 py-3 bg-[var(--bg-nav)] border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-btn)] shadow-[var(--shadow-dark)] cursor-pointer"
        >
          <span className="text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-[var(--text-on-dark)]">
            {activeLabel}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[var(--text-on-dark-muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {/* Open state — styled to match ServicePicker */}
        {isOpen && (
          <div className="absolute z-50 mt-2 w-full bg-[var(--bg-primary)] border-[length:var(--border-width)] border-[color:var(--border)] rounded-[var(--radius-card)] shadow-[var(--shadow-modal)] overflow-hidden">
            {options.map(o => {
              const isSelected = o.value === activeTab;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => { setActiveTab(o.value); setIsOpen(false); }}
                  className={`
                    w-full text-left px-4 py-3
                    text-[0.6875rem] font-medium tracking-[0.12em] uppercase
                    border-b border-[color:var(--border-light)] last:border-b-0
                    transition-colors duration-[var(--transition-fast)]
                    ${isSelected
                      ? 'bg-[var(--bg-social-icons)] text-[var(--text-on-dark)]'
                      : 'bg-[var(--bg-third)] text-[var(--text-secondary)] hover:bg-[var(--bg-fifth)] hover:text-[var(--text-primary)]'
                    }
                  `}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Desktop: original tab buttons ────────────── */}
      <div
        className={`
          hidden md:flex flex-wrap items-center
          gap-2 md:gap-3
          mb-14
          ${className}
        `}
      >
        {children}
      </div>
    </>
  );
}

export function TabsTrigger({
  value,
  children,
  className = '',
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const isActive = context.activeTab === value;

  return (
    <button
      onClick={() => context.setActiveTab(value)}
      aria-selected={isActive}
      role="tab"
      /* Shape mirrors Button.tsx (border-2, px-6 py-3, min-h-44, pill radius) so the
         tabs and the CTAs above them read as one family. Not <Button> — that owns its
         own hover/variants and lacks the tab's two-state + role/aria needs.
         Shadow alphas are hardcoded: solid hex tokens carry no alpha (GOTCHA #16). */
      className={`
        inline-flex items-center justify-center
        px-6 py-3 min-h-[44px]
        rounded-[var(--radius-btn)] border-2
        text-[0.6875rem] font-medium tracking-[0.12em] uppercase
        transition-all duration-[var(--transition-base)]
        cursor-pointer active:scale-[0.98]
        focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-[3px]
        ${isActive
          ? 'bg-[var(--bg-nav)] border-[var(--bg-nav)] text-[var(--text-on-dark)] shadow-[var(--shadow-dark)]'
          : 'bg-[var(--bg-primary)] border-[var(--bg-primary)] text-[var(--text-secondary)] shadow-[var(--shadow-card)] hover:bg-[var(--bg-social-icons)] hover:border-[var(--bg-social-icons)] hover:text-[var(--text-on-dark)] hover:shadow-[var(--shadow-dark)]'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className = '',
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(TabsContext);
  const container = useRef<HTMLDivElement>(null);

  if (!context) throw new Error('TabsContent must be used within Tabs');

  const isActive = context.activeTab === value;

  useGSAP(() => {
    if (isActive && container.current) {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, { scope: container, dependencies: [isActive] });

  if (!isActive) return null;

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
