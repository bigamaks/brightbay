const cols = [
  ["Homes", ["Regular cleans", "Deep cleans", "Bond cleans", "Oven and windows"]],
  ["Business", ["Offices", "Medical and dental", "Childcare", "Strata"]],
  ["Contact", ["07 5555 0123", "hello@brightbay.example", "Find us on Google"]],
] as const;

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest pb-9 pt-[90px] text-white">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-20 flex flex-wrap items-center justify-between gap-8">
          <h2 className="font-serif text-[clamp(32px,4.6vw,54px)] font-medium leading-[1.05] tracking-[-.02em]">
            Your price is <em className="text-sun">30 seconds</em> away.
          </h2>
          <div className="flex gap-3">
            <a href="#price" className="rounded-md bg-sun px-6 py-3.5 font-semibold text-forest">See my price →</a>
            <a href="#" className="rounded-md border-[1.5px] border-white/40 bg-white/10 px-6 py-3.5 font-semibold">07 5555 0123</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-[#b4c2b8] md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div><p className="mb-2.5 font-serif text-2xl text-white">Brightbay</p>Cleaning Co.<br />Unit 6, 14 Example Way</div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <h4 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[.14em] text-sun">{h}</h4>
              <ul>{items.map((i) => <li key={i} className="mb-2">{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}