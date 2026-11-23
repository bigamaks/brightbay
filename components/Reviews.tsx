import { Eyebrow, H2 } from "./ui";

// SAMPLE copy: replace with real customer reviews before going live.
const reviews = [
  ["“Bond back in full, first inspection. The photo report made the agent’s job easy.”", "Sample review, Tenant"],
  ["“Same two cleaners every fortnight and a text when they’re close. Never going back.”", "Sample review, Homeowner"],
  ["“The quote on the site was the price on the invoice. No surprises.”", "Sample review, Landlord"],
];

export default function Reviews() {
  return (
    <section className="pb-[104px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow>Reviews</Eyebrow>
        <H2 className="max-w-[640px]">Proof from real homes.</H2>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {reviews.map(([q, who]) => (
            <div key={q} className="rounded-xl border border-line bg-white p-6">
              <b className="tracking-[2px] text-sun">★★★★★</b>
              <p className="my-2.5 mb-3.5 text-base">{q}</p>
              <small className="text-mute">{who}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}