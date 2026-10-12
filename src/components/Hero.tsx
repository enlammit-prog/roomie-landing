import Image from "next/image";
import Link from "next/link";
import { GOOGLE_FORM_URL, whatsappUrl, WA_MSG_VIVIENDA_ES } from "@/lib/links";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 72% 34%, rgba(232,129,74,0.20), rgba(15,23,42,0) 70%)",
        }}
      />

      <div className="relative z-[2] max-w-[1320px] mx-auto flex flex-col lg:flex-row lg:items-stretch">
        <div className="w-full lg:w-[54%] shrink-0 px-4 sm:px-8 pt-16 lg:pt-[92px] pb-10 lg:pb-[92px]">
          <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-amber mb-5">
            Lo estamos construyendo
          </p>

          <h1 className="font-sora font-extrabold text-[40px] sm:text-[56px] lg:text-[62px] leading-[1.04] lg:leading-[1.02] tracking-[-0.042em] mb-6 max-w-[700px] text-balance">
            Encontrá con quién vivir en{" "}
            <span className="text-amber">Montevideo</span>.
          </h1>

          <p className="text-[17px] sm:text-[19px] leading-[1.55] text-ink-secondary max-w-[500px] mb-10 text-pretty">
            Para estudiantes que llegan del interior o de intercambio. Perfiles
            verificados, no desconocidos de Facebook.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-amber-deep text-amber-ink no-underline text-base font-bold px-[26px] py-4 rounded-btn hover:bg-amber active:translate-y-px transition-colors"
            >
              Avisame cuando lancen
              <svg
                width="16"
                height="16"
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
            <a
              href={whatsappUrl(WA_MSG_VIVIENDA_ES)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-ink no-underline text-base font-semibold border-b border-white/30 pb-[3px] hover:border-amber hover:text-amber transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
              </svg>
              Necesito vivienda ahora
            </a>
          </div>
        </div>

        <div className="w-full lg:flex-grow px-4 sm:px-8 lg:pl-0 pb-16 lg:py-12">
          <div className="relative h-[280px] sm:h-[380px] lg:h-full rounded-card overflow-hidden">
            <Image
              src="/hero_night.jpg"
              alt="Departamento en Montevideo de noche, visto desde adentro"
              width={900}
              height={760}
              priority
              className="absolute inset-0 w-full h-full object-cover object-[62%_38%] lg:object-[56%_center]"
            />
            {/* Scrim horizontal solo en desktop, donde el texto va al costado. */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(15,23,42,0.55), rgba(15,23,42,0.08) 40%, rgba(15,23,42,0.12))",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 bg-gradient-to-t from-[rgba(10,15,30,0.92)] via-[rgba(10,15,30,0.6)] to-transparent">
              <p className="font-sora font-semibold text-[14px] sm:text-[15.5px] leading-[1.45] text-ink mb-2">
                Montevideo recibe miles de estudiantes del interior cada año.
              </p>
              <Link
                href="#problema"
                className="text-[12.5px] text-amber no-underline font-semibold hover:text-ink transition-colors"
              >
                Esto nos dijeron los que ya pasaron por eso →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
