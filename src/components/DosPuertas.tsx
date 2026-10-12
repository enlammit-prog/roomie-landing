import { GOOGLE_FORM_URL, whatsappUrl, WA_MSG_VIVIENDA_ES } from "@/lib/links";

export default function DosPuertas() {
  return (
    <section className="bg-bg-alt border-t border-b border-hairline">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 lg:py-[90px]">
        <h2 className="font-sora font-extrabold text-[26px] sm:text-[34px] tracking-[-0.03em] leading-[1.1] mb-10">
          ¿Cuándo llegás a Montevideo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.1]">
          <div className="bg-bg-alt p-8 lg:p-10 flex flex-col border-t-2 border-amber-deep">
            <span className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-amber mb-3">
              Este año
            </span>
            <h3 className="font-sora font-bold text-[22px] sm:text-2xl leading-tight mb-3">
              No esperes a que lancemos.
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-ink-secondary mb-8 flex-grow">
              Hoy el equipo de ROOMIE busca, verifica y reserva tu vivienda por
              vos, antes de que te subas al avión o al ómnibus.
            </p>
            <a
              href={whatsappUrl(WA_MSG_VIVIENDA_ES)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 self-start bg-amber-deep text-amber-ink no-underline text-[15.5px] font-bold px-6 py-[15px] rounded-btn hover:bg-amber transition-colors"
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

          <div className="bg-bg-alt p-8 lg:p-10 flex flex-col border-t-2 border-white/[0.14]">
            <span className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-ink-quaternary mb-3">
              Más adelante
            </span>
            <h3 className="font-sora font-bold text-[22px] sm:text-2xl leading-tight mb-3">
              Enterate antes que nadie.
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-ink-secondary mb-8 flex-grow">
              Dejanos tu mail. Te avisamos cuando abramos el acceso y te
              consultamos las decisiones del producto mientras lo construimos.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-ink no-underline text-[15.5px] font-semibold border-b border-white/30 pb-[3px] hover:border-amber hover:text-amber transition-colors"
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
