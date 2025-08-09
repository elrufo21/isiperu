"use client";

import React from "react";

function JsonLdScript({ json }: { json: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function JsonLd() {
  const baseUrl = "https://isiperu.com";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ISI Perú",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [] as string[],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "ISI Perú",
    image: `${baseUrl}/logo.png`,
    url: baseUrl,
    telephone: "+51 900460040",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Calle 3 de Noviembre s/n",
        addressLocality: "Pangoa",
        addressRegion: "Junín",
        addressCountry: "PE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Av. Victor Andrés Bélaunde 420",
        addressLocality: "Mazamari",
        addressRegion: "Junín",
        addressCountry: "PE",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Selva Central del Perú",
    },
  };

  return (
    <>
      <JsonLdScript json={organization} />
      <JsonLdScript json={localBusiness} />
    </>
  );
}
