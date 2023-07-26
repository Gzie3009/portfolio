import Skills from "@/components/Skills/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact-me/Contact";
import Experience from "@/components/experience/Experience";
import Header from "@/components/header/header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mrinmoy Saikia Portfolio Website",
  description:
    "This is the portfolio website which belongs to Mrinmoy Saikia who is a full stack developer with expertise in frontend development",
};

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-[#0DB760]/20 scrollbar-thumb-[#0DB760]">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
    </>
  );
}
