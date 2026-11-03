import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = "Rana M Fahad | Data Analyst, MERN Stack & Flutter Developer";
const DEFAULT_DESCRIPTION = "Portfolio of Rana M Fahad - 3+ years experience in MERN Stack & Flutter App Development, and Google Certified Data Analyst specializing in Machine Learning and full-stack software.";
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://ranafahad.dev';
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd = null,
}) {
  const fullTitle = title ? `${title} | Rana M Fahad` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="Rana M Fahad Portfolio" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data injection */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
