import React from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-tight">
        Experience & <span className="text-accent-blue">Milestones</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Experience Card */}
        <div className="glass-card hover-glass p-8 rounded-2xl reveal-up active border-l-4 border-l-accent-indigo">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 border border-slate-700">
              <span className="text-2xl font-bold text-accent-indigo">N</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white tracking-wide">Volunteer</h3>
              <p className="text-accent-indigo font-medium mt-1 uppercase text-sm tracking-widest">NSS - Pillai College, Panvel</p>
              <ul className="text-slate-400 mt-4 font-light list-disc pl-5 space-y-2">
                <li>Conducted surveys to assess community needs, driving targeted initiatives.</li>
                <li>Coordinated logistics for events, ensuring seamless execution and satisfaction.</li>
                <li>Led community outreach programs, boosting engagement.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Area */}
        <div className="glass-card p-8 rounded-2xl border-t-2 border-t-accent-blue/50 reveal-up active relative overflow-hidden">
          
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent-blue text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Achievements
          </div>
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Activities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-center text-center">
              <h4 className="text-lg font-bold text-slate-200">AI & ML</h4>
              <p className="text-sm text-accent-blue font-mono mt-2">CERTIFIED</p>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-center text-center">
              <h4 className="text-lg font-bold text-slate-200">Cybersecurity Job Simulation</h4>
              <p className="text-sm text-accent-indigo font-mono mt-2">TATA</p>
            </div>
            
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-center text-center">
              <h4 className="text-lg font-bold text-slate-200">Social Activity</h4>
              <p className="text-sm text-accent-emerald font-mono mt-2">SWAMI VIVEKANANDA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
