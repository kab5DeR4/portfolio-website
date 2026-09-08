"use client";
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = false }: GlassCardProps) {
  return (
    <div 
      className={`glass-panel ${hoverEffect ? 'glass-panel-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
