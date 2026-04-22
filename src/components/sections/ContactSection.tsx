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
              <p className="text-slate-300 mt-6 font-light leading-relaxed pr-4">
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

                {/* Network */}
                <div className="flex items-center gap-4 text-slate-300 flex-1">
                  <span className="w-12 h-12 shrink-0 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-[#00FFFF]">🔗</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Network</div>
                    <div className="flex flex-col xl:flex-row gap-1 xl:gap-4">
                      <a href="https://www.linkedin.com/in/roshan-nale-551006316/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">LinkedIn</a>
                      <a href="https://github.com/kab5DeR4?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">GitHub</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}