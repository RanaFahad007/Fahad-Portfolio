import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Analytics', 'Machine Learning', 'Cybersecurity', 'Artificial Intelligence'];

  const filtered = selectedCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  return (
    <section
      id="certifications"
      className="py-20 lg:py-28 bg-theme-bg border-t border-theme-border"
      aria-label="Google Certifications"
    >
      <div className="section-container">
        {/* Left-Aligned Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
              Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-theme-text mb-3">
              Google Professional Certifications
            </h2>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
              16 verified credentials covering Advanced Data Analytics, Machine Learning, and Cybersecurity foundations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-btn border border-theme-border bg-theme-surface self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-accent ${
                  selectedCategory === cat
                    ? 'bg-theme-accent text-white shadow-subtle font-bold'
                    : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Uniform Grid (3 cols desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert) => {
            const isGoogleCertified = cert.id === 'google-advanced-data-analytics';

            return (
              <div
                key={cert.id}
                className="p-5 rounded-card border border-theme-border bg-theme-surface shadow-subtle flex flex-col justify-between hover:border-theme-muted transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-btn bg-theme-accent-subtle text-theme-accent flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <span className="text-xs font-semibold text-theme-dim">
                        Google
                      </span>
                    </div>

                    {/* Google Certified Badge ONLY on Google Advanced Data Analytics */}
                    {isGoogleCertified && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold tracking-tight">
                        Google Certified
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-theme-text mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-theme-muted leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-theme-border flex items-center justify-between">
                  <span className="text-[11px] text-theme-dim">
                    {cert.category}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-theme-accent hover:underline flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
