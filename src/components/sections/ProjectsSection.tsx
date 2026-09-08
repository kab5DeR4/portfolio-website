"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, Map } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Secure Vault",
      description: "An advanced encrypted data manager designed with a zero-knowledge architecture. Implemented rigid access controls, end-to-end encryption pipelines, and comprehensive threat modeling.",
      tech: ["React", "AppSec Context", "Crypto-js"],
      icon: <Lock size={48} className="text-purple-400" />,
      githubUrl: "https://github.com/kab5DeR4/Secure_Vault",
      status: "AES-256 VALIDATED"
    },
    {
      title: "Mumbai Route Finder",
      description: "A high-performance urban navigation tool leveraging optimized routing algorithms. Focused on backend integration efficiency to rapidly compute optimal paths across transit networks.",
      tech: ["Node.js", "Express", "Performance API"],
      icon: <Map size={48} className="text-blue-400" />,
      githubUrl: "https://github.com/kab5DeR4/Mumbai-",
      status: "GEO-OPTIMIZED"
    }
  ];

  return (
    <section id="projects" className="section-padding relative w-full">
      <div className="flex flex-col mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects.</span>
        </h2>
        <p className="text-white/60 max-w-2xl text-lg font-light">
          Showcasing engineering that emphasizes security, performance, and robust architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bento-card p-8 md:p-10 flex flex-col h-full group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase border border-white/10 px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-white/60 font-light leading-relaxed mb-8 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono bg-white/5 text-white/70 px-3 py-1.5 rounded-md border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-bold hover:text-blue-400 transition-colors"
              >
                <GithubIcon size={18} /> Source Code
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors cursor-not-allowed"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
