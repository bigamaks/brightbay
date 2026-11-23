"use client";
import { useState } from "react";
import { Eyebrow, H2 } from "./ui";

const sites = [["Office", 0.5], ["Medical or dental", 0.7], ["Childcare", 0.65], ["Retail or gym", 0.55], ["Strata common areas", 0.4]] as const;
const visitOpts = [1, 2, 3, 5];
const chip = (on: boolean) =>
  `rounded-lg border-[1.5px] px-3.5 py-3 text-sm font-semibold transition ${on ? "border-sun bg-sun text-forest" : "border-white/20 bg-white/[.06] text-white"}`;

export default function Commercial() {
  const [site, setSite] = useState(0);
  const [area, setArea] = useState(240);
  const [visits, setVisits] = useState(3);
  const perVisit = Math.max(90, Math.round((area * sites[site][1]) / 5) * 5);
  const month = Math.round(perVisit * visits * 4.33);

  return (
    <section id="commercial" className="mx-4 rounded-[40px] bg-forest py-[104px] text-white">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow dark>Commercial</Eyebrow>
        <H2 className="max-w-[760px]">Offices, clinics and strata, cleaned after hours.</H2>
        <div className="mt-8 grid items-start gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-2.5 text-[13px] font-semibold">Type of site</p>
            <div className="flex flex-wrap gap-2.5">{sites.map(([n], i) => <button key={n} onClick={() => setSite(i)} className={chip(site === i)}>{n}</button>)}</div>
            <p className="mb-2.5 mt-5 text-[13px] font-semibold">Floor area</p>
            <div className="flex items-center gap-4">
              <input type="range" min={50} max={2000} step={10} value={area} onChange={(e) => setArea(+e.target.value)} className="h-1.5 w-full accent-sun" />
              <b className="min-w-[72px] text-right">{area} m²</b>
            </div>
            <p className="mb-2.5 mt-5 text-[13px] font-semibold">Visits a week</p>
            <div className="flex gap-2.5">{visitOpts.map((v) => <button key={v} onClick={() => setVisits(v)} className={`${chip(visits === v)} min-w-12`}>{v}</button>)}</div>
          </div>
          <div>
            <p className="mb-4 text-sm text-[#b4c2b8]">Get a ballpark rate now, firm it up after a free 20 minute site walk, and the price is locked for 12 months.</p>
            <div className="rounded-2xl bg-white p-6 text-ink">
              <p className="text-[11px] font-bold uppercase tracking-[.14em] text-mute">Ballpark per visit</p>
              <p className="font-serif text-[58px] leading-none tracking-[-.03em]">${perVisit}</p>
              <p className="mt-1.5 text-[13px] text-mute">About ${month.toLocaleString()} a month at {visits} visit{visits > 1 ? "s" : ""} a week, ex GST</p>
              <ul className="my-[18px] mb-[22px] grid gap-2 text-sm text-mute">
                {["Toilets, basins and bathrooms every visit", "Bins emptied, liners replaced", "Hard floors mopped, carpets vacuumed", "Keys and alarm codes handled securely"].map((t) => (
                  <li key={t}><span className="text-sun">● </span>{t}</li>
                ))}
              </ul>
              <a href="#" className="block rounded-md bg-forest py-3.5 text-center font-semibold text-white">Book a free site walk →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}