import { StructuredData } from "@/components/StructuredData";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";

/**
 * Single-page portfolio.
 *
 * Section order puts proof before persuasion: positioning, then the metrics
 * behind it, then the narrative, skills and full timeline.
 */
export default function HomePage() {
  return (
    <main id="main">
      <StructuredData />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
