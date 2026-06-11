import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import TheBrief from "@/components/sections/TheBrief";
import BookingCTA from "@/components/sections/BookingCTA";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Testimonials />
        <TheBrief />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
