export const skillCategories = [
  {
    id: "data-analytics",
    name: "Data Analytics & ML",
    color: "#38bdf8",
    bgGradient: "from-sky-500/20 to-blue-600/10",
    skills: [
      { name: "Python", level: 95, icon: "Code2", experience: "Data Cleaning & EDA" },
      { name: "SQL", level: 92, icon: "Database", experience: "Advanced Queries" },
      { name: "Pandas & NumPy", level: 94, icon: "Binary", experience: "Data Manipulation" },
      { name: "Data Cleaning", level: 96, icon: "Sparkles", experience: "Pipeline Automation" },
      { name: "EDA (Exploratory Data Analysis)", level: 95, icon: "LineChart", experience: "In-Depth Insights" },
      { name: "Statistical Analysis", level: 90, icon: "PieChart", experience: "Hypothesis & Distributions" },
      { name: "Data Visualization", level: 92, icon: "BarChart3", experience: "Matplotlib, Seaborn" },
      { name: "Machine Learning", level: 88, icon: "Brain", experience: "Supervised & Unsupervised" },
      { name: "Regression Analysis", level: 90, icon: "TrendingUp", experience: "Predictive Forecasting" },
      { name: "Feature Engineering", level: 92, icon: "Sliders", experience: "Dimensionality & Tuning" },
      { name: "Predictive Modeling", level: 89, icon: "Cpu", experience: "Scikit-Learn, Ensembles" },
    ]
  },
  {
    id: "web-dev",
    name: "Web Development (MERN)",
    color: "#0ea5e9",
    bgGradient: "from-cyan-500/20 to-blue-500/10",
    skills: [
      { name: "React.js", level: 94, icon: "Layers", experience: "3+ Years Production UI" },
      { name: "Node.js", level: 88, icon: "Server", experience: "3+ Years REST APIs" },
      { name: "Express.js", level: 87, icon: "Network", experience: "3+ Years Backend Routing" },
      { name: "JavaScript (ES6+)", level: 93, icon: "Code", experience: "3+ Years Modern JS" },
      { name: "HTML5", level: 98, icon: "FileCode", experience: "Semantic Structure" },
      { name: "CSS3 & Tailwind", level: 95, icon: "Palette", experience: "Responsive & Animations" },
    ]
  },
  {
    id: "programming",
    name: "Core Programming",
    color: "#818cf8",
    bgGradient: "from-indigo-500/20 to-purple-500/10",
    skills: [
      { name: "Python", level: 95, icon: "Terminal", experience: "Analytics & Automation" },
      { name: "JavaScript", level: 93, icon: "Globe", experience: "3+ Years Client & Server" },
      { name: "C++", level: 88, icon: "Cpu", experience: "DSA & System Logic" },
    ]
  },
  {
    id: "mobile-dev",
    name: "Mobile App Development",
    color: "#14b8a6",
    bgGradient: "from-teal-500/20 to-emerald-500/10",
    skills: [
      { name: "Flutter", level: 88, icon: "Smartphone", experience: "3+ Years Mobile Apps" },
      { name: "Dart", level: 87, icon: "Code2", experience: "3+ Years Cross-Platform" },
      { name: "Firebase Authentication", level: 90, icon: "ShieldCheck", experience: "User Auth & Rules" },
    ]
  },
  {
    id: "databases",
    name: "Databases & Cloud",
    color: "#a855f7",
    bgGradient: "from-purple-500/20 to-pink-500/10",
    skills: [
      { name: "MongoDB", level: 89, icon: "Database", experience: "NoSQL & Mongoose" },
      { name: "MySQL", level: 91, icon: "HardDrive", experience: "Relational Schemas" },
      { name: "SQL", level: 92, icon: "Table", experience: "Window Functions & Joins" },
      { name: "Firebase", level: 88, icon: "Flame", experience: "Firestore & Cloud Sync" },
    ]
  },
  {
    id: "tools",
    name: "Tools & Environments",
    color: "#f59e0b",
    bgGradient: "from-amber-500/20 to-orange-500/10",
    skills: [
      { name: "Git", level: 92, icon: "GitBranch", experience: "Version Control" },
      { name: "GitHub", level: 94, icon: "Github", experience: "CI/CD & Collaboration" },
      { name: "VS Code", level: 96, icon: "FileText", experience: "Primary IDE" },
      { name: "Jupyter Notebook", level: 95, icon: "BookOpen", experience: "EDA & Prototyping" },
      { name: "Google Colab", level: 92, icon: "Cloud", experience: "Cloud GPU Acceleration" },
      { name: "Canva", level: 90, icon: "Brush", experience: "Visual Design & Assets" },
    ]
  },
  {
    id: "concepts-soft",
    name: "Computer Science & Soft Skills",
    color: "#ec4899",
    bgGradient: "from-pink-500/20 to-rose-500/10",
    skills: [
      { name: "OOP (Object-Oriented Programming)", level: 93, icon: "Box", experience: "Design Patterns" },
      { name: "Data Structures & Algorithms", level: 89, icon: "Binary", experience: "Optimization & LeetCode" },
      { name: "Problem Solving", level: 95, icon: "Lightbulb", experience: "Analytical Thinking" },
      { name: "Communication & Teamwork", level: 92, icon: "Users", experience: "Cross-Functional" },
      { name: "Quick Learner", level: 98, icon: "Zap", experience: "Rapid Tech Adoption" },
      { name: "Basic Linux Commands", level: 86, icon: "Terminal", experience: "Bash & Scripting" },
      { name: "MS Office (Word, Excel, PowerPoint)", level: 94, icon: "FileSpreadsheet", experience: "Reporting & Presentations" },
    ]
  }
];

// Flat list for 3D sphere orbit
export const techOrbitNodes = [
  { name: "Python", category: "Data / AI", color: "#38bdf8" },
  { name: "React", category: "Web", color: "#61dafb" },
  { name: "SQL", category: "Database", color: "#f59e0b" },
  { name: "Flutter", category: "Mobile", color: "#02569b" },
  { name: "Node.js", category: "Backend", color: "#22c55e" },
  { name: "Pandas", category: "Data", color: "#150458" },
  { name: "MongoDB", category: "Database", color: "#47a248" },
  { name: "Machine Learning", category: "AI", color: "#ec4899" },
  { name: "C++", category: "Core", color: "#00599c" },
  { name: "Scikit-Learn", category: "ML", color: "#f97316" },
  { name: "JavaScript", category: "Web", color: "#facc15" },
  { name: "Git", category: "Tools", color: "#f05032" },
  { name: "Tailwind", category: "Web", color: "#38bdf8" },
  { name: "Firebase", category: "Cloud", color: "#ffca28" },
  { name: "Express", category: "Backend", color: "#94a3b8" },
  { name: "NumPy", category: "Data", color: "#4d77cf" },
  { name: "EDA", category: "Analytics", color: "#a855f7" },
  { name: "DSA", category: "CS Core", color: "#10b981" },
];
