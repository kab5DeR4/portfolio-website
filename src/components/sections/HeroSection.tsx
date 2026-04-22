"use client";
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    /* 1. The outer section is w-full and handles the edge-to-edge background */
    <section className="relative min-h-screen flex items-center justify-center justify-center pt-20">

      {/* BACKGROUND TEXTURE: This stays full-width regardless of content size */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-20"></div>

        {/* Large Ambient Glows to fill the 'Massive Area' */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent-blue/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent-indigo/10 blur-[120px] rounded-full"></div>
      </div>

      {/* 2. Expanded Container: Changed from max-w-5xl to max-w-7xl */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 gap-12 lg:gap-24">

        {/* Left Side: Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-bold tracking-widest text-accent-blue shadow-sm">
            BSc IT STUDENT • FULL-STACK & MOBILE DEV
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-tight">
            Roshan <br className="hidden lg:block" />
            <span className="text-gradient">Nale.</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
            Full-Stack Developer & AppSec Enthusiast focused on building high-performance, secure digital infrastructures. Specializing in zero-knowledge web architectures.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all shadow-lg hover:shadow-white/10 active:scale-95">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-700 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-all active:scale-95">
              Contact Me
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#00FFFF] bg-[#00FFFF]/5 text-[#00FFFF] rounded-xl hover:bg-[#00FFFF]/10 transition-all font-bold whitespace-nowrap shadow-[0_0_15px_rgba(0,255,255,0.2)] active:scale-95">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Image with Floating Elements */}
        <div className="relative group shrink-0 mt-4 lg:mt-0">
          {/* Decorative Ring */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/30 to-accent-indigo/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-700 p-2 bg-slate-900 shadow-2xl">
            <div className="w-full h-full relative rounded-[1.8rem] md:rounded-[2rem] overflow-hidden bg-slate-800">
              <Image
                src="/profile.png"
                alt="Profile Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Floating 'Pro' Badge */}
          <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 p-3 rounded-2xl shadow-xl hidden md:block animate-bounce">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Focus</div>
            <div className="text-sm font-bold text-white text-gradient">Full-Stack</div>
          </div>
        </div>

      </div>
    </section>
  );
} 