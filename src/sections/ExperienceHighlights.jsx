import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { additionalExperience } from '../data/experience';

const iconMap = {
  "cpp-systems": Terminal,
  "sql-databases": Database,
  "dsa-optimization": Cpu
};

export default function ExperienceHighlights() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1120] border-t border-slate-800/80 overflow-hidden"
      aria-label="Hands-on Technical Experience"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest mb-3"
          >
            Applied Engineering
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-extrabold text-white"
          >
            Hands-on Systems & Algorithmic Foundations
          </motion.h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Core computer science execution across low-level programming, relational storage, and runtime optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalExperience.map((item, idx) => {
            const Icon = iconMap[item.id] || Cpu;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 backdrop-blur-md flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs text-sky-400 font-medium mb-4">
                    {item.category}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[10px] font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
