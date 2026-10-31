import type { Metadata } from 'next';
import './globals.css';
import { themeInitScript } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Said KROUK | Data Scientist & Data Engineer SIG',
  description: "Portfolio de Said KROUK, Data Scientist & Data Engineer SIG à Casablanca (Geomatic). Géo-Intelligence ESRI ArcGIS, Machine Learning, pipelines de données Cloud (GCP, Azure) et agents IA.",
  keywords: [
    'Said KROUK',
    'Data Engineer',
    'SIG',
    'Géo-Intelligence',
    'ArcGIS',
    'ArcPy',
    'Géomarketing',
    'SARIMAX',
    'AI Engineer',
    'Data Scientist',
    'Casablanca',
    'Maroc',
    'PySpark',
    'LangChain',
    'DeepSeek',
    'Computer Vision',
    'YOLOv11',
    'BigQuery ML',
    'FastAPI'
  ],
  authors: [{ name: 'Said KROUK' }],
  openGraph: {
    title: 'Said KROUK | Data Scientist & Data Engineer SIG',
    description: "Géo-Intelligence, Machine Learning et pipelines de données Cloud pour la banque, l'énergie et le secteur public.",
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // La classe "dark" est posée par le script avant l'hydratation, d'où suppressHydrationWarning
    <html lang="fr" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Contenu constant écrit dans le code (aucune donnée externe) */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
