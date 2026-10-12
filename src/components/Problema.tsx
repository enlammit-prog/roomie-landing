// Las cuatro cosas que se repitieron en casi todas las respuestas de la
// encuesta propia de julio de 2026. Es el hallazgo real, no copy inventado.
const PEDIDOS = [
  {
    title: "Una videollamada antes de decidir",
    body: "Querían verle la cara y hablar con la persona antes de comprometerse a convivir un año.",
  },
  {
    title: "Verificación de identidad",
    body: "Cédula y correo institucional. Saber que del otro lado hay alguien que realmente estudia.",
  },
  {
    title: "Referencias de quien ya convivió",
    body: "Poder leer la experiencia de otros antes de elegir, como en cualquier cosa que importa.",
  },
  {
    title: "Hablar dentro de la app",
    body: "No tener que pasar el número de teléfono a un desconocido para empezar la conversación.",
  },
];

export default function Problema() {
  return (
    <section
      id="problema"
      className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 lg:py-[110px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end mb-14">
        <h2 className="font-sora font-extrabold text-[30px] sm:text-[44px] tracking-[-0.035em] leading-[1.06] text-balance">
          Les preguntamos a estudiantes que ya se mudaron. Todos contaron la
          misma historia.
        </h2>
        <p className="text-[16px] sm:text-[17.5px] text-ink-secondary leading-[1.6] lg:pb-2">
          Grupos de Facebook, amigos de amigos, mensajes a desconocidos. Ninguno
          tenía forma de saber con quién iba a terminar viviendo, ni cuánto le
          iba a llevar resolverlo.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[30%] shrink-0 lg:border-t-2 lg:border-amber-deep lg:pt-7">
          <p className="text-[15px] leading-[1.65] text-ink-tertiary">
            Encuesta propia, julio de 2026. Quince respuestas orgánicas, cuatro
            de ellas con una mudanza real pendiente desde el interior.
          </p>
          <p className="text-[15px] leading-[1.65] text-ink-tertiary mt-4">
            Es una muestra chica y la mostramos tal cual. Lo que importa es que
            el pedido se repitió en casi todas.
          </p>
        </div>

        <div className="lg:flex-grow">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-ink-quaternary mb-6">
            Lo que pidieron, en orden de insistencia
          </p>
          <div className="flex flex-col">
            {PEDIDOS.map((pedido, i) => (
              <div
                key={pedido.title}
                className="grid grid-cols-[28px_1fr] sm:grid-cols-[40px_1fr_1.25fr] gap-x-4 sm:gap-x-8 gap-y-2 py-6 border-t border-white/[0.1] last:border-b"
              >
                <span className="font-sora font-bold text-[15px] text-amber pt-px">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sora font-bold text-[18px] sm:text-[20px] leading-tight">
                  {pedido.title}
                </h3>
                <p className="col-start-2 sm:col-start-3 text-[14.5px] sm:text-[15px] text-ink-tertiary leading-[1.6]">
                  {pedido.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
