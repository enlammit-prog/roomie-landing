import Orbit from "./Orbit";
import MatchCard from "./MatchCard";
import { GOOGLE_FORM_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative max-w-[1180px] mx-auto px-8 py-[92px] pb-20 grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-14 items-center"
    >
      <div className="absolute -top-[140px] -right-[200px] w-[640px] h-[640px] pointer-events-none opacity-[0.42] hidden md:block">
        <Orbit stroke="grad" gradientId="orbit-hero" />
      </div>

      <div className="relative z-[2]">
        <div className="inline-flex items-center gap-2.5 mb-[30px]">
          <span className="w-[7px] h-[7px] rounded-full bg-match inline-block" />
          <span className="text-sm font-medium text-ink-secondary">
            Para estudiantes que llegan del interior a Montevideo
          </span>
        </div>

        <h1 className="font-sora font-extrabold text-[34px] sm:text-[52px] lg:text-[60px] leading-[1.08] sm:leading-[1.02] tracking-[-0.025em] mb-6 text-balance">
          Encontrá con quién vivir, sin jugártela a ciegas.
        </h1>

        <p className="text-lg leading-[1.62] text-ink-secondary max-w-[500px] mb-9">
          ROOMIE conecta estudiantes con compañeros de cuarto verificados y
          compatibles. Identidad real, hábitos que encajan, cero grupos de
          Facebook llenos de desconocidos.
        </p>

        <div className="flex gap-3.5 flex-wrap mb-11">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-7 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
          >
            Crear mi perfil gratis
          </a>
          <a
            href="#como"
            className="bg-transparent border border-white/[0.16] text-ink no-underline text-base font-semibold px-7 py-4 rounded-btn"
          >
            Ver cómo funciona
          </a>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="flex items-center">
            <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-blue to-[#3b82f6] border-2 border-bg inline-block" />
            <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-violet to-[#a855f7] border-2 border-bg inline-block -ml-[10px]" />
            <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-match to-[#34d399] border-2 border-bg inline-block -ml-[10px]" />
          </div>
          <p className="text-[14.5px] text-ink-quaternary leading-[1.4]">
            <strong className="text-ink font-bold">65%</strong> de los
            estudiantes encuestados ya quiere usarlo
          </p>
        </div>
      </div>

      <div className="relative z-[2] flex justify-center">
        <MatchCard matchScore={94} />
      </div>
    </section>
  );
}
