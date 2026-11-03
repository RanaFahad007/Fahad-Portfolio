import React from 'react';
import SEO from '../seo/SEO';
import Certifications from '../sections/Certifications';

export default function CertificationsPage() {
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
        "name": "Certifications",
        "item": "https://ranafahad.dev/certifications"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Google Professional Certifications"
        description="Verify 16 Google Professional Certifications held by Rana M Fahad in Advanced Data Analytics, Machine Learning, and Cybersecurity."
        path="/certifications"
        jsonLd={breadcrumbsJsonLd}
      />
      <main className="pt-24 min-h-screen bg-theme-bg">
        <Certifications />
      </main>
    </>
  );
}
