"use client";
import { useEffect, useRef, useState } from "react";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const st = performance.now();
      const f = (t: number) => {
        const k = Math.min((t - st) / 1200, 1);
        setN(Math.round(to * k));
        if (k < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    }, { threshold: 0.6 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref} className="block font-serif text-[40px] font-medium text-sun">{n.toLocaleString()}{suffix}</b>;
}

export default function Stats() {
  return (
    <div className="bg-forest py-10 text-white">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-5 px-6 md:grid-cols-4">
        <div><Count to={2340} /><span className="text-[13px] text-soft">Cleans completed</span></div>
        <div><Count to={97} suffix="%" /><span className="text-[13px] text-soft">Bond returned first time</span></div>
        <div><Count to={14} /><span className="text-[13px] text-soft">Cleaners on the team</span></div>
        <div><Count to={9} suffix=" yrs" /><span className="text-[13px] text-soft">Cleaning homes and offices</span></div>
      </div>
    </div>
  );
}