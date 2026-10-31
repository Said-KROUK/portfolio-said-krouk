'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { bioData } from '@/data/bio';
import { Award, Globe, Code, ShieldCheck, MapPin, GraduationCap, Languages } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block"
          >
            À propos de moi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            La donnée <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">spatiale au service de la décision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Allier SIG, Machine Learning et pipelines de données Cloud pour transformer la donnée spatio-temporelle en décisions métier.
          </motion.p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Bio Text Column (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" /> Mon Approche & Vision
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {bioData.about}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Qu'il s'agisse de <span className="text-teal-400 font-semibold">géomarketing bancaire</span> sur ArcGIS, de <span className="text-cyan-400 font-semibold">prévision énergétique nationale</span> (Space-Time Cube, SARIMAX), de pipelines <span className="text-purple-400 font-semibold">Medallion</span> sur GCP et Azure, ou de modèles de <span className="text-emerald-400 font-semibold">Computer Vision</span> (YOLOv11, ViT), je couvre toute la chaîne, de la donnée brute à l'outil de décision publié.
              </p>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-2">
                <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-200">Géo-Intelligence</div>
                <div className="text-xs text-slate-400">ArcGIS Pro, Enterprise et Online, ArcPy et analyses spatio-temporelles.</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-200">ML & Prévision</div>
                <div className="text-xs text-slate-400">SARIMAX, XGBoost, SHAP et Computer Vision (YOLOv11, ViT).</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-bold text-sm text-slate-200">Data & MLOps</div>
                <div className="text-xs text-slate-400">GCP, Azure, Airflow, Docker, Kubernetes et MLflow.</div>
              </div>
            </div>
          </motion.div>

          {/* Details & Location Cards (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Profile Photo & Mobility card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-lg shadow-cyan-500/20">
                  <img
                    src={bioData.avatar}
                    alt={bioData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-base">{bioData.name}</h4>
                  <p className="text-xs text-cyan-400 font-semibold">{bioData.title}</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-cyan-400" /> Casablanca, Maroc
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Poste actuel</span>
                  <span className="font-semibold text-teal-400">{bioData.currentCompany}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Zone d'action</span>
                  <span className="font-semibold text-slate-200">Mobilité Nationale & International</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Permis de conduire</span>
                  <span className="font-semibold text-cyan-400">Permis B</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400">Expérience Erasmus+</span>
                  <span className="font-semibold text-purple-400">France (Aix-Marseille)</span>
                </div>
              </div>
            </div>

            {/* Quick Education & Background snippet */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl space-y-4">
              <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-400" /> Diplômes Principaux
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Master Big Data Analytics & Smart Systems</span>
                    <span className="text-slate-400">FSDM Fès (2023 – 2025)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Licence SMI (Maths & Informatique)</span>
                    <span className="text-slate-400">FSDM Fès (2020 – 2023)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl space-y-4">
              <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                <Languages className="w-4 h-4 text-cyan-400" /> Langues
              </h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {bioData.languages.map((lang) => (
                  <div key={lang.name} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <div className="font-bold text-slate-200">{lang.name}</div>
                    <div className="text-slate-400">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
