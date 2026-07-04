import type { Metadata } from "next";
import ConciergePage from "@/components/concierge/ConciergePage";

export const metadata: Metadata = {
  title: "ROOMIE — Llegá a Montevideo con tu vivienda ya resuelta",
  description:
    "El concierge de ROOMIE busca, verifica y reserva tu vivienda en Montevideo antes de que llegues. Un equipo local se encarga de todo: búsqueda, recorridas en video, contrato y check-in.",
  openGraph: {
    title: "ROOMIE — Llegá a Montevideo con tu vivienda ya resuelta",
    description:
      "El concierge de ROOMIE busca, verifica y reserva tu vivienda en Montevideo antes de que llegues.",
    locale: "es_UY",
    type: "website",
  },
};

export default function Page() {
  return <ConciergePage lang="es" />;
}
