import { asset } from "@/lib/asset";

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  roleOrDegree: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  logo?: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experiencesData: TimelineItem[] = [
  {
    id: "exp-geomatic",
    type: "experience",
    roleOrDegree: "Data Scientist & Data Engineer | SIG & Géo-Intelligence",
    organization: "Geomatic",
    location: "Casablanca, Maroc",
    period: "Août 2026 – Présent",
    badge: "Actuel",
    logo: asset("/logos/geomatic_globe.png"),
    description: "Conception de solutions Géo-IA de bout en bout sur l'écosystème ESRI ArcGIS pour la banque, l'énergie et le secteur public.",
    achievements: [
      "Écosystème ArcGIS : développement de géotraitements et Python Toolboxes (ArcPy) sous ArcGIS Pro, publiés en web tools et web maps sur ArcGIS Enterprise (Portal, ArcGIS Server) et partagés sur ArcGIS Online",
      "Géomarketing bancaire (ESRI) : modélisation du potentiel commercial des territoires pour calibrer les objectifs de chaque agence selon sa zone de chalandise ; détection des zones sous-desservies (White Spaces) et Suitability Analysis pour orienter la stratégie réseau (ouverture, fusion, relocalisation d'agences) et l'implantation des GAB",
      "Prévision énergétique nationale : conception de bout en bout d'une plateforme combinant Space-Time Cube, SARIMAX et Géo-IA pour simuler des scénarios de consommation énergétique et d'émissions de CO₂",
      "Analyse spatiale prédictive (secteur public) : plateforme de prédiction intégrant SARIMAX, Géo-IA, analyse de réseau et études d'accessibilité pour l'aide à la décision territoriale"
    ],
    skills: ["ArcGIS Pro", "ArcGIS Enterprise", "ArcPy", "Space-Time Cube", "SARIMAX", "Géo-IA", "Suitability Analysis"]
  },
  {
    id: "exp-freelance",
    type: "experience",
    roleOrDegree: "Freelance Data Engineer & Data Scientist",
    organization: "Indépendant",
    location: "Casablanca / Remote",
    period: "Juin 2026 – Août 2026",
    badge: "Freelance",
    description: "Plateforme Customer Analytics & Machine Learning In-Database sur GCP / BigQuery ML.",
    achievements: [
      "Scoring churn & inférence temps réel : entraînement d'un modèle d'attrition sous BigQuery ML (LOGISTIC_REG) et déploiement d'une API FastAPI de scoring pour cibler les clients à risque",
      "Segmentation client (RFM & K-Means) : Feature Store RFM In-Database et clustering KMEANS pour segmenter la base (VIP, En sommeil, Perdus) et optimiser le ciblage marketing",
      "Prévision du CA à 30 jours via BigQuery ML (ARIMA_PLUS) et restitution des KPI sur un tableau de bord Looker Studio"
    ],
    skills: ["GCP", "BigQuery ML", "FastAPI", "ARIMA_PLUS", "K-Means", "Looker Studio"]
  },
  {
    id: "exp-liasse",
    type: "experience",
    roleOrDegree: "Stagiaire Recherche — Computer Vision & Deep Learning",
    organization: "Laboratoire LIASSE — ENSA Fès",
    location: "Fès, Maroc",
    period: "Avril 2025 – Juillet 2025",
    badge: "Recherche",
    logo: asset("/logos/ensa_fes.png"),
    description: "Conception d'un système de phénotypage bovin automatique pour estimer la masse corporelle par vision 2D.",
    achievements: [
      "Fine-tuning de YOLOv11 (détection d'objets) et adaptation de PolypPVT pour la détection de points clés morphologiques",
      "Précision de 98% AP sur la détection de points clés",
      "Réduction de l'erreur relative à RMSE = 13% sur l'estimation de la masse corporelle"
    ],
    skills: ["PyTorch", "YOLOv11", "PolypPVT", "OpenCV", "Scikit-Learn", "Computer Vision"]
  },
  {
    id: "exp-africonnect",
    type: "experience",
    roleOrDegree: "Stagiaire IoT Data Engineer",
    organization: "AfriConnect Plus — Innovation City Fès",
    location: "Fès, Maroc",
    period: "Juillet 2024 – Octobre 2024",
    badge: "Stage technique",
    logo: asset("/logos/africonnect.png"),
    description: "Infrastructure d'acquisition IoT pour l'ingestion temps réel de séries temporelles agricoles.",
    achievements: [
      "Déploiement d'une infrastructure d'acquisition IoT (ESP32) pour l'ingestion temps réel de séries temporelles agricoles",
      "Développement du backend Django et structuration des pipelines ETL pour l'indexation et le stockage PostgreSQL",
      "Conception de tableaux de bord analytiques interactifs (Django, Chart.js) pour le suivi en temps réel des métriques capteurs"
    ],
    skills: ["ESP32", "Django", "PostgreSQL", "ETL", "Chart.js", "IoT"]
  }
];

export const educationData: TimelineItem[] = [
  {
    id: "edu-master",
    type: "education",
    roleOrDegree: "Master Big Data Analytics & Smart Systems",
    organization: "Faculté des Sciences Dhar El Mahraz (FSDM)",
    location: "Fès, Maroc",
    period: "2023 – 2025",
    badge: "Master",
    description: "Formation approfondie en IA, Machine Learning, Cloud et Big Data.",
    achievements: [
      "Architectures distribuées Hadoop/Spark et bases NoSQL",
      "Systèmes de recommandation et traitement automatique du langage naturel (NLP)",
      "Projets pratiques sur GCP, AWS, PySpark, Airflow et PyTorch"
    ],
    skills: ["Big Data", "Machine Learning", "Deep Learning", "Cloud Computing", "NoSQL"]
  },
  {
    id: "edu-erasmus",
    type: "education",
    roleOrDegree: "Programme Erasmus+ Entrepreneuriat",
    organization: "IUT Aix-Marseille",
    location: "Aix-Marseille, France",
    period: "Juillet 2025",
    badge: "International",
    description: "Programme international d'entrepreneuriat autour d'un projet IoT & Data.",
    achievements: [
      "Conception d'un projet IoT & Data dans une équipe internationale",
      "Business Model et pitch devant un jury international"
    ],
    skills: ["Entrepreneuriat", "IoT & Data", "Gestion de projet"]
  },
  {
    id: "edu-licence",
    type: "education",
    roleOrDegree: "Licence Sciences Mathématiques et Informatique (SMI)",
    organization: "Faculté des Sciences Dhar El Mahraz (FSDM)",
    location: "Fès, Maroc",
    period: "2020 – 2023",
    badge: "Licence",
    description: "Socle académique en mathématiques, probabilités/statistiques, algorithmique et génie logiciel.",
    achievements: [
      "Structures de données, complexité algorithmique et langage C/C++",
      "Bases de données relationnelles (SQL, modélisation conceptuelle) et programmation orientée objet"
    ],
    skills: ["Mathématiques", "Algorithmique", "Statistiques", "C/C++", "SQL & POO"]
  },
  {
    id: "edu-bac",
    type: "education",
    roleOrDegree: "Baccalauréat Sciences Mathématiques A (SM-A)",
    organization: "Lycée Mansour Dehbi",
    location: "Tissa, Taounate",
    period: "2020",
    description: "Baccalauréat en sciences mathématiques.",
    achievements: [],
    skills: ["Mathématiques", "Physique"]
  }
];
