"use client";

import { useState } from "react";
import Orbit from "./Orbit";
import { WAITLIST_FORM_ENDPOINT } from "@/lib/forms";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!EMAIL_REGEX.test(email)) {
      setError("Ingresá un email válido.");
      return;
    }
    if (!WAITLIST_FORM_ENDPOINT) {
      setError(
        "El formulario todavía no está configurado. Probá de nuevo más tarde."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(WAITLIST_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("No se pudo enviar tu email.");
      setSubmitted(true);
    } catch {
      setError("No se pudo enviar tu email. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

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

          {submitted ? (
            <div className="bg-white/[0.14] border border-white/30 rounded-[14px] p-[22px] text-white text-[17px] font-semibold">
              ¡Listo! Te avisamos apenas abramos los primeros matches.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 max-w-[480px] mx-auto flex-wrap"
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-[220px] px-5 py-4 rounded-btn border-none font-manrope text-base bg-white/[0.96] text-panel-from outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="border-none cursor-pointer bg-bg text-white font-manrope text-base font-bold px-7 py-4 rounded-btn disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Quiero entrar"}
              </button>
            </form>
          )}

          {error && (
            <p className="mt-4 text-sm text-white/90 font-medium">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
