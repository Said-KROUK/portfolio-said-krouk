'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal, Cpu } from 'lucide-react';
import { CVModal } from './ui/CVModal';
import { ThemeToggle } from './ThemeToggle';
import { bioData } from '@/data/bio';

const navLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Parcours', href: '#timeline' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-cyan-950/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo avec photo */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300">
                <img
                  src={bioData.avatar}
                  alt="Said KROUK"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                  Said <span className="text-cyan-400">KROUK</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                  Data Scientist • SIG
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 font-bold'
                        : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/40'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                        transition={{ type: 'spring', duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all duration-300 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full animate-shine" />
                <span className="relative px-4 py-2 rounded-full bg-slate-950 flex items-center gap-2 text-cyan-300 group-hover:bg-slate-900 group-hover:text-slate-50 transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger CV</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold flex items-center gap-1"
                aria-label="Télécharger CV"
              >
                <Download className="w-4 h-4" />
                <span className="sr-only sm:not-sr-only sm:inline">CV</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-50 hover:border-slate-700 transition-colors"
                aria-label="Ouvrir le menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[65px] left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 md:hidden overflow-hidden"
          >
            <div className="p-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCVModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Download className="w-4 h-4" /> Télécharger mon CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal CV */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
};
