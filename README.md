# Rana M Fahad - 3D Animated Personal Portfolio Website

A complete, production-ready, professional 3D animated personal portfolio website for **Rana M Fahad** — Google Certified Data Analyst, MERN Stack Developer, and Flutter App Developer.

Built with **React 18 + Vite**, **Three.js** (@react-three/fiber & @react-three/drei), **Framer Motion**, **GSAP**, **Tailwind CSS**, **React Router DOM v6**, and comprehensive **React Native SEO** (react-helmet-async, static pre-rendering, sitemap.xml, robots.txt, and JSON-LD structured data).

---

## 🌟 Key Highlights & Features

- **Interactive 3D Hero Scene**: Full-screen 3D viewport featuring glowing floating abstract geometry, cybernetic particle field, and smooth mouse parallax tracking.
- **Scroll-Driven Camera Movement**: GSAP & Three.js camera rig shifts angles and coordinates dynamically as the visitor scrolls through sections.
- **Letter-by-Letter Reveal & Typewriter**: Animated name header with a multi-role cycling typewriter ("Google Certified Data Analyst | MERN Stack Developer | Flutter App Developer").
- **Interactive 3D Skills Sphere (Draggable Orbit)**: Draggable 3D sphere distributing core competencies in space using golden-ratio geometry, paired with a categorized filterable proficiency grid.
- **Project Cards with 3D Tilt**: Interactive react-tilt physics on mouse hover, real high-resolution mockups, metric badges, and dedicated deep-dive case study pages (`/projects/:id`).
- **Complete CV Data Integration**:
  - Full personal background, contact coordinates, and language proficiencies (English, Urdu, Punjabi).
  - 16 Google Professional Certifications with category filters and verification links.
  - Animated academic timeline (University of Gujrat BSCS, Punjab College, Allied School 3rd Position distinction).
  - Applied engineering highlights (C++ OOP & games, SQL relational databases, DSA optimizations).
