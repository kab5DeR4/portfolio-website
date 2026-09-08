"use client";
import React from "react";
import { Mail, Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

// footer styled in jose ocando warm editorial aesthetic
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#f6f5ef] border-t border-[#e4e4dd] pt-16 pb-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          
          {/* brand column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#121512] text-[#fbfaf5] flex items-center justify-center font-mono font-bold">
                <Terminal size={14} strokeWidth={2} />
              </div>
              <span className="font-serif text-lg font-bold text-[#121512] tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4f564d] leading-relaxed mb-6 font-light">
              {personalInfo.headline}. Final-year BSc IT Candidate building reliable, auditable software systems.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="Twitter"
              >
                <TwitterIcon size={14} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* navigation columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div>
              <div className="text-[#121512] font-bold uppercase tracking-wider mb-3">Navigation</div>
              <ul className="space-y-2 text-[#4f564d]">
                <li><a href="/#about" className="hover:text-[#121512] transition-colors">About</a></li>
                <li><a href="/#skills" className="hover:text-[#121512] transition-colors">Skills</a></li>
                <li><a href="/#projects" className="hover:text-[#121512] transition-colors">Work</a></li>
                <li><a href="/#open-source" className="hover:text-[#121512] transition-colors">Open Source</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[#121512] font-bold uppercase tracking-wider mb-3">Case Studies</div>
              <ul className="space-y-2 text-[#4f564d]">
                <li><a href="/case-study/grc-engine" className="hover:text-[#121512] transition-colors">GRC Engine</a></li>
                <li><a href="/case-study/bhumi-finance" className="hover:text-[#121512] transition-colors">Bhumi Finance</a></li>
                <li><a href="/case-study/every-second-counts" className="hover:text-[#121512] transition-colors">Every Second Counts</a></li>
                <li><a href="/case-study/secure-vault" className="hover:text-[#121512] transition-colors">Secure Vault</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[#121512] font-bold uppercase tracking-wider mb-3">Resources</div>
              <ul className="space-y-2 text-[#4f564d]">
                <li><a href={personalInfo.resumeUrl} download="Roshan_Nale_Resume.pdf" className="hover:text-[#121512] transition-colors">Resume (PDF)</a></li>
                <li><a href="/#writing" className="hover:text-[#121512] transition-colors">Articles</a></li>
                <li><a href="/#experience" className="hover:text-[#121512] transition-colors">Milestones</a></li>
                <li><a href="/#contact" className="hover:text-[#121512] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* bottom copyright & back to top */}
        <div className="border-t border-[#e4e4dd] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7c8279]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name} (@{personalInfo.handle}).
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 16 & Tailwind v4</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#121512] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
