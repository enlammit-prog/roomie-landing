"use client";

import { useState } from "react";
import { whatsappUrl, BOOKING_URL } from "@/lib/links";
import Footer from "@/components/Footer";

type Lang = "es" | "en";

const WA_MSG = {
  es: "¡Hola ROOMIE! Llego a Montevideo a estudiar y me gustaría que me ayuden a conseguir dónde vivir.",
  en: "Hi ROOMIE! I'm coming to Montevideo as a student and I'd like help finding a place to live.",
};

const dict = {
  es: {
    hero: {
      badge: "Concierge de vivienda para estudiantes",
      h1: "Llegá a Montevideo con tu vivienda ya resuelta.",
      body: "Buscar dónde vivir a distancia es estresante: publicaciones dudosas, garantías, señas por lugares que nunca viste. ROOMIE es tu equipo en Montevideo. Buscamos, verificamos y reservamos tu vivienda para que llegues con las llaves, no con dudas.",
      ctaWa: "Escribinos por WhatsApp",
      ctaCall: "O agendá una llamada corta",
      note: "Respondemos en 24 horas",
    },
    trust: [
      {
        title: "Un equipo local, no un portal",
        body: "Personas reales en Montevideo que visitan los lugares, hablan con los dueños y saben qué barrios tienen sentido para estudiantes.",
      },
      {
        title: "Cada opción verificada",
        body: "Confirmamos que el lugar existe, que el dueño es legítimo y que las fotos son reales, antes de que muevas un peso.",
      },
      {
        title: "De punta a punta",
        body: "Desde la primera búsqueda hasta el día que recibís las llaves, incluyendo papeles y lo que surja después de llegar.",
      },
    ],
    howTitle: "Cómo funciona",
    how: [
      {
        n: "01",
        title: "Contanos qué necesitás",
        body: "Una charla corta por WhatsApp o videollamada: presupuesto, fechas, barrio, solo o con roommates.",
      },
      {
        n: "02",
        title: "Buscamos y verificamos",
        body: "Armamos una lista de 3–5 opciones reales que encajan, chequeamos cada una y te mandamos una comparación honesta.",
      },
      {
        n: "03",
        title: "Elegís, nosotros reservamos",
        body: "Recorrida en video de tus favoritas, y después negociamos y te acompañamos en la reserva y el contrato.",
      },
      {
        n: "04",
        title: "Llegás y está pronto",
        body: "Llaves, check-in y un contacto local para tus primeras semanas. Si algo falla, nos escribís a nosotros, no a un desconocido.",
      },
    ],
    includesTitle: "Qué incluye",
    includes: [
      "Búsqueda personalizada según tu presupuesto y fechas",
      "Verificación de cada publicación y cada dueño",
      "Recorridas en video para ver el lugar real antes de pagar",
      "Acompañamiento en contrato, seña y pago",
      "Coordinación del check-in cuando llegás",
      "Un contacto local por WhatsApp en tus primeras semanas",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Cuánto cuesta?",
        a: "Es un fee único de servicio que depende de lo que necesites. Te lo cotizamos de entrada, en la primera charla y antes de que te comprometas a nada. Sin sorpresas ni porcentaje del alquiler.",
      },
      {
        q: "¿Cuándo conviene empezar?",
        a: "Idealmente 4 a 8 semanas antes de viajar. Lo mejor se va temprano cada semestre, pero si llegás antes, escribinos igual y te decimos con honestidad qué es posible.",
      },
      {
        q: "¿También me consiguen roommate?",
        a: "Sí, es la otra mitad de ROOMIE. Matcheamos estudiantes por hábitos y estilo de vida, con perfiles verificados. Mencionalo en el chat y resolvemos las dos cosas juntas.",
      },
      {
        q: "¿Y si no me gustan las opciones?",
        a: "Pagás por un servicio, no por conformarte. Seguimos buscando hasta que las opciones realmente encajen, y si tu presupuesto y tus expectativas no dan, te lo decimos de frente en vez de empujarte a algo.",
      },
    ],
    cta: {
      h2: "Contanos qué necesitás. Del resto nos encargamos nosotros.",
      body: "Con un mensaje alcanza para arrancar. Te hacemos unas preguntas y volvemos con un plan, sin compromiso.",
      checks: ["Sin compromiso", "Respuesta en 24 h", "Equipo local"],
      ctaWa: "Escribinos por WhatsApp",
      ctaCall: "O agendá una llamada corta",
    },
  },
  en: {
    hero: {
      badge: "Housing concierge for exchange students",
      h1: "Land in Montevideo with your housing already solved.",
      body: "Finding a place from abroad is stressful: unfamiliar websites, contracts in Spanish, paying deposits for rooms you've never seen. ROOMIE is your team on the ground. We search, verify and book your housing so you arrive with keys, not doubts.",
      ctaWa: "WhatsApp us",
      ctaCall: "Or book a short call",
      note: "Reply within 24 hours · in English or Spanish",
    },
    trust: [
      {
        title: "A local team, not a listing site",
        body: "Real people in Montevideo who visit the places, talk to the owners and know which neighborhoods make sense for students.",
      },
      {
        title: "Every option verified",
        body: "We confirm the place exists, the owner is legitimate and the photos are real, before you ever send money.",
      },
      {
        title: "Handled end to end",
        body: "From the first search to the day you get the keys, including the paperwork and anything that comes up after you arrive.",
      },
    ],
    howTitle: "How it works",
    how: [
      {
        n: "01",
        title: "Tell us what you need",
        body: "A short WhatsApp chat or video call: budget, dates, neighborhood, living alone or with roommates.",
      },
      {
        n: "02",
        title: "We search and verify",
        body: "We shortlist 3–5 real options that fit, visit or video-check each one, and send you an honest comparison.",
      },
      {
        n: "03",
        title: "You choose, we book",
        body: "Video tour of your favorites, then we negotiate and walk you through the reservation and contract in your language.",
      },
      {
        n: "04",
        title: "You arrive, it's ready",
        body: "Keys, check-in and a local contact for your first weeks. If something's off, you message us, not a stranger.",
      },
    ],
    includesTitle: "What's included",
    includes: [
      "Personalized search based on your budget and dates",
      "Verification of every listing and owner",
      "Video tours so you see the real place before paying",
      "Support with contract, deposit and payment",
      "Check-in coordination when you arrive",
      "A local WhatsApp contact during your first weeks",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "How much does it cost?",
        a: "It's a one-time service fee that depends on what you need. We quote it upfront in the first chat, before you commit to anything. No surprises, no percentage of your rent.",
      },
      {
        q: "When should I start?",
        a: "Ideally 4–8 weeks before you travel. The best student housing in Montevideo goes early each semester, but if you're arriving sooner, write anyway and we'll tell you honestly what's possible.",
      },
      {
        q: "Can you also find me a roommate?",
        a: "Yes, that's the other half of ROOMIE. We match students by lifestyle and habits, with verified profiles. Mention it in the chat and we'll handle both together.",
      },
      {
        q: "What if I don't like the options?",
        a: "You pay to get a service, not to settle. We keep searching until the options genuinely fit, and we'll always tell you if your budget and expectations don't match, instead of pushing you into something.",
      },
    ],
    cta: {
      h2: "Tell us what you need. We'll take it from there.",
      body: "One message is enough to get started. We'll ask a few questions and come back with a plan, no commitment.",
      checks: ["No commitment", "English or Spanish", "Reply within 24 h"],
      ctaWa: "WhatsApp us",
      ctaCall: "Or book a short call",
    },
  },
};

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10B981"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="flex flex-col border-t border-white/[0.09]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.q} className="border-b border-white/[0.09]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-left bg-transparent border-none cursor-pointer"
            >
              <span className="font-sora font-semibold text-lg sm:text-xl text-ink">
                {faq.q}
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
              <p className="text-[15.5px] text-ink-tertiary leading-[1.65] pb-6 pr-6 sm:pr-12">
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ConciergePage({ lang }: { lang: Lang }) {
  const t = dict[lang];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative max-w-[1180px] mx-auto px-4 sm:px-8 py-[92px] pb-20 overflow-hidden">
        <div className="relative z-[2] max-w-[640px]">
          <div className="inline-flex items-center gap-2 mb-[30px] px-4 py-2 rounded-full bg-violet/[0.12] border border-violet/40">
            <span className="w-[7px] h-[7px] rounded-full bg-match inline-block" />
            <span className="text-sm font-medium text-ink-secondary">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-sora font-extrabold text-[34px] sm:text-[52px] lg:text-[58px] leading-[1.08] sm:leading-[1.02] tracking-[-0.025em] mb-6 text-balance">
            {t.hero.h1}
          </h1>

          <p className="text-lg leading-[1.62] text-ink-secondary max-w-[540px] mb-9">
            {t.hero.body}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={whatsappUrl(WA_MSG[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-7 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
            >
              <WhatsAppIcon />
              {t.hero.ctaWa}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] text-ink-quaternary no-underline hover:text-ink-secondary transition-colors"
            >
              {t.hero.ctaCall}
            </a>
          </div>

          <p className="mt-5 text-[13px] text-ink-muted">{t.hero.note}</p>
        </div>
      </section>

      {/* ── Trust row ── */}
      <section className="bg-bg-alt border-t border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/[0.09]">
            {t.trust.map((item, i) => (
              <div
                key={item.title}
                className={`py-8 ${
                  i === 0
                    ? "md:pr-8 md:pl-0 md:border-r border-hairline"
                    : i === 1
                    ? "md:px-8 md:border-r border-hairline"
                    : "md:pl-8 md:pr-0"
                }`}
              >
                <div className="font-sora font-bold text-xl mb-3">
                  {item.title}
                </div>
                <p className="text-[14.5px] text-ink-tertiary leading-[1.65]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[110px]">
        <div className="flex items-baseline gap-3.5 mb-[22px]">
          <span className="font-sora font-bold text-sm text-accent-blue">
            01
          </span>
          <span className="text-sm font-semibold text-ink-quaternary">
            {t.howTitle}
          </span>
        </div>
        <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[560px] mb-14">
          {t.howTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.how.map((step) => (
            <div
              key={step.n}
              className="rounded-card border border-white/[0.07] bg-[linear-gradient(145deg,#16213F,#0E1731)] p-7"
            >
              <span className="font-sora font-bold text-[13px] text-accent-blue mb-4 block">
                {step.n}
              </span>
              <h3 className="font-sora font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-[14.5px] text-ink-tertiary leading-[1.65]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Qué incluye ── */}
      <section className="bg-bg-alt border-t border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[110px]">
          <div className="flex items-baseline gap-3.5 mb-[22px]">
            <span className="font-sora font-bold text-sm text-accent-blue">
              02
            </span>
            <span className="text-sm font-semibold text-ink-quaternary">
              {t.includesTitle}
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[560px] mb-12">
            {t.includesTitle}
          </h2>

          <ul className="flex flex-col gap-5 max-w-[600px]">
            {t.includes.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="shrink-0 mt-[3px]">
                  <CheckIcon />
                </span>
                <span className="text-[16px] text-ink-secondary leading-[1.6]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[110px]">
        <div className="flex items-baseline gap-3.5 mb-[22px]">
          <span className="font-sora font-bold text-sm text-accent-blue">
            03
          </span>
          <span className="text-sm font-semibold text-ink-quaternary">
            {t.faqTitle}
          </span>
        </div>
        <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[560px] mb-12">
          {t.faqTitle}
        </h2>
        <FaqAccordion faqs={t.faqs} />
      </section>

      {/* ── CTA final ── */}
      <section className="bg-bg-alt border-t border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-[110px] text-center">
          <div className="max-w-[620px] mx-auto">
            <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] mb-4">
              {t.cta.h2}
            </h2>
            <p className="text-[17.5px] text-ink-secondary leading-[1.6] mb-9">
              {t.cta.body}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
              {t.cta.checks.map((check) => (
                <span
                  key={check}
                  className="inline-flex items-center gap-2 text-[14.5px] text-ink-secondary"
                >
                  <CheckIcon />
                  {check}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl(WA_MSG[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue to-violet text-white no-underline text-base font-semibold px-9 py-4 rounded-btn shadow-[0_16px_38px_-16px_rgba(124,58,237,0.7)]"
              >
                <WhatsAppIcon />
                {t.cta.ctaWa}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14.5px] text-ink-quaternary no-underline hover:text-ink-secondary transition-colors"
              >
                {t.cta.ctaCall}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
