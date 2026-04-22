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
            <div className="flex flex-wrap gap-2 mt-auto mb-2">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">React</span>
              <span className="px-3 py-1 bg-accent-indigo/10 border border-accent-indigo/30 text-accent-indigo text-xs rounded-full font-mono uppercase">AppSec Context</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">Crypto-js</span>
            </div>
            <div className="flex gap-4 mt-4 border-t border-slate-800 pt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent-blue transition-colors font-mono">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent-emerald transition-colors font-mono">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                Live Demo
              </a>
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
            <div className="flex flex-wrap gap-2 mt-auto mb-2">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">Node.js</span>
              <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs rounded-full font-mono uppercase">Performance</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-full font-mono uppercase">Express</span>
            </div>
            <div className="flex gap-4 mt-4 border-t border-slate-800 pt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent-blue transition-colors font-mono">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-accent-emerald transition-colors font-mono">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
