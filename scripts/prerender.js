import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.log('[Prerender] dist/index.html not found. Run vite build first.');
  process.exit(0);
}

const template = fs.readFileSync(templatePath, 'utf-8');

const routes = [
  {
    path: 'projects/index.html',
    title: 'Featured Projects Portfolio | Rana M Fahad',
    description: 'Explore the complete collection of Data Analytics, Machine Learning, and Full-Stack MERN applications developed by Rana M Fahad.',
    canonical: 'https://ranafahad.dev/projects',
  },
  {
    path: 'certifications/index.html',
    title: 'Google Professional Certifications | Rana M Fahad',
    description: 'Verify 16 Google Professional Certifications held by Rana M Fahad in Advanced Data Analytics, Machine Learning, and Cybersecurity.',
    canonical: 'https://ranafahad.dev/certifications',
  },
  {
    path: 'contact/index.html',
    title: 'Contact & Collaboration | Rana M Fahad',
    description: 'Get in touch with Rana M Fahad for Data Analytics, Machine Learning, or full-stack software development projects.',
    canonical: 'https://ranafahad.dev/contact',
  },
  {
    path: 'projects/sales-performance-analytics-dashboard/index.html',
    title: 'Sales Performance Analytics Dashboard | Rana M Fahad',
    description: 'Analyzed and cleaned sales datasets using Python, Pandas, and SQL; performed EDA to identify sales trends and customer behavior.',
    canonical: 'https://ranafahad.dev/projects/sales-performance-analytics-dashboard',
  },
  {
    path: 'projects/customer-churn-prediction-system/index.html',
    title: 'Customer Churn Prediction System | Rana M Fahad',
    description: 'Supervised ML model to predict customer churn using Python and Scikit-learn with 94.6% ROC-AUC score.',
    canonical: 'https://ranafahad.dev/projects/customer-churn-prediction-system',
  },
  {
    path: 'projects/ai-career-recommendation-system/index.html',
    title: 'AI Career Recommendation System | Rana M Fahad',
    description: 'AI-powered career recommendation platform using Python, Flask, and machine learning models (KNN, Decision Tree, Random Forest).',
    canonical: 'https://ranafahad.dev/projects/ai-career-recommendation-system',
  },
  {
    path: 'projects/digital-marketing-website/index.html',
    title: 'Digital Marketing Website | Rana M Fahad',
    description: 'High-performance responsive agency front-end site engineered with modern HTML5, CSS3, JavaScript animations, and SEO.',
    canonical: 'https://ranafahad.dev/projects/digital-marketing-website',
  },
  {
    path: 'projects/online-storefront-ecommerce/index.html',
    title: 'Online Storefront E-Commerce Template | Rana M Fahad',
    description: 'Modern interactive e-commerce template with dynamic product cards, category filtering, and checkout preview.',
    canonical: 'https://ranafahad.dev/projects/online-storefront-ecommerce',
  },
  {
    path: 'projects/online-food-ordering-website/index.html',
    title: 'Online Food Ordering Website | Rana M Fahad',
    description: 'Multi-page food ordering portal with dynamic menu items, cart state, and client-side form validation.',
    canonical: 'https://ranafahad.dev/projects/online-food-ordering-website',
  },
];

console.log('[Prerender] Generating static HTML for search engine crawlers...');

for (const route of routes) {
  const filePath = path.join(distDir, route.path);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let html = template;
  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  // Replace meta title
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);
  // Replace meta description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);
  // Replace canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`);
  // Replace OG URL and title
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`[Prerender] Created static HTML: ${route.path}`);
}

console.log('[Prerender] All route HTML files generated successfully!');
