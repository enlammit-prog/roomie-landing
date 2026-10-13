import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/links";

const ACTUALIZADO = "13 de octubre de 2026";

export const metadata: Metadata = {
  title: "Política de privacidad — ROOMIE",
  description:
    "Qué datos recoge ROOMIE, para qué los usa, dónde se guardan y cómo pedir que los borremos.",
  robots: { index: true, follow: true },
};

function Seccion({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-9 mt-9 border-t border-white/[0.09] first:border-0 first:mt-0 first:pt-0">
      <h2 className="font-sora font-bold text-[21px] sm:text-[23px] tracking-[-0.02em] leading-tight mb-4">
        {titulo}
      </h2>
      <div className="flex flex-col gap-4 text-[16.5px] leading-[1.7] text-ink-secondary">
        {children}
      </div>
    </section>
  );
}

export default function PrivacidadPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[rgba(15,23,42,0.86)] backdrop-blur-[10px] border-b border-hairline">
        <nav className="max-w-[1320px] mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline shrink-0"
          >
            <Image
              src="/roomie_profile.png"
              alt="ROOMIE"
              width={32}
              height={32}
              className="rounded-full block w-7 h-7 sm:w-8 sm:h-8"
            />
            <span className="font-sora font-bold text-[15px] sm:text-[17px] tracking-[0.15em] text-ink">
              ROOMIE
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#9AA7C2] no-underline text-[14.5px] font-medium hover:text-ink transition-colors"
            >
              English
            </Link>
            <Link
              href="/"
              className="text-[#9AA7C2] no-underline text-[14.5px] font-medium hover:text-ink transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 lg:py-24">
        <div className="max-w-[680px]">
          <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-amber mb-5">
            Última actualización: {ACTUALIZADO}
          </p>

          <h1 className="font-sora font-extrabold text-[34px] sm:text-[46px] tracking-[-0.04em] leading-[1.04] mb-14">
            Política de privacidad
          </h1>

          <Seccion titulo="Qué datos recogemos">
            <p>
              <strong className="text-ink font-semibold">Tu correo</strong>, si
              lo dejás en la lista de espera. Es el único dato que este sitio
              guarda por su cuenta: el formulario no pide nombre, teléfono ni
              nada más.
            </p>
            <p>
              <strong className="text-ink font-semibold">
                Lo que nos contás vos
              </strong>
              , si nos escribís por WhatsApp, por mail o si coordinás una
              llamada. Ahí puede haber tu nombre, tu teléfono, cuándo llegás a
              Montevideo o qué estás buscando. Solo lo que elegís contarnos.
            </p>
            <p>
              <strong className="text-ink font-semibold">
                Las respuestas del formulario de Google
              </strong>
              , si completaste alguna de nuestras encuestas.
            </p>
            <p>
              Para funcionar usamos servicios de terceros alojados fuera de
              Uruguay, que almacenan los correos de la lista y alojan este
              sitio. Si querés saber cuáles, escribinos.
            </p>
          </Seccion>

          <Seccion titulo="Para qué los usamos">
            <p>
              Para avisarte cuando abramos el acceso, para responderte si nos
              escribiste, y para entender qué necesitan los estudiantes que
              llegan a Montevideo mientras construimos el producto.
            </p>
            <p>
              <strong className="text-ink font-semibold">
                Nada más que eso.
              </strong>{" "}
              No vendemos, alquilamos ni cedemos tus datos a nadie, y no te
              vamos a mandar publicidad de terceros.
            </p>
          </Seccion>

          <Seccion titulo="Cuánto tiempo los guardamos">
            <p>
              Tu correo queda en la lista hasta que lances el pedido de borrado o
              hasta que el proyecto deje de existir. Si en algún momento cerramos
              ROOMIE, borramos la lista.
            </p>
          </Seccion>

          <Seccion titulo="Tus derechos">
            <p>
              La{" "}
              <strong className="text-ink font-semibold">
                Ley 18.331 de Protección de Datos Personales
              </strong>{" "}
              de Uruguay te da derecho a pedirnos, de forma gratuita, que te
              digamos qué datos tuyos tenemos, que los corrijamos si están mal,
              que los actualicemos, o que los borremos.
            </p>
            <p>
              Para ejercer cualquiera de esos derechos, escribinos a{" "}
              <a
                href={CONTACT_MAILTO}
                className="text-amber no-underline font-semibold border-b border-amber/40 pb-px hover:text-ink hover:border-ink transition-colors"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              y te respondemos. No hace falta que nos expliques por qué.
            </p>
            <p>
              El organismo que controla esto en Uruguay es la Unidad Reguladora y
              de Control de Datos Personales (URCDP), y podés presentarle un
              reclamo si consideramos mal tu pedido.
            </p>
          </Seccion>

          <Seccion titulo="Menores de edad">
            <p>
              ROOMIE está pensado para estudiantes universitarios. Si tenés menos
              de 18 años y nos dejaste tus datos sin autorización de tu madre,
              padre o tutor, escribinos y los borramos.
            </p>
          </Seccion>

          <Seccion titulo="Quién es responsable">
            <p>
              ROOMIE es un proyecto en desarrollo con sede en Montevideo,
              Uruguay. El responsable de la base de datos se contacta en{" "}
              <a
                href={CONTACT_MAILTO}
                className="text-amber no-underline font-semibold border-b border-amber/40 pb-px hover:text-ink hover:border-ink transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Seccion>

          <Seccion titulo="Cambios">
            <p>
              Si cambiamos algo de esta política, actualizamos la fecha de arriba.
              Si el cambio es importante y tenemos tu correo, te avisamos.
            </p>
          </Seccion>
        </div>
      </main>

      <Footer />
    </>
  );
}
