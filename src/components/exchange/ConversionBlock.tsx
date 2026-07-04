import Link from "next/link";
import { BOOKING_URL } from "@/lib/links";

const checks = [
  "15 minutes, no commitment",
  "Over video, in English",
  "Straight with the team",
];

export default function ConversionBlock() {
  return (
    <section className="max-w-[1180px] mx-auto px-8 py-[110px] text-center">
      <div className="max-w-[620px] mx-auto">
        <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] mb-4">
          Let&apos;s talk it through, in 15 minutes.
        </h2>
        <p className="text-[17.5px] text-ink-secondary leading-[1.6] mb-9">
          Pick a time that works in your timezone and we&apos;ll meet over
          video, in English. No pressure, just a friendly walkthrough.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
          {checks.map((check) => (
            <span
              key={check}
              className="inline-flex items-center gap-2 text-[14.5px] text-ink-secondary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {check}
            </span>
          ))}
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-9 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
        >
          Book a 15-min call
        </a>

        <div className="mt-14 pt-10 border-t border-white/[0.08]">
          <p className="text-[13px] text-ink-muted mb-3">
            Need us to find you a place to live?
          </p>
          <Link
            href="/concierge/en"
            className="text-[14.5px] text-accent-blue no-underline font-medium hover:text-ink transition-colors"
          >
            ROOMIE Housing Concierge →
          </Link>
        </div>
      </div>
    </section>
  );
}
