"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Server, Database, ShieldCheck } from "lucide-react";
import { SkillIconRenderer } from "@/components/ui/Icons";
import { skillsData } from "@/data/portfolioData";

// skills section with categorical icon grid and no progress bars - styled in jose ocando aesthetic
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      
      {/* signature divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Repertoire
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Technical Stack
        </span>
      </div>

      <div className="flex flex-col mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] mb-3">
          Tools, runtimes & frameworks.
        </h2>
        <p className="text-[#4f564d] text-base font-light max-w-2xl leading-relaxed">
          The technologies I use to build scalable web architectures, continuous audit pipelines, and cross-platform mobile apps.
        </p>
      </div>

      {/* category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeCategory === cat
                ? "bg-[#121512] text-[#fbfaf5] font-semibold shadow-xs"
                : "bg-[#ffffff] hover:bg-[#f6f5ef] text-[#4f564d] border border-[#e4e4dd]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-serif font-bold text-[#121512] flex items-center gap-2">
                  {category.title === "Languages" && <Code2 size={16} className="text-[#4f564d]" />}
                  {category.title === "Frontend" && <Layers size={16} className="text-[#4f564d]" />}
                  {category.title === "Backend & APIs" && <Server size={16} className="text-[#4f564d]" />}
                  {category.title === "Databases & Storage" && <Database size={16} className="text-[#4f564d]" />}
                  {category.title === "DevOps, Security & Tooling" && <ShieldCheck size={16} className="text-[#4f564d]" />}
                  {category.title}
                </h3>
                <span className="text-[10px] font-mono text-[#7c8279]">
                  {category.skills.length} tools
                </span>
              </div>

              <p className="text-xs text-[#7c8279] mb-5 leading-relaxed font-light">
                {category.description}
              </p>

              {/* icon grid with labels */}
              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-[#f6f5ef] hover:bg-[#eeede6] border border-[#e4e4dd] transition-all flex items-center gap-2.5 group"
                  >
                    <div className="icon-box w-7 h-7 flex-shrink-0 group-hover:bg-[#121512] group-hover:text-[#fbfaf5]">
                      <SkillIconRenderer iconName={skill.icon} size={14} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-semibold text-[#121512] truncate">
                        {skill.name}
                      </span>
                      {skill.badge && (
                        <span className="text-[9px] font-mono text-[#7c8279] truncate">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e4e4dd] flex items-center justify-between text-[10px] font-mono text-[#7c8279]">
              <span>Production Tested</span>
              <span>● Ready</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
