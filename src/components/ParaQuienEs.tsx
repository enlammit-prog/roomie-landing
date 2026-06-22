const columns = [
  {
    title: "Estudiantes del interior",
    body: "De Rocha, Salto, Maldonado, Paysandú o cualquier punto del país. Llegás a estudiar y necesitás con quién compartir, sin conocer a nadie todavía.",
  },
  {
    title: "Estudiantes de intercambio",
    body: "Venís de afuera por un semestre o un año. Querés moverte rápido y vivir con alguien de confianza, no jugártela con un anuncio cualquiera.",
    extra: "Coming to Montevideo on exchange? ROOMIE is for you too.",
  },
];

export default function ParaQuienEs() {
  return (
    <section
      id="para-quien"
      className="max-w-[1180px] mx-auto px-8 py-[110px]"
    >
      <div className="flex items-baseline gap-3.5 mb-[22px]">
        <span className="font-sora font-bold text-sm text-accent-blue">04</span>
        <span className="text-sm font-semibold text-ink-quaternary">
          Para quién es
        </span>
      </div>
      <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[600px] mb-4">
        Pensada para los que recién llegan a Montevideo.
      </h2>
      <p className="text-[17.5px] text-ink-secondary max-w-[560px] mb-[60px] leading-[1.6]">
        Si te mudás a la capital para estudiar y todavía no conocés a nadie,
        ROOMIE es para vos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/[0.09]">
        {columns.map((col, i) => (
          <div
            key={col.title}
            className={`py-8 ${
              i === 0 ? "md:pr-8 md:pl-0 md:border-r border-hairline" : "md:pl-8 md:pr-0"
            }`}
          >
            <div className="font-sora font-bold text-xl mb-3">{col.title}</div>
            <p className="text-[14.5px] text-ink-tertiary leading-[1.65]">
              {col.body}
            </p>
            {col.extra && (
              <p className="text-[13.5px] text-accent-blue italic mt-3 leading-[1.6]">
                {col.extra}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
