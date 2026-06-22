const steps = [
  {
    n: "1",
    title: "Registrate",
    body: "Con tu email institucional. Validamos que estudies.",
  },
  {
    n: "2",
    title: "Completá tu perfil",
    body: "Hábitos, horarios y preferencias de convivencia.",
  },
  {
    n: "3",
    title: "Explorá compatibles",
    body: "Mirá perfiles que matchean con tu estilo, gratis.",
  },
  {
    n: "4",
    title: "Conectá con tu match",
    body: "Desbloqueá el contacto con un perfil verificado y compatible.",
  },
  {
    n: "5",
    title: "Mudate tranquilo",
    body: "Chateá, coordiná y arrancá esta nueva etapa.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como" className="max-w-[1180px] mx-auto px-8 py-[110px]">
      <div className="flex items-baseline gap-3.5 mb-[22px]">
        <span className="font-sora font-bold text-sm text-accent-blue">03</span>
        <span className="text-sm font-semibold text-ink-quaternary">
          Cómo funciona
        </span>
      </div>
      <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[560px] mb-16">
        De crear tu perfil a mudarte, en cinco pasos.
      </h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="hidden lg:block absolute top-[19px] left-[8%] right-[8%] h-px bg-white/[0.12]" />
        {steps.map((step) => (
          <div key={step.n} className="relative">
            <div className="relative z-[2] w-10 h-10 rounded-full bg-bg border border-violet/50 flex items-center justify-center font-sora font-bold text-[15px] text-accent-violet mb-[22px]">
              {step.n}
            </div>
            <h3 className="font-sora font-bold text-[17px] leading-snug mb-[9px]">
              {step.title}
            </h3>
            <p className="text-sm text-ink-tertiary leading-[1.6]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
