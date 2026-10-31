'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiencesData, educationData, TimelineItem } from '@/data/experience';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experiences' | 'education'>('experiences');

  const currentData = activeTab === 'experiences' ? experiencesData : educationData;

  return (
    <section id="timeline" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block"
          >
            Parcours Chronologique
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Expériences & <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Formation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base"
          >
            De la recherche en Computer Vision à la Géo-Intelligence en entreprise, en passant par le Master Big Data et Erasmus+.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('experiences')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'experiences'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Expériences ({experiencesData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formation ({educationData.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Un seul enfant par onglet : "wait" fait sortir la liste entière avant d'afficher l'autre */}
            <motion.div
              key={activeTab}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
            {currentData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node Icon on Timeline Line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all">
                  {item.type === 'experience' ? (
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4">
                  
                  {/* Top Bar (Period & Badges) */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    {item.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" /> {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <div className="flex items-start gap-4">
                    {item.logo && (
                      <div className="w-12 h-12 rounded-xl bg-white p-1.5 shrink-0 flex items-center justify-center border border-slate-700">
                        <img src={item.logo} alt={item.organization} className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                    <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {item.roleOrDegree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium mt-1">
                      <span className="text-purple-400 font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" /> {item.location}
                      </span>
                    </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Achievements */}
                  {item.achievements.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Réalisations Clés :
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  )}

                  {/* Technologies / Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {item.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
