"use client";
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Side: Big Title */}
            <div className="lg:w-1/3 space-y-4 text-left shrink-0">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Let's <br />
                <span className="text-[#00FFFF]">Connect.</span>
              </h2>
              <div className="w-20 h-1 bg-[#00FFFF] rounded-full mt-6"></div>
              <p className="text-slate-100 mt-6 font-light leading-relaxed pr-4">
                Whether you're looking to collaborate on a dynamic web application, need an AppSec perspective, or want to discuss automated infrastructures, my inbox is open.
              </p>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-2/3 flex flex-col gap-6 justify-center">
              <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row justify-between gap-8 md:gap-4">
                
                {/* Email */}
                <div className="flex items-center gap-4 text-slate-300 flex-1">
                  <span className="w-12 h-12 shrink-0 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-[#00FFFF]">📧</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email</div>
                    <a href="mailto:rnale88@gmail.com" className="hover:text-white transition-colors font-mono">rnale88@gmail.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 text-slate-300 flex-1">
                  <span className="w-12 h-12 shrink-0 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-emerald-400">📱</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Phone</div>
                    <a href="tel:+918369078325" className="hover:text-white transition-colors font-mono whitespace-nowrap">
                      +91 83690 78325
                    </a>
                  </div>
                </div>

                {/* Network Logos */}
                <div className="flex items-center gap-4 justify-center md:justify-end flex-1">
                  <a href="https://github.com/kab5DeR4?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-[#00FFFF] hover:text-cyan-300 hover:bg-slate-700 hover:border-slate-600 transition-all shadow-[0_0_10px_rgba(0,255,255,0.2)] group" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/roshan-nale-551006316/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-[#00FFFF] hover:text-cyan-300 hover:bg-slate-700 hover:border-slate-600 transition-all shadow-[0_0_10px_rgba(0,255,255,0.2)] group" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}