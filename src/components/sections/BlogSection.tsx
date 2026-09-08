"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Calendar, ArrowRight, X } from "lucide-react";
import { technicalArticles } from "@/data/portfolioData";

// blog and writing section styled with jose ocando clean editorial layout
export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<(typeof technicalArticles)[0] | null>(null);

  return (
    <section id="writing" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto w-full">
      
      {/* signature divider */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Writing
        </span>
        <div className="h-px bg-[#e4e4dd] w-full" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#7c8279] flex-shrink-0">
          Engineering Insights
        </span>
      </div>

      <div className="flex flex-col mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#121512] mb-3">
          Articles & retrospectives.
        </h2>
        <p className="text-[#4f564d] text-base font-light max-w-2xl leading-relaxed">
          Deep dives into software architecture, continuous compliance verification, and 60 FPS frontend performance.
        </p>
      </div>

      {/* article cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technicalArticles.map((article, idx) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
            onClick={() => setActiveArticle(article)}
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#7c8279] mb-4">
                <span className="label-tag text-[10px]">{article.category}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-[#121512] mb-3 group-hover:text-[#4f564d] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4f564d] leading-relaxed mb-6 font-light">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {article.tags.map((tag, i) => (
                  <span key={i} className="label-tag text-[10px]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#e4e4dd] flex items-center justify-between text-xs font-mono text-[#7c8279]">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {article.date}
              </span>
              <span className="text-[#121512] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                <span>Read Article</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* article reading modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#fbfaf5] border border-[#e4e4dd] rounded-3xl p-6 sm:p-10 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#f0efe8] hover:bg-[#e6e5de] text-[#121512] transition-colors"
                aria-label="Close article modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#7c8279] mb-3">
                <span className="label-tag text-[10px]">{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#121512] tracking-tight mb-6">
                {activeArticle.title}
              </h2>

              <div className="prose max-w-none text-[#3d403c] text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-[#e4e4dd] pt-6 font-light">
                {activeArticle.content}
              </div>

              <div className="mt-8 pt-6 border-t border-[#e4e4dd] flex items-center justify-between">
                <span className="text-xs font-mono text-[#7c8279]">Author: Roshan Nale</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-full bg-[#121512] text-[#fbfaf5] font-medium text-xs hover:bg-[#252a24] transition-colors shadow-sm"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
