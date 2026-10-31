'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Bot, Eye, Database, Server, Cpu, BarChart3, Globe, Cloud, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background cyber lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block"
          >
            Compétences & Stack Technique
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Matrice des <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Savoir-Faire</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Une expertise globale couvrant le SIG et la Géo-IA, l'ingénierie de données, le Cloud, le Machine Learning et l'IA générative.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Toutes les compétences
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{iconMap[category.iconName]}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-slate-100 bg-gradient-to-br ${category.gradient} shadow-md`}>
                      {iconMap[category.iconName]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-base">{category.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-200 flex items-center gap-1.5">
                          {skill.featured && <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                          <span className="truncate">{skill.name}</span>
                        </span>
                        <span className="font-mono text-cyan-400 font-semibold text-[11px] shrink-0 ml-2">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800/80 relative">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 shadow-[0_0_8px_rgba(0,240,255,0.4)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag pill */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${category.badgeColor}`}>
                  {category.skills.length} Technologies clés
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Maîtrisé
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
