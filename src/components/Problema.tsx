const items = [
  {
    title: "Grupos llenos de desconocidos",
    body: "Facebook e Instagram, sin verificación de identidad ni la menor garantía de quién es la otra persona.",
  },
  {
    title: "Meses sin saber dónde vas a vivir",
    body: "La búsqueda se estira justo cuando estás empezando a estudiar y lo que más necesitás es estabilidad.",
  },
  {
    title: "Sin saber si se van a llevar bien",
    body: "Cero información sobre los hábitos de convivencia. Terminás apostando a ciegas con tu día a día.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="max-w-[1180px] mx-auto px-8 py-[110px]">
      <div className="flex items-baseline gap-3.5 mb-[22px]">
        <span className="font-sora font-bold text-sm text-accent-blue">01</span>
        <span className="text-sm font-semibold text-ink-quaternary">El problema</span>
      </div>
      <h2 className="font-sora font-extrabold text-[32px] sm:text-[44px] tracking-[-0.025em] leading-[1.08] max-w-[660px] mb-4">
        Buscar roommate hoy es un caos.
      </h2>
      <p className="text-[17.5px] text-ink-secondary max-w-[560px] mb-[60px] leading-[1.6]">
        Los que llegan a Montevideo, del interior o de intercambio, no tienen
        una forma segura de encontrar con quién vivir. Y eso pesa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/[0.09]">
        {items.map((item, i) => (
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
            <div className="font-sora font-bold text-xl mb-3">{item.title}</div>
            <p className="text-[14.5px] text-ink-tertiary leading-[1.65]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
