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
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
      <WhatsAppFloat />
    </>
  );
}
