"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Lang = "es" | "en";

type LangSwitcherProps = {
  /** Idioma de la página donde está montado. */
  current: Lang;
  /** Ruta de la versión en español de esta misma página. */
  esHref: string;
  /** Ruta de la versión en inglés de esta misma página. */
  enHref: string;
  className?: string;
};

const NAMES: Record<Lang, string> = { es: "Español", en: "English" };

export default function LangSwitcher({
  current,
  esHref,
  enHref,
  className = "",
}: LangSwitcherProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const options: { lang: Lang; href: string }[] = [
    { lang: "es", href: esHref },
    { lang: "en", href: enHref },
  ];

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={
          current === "es" ? "Cambiar idioma" : "Change language"
        }
        className="flex items-center gap-1.5 text-[#9AA7C2] text-[14.5px] font-medium hover:text-ink transition-colors"
      >
        {NAMES[current]}
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] min-w-[150px] rounded-btn border border-white/[0.14] bg-[#131C33] py-1 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.8)]"
        >
          {options.map((option) => {
            const isCurrent = option.lang === current;
            return (
              <Link
                key={option.lang}
                href={option.href}
                role="menuitem"
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-3 px-3.5 py-2.5 no-underline text-[14.5px] transition-colors ${
                  isCurrent
                    ? "text-amber font-semibold"
                    : "text-[#C7D0E4] font-medium hover:text-ink hover:bg-white/[0.05]"
                }`}
              >
                {NAMES[option.lang]}
                {isCurrent && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
