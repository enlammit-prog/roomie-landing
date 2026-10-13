import Image from "next/image";
import Link from "next/link";

const DESDE = 2025;

export default function Footer() {
  // El año se fija al momento del build, que es lo habitual en un sitio
  // estático: cada deploy lo actualiza.
  const hasta = new Date().getFullYear();
  const years = hasta > DESDE ? `${DESDE}-${hasta}` : `${DESDE}`;

  return (
    <footer className="border-t border-hairline">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 pt-10 flex items-center justify-between flex-wrap gap-5">
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

        <div className="flex items-center gap-5 flex-wrap">
          <Link
            href="/concierge"
            className="text-sm text-ink-muted no-underline hover:text-ink transition-colors"
          >
            Necesito vivienda ahora
          </Link>
          <Link
            href="/exchange"
            className="text-sm text-ink-muted no-underline hover:text-ink transition-colors"
          >
            For exchange students
          </Link>
          <span className="text-sm text-ink-muted">roomieuy.com</span>

          <div className="flex items-center gap-[18px]">
            <a
              href="https://instagram.com/contacto.roomieuy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[38px] h-[38px] rounded-chip border border-white/[0.12] bg-white/[0.04] flex items-center justify-center text-[#A6B2CC] hover:border-amber/60 hover:text-amber transition-colors"
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
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="mailto:contacto.roomieuy@gmail.com"
              aria-label="Escribinos a contacto.roomieuy@gmail.com"
              className="w-[38px] h-[38px] rounded-chip border border-white/[0.12] bg-white/[0.04] flex items-center justify-center text-[#A6B2CC] hover:border-amber/60 hover:text-amber transition-colors"
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
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 mt-9 border-t border-white/[0.07]">
        <div className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-8 gap-y-3">
          <p className="text-[12.5px] text-ink-muted leading-[1.6] tracking-[0.01em]">
            © {years} ROOMIE. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/privacidad"
              className="text-[12.5px] text-ink-muted no-underline tracking-[0.01em] hover:text-ink transition-colors"
            >
              Privacidad
            </Link>
            <p className="text-[12.5px] text-ink-muted leading-[1.6] tracking-[0.01em]">
              Hecho en Montevideo, Uruguay.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
