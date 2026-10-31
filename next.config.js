/** @type {import('next').NextConfig} */
// Défini par le workflow GitHub Pages (ex. "/portfolio-said-krouk"), vide en local.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Export statique : aucun serveur Next.js en production, donc pas de surface
  // d'attaque serveur (Image Optimizer, Server Actions, middleware…).
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
