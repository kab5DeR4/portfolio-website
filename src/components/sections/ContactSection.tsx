"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative w-full mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 relative z-10">
          Let's Build <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Something Secure.</span>
        </h2>
        
        <p className="text-white/60 max-w-xl text-lg font-light mb-10 relative z-10">
          Currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is open!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <a 
            href="mailto:rnale88@gmail.com" 
            className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <Send size={20} /> Say Hello
          </a>
          
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/kab5DeR4" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/roshan-nale-551006316/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
