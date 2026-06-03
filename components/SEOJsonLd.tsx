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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}


