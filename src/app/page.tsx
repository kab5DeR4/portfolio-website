import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative z-0">
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      
      <div className="relative z-10 space-y-16 pb-16">
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </div>

      <footer className="relative z-10 glass-card bg-transparent border-t border-slate-800 py-8 mt-12 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Roshan Nale. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
