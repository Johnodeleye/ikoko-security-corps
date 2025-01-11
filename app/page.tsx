import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <About/>
    <Service/>
    <Contact/>
    </div>
  );
}

// SpaceMono-Bold, Jetbrains Mono, SpaceMono-Bold, Consolas, 'Courier New', monospace,