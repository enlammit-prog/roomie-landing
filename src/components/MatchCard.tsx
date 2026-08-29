"use client";

import { useEffect, useState } from "react";

type MatchCardProps = {
  matchScore?: number;
};

const TRAITS = [
  { label: "Horarios", value: 92 },
  { label: "Orden", value: 88 },
  { label: "Vida social", value: 74 },
];

export default function MatchCard({ matchScore = 94 }: MatchCardProps) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const target = matchScore;
    const start = performance.now();
    const dur = 1500;
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [matchScore]);

  const circ = 2 * Math.PI * 42;
  const ringOffset = circ - (circ * score) / 100;

  return (
    <div
      className="w-full max-w-[316px] p-px rounded-[22px] shadow-[0_44px_88px_-30px_rgba(0,0,0,0.9)] motion-safe:animate-float"
      style={{
        background:
          "linear-gradient(155deg, rgba(124,58,237,0.85), rgba(29,78,216,0.45) 48%, rgba(255,255,255,0.05))",
      }}
    >
      <div
        className="rounded-[21px] p-[18px] backdrop-blur-[16px]"
        style={{
          background:
            "linear-gradient(165deg, rgba(24,34,64,0.78), rgba(13,20,38,0.9))",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span className="font-sora text-[11px] font-bold tracking-[0.14em] text-[#7C8AA8]">
              ROOMIE
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#7C8AA8]" />
            <span className="text-[11px] text-[#7C8AA8]">Nuevo match</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-match bg-match/[0.13] border border-match/30 px-2 py-1 rounded-chip">
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            VERIFICADA
          </span>
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative w-[78px] h-[78px] flex items-center justify-center">
            <svg width="78" height="78" viewBox="0 0 96 96" className="-rotate-90">
              <defs>
                <linearGradient id="match-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <circle
                cx="48"
                cy="48"
                r="42"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="8"
              />
              <circle
                cx="48"
                cy="48"
                r="42"
                fill="none"
                stroke="url(#match-ring)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={ringOffset}
              />
            </svg>
            <div className="absolute text-center">
              <div className="font-sora font-extrabold text-[21px] leading-none text-white">
                {score}%
              </div>
              <div className="text-[8.5px] text-ink-quaternary tracking-[0.12em] mt-0.5">
                MATCH
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-3.5">
          <div className="font-sora font-bold text-[16.5px]">Sofía, 21</div>
          <div className="text-[12.5px] text-ink-quaternary mt-[2px]">
            Ingeniería, ORT · de Salto
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center mt-2.5">
            {["Madrugadora", "Pet friendly"].map((habit) => (
              <span
                key={habit}
                className="text-[10.5px] text-[#C7D0E4] bg-white/[0.06] px-2 py-1 rounded-[6px]"
              >
                {habit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 mb-4">
          {TRAITS.map((trait) => (
            <div
              key={trait.label}
              className="grid grid-cols-[74px_1fr_30px] items-center gap-2.5"
            >
              <span className="text-[11.5px] text-ink-quaternary">
                {trait.label}
              </span>
              <span className="h-[5px] rounded-full bg-white/[0.07] overflow-hidden">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-blue to-violet"
                  style={{ width: `${trait.value}%` }}
                />
              </span>
              <span className="text-[11px] font-bold text-right">
                {trait.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2.5 p-2.5 mb-3.5 rounded-[13px] bg-blue/[0.12] border border-blue/[0.32]">
          <span className="shrink-0 w-[26px] h-[26px] rounded-full bg-gradient-to-br from-violet to-[#a855f7] flex items-center justify-center font-sora font-bold text-[11px] text-white">
            S
          </span>
          <p className="text-[12px] leading-[1.45] text-[#C7D0E4]">
            Hola! Vi que buscás por Cordón. ¿Hacemos una videollamada?
          </p>
        </div>

        <button className="w-full border-none cursor-pointer bg-gradient-to-r from-blue to-violet text-white font-manrope text-[14.5px] font-bold py-3 rounded-[13px]">
          Responder mensaje
        </button>
      </div>
    </div>
  );
}
