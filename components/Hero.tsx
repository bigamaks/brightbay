
"use client";

import { useEffect, useRef, useState } from "react";
import { useQuote } from "./QuoteProvider";
import { Stepper } from "./ui";


const VIDEO_URL = "/videos/cleaning-hero.mp4";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [showPill, setShowPill] = useState(true);
  const { bed, setBed, bath, setBath, price } = useQuote();

  useEffect(() => {
    let raf = 0;

    const on = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        if (!ref.current) return;

        const r = ref.current.getBoundingClientRect();
        const span = r.height - innerHeight;

        setP(
          Math.max(0, Math.min(1, -r.top / (span * 0.75)))
        );

        setShowPill(r.bottom > innerHeight * 0.6);
      });
    };

    addEventListener("scroll", on, { passive: true });
    on();

    return () => {
      removeEventListener("scroll", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  const d = 1 - p * 0.92;
  const endOpacity = Math.max(0, Math.min(1, 1.5 - d * 2));

  return (
    <header
      ref={ref}
      className="relative min-h-[150vh] text-white isolate"
    >
      {/* Sticky video background */}
      <div className="sticky top-0 -mb-[100vh] h-screen overflow-hidden bg-[#25352b]">

        {/* VIDEO PLACEHOLDER */}
        {VIDEO_URL ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[#25352b]">
            <div className="text-center">
              <div className="mx-auto mb-3 grid size-16 place-items-center rounded-full border border-white/30 bg-white/10">
                <span className="text-2xl">▶</span>
              </div>
              <p className="text-sm font-medium tracking-widest text-white/70">
                HERO VIDEO PLACEHOLDER
              </p>
              <p className="mt-2 text-xs text-white/40">
                Add your cleaning video to /public/videos/
              </p>
            </div>
          </div>
        )}

        {/* Dust / grime overlay */}
        <div
          className="absolute inset-0"
          style={{
            opacity: d,
            backdropFilter: `blur(${d * 5}px)`,
          }}
        >
          <div className="grime" />
        </div>

        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,22,17,.88),rgba(14,22,17,.5)_60%,rgba(14,22,17,.25))]" />
      </div>

      {/* Hero content */}
      <div className="relative z-[2] mx-auto grid max-w-[1120px] items-start gap-11 px-6 pt-28 md:grid-cols-[1.15fr_.85fr] md:pt-[130px]">

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px]">
            <b className="tracking-[2px] text-sun">★★★★★</b>
            4.9 from 212 Google reviews
          </div>

          <h1 className="font-serif text-[clamp(42px,6.4vw,76px)] font-medium leading-[1.05] tracking-[-.02em]">
            You stopped noticing{" "}
            <em className="text-sun">the dust.</em>
          </h1>

          <p className="my-5 max-w-[520px] text-lg text-[#dfe5df]">
            Mess builds up slowly enough that nobody watches it happen.
            Keep scrolling, and watch one room come back.
            Then get your exact price in 30 seconds.
          </p>

          <div className="flex flex-wrap gap-2.5">
            <a
              href="#price"
              className="rounded-md bg-sun px-6 py-3.5 font-semibold text-forest transition hover:bg-sun-d"
            >
              See my price →
            </a>

            <a
              href="#bond"
              className="rounded-md border-[1.5px] border-white/40 bg-white/10 px-6 py-3.5 font-semibold"
            >
              Moving out? Bond cleans
            </a>
          </div>

          <ul className="mt-5 grid max-w-[520px] grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {[
              "Police checked, employed staff",
              "$20m public liability",
              "72 hour re-clean guarantee",
              "No lock-in, skip a clean free",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid size-[18px] flex-none place-items-center rounded-[5px] bg-sun text-[11px] font-extrabold text-forest">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing calculator */}
        <div className="rounded-2xl bg-white p-6 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,.5)]">
          <h3 className="mb-3.5 font-serif text-[22px]">
            Your price in 30 seconds
          </h3>

          <Stepper label="Bedrooms" value={bed} onChange={setBed} />
          <Stepper label="Bathrooms" value={bath} onChange={setBath} />

          <p className="mb-0.5 mt-2.5 font-serif text-[56px] leading-none tracking-[-.03em]">
            ${price}
          </p>

          <small className="text-[13px] text-mute">
            Fixed price, supplies and equipment included
          </small>

          <a
            href="#price"
            className="mt-3.5 block rounded-md bg-forest py-3.5 text-center font-semibold text-white"
          >
            Pick a time →
          </a>
        </div>
      </div>

      {/* Scroll ending */}
      <div
        className="relative z-[2] grid min-h-[80vh] place-items-center px-6 text-center"
        style={{ opacity: endOpacity }}
      >
        <div>
          <h2 className="font-serif text-[clamp(32px,4.6vw,54px)] font-medium [text-shadow:0_2px_30px_rgba(0,0,0,.45)]">
            There it is.
          </h2>

          <p className="mt-3 text-lg [text-shadow:0_2px_20px_rgba(0,0,0,.5)]">
            That’s one room. Imagine the rest of the house.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`fixed bottom-6 left-6 z-40 hidden rounded-full bg-[rgba(14,22,17,.8)] px-3.5 py-2 text-xs backdrop-blur-md transition-opacity md:block ${
          showPill ? "opacity-100" : "opacity-0"
        }`}
      >
        Dust cleared{" "}
        <b className="text-sun">{Math.round(p * 100)}%</b>
      </div>
    </header>
  );
}

