import React from 'react';
import SEO from '../seo/SEO';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rana M Fahad",
    "jobTitle": "Google Certified Data Analyst | MERN Stack Developer | Flutter App Developer",
    "url": "https://ranafahad.dev/",
    "email": "ranafahad00789@gmail.com",
    "telephone": "+923466072649",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Gujrat"
    },
    "sameAs": [
      "https://linkedin.com/in/Ranafahad-23",
      "https://github.com/Ranafahad007"
    ]
  };

  return (
    <>
      <SEO
        title="Rana M Fahad | Data Analyst, MERN Stack & Flutter Developer"
        description="Official portfolio of Rana M Fahad - 3+ years experience in MERN Stack & Flutter App Development, and Google Certified Data Analyst specializing in Machine Learning, predictive modeling, and interactive web apps."
        path="/"
        jsonLd={personJsonLd}
      />
      <main id="main-content" className="bg-theme-bg">
        <Hero />
        <About />
        <Skills />
        <Projects limit={6} />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  );
}
