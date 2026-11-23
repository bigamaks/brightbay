import type { ReactNode } from "react";

export const Eyebrow = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <p className={`mb-3.5 text-[11px] font-semibold uppercase tracking-[.18em] ${dark ? "text-sun" : "text-mute"}`}>{children}</p>
);

export const H2 = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-serif text-[clamp(32px,4.6vw,54px)] font-medium leading-[1.05] tracking-[-.02em] ${className}`}>{children}</h2>
);

export const Stepper = ({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) => (
  <div className="mb-2.5 flex flex-1 items-center justify-between rounded-lg border-[1.5px] border-line bg-white px-3 py-2 text-sm font-medium text-ink">
    {label}
    <div className="flex items-center gap-3">
      <button aria-label={`Fewer ${label}`} onClick={() => onChange(Math.max(1, value - 1))} className="size-7 rounded-md bg-cream text-base">−</button>
      <span>{value}</span>
      <button aria-label={`More ${label}`} onClick={() => onChange(Math.min(8, value + 1))} className="size-7 rounded-md bg-cream text-base">+</button>
    </div>
  </div>
);