
"use client";

import { useState } from "react";
import { Eyebrow, H2 } from "./ui";

const tabs = [
  {
    title: "Kitchen and bathrooms",
    text: "The rooms that need it most. Hobs, sinks, tiles, mirrors and taps, scrubbed and wiped down.",
    method: "Eco products",
    access: "Cleaner brings supplies",
    typical: "2–3 hours",
    note: "We use the same checklist in every kitchen and bathroom, so nothing gets skipped on a busy day.",
    rooms: ["bath", "kitchen"],
  },
  {
    title: "Living areas and bedrooms",
    text: "Dusting, vacuuming, mopping and bed changes. The everyday reset.",
    method: "HEPA vacuum + microfibre",
    access: "Whole home",
    typical: "2–4 hours",
    note: "Microfibre traps dust instead of pushing it around, and a HEPA filter keeps it out of the air.",
    rooms: ["bed", "living"],
  },
  {
    title: "Deep clean and move-out",
    text: "Inside the oven, fridge and cupboards, plus skirting boards and fittings. For when it has been a while.",
    method: "Two-person team",
    access: "Every room",
    typical: "5–8 hours",
    note: "Ideal before guests, after building work, or at the end of a tenancy.",
    rooms: ["bath", "kitchen", "bed", "living"],
  },
];

