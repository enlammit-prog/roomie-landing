import type { Metadata } from "next";
import ExchangeNav from "@/components/exchange/ExchangeNav";
import ExchangeHero from "@/components/exchange/ExchangeHero";
import TrustRow from "@/components/exchange/TrustRow";
import ConversionBlock from "@/components/exchange/ConversionBlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ROOMIE — Sort out your roommate before you land",
  description:
    "Book a free 15-minute video call with the ROOMIE team and get matched with a verified, compatible roommate in Montevideo before you arrive.",
  openGraph: {
    title: "ROOMIE — Sort out your roommate before you land",
    description:
      "Book a free 15-minute video call with the ROOMIE team and get matched with a verified, compatible roommate in Montevideo before you arrive.",
    locale: "en_US",
    type: "website",
  },
};

export default function ExchangePage() {
  return (
    <>
      <ExchangeNav />
      <ExchangeHero />
      <TrustRow />
      <ConversionBlock />
      <Footer />
    </>
  );
}
