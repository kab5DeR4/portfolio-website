import React from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Core",
      icon: "⚡",
      color: "text-neon-cyan",
      borderColor: "border-[#00FFFF]/50",
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
      borderColor: "border-pink-500/50",
      skills: ["Flutter", "MERN Stack", "Next.js", "Tailwind CSS"]
    }
  ];

  return (
    <section id="skills" className="relative w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Side: Big Title */}
            <div className="lg:w-1/3 space-y-4 text-left shrink-0">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Technical <br />
                <span className="text-[#00FFFF]">Arsenal.</span>
              </h2>
              <div className="w-20 h-1 bg-[#00FFFF] rounded-full mt-6"></div>
              <p className="text-slate-300 mt-6 font-light leading-relaxed pr-4">
                A curated stack designed to deliver blazing fast, highly optimized web experiences engineered with uncompromising security standards.
              </p>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className={`bg-slate-900/40 hover:bg-slate-800/40 transition-all p-8 rounded-2xl border-t-2 ${category.borderColor}`}>
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
                        className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-colors cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
