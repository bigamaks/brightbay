
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Eyebrow, H2 } from "./ui";

export default function Compare() {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = (x: number) => {
    if (!box.current) return;

    const r = box.current.getBoundingClientRect();

    setPos(
      Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100))
    );
  };

  return (
    <section className="rounded-t-[48px] bg-forest py-[104px] text-white">
      <div className="mx-auto max-w-[1120px] px-6">

        <div className="mx-auto mb-10 max-w-[560px] text-center">
          <Eyebrow dark>The difference</Eyebrow>
          <H2>Drag across the room.</H2>
          <p className="mt-3.5 text-[#b4c2b8]">
            One room, two frames, one camera that never moved.
            Nothing here has been filtered, staged or tidied for the photo.
          </p>
        </div>

        {/* Before / After comparison */}
        <div
          ref={box}
          className="relative mx-auto aspect-[3/2] max-w-[780px] cursor-ew-resize touch-none select-none overflow-hidden rounded-lg"
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging.current) move(e.clientX);
          }}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >

          {/* AFTER image - background */}
          <div className="absolute inset-0">
            <Image
              src="/images/after-img.jpg"
              alt="Clean room after professional cleaning"
              fill
              priority
              sizes="(max-width: 780px) 100vw, 780px"
              className="object-cover"
              draggable={false}
            />
          </div>

          {/* BEFORE image - clipped foreground */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - pos}% 0 0)`,
            }}
          >
            <Image
              src="/images/before-img.jpeg"
              alt="Room before professional cleaning"
              fill
              sizes="(max-width: 780px) 100vw, 780px"
              className="object-cover"
              draggable={false}
            />
          </div>

          {/* Labels */}
          <span className="absolute bottom-3.5 left-3.5 z-[2] rounded-sm bg-black/55 px-2.5 py-1 text-[11px] uppercase tracking-[.14em]">
            Before
          </span>

          <span className="absolute bottom-3.5 right-3.5 z-[2] rounded-sm bg-black/55 px-2.5 py-1 text-[11px] uppercase tracking-[.14em]">
            After
          </span>

          {/* Slider handle */}
          <div
            className="absolute inset-y-0 z-[3] w-0.5 bg-white"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sun font-bold text-forest shadow-lg">
              ↔
            </div>
          </div>

        </div>

        <p className="mt-4 text-center text-[13px] text-soft">
          Photos taken before and after a standard two-hour clean.
        </p>

      </div>
    </section>
  );
}
