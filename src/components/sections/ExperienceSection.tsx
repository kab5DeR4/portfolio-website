import React from 'react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Side: Big Title */}
            <div className="lg:w-1/3 space-y-4 text-left shrink-0">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Experience & <br />
                <span className="text-[#00FFFF]">Milestones.</span>
              </h2>
              <div className="w-20 h-1 bg-[#00FFFF] rounded-full mt-6"></div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-2/3 space-y-8">
              
              {/* Experience Card */}
              <div className="bg-slate-900/40 hover:bg-slate-800/40 transition-all p-8 rounded-2xl border-l-4 border-l-[#00FFFF]">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 border border-slate-700">
                    <span className="text-2xl font-bold text-[#00FFFF]">N</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white tracking-wide">Volunteer</h3>
                    <p className="text-[#00FFFF] font-medium mt-1 uppercase text-sm tracking-widest">NSS - Pillai College, Panvel</p>
                    <ul className="text-slate-300 mt-4 font-light list-disc pl-5 space-y-2">
                      <li>Conducted surveys to assess community needs, driving targeted initiatives.</li>
                      <li>Coordinated logistics for events, ensuring seamless execution and satisfaction.</li>
                      <li>Led community outreach programs, boosting engagement.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications Area */}
              <div className="bg-slate-900/40 p-8 rounded-2xl border-t-2 border-t-[#00FFFF]/50 relative overflow-hidden">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#00FFFF] text-slate-900 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Achievements
                </div>
                <h3 className="text-2xl font-bold text-white mb-8">Certifications & Activities</h3>
                
                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                  <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-center text-center">
                    <h4 className="text-lg font-bold text-slate-200">AI & ML</h4>
                    <p className="text-sm text-[#00FFFF] font-mono mt-2">CERTIFIED</p>
                  </div>

                  <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-center text-center">
                    <h4 className="text-lg font-bold text-slate-200">Cybersecurity Job Simulation</h4>
                    <p className="text-sm text-[#00FFFF] font-mono mt-2">TATA</p>
                  </div>
                  
                  <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors flex flex-col justify-center text-center md:col-span-2">
                    <h4 className="text-lg font-bold text-slate-200">Social Activity</h4>
                    <p className="text-sm text-[#00FFFF] font-mono mt-2">SWAMI VIVEKANANDA</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
