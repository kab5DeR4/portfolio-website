"use client";
import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full">

      {/* CRITICAL: Matches the exact width and padding of the Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">

        {/* Premium Glass Container */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Left Side: Big Title */}
            <div className="lg:w-1/3 space-y-4 text-left">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Passionate About <br />
                <span className="text-[#00FFFF]">Web & Mobile.</span>
              </h2>
              <div className="w-20 h-1 bg-[#00FFFF] rounded-full mt-6"></div>
            </div>

            {/* Right Side: Text Content */}
            <div className="lg:w-2/3 space-y-6 text-slate-300 text-lg leading-relaxed font-light text-left">
              <p>
                I am a quick learner and a dedicated <strong className="text-white font-semibold">BSc Information Technology student</strong> at Pillai College of Arts, Commerce and Science (Autonomous), Panvel (2024 — 2027), currently in my 2nd Year, 4th Semester.
              </p>

              <p>
                With practical, hands-on experience in <span className="text-[#00FFFF] font-medium">cross-platform mobile development</span>, <span className="text-[#00FFFF] font-medium">full-stack web applications</span>, and <strong className="text-white font-semibold">Python programming</strong>, I thrive in fast-paced technical environments.
              </p>

              <p>
                Whether I'm engineering a utility mobile application to optimize transit navigation using <span className="text-[#00FFFF] font-medium">Dart & Flutter</span>, or architecting secure web tools with the <span className="text-[#00FFFF] font-medium">MERN stack</span>, I am always seeking opportunities to solve complex technical problems and build secure, efficient systems.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
} 