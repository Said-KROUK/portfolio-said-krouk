const colors = require('tailwindcss/colors');

// Couleurs pilotées par les variables CSS de app/globals.css (thèmes clair / sombre) :
// toute la gamme slate s'inverse, et les accents 300/400 s'assombrissent en clair.
const themed = (name) => `rgb(var(--${name}) / <alpha-value>)`;
const slate = Object.fromEntries(
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((s) => [s, themed(`slate-${s}`)])
);
const accent = (hue) => ({ ...colors[hue], 300: themed(`${hue}-300`), 400: themed(`${hue}-400`) });

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Les dégradés et couleurs des compétences sont déclarés dans data/skills.ts
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        slate,
        amber: accent('amber'),
        blue: accent('blue'),
        cyan: accent('cyan'),
        emerald: accent('emerald'),
        purple: accent('purple'),
        rose: accent('rose'),
        sky: accent('sky'),
        teal: accent('teal'),
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
          cyan: '#00f0ff',
          violet: '#8b5cf6',
          purple: '#a855f7',
          emerald: '#10b981',
        },
        dark: {
          bg: '#030712',
          card: '#0b1329',
          border: '#1e293b',
          surface: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(14, 165, 233, 0.15), rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
};
