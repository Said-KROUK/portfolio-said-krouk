export interface SkillCategory {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  gradient: string;
  badgeColor: string;
  description: string;
  skills: { name: string; level: number; featured?: boolean }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "sig",
    title: "SIG & Géo-IA",
    shortTitle: "SIG & Géo-IA",
    iconName: "Globe",
    gradient: "from-teal-500 to-cyan-600",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    description: "Écosystème ESRI ArcGIS, géotraitements ArcPy, géomarketing, analyse spatio-temporelle et Géo-IA.",
    skills: [
      { name: "ArcGIS Pro & ArcGIS Online", level: 92, featured: true },
      { name: "ArcGIS Enterprise (Portal, Server)", level: 88, featured: true },
      { name: "ArcPy & Python Toolbox", level: 92, featured: true },
      { name: "Space-Time Cube & SARIMAX", level: 90, featured: true },
      { name: "Suitability Analysis & Géomarketing", level: 90, featured: true },
      { name: "Analyse de réseau & Accessibilité", level: 88 },
    ]
  },
  {
    id: "de",
    title: "Data Engineering & Big Data",
    shortTitle: "Data Eng.",
    iconName: "Database",
    gradient: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    description: "Pipelines ETL/ELT, architecture Medallion, ingestion CDC, qualité & gouvernance des données.",
    skills: [
      { name: "PySpark & Hadoop", level: 92, featured: true },
      { name: "Apache Airflow & dbt", level: 90, featured: true },
      { name: "Azure Data Factory", level: 86, featured: true },
      { name: "Apache Kafka & ingestion CDC", level: 88, featured: true },
      { name: "Delta Lake & Architecture Medallion", level: 90, featured: true },
      { name: "Qualité & Gouvernance des Données", level: 88 },
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Bases de Données",
    shortTitle: "Cloud & BDD",
    iconName: "Cloud",
    gradient: "from-sky-500 to-blue-600",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    description: "GCP, Azure et AWS ; bases relationnelles et NoSQL ; SQL avancé.",
    skills: [
      { name: "GCP (BigQuery, Dataflow, Vertex AI, GCS)", level: 92, featured: true },
      { name: "Azure", level: 85, featured: true },
      { name: "AWS (S3, EC2)", level: 82 },
      { name: "SQL Avancé, PostgreSQL & Supabase", level: 92, featured: true },
      { name: "MongoDB, MySQL & Oracle", level: 85 },
    ]
  },
  {
    id: "ml",
    title: "ML, Deep Learning & Computer Vision",
    shortTitle: "ML & Vision",
    iconName: "Eye",
    gradient: "from-purple-500 to-violet-600",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    description: "Modèles prédictifs, séries temporelles, interprétabilité et vision par ordinateur.",
    skills: [
      { name: "PyTorch & Scikit-learn", level: 92, featured: true },
      { name: "XGBoost & SHAP", level: 90, featured: true },
      { name: "SARIMAX (Séries Temporelles)", level: 90, featured: true },
      { name: "YOLOv11 & Vision Transformers (ViT)", level: 92, featured: true },
      { name: "OpenCV", level: 90 },
    ]
  },
  {
    id: "genai",
    title: "IA Générative, LLMs & NLP",
    shortTitle: "GenAI & LLM",
    iconName: "Bot",
    gradient: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    description: "Agents IA, RAG hybride et automatisation de l'analyse par LLM.",
    skills: [
      { name: "LangChain", level: 92, featured: true },
      { name: "Agentic Workflows", level: 90, featured: true },
      { name: "RAG Hybride", level: 90, featured: true },
      { name: "LLM APIs & Fine-tuning", level: 88, featured: true },
      { name: "Hugging Face", level: 88 },
    ]
  },
  {
    id: "mlops",
    title: "MLOps, Infrastructure & Dev",
    shortTitle: "MLOps",
    iconName: "Server",
    gradient: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description: "Conteneurisation, orchestration, APIs, CI/CD et méthodes agiles.",
    skills: [
      { name: "Docker & Kubernetes", level: 88, featured: true },
      { name: "FastAPI, Flask & Django", level: 92, featured: true },
      { name: "MLflow", level: 86, featured: true },
      { name: "CI/CD (GitLab, Azure Pipelines) & GitFlow", level: 88 },
      { name: "Linux & Scrum / Jira", level: 88 },
    ]
  },
  {
    id: "bi",
    title: "Business Intelligence & Visualisation",
    shortTitle: "BI & Dataviz",
    iconName: "BarChart3",
    gradient: "from-rose-500 to-pink-600",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    description: "Tableaux de bord interactifs et reporting décisionnel.",
    skills: [
      { name: "Power BI", level: 90, featured: true },
      { name: "Looker Studio", level: 90, featured: true },
      { name: "Dashboards interactifs", level: 90 },
      { name: "Reporting décisionnel", level: 88 },
    ]
  }
];
