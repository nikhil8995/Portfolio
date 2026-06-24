export const projects = [
  {
    id: 1,
    title: 'Robust Spec-Level Semantic Matching of Industrial RFP Technical Requirements to OEM Product SKUs',
    shortTitle: 'RFP Semantic Matching Engine',
    description:
      'An end-to-end NLP pipeline that parses industrial RFP documents, extracts granular technical requirements, and semantically matches them to OEM product SKUs using transformer-based embeddings. Features explainable AI scoring with compliance breakdowns and confidence metrics.',
    tags: ['NLP', 'Semantic Search', 'Explainable AI', 'Compliance Scoring'],
    tech: ['Python', 'HuggingFace', 'FAISS', 'FastAPI', 'React'],
    accent: '#00f5ff',
    icon: '🔍',
    featured: true,
  },
  {
    id: 2,
    title: 'DevOps CI/CD Automation Pipeline',
    shortTitle: 'DevOps CI/CD Pipeline',
    description:
      'A production-grade CI/CD pipeline automating build, test, security scanning, and deployment workflows. Integrates Jenkins for orchestration, Docker for containerization, Ansible for config management, SonarQube for code quality, and PostgreSQL for artifact metadata.',
    tags: ['Jenkins', 'Docker', 'Ansible', 'SonarQube', 'PostgreSQL'],
    tech: ['Jenkins', 'Docker', 'Ansible', 'SonarQube', 'PostgreSQL', 'Bash'],
    accent: '#39ff14',
    icon: '⚙️',
    featured: false,
    github: 'https://github.com/nikhil8995/CodeExec',
  },
  {
    id: 3,
    title: 'AI-Powered Social Media Content Assistant with Analytics Dashboard',
    shortTitle: 'AI Content Assistant',
    description:
      'A full-stack platform that uses LLMs to generate platform-optimized social media content, schedule posts, and provide real-time analytics with engagement predictions. Includes a D3-powered dashboard visualizing reach, sentiment, and performance trends.',
    tags: ['AI Content Generation', 'Analytics Dashboard', 'Social Media Automation', 'Data Visualization', 'NLP'],
    tech: ['Python', 'OpenAI API', 'React', 'D3.js', 'FastAPI', 'Redis'],
    accent: '#bf5af2',
    icon: '🤖',
    featured: false,
    github: 'https://github.com/nikhil8995/SocialAI',
  }
]

export const skills = {
  'Languages': ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL'],
  'AI / ML': ['PyTorch', 'Scikit-learn', 'LLM API Integration'],
  'Web': ['React', 'FastAPI', 'Node.js', 'REST APIs', 'Next.js'],
  'DevOps': ['Docker', 'Jenkins', 'Ansible', 'GitHub Actions'],
  'Data': ['PostgreSQL', 'Redis', 'MongoDB', 'Pandas', 'NumPy', 'D3.js', 'Hadoop'],
  'Tools': ['Git', 'SonarQube', 'VS Code'],
}


export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', icon: '☁️' },
  { name: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '2024', icon: '🐳' },
  { name: 'Google Data Analytics', issuer: 'Google', year: '2023', icon: '📊' },
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2023', icon: '🧠' },
]

export const aiResponses = {
  default: "I'm Nikhil's AI assistant. Ask me about his projects, skills, or experience!",
  devops: `**DevOps CI/CD Pipeline**\n\nNikhil built a production-grade CI/CD system from scratch:\n\n• **Jenkins** — orchestrates the entire pipeline across build, test, and deploy stages\n• **Docker** — containerizes all services for environment consistency\n• **Ansible** — automates infrastructure provisioning and config management\n• **SonarQube** — enforces code quality gates and security scanning\n• **PostgreSQL** — stores artifact metadata and deployment history\n\nThe pipeline reduced deployment time by **60%** and eliminated manual deployment errors across 12 microservices.`,

  ml: `**ML & AI Projects**\n\nNikhil has built several applied ML systems:\n\n**1. RFP Semantic Matching Engine**\nUses transformer embeddings (HuggingFace) + FAISS vector search to match industrial procurement requirements to product SKUs with explainable confidence scores.\n\n**2. AI Content Assistant**\nLLM-powered platform generating platform-optimized social media content. Processes 50K+ data points daily with sentiment analysis and engagement prediction.\n\nHe's focused on production-grade AI systems — not just notebooks.`,

  technologies: `**Tech Stack**\n\n**Languages**: Python, JavaScript/TypeScript, SQL, Bash, C++\n\n**AI/ML**: PyTorch, HuggingFace Transformers, LangChain, FAISS, Scikit-learn, OpenAI API\n\n**Web**: React, FastAPI, Node.js, Next.js, GraphQL\n\n**DevOps**: Docker, Jenkins, Ansible, GitHub Actions, Linux\n\n**Data**: PostgreSQL, Redis, MongoDB, Pandas, D3.js\n\nStrongest in Python + ML pipelines and full-stack React/FastAPI apps.`,

  rfp: `**RFP Semantic Matching System** — Flagship Project\n\n**Problem**: Industrial buyers need to match RFP specs to thousands of OEM SKUs manually — slow and error-prone.\n\n**Solution Pipeline**:\n1. PDF parsing + NLP requirement extraction\n2. Transformer-based embeddings (sentence-transformers)\n3. FAISS vector index for sub-millisecond similarity search\n4. Compliance scoring with per-spec explainability\n5. FastAPI backend + React compliance dashboard\n\n**Key innovation**: The explainable AI layer breaks down *why* a SKU matches — showing which specs pass, which partially match, and confidence per attribute. Built entirely in Python with a React frontend.`,

  experience: `**Professional Experience**\n\n**Software Engineer Intern @ Tech Innovations Ltd.** *(Jun 2024 — Present)*\nBuilding NLP pipelines for industrial procurement automation. Primary contributor to the RFP semantic matching system.\n\n**DevOps Engineer Intern @ CloudSystems Inc.** *(Jan 2024 — May 2024)*\nDesigned full CI/CD infrastructure. Containerized 12 microservices, cut deployment time 60%.\n\n**AI Research Intern @ DataLab Research** *(Aug 2023 — Dec 2023)*\nBuilt generative AI content pipelines processing 50K+ social media data points daily.`,

  about: `**About Nikhil**\n\nSoftware Engineer specializing in the intersection of AI/ML and production systems.\n\nHe builds things that work at scale — from NLP pipelines processing industrial documents to DevOps infrastructure handling multi-service deployments.\n\n**What sets him apart:**\n• Ships production-ready code, not just prototypes\n• Bridges the gap between ML research and engineering\n• Strong fundamentals in both backend systems and AI\n\nCurrently open to AI Engineering and Full-Stack development roles.`,
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Contact', href: '#contact' },
]
