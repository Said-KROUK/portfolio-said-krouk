// Préfixe les fichiers de public/ avec le basePath : sur GitHub Pages le site est servi
// sous /<nom-du-depot>/, et les balises <img> classiques ne sont pas préfixées par Next.js.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const asset = (path: string) => `${basePath}${path}`;
