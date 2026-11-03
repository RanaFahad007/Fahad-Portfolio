import React from 'react';
import SEO from '../seo/SEO';
import Contact from '../sections/Contact';

export default function ContactPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ranafahad.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://ranafahad.dev/contact"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact & Collaboration"
        description="Get in touch with Rana M Fahad for Data Analytics, Machine Learning, or full-stack software development projects."
        path="/contact"
        jsonLd={breadcrumbsJsonLd}
      />
      <main className="pt-24 min-h-screen bg-theme-bg">
        <Contact />
      </main>
    </>
  );
}
