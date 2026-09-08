"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import BlogSection from "@/components/sections/BlogSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

// assemble main single page portfolio in jose ocando design philosophy
export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fbfaf5] text-[#121512] relative">
      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <OpenSourceSection />
        <BlogSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />

      {/* scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 bg-[#ffffff] border border-[#e4e4dd] rounded-full flex items-center justify-center z-50 text-[#121512] transition-all duration-300 hover:bg-[#121512] hover:text-[#fbfaf5] hover:scale-105 active:scale-95 shadow-md ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}