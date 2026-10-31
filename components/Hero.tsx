'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Car,
  Sparkles,
  Globe,
  Database,
  Brain,
  ChevronDown,
  CheckCircle
} from 'lucide-react';
import { bioData } from '@/data/bio';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background Glows & Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-[0.12] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-gradient blur-3xl pointer-events-none opacity-80 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide">
                {bioData.status}
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
                {bioData.name}
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Data Scientist & Data Engineer
              </div>
              <div className="text-sm sm:text-base font-semibold text-teal-300 tracking-wide">
                SIG & Géo-Intelligence • {bioData.currentCompany}
              </div>
            </motion.div>

            {/* Tagline Hook */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              "{bioData.tagline}"
            </motion.p>

            {/* Location & Mobility info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 border-l-2 border-cyan-500/60 pl-4 py-1"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Casablanca (Mobilité nationale)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-purple-400" />
                <span>Permis B</span>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                <span>Voir les projets</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${bioData.email}`}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-100 hover:text-cyan-400 font-semibold text-sm backdrop-blur-md flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Me contacter</span>
              </a>
            </motion.div>

            {/* Social Direct Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 pt-4 border-t border-slate-800/80"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">
                Connecter:
              </span>

              <a
                href={bioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                title="GitHub Said KROUK"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={bioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                title="LinkedIn Said KROUK"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${bioData.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                title={`Email: ${bioData.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${bioData.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                title={`Téléphone: ${bioData.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Graphic Showcase & Portrait (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md"
            >
              {/* Glowing Outer Ring */}
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-600 opacity-40 blur-xl group-hover:opacity-75 transition duration-1000 animate-pulse-glow" />

              {/* Glass Card Container */}
              <div className="relative rounded-[2rem] bg-slate-900/80 border border-slate-800/80 backdrop-blur-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden space-y-4 p-4">
                
                {/* Portrait Photo Container */}
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 group">
                  <img
                    src={bioData.avatar}
                    alt={bioData.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                      <span>Data Scientist SIG</span>
                    </span>
                    <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff]" />
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-100 text-sm">{bioData.name}</h3>
                      <p className="text-[11px] text-cyan-400 font-mono">Casablanca • Géo-Intelligence</p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Brain className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-bold block text-slate-200 text-[11px]">SIG & Géo-IA</span>
                      <span className="text-[10px] text-slate-400">ArcGIS / ArcPy</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-bold block text-slate-200 text-[11px]">Data & Cloud</span>
                      <span className="text-[10px] text-slate-400">PySpark / GCP / Azure</span>
                    </div>
                  </div>
                </div>

                {/* Stats Highlights */}
                <div className="grid grid-cols-2 gap-2">
                  {bioData.stats.slice(0, 2).map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60 text-center"
                    >
                      <div className="text-xl font-extrabold text-cyan-400 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-500 hover:text-cyan-400 transition-colors p-2"
            aria-label="Scroll vers le bas"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
