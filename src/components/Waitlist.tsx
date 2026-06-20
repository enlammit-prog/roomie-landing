import Orbit from "./Orbit";
import { GOOGLE_FORM_URL } from "@/lib/links";

export default function Waitlist() {
  return (
    <section id="waitlist" className="max-w-[1180px] mx-auto px-8 py-[110px]">
      <div className="relative overflow-hidden rounded-card-lg px-6 sm:px-12 py-[76px] bg-gradient-to-br from-blue to-violet text-center">
        <div className="absolute -bottom-[220px] -left-[140px] w-[520px] h-[520px] opacity-[0.22] pointer-events-none hidden sm:block">
          <Orbit stroke="rgba(255,255,255,0.9)" />
        </div>
        <div className="relative z-[2] max-w-[600px] mx-auto">
          <h2 className="font-sora font-extrabold text-[32px] sm:text-[46px] tracking-[-0.025em] leading-[1.06] mb-4 text-white">
            Sumate a la lista de espera
          </h2>
          <p className="text-lg text-white/[0.88] leading-[1.55] mb-9">
            Sé de los primeros en encontrar tu roommate ideal cuando lancemos
            en ORT. Sin spam, solo el aviso de lanzamiento.
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-none cursor-pointer bg-bg text-white font-manrope text-base font-bold px-9 py-4 rounded-btn no-underline"
          >
            Quiero entrar
          </a>
        </div>
      </div>
    </section>
  );
}