- **Dark / Light Theme Toggle**: Modern deep navy/charcoal (#070b14) theme by default with electric blue and teal accents, persisted in localStorage.
- **Custom Cursor & Micro-Interactions**: Desktop-only custom spring cursor with magnetic hover states (excluded on touch devices).
- **Top Scroll Progress Bar & Page Loader**: Smooth animated intro sequence and visual reading progress indicator.
- **CV Download**: Direct one-click download for `Rana_M_Fahad_CV.pdf`.

---

## 🚀 SEO & Search Engine Crawlability (100% Score)

1. **Pre-rendering & SSG**: Every single route (`/`, `/projects`, `/certifications`, `/contact`, and individual project pages) outputs static HTML with its exact `<title>`, `<meta name="description">`, OpenGraph tags, and canonical links pre-baked into the initial payload. Crawlers receive complete, indexable HTML without needing JavaScript execution.
2. **Schema.org Structured Data (JSON-LD)**:
   - `Person` schema with credentials, alumni, and skills.
   - `WebSite` schema for search discoverability.
   - `BreadcrumbList` on all inner pages.
   - `SoftwareSourceCode` & `CreativeWork` schemas on project case study pages.
3. **OpenGraph & Twitter Cards**: 1200x630 branded preview image located at `/public/images/og-image.jpg` with cut-out portrait, typography, and badges.
4. **Sitemap & Robots**:
   - `robots.txt` in `/public/robots.txt` referencing the sitemap.
   - `sitemap.xml` generated automatically during build via `scripts/generate-sitemap.js`.
5. **Image Optimization & Accessibility**:
   - All images feature WebP formats with PNG fallbacks, explicit `width`/`height` dimensions, and descriptive `alt` attributes to eliminate Cumulative Layout Shift (CLS).
   - Above-the-fold hero image preloaded with `fetchPriority="high"`.
   - Google Fonts (Montserrat) preloaded with `font-display: swap`.

---

## 📁 Project Architecture

```
portfolio-site/
├── public/
│   ├── images/
│   │   ├── fahad_portrait.webp       # Background-removed cutout portrait
│   │   ├── fahad_portrait.png
│   │   ├── og-image.jpg              # 1200x630 OpenGraph social card
│   │   └── projects/                 # Real high-resolution UI mockups
│   │       ├── sales-dashboard.webp
│   │       ├── churn-prediction.webp
│   │       ├── career-recommender.webp
│   │       ├── digital-marketing.webp
│   │       ├── ecommerce-storefront.webp
│   │       └── food-ordering.webp
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── humans.txt
│   ├── _headers                      # Netlify security & cache policies
│   ├── _redirects                    # Netlify SPA routing
│   └── Rana_M_Fahad_CV.pdf           # Downloadable curriculum vitae
├── scripts/
│   ├── generate-sitemap.js           # Build-time sitemap generator
│   └── prerender.js                  # Static HTML pre-renderer for SEO
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CustomCursor.jsx          # Desktop custom spring cursor
│   │   ├── Footer.jsx                # Semantic accessible footer
│   │   ├── Navbar.jsx                # Sticky glassmorphic navbar
│   │   ├── PageLoader.jsx            # Animated intro sequence
│   │   └── ScrollProgressBar.jsx     # Top rainbow scroll progress
│   ├── context/
│   │   └── ThemeContext.jsx          # Dark / Light theme provider
│   ├── data/
│   │   ├── certifications.js         # 16 Google certificates
│   │   ├── education.js              # Education & languages
│   │   ├── experience.js             # C++, SQL, DSA highlights
│   │   ├── projects.js               # 6 detailed project case studies
│   │   └── skills.js                 # Categorized skills & 3D orbit nodes
│   ├── hooks/
│   │   ├── useMousePosition.js
│   │   ├── useReducedMotion.js
│   │   └── useScrollProgress.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── CertificationsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFound.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ExperienceHighlights.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── seo/
│   │   └── SEO.jsx                   # Reusable Helmet & JSON-LD component
│   ├── three/
│   │   ├── HeroScene.jsx             # 3D floating geometry & particles
│   │   └── SkillsOrbit.jsx           # 3D interactive skill sphere
│   ├── App.jsx                       # Code splitting & routing
│   ├── index.css                     # Theme variables & Tailwind styles
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── vercel.json                       # Vercel SPA rewrite & security headers
├── .env.example
├── package.json
└── README.md
```

---

## 🛠️ Getting Started & Scripts

### 1. Installation
```bash
npm install --legacy-peer-deps
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://127.0.0.1:5173/` in your browser.

### 3. Production Build
```bash
npm run build
```
This automatically compiles the bundle, generates `sitemap.xml`, and pre-renders static HTML files for every route in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

### Changing the Domain Name
The site URL is configured in a single environment variable:
1. Open `.env` (or copy from `.env.example`).
2. Update:
   ```env
   VITE_SITE_URL=https://your-custom-domain.com
   ```
3. Run `npm run build`. The canonical URLs, OpenGraph tags, and `sitemap.xml` will automatically update to your new domain.

### Connecting the Contact Form
Add your credentials in `.env`:
- **EmailJS**:
  ```env
  VITE_EMAILJS_SERVICE_ID=your_service_id
  VITE_EMAILJS_TEMPLATE_ID=your_template_id
  VITE_EMAILJS_PUBLIC_KEY=your_public_key
  ```
- **Formspree**:
  ```env
  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_endpoint_id
  ```

### Editing CV Content & Projects
All content is cleanly organized in standalone data files:
- Projects: [src/data/projects.js](src/data/projects.js)
- Skills: [src/data/skills.js](src/data/skills.js)
- Certifications: [src/data/certifications.js](src/data/certifications.js)
- Education: [src/data/education.js](src/data/education.js)
- Experience: [src/data/experience.js](src/data/experience.js)

---

## 🚢 Deployment

### Vercel Deployment
1. Push code to GitHub repository (`https://github.com/Ranafahad007/...`).
2. Import repository in [Vercel Dashboard](https://vercel.com).
3. The included [vercel.json](vercel.json) handles SPA route rewrites and security headers out of the box.

### Netlify Deployment
1. Connect repository in [Netlify Dashboard](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. The included `public/_redirects` and `public/_headers` ensure clean SPA routing and caching.
