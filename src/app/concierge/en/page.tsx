import type { Metadata } from "next";
import ConciergeNav from "@/components/concierge/ConciergeNav";
import ConciergePage from "@/components/concierge/ConciergePage";

export const metadata: Metadata = {
  title: "ROOMIE Concierge — Land in Montevideo with your housing already solved",
  description:
    "ROOMIE's housing concierge finds, verifies and books your place in Montevideo before you arrive. A local team handles everything — search, video tours, contract and check-in.",
  openGraph: {
    title: "ROOMIE Concierge — Land in Montevideo with your housing already solved",
    description:
      "ROOMIE's housing concierge finds, verifies and books your place in Montevideo before you arrive. A local team handles everything — search, video tours, contract and check-in.",
    locale: "en_US",
    type: "website",
  },
};

export default function ConciergePageEN() {
  return (
    <>
      <ConciergeNav lang="en" />
      <ConciergePage lang="en" />
    </>
  );
}
