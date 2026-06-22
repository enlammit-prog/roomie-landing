const items = [
  {
    title: "Verified students only",
    body: "ID, photo and student status checked before anyone can chat.",
  },
  {
    title: "Matched on lifestyle",
    body: "We pair you on habits and schedule, not just price or location.",
  },
  {
    title: "Settled before you arrive",
    body: "Line up your roommate from your home country, ahead of time.",
  },
];

export default function TrustRow() {
  return (
    <section className="bg-bg-alt border-t border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto px-8 py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/[0.09]">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`py-8 ${
                i === 0
                  ? "md:pr-8 md:pl-0 md:border-r border-hairline"
                  : i === 1
                  ? "md:px-8 md:border-r border-hairline"
                  : "md:pl-8 md:pr-0"
              }`}
            >
              <div className="font-sora font-bold text-xl mb-3">
                {item.title}
              </div>
              <p className="text-[14.5px] text-ink-tertiary leading-[1.65]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
