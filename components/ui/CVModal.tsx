'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Eye, Mail, Phone, MapPin } from 'lucide-react';
import { bioData } from '@/data/bio';
import { skillCategories } from '@/data/skills';
import { experiencesData, educationData } from '@/data/experience';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Curriculum Vitae</h3>
                  <p className="text-xs text-cyan-400 font-medium">{bioData.name} • {bioData.shortTitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Profile summary */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-md">
                      <img src={bioData.avatar} alt={bioData.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-400">{bioData.name}</h4>
                      <p className="text-sm text-slate-300 font-medium">{bioData.title}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {bioData.currentCompany}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {bioData.email}</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {bioData.phone}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {bioData.location}</span>
                </div>
              </div>

              {/* Skills Highlights */}
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Domaines d'Expertise</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="p-3 rounded-lg bg-slate-800/40 border border-slate-800">
                      <div className="font-semibold text-cyan-400 mb-1">{cat.title}</div>
                      <p className="text-xs text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Summary */}
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Expériences</h5>
                <div className="space-y-3">
                  {experiencesData.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-cyan-500 pl-4 py-1">
                      <div className="font-semibold text-slate-200">{exp.roleOrDegree} — {exp.organization}</div>
                      <div className="text-xs text-cyan-400">{exp.period}</div>
                      <p className="text-xs text-slate-400 mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Formation</h5>
                <div className="space-y-2 text-xs text-slate-300">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="flex justify-between gap-4 font-medium">
                      <span>{edu.roleOrDegree} — {edu.organization}</span>
                      <span className="text-slate-400 shrink-0">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end px-6 py-4 border-t border-slate-800 bg-slate-950/80 gap-3 flex-wrap">
              <a
                href={bioData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-300 hover:bg-slate-800 flex items-center gap-2 transition-colors"
              >
                <Eye className="w-4 h-4" /> Ouvrir le PDF
              </a>
              <a
                href={bioData.cvUrl}
                download="CV_Said_KROUK_Data_Scientist.pdf"
                className="px-5 py-2 text-xs rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" /> Télécharger (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
