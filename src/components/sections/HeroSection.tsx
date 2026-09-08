"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileDown,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Smartphone,
  Layers,
  Sparkles,
  Terminal,
  Mail,
  BookOpen
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

// hero section with asymmetric editorial layout inspired by jose ocando
export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"grc" | "telemetry">("grc");

  // typing effect logic for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* left column: editorial intro & bio */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* status pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0efe8] border border-[#e2e1d9] text-[11px] font-mono text-[#4f564d] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available for engineering roles & consulting</span>
            </motion.div>

            {/* main serif title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#121512] leading-[1.05] mb-6"
            >
              {personalInfo.name}
            </motion.h1>

            {/* animated role switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-8 flex items-center mb-6"
            >
              <span className="text-sm sm:text-base font-mono font-medium text-[#4f564d] flex items-center gap-2">
                <span className="text-[#9b9e97]">/</span>
                <span>{displayedText}</span>
                <span className="w-1.5 h-4 bg-[#121512] inline-block animate-pulse" />
              </span>
            </motion.div>

            {/* core statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#3d403c] font-light leading-relaxed mb-8 max-w-xl"
            >
              I engineer high-performance software systems at the intersection of continuous security governance, distributed web architectures, and resilient developer tools.
            </motion.p>

            {/* profile row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#e4e4dd] bg-[#f0efe8] flex-shrink-0 shadow-sm">
                <Image
                  src="/profile.png"
                  alt="Roshan Nale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-xs font-mono font-bold text-[#121512]">
                  Roshan Nale (@{personalInfo.handle})
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="label-tag text-[10px]">Full-Stack Developer</span>
                  <span className="label-tag text-[10px]">BSc IT Candidate</span>
                </div>
              </div>
            </motion.div>

            {/* action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-[#121512] text-[#fbfaf5] text-xs font-medium hover:bg-[#252a24] transition-all flex items-center gap-2 group shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="Roshan_Nale_Resume.pdf"
                className="px-6 py-3 rounded-full bg-[#ffffff] hover:bg-[#f5f4ed] border border-[#e4e4dd] text-[#121512] text-xs font-mono transition-all flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown size={14} />
                <span>Download Resume</span>
              </a>
              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-full bg-[#f0efe8] hover:bg-[#e6e5de] border border-[#e2e1d9] text-[#121512] text-xs font-mono transition-all flex items-center gap-1.5"
                title="Copy email address"
              >
                {copied ? <Check size={13} className="text-emerald-700" /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : personalInfo.email}</span>
              </button>
            </motion.div>

            {/* social icons */}
            <div className="flex items-center gap-3 text-[#4f564d]">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="GitHub"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="Twitter"
              >
                <TwitterIcon size={15} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-box hover:bg-[#121512] hover:text-[#fbfaf5] hover:border-[#121512]"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* right column: "Where you can start" list + terminal snippet */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* where you can start container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="editorial-card p-6 sm:p-7"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#7c8279] mb-5">
              Where you can start
            </div>

            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/case-study/grc-engine"
                  className="flex items-center gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-[#f6f5ef] transition-colors"
                >
                  <div className="icon-box group-hover:bg-[#121512] group-hover:text-[#fbfaf5] group-hover:border-[#121512] flex-shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-[#121512] group-hover:text-[#000b00] flex items-center justify-between">
                      <span>Read GRC Engine case study</span>
                      <ArrowRight size={13} className="text-[#9b9e97] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#7c8279] truncate">Continuous policy & compliance mapping</div>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/case-study/bhumi-finance"
                  className="flex items-center gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-[#f6f5ef] transition-colors"
                >
                  <div className="icon-box group-hover:bg-[#121512] group-hover:text-[#fbfaf5] group-hover:border-[#121512] flex-shrink-0">
                    <Smartphone size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-[#121512] group-hover:text-[#000b00] flex items-center justify-between">
                      <span>Explore Bhumi Finance</span>
                      <ArrowRight size={13} className="text-[#9b9e97] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#7c8279] truncate">Offline-first SQLite ledger for daily loans</div>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="/case-study/every-second-counts"
                  className="flex items-center gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-[#f6f5ef] transition-colors"
                >
                  <div className="icon-box group-hover:bg-[#121512] group-hover:text-[#fbfaf5] group-hover:border-[#121512] flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-[#121512] group-hover:text-[#000b00] flex items-center justify-between">
                      <span>Inspect 60 FPS mortality telemetry</span>
                      <ArrowRight size={13} className="text-[#9b9e97] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#7c8279] truncate">Astronomical tropical year calculation</div>
                  </div>
                </Link>
              </li>

              <li>
                <a
                  href="#skills"
                  className="flex items-center gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-[#f6f5ef] transition-colors"
                >
                  <div className="icon-box group-hover:bg-[#121512] group-hover:text-[#fbfaf5] group-hover:border-[#121512] flex-shrink-0">
                    <Layers size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-[#121512] group-hover:text-[#000b00] flex items-center justify-between">
                      <span>Browse technical skill repertoire</span>
                      <ArrowRight size={13} className="text-[#9b9e97] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#7c8279] truncate">Languages, frameworks, APIs, databases</div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#writing"
                  className="flex items-center gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-[#f6f5ef] transition-colors"
                >
                  <div className="icon-box group-hover:bg-[#121512] group-hover:text-[#fbfaf5] group-hover:border-[#121512] flex-shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-[#121512] group-hover:text-[#000b00] flex items-center justify-between">
                      <span>Read recent engineering essays</span>
                      <ArrowRight size={13} className="text-[#9b9e97] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[11px] text-[#7c8279] truncate">Continuous GRC & offline architectures</div>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* terminal code inspector card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="editorial-card overflow-hidden border border-[#e4e4dd]"
          >
            {/* titlebar */}
            <div className="px-4 py-2.5 bg-[#f6f5ef] border-b border-[#e4e4dd] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d5d6d0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#d5d6d0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#d5d6d0]" />
                <span className="ml-2 text-[10px] font-mono text-[#7c8279]">roshan@sys-arch</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono">
                <button
                  onClick={() => setActiveTab("grc")}
                  className={`px-2 py-0.5 rounded ${activeTab === "grc" ? "bg-[#ffffff] text-[#121512] font-semibold shadow-xs" : "text-[#7c8279]"}`}
                >
                  grc.py
                </button>
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-2 py-0.5 rounded ${activeTab === "telemetry" ? "bg-[#ffffff] text-[#121512] font-semibold shadow-xs" : "text-[#7c8279]"}`}
                >
                  time.js
                </button>
              </div>
            </div>

            {/* code preview */}
            <div className="p-4 bg-[#ffffff] font-mono text-[11px] leading-relaxed overflow-x-auto text-[#232722]">
              {activeTab === "grc" ? (
                <pre>
                  <code>
                    <span className="text-emerald-700">async def</span> <span className="text-blue-700">audit_controls</span>(evidence):{"\n"}
                    {"  "}sha = evidence.compute_sha256(){"\n"}
                    {"  "}soc2 = compliance.map_to_soc2(sha){"\n"}
                    {"  "}<span className="text-emerald-700">return</span> {"{"}<span className="text-amber-800">"status"</span>: <span className="text-emerald-800">"COMPLIANT"</span>{"}"}
                  </code>
                </pre>
              ) : (
                <pre>
                  <code>
                    <span className="text-emerald-700">const</span> TROPICAL_YEAR = <span className="text-blue-700">365.242199</span>;{"\n"}
                    <span className="text-emerald-700">function</span> <span className="text-blue-700">render60Fps</span>(delta) {"{"}{"\n"}
                    {"  "}updateTapestry(delta / TROPICAL_YEAR);{"\n"}
                    {"  "}requestAnimationFrame(render60Fps);{"\n"}
                    {"}"}
                  </code>
                </pre>
              )}
            </div>

            <div className="px-4 py-1.5 bg-[#fbfaf5] border-t border-[#e4e4dd] flex items-center justify-between text-[10px] font-mono text-[#7c8279]">
              <span>Zero-Knowledge Pipeline</span>
              <span>Next.js 16 SSG</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}