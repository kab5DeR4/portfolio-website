"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Star,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Clock,
  Lock,
  Sparkles,
  Layers
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData, ProjectCaseStudy } from "@/data/portfolioData";

// mockup frame styled with jose ocando clean editorial aesthetic
function EditorialMockup({ project }: { project: ProjectCaseStudy }) {
  if (project.slug === "grc-engine") {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#121512] text-[#fbfaf5] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-[#232722]">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
            <ShieldCheck size={13} />
            CONTINUOUS GRC
          </span>
          <span className="text-[#9b9e97] text-[11px]">ISO 27001 · SOC 2</span>
        </div>

        <div className="my-auto py-4">
          <div className="text-xs font-mono text-[#9b9e97] mb-1.5">Zero-Knowledge Evidence Engine</div>
          <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white mb-3">
            SHA-256 Codebase Verification Pipeline
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded bg-white/[0.04] border border-white/5">
              <div className="text-emerald-400 font-bold">100%</div>
              <div className="text-[10px] text-[#9b9e97]">Deterministic</div>
            </div>
            <div className="p-2 rounded bg-white/[0.04] border border-white/5">
              <div className="text-white font-bold">&lt; 250ms</div>
              <div className="text-[10px] text-[#9b9e97]">Check Latency</div>
            </div>
            <div className="p-2 rounded bg-white/[0.04] border border-white/5">
              <div className="text-emerald-400 font-bold">98.4%</div>
              <div className="text-[10px] text-[#9b9e97]">Posture Score</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#9b9e97] pt-2 border-t border-white/10">
          <span>FastAPI + React 19</span>
          <span>Zero Server Storage</span>
        </div>
      </div>
    );
  }

  if (project.slug === "bhumi-finance") {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#1a231d] text-[#fbfaf5] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-[#2b3a30]">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="flex items-center gap-1.5 text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-800/40">
            <Smartphone size={13} />
            OFFLINE-FIRST SUITE
          </span>
          <span className="text-emerald-300 text-[11px]">Flutter + SQLite</span>
        </div>

        <div className="my-auto py-4">
          <div className="text-xs font-mono text-teal-300/80 mb-1.5">Informal Street Economy</div>
          <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white mb-3">
            Daily Micro-Loan Field Collection
          </div>
          <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs font-mono space-y-1">
            <div className="flex justify-between text-white/70">
              <span>Street Vendor Ledger:</span>
              <span className="text-emerald-400 font-bold">₹0 Discrepancy</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Sync Architecture:</span>
              <span className="text-white">Atomic Mobile Queue</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-teal-300/60 pt-2 border-t border-white/10">
          <span>Android & Desktop</span>
          <span>Zero Latency Commit</span>
        </div>
      </div>
    );
  }

  if (project.slug === "every-second-counts") {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#0c0d0c] text-[#fbfaf5] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-[#1f231f]">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="flex items-center gap-1.5 text-neutral-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
            <Clock size={13} />
            60 FPS TELEMETRY
          </span>
          <span className="text-neutral-400 text-[11px]">Swiss Typography</span>
        </div>

        <div className="my-auto py-4">
          <div className="text-xs font-mono text-neutral-400 mb-1.5">Tropical Year Constant: 365.242199</div>
          <div className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white mb-2">
            21.<span className="text-neutral-300">84920184</span>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            52-Week Life Tapestry Matrix · Zero Layout Shifts
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/10">
          <span>Vanilla JavaScript</span>
          <span>WebExtensions Manifest v3</span>
        </div>
      </div>
    );
  }

  // fallback generic
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#161a16] text-[#fbfaf5] p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-[#252c25]">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="label-tag bg-white/10 text-white border-white/10">{project.category}</span>
        <span className="text-xs font-mono text-white/50">{project.duration}</span>
      </div>

      <div className="my-auto py-4">
        <div className="text-xs font-mono text-white/60 mb-1.5">System Architecture</div>
        <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
          {project.title}
        </div>
        <div className="text-xs text-white/70 font-light">{project.tagline}</div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/10">
        <span>Production Code</span>
        <span>Open Source</span>
      </div>
    </div>
  );
}

// projects section following jose ocando's alternating feature blocks & curated list
export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = ["All", "Featured", "Security & GRC", "Mobile & Systems", "Full-Stack Web"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Featured") return project.featured;
    return project.category === filter;
  });

  // top 3 featured systems for the signature alternating blocks
  const flagshipProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      
      {/* signature jose ocando divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Featured Work
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Curated Systems
        </span>
      </div>

      {/* alternating feature blocks */}
      <div className="space-y-16 sm:space-y-24 mb-24">
        {flagshipProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* project content */}
              <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="label-tag">{project.category}</span>
                    {project.stars !== undefined && project.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Star size={11} className="fill-amber-600" />
                        {project.stars} Star
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] mb-4">
                    {project.title}
                  </h3>

                  {/* quote from the case study */}
                  <div className="mb-6 pl-4 border-l-2 border-[#121512]">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#7c8279] mb-1">
                      From the case study
                    </div>
                    <p className="text-sm sm:text-base text-[#4f564d] italic leading-relaxed">
                      "{project.outcome}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4f564d] leading-relaxed mb-6 font-light">
                    {project.summary}
                  </p>

                  {/* tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((t, idx) => (
                      <span key={idx} className="label-tag text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* button group */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e4e4dd]">
                  <Link
                    href={`/case-study/${project.slug}`}
                    className="px-5 py-2.5 rounded-full bg-[#121512] text-[#fbfaf5] text-xs font-medium hover:bg-[#252a24] transition-all flex items-center gap-2 group shadow-sm"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#ffffff] hover:bg-[#f6f5ef] border border-[#e4e4dd] text-xs font-mono text-[#121512] flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon size={14} /> Source Code
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-full bg-[#f0efe8] hover:bg-[#e6e5de] border border-[#e2e1d9] text-xs font-mono text-[#121512] flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* project mockup frame */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="editorial-frame rounded-2xl overflow-hidden">
                  <EditorialMockup project={project} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* second divider: full index */}
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          All Work <sup>({projectsData.length})</sup>
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Categorical Index
        </span>
      </div>

      {/* category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
              filter === opt
                ? "bg-[#121512] text-[#fbfaf5] font-semibold shadow-xs"
                : "bg-[#ffffff] hover:bg-[#f6f5ef] text-[#4f564d] border border-[#e4e4dd]"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* secondary project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="label-tag">{project.category}</span>
                <span className="text-[11px] font-mono text-[#7c8279]">{project.duration}</span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-[#121512] mb-2 group-hover:text-[#4f564d] transition-colors">
                {project.title}
              </h4>

              <p className="text-xs text-[#7c8279] font-mono mb-3">
                {project.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#4f564d] leading-relaxed mb-6 font-light">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="label-tag text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#e4e4dd] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-[#4f564d] hover:text-[#121512] flex items-center gap-1 transition-colors"
                >
                  <GithubIcon size={14} /> Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#4f564d] hover:text-[#121512] flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={12} /> Live
                  </a>
                )}
              </div>

              <Link
                href={`/case-study/${project.slug}`}
                className="text-xs font-semibold text-[#121512] flex items-center gap-1 hover:translate-x-0.5 transition-transform"
              >
                <span>Read Case Study</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
