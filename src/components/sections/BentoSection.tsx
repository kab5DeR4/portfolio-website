"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, ShieldCheck, Database, Layers } from 'lucide-react';
import Image from 'next/image';

export default function BentoSection() {
  return (
    <section id="about" className="section-padding relative w-full">
      
      <div className="flex flex-col mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Tech & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience.</span>
        </h2>
        <p className="text-white/60 max-w-2xl text-lg font-light">
          Bridging the gap between elegant user interfaces and impenetrable backend architectures.
        </p>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        
        {/* Profile / Intro Card (Spans 2x2 on large) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 p-8 flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <Terminal size={100} strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 overflow-hidden">
              <Image src="/profile.png" alt="Roshan Nale" width={64} height={64} className="object-cover" />
            </div>
            <h3 className="text-3xl font-bold mb-2">BSc IT Student</h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              Currently completing my degree at Pillai College (Autonomous). I approach every technical challenge with precision, focusing on modern full-stack ecosystems (Next.js, MERN) and cross-platform mobile dev (Flutter).
            </p>
          </div>
          
          <div className="flex gap-4 mt-8 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-black">2+</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">Years Coding</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-black">15+</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-bold mt-1">Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card col-span-1 md:col-span-1 lg:col-span-2 row-span-1 p-8 bg-gradient-to-br from-[#0a0a0a] to-[#121212]"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ShieldCheck className="text-blue-400" />
            NSS Technical Volunteer
          </h3>
          <p className="text-white/60 text-sm mb-4">Pillai College, Panvel</p>
          <ul className="text-white/50 text-sm space-y-2 list-disc pl-4 font-mono">
            <li>Architected survey systems</li>
            <li>Coordinated large-scale tech events</li>
            <li>Led digital community outreach</li>
          </ul>
        </motion.div>

        {/* Skills - Languages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card col-span-1 p-8 flex flex-col justify-center items-center text-center group"
        >
          <Code2 size={40} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold mb-2">Languages</h3>
          <p className="text-white/50 text-sm">Python, Dart, JS/TS, SQL</p>
        </motion.div>

        {/* Skills - Frameworks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bento-card col-span-1 p-8 flex flex-col justify-center items-center text-center group"
        >
          <Layers size={40} className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold mb-2">Frameworks</h3>
          <p className="text-white/50 text-sm">Next.js, React, Flutter, Express</p>
        </motion.div>

        {/* Certifications (Spans full width on small, 2 cols on large) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bento-card col-span-1 md:col-span-3 lg:col-span-4 row-span-1 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Certifications & Milestones</h3>
            <p className="text-white/60">Validating expertise through continuous learning.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono">AI & ML Specialist</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono">TCS Cybersecurity</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono">Swami Vivekananda Initiative</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
