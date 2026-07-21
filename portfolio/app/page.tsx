import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Now from "@/components/Now";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Achievements />
      <Certifications />
      <Projects />
      <Now />
      <Contact />
      <Footer />
    </main>
  );
}
