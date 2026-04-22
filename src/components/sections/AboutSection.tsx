import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding z-10">
      <div className="glass-card hover-glass p-8 md:p-10 max-w-4xl mx-auto text-center space-y-6 border-t-2 border-t-accent-blue/50">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Passionate About <br className="md:hidden" />
          <span className="text-accent-blue">Web</span> & <span className="text-accent-indigo">Mobile Dev</span>
        </h2>
        
        <div className="space-y-6 text-base md:text-lg text-slate-400 leading-relaxed font-light">
          <p>
            I am a quick learner and a dedicated <strong className="text-slate-200 font-medium">BSc Information Technology student</strong> at Pillai College of Arts, Commerce and Science (Autonomous), Panvel (2024 — 2027), currently in my 2nd Year, 4th Semester.
          </p>
          <p>
            With practical, hands-on experience in <strong className="text-accent-blue font-medium">cross-platform mobile development</strong>, <strong className="text-accent-indigo font-medium">full-stack web applications</strong>, and <strong className="text-slate-200 font-medium">Python programming</strong>, I thrive in fast-paced technical environments.
          </p>
          <p>
            Whether I'm engineering a utility mobile application to optimize transit navigation using <strong className="text-accent-blue font-mono text-sm tracking-wider">Dart & Flutter</strong>, or architecting secure web tools with the <strong className="text-accent-indigo font-mono text-sm tracking-wider">MERN stack</strong>, I am always seeking opportunities to solve complex technical problems and build secure, efficient systems.
          </p>
        </div>
      </div>
    </section>
  );
}
