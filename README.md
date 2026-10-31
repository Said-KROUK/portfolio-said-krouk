# 🚀 Portfolio Said KROUK — Data Scientist & Data Engineer | SIG & Géo-Intelligence

Bienvenue sur le répertorie du portfolio personnel moderne, interactif et hautement performant de **Said KROUK**, Data Scientist & Data Engineer SIG chez Geomatic, basé à Casablanca (Maroc).

Ce portfolio met en valeur des réalisations en **SIG & Géo-Intelligence** (ArcGIS Pro/Enterprise/Online, ArcPy, géomarketing bancaire, Space-Time Cube, SARIMAX), en **Data Engineering** (Medallion Architecture, PySpark, BigQuery ML, Airflow), en **IA Générative** (Agents conversationnels vocaux multimodaux LangChain, DeepSeek API, Groq Whisper) et en **Computer Vision** (YOLOv11, Vision Transformers, CapsNet).

---

## 🎨 Aperçu & Thème Visuel

- **Aesthétique :** Dark Mode Cyberpunk Slate (`slate-950`), accents néon bleu électrique (`cyan-400`), violet IA (`violet-500`) et vert émeraude (`emerald-400`).
- **Design System :** Effets de verre dépoli (*Glassmorphism* avec `backdrop-blur-xl`), cartes 3D interactives hover avec *Framer Motion*, typographies modernes (*Inter* & *Outfit*).
- **Responsive :** Optimisé mobile-first, tablette et desktop ultra-large.

---

## 🛠️ Tech Stack & Technologies

| Catégorie | Technologies Clés |
| :--- | :--- |
| **Framework & Core** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling & CSS** | Tailwind CSS 3.4, PostCSS, Autoprefixer, Clsx, Tailwind-Merge |
| **Animations & UI** | Framer Motion, Lucide React (Icônes) |
| **IA & LLM** | LangChain, DeepSeek API, Groq Whisper (Speech-to-Text), RAG Hybride |
| **Computer Vision** | PyTorch, YOLOv11, PolypPVT (Vision Transformers), Capsule Networks |
| **Data Engineering** | PySpark, Apache Airflow, dbt, Apache Kafka, Delta Lake, BigQuery ML |

---

## 📁 Architecture du Projet

```text
portfolio-said-krouk/
├── app/
│   ├── globals.css         # Reset sombre, polices Google Inter/Outfit, scrollbar custom
│   ├── layout.tsx          # Métadonnées SEO, OpenGraph et structure HTML5
│   ├── not-found.tsx       # Page 404 sur-mesure
│   └── page.tsx            # Assemblage principal du portfolio avec scroll progress bar
├── components/
│   ├── Navbar.tsx          # Navigation fixe dépolie avec active section highlight
│   ├── Hero.tsx            # Section d'accueil, status badge "Disponible", CTA & réseaux
│   ├── About.tsx           # Présentation, faits marquants, diplômes & carte de mobilité
│   ├── Skills.tsx          # Matrice des compétences avec filtres & barres de niveau
│   ├── Projects.tsx        # Showcase filtrable (GenAI, Data Eng, CV, Web & IoT)
│   ├── ProjectModal.tsx    # Popup d'architecture & métriques détaillées par projet
│   ├── Timeline.tsx        # Frise chronologique (Expériences & Formation)
│   ├── Contact.tsx         # Cartes de contact & actions directes (email, WhatsApp, LinkedIn)
│   ├── Footer.tsx          # Pied de page avec retour en haut & copyright 2026
│   └── ui/
│       └── CVModal.tsx     # Aperçu du CV interactif & générateur PDF imprimable
├── data/
│   ├── bio.ts              # Profil de Said KROUK, stats & coordonnées
│   ├── skills.ts           # Les 7 axes d'expertise (dont SIG & Géo-IA)
│   ├── projects.ts         # Les 19 projets avec métriques d'impact & stack
│   └── experience.ts       # Expériences (Geomatic, Freelance, LIASSE, AfriConnect) & formation
├── public/
│   ├── projects/           # Visuels HD pour chaque projet
│   ├── logos/              # Logos des entreprises (Timeline)
│   └── CV_Said_KROUK.pdf   # CV téléchargeable (copié depuis CV-Professionel)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Installation & Lancement Local

### Préréquis
- Node.js 18+ et `npm`

### 1. Cloner et installer les dépendances
```bash
git clone https://github.com/Said-KROUK/portfolio-said-krouk.git
cd portfolio-said-krouk
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Build pour la production
Le site est exporté en **HTML statique** (`output: 'export'`) dans le dossier `out/` :
```bash
npm run build
npx serve out
```

### 4. Déploiement GitHub Pages
Le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) construit et publie le site à chaque push sur `main`.
Activation unique : **Settings → Pages → Source : GitHub Actions**.
Le chemin du dépôt (`/portfolio-said-krouk`) est appliqué automatiquement via `NEXT_PUBLIC_BASE_PATH`.

---

## 📄 Licences & Contact

**Said KROUK**  
- **Rôle :** Data Scientist & Data Engineer | SIG & Géo-Intelligence (Geomatic)  
- **Localisation :** Casablanca, Maroc (Mobilité nationale & international) • Permis B  
- **Email :** [said.krouk.1@gmail.com](mailto:said.krouk.1@gmail.com)  
- **LinkedIn :** [linkedin.com/in/said-krouk](https://linkedin.com/in/said-krouk)  
- **GitHub :** [github.com/said-krouk](https://github.com/said-krouk)  

© 2026 Said KROUK. Tous droits réservés.
