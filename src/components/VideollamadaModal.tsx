"use client";

import { useState } from "react";
import { VIDEOCALL_FORM_ENDPOINT } from "@/lib/forms";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type VideollamadaModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function VideollamadaModal({
  open,
  onClose,
}: VideollamadaModalProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleClose = () => {
    setSubmitted(false);
    setError(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!nombre.trim()) {
      setError("Contanos tu nombre.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError("Ingresá un email válido.");
      return;
    }
    if (!VIDEOCALL_FORM_ENDPOINT) {
      setError(
        "El formulario todavía no está configurado. Probá de nuevo más tarde."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(VIDEOCALL_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ nombre, email, horario }),
      });
      if (!res.ok) throw new Error("No se pudo enviar tu solicitud.");
      setSubmitted(true);
    } catch {
      setError("No se pudo enviar tu solicitud. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[480px] rounded-card bg-gradient-to-br from-panel-from to-panel-to border border-white/[0.09] shadow-card p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 text-ink-quaternary hover:text-ink text-xl leading-none"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <h3 className="font-sora font-bold text-xl mb-3">
              ¡Recibimos tu pedido!
            </h3>
            <p className="text-ink-secondary text-[15px] leading-[1.6]">
              Te contactamos dentro de las próximas 24 hs para coordinar la
              videollamada.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-sora font-bold text-xl mb-2">
              Coordinar videollamada
            </h3>
            <p className="text-ink-tertiary text-[14.5px] mb-6 leading-[1.6]">
              Dejanos tus datos y te contactamos para charlar sobre ROOMIE.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <input
                type="text"
                required
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="px-4 py-3.5 rounded-btn border border-white/[0.12] font-manrope text-[15px] bg-white/[0.06] text-ink placeholder:text-ink-quaternary outline-none focus:border-violet/60"
              />
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3.5 rounded-btn border border-white/[0.12] font-manrope text-[15px] bg-white/[0.06] text-ink placeholder:text-ink-quaternary outline-none focus:border-violet/60"
              />
              <input
                type="text"
                placeholder="Horario preferido (opcional)"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="px-4 py-3.5 rounded-btn border border-white/[0.12] font-manrope text-[15px] bg-white/[0.06] text-ink placeholder:text-ink-quaternary outline-none focus:border-violet/60"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 border-none cursor-pointer bg-gradient-to-r from-blue to-violet text-white font-manrope text-[15px] font-semibold py-3.5 rounded-btn disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Solicitar videollamada"}
              </button>

              {error && (
                <p className="text-sm text-[#FCA5A5] font-medium">{error}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
