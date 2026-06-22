import HorarioCard from "./HorarioCard";

const VIDEOCALL_BOOKING_URL = "https://calendar.app.google/rzkTFUEhQp9EWs4N6";

export default function Hablemos() {
  return (
    <section
      id="hablemos"
      className="max-w-[1180px] mx-auto px-8 py-[110px] grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-14 items-center"
    >
      <div>
        <div className="flex items-baseline gap-3.5 mb-[22px]">
          <span className="font-sora font-bold text-sm text-accent-blue">
            06
          </span>
          <span className="text-sm font-semibold text-ink-quaternary">
            Hablemos
          </span>
        </div>
        <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[600px] mb-4">
          ¿Querés contarnos tu caso o sumarte como universidad?
        </h2>
        <p className="text-[17.5px] text-ink-secondary max-w-[560px] mb-9 leading-[1.6]">
          Coordinamos una videollamada corta para escucharte y mostrarte cómo
          funciona ROOMIE.
        </p>

        <div className="flex gap-3.5 flex-wrap">
          <a
            href={VIDEOCALL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-7 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
          >
            Coordinar videollamada
          </a>
          <a
            href="#waitlist"
            className="bg-transparent border border-white/[0.16] text-ink no-underline text-base font-semibold px-7 py-4 rounded-btn"
          >
            Prefiero dejar mi mail
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <HorarioCard />
      </div>
    </section>
  );
}
