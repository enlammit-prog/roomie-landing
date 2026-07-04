import Link from "next/link";

export default function ConciergeBanner() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-8 py-14">
      <div className="rounded-card-lg border border-violet/30 bg-gradient-to-br from-panel-from to-panel-to p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-card">
        <div className="max-w-[560px]">
          <h2 className="font-sora font-extrabold text-[26px] sm:text-[32px] tracking-[-0.02em] leading-[1.15] mb-3">
            ¿Necesitás que te consigamos dónde vivir?
          </h2>
          <p className="text-[16px] text-ink-secondary leading-[1.6]">
            Además del matching, el equipo de ROOMIE busca, verifica y reserva
            tu vivienda por vos. Ideal si llegás del interior o del exterior y
            no conocés Montevideo.
          </p>
        </div>
        <Link
          href="/concierge"
          className="shrink-0 bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-7 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)] whitespace-nowrap"
        >
          Conocé el servicio concierge
        </Link>
      </div>
    </section>
  );
}
