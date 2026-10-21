
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Principles from "@/components/sections/principles";
import Projects from "@/components/sections/projects";
import Toolkit from "@/components/sections/toolkit";

export default function Home() {
  return (
    <>
    {/* Navbar */}
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Toolkit />
        <Experience />
        <Principles />
        <About />
        <Contact />
      </main>
    </>
  );
}
