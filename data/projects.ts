import { asset } from "@/lib/asset";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "SIG & Géo-IA" | "GenAI & LLM" | "Data Engineering" | "Computer Vision & DL" | "Web & IoT";
  image?: string;
  stack: string[];
  description: string;
  longDescription: string;
  impact: string;
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  keyFeatures: string[];
}

export const projectsData: Project[] = [
  // --- SIG & GÉO-INTELLIGENCE (Geomatic) ---
  {
    id: "geomarketing-bancaire",
    title: "Géomarketing Bancaire (ESRI)",
    subtitle: "Stratégie réseau d'agences & implantation des GAB (Geomatic)",
    category: "SIG & Géo-IA",
    image: asset("/projects/geomarketing-bancaire.svg"),
    stack: ["ArcGIS Pro", "ArcPy", "ArcGIS Enterprise", "Suitability Analysis", "Python"],
    description: "Modélisation du potentiel commercial des territoires pour piloter le réseau d'agences d'une banque.",
    longDescription: "Modélisation du potentiel commercial de chaque zone de chalandise pour calibrer les objectifs des agences selon leur potentiel réel. Détection des zones sous-desservies (White Spaces) et Suitability Analysis pour orienter la stratégie réseau (ouverture, fusion, relocalisation d'agences) et l'implantation des GAB. Géotraitements publiés en web tools et web maps sur ArcGIS Enterprise.",
    impact: "Objectifs d'agences calibrés sur le potentiel réel de leur zone de chalandise.",
    metrics: [
      { label: "Secteur", value: "Banque" },
      { label: "Plateforme", value: "ESRI ArcGIS" },
      { label: "Méthode", value: "Suitability Analysis" }
    ],
    featured: true,
    keyFeatures: [
      "Modélisation du potentiel commercial par zone de chalandise",
      "Détection des zones sous-desservies (White Spaces)",
      "Aide à la décision : ouverture, fusion et relocalisation d'agences, implantation des GAB",
      "Python Toolboxes (ArcPy) publiées en web tools sur ArcGIS Enterprise"
    ]
  },
  {
    id: "prevision-energetique",
    title: "Prévision Énergétique Nationale",
    subtitle: "Space-Time Cube, SARIMAX & Géo-IA (Geomatic)",
    category: "SIG & Géo-IA",
    image: asset("/projects/prevision-energetique.svg"),
    stack: ["ArcGIS Pro", "Space-Time Cube", "SARIMAX", "Géo-IA", "Python"],
    description: "Plateforme de simulation de scénarios de consommation énergétique et d'émissions de CO₂ à l'échelle nationale.",
    longDescription: "Conception de bout en bout d'une plateforme combinant l'analyse spatio-temporelle (Space-Time Cube), la prévision de séries temporelles (SARIMAX) et la Géo-IA pour simuler des scénarios de consommation énergétique et d'émissions de CO₂.",
    impact: "Simulation de scénarios énergie & CO₂ à l'échelle nationale.",
    metrics: [
      { label: "Secteur", value: "Énergie" },
      { label: "Modèle", value: "SARIMAX" },
      { label: "Analyse", value: "Space-Time Cube" }
    ],
    featured: true,
    keyFeatures: [
      "Cube spatio-temporel des consommations énergétiques",
      "Prévision de séries temporelles par SARIMAX",
      "Simulation de scénarios de consommation et d'émissions de CO₂"
    ]
  },
  {
    id: "analyse-spatiale-predictive",
    title: "Analyse Spatiale Prédictive (Secteur Public)",
    subtitle: "Aide à la décision territoriale (Geomatic)",
    category: "SIG & Géo-IA",
    image: asset("/projects/analyse-spatiale-predictive.svg"),
    stack: ["ArcGIS Pro", "SARIMAX", "Analyse de réseau", "Géo-IA", "Python"],
    description: "Plateforme de prédiction pour l'aide à la décision territoriale du secteur public.",
    longDescription: "Développement d'une plateforme de prédiction intégrant SARIMAX, Géo-IA, analyse de réseau et études d'accessibilité pour accompagner la décision territoriale.",
    impact: "Décisions territoriales appuyées par la prédiction et l'accessibilité.",
    metrics: [
      { label: "Secteur", value: "Public" },
      { label: "Modèle", value: "SARIMAX" },
      { label: "Analyse", value: "Réseau & Accessibilité" }
    ],
    featured: false,
    keyFeatures: [
      "Prévision spatio-temporelle par SARIMAX et Géo-IA",
      "Analyse de réseau et études d'accessibilité",
      "Aide à la décision territoriale"
    ]
  },

  // --- COMPUTER VISION & DEEP LEARNING ---
  {
    id: "bovine-phenotyping",
    title: "Système de Phénotypage Bovin 2D",
    subtitle: "Estimation biométrique du poids par vision (LIASSE - ENSA Fès)",
    category: "Computer Vision & DL",
    image: asset("/projects/bovine-cv.png"),
    stack: ["Python", "PyTorch", "PolypPVT", "YOLOv11", "OpenCV", "Scikit-learn"],
    description: "Pipeline End-to-End pour l'estimation biométrique de la masse corporelle du bétail sans stress à partir d'images 2D.",
    longDescription: "Développement d'un pipeline complet : détection d'objets pour calibration avec YOLOv11, extraction sémantique des points clés morphométriques via PolypPVT (Vision Transformers), et régression de la masse corporelle avec validation scientifique RMSE.",
    impact: "98% AP sur les points clés & RMSE de 13% sur la régression de masse.",
    metrics: [
      { label: "Précision AP", value: "98%" },
      { label: "Erreur RMSE", value: "13%" },
      { label: "Domaine", value: "AgriTech Vision" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: true,
    keyFeatures: [
      "Détection et calibration automatique de la silhouette bovine via YOLOv11",
      "Extraction sémantique fine des repères anatomiques par Vision Transformers (PolypPVT)",
      "Modèle de régression multimétrique sur mesures morphométriques",
      "Suivi biométrique sans contact préservant le bien-être animal"
    ]
  },
  {
    id: "eurosat-capsnet",
    title: "Classification Hyperspectrale EuroSAT",
    subtitle: "Deep Learning spatial avancé avec Capsule Networks",
    category: "Computer Vision & DL",
    image: asset("/projects/eurosat.png"),
    stack: ["PyTorch", "TensorFlow", "CapsNet", "CNN", "Pandas"],
    description: "Étude comparative entre CNN standards et Capsule Networks pour la classification fine de l'occupation des sols.",
    longDescription: "Implémentation d'architectures de Capsule Networks (CapsNet) pour gérer la hiérarchie spatiale et l'orientation des entités géographiques complexes (forêts, zones industrielles, surfaces aquatiques) sur le dataset satellitaire EuroSAT.",
    impact: "Précision globale de 96% préservant les relations spatiales.",
    metrics: [
      { label: "Précision", value: "96%" },
      { label: "Modèle", value: "CapsNet PyTorch" },
      { label: "Dataset", value: "EuroSAT RGB" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Traitement des images satellitaires multi-spectrales Sentinel-2",
      "Implémentation de CapsNet avec routing dynamique par accord",
      "Benchmarking rigoureux face aux architectures CNN conventionnelles"
    ]
  },
  {
    id: "pose-estimation-benchmark",
    title: "Benchmark Pose Estimation (R&D)",
    subtitle: "Évaluation SOTA HRNet vs YOLO-Pose vs ViTPose",
    category: "Computer Vision & DL",
    image: asset("/projects/pose-estimation.jpg"),
    stack: ["Python", "HRNet", "YOLO-Pose", "ViTPose", "PyTorch"],
    description: "Sélection et évaluation comparative des modèles de détection de points clés en environnements contraints.",
    longDescription: "Travail de recherche et développement visant à benchmarker les architectures dominantes de Pose Estimation (HRNet, YOLO-Pose, ViTPose). Rédaction d'une synthèse technique évaluant la latence, la précision mAP et la robustesse en temps réel.",
    impact: "Synthèse R&D & sélection du modèle optimal pour inférence temps réel.",
    metrics: [
      { label: "Architectures", value: "HRNet/ViTPose" },
      { label: "Inférence", value: "Real-Time" },
      { label: "Output", value: "Rapport R&D" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Benchmarking multi-modèles (HRNet-W48, YOLO-Pose, ViTPose-H)",
      "Analyse comparative mAP vs Latence (FPS) sur flux vidéo dynamiques",
      "Optimisation pour le déploiement sur cibles à ressources limitées"
    ]
  },
  {
    id: "video-captioning",
    title: "Légendage Vidéo (Video Captioning)",
    subtitle: "Fusion multimodale Vision + NLP (ResNet50 + LSTM)",
    category: "Computer Vision & DL",
    image: asset("/projects/video-captioning.jpg"),
    stack: ["Python", "ResNet50", "LSTM", "TensorFlow", "Keras"],
    description: "Architecture Encoder-Decoder traduisant des séquences vidéo visuelles en descriptions fluides en langage naturel.",
    longDescription: "Conception d'un modèle neuronal multimodal combinant l'extraction de caractéristiques visuelles spatiales par un CNN ResNet50 (Encoder) et la génération de séquences textuelles par un réseau récurrent LSTM (Decoder).",
    impact: "Indexation automatique de contenus vidéo par description sémantique.",
    metrics: [
      { label: "Arch", value: "Encoder-Decoder" },
      { label: "Vision", value: "ResNet50" },
      { label: "NLP", value: "LSTM Decoder" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Extraction d'embeddings visuels temporels par trames vidéo",
      "Génération conditionnelle de texte avec mécanisme d'attention",
      "Évaluation des scores BLEU et METEOR sur corpus vidéo benchmark"
    ]
  },

  // --- NLP, GENAI & AGENTS INTELLIGENTS ---
  {
    id: "bookwaraq",
    title: "BookWaraq — Agent GenAI E-commerce",
    subtitle: "Agentic Workflow autonome WhatsApp (Darija/FR/AR)",
    category: "GenAI & LLM",
    image: asset("/projects/bookwaraq.png"),
    stack: ["FastAPI", "LangChain", "LLM APIs", "WhatsApp API", "Supabase", "Docker"],
    description: "Agent WhatsApp multimodal (texte, audio, image) en Darija/FR/AR automatisant le support client avec stock en temps réel.",
    longDescription: "Architecture RAG pour l'ancrage documentaire et développement d'un Agentic Workflow capable de converser en Darija, Arabe et Français, d'interroger la base vectorielle Supabase et d'exécuter des commandes de prise de commande via WhatsApp.",
    impact: "85% des interactions clients automatisées, stock en temps réel.",
    metrics: [
      { label: "Automatisation", value: "85%" },
      { label: "Modalités", value: "Texte / Audio / Image" },
      { label: "Langues", value: "Darija / FR / AR" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: true,
    keyFeatures: [
      "Reconnaissance vocale multilingue avec Groq Whisper API",
      "Architecture RAG dynamique et mémoire contextuelle multi-tours",
      "Développement d'outils (Tools) pour la création et le suivi de commandes"
    ]
  },
  {
    id: "ai-text-detector",
    title: "Détection de Textes Générés par IA",
    subtitle: "Classifieur hybride NLP (BERT + SVM)",
    category: "GenAI & LLM",
    image: asset("/projects/smartjobster.png"),
    stack: ["Python", "Hugging Face", "BERT", "Scikit-learn", "SVM"],
    description: "Garantir l'authenticité des contenus académiques et web face aux productions synthétiques des LLMs.",
    longDescription: "Fine-tuning du modèle BERT de Hugging Face pour l'extraction d'embeddings sémantiques et classification hybride avec un SVM. Focus particulier sur le prétraitement et la détection du texte en arabe et en français.",
    impact: "Classification robuste F1-Score 94% minimisant le biais de domaine.",
    metrics: [
      { label: "Model", value: "BERT + SVM" },
      { label: "NLP Scope", value: "Arabe & FR" },
      { label: "Accuracy", value: "94%" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Extraction de représentations contextuelles par BERT",
      "Pipeline de classification hybride pour la détection de texte LLM",
      "Prétraitement spécialisé pour les corpus arabes et multilingues"
    ]
  },
  {
    id: "smartjobster",
    title: "SmartJobster — Assistant Recrutement IA",
    subtitle: "RPA & Agent LLM Desktop (PySide6 / PyQt)",
    category: "GenAI & LLM",
    image: asset("/projects/smartjobster.png"),
    stack: ["Python", "DeepSeek API", "Selenium", "PyQt", "Supabase"],
    description: "Application Desktop d'automatisation intelligente combinant scraping éthique et génération de candidatures.",
    longDescription: "Application Desktop intégrant RPA et IA Générative. Scraping éthique des offres d'emploi, analyse sémantique des critères requis, et génération contextuelle de lettres de motivation hyper-personnalisées via DeepSeek LLM.",
    impact: "Candidatures générées 5x plus vite avec adéquation de 94%.",
    metrics: [
      { label: "Gain Temps", value: "x5 plus rapide" },
      { label: "Matching Score", value: "94%" },
      { label: "UI", value: "PyQt Desktop" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Scraping et extraction sémantique des offres d'emploi avec Selenium",
      "Génération automatique de réponses et lettres de motivation avec DeepSeek LLM",
      "Interface graphique moderne PyQt/PySide6 avec stockage cloud Supabase"
    ]
  },

  // --- DATA ENGINEERING, BIG DATA & CLOUD ---
  {
    id: "enterprise-lakehouse-etl",
    title: "Enterprise Data Lakehouse & ETL",
    subtitle: "Architecture Medallion orchestrée sous Airflow",
    category: "Data Engineering",
    image: asset("/projects/lakehouse.png"),
    stack: ["Airflow", "dbt", "PySpark", "Delta Lake", "PostgreSQL", "Docker"],
    description: "Architecture Medallion (Bronze/Silver/Gold) avec traitement distribué PySpark et contrôle automatisé de la qualité des données.",
    longDescription: "Lakehouse d'entreprise en architecture Medallion (Bronze/Silver/Gold) orchestré sous Apache Airflow : traitement distribué PySpark, stockage Delta Lake, modélisation dbt, exposition PostgreSQL et contrôle automatisé de la qualité de la donnée, le tout conteneurisé avec Docker.",
    impact: "Pipeline Medallion industrialisé avec contrôle automatisé de la qualité.",
    metrics: [
      { label: "Architecture", value: "Medallion" },
      { label: "Orchestration", value: "Airflow" },
      { label: "Stockage", value: "Delta Lake" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: true,
    keyFeatures: [
      "Couches Bronze / Silver / Gold sur Delta Lake",
      "Orchestration des DAGs Airflow et transformations dbt",
      "Contrôles automatisés de qualité de données"
    ]
  },
  {
    id: "data-lakehouse-streaming",
    title: "Pipeline Streaming Temps Réel",
    subtitle: "Ingestion découplée & stockage NoSQL distribué",
    category: "Data Engineering",
    image: asset("/projects/lakehouse.png"),
    stack: ["Kafka", "PySpark Streaming", "Cassandra", "Docker", "Airflow"],
    description: "Ingestion et traitement 'in-flight' de flux de données continus à très faible latence.",
    longDescription: "Prototypage d'une architecture Lambda conteneurisée. Ingestion découplée des données via Apache Kafka, traitement analytique en streaming avec PySpark, et persistance dans la base NoSQL distribuée Cassandra.",
    impact: "Traitement de +1M d'événements/min avec tolérance aux pannes.",
    metrics: [
      { label: "Débit", value: "+1M evt/min" },
      { label: "NoSQL DB", value: "Cassandra" },
      { label: "Orchestration", value: "Airflow" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: true,
    keyFeatures: [
      "Broker d'événements haute capacité Apache Kafka avec tolérance aux pannes",
      "Traitement en streaming 'in-flight' avec PySpark et Spark Structured Streaming",
      "Stockage NoSQL distribué Cassandra pour des lectures à très faible latence"
    ]
  },
  {
    id: "fabric-lakehouse",
    title: "Lakehouse Retail (Microsoft Fabric)",
    subtitle: "Architecture Medallion sur Delta Lake & OneLake",
    category: "Data Engineering",
    image: asset("/projects/customer-analytics.png"),
    stack: ["Microsoft Fabric", "OneLake", "Delta Lake", "Data Factory", "Power BI"],
    description: "Unification du stockage et de l'analytique entreprise pour le secteur du retail.",
    longDescription: "Mise en œuvre d'une architecture Medallion (Bronze/Silver/Gold) sur Microsoft Fabric. Ingestion via Data Factory, transformations analytiques sur Delta Lake / OneLake, et génération de rapports BI décisionnels temps réel sous Power BI.",
    impact: "Unification du patrimoine data et simplification du reporting BI.",
    metrics: [
      { label: "Cloud Platform", value: "MS Fabric" },
      { label: "Format", value: "Delta Lake" },
      { label: "BI Engine", value: "Power BI DirectLake" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Pipeline ETL unifié avec Microsoft Fabric Data Factory",
      "Stockage Medallion structuré sur Delta Lake dans OneLake",
      "Dashboards analytiques Power BI connectés en mode DirectLake"
    ]
  },
  {
    id: "hybrid-cloud-infra",
    title: "Infrastructure Cloud Privé Hybride",
    subtitle: "Virtualisation souveraine Proxmox & VMware",
    category: "Data Engineering",
    image: asset("/projects/lakehouse.png"),
    stack: ["Proxmox VE", "VMware", "Linux", "Networking", "Security"],
    description: "Mise en place d'un environnement de virtualisation souverain pour l'hébergement de services critiques.",
    longDescription: "Administration système avancée et déploiement d'un cluster d'hyperviseurs type 1 (Proxmox VE) et type 2 (VMware). Configuration du réseau souverain, de la tolérance aux pannes et de la clusterisation des conteneurs d'infrastructure.",
    impact: "Virtualisation souveraine HA pour services applicatifs critiques.",
    metrics: [
      { label: "Hyperviseur", value: "Proxmox / VMware" },
      { label: "OS Core", value: "Linux Enterprise" },
      { label: "Disponibilité", value: "HA Cluster" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Cluster d'hyperviseurs Proxmox VE avec réplication du stockage",
      "Virtualisation sécurisée et segmentation réseau VLAN",
      "Hébergement souverain de conteneurs applicatifs et bases de données"
    ]
  },
  {
    id: "customer-analytics-360",
    title: "Customer Analytics 360° (BigQuery ML)",
    subtitle: "Feature Store RFM & Scoring Prédictif In-Database",
    category: "Data Engineering",
    image: asset("/projects/customer-analytics.png"),
    stack: ["GCP", "BigQuery ML", "FastAPI", "Looker Studio", "Python", "SQL"],
    description: "Scoring churn (LOGISTIC_REG), segmentation RFM & K-Means et prévision du CA à 30 jours (ARIMA_PLUS) sous BigQuery ML.",
    longDescription: "Mission freelance sur Google Cloud BigQuery. Modèle d'attrition BigQuery ML (LOGISTIC_REG) servi par une API FastAPI de scoring, Feature Store RFM In-Database et clustering KMEANS pour segmenter la base (VIP, En sommeil, Perdus), prévision du chiffre d'affaires à 30 jours (ARIMA_PLUS) et KPI restitués sur Looker Studio.",
    impact: "Segmentation automatisée & réduction du temps d'inférence de 90%.",
    metrics: [
      { label: "Prévision Temporelle", value: "30 Jours" },
      { label: "Gain Inférence", value: "90%" },
      { label: "Arch", value: "In-Database ML" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Calcul des métriques RFM (Recency, Frequency, Monetary) dans BigQuery",
      "Scoring churn (LOGISTIC_REG) exposé via une API FastAPI",
      "Segmentation K-Means : VIP, En sommeil, Perdus",
      "Prévision automatique des ventes avec l'algorithme ARIMA_PLUS"
    ]
  },

  // --- IOT, EMBEDDED, SIG & WEB ---
  {
    id: "edge-ai-traffic",
    title: "Edge AI Traffic Management System",
    subtitle: "Régulation du trafic par vision embarquée (AIoT)",
    category: "Web & IoT",
    image: asset("/projects/edge-ai-traffic.jpg"),
    stack: ["ESP32-CAM", "C++", "YOLOv8 Edge", "Python", "MQTT"],
    description: "Régulation intelligente des feux de signalisation par analyse d'images de trafic sur microcontrôleurs embarqués.",
    longDescription: "Déploiement de modèles de détection YOLOv8 quantifiés directement sur caméras embarquées ESP32-CAM. Inférence locale à faible consommation et transmission des métriques de densité routière via le protocole MQTT.",
    impact: "Inférence temps réel embarquée sur microcontrôleur low-power.",
    metrics: [
      { label: "Hardware", value: "ESP32-CAM" },
      { label: "Model", value: "YOLOv8 Edge" },
      { label: "Protocol", value: "MQTT" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: true,
    keyFeatures: [
      "Inférence de modèles de vision quantifiés sur microcontrôleurs ESP32",
      "Comptage et classification des véhicules en temps réel à l'intersection",
      "Communication d'événements à faible bande passante via MQTT"
    ]
  },
  {
    id: "africonnect-iot",
    title: "Solution IoT Agriculture de Précision",
    subtitle: "Monitoring environnemental Full Stack (AfriConnect+)",
    category: "Web & IoT",
    image: asset("/projects/africonnect-iot.jpg"),
    stack: ["Capteurs IoT", "ESP32", "Python", "Django", "PostgreSQL", "Dashboard Web"],
    description: "Infrastructure IoT end-to-end d'acquisition et de visualisation de métriques environnementales agricoles.",
    longDescription: "Projet développé lors du stage chez AfriConnect+ (Innovation City Fès). Déploiement de nœuds de capteurs ESP32 pour la température, l'humidité et les sols, backend Django d'ingestion et dashboard web analytique temps réel.",
    impact: "Suivi continu des métriques climatiques & optimisation de l'irrigation.",
    metrics: [
      { label: "Architecture", value: "Full Stack IoT" },
      { label: "Sensors", value: "ESP32 Multi-Capteurs" },
      { label: "Backend", value: "Django / Postgres" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Conception du firmware ESP32 pour l'acquisition multi-capteurs",
      "Pipeline d'ingestion des séries temporelles vers PostgreSQL",
      "Tableau de bord de supervision agricole avec alertes de seuils"
    ]
  },
  {
    id: "neo4j-pharmacy-routing",
    title: "Géolocalisation Pharmacies (Graph Neo4j)",
    subtitle: "Calcul d'itinéraires urbains optimaux sur Neo4j",
    category: "Web & IoT",
    image: asset("/projects/neo4j-pharmacy.jpg"),
    stack: ["Python", "Neo4j (Graph DB)", "OSMnx", "GIS"],
    description: "Modélisation du réseau routier sous forme de graphe et algorithmes de plus court chemin via Neo4j.",
    longDescription: "Extraction des données cartographiques urbaines OpenStreetMap avec OSMnx, modélisation topologique du réseau de transport dans la base orientée graphe Neo4j, et calcul d'itinéraires de garde optimisés.",
    impact: "Itinéraires optimaux calculés en sous-seconde sur réseaux complexes.",
    metrics: [
      { label: "Database", value: "Neo4j Graph DB" },
      { label: "Data Source", value: "OpenStreetMap / OSMnx" },
      { label: "Algo", value: "Dijkstra / A*" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Extraction et structuration des réseaux routiers SIG avec OSMnx",
      "Requêtage Cypher performant dans Neo4j pour la recherche de chemins",
      "Calcul des pharmacies de garde les plus proches en temps de trajet réel"
    ]
  },
  {
    id: "taxiride-vtc",
    title: "TaxiRide — Plateforme VTC Temps Réel",
    subtitle: "Alternative aux applications de transport (Uber/Careem)",
    category: "Web & IoT",
    image: asset("/projects/taxiride.jpg"),
    stack: ["React.js", "Supabase (PostgreSQL)", "TailwindCSS", "WebSockets"],
    description: "Application web Serverless de réservation de VTC avec géolocalisation et suivi des chauffeurs en temps réel.",
    longDescription: "Conception d'une plateforme web VTC interactive. Architecture Serverless appuyée sur Supabase, synchronisation WebSockets bidirectionnelle pour le suivi en direct des véhicules sur carte, et interface moderne TailwindCSS.",
    impact: "Suivi en temps réel de chauffeurs avec latence sub-seconde.",
    metrics: [
      { label: "Realtime Engine", value: "WebSockets" },
      { label: "Backend", value: "Supabase Serverless" },
      { label: "Frontend", value: "React + Tailwind" }
    ],
    githubUrl: "https://github.com/said-krouk",
    featured: false,
    keyFeatures: [
      "Suivi cartographique interactif en temps réel via WebSockets",
      "Gestion d'état complexe pour la réservation et le calcul des tarifs",
      "Authentification sécurisée et stockage Supabase PostgreSQL"
    ]
  }
];
