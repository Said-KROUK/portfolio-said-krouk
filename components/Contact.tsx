'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { bioData } from '@/data/bio';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

const whatsappUrl = `https://wa.me/${bioData.phone.replace(/\D/g, '')}`;

const contactCards = [
  {
    label: 'Adresse Email',
    value: bioData.email,
    href: `mailto:${bioData.email}`,
    icon: Mail,
    color: 'cyan',
  },
  {
    label: 'Téléphone',
    value: bioData.phone,
    href: `tel:${bioData.phone.replace(/\s+/g, '')}`,
    icon: Phone,
    color: 'purple',
  },
  {
    label: 'Localisation',
    value: bioData.location,
    icon: MapPin,
    color: 'blue',
  },
];

const colorClasses: Record<string, string> = {
  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center space-y-3 mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block"
          >
            Me Contacter
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Discutons de vos <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Projets Data & Géo-IA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base"
          >
            Une question, une collaboration ou un échange autour du SIG, de la Data ou de l'IA ? Écrivez-moi directement.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {contactCards.map(({ label, value, href, icon: Icon, color }) => {
            const content = (
              <>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${colorClasses[color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 font-medium">{label}</div>
                  <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors break-words">
                    {value}
                  </div>
                </div>
              </>
            );
            const className = 'p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex items-center gap-4 group transition-all';
            return href ? (
              <a key={label} href={href} className={`${className} hover:border-cyan-500/50`}>
                {content}
              </a>
            ) : (
              <div key={label} className={className}>
                {content}
              </div>
            );
          })}
        </motion.div>

        {/* Direct Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`mailto:${bioData.email}`}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <Mail className="w-4 h-4" /> M'écrire un email
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-400 font-semibold text-sm flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={bioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 font-semibold text-sm flex items-center gap-2 transition-all"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={bioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 font-semibold text-sm flex items-center gap-2 transition-all"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};
