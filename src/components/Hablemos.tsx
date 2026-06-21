"use client";

import { useState } from "react";
import VideollamadaModal from "./VideollamadaModal";

export default function Hablemos() {
  const [open, setOpen] = useState(false);

  return (
    <section id="hablemos" className="max-w-[1180px] mx-auto px-8 py-[110px]">
      <div className="flex items-baseline gap-3.5 mb-[22px]">
        <span className="font-sora font-bold text-sm text-accent-blue">04</span>
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

      <button
        onClick={() => setOpen(true)}
        className="border-none cursor-pointer bg-gradient-to-r from-blue to-violet text-white font-manrope text-base font-semibold px-7 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
      >
        Coordinar videollamada
      </button>

      <VideollamadaModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
