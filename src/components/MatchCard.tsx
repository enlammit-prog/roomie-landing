"use client";

import { useEffect, useState } from "react";

type MatchCardProps = {
  matchScore?: number;
};

export default function MatchCard({ matchScore = 94 }: MatchCardProps) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const target = matchScore;
    const start = performance.now();
    const dur = 1400;
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
    <div className="relative w-[340px] p-[26px] rounded-card bg-gradient-to-br from-panel-from to-panel-to border border-white/[0.09] shadow-card animate-float">
      <div className="flex items-center justify-between mb-[22px]">
        <span className="font-sora text-[12.5px] font-semibold tracking-[0.08em] text-ink-quaternary uppercase">
          Nuevo match
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-match bg-match/[0.12] px-2.5 py-[5px] rounded-chip">
          ✓ Verificado
        </span>
      </div>

      <div className="flex items-center justify-center gap-[18px] mb-[22px]">
        <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-br from-blue to-[#60a5fa]" />
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg width="96" height="96" viewBox="0 0 96 96" className="-rotate-90">
            <circle
              cx="48"
              cy="48"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="7"
            />
            <circle
              cx="48"
              cy="48"
              r="42"
              fill="none"
              stroke="#10B981"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={ringOffset}
            />
          </svg>
          <div className="absolute text-center">
            <div className="font-sora font-extrabold text-2xl leading-none text-white">
              {score}%
            </div>
            <div className="text-[10px] text-ink-quaternary tracking-[0.08em] mt-0.5">
              MATCH
            </div>
          </div>
        </div>
        <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-br from-violet to-[#c084fc]" />
      </div>

      <div className="text-center mb-5">
        <div className="font-sora font-bold text-lg">Sofía y Lucía</div>
        <div className="text-[13.5px] text-ink-quaternary mt-[3px]">
          Estudiantes de ORT, del interior
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-[22px]">
        {["Madrugadora", "Ordenada", "Pet friendly"].map((habit) => (
          <span
            key={habit}
            className="text-[12.5px] text-[#C7D0E4] bg-white/[0.06] border border-white/[0.08] px-3 py-1.5 rounded-chip"
          >
            {habit}
          </span>
        ))}
      </div>

      <button className="w-full border-none cursor-pointer bg-gradient-to-r from-blue to-violet text-white font-manrope text-[15px] font-semibold py-[13px] rounded-btn">
        Enviar mensaje
      </button>
    </div>
  );
}
