const features = [
  {
    n: "01",
    title: "Verificación con cédula y foto",
    body: "Identidad confirmada antes de poder chatear. Siempre sabés con quién estás hablando.",
  },
  {
    n: "02",
    title: "Validación institucional",
    body: "Correo institucional o número de estudiante. Solo gente que realmente estudia.",
  },
  {
    n: "03",
    title: "Compatibilidad por hábitos",
    body: "Matcheamos por rutina y estilo de vida, no solo por precio o por zona.",
  },
  {
    n: "04",
    title: "Videollamada antes de decidir",
    body: "Chateás dentro de la app y, si querés, se conocen por video antes de comprometerse.",
  },
  {
    n: "05",
    title: "Referencias de ex roommates",
    body: "Reputación real dentro de la plataforma. Decidís con el respaldo de quienes ya convivieron.",
  },
];

export default function Solucion() {
  return (
    <section
      id="construimos"
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 lg:py-[110px]"
    >
      <div className="max-w-[720px] mb-14">
        <h2 className="font-sora font-extrabold text-[30px] sm:text-[44px] tracking-[-0.035em] leading-[1.06] mb-5 text-balance">
          Qué estamos construyendo
        </h2>
        <p className="text-[16px] sm:text-[17.5px] text-ink-secondary leading-[1.6]">
          Cada punto de esta lista sale de algo que nos pidieron. No es un
          roadmap de ideas nuestras: es la respuesta a lo que contaron los
          estudiantes que ya se mudaron.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {features.map((f) => (
          <div
            key={f.n}
            className="py-7 border-t border-white/[0.1] last:border-b md:last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b"
          >
            <div className="flex items-baseline gap-4 mb-2.5">
              <span className="font-sora font-bold text-[14px] text-amber shrink-0">
                {f.n}
              </span>
              <h3 className="font-sora font-bold text-[19px] sm:text-[21px] leading-tight">
                {f.title}
              </h3>
            </div>
            <p className="text-[15px] text-ink-tertiary leading-[1.6] pl-[30px]">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
