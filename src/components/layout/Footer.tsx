import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

// clean minimal footer
export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">

          <div className="max-w-xs text-center md:text-left">
            <div className="text-2xl font-bold font-sans tracking-tighter mb-4 flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                <span className="text-white text-sm font-black">R</span>
              </div>
              <span className="text-white">kab5DeR4<span className="text-blue-500">.</span></span>
            </div>
            <p className="text-sm text-white/50">
              Software Developer specializing in full-stack dev, AI/ML, and app security.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/kab5DeR4" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <GithubIcon size={20} className="text-white/70 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/roshan-nale-551006316/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <LinkedinIcon size={20} className="text-blue-400" />
            </a>
            <a href="mailto:rnale88@gmail.com" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <Mail size={20} className="text-white/70 hover:text-white" />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Roshan Nale. All rights reserved.</p>
          <p>Built with Next.js, Tailwind v4, & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
