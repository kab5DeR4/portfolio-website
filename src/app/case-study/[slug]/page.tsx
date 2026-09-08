import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Layers,
  CheckCircle2,
  FileCode2,
  Sparkles,
  Star,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found | Roshan Nale" };
  }
  return {
    title: `${project.title} Case Study | Roshan Nale`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.summary,
    },
  };
}

// dynamic case study page styled with jose ocando clean editorial aesthetic
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#fbfaf5] text-[#121512]">
      <Navbar />

      <main className="relative z-10 w-full flex flex-col pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          
          {/* back to projects navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7c8279] hover:text-[#121512] mb-10 transition-colors group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          {/* case study hero */}
          <div className="mb-14">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="label-tag">{project.category}</span>
              <span className="text-xs font-mono text-[#7c8279]">{project.duration}</span>
              {project.stars !== undefined && project.stars > 0 && (
                <span className="flex items-center gap-1 text-xs font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  <Star size={11} className="fill-amber-600" />
                  {project.stars} Star{project.stars > 1 ? "s" : ""}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight mb-4 text-[#121512] leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#4f564d] font-light leading-relaxed max-w-2xl mb-8">
              {project.tagline}
            </p>

            {/* quick meta grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#ffffff] border border-[#e4e4dd] mb-8 shadow-xs">
              <div>
                <span className="text-[10px] font-mono text-[#7c8279] uppercase block mb-1">Role</span>
                <span className="text-xs sm:text-sm font-semibold text-[#121512]">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#7c8279] uppercase block mb-1">Context</span>
                <span className="text-xs sm:text-sm font-semibold text-[#121512]">{project.clientContext}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#7c8279] uppercase block mb-1">Timeline</span>
                <span className="text-xs sm:text-sm font-semibold text-[#121512]">{project.duration}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#7c8279] uppercase block mb-1">Repository</span>
                <span className="text-xs sm:text-sm font-semibold text-[#2d4a34]">Public Open Source</span>
              </div>
            </div>

            {/* action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#121512] text-[#fbfaf5] font-medium text-xs flex items-center gap-2 hover:bg-[#252a24] transition-all shadow-sm"
              >
                <GithubIcon size={14} />
                <span>View GitHub Repository</span>
                <ExternalLink size={12} />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#ffffff] hover:bg-[#f6f5ef] border border-[#e4e4dd] text-[#121512] font-medium text-xs flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink size={13} />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* executive summary & problem */}
          <section className="editorial-card p-6 sm:p-9 mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#121512] mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-[#4f564d]" />
              Executive Summary & Problem Statement
            </h2>
            <p className="text-[#4f564d] text-sm sm:text-base leading-relaxed mb-6 font-light">
              {project.problem.overview}
            </p>

            <div className="space-y-3">
              <h3 className="text-xs font-mono text-[#7c8279] uppercase tracking-wider">
                Key Operational Bottlenecks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.problem.painPoints.map((pain, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] flex items-start gap-2.5 text-xs sm:text-sm text-[#4f564d]"
                  >
                    <span className="w-5 h-5 rounded-md bg-[#121512] text-[#fbfaf5] flex items-center justify-center text-[10px] font-mono flex-shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="font-light">{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* technical constraints & tradeoffs */}
          <section className="editorial-card p-6 sm:p-9 mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#121512] mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f564d]" />
              Engineering Constraints & Tradeoffs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.constraints.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#7c8279] block mb-1">
                      Constraint 0{i + 1}
                    </span>
                    <h3 className="text-sm font-bold text-[#121512] mb-2">{c.title}</h3>
                    <p className="text-xs text-[#4f564d] leading-relaxed font-light">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* architecture & data flow */}
          <section className="editorial-card p-6 sm:p-9 mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#121512] mb-2 flex items-center gap-2">
              <Layers size={20} className="text-[#4f564d]" />
              Architecture & Data Flow
            </h2>
            <p className="text-xs sm:text-sm text-[#4f564d] mb-6 leading-relaxed font-light">
              {project.architecture.description}
            </p>

            {/* ASCII architecture diagram */}
            <div className="rounded-xl bg-[#121512] text-[#fbfaf5] p-5 overflow-x-auto mb-6 border border-[#232722]">
              <pre className="font-mono text-[11px] sm:text-xs text-emerald-400 leading-normal">
                {project.architecture.diagramAscii}
              </pre>
            </div>

            {/* sequential data pipeline steps */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono text-[#7c8279] uppercase tracking-wider mb-2">
                Sequential Pipeline Execution
              </h3>
              {project.architecture.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] text-xs text-[#4f564d]"
                >
                  <span className="w-5 h-5 rounded-md bg-[#121512] text-[#fbfaf5] flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-light">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* code implementation detail */}
          <section className="editorial-card p-6 sm:p-9 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-serif font-bold text-[#121512] flex items-center gap-2">
                <FileCode2 size={20} className="text-[#4f564d]" />
                Key Implementation Detail
              </h2>
              <span className="text-xs font-mono text-[#7c8279]">
                {project.codeSnippet.filename}
              </span>
            </div>

            <div className="rounded-xl bg-[#121512] border border-[#232722] overflow-hidden">
              <div className="px-4 py-2 bg-black/40 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-[#9b9e97]">
                <span>{project.codeSnippet.language}</span>
                <span>Production Tested</span>
              </div>
              <pre className="p-5 font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </section>

          {/* UI highlights */}
          <section className="editorial-card p-6 sm:p-9 mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#121512] mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-[#4f564d]" />
              UI States & Interactive Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.uiHighlights.map((ui, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd]"
                >
                  <h3 className="text-sm font-bold text-[#121512] mb-2">{ui.title}</h3>
                  <p className="text-xs text-[#4f564d] leading-relaxed font-light">{ui.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* measurable outcomes & results */}
          <section className="editorial-card p-6 sm:p-9 mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#121512] mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#2d4a34]" />
              Measurable Outcomes & Benchmark Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#f6f5ef] border border-[#e4e4dd] text-center"
                >
                  <div className="text-3xl font-serif font-black text-[#121512] mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#4f564d] uppercase tracking-wider mb-1">
                    {res.label}
                  </div>
                  <div className="text-[11px] text-[#7c8279]">{res.detail}</div>
                </div>
              ))}
            </div>

            {/* retrospective lessons */}
            <div className="pt-6 border-t border-[#e4e4dd]">
              <h3 className="text-xs font-mono text-[#7c8279] uppercase tracking-wider mb-4">
                Engineering Lessons & Retrospective
              </h3>
              <div className="space-y-3">
                {project.lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#4f564d]"
                  >
                    <span className="text-[#121512] font-mono font-bold mt-0.5">→</span>
                    <span className="font-light">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* pagination */}
          <div className="pt-8 border-t border-[#e4e4dd] flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/case-study/${prevProject.slug}`}
                className="flex items-center gap-2 text-xs font-mono text-[#4f564d] hover:text-[#121512] transition-colors"
              >
                <ArrowLeft size={13} />
                <span>Previous: {prevProject.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/case-study/${nextProject.slug}`}
                className="flex items-center gap-2 text-xs font-mono text-[#4f564d] hover:text-[#121512] transition-colors"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight size={13} />
              </Link>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
