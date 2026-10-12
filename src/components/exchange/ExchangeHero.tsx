import Image from "next/image";
import Orbit from "../Orbit";
import { BOOKING_URL } from "@/lib/links";

export default function ExchangeHero() {
  return (
    <section className="relative max-w-[1180px] mx-auto px-4 sm:px-8 py-[92px] pb-20 overflow-hidden">
      <div className="absolute -top-[120px] -right-[160px] w-[560px] h-[560px] pointer-events-none opacity-[0.42] hidden md:block motion-safe:animate-spin-slow">
        <Orbit stroke="grad" gradientId="orbit-exchange" />
      </div>

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-12 lg:gap-[60px] items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-[30px] px-4 py-2 rounded-full bg-amber-deep/[0.10] border border-amber-deep/40">
            <span className="w-[7px] h-[7px] rounded-full bg-match inline-block motion-safe:animate-pulse-soft" />
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
              className="inline-flex items-center gap-2.5 bg-amber-deep text-amber-ink no-underline text-base font-bold px-[26px] py-4 rounded-btn hover:bg-amber active:translate-y-px transition-colors"
            >
              Book a 15-min call
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <span className="text-[14.5px] text-ink-quaternary">
              Free · online · no commitment
            </span>
          </div>
        </div>

        <div className="relative rounded-[26px] overflow-hidden border border-white/[0.18] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.95),0_0_0_6px_rgba(15,23,42,0.5)]">
          <Image
            src="/hero_roomie.jpg"
            alt="Estudiantes recién mudados a un departamento en Montevideo"
            width={900}
            height={480}
            priority
            className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
            style={{ objectPosition: "58% center" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(205deg, rgba(29,78,216,0.32), rgba(15,23,42,0.34) 40%, rgba(15,23,42,0.86))",
            }}
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[rgba(15,23,42,0.62)] backdrop-blur-[12px] border border-white/[0.14]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink">
              Verified profiles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
