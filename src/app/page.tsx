import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import ComoFunciona from "@/components/ComoFunciona";
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
      <Problema />
      <Solucion />
      <ComoFunciona />
      <ParaQuienEs />
      <Faq />
      <Hablemos />
      <Waitlist />
      <Footer />
    </>
  );
}
