import type { Metadata } from "next";
import ConciergeNav from "@/components/concierge/ConciergeNav";
import ConciergePage from "@/components/concierge/ConciergePage";

export const metadata: Metadata = {
  title: "ROOMIE Concierge — Llegá a Montevideo con tu vivienda ya resuelta",
  description:
    "Buscamos, verificamos y reservamos tu vivienda en Montevideo para que llegués con las llaves. Servicio concierge para estudiantes del interior y del exterior.",
  openGraph: {
    title: "ROOMIE Concierge — Llegá a Montevideo con tu vivienda ya resuelta",
    description:
      "Buscamos, verificamos y reservamos tu vivienda en Montevideo para que llegués con las llaves. Servicio concierge para estudiantes del interior y del exterior.",
    locale: "es_UY",
    type: "website",
  },
};

export default function ConciergePageES() {
  return (
    <>
      <ConciergeNav lang="es" />
      <ConciergePage lang="es" />
    </>
  );
}
