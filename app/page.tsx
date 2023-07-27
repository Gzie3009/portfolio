import Skills from "@/components/Skills/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact-me/Contact";
import Experience from "@/components/experience/Experience";
import Header from "@/components/header/header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import { Metadata } from "next";
import Link from "next/link";
import { ImProfile } from "react-icons/im";
import {AiOutlineDownload} from "react-icons/ai"

export const metadata: Metadata = {
  title: "Mrinmoy Saikia Portfolio Website",
  description:
    "This is the portfolio website which belongs to Mrinmoy Saikia who is a full stack developer with expertise in frontend development",
};

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-[#0DB760]/20 scrollbar-thumb-[#0DB760] selection:bg-rose-100">
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="experience" className="snap-start">
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
        <Link href="/MrinmoySaikia_Resume.pdf" target="_blank" className="absolute bottom-2 left-2 rounded-full group" >
          <button className="sticky flex items-center group-hover:border-2 rounded-lg px-2 py-1 border-green-600 z-20 group-hover:bg-white">
            <ImProfile className="w-14 h-14 group-hover:h-20 group-hover:w-20 transition-all ease-in-out duration-200 overflow-hidden text-[#0DB760] pr-5"/>
            <p className="hidden group-hover:flex items-center space-x-2 text-green-600 duration-200 transition-all ease-in-out">Download Resume <AiOutlineDownload className="h-10 w-10"/></p>
          </button>
        </Link>
      </main>
    </>
  );
}
