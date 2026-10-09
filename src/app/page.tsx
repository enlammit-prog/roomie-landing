import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DosPuertas from "@/components/DosPuertas";
import PorQue from "@/components/PorQue";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import ComoFunciona from "@/components/ComoFunciona";
import ConciergeBanner from "@/components/ConciergeBanner";
import ParaQuienEs from "@/components/ParaQuienEs";
import Faq from "@/components/Faq";
import Hablemos from "@/components/Hablemos";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <DosPuertas />
      <PorQue />
      <Problema />
      <Solucion />
      <ConciergeBanner />
      <ComoFunciona />
      <ParaQuienEs />
      <Faq />
      <Hablemos />
      <Waitlist />
      <Footer />
    </>
  );
}
