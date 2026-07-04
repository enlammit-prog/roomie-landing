"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/links";

const LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#como", label: "Cómo funciona" },
  { href: "#para-quien", label: "Para quién es" },
  { href: "#faq", label: "Preguntas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(11,17,36,0.72)] backdrop-blur-[14px] border-b border-hairline">
      <nav className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[18px] flex items-center justify-between gap-3">
        <a
          href="#top"
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
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9AA7C2] no-underline text-[14.5px] font-medium"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/exchange"
            className="text-[#9AA7C2] no-underline text-[14.5px] font-medium whitespace-nowrap"
          >
            For exchange students
          </Link>
          <Link
            href="/concierge"
            className="text-[#9AA7C2] no-underline text-[14.5px] font-medium whitespace-nowrap"
          >
            Te conseguimos vivienda
          </Link>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue to-violet text-white no-underline text-[14.5px] font-semibold px-5 py-[11px] rounded-btn whitespace-nowrap"
          >
            Sumate a la lista
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue to-violet text-white no-underline text-[13px] font-semibold px-4 py-2.5 rounded-btn whitespace-nowrap"
          >
            Sumate a la lista
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-white/[0.12] bg-white/[0.04] text-ink shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-hairline px-4 sm:px-8 py-5 flex flex-col gap-4 bg-[#0B1124]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#C7D0E4] no-underline text-[15px] font-medium"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/exchange"
            onClick={() => setOpen(false)}
            className="text-[#C7D0E4] no-underline text-[15px] font-medium"
          >
            For exchange students
          </Link>
          <Link
            href="/concierge"
            onClick={() => setOpen(false)}
            className="text-[#C7D0E4] no-underline text-[15px] font-medium"
          >
            Te conseguimos vivienda
          </Link>
        </div>
      )}
    </header>
  );
}
