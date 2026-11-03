import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Database,
  BarChart3,
  Smartphone,
  Server,
  Layers,
  Wrench,
  BookOpen,
  Terminal,
  Cpu,
  Brain,
  Sliders,
  TrendingUp,
  Table,
  LineChart,
  PieChart,
  Sparkles,
  Binary,
  Code,
  FileCode,
  Palette,
  Globe,
  HardDrive,
  Flame,
  ShieldCheck,
  GitBranch,
  Github,
  FileText,
  Cloud,
  Brush,
  Box,
  Lightbulb,
  Users,
  Zap,
  FileSpreadsheet,
  Globe2
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import SkillsOrbit from '../three/SkillsOrbit';

const iconMap = {
  Code2,
  Database,
  BarChart3,
  Smartphone,
  Server,
  Layers,
  Wrench,
  BookOpen,
  Terminal,
  Cpu,
  Brain,
  Sliders,
  TrendingUp,
  Table,
  LineChart,
  PieChart,
  Sparkles,
  Binary,
  Code,
  FileCode,
  Palette,
  Globe,
  HardDrive,
  Flame,
  ShieldCheck,
  GitBranch,
  Github,
  FileText,
  Cloud,
  Brush,
  Box,
  Lightbulb,
  Users,
  Zap,
  FileSpreadsheet
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('data-analytics');
  const [show3DOrbit, setShow3DOrbit] = useState(false);

  const currentCategory = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-theme-bg border-t border-theme-border"
      aria-label="Technical Skills and Proficiencies"
    >
      <div className="section-container">
        {/* Consistent Left-Aligned Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-theme-text mb-3">
              Skills & Technical Toolset
            </h2>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
              Organized competencies across analytics, software engineering, databases, and core computer science.
            </p>
          </div>

          {/* Toggle optional 3D view */}
          <button
            onClick={() => setShow3DOrbit(!show3DOrbit)}
            className="self-start sm:self-auto text-xs font-semibold text-theme-muted hover:text-theme-accent px-3 py-1.5 rounded-btn border border-theme-border bg-theme-surface hover:bg-theme-surface-hover transition-colors flex items-center gap-1.5"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{show3DOrbit ? "Hide 3D Orbit" : "View 3D Orbit"}</span>
          </button>
        </div>

        {/* Optional 3D Orbit view */}
        {show3DOrbit && (
          <div className="mb-12">
            <SkillsOrbit />
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-theme-border">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-btn text-xs font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-accent ${
                  isActive
                    ? 'bg-theme-accent text-white shadow-subtle font-bold'
                    : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid for Active Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {currentCategory.skills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={skill.name}
                  className="p-5 rounded-card border border-theme-border bg-theme-surface shadow-subtle flex flex-col justify-between hover:border-theme-muted transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-btn bg-theme-accent-subtle text-theme-accent flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <span className="text-sm font-semibold text-theme-text">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-theme-dim">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level bar */}
                  <div className="w-full h-1.5 bg-theme-border rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-theme-accent rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-theme-dim mt-2.5 flex items-center justify-between">
                    <span>Proficiency</span>
                    <span className="text-theme-muted font-medium">{skill.experience}</span>
                  </div>
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
