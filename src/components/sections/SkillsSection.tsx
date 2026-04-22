import React from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Core",
      icon: "⚡",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan/50",
      skills: ["Full-Stack Web Development", "Mobile Development", "Cross-Platform Optimization", "UI/UX Implementation"]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      color: "text-white",
      borderColor: "border-white/30",
      skills: ["Python", "Dart", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks & Tech",
      icon: "⚙️",
      color: "text-neon-pink",
      borderColor: "border-neon-pink/50",
      skills: ["Flutter", "MERN Stack", "Next.js", "Tailwind CSS"]
    }
  ];

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto font-light">
          A curated stack designed to deliver blazing fast, highly optimized web experiences engineered with uncompromising security standards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className={`glass-card hover-glass p-8 rounded-2xl border-t-2 ${category.borderColor}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className={`text-3xl bg-slate-800/80 border border-slate-700 w-14 h-14 flex items-center justify-center rounded-xl ${category.color}`}>
                {category.icon}
              </span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <li 
                  key={sIdx} 
                  className="px-3 py-1.5 bg-slate-800/40 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 hover:border-accent-blue/50 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
