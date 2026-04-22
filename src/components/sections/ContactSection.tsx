"use client";
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto relative z-10">
      <div className="glass-card p-6 md:p-10 text-white relative overflow-hidden border border-slate-800 bg-slate-900/40">

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight md:text-center">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-slate-300 mb-8 leading-relaxed font-light md:text-center">
              Whether you're looking to collaborate on a dynamic web application, need an AppSec perspective, or want to discuss automated infrastructures, my inbox is open.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-8">
              {/* Email */}
              <div className="flex items-center gap-4 text-slate-300">
                <span className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-accent-blue">📧</span>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email</div>
                  <a href="mailto:rnale88@gmail.com" className="hover:text-white transition-colors font-mono">rnale88@gmail.com</a>
                </div>
              </div>

              {/* Phone - Fix applied here */}
              <div className="flex items-center gap-4 text-slate-300">
                <span className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-accent-emerald">📱</span>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Phone</div>
                  <a href="tel:+918369078325" className="hover:text-white transition-colors font-mono whitespace-nowrap">
                    +91 83690 78325
                  </a>
                </div>
              </div>

              {/* Network */}
              <div className="flex items-center gap-4 text-slate-300">
                <span className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-accent-indigo">🔗</span>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Network</div>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/roshan-nale-551006316/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">LinkedIn</a>
                    <a href="https://github.com/kab5DeR4?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">GitHub</a>
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