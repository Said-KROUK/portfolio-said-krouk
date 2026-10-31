export const THEME_STORAGE_KEY = 'theme';

// Exécuté dans <head> avant le premier rendu : thème sombre par défaut, clair seulement
// si le visiteur l'a choisi, pour éviter un flash de la mauvaise couleur.
export const themeInitScript = `(function(){try{document.documentElement.classList.toggle('dark',localStorage.getItem('${THEME_STORAGE_KEY}')!=='light')}catch(e){document.documentElement.classList.add('dark')}})();`;
