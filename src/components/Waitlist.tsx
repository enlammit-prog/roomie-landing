"use client";

import { useState } from "react";
import { WAITLIST_FORM_ENDPOINT } from "@/lib/forms";
import { BOOKING_URL } from "@/lib/links";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PASOS = [
  "Te escribimos para entender qué estás buscando.",
  "Entrás al primer grupo de acceso, antes que el resto.",
  "Te consultamos las decisiones del producto mientras lo construimos.",
];

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
    <section
      id="waitlist"
      className="bg-bg-alt border-t border-hairline"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 lg:py-[100px] grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20">
        <div>
          <h2 className="font-sora font-extrabold text-[30px] sm:text-[42px] tracking-[-0.035em] leading-[1.06] mb-5 text-balance">
            Dejanos tu mail y construimos esto con vos.
          </h2>
          <p className="text-[16px] sm:text-[17.5px] text-ink-secondary leading-[1.6] mb-9 max-w-[480px]">
            Todavía estamos a tiempo de cambiar cosas. Si te sumás ahora, tu
            opinión pesa más que la de nadie.
          </p>

          {submitted ? (
            <div
              role="status"
              className="border-l-2 border-match bg-match/[0.08] px-5 py-4 text-[16px] text-ink font-semibold max-w-[480px]"
            >
              Listo. Te escribimos a {email} cuando abramos el acceso.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-[480px]"
              noValidate
            >
              <label
                htmlFor="waitlist-email"
                className="block text-[13px] font-bold tracking-[0.1em] uppercase text-ink-quaternary mb-2.5"
              >
                Tu correo
              </label>
              <div className="flex gap-2.5 flex-wrap">
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-describedby={error ? "waitlist-error" : undefined}
                  aria-invalid={error ? true : undefined}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-[220px] px-4 py-[14px] rounded-btn border border-white/[0.18] bg-white/[0.04] font-manrope text-base text-ink outline-none focus:border-amber focus:ring-1 focus:ring-amber"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="border-none cursor-pointer bg-amber-deep text-amber-ink font-manrope text-base font-bold px-6 py-[14px] rounded-btn hover:bg-amber active:translate-y-px transition-colors disabled:opacity-60"
                >
                  {loading ? "Enviando" : "Anotarme"}
                </button>
              </div>
              {error && (
                <p
                  id="waitlist-error"
                  className="mt-3 text-[14.5px] text-amber font-medium"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </div>

        <div className="lg:border-l lg:border-white/[0.1] lg:pl-20">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-ink-quaternary mb-6">
            Qué pasa después
          </p>
          <ol className="flex flex-col">
            {PASOS.map((paso, i) => (
              <li
                key={paso}
                className="grid grid-cols-[28px_1fr] gap-4 py-5 border-t border-white/[0.1] last:border-b"
              >
                <span className="font-sora font-bold text-[14px] text-amber pt-px">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] text-ink-secondary leading-[1.55]">
                  {paso}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-ink-tertiary leading-[1.6] mt-7">
            ¿Preferís hablar?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber no-underline font-semibold border-b border-amber/40 pb-px hover:text-ink hover:border-ink transition-colors"
            >
              Coordiná una llamada de 15 minutos
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
