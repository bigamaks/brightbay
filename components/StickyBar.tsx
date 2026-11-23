"use client";
import { useEffect, useState } from "react";
import { useQuote } from "./QuoteProvider";

export default function StickyBar() {
  const { price } = useQuote();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(scrollY > innerHeight * 0.5);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  return (
    <div className={`fixed inset-x-3 bottom-3 z-[70] items-center justify-between rounded-xl bg-forest py-2.5 pl-[18px] pr-3 text-white shadow-[0_10px_30px_rgba(0,0,0,.35)] ${show ? "flex" : "hidden"} md:hidden`}>
      <span>From <b className="font-serif text-2xl text-sun">${price}</b></span>
      <a href="#price" className="rounded-md bg-sun px-[18px] py-2.5 font-semibold text-forest">Get a price →</a>
    </div>
  );
}