import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/links";

export default function ExchangeNav() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(11,17,36,0.72)] backdrop-blur-[14px] border-b border-hairline">
      <nav className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[18px] flex items-center justify-between gap-3">
        <Link
          href="/exchange"
          className="flex items-center gap-2.5 sm:gap-3 no-underline shrink-0"
        >
          <Image
            src="/roomie_profile.png"
            alt="ROOMIE"
            width={38}
            height={38}
            className="rounded-full block w-8 h-8 sm:w-[38px] sm:h-[38px]"
          />
          <span className="font-sora font-bold text-base sm:text-[19px] tracking-[0.13em] text-ink">
            ROOMIE
          </span>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="text-[#9AA7C2] no-underline text-[14.5px] font-medium"
          >
            ES
          </Link>
          <Link
            href="/concierge/en"
            className="hidden sm:inline-block border border-amber-deep/50 text-ink no-underline text-[14.5px] font-semibold px-4 py-[9px] rounded-btn whitespace-nowrap hover:border-amber hover:text-amber transition-colors"
          >
            Need a place to live?
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-deep text-amber-ink no-underline text-[13px] sm:text-[14.5px] font-bold px-4 sm:px-[18px] py-2.5 rounded-btn whitespace-nowrap hover:bg-amber transition-colors"
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
