import { H2 } from "./ui";

const faqs = [
  ["Is the bond clean guaranteed?", "Yes. If your agent flags anything after the final inspection, we return within 72 hours and fix it free."],
  ["Do you clean with pets in the house?", "Yes. Let us know when you book and we’ll plan around them."],
  ["Do I need to be home?", "No. Leave a key or access code and we’ll text you when we arrive and leave."],
  ["How do I pay?", "After the clean, by card. Nothing is charged at booking."],
];

export default function Faq() {
  return (
    <section id="faq" className="px-6">
      <div className="mx-auto max-w-[760px]">
        <H2 className="mb-6 text-center">Questions, answered.</H2>
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-b border-line py-5">
            <summary className="flex cursor-pointer list-none justify-between font-serif text-[22px] [&::-webkit-details-marker]:hidden">
              {q}
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">–</span>
            </summary>
            <p className="mt-2.5 text-mute">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}