interface OrganizationJsonLdProps {
  url?: string;
}

export default function SEOJsonLd({ url = "https://www.microtechengg.in" }: OrganizationJsonLdProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Microtech Engineering",
    url: url,
    logo: `${url}/images/logo.png`,
    description:
      "Microtech Engineering is a manufacturer, exporter, and supplier of industrial and pharmaceutical machinery including pressure vessels, storage tanks, liquid processing plants, and pharmaceutical equipment, based in Palghar, Maharashtra, India.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 06/302, Umar Compound, Nalasopara Phata",
      addressLocality: "Palghar",
      addressRegion: "Maharashtra",
      postalCode: "401208",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-770-097-9405",
      contactType: "sales",
      email: "sales@microtechengg.in",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name: "Microtech Engineering",
    image: `${url}/images/logo.png`,
    url: url,
    telephone: "+91-770-097-9405",
    email: "sales@microtechengg.in",
    description:
      "Manufacturer and exporter of pressure vessels, PW & WFI storage tanks, liquid oral processing plants, ointment manufacturing plants, air tray dryers, octagonal blenders, multi mill machines, and more pharmaceutical and industrial machinery.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 06/302, Umar Compound, Nalasopara Phata",
      addressLocality: "Palghar",
      addressRegion: "Maharashtra",
      postalCode: "401208",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.3919",
      longitude: "72.8397",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    foundingDate: "2020",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}


