import Image from "next/image";
import { GOOGLE_FORM_URL } from "@/lib/links";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(11,17,36,0.72)] backdrop-blur-[14px] border-b border-hairline">
      <nav className="max-w-[1180px] mx-auto px-8 py-[18px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <Image
            src="/roomie_profile.png"
            alt="ROOMIE"
            width={38}
            height={38}
            className="rounded-full block"
          />
          <span className="font-sora font-bold text-[19px] tracking-[0.13em] text-ink">
            ROOMIE
          </span>
        </a>
        <div className="flex items-center gap-9">
          <a
            href="#problema"
            className="text-[#9AA7C2] no-underline text-[14.5px] font-medium"
          >
            El problema
          </a>
          <a
            href="#como"
            className="text-[#9AA7C2] no-underline text-[14.5px] font-medium"
          >
            Cómo funciona
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue to-violet text-white no-underline text-[14.5px] font-semibold px-5 py-[11px] rounded-btn"
          >
            Sumate a la lista
          </a>
        </div>
      </nav>
    </header>
  );
}
