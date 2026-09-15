"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Star,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { openSourceContributions, personalInfo } from "@/data/portfolioData";

// open source section — real github activity, not simulated
export default function OpenSourceSection() {

  return (
    <section id="open-source" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      
      {/* signature divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#525850] flex-shrink-0">
          Open Source
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#525850] flex-shrink-0">
          Public Code
        </span>
      </div>

      <div className="flex flex-col mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] mb-3">
          Public repositories & community commons.
        </h2>
        <p className="text-[#4f564d] text-base font-light max-w-2xl leading-relaxed">
          Open-source compliance rules, high-frequency astronomical timers, and offline-first mobile tools.
        </p>
      </div>

      {/* github profile & telemetry card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="editorial-card p-6 sm:p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#e4e4dd]">
          <div className="flex items-center gap-4">
            <div className="icon-box w-12 h-12 rounded-xl text-[#121512]">
              <GithubIcon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif font-bold text-[#121512]">github.com/{personalInfo.handle}</h3>
                <span className="label-tag text-[10px]">Active Contributor</span>
              </div>
              <p className="text-xs text-[#525850] font-mono mt-0.5">
                8 Public Repositories · Continuous Commit History
              </p>
            </div>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="View Roshan Nale's GitHub Profile"
            className="px-5 py-2.5 rounded-full bg-[#121512] text-[#fbfaf5] text-xs font-medium hover:bg-[#252a24] transition-all flex items-center gap-2 shadow-sm"
          >
            <GithubIcon size={14} />
            <span>View GitHub Profile</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* real github activity */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono text-[#4f564d] flex items-center gap-2">
              <Sparkles size={13} className="text-[#4f564d]" />
              <span>GitHub Activity</span>
            </div>
            <span className="text-[10px] font-mono text-[#525850]">Real contribution history</span>
          </div>

          {/* github contribution graph via github-readme-stats */}
          <div className="rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] p-4 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/2d4a34/${personalInfo.handle}`}
              alt={`${personalInfo.name}'s GitHub contribution chart`}
              width={800}
              height={120}
              className="w-full h-auto min-w-[500px]"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#525850] mt-3">
            <span>Actual commit history from GitHub</span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#121512] transition-colors underline underline-offset-2"
            >
              github.com/{personalInfo.handle}
            </a>
          </div>
        </div>
      </motion.div>

      {/* notable contributions grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {openSourceContributions.map((contrib, i) => (
          <motion.div
            key={contrib.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="label-tag">{contrib.repo}</span>
                {contrib.stars !== undefined && (
                  <span className="flex items-center gap-1 text-xs font-mono text-amber-800">
                    <Star size={11} className="fill-amber-600" />
                    {contrib.stars}
                  </span>
                )}
              </div>

              <h4 className="text-lg font-serif font-bold text-[#121512] mb-2">{contrib.title}</h4>
              <p className="text-xs text-[#4f564d] leading-relaxed mb-4 font-light">
                {contrib.description}
              </p>

              <div className="p-3 rounded-lg bg-[#f6f5ef] border border-[#e4e4dd] text-[11px] text-[#4f564d] mb-4">
                <strong className="text-[#121512] font-semibold block mb-0.5">Impact:</strong>
                {contrib.impact}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {contrib.tech.map((t, idx) => (
                  <span key={idx} className="label-tag text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={contrib.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Inspect repository ${contrib.title}`}
              className="pt-3 border-t border-[#e4e4dd] text-xs font-mono text-[#4f564d] hover:text-[#121512] flex items-center justify-between transition-colors"
            >
              <span>Inspect Repository</span>
              <ExternalLink size={13} />
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
