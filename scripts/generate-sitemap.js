import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || 'https://ranafahad.dev';
const currentDate = new Date().toISOString().split('T')[0];

const routes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'projects', changefreq: 'weekly', priority: '0.9' },
  { path: 'projects/sales-performance-analytics-dashboard', changefreq: 'monthly', priority: '0.8' },
  { path: 'projects/customer-churn-prediction-system', changefreq: 'monthly', priority: '0.8' },
  { path: 'projects/ai-career-recommendation-system', changefreq: 'monthly', priority: '0.8' },
  { path: 'projects/digital-marketing-website', changefreq: 'monthly', priority: '0.8' },
  { path: 'projects/online-storefront-ecommerce', changefreq: 'monthly', priority: '0.8' },
  { path: 'projects/online-food-ordering-website', changefreq: 'monthly', priority: '0.8' },
  { path: 'certifications', changefreq: 'monthly', priority: '0.85' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}/${route.path ? route.path : ''}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, sitemap.trim(), 'utf-8');
console.log(`[SEO] Sitemap successfully generated at: ${publicPath}`);

// Also copy to dist if dist exists
const distPath = path.resolve(__dirname, '../dist/sitemap.xml');
if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  fs.writeFileSync(distPath, sitemap.trim(), 'utf-8');
  console.log(`[SEO] Sitemap copied to dist: ${distPath}`);
}
