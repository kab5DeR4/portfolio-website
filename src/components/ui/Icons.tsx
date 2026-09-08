import React from "react";
import {
  Code2,
  Terminal,
  Cpu,
  Smartphone,
  Database,
  Layers,
  Globe,
  Sparkles,
  FileText,
  Zap,
  Server,
  Lock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

// clean svg icons so we don't load huge assets
export const GithubIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// helper to map skill string icon to real component
export const SkillIconRenderer = ({ iconName, size = 20, className = "" }: { iconName: string; size?: number; className?: string }) => {
  switch (iconName) {
    case "Code2":
      return <Code2 size={size} className={className} />;
    case "Terminal":
      return <Terminal size={size} className={className} />;
    case "Cpu":
      return <Cpu size={size} className={className} />;
    case "Smartphone":
      return <Smartphone size={size} className={className} />;
    case "Database":
      return <Database size={size} className={className} />;
    case "Layers":
      return <Layers size={size} className={className} />;
    case "Globe":
      return <Globe size={size} className={className} />;
    case "Sparkles":
      return <Sparkles size={size} className={className} />;
    case "FileText":
      return <FileText size={size} className={className} />;
    case "Zap":
      return <Zap size={size} className={className} />;
    case "Server":
      return <Server size={size} className={className} />;
    case "Lock":
      return <Lock size={size} className={className} />;
    case "ShieldCheck":
      return <ShieldCheck size={size} className={className} />;
    case "CheckCircle2":
      return <CheckCircle2 size={size} className={className} />;
    case "Github":
      return <GithubIcon size={size} className={className} />;
    default:
      return <Code2 size={size} className={className} />;
  }
};
