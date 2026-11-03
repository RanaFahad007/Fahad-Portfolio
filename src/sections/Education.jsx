import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 lg:py-28 bg-theme-bg border-t border-theme-border"
      aria-label="Education Timeline"
    >
      <div className="section-container">
        {/* Left-Aligned Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
            Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-theme-text mb-3">
            Education & Background
          </h2>
          <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
            Academic degrees and board distinctions in computer science and natural sciences.
          </p>
        </div>

        {/* Clean Timeline (Alternating desktop, stacked mobile) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central spine line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-theme-border -translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-theme-accent bg-theme-surface z-10 shadow-subtle" />

                  {/* Date badge on opposite side on desktop */}
                  <div
                    className={`hidden md:flex md:w-1/2 px-8 pt-4 items-center ${
                      isEven ? 'justify-end text-right' : 'justify-start text-left'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-theme-dim">
                      <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Milestone Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-card border border-theme-border bg-theme-surface shadow-subtle hover:border-theme-muted transition-colors">
                      {/* Mobile Date Badge */}
                      <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-theme-dim mb-2">
                        <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                        {edu.period}
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-theme-accent">
                          {edu.status}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-theme-text mb-1 leading-snug">
                        {edu.degree}
                      </h3>

                      <div className="text-xs sm:text-sm font-semibold text-theme-muted mb-3">
                        {edu.institution}
                      </div>

                      <p className="text-xs text-theme-muted leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-theme-border">
                        {edu.achievements.map((ach, i) => (
                          <div key={i} className="text-xs text-theme-dim flex items-start gap-2">
                            <span className="text-theme-accent mt-0.5">•</span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
