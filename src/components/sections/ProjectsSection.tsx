import React from 'react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-tight">
        Technical <span className="text-accent-indigo">Innovations</span>
      </h2>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        
        {/* Project 1: Secure Vault */}
        <div className="group glass-card hover-glass flex flex-col md:flex-row overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo/5 to-transparent z-0 pointer-events-none"></div>
          
          <div className="w-full md:w-2/5 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/40 z-10">
            <div className="text-center font-mono">
              <div className="text-accent-blue font-bold mb-2 tracking-widest text-xs">AES-256 VALIDATED</div>
              <div className="text-white text-5xl md:text-6xl mb-4 transition-transform duration-500">🔐</div>
              <div className="bg-accent-blue/10 text-accent-blue px-3 py-1 rounded text-xs border border-accent-blue/30">AUDIT::PASS</div>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Secure Vault</h3>
            <p className="text-slate-400 mb-6 font-light leading-relaxed">
              An advanced encrypted data manager designed with a zero-knowledge architecture. Implemented rigid access controls, end-to-end encryption pipelines, and comprehensive threat modeling to protect sensitive user credentials against common web vulnerabilities.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">React</span>
              <span className="px-3 py-1 bg-accent-indigo/10 border border-accent-indigo/30 text-accent-indigo text-xs rounded-full font-mono uppercase">AppSec Context</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">Crypto-js</span>
            </div>
          </div>
        </div>

        {/* Project 2: Route Finder */}
        <div className="group glass-card hover-glass flex flex-col md:flex-row-reverse overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-l from-accent-blue/5 to-transparent z-0 pointer-events-none"></div>
          
          <div className="w-full md:w-2/5 p-8 flex items-center justify-center border-b md:border-b-0 md:border-l border-slate-800 bg-slate-900/40 z-10">
            <div className="text-center font-mono">
              <div className="text-accent-emerald font-bold mb-2 tracking-widest text-xs">GEO-OPTIMIZED</div>
              <div className="text-white text-5xl md:text-6xl mb-4 transition-transform duration-500">🗺️</div>
              <div className="text-slate-500 text-xs">LAT_LON_SYNC</div>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Mumbai Route Finder</h3>
            <p className="text-slate-400 mb-6 font-light leading-relaxed">
              A high-performance urban navigation tool leveraging optimized routing algorithms. Focused on backend integration efficiency to rapidly compute optimal paths across Mumbai's complex local transit networks, drastically reducing API payload sizes and load times.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">Node.js</span>
              <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs rounded-full font-mono uppercase">Performance</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">Express</span>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
