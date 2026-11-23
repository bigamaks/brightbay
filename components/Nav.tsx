
"use client";

import { useEffect, useState } from "react";

const links = [
  ["What we clean", "#reach"],
  ["House cleans", "#price"],
  ["Bond cleans", "#bond"],
  ["Commercial", "#commercial"],
  ["FAQ", "#faq"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 60);
      if (window.scrollY > 100) setMenuOpen(false);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[60] px-4 pt-3 transition-all duration-300 md:px-6 ${
        solid ? "pt-2" : "pt-4"
      }`}
    >
      <div
        className={`relative mx-auto flex h-[68px] max-w-[1120px] items-center justify-between rounded-full px-5 md:px-7 transition-all duration-300 ${
          solid
            ? "border border-white/10 bg-forest/95 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border border-white/15 bg-forest/15 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Brightbay Cleaning Co. Home"
          className="flex flex-col leading-none text-white"
        >
          <span className="font-serif text-[25px] tracking-[-1px]">
            Brightbay
          </span>
          <span className="mt-1 text-[8px] font-semibold tracking-[.24em] text-sun">
            CLEANING CO.
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative py-2 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
            >
              {label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-sun transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0755550123"
            className="hidden text-[13px] font-medium text-white/80 transition hover:text-sun xl:block"
          >
            07 5555 0123
          </a>

          <a
            href="#price"
            className="rounded-full bg-sun px-5 py-3 text-[12px] font-bold text-forest transition-all duration-200 hover:-translate-y-0.5 hover:bg-sun-d hover:shadow-md"
          >
            Get a price <span className="ml-1">→</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              {menuOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-navigation"
        className={`mx-auto mt-2 max-w-[1120px] overflow-hidden rounded-2xl border border-white/10 bg-forest/98 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[360px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0 border-transparent"
        }`}
      >
        <div className="p-4">
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-3.5 text-sm text-white/85 transition hover:text-sun"
            >
              {label}
              <span className="text-white/40">↗</span>
            </a>
          ))}

          <a
            href="tel:0755550123"
            className="mt-4 flex items-center gap-2 py-2 text-sm text-white/70"
          >
            <span>☎</span>
            07 5555 0123
          </a>
        </div>
      </div>
    </nav>
  );
}
