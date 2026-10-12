"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/links";

const LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#construimos", label: "Qué construimos" },
  { href: "#faq", label: "Preguntas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(15,23,42,0.86)] backdrop-blur-[10px] border-b border-hairline">
      <nav className="max-w-[1320px] mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 no-underline shrink-0"
        >
          <Image
            src="/roomie_profile.png"
            alt="ROOMIE"
            width={32}
            height={32}
            className="rounded-full block w-7 h-7 sm:w-8 sm:h-8"
          />
          <span className="font-sora font-bold text-[15px] sm:text-[17px] tracking-[0.15em] text-ink">
            ROOMIE
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-[30px]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9AA7C2] no-underline text-[14.5px] font-medium whitespace-nowrap hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/exchange"
            className="text-[#9AA7C2] no-underline text-[14.5px] font-medium whitespace-nowrap hover:text-ink transition-colors"
          >
            English
          </Link>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-deep text-amber-ink no-underline text-[14.5px] font-bold px-[18px] py-2.5 rounded-btn whitespace-nowrap hover:bg-amber transition-colors"
          >
            Avisame cuando lancen
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-deep text-amber-ink no-underline text-[13px] font-bold px-3.5 py-2 rounded-btn whitespace-nowrap"
          >
            Avisame
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="w-9 h-9 flex items-center justify-center rounded-btn border border-white/[0.14] bg-white/[0.04] text-ink shrink-0"
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
        <div className="lg:hidden border-t border-hairline px-4 sm:px-8 py-5 flex flex-col gap-4 bg-[#0F172A]">
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
            href="/concierge"
            onClick={() => setOpen(false)}
            className="text-amber no-underline text-[15px] font-semibold"
          >
            Necesito vivienda ahora
          </Link>
          <Link
            href="/exchange"
            onClick={() => setOpen(false)}
            className="text-[#C7D0E4] no-underline text-[15px] font-medium"
          >
            English
          </Link>
        </div>
      )}
    </header>
  );
}
