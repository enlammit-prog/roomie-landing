import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Nosotros from "@/components/Nosotros";
import Solucion from "@/components/Solucion";
import DosPuertas from "@/components/DosPuertas";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problema />
      <Nosotros />
      <Solucion />
      <DosPuertas />
      <Faq />
      <Waitlist />
      <Footer />
    </>
  );
}
