import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { additionalExperience } from '../data/experience';

const iconMap = {
  "cpp-systems": Terminal,
  "sql-databases": Database,
  "dsa-optimization": Cpu,
};

export default function About() {
  const stats = [
    { value: "3+ Years", label: "MERN & Flutter Development" },
    { value: "16", label: "Google Certifications" },
    { value: "7+", label: "Projects in Data & ML" },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-theme-bg border-t border-theme-border"
      aria-label="About Rana M Fahad"
    >
      <div className="section-container">
        {/* Consistent Left-Aligned Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-theme-text mb-3">
            Analytical Mind, Full-Stack Execution
          </h2>
          <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
            Bridging exploratory data science with robust web and mobile software engineering.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Short Bio */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-theme-muted leading-relaxed">
            <p>
              I am a Computer Science student at the <strong className="text-theme-text font-semibold">University of Gujrat</strong> (2023–2027) with <strong className="text-theme-text font-semibold">3+ years of experience in MERN Stack web development and Flutter cross-platform mobile apps</strong>.
            </p>
            <p>
              My engineering work is rooted in building responsive full-stack applications with the <strong className="text-theme-text font-semibold">MERN Stack (MongoDB, Express, React, Node.js)</strong> and polished mobile apps with <strong className="text-theme-text font-semibold">Flutter & Dart</strong>.
            </p>
            <p>
              Alongside software development, I apply rigorous data-driven problem solving: exploratory data analysis (EDA), statistical analysis, and machine learning pipelines in Python and SQL, backed by Google Professional Certificates in <strong className="text-theme-text font-semibold">Advanced Data Analytics</strong> and <strong className="text-theme-text font-semibold">Cybersecurity</strong>.
            </p>
          </div>

          {/* Right Column: Compact Stats Row */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-card border border-theme-border bg-theme-surface shadow-subtle flex flex-col justify-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-theme-accent mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-theme-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights as a Neat List */}
        <div>
          <h3 className="text-lg font-bold text-theme-text mb-6">
            Key Technical Foundations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalExperience.map((exp) => {
              const Icon = iconMap[exp.id] || Cpu;
              return (
                <div
                  key={exp.id}
                  className="p-6 rounded-card border border-theme-border bg-theme-surface shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-btn bg-theme-accent-subtle text-theme-accent flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h4 className="text-base font-bold text-theme-text mb-1.5">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-theme-muted leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-theme-border">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-theme-surface-hover border border-theme-border text-theme-muted text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
