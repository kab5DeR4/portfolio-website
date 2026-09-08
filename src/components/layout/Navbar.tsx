"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, FileDown, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

// floating minimal capsule navbar inspired by jose ocando
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Open Source", href: "/#open-source" },
    { name: "Writing", href: "/#writing" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-3 sm:px-6 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={`flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-full pointer-events-auto transition-all duration-300 ${
            scrolled
              ? "bg-[#fbfaf5]/90 backdrop-blur-xl border border-[#e4e4dd] shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full max-w-4xl"
              : "bg-[#fbfaf5]/70 backdrop-blur-md border border-[#e8e8e3] w-full max-w-5xl"
          }`}
        >
          {/* home icon box */}
          <a
            href="/"
            className="flex items-center gap-2 group focus:outline-none rounded-lg"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#f0efe8] border border-[#e2e1d9] text-[#121512] flex items-center justify-center font-mono text-xs font-bold transition-all group-hover:bg-[#121512] group-hover:text-[#fbfaf5]">
              <Terminal size={15} strokeWidth={2} />
            </div>
            <span className="font-mono text-xs font-semibold text-[#121512] tracking-tight hidden sm:block">
              {personalInfo.handle}
            </span>
          </a>

          {/* desktop navigation links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-[#4f564d]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#121512] transition-colors duration-150 relative py-1 animated-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* right actions */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Roshan_Nale_Resume.pdf"
              className="px-3 py-1.5 rounded-full bg-[#f0efe8] hover:bg-[#e6e5de] border border-[#e2e1d9] text-xs font-mono text-[#121512] flex items-center gap-1.5 transition-all"
            >
              <FileDown size={13} />
              Resume
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#121512] text-[#fbfaf5] text-xs font-medium hover:bg-[#252a24] transition-all flex items-center gap-1.5 shadow-sm"
            >
              <GithubIcon size={13} />
              GitHub
            </a>
          </div>

          {/* mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#121512] hover:text-[#4f564d] focus:outline-none rounded-lg"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* mobile drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-6 rounded-3xl bg-[#fbfaf5] border border-[#e4e4dd] shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col divide-y divide-[#e4e4dd]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-base font-serif font-medium text-[#121512] hover:text-[#4f564d] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#e4e4dd] flex flex-col gap-2.5">
              <a
                href={personalInfo.resumeUrl}
                download="Roshan_Nale_Resume.pdf"
                className="w-full py-2.5 rounded-xl bg-[#f0efe8] border border-[#e2e1d9] text-center text-xs font-mono text-[#121512] flex items-center justify-center gap-2"
              >
                <FileDown size={15} /> Download Resume
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#121512] text-[#fbfaf5] font-medium text-center text-xs flex items-center justify-center gap-2"
              >
                <GithubIcon size={15} /> Visit GitHub Profile <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
