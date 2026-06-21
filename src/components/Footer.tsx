import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-[1180px] mx-auto px-8 py-10 flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3">
          <Image
            src="/roomie_profile.png"
            alt="ROOMIE"
            width={32}
            height={32}
            className="rounded-full block"
          />
          <span className="font-sora font-bold text-base tracking-[0.13em]">
            ROOMIE
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
          <span>roomie.com.uy · Uruguay 2025 ·</span>
          <a
            href="mailto:contacto.roomieuy@gmail.com"
            aria-label="Escribinos a contacto.roomieuy@gmail.com"
            className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>contacto.roomieuy@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
