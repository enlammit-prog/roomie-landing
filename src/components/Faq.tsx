"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo sé que la otra persona es real?",
    answer:
      "Antes de poder chatear, cada persona verifica su identidad con cédula y foto, más su correo institucional o número de estudiante de cualquier universidad. Fue lo que más nos pidieron los estudiantes que encuestamos: saber con certeza con quién están hablando.",
  },
  {
    question: "¿Tengo que ser de alguna universidad en particular?",
    answer:
      "No. ROOMIE es para cualquier estudiante que llega a Montevideo, sea del interior o de intercambio. Solo validamos que efectivamente estés estudiando.",
  },
  {
    question: "¿Puedo conocer a la persona antes de decidir?",
    answer:
      "Sí. Chateás dentro de la app y, si querés, coordinan una videollamada previa. Varios encuestados nos dijeron que un facetime antes de mudarse les daría la tranquilidad que les falta hoy.",
  },
  {
    question: "¿Cuánto cuesta usar ROOMIE?",
    answer:
      "Crear tu perfil y explorar personas compatibles es gratis. Más adelante vamos a contarte los detalles de cómo se desbloquea el contacto con un match verificado.",
  },
  {
    question: "¿Cuándo lanzan?",
    answer:
      "Estamos terminando de validar la app con estudiantes reales. Dejanos tu mail en la lista de espera y sos de los primeros en enterarte apenas abramos.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-alt border-t border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto px-8 py-[110px]">
        <div className="flex items-baseline gap-3.5 mb-[22px]">
          <span className="font-sora font-bold text-sm text-accent-blue">05</span>
          <span className="text-sm font-semibold text-ink-quaternary">
            Preguntas frecuentes
          </span>
        </div>
        <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[600px] mb-12">
          Lo que solés preguntarte antes de empezar.
        </h2>

        <div className="flex flex-col border-t border-white/[0.09]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-white/[0.09]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="font-sora font-semibold text-lg sm:text-xl text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-[8px] border border-violet/50 text-accent-violet font-sora font-semibold text-lg transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={`faq-answer-${i}`}
                    className="text-[15.5px] text-ink-tertiary leading-[1.65] pb-6 pr-6 sm:pr-12"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
