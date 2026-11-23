"use client";
import { useEffect, useRef, useState } from "react";
import { Eyebrow, H2 } from "./ui";

const items = ["Kitchen, oven and rangehood", "Bathrooms, tiles and grout", "Windows, tracks and sills", "Skirting boards and light fittings", "Carpets and floors"];

export default function Bond() {
  const ref = useRef<HTMLUListElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.5 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  return (
    <section id="bond" className="pb-[104px]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <Eyebrow>Bond cleans</Eyebrow>
          <H2>Built around the entry condition report.</H2>
          <p className="my-[18px] mb-6 text-[17px] text-mute">
            We clean to your agent’s checklist, room by room, and photograph every item. If anything is marked down in the final inspection, we come back within 72 hours at no cost.
          </p>
          <a href="#price" className="inline-block rounded-md bg-forest px-6 py-3.5 font-semibold text-white">Price my bond clean →</a>
        </div>
        <ul ref={ref} className="rounded-2xl border border-line bg-white p-6">
          {items.map((t, i) => (
            <li key={t} className="flex justify-between gap-2.5 border-b border-line py-3.5 text-sm last:border-0">
              {t}
              <em style={{ transitionDelay: `${i * 200}ms` }}
                className={`h-fit rounded-full px-2.5 py-0.5 text-xs font-bold not-italic transition-colors duration-500 ${on ? "bg-[#e3f4e7] text-[#0b7a33]" : "bg-[#f0ece2] text-mute"}`}>
                Done
              </em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}