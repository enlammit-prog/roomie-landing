import { GOOGLE_FORM_URL, whatsappUrl, WA_MSG_VIVIENDA_ES } from "@/lib/links";

export default function DosPuertas() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-sora font-extrabold text-[26px] sm:text-[34px] tracking-[-0.03em] leading-[1.1] mb-8 text-center">
        ¿Cuándo llegás a Montevideo?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-px rounded-[22px] bg-[linear-gradient(155deg,rgba(124,58,237,0.75),rgba(29,78,216,0.35)_55%,rgba(255,255,255,0.06))]">
          <div className="h-full rounded-[21px] p-8 bg-gradient-to-br from-[rgba(28,24,64,0.82)] to-[rgba(13,20,38,0.92)] flex flex-col">
            <span className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-accent-violet-light mb-3">
              Este año
            </span>
            <h3 className="font-sora font-bold text-2xl leading-tight mb-3">
              No esperes a que lancemos.
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-ink-secondary mb-6 flex-grow">
              Hoy el equipo de ROOMIE busca, verifica y reserva tu vivienda por
              vos, antes de que te subas al avión o al ómnibus.
            </p>
            <a
              href={whatsappUrl(WA_MSG_VIVIENDA_ES)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue to-violet text-white no-underline text-[15.5px] font-bold px-6 py-[15px] rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.85)]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>
        </div>

        <div className="p-px rounded-[22px] bg-[linear-gradient(155deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_55%)]">
          <div className="h-full rounded-[21px] p-8 bg-gradient-to-br from-[rgba(24,34,64,0.62)] to-[rgba(15,23,42,0.72)] flex flex-col">
            <span className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-ink-quaternary mb-3">
              Más adelante
            </span>
            <h3 className="font-sora font-bold text-2xl leading-tight mb-3">
              Enterate antes que nadie.
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-ink-secondary mb-6 flex-grow">
              Dejanos tu mail. Te avisamos cuando abramos el acceso y te
              consultamos las decisiones del producto mientras lo construimos.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white/[0.03] border border-white/[0.16] text-ink no-underline text-[15.5px] font-semibold px-6 py-[15px] rounded-btn hover:border-white/[0.34] hover:bg-white/[0.07] transition-colors"
            >
              Anotarme a la lista
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
