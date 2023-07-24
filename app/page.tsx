import Header from "@/components/header/header";
import Hero from "@/components/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mrinmoy Saikia Portfolio Website",
  description:
    "This is the portfolio website which belongs to Mrinmoy Saikia who is a full stack developer with expertise in frontend development",
};

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
      </main>
    </>
  );
}
