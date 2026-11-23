import { Eyebrow, H2 } from "./ui";

const steps = [
  ["01", "See your price", "Choose your clean and size of home. The exact price appears instantly."],
  ["02", "Pick a time", "Choose a day and arrival window. Nothing is charged until after the clean."],
  ["03", "We text you 20 min out", "The same two cleaners arrive with everything, and send a photo report when done."],
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 bg-[#F5F3EC] py-[104px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Eyebrow>How it works</Eyebrow>
        <H2 className="max-w-[640px]">Three steps. No phone tag.</H2>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {steps.map(([n, h, p]) => (
            <div key={n} className="rounded-xl border border-line bg-white p-6">
              <div className="font-serif text-[44px] leading-none text-sun">{n}</div>
              <h3 className="mb-1.5 mt-2.5 font-serif text-2xl font-medium">{h}</h3>
              <p className="text-[15px] text-mute">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function HowItWorks() {
//   return (
//     <section className="relative z-10 bg-[#F5F3EC] py-[104px]">
//       <div className="mx-auto max-w-[1120px] px-6">
//         <h1 className="text-5xl font-bold text-white">
//           HOW IT WORKS IS RENDERING
//         </h1>
//       </div>
//     </section>
//   );
// }