"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

// floating nav pill that looks sick
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div 
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full pointer-events-auto transition-all duration-500",
          scrolled 
            ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] w-full max-w-3xl"
            : "bg-transparent border-transparent w-full max-w-7xl"
        )}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform">
            <Terminal size={16} strokeWidth={2.5} />
          </div>
          <span className="font-mono font-bold tracking-tight hidden sm:block">kab5DeR4</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="https://github.com/kab5DeR4" 
          target="_blank" 
          rel="noreferrer"
          className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2"
        >
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}
