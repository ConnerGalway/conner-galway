import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import TheBrief from "@/components/sections/TheBrief";
import BookCTA from "@/components/sections/BookCTA";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <About />
        <Services />
        <Testimonials />
        <TheBrief />
        <BookCTA />
      </main>
      <Footer />
    </>
  );
}
