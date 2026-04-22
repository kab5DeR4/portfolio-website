"use client";
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto relative z-10">
      <div className="glass-card p-6 md:p-10 text-white relative overflow-hidden reveal-up active border border-slate-800 bg-slate-900/40">
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light">
              Whether you're looking to collaborate on a dynamic web application, need an AppSec perspective, or want to discuss automated infrastructures, my inbox is open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <span className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-accent-blue">📧</span>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</div>
                  <a href="mailto:rnale88@gmail.com" className="hover:text-white transition-colors font-mono">rnale88@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <span className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-accent-emerald">📱</span>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Phone</div>
                  <a href="tel:+918369078325" className="hover:text-white transition-colors font-mono">+91 83690 78325</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <span className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xl text-accent-indigo">🔗</span>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Network</div>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 relative">
            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-slate-800 transition-all" placeholder="Jane Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-slate-800 transition-all" placeholder="jane@company.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:bg-slate-800 transition-all resize-none" placeholder="How can we work together?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-accent-blue text-white font-bold py-4 rounded-lg transition-all hover:bg-blue-600">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
