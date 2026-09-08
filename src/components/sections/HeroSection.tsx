"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, LayoutTemplate } from 'lucide-react';

// Hero Section getting a major facelift
export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* sick ambient glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-white/80 uppercase">Open to work</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-glow"
        >
          Roshan Nale <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Secure Systems.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl font-light mb-10"
        >
          Software Developer & BSc IT Student. I engineer high-performance, scalable web architectures with a rigorous focus on application security.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-transform hover:scale-105 active:scale-95">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-transform hover:scale-105 active:scale-95">
            Contact Me
          </a>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-2"><LayoutTemplate size={24}/> <span className="font-mono text-sm">Full-Stack</span></div>
          <div className="flex items-center gap-2"><Shield size={24}/> <span className="font-mono text-sm">AppSec</span></div>
          <div className="flex items-center gap-2"><Database size={24}/> <span className="font-mono text-sm">Architecture</span></div>
        </motion.div>

      </div>
    </section>
  );
}