import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Botão flutuante do WhatsApp desativado por enquanto. Para reativar:
// import WhatsAppFloat from "@/components/WhatsAppFloat"; e renderizar <WhatsAppFloat /> abaixo do <Footer />.

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Differentials />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
