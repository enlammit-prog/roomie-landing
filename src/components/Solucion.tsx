const features = [
  {
    n: "01",
    title: "Verificación con cédula y foto",
    body: "Identidad confirmada en tiempo real. Siempre sabés con quién estás hablando.",
  },
  {
    n: "02",
    title: "Validación institucional",
    body: "Email .edu o número de estudiante. Solo gente que realmente estudia.",
  },
  {
    n: "03",
    title: "Algoritmo de compatibilidad",
    body: "Matcheamos por hábitos y estilo de vida, no solo por precio o por zona.",
  },
  {
    n: "04",
    title: "Chat entre perfiles verificados",
    body: "Conversás únicamente con personas validadas. Nada de perfiles falsos.",
  },
  {
    n: "05",
    title: "Reviews de ex roommates",
    body: "Reputación real dentro de la plataforma. Decidís con respaldo de quienes ya convivieron.",
  },
];

export default function Solucion() {
  return (
    <section className="bg-bg-alt border-t border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto px-8 py-[110px]">
        <div className="flex items-baseline gap-3.5 mb-[22px]">
          <span className="font-sora font-bold text-sm text-accent-blue">02</span>
          <span className="text-sm font-semibold text-ink-quaternary">
            La solución
          </span>
        </div>
        <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[720px] mb-4">
          Confianza, compatibilidad y seguridad, en un solo lugar.
        </h2>
        <p className="text-[17.5px] text-ink-secondary max-w-[600px] mb-[60px] leading-[1.6]">
          Cada perfil pasa por una verificación real antes de poder chatear.
          Esto es lo que nos hace distintos.
        </p>

        <div className="flex flex-col">
          {features.map((f) => (
            <div
              key={f.n}
              className="grid grid-cols-[40px_1fr] sm:grid-cols-[64px_1fr_1.1fr] gap-4 sm:gap-8 items-start py-[30px] border-t border-white/[0.09]"
            >
              <span className="font-sora font-bold text-lg text-[#4F6FE0]">
                {f.n}
              </span>
              <h3 className="font-sora font-bold text-[21px] leading-tight">
                {f.title}
              </h3>
              <p className="text-[15.5px] text-ink-tertiary leading-[1.6] col-span-2 sm:col-span-1">
                {f.body}
              </p>
            </div>
          ))}
          <div className="border-t border-white/[0.09]" />
        </div>
      </div>
    </section>
  );
}
