export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aurea Bofill - Psicóloga",
    "image": "https://example.com/logo.png",
    "description": "Psicóloga sanitaria especializada en terapia para adultos en Petrer y Elda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Petrer y Elda",
      "addressLocality": "Petrer",
      "addressRegion": "Alicante",
      "postalCode": "03610",
      "addressCountry": "ES"
    },
    "telephone": "+34XXX",
    "email": "aurea@psicologia.es",
    "url": "https://aureabofill.es",
    "priceRange": "€€",
    "areaServed": ["Petrer", "Elda", "Alicante"],
    "serviceType": "Psychotherapy",
    "knowsAbout": ["Terapia individual", "Ansiedad", "Depresión", "Estrés", "Crecimiento personal"],
    "sameAs": [
      "https://www.doctoralia.es/aurea-bofill",
      "https://www.instagram.com/aureabofill"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
