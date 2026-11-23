"use client";
import { useState } from "react";
import { useQuote, types, extras, type TypeKey } from "./QuoteProvider";
import { Eyebrow, H2, Stepper } from "./ui";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const slots = ["8–10am", "10am–12pm", "12–2pm"];
const opt = (on: boolean) =>
  `rounded-lg border-[1.5px] px-3.5 py-3 text-left text-sm font-semibold transition ${on ? "border-forest bg-sun text-forest" : "border-line bg-white"}`;

export default function Booking() {
  const { type, setType, bed, setBed, bath, setBath, picked, toggle, price, hrs } = useQuote();
  const [step, setStep] = useState(0);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(0);
  const [done, setDone] = useState(false);
  const t = types[type];
  const label = "mb-2.5 mt-5 text-[13px] font-semibold";

  return (
    <section id="price" className="pb-[104px]">
      <div className="mx-auto max-w-[1120px] px-6 pt-[104px]">
        <Eyebrow>Instant quote</Eyebrow>
        <H2 className="max-w-[640px]">Your exact price, then pick a time.</H2>

        <div className="mt-10 grid overflow-hidden rounded-[20px] shadow-[0_30px_60px_-30px_rgba(27,42,34,.4)] md:grid-cols-[1.3fr_1fr]">
          <div className="bg-white p-7">
            <div className="mb-6 flex gap-2">
              {["1. Your home", "2. Date and time", "3. Details"].map((s, i) => (
                <button key={s} onClick={() => setStep(i)}
                  className={`flex-1 border-t-[3px] pt-2 text-left text-xs ${step === i ? "border-sun font-bold text-ink" : "border-line font-medium text-mute"}`}>{s}</button>
              ))}
            </div>

            {step === 0 && (
              <>
                <p className="mb-2.5 text-[13px] font-semibold">Type of clean</p>
                <div className="flex flex-wrap gap-2.5">
                  {(Object.keys(types) as TypeKey[]).map((k) => (
                    <button key={k} onClick={() => setType(k)} className={`${opt(type === k)} min-w-[110px] flex-1`}>
                      {types[k].label}
                      <small className="block text-xs font-normal opacity-70">{types[k].sub}</small>
                    </button>
                  ))}
                </div>
                <p className={label}>Size of home</p>
                <div className="flex flex-wrap gap-2.5">
                  <div className="flex min-w-[160px] flex-1"><Stepper label="Bedrooms" value={bed} onChange={setBed} /></div>
                  <div className="flex min-w-[160px] flex-1"><Stepper label="Bathrooms" value={bath} onChange={setBath} /></div>
                </div>
                <p className={label}>Extras</p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {extras.map(([name, p], i) => (
                    <label key={name} className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border-[1.5px] border-line px-3.5 py-[11px] text-sm has-[:checked]:border-forest has-[:checked]:bg-[#fff6e6]">
                      <span className="flex items-center gap-2">
                        <input type="checkbox" checked={picked.includes(i)} onChange={() => toggle(i)} />{name}
                      </span>
                      <span className="text-[13px] text-mute">+${p}</span>
                    </label>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-6 rounded-md bg-forest px-6 py-3.5 font-semibold text-white">Choose a time →</button>
              </>
            )}

            {step === 1 && (
              <>
                <p className="mb-2.5 text-[13px] font-semibold">Pick a day</p>
                <div className="flex flex-wrap gap-2.5">{days.map((d, i) => <button key={d} onClick={() => setDay(i)} className={`${opt(day === i)} min-w-16`}>{d}</button>)}</div>
                <p className={label}>Arrival window</p>
                <div className="flex flex-wrap gap-2.5">{slots.map((s, i) => <button key={s} onClick={() => setSlot(i)} className={opt(slot === i)}>{s}</button>)}</div>
                <button onClick={() => setStep(2)} className="mt-6 rounded-md bg-forest px-6 py-3.5 font-semibold text-white">Add my details →</button>
              </>
            )}

            {step === 2 && (
              <div className="grid gap-2.5">
                {["Full name", "Mobile number", "Address"].map((p) => (
                  <input key={p} placeholder={p} className="w-full rounded-lg border-[1.5px] border-line p-3 outline-none focus:border-forest" />
                ))}
                <button onClick={() => setDone(true)} className="rounded-md bg-sun px-6 py-3.5 font-semibold text-forest">
                  {done ? "Concept preview: nothing is sent" : "Confirm booking"}
                </button>
              </div>
            )}
          </div>

          <aside className="bg-forest p-7 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-sun">{t.label} clean, fixed price</p>
            <p className="mb-0.5 mt-2 font-serif text-[68px] leading-none tracking-[-.03em]">${price}</p>
            <p className="text-[13px] text-soft">Includes GST, supplies and equipment</p>
            <div className="my-5 grid grid-cols-2 gap-2.5">
              <div className="rounded-[10px] bg-white/[.07] p-3"><b className="block text-base">{hrs} hrs</b><small className="text-xs text-soft">With a team of 2</small></div>
              <div className="rounded-[10px] bg-white/[.07] p-3"><b className="block text-base">Photo report</b><small className="text-xs text-soft">Sent after every clean</small></div>
            </div>
            <p className="text-[13px] text-soft">{t.label} clean, {bed} bed {bath} bath</p>
          </aside>
        </div>
      </div>
    </section>
  );
}