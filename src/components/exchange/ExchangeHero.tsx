import Orbit from "../Orbit";
import { BOOKING_URL } from "@/lib/links";

export default function ExchangeHero() {
  return (
    <section className="relative max-w-[1180px] mx-auto px-8 py-[92px] pb-20 overflow-hidden">
      <div className="absolute -top-[120px] -right-[160px] w-[560px] h-[560px] pointer-events-none opacity-[0.42] hidden md:block motion-safe:animate-spin-slow">
        <Orbit stroke="grad" gradientId="orbit-exchange" />
      </div>

      <div className="relative z-[2] max-w-[640px]">
        <div className="inline-flex items-center gap-2 mb-[30px] px-4 py-2 rounded-full bg-violet/[0.12] border border-violet/40">
          <span className="w-[7px] h-[7px] rounded-full bg-match inline-block" />
          <span className="text-sm font-medium text-ink-secondary">
            For exchange students coming to Montevideo
          </span>
        </div>

        <h1 className="font-sora font-extrabold text-[34px] sm:text-[52px] lg:text-[58px] leading-[1.08] sm:leading-[1.02] tracking-[-0.025em] mb-6 text-balance">
          Sort out your roommate before you land.
        </h1>

        <p className="text-lg leading-[1.62] text-ink-secondary max-w-[540px] mb-9">
          Book a free 15-minute video call with the ROOMIE team. We&apos;ll
          walk you through how we match you with a verified, compatible
          student in Montevideo, and answer anything about moving here.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-7 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
          >
            Book a 15-min call
          </a>
          <span className="text-[14.5px] text-ink-quaternary">
            Free · online · no commitment
          </span>
        </div>
      </div>
    </section>
  );
}
