"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

// about section styled with jose ocando clean editorial layout
export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      
      {/* signature divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          About
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Background & Philosophy
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* left column: big editorial narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] leading-[1.1] mb-6">
              Engineering practical software with architectural discipline.
            </h2>

            <p className="text-base sm:text-lg text-[#4f564d] font-light leading-relaxed mb-6">
              I am a final-year <strong>BSc in Information Technology</strong> candidate at{" "}
              <span className="text-[#121512] font-medium">Pillai College (Autonomous)</span> in Panvel, specializing in full-stack web applications, application security, and continuous governance automation.
            </p>

            <p className="text-sm sm:text-base text-[#4f564d] font-light leading-relaxed mb-8">
              My engineering approach prioritizes real operational bottlenecks over superficial demos. Whether architecting offline-first SQLite synchronization for daily micro-lenders in India's informal markets or replacing manual auditing questionnaires with cryptographic SHA-256 evidence verification, I build systems that are verifiable and resilient by design.
            </p>

            {/* key stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#e4e4dd]">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#ffffff] border border-[#e4e4dd] text-center">
                  <div className="text-2xl font-serif font-black text-[#121512]">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7c8279] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* right column: current focus card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 editorial-card p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7c8279]">
              Current Initiative
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Lead Developer
            </span>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#121512] mb-1">
            {personalInfo.currentFocus}
          </h3>

          <p className="text-xs sm:text-sm text-[#4f564d] font-light leading-relaxed mb-6">
            Pioneering a continuous Governance, Risk, and Compliance platform designed to replace subjective questionnaires with automated code-level verification against SOC 2 and ISO 27001.
          </p>

          <div className="p-4 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] space-y-2 text-xs font-mono text-[#4f564d] mb-6">
            <div className="flex justify-between">
              <span className="text-[#7c8279]">Runtimes:</span>
              <span className="text-[#121512]">FastAPI · Python · React 19</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7c8279]">Verification:</span>
              <span className="text-emerald-800 font-medium">SHA-256 Fingerprinting</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7c8279]">Institution:</span>
              <span className="text-[#121512]">Pillai College (Autonomous)</span>
            </div>
          </div>

          <a
            href="/case-study/grc-engine"
            className="text-xs font-semibold text-[#121512] flex items-center gap-1.5 hover:translate-x-1 transition-transform"
          >
            <span>Inspect Technical Case Study</span>
            <ArrowRight size={13} />
          </a>
        </motion.div>

      </div>

      {/* engineering mindset numbered cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="editorial-card p-6 sm:p-8"
      >
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#7c8279] mb-5 flex items-center gap-2">
          <Sparkles size={13} className="text-amber-700" />
          <span>Engineering Mindset & Observations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInfo.funFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] flex flex-col justify-between"
            >
              <span className="font-mono text-xs font-bold text-[#7c8279] mb-3">
                / 0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-[#4f564d] leading-relaxed font-light">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
