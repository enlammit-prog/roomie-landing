import Image from "next/image";
import Link from "next/link";
import Orbit from "./Orbit";
import MatchCard from "./MatchCard";
import { GOOGLE_FORM_URL } from "@/lib/links";

const METRICS = [
  { value: "65%", label: "de los encuestados\nya quiere usarlo" },
  { value: "100%", label: "de los perfiles con\nidentidad validada" },
  { value: "15 min", label: "para hablar con el\nequipo, gratis" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Capa 1: degradado atardecer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(178deg, #1A1E4A 0%, #241C52 32%, #3A2456 54%, #4A2A4E 66%, #2A2242 78%, #0B1124 100%)",
        }}
      />
      {/* Capa 2: banda cálida de horizonte */}
      <div
        className="absolute left-0 right-0 pointer-events-none blur-[2px]"
        style={{
          bottom: "26%",
          height: "220px",
          background:
            "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(255,170,110,0.16) 62%, rgba(255,140,90,0.22) 78%, rgba(30,26,58,0.4) 100%)",
        }}
      />
      {/* Capa 3: scrim de legibilidad */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.58) 0%, rgba(15,23,42,0.66) 42%, rgba(15,23,42,0.86) 76%, #0B1124 100%)",
        }}
      />
      {/* Capa 4: glow radial violeta */}
      <div
        className="absolute pointer-events-none -top-[180px] left-1/2 -translate-x-1/2 w-[1100px] h-[620px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.34), rgba(29,78,216,0.14) 45%, rgba(15,23,42,0) 72%)",
        }}
      />
      {/* Capa 5: círculos concéntricos */}
      <div className="absolute -top-[160px] -right-[220px] w-[660px] h-[660px] pointer-events-none opacity-[0.42] hidden md:block motion-safe:animate-spin-slow">
        <Orbit stroke="grad" gradientId="orbit-hero" />
      </div>

      <div className="relative z-[2] max-w-[1180px] mx-auto px-4 sm:px-8 pt-[84px] pb-24 grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-14 lg:gap-[60px] items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 px-[13px] py-1.5 rounded-full bg-violet/10 border border-violet/[0.42] mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-match motion-safe:animate-pulse-soft" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-accent-violet-light">
              Roommates verificados en Montevideo
            </span>
          </div>

          <h1 className="font-sora font-extrabold text-[38px] sm:text-[56px] lg:text-[74px] leading-[1.04] sm:leading-[0.96] tracking-[-0.042em] mb-6 text-balance">
            Encontrá con quién vivir,
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(96deg, #6E8BF5 8%, #A78BFA 58%, #C4B2FB)",
              }}
            >
              sin jugártela a ciegas.
            </span>
          </h1>

          <p className="text-[17px] sm:text-[18.5px] leading-[1.6] text-ink-secondary max-w-[490px] mb-9 text-pretty">
            ROOMIE conecta estudiantes con compañeros de cuarto verificados y
            compatibles. Identidad real, hábitos que encajan, cero grupos de
            Facebook llenos de desconocidos.
          </p>

          <div className="flex gap-3.5 flex-wrap mb-6">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-bold px-7 py-[18px] rounded-btn shadow-[0_20px_46px_-18px_rgba(124,58,237,0.95),inset_0_1px_0_rgba(255,255,255,0.22)] hover:-translate-y-[3px] hover:shadow-[0_28px_60px_-18px_rgba(124,58,237,1)] transition-all duration-[180ms]"
            >
              Sumate a la lista
              <svg
                width="17"
                height="17"
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
              href="#como"
              className="bg-white/[0.03] backdrop-blur-[8px] border border-white/[0.16] text-ink no-underline text-base font-semibold px-7 py-[18px] rounded-btn hover:border-white/[0.34] hover:bg-white/[0.07] transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="text-[15px] text-ink-secondary mb-9">
            ¿Llegás a Montevideo y necesitás vivienda?{" "}
            <Link
              href="/concierge"
              className="text-accent-violet font-semibold no-underline hover:text-ink transition-colors"
            >
              Te la conseguimos nosotros →
            </Link>
          </p>

          <div className="flex flex-wrap items-start gap-y-6 pt-[26px] border-t border-white/[0.08]">
            {METRICS.map((metric, i) => (
              <div
                key={metric.value}
                className={`flex-1 min-w-[150px] ${
                  i > 0 ? "sm:pl-[30px] sm:border-l sm:border-white/10" : ""
                } ${i < METRICS.length - 1 ? "sm:pr-[30px]" : ""}`}
              >
                <div
                  className="font-sora font-extrabold text-[26px] sm:text-[28px] tracking-[-0.02em] bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(96deg, #6E8BF5, #A78BFA)",
                  }}
                >
                  {metric.value}
                </div>
                <div className="text-[13px] sm:text-[13.5px] text-ink-quaternary leading-[1.35] mt-1 whitespace-pre-line">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[26px] overflow-hidden border border-white/[0.18] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.95),0_0_0_6px_rgba(15,23,42,0.5)]">
            <Image
              src="/hero_night.jpg"
              alt="Departamento en Montevideo de noche con vista al skyline"
              width={900}
              height={480}
              priority
              className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
              style={{ objectPosition: "58% center" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(205deg, rgba(29,78,216,0.20), rgba(15,23,42,0.26) 40%, rgba(15,23,42,0.82))",
              }}
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[rgba(15,23,42,0.62)] backdrop-blur-[12px] border border-white/[0.14]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink">
                Perfiles verificados
              </span>
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:mt-0 lg:block lg:absolute lg:-bottom-14 lg:-left-11 lg:w-[316px]">
            <MatchCard matchScore={94} />
          </div>
        </div>
      </div>
    </section>
  );
}