function HouseIllustration({ activeRooms }: { activeRooms: string[] }) {
  const isActive = (room: string) => activeRooms.includes(room);

  const roomClass = (room: string) =>
    `transition-all duration-500 ${
      isActive(room)
        ? "fill-[#e9bd55]/60 stroke-[#b58b32]"
        : "fill-[#f2eee4] stroke-[#d4cec0]"
    }`;

  const labelClass = "fill-[#344339] text-[9px] font-semibold tracking-[1.5px]";

  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      <svg
        viewBox="0 0 440 320"
        className="w-full overflow-visible"
        role="img"
        aria-label="Illustrated house floor plan showing bathroom, bedroom, kitchen and living room"
      >
        <defs>
          <filter id="house-shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow
              dx="0"
              dy="9"
              stdDeviation="9"
              floodColor="#1b2a22"
              floodOpacity=".12"
            />
          </filter>
        </defs>

        {/* Roof */}
        <path
          d="M29 83 L220 17 L411 83"
          fill="#d8d3c7"
          stroke="#aaa797"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        <path
          d="M45 83 L220 28 L395 83"
          fill="none"
          stroke="#f5f0e5"
          strokeWidth="2"
        />

        {/* House structure */}
        <g filter="url(#house-shadow)">
          <rect
            x="35"
            y="78"
            width="370"
            height="207"
            rx="3"
            fill="#e8e3d7"
            stroke="#a9a494"
            strokeWidth="5"
          />

          {/* Room backgrounds */}
          <rect x="43" y="86" width="175" height="93" className={roomClass("bath")} />
          <rect x="222" y="86" width="175" height="93" className={roomClass("bed")} />
          <rect x="43" y="184" width="175" height="93" className={roomClass("kitchen")} />
          <rect x="222" y="184" width="175" height="93" className={roomClass("living")} />

          {/* Walls */}
          <path
            d="M220 84 V279 M43 181 H397"
            stroke="#b9b3a6"
            strokeWidth="5"
            fill="none"
          />

          {/* BATHROOM */}
          <g>
            {/* Bathtub */}
            <rect x="57" y="98" width="55" height="34" rx="9"
              fill="#d2e0dc" stroke="#829b91" strokeWidth="2" />
            <rect x="62" y="103" width="45" height="24" rx="7"
              fill="#f7faf6" />
            <circle cx="84" cy="115" r="3" fill="#829b91" />

            {/* Sink */}
            <rect x="151" y="98" width="49" height="27" rx="5"
              fill="#d5d0c5" stroke="#aaa494" strokeWidth="1.5" />
            <ellipse cx="175" cy="111" rx="16" ry="8"
              fill="#faf9f3" stroke="#b6b1a5" />

            {/* Toilet */}
            <rect x="151" y="143" width="30" height="12" rx="3"
              fill="#d4d0c5" stroke="#aaa494" />
            <ellipse cx="166" cy="160" rx="13" ry="11"
              fill="#faf9f3" stroke="#b6b1a5" strokeWidth="1.5" />

            <text x="130" y="173" textAnchor="middle" className={labelClass}>
              BATHROOM
            </text>
          </g>

          {/* BEDROOM */}
          <g>
            {/* Bed */}
            <rect x="243" y="99" width="105" height="59" rx="5"
              fill="#d2c5ae" stroke="#aa9b83" strokeWidth="1.5" />
            <rect x="248" y="104" width="95" height="48" rx="4"
              fill="#eee9dd" />
            <rect x="251" y="106" width="39" height="19" rx="4"
              fill="#b4c2b4" />
            <rect x="295" y="106" width="39" height="19" rx="4"
              fill="#b4c2b4" />
            <path d="M248 133 H343" stroke="#c7bba7" strokeWidth="1.5" />

            {/* Bedside table */}
            <rect x="358" y="104" width="27" height="27" rx="3"
              fill="#bd9e76" stroke="#947956" />
            <circle cx="371" cy="117" r="3" fill="#e8d5ac" />

            {/* Rug */}
            <rect x="257" y="158" width="75" height="11" rx="3"
              fill="#d4c5ac" />

            <text x="310" y="173" textAnchor="middle" className={labelClass}>
              BEDROOM
            </text>
          </g>

          {/* KITCHEN */}
          <g>
            {/* Countertop */}
            <path d="M56 197 H203 V223 H56 Z"
              fill="#c2b49d" stroke="#968b77" strokeWidth="1.5" />
            <path d="M62 202 H108 V218 H62 Z"
              fill="#e4e0d5" stroke="#aaa494" />
            <path d="M114 202 H150 V218 H114 Z"
              fill="#e4e0d5" stroke="#aaa494" />

            {/* Sink */}
            <rect x="119" y="205" width="27" height="11" rx="3"
              fill="#a7c2bc" stroke="#829b91" />

            {/* Stove */}
            <rect x="161" y="202" width="34" height="17" rx="2"
              fill="#e4e0d5" stroke="#aaa494" />
            <circle cx="170" cy="208" r="4" fill="none" stroke="#8f918a" />
            <circle cx="185" cy="208" r="4" fill="none" stroke="#8f918a" />

            {/* Island */}
            <rect x="83" y="235" width="91" height="27" rx="3"
              fill="#b8a184" stroke="#927d61" />
            <path d="M91 241 H165" stroke="#e8d9c3" strokeWidth="2" />
            <circle cx="105" cy="249" r="4" fill="#e0d3bd" />

            <text x="130" y="273" textAnchor="middle" className={labelClass}>
              KITCHEN
            </text>
          </g>

          {/* LIVING ROOM */}
          <g>
            {/* Sofa */}
            <rect x="239" y="198" width="111" height="43" rx="7"
              fill="#b7c3b3" stroke="#879987" strokeWidth="2" />
            <rect x="244" y="203" width="101" height="32" rx="5"
              fill="#d4ded0" />
            <path d="M292 204 V234" stroke="#a5b39f" strokeWidth="2" />
            <rect x="240" y="204" width="14" height="28" rx="4"
              fill="#a3b29f" />

            {/* Coffee table */}
            <rect x="264" y="249" width="66" height="18" rx="3"
              fill="#b8956d" stroke="#927450" />
            <path d="M270 254 H324" stroke="#e2c9a6" strokeWidth="2" />
            <circle cx="298" cy="258" r="4" fill="#d9c5a6" />

            {/* Plant */}
            <circle cx="370" cy="214" r="9" fill="#7e9b78" />
            <circle cx="363" cy="207" r="6" fill="#92a88b" />
            <circle cx="377" cy="205" r="7" fill="#6f906f" />
            <rect x="365" y="217" width="11" height="13" rx="2"
              fill="#c69e78" />

            <text x="310" y="273" textAnchor="middle" className={labelClass}>
              LIVING ROOM
            </text>
          </g>

          {/* Window details */}
          <path d="M215 96 V169 M225 96 V169"
            stroke="#a8b9b1" strokeWidth="2" />
        </g>

        {/* Ground shadow / foundation */}
        <path
          d="M26 291 H414"
          stroke="#b5b0a5"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <text
          x="220"
          y="309"
          textAnchor="middle"
          className="fill-[#92988f] text-[8px] tracking-[3px]"
        >
          THE WHOLE HOME
        </text>
      </svg>

      {/* Active room indicator */}
      <div className="mt-2 flex justify-center gap-2">
        {["bath", "bed", "kitchen", "living"].map((room) => (
          <span
            key={room}
            className={`size-2 rounded-full transition-all duration-300 ${
              isActive(room) ? "scale-125 bg-sun" : "bg-[#d6d8d0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Reach() {
  const [i, setI] = useState(0);
  const t = tabs[i];

  return (
    <section id="reach" className="py-20 md:py-[104px]">
      <div className="mx-auto max-w-[1120px] px-6">

        {/* Section heading */}
        <div className="mb-12 grid items-end gap-5 md:grid-cols-[1.1fr_1fr] md:gap-10">
          <div>
            <Eyebrow>What we clean</Eyebrow>
            <H2>Every room, top to bottom.</H2>
          </div>

          <p className="max-w-[380px] text-mute md:justify-self-end">
            No mystery add-ons and no hidden hours. Pick a type of clean
            and see exactly what happens in your home.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* House illustration */}
          <div className="rounded-2xl bg-[#f5f3ec] px-3 py-7 sm:px-7 md:py-10">
            <HouseIllustration activeRooms={t.rooms} />

            <p className="mt-4 text-center text-xs text-[#858b80]">
              Select a cleaning service to explore the rooms
            </p>
          </div>

          {/* Service information */}
          <div className="min-w-0">

            {/* Tabs */}
            <div className="border-t border-line">
              {tabs.map((tab, k) => (
                <button
                  key={tab.title}
                  onClick={() => setI(k)}
                  aria-pressed={i === k}
                  className={`group flex w-full items-center gap-4 border-b border-line py-5 text-left transition-colors duration-300 ${
                    i === k
                      ? "text-ink"
                      : "text-mute hover:text-ink"
                  }`}
                >
                  <span
                    className={`font-serif text-sm transition-colors ${
                      i === k ? "text-forest" : "text-mute"
                    }`}
                  >
                    0{k + 1}
                  </span>

                  <span
                    className={`flex-1 text-base transition-all duration-300 ${
                      i === k ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {tab.title}
                  </span>

                  <span
                    className={`grid size-8 place-items-center rounded-full transition-all duration-300 ${
                      i === k
                        ? "rotate-45 bg-sun text-forest"
                        : "bg-[#f1f0e9] text-mute group-hover:bg-[#e9e7de]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="size-4"
                    >
                      <path
                        d="M10 4V16M4 10H16"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
              ))}
            </div>

            {/* Active tab content */}
            <div
              key={i}
              className="animate-[reachFade_.35s_ease-out]"
            >
              <h3 className="mb-3 mt-7 font-serif text-3xl font-medium leading-tight text-ink md:text-[34px]">
                {t.title}
              </h3>

              <p className="mb-7 max-w-[440px] leading-relaxed text-mute">
                {t.text}
              </p>

              {/* Service details */}
              <div className="grid grid-cols-3 gap-3 border-y border-line py-5">
                <div>
                  <svg viewBox="0 0 24 24" fill="none"
                    className="mb-3 size-5 text-forest">
                    <path d="M12 21C12 21 4 16.5 4 10a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6.5-8 11-8 11Z"
                      stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 9C9 12 9 15 12 18"
                      stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <small className="mb-1 block text-[10px] uppercase tracking-[.13em] text-mute">
                    Method
                  </small>
                  <p className="text-xs font-semibold leading-relaxed text-ink sm:text-sm">
                    {t.method}
                  </p>
                </div>

                <div>
                  <svg viewBox="0 0 24 24" fill="none"
                    className="mb-3 size-5 text-forest">
                    <path d="M4 7h16M6 7l1 13h10l1-13M9 7V4h6v3"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 11v5M14 11v5"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" />
                  </svg>
                  <small className="mb-1 block text-[10px] uppercase tracking-[.13em] text-mute">
                    Supplies
                  </small>
                  <p className="text-xs font-semibold leading-relaxed text-ink sm:text-sm">
                    {t.access}
                  </p>
                </div>

                <div>
                  <svg viewBox="0 0 24 24" fill="none"
                    className="mb-3 size-5 text-forest">
                    <circle cx="12" cy="12" r="9"
                      stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v5l3 2"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" />
                  </svg>
                  <small className="mb-1 block text-[10px] uppercase tracking-[.13em] text-mute">
                    Typical time
                  </small>
                  <p className="text-xs font-semibold leading-relaxed text-ink sm:text-sm">
                    {t.typical}
                  </p>
                </div>
              </div>

              {/* Additional information */}
              <div className="mt-5 flex gap-3">
                <span className="mt-0.5 size-1.5 flex-none rounded-full bg-sun" />
                <p className="text-sm leading-relaxed text-mute">
                  {t.note}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#price"
                className="mt-7 inline-flex items-center gap-3 rounded-md bg-forest px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#314b38] hover:shadow-lg"
              >
                Get a quote
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Small content animation */}
      <style jsx>{`
        @keyframes reachFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
