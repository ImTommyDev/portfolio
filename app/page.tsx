import { Navbar } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Uthopiq } from "@/components/Uthopiq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 className="text-red-500 text-5xl">Test</h1>
      <main>
        <Hero />
        <About />
        <Projects />
        <Uthopiq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
