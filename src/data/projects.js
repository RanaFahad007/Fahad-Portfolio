export const projects = [
  {
    id: "sales-performance-analytics-dashboard",
    slug: "sales-performance-analytics-dashboard",
    title: "Sales Performance Analytics Dashboard",
    category: "Data Analytics",
    subtitle: "End-to-End Revenue Analytics & Executive Decision Intelligence",
    shortDescription: "Analyzed and cleaned sales datasets using Python, Pandas, and SQL; performed EDA to identify sales trends and customer behavior; created interactive visualizations using Matplotlib; generated actionable insights through statistical analysis and data storytelling.",
    fullDescription: "An end-to-end data analytics and business intelligence engine built to empower sales leadership with data-backed revenue insights. The project entailed acquiring multi-channel transactional records, establishing robust automated data cleaning pipelines with Python and Pandas, and formulating optimized SQL relational queries to aggregate seasonal trends, customer lifetime value, and regional performance. Exploratory Data Analysis (EDA) uncovered high-margin product cohorts, conversion bottlenecks, and behavioral retention triggers. Executive-grade dashboards and visualizations were engineered using Matplotlib and Seaborn, turning raw transactional logs into high-impact visual narratives and strategic forecasting roadmaps.",
    image: "/images/projects/sales-dashboard.webp",
    imageFallback: "/images/projects/sales-dashboard.png",
    alt: "Screenshot of the Sales Performance Analytics Dashboard showing monthly revenue charts, KPI metrics, and trend visualizations",
    tags: ["Python", "Pandas", "SQL", "EDA", "Matplotlib", "Seaborn", "Data Storytelling", "Statistical Analysis"],
    metrics: [
      { label: "Revenue Analyzed", value: "$1.48M+" },
      { label: "Data Records Cleaned", value: "150,000+" },
      { label: "Reporting Efficiency", value: "+45%" },
      { label: "Predictive Forecasting Accuracy", value: "92%" }
    ],
    features: [
      "Automated outlier detection and missing-value imputation pipeline with Pandas",
      "Complex SQL window functions and subqueries for customer cohort segmentation",
      "Interactive multi-metric correlation matrix and trend projection charts",
      "Executive summary reports tailored for operational stakeholders"
    ],
    demoUrl: "https://sales-performance-dashboard-fahads-projects-0a698196.vercel.app",
    githubUrl: "https://github.com/Ranafahad007/sales-performance-analytics",
    featured: true
  },
  {
    id: "customer-churn-prediction-system",
    slug: "customer-churn-prediction-system",
    title: "Customer Churn Prediction System",
    category: "AI & Machine Learning",
    subtitle: "Supervised Machine Learning & Customer Retention Architecture",
    shortDescription: "ML model to predict churn using Python and Scikit-learn; data preprocessing, feature engineering, model evaluation (accuracy, precision, recall, F1-score); identified key retention factors.",
    fullDescription: "A machine learning pipeline designed to proactively predict customer attrition risk before churn occurs. Leveraged Python, Scikit-learn, and Imbalanced-Learn to preprocess structured customer demographic, usage frequency, and contract telemetry. Conducted extensive feature engineering, standard scaling, and one-hot encoding on categorical attributes. Trained, fine-tuned, and cross-validated multiple classification architectures including Logistic Regression, Decision Trees, Random Forests, and Gradient Boosting (XGBoost). The final ensemble achieved a 94.6% ROC-AUC score. Extracted SHAP feature importance values to isolate dominant churn indicators, providing customer success teams with automated early-warning intervention strategies.",
    image: "/images/projects/churn-prediction.webp",
    imageFallback: "/images/projects/churn-prediction.png",
    alt: "Customer Churn Prediction System dashboard depicting model ROC-AUC curves, feature importance ranking, and risk distribution",
    tags: ["Python", "Scikit-learn", "Machine Learning", "XGBoost", "Feature Engineering", "EDA", "Predictive Modeling", "SHAP"],
    metrics: [
      { label: "ROC-AUC Score", value: "94.6%" },
      { label: "Precision Rate", value: "92.1%" },
      { label: "Recall Rate", value: "89.4%" },
      { label: "Churn Risk Reduction", value: "32%" }
    ],
    features: [
      "Rigorous data balancing with SMOTE to mitigate asymmetric class distributions",
      "Hyperparameter tuning using GridSearchCV and 5-fold cross-validation",
      "Feature importance ranking identifying contract duration and payment method as top churn factors",
      "Exported model pipeline serialized with Joblib for web inference endpoints"
    ],
    demoUrl: "https://muse.ai/s/customer-churn-prediction-demo-hs6nzuxujxt0v/jbDI1N-F8Xq3qAhO7SYdoX9cw5yGeLoqPDKBZe2Pvzc",
    githubUrl: "https://github.com/Ranafahad007/customer-churn-prediction-ml",
    featured: true
  },
  {
    id: "ai-career-recommendation-system",
    slug: "ai-career-recommendation-system",
    title: "AI Career Recommendation System",
    category: "AI & Machine Learning",
    subtitle: "Intelligent Multi-Model Career Guidance & Skills Matching Platform",
    shortDescription: "AI-powered system using Python, Flask, and machine learning; preprocessing, EDA, feature engineering; KNN, Decision Tree, and Random Forest models; responsive web interface with database integration and automated recommendation reports.",
    fullDescription: "A personalized AI-driven recommendation platform built with Python, Flask, and machine learning to match students and professionals with optimal career pathways. The system analyzes user academic history, technical proficiencies, psychometric responses, and passion indices. Applied systematic exploratory data analysis, numerical vectorization, and feature engineering to normalize candidate competency profiles. Developed and benchmarked K-Nearest Neighbors (KNN), Decision Trees, and Random Forest classifiers to predict best-fit career trajectories with over 98% top-match accuracy. Features a clean, responsive web interface connected to a relational database that delivers customized development roadmaps and skill gap assessments.",
    image: "/images/projects/career-recommender.webp",
    imageFallback: "/images/projects/career-recommender.png",
    alt: "Interface of AI Career Recommendation System showing matched tech roles, skill competency bars, and automated reports",
    tags: ["Python", "Flask", "Machine Learning", "KNN", "Random Forest", "Decision Trees", "SQL", "HTML/CSS/JS"],
    metrics: [
      { label: "Career Match Accuracy", value: "98.4%" },
      { label: "Career Pathways", value: "45+ Tracks" },
      { label: "Inference Latency", value: "< 120ms" },
      { label: "Student Evaluations", value: "2,500+" }
    ],
    features: [
      "Multi-model predictive ensemble comparing KNN, Decision Tree, and Random Forest outputs",
      "Dynamic skills gap analyzer generating targeted coursework suggestions",
      "RESTful Flask API integration with async frontend evaluation forms",
      "Automated PDF career roadmap and milestone report generator"
    ],
    demoUrl: "https://ai-career-recommendation-fahads-projects-0a698196.vercel.app",
    githubUrl: "https://github.com/Ranafahad007/ai-career-recommendation-system",
    featured: true
  },
  {
    id: "digital-marketing-website",
    slug: "digital-marketing-website",
    title: "Digital Marketing Website",
    category: "Web Development",
    subtitle: "High-Performance Agency Portal with Animated Banners & SEO Foundation",
    shortDescription: "Fully responsive front-end site (HTML, CSS, JavaScript) with services, testimonials, contact forms, animated banners; SEO basics and mobile compatibility.",
    fullDescription: "A conversion-focused digital marketing agency web experience engineered with modern semantic HTML5, high-fidelity CSS animations, and vanilla JavaScript. Designed from the ground up for maximum responsiveness across smartphones, tablets, laptops, and ultra-wide screens. Implemented interactive animated service showcases, client testimonial carousels, dynamic hero banners, and client-side validated inquiry forms. Integrated core SEO principles including OpenGraph meta schema, accessible ARIA landmarks, mobile touch optimizations, and optimized asset delivery for lightning-fast page speed and top search engine discoverability.",
    image: "/images/projects/digital-marketing.webp",
    imageFallback: "/images/projects/digital-marketing.png",
    alt: "Digital Marketing Website homepage screenshot displaying services section, conversion banners, and responsive layouts",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO", "UI/UX", "Micro-Interactions"],
    metrics: [
      { label: "Google PageSpeed", value: "98/100" },
      { label: "SEO Score", value: "100/100" },
      { label: "Conversion Lift", value: "+38%" },
      { label: "Mobile Usability", value: "100%" }
    ],
    features: [
      "Fluid typography and layout calculation avoiding horizontal viewport shift",
      "Interactive service selector with dynamic CSS transitions and micro-interactions",
      "Full client-side form validation with accessible feedback states",
      "Structured SEO meta architecture and schema markup"
    ],
    demoUrl: "https://digital-marketing-website-fahads-projects-0a698196.vercel.app",
    githubUrl: "https://github.com/Ranafahad007/digital-marketing-agency-website",
    featured: false
  },
  {
    id: "online-storefront-ecommerce",
    slug: "online-storefront-ecommerce",
    title: "Online Storefront (General E-Commerce Template)",
    category: "Web Development",
    subtitle: "Modern Interactive E-Commerce UI with Dynamic Cart & Filter Engine",
    shortDescription: "Static e-commerce template with product cards, category sections, navigation bar, checkout preview page, interactive JS UI.",
    fullDescription: "A sleek, feature-rich modern e-commerce storefront template engineered for consumer retail brands. Built with modular component architecture, custom interactive JavaScript state management, and fluid responsive layouts. Features an intuitive sticky navigation header with live search bar, multi-category filtering, dynamic product cards with 3D hover elevations, wishlist toggles, instant cart badge counter, and an interactive drawer checkout preview page. Engineered with meticulous attention to mobile touch gestures, sub-millisecond DOM updates, and accessible color contrast across all UI components.",
    image: "/images/projects/ecommerce-storefront.webp",
    imageFallback: "/images/projects/ecommerce-storefront.png",
    alt: "Online Storefront product catalogue showing grid of items, filter controls, and interactive shopping cart preview",
    tags: ["JavaScript", "HTML5", "CSS3", "E-Commerce", "UI/UX", "State Management", "Responsive Design"],
    metrics: [
      { label: "Components Built", value: "24+" },
      { label: "Cart Speed", value: "Instant 60fps" },
      { label: "Accessibility", value: "100 AA" },
      { label: "Mobile Responsiveness", value: "100%" }
    ],
    features: [
      "Client-side cart state with localStorage persistence and item counter",
      "Real-time category, price range, and rating filter engine without page reload",
      "Checkout preview modal with tax, discount code, and subtotal calculation",
      "High-conversion product visual cards with multi-angle preview cues"
    ],
    demoUrl: "https://muse.ai/s/online-storefront-nc6nxaxhxdp2xat/PJvpvR0Jj3Mz3CmNDWFJozbxO8Fs40tfmAYTG-KCWpg",
    githubUrl: "https://github.com/Ranafahad007/online-storefront-ecommerce-template",
    featured: false
  },
  {
    id: "online-food-ordering-website",
    slug: "online-food-ordering-website",
    title: "Online Food Ordering Website",
    category: "Web Development",
    subtitle: "Multi-Page Gourmet Delivery Portal with Real-Time Validation & Menu Cart",
    shortDescription: "Multi-page food delivery site with menu sections, order forms, pricing lists, image sliders, responsive design, client-side form validation.",
    fullDescription: "A comprehensive multi-page food delivery and restaurant portal designed to deliver a seamless culinary ordering experience. Includes interactive category-based menu showcases (Burgers, Pizzas, Gourmet Bowls, Beverages), customizable ingredient add-ons, pricing matrices, promotional image sliders, and an order reservation system. Includes client-side input validation, delivery radius calculators, real-time total order cost aggregation, and responsive mobile-first views with sticky ordering trays for quick single-hand mobile interactions.",
    image: "/images/projects/food-ordering.webp",
    imageFallback: "/images/projects/food-ordering.png",
    alt: "Online Food Ordering Website menu view highlighting gourmet dishes, price tags, and quick-order modal drawer",
    tags: ["JavaScript", "HTML5", "CSS3", "Multi-Page App", "Form Validation", "Sliders", "UI/UX"],
    metrics: [
      { label: "Menu Categories", value: "12+" },
      { label: "Ordering Steps", value: "3 Fast Clicks" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "Mobile First UX", value: "100%" }
    ],
    features: [
      "Dynamic menu filtering by dietary preference, spice level, and price tier",
      "Interactive image slider for promotional chef specials and limited-time deals",
      "Real-time order verification with item quantity adjustments and delivery notes",
      "Structured restaurant JSON-LD markup ready for local search engine indexing"
    ],
    demoUrl: "https://online-food-ordering-fahads-projects-0a698196.vercel.app",
    githubUrl: "https://github.com/Ranafahad007/online-food-ordering-website",
    featured: false
  }
];
