"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

export const types = {
  regular: { label: "Regular", sub: "Keep on top of it", base: 60, bed: 18, bath: 22, mult: 1 },
  deep: { label: "Deep clean", sub: "First clean, spring", base: 90, bed: 26, bath: 32, mult: 1.5 },
  bond: { label: "Bond clean", sub: "Moving out", base: 110, bed: 34, bath: 42, mult: 1.8 },
} as const;
export type TypeKey = keyof typeof types;

export const extras = [
  ["Inside the oven", 60], ["Inside the fridge", 35], ["Inside windows and tracks", 55],
  ["Balcony or patio", 40], ["Carpet clean, per bedroom", 35], ["Change bed linen", 25],
] as const;

type Quote = {
  type: TypeKey; setType: (t: TypeKey) => void;
  bed: number; setBed: (n: number) => void;
  bath: number; setBath: (n: number) => void;
  picked: number[]; toggle: (i: number) => void;
  price: number; hrs: number;
};

const Ctx = createContext<Quote | null>(null);
export const useQuote = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useQuote must be used inside QuoteProvider");
  return c;
};

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [type, setType] = useState<TypeKey>("regular");
  const [bed, setBed] = useState(3);
  const [bath, setBath] = useState(2);
  const [picked, setPicked] = useState<number[]>([]);

  const t = types[type];
  const price = t.base + bed * t.bed + bath * t.bath + picked.reduce((s, i) => s + extras[i][1], 0);
  const hrs = Math.max(1.5, Math.round((1 + bed * 0.8 + bath * 0.9) * t.mult * 2) / 2);
  const toggle = (i: number) => setPicked((x) => (x.includes(i) ? x.filter((n) => n !== i) : [...x, i]));

  return (
    <Ctx.Provider value={{ type, setType, bed, setBed, bath, setBath, picked, toggle, price, hrs }}>
      {children}
    </Ctx.Provider>
  );
}