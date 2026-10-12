import { CONTACT_MAILTO } from "@/lib/links";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-bg-alt border-t border-b border-hairline"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 lg:py-[100px] flex justify-center">
        <div className="max-w-[680px]">
          <h2 className="font-sora font-extrabold text-[28px] sm:text-[38px] tracking-[-0.035em] leading-[1.08] mb-8">
            Quién está detrás
          </h2>

          <p className="text-[17px] sm:text-[19px] leading-[1.68] text-[#C7D0E4] mb-5">
            Detrás de ROOMIE hay un estudiante que pasó por esto: llegar a
            Montevideo a estudiar, no conocer a nadie y tener que buscar con
            quién vivir mandando mensajes a desconocidos en Facebook.
          </p>

          <p className="text-[17px] sm:text-[19px] leading-[1.68] text-[#C7D0E4] mb-5">
            De ahí salió la idea. Después vinieron las encuestas, las
            entrevistas y la confirmación de que no era un problema propio: era
            el de todos los que llegan.
          </p>

          <p className="text-[17px] sm:text-[19px] leading-[1.68] text-[#C7D0E4] mb-10">
            ROOMIE es lo que nos hubiera gustado tener cuando llegamos. Todavía
            no existe. Lo estamos construyendo de a poco, en Montevideo, con la
            gente que lo va a usar.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 border-t border-white/[0.1]">
            <p className="text-[14.5px] text-ink-quaternary">
              Equipo ROOMIE · Montevideo
            </p>
            <a
              href={CONTACT_MAILTO}
              className="text-amber no-underline text-[15px] font-semibold border-b border-amber/40 pb-[3px] hover:text-ink hover:border-ink transition-colors"
            >
              Escribinos directo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
