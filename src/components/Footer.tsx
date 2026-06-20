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
        <div className="text-sm text-ink-muted">
          roomie.com.uy · enlammit@gmail.com · Uruguay 2025
        </div>
      </div>
    </footer>
  );
}
