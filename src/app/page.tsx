import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import ComoFunciona from "@/components/ComoFunciona";
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
      <Waitlist />
      <Footer />
    </>
  );
}
