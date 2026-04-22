"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Dynamically load below-the-fold sections
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative bg-slate-950 overflow-hidden font-sans">

      {/* 🌐 THE GLOBAL BACKGROUND (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-[#00FFFF]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* 📦 CONTENT WRAPPER */}
      <div className="relative z-10 w-full flex flex-col">

        <HeroSection />

        <div className="space-y-12 md:space-y-24 pb-24 pt-8 md:pt-12">
          <ScrollReveal><AboutSection /></ScrollReveal>
          <ScrollReveal><ExperienceSection /></ScrollReveal>
          <ScrollReveal><ProjectsSection /></ScrollReveal>
          <ScrollReveal><SkillsSection /></ScrollReveal>
          <ScrollReveal><ContactSection /></ScrollReveal>
        </div>

        <footer className="glass-card bg-slate-900/50 backdrop-blur-md border-t border-slate-800 py-8 mt-12 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Roshan Nale. All Rights Reserved.</p>
        </footer>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 bg-[#00FFFF] hover:bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all z-50 hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
      </button>

    </main>
  );
}