import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Extras from "@/sections/Extras";
import Contact from "@/sections/Contact";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <div className="relative antialiased">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Extras />
        <Contact />
      </main>
    </div>
  );
}