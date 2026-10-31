'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface FilterTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
  /** Dégradé Tailwind de l'onglet actif, ex. "from-cyan-500 to-blue-600" */
  gradient?: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  active: string;
  onChange: (id: string) => void;
  /** Identifiant unique de l'indicateur animé (un par barre) */
  layoutId: string;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ tabs, active, onChange, layoutId }) => (
  <div className="flex justify-center mb-12">
    {/* Sur petit écran la barre défile horizontalement au lieu de couper les onglets */}
    <div className="max-w-full overflow-x-auto no-scrollbar rounded-full">
      <div
        role="tablist"
        className="flex w-max items-center gap-1 p-1.5 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-lg shadow-slate-950/20"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${tab.gradient ?? 'from-cyan-500 to-blue-600'} shadow-md`}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {tab.icon && <span className="relative z-10 [&>svg]:w-4 [&>svg]:h-4">{tab.icon}</span>}
              <span className="relative z-10">{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`relative z-10 min-w-[20px] px-1.5 py-0.5 rounded-full text-[10px] font-bold leading-none text-center transition-colors ${
                    isActive ? 'bg-white/25 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  </div>
);
