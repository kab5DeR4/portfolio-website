"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceTimeline } from "@/data/portfolioData";

// experience section with vertical timeline layout styled in jose ocando aesthetic
export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      
      {/* signature divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Track Record
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Work History & Milestones
        </span>
      </div>

      <div className="flex flex-col mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] mb-3">
          Experience & engineering roles.
        </h2>
        <p className="text-[#4f564d] text-base font-light max-w-2xl leading-relaxed">
          A timeline of technical initiatives, community leadership, and systems architecture.
        </p>
      </div>

      {/* vertical timeline container */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#e4e4dd] ml-2 sm:ml-4 space-y-12">
        {experienceTimeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative"
          >
            {/* milestone solid node dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#121512] border-4 border-[#fbfaf5]" />

            {/* card container */}
            <div className="editorial-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#121512]">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono font-semibold text-[#4f564d] mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#7c8279] flex-shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-[#4f564d] text-xs sm:text-sm leading-relaxed mb-5 font-light">
                {item.description}
              </p>

              {/* highlights list */}
              <div className="space-y-2 mb-6">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4f564d]">
                    <CheckCircle2 size={14} className="text-[#2d4a34] mt-0.5 flex-shrink-0" />
                    <span className="font-light">{h}</span>
                  </div>
                ))}
              </div>

              {/* tech stack pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e4e4dd]">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="label-tag text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
