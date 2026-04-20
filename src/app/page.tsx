import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      
      <footer className="py-8 text-center text-gray-500 border-t border-gray-900 mt-20">
        <p>© {new Date().getFullYear()} Pravin Kumar Mahato. All rights reserved.</p>
      </footer>
    </main>
  );
}
