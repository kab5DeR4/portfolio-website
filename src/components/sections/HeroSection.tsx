import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center section-padding pt-32">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-12">
        
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-bold tracking-widest text-accent-blue mb-2">
            BSc IT STUDENT • FULL-STACK & MOBILE DEV
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
            Roshan <br className="hidden md:block"/>
            <span className="text-gradient">Nale.</span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
            Full-Stack Developer & AppSec Enthusiast focused on building high-performance, secure digital infrastructures. Specializing in zero-knowledge web architectures and cross-platform mobile optimization using Flutter.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start flex-wrap">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors duration-300"
            >
              Explore Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#00FFFF] bg-[#00FFFF]/10 rounded-lg text-[#00FFFF] hover:bg-[#00FFFF]/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300 font-bold whitespace-nowrap"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-indigo/20 rounded-full blur-2xl opacity-60"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-slate-700 p-1 bg-slate-800">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image 
                src="/profile.png" 
                alt="Profile Portrait" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
