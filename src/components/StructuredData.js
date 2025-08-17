'use client';

import { useLanguage } from '../i18n/LanguageContext';

const StructuredData = ({ type = 'organization', data = {} }) => {
  const { locale, t } = useLanguage();

  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rapsodi Dekorasyon Ambalaj San. A.Ş.",
    "alternateName": "Rapsodi Dekor",
    "url": "https://rapsodidekor.com",
    "logo": "https://rapsodidekor.com/rapsodi_logobeyaz.svg",
    "description": locale === 'tr' 
      ? "70 yıllık deneyimle cam ve plastik ambalajlar için dekorasyon çözümleri sunan öncü firma."
      : "Leading company providing decoration solutions for glass and plastic packaging with 70 years of experience.",
    "foundingDate": "1950",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Subaşı, Fatma Sultan Cad., No:7/1",
      "addressLocality": "Çatalca",
      "addressRegion": "İstanbul",
      "postalCode": "34540",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English", "German", "French", "Spanish", "Italian", "Russian", "Chinese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/rapsodi-dekor",
      "https://www.instagram.com/rapsodidekor"
    ],
    "knowsAbout": [
      "Glass Decoration",
      "Silk Screen Printing", 
      "Hot Foil Stamping",
      "Precious Metal Application",
      "Organic Painting",
      "Metalized Printing",
      "Masking Techniques"
    ],
    "areaServed": {
      "@type": "Country",
      "name": ["Turkey", "Europe", "Middle East", "Africa", "Americas"]
    },
    "industry": "Manufacturing",
    "numberOfEmployees": "450+"
  });

  const getWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rapsodi Dekor",
    "url": "https://rapsodidekor.com",
    "description": locale === 'tr'
      ? "Cam dekorasyon uzmanı Rapsodi Dekor'un resmi web sitesi"
      : "Official website of Rapsodi Dekor, glass decoration specialist",
    "inLanguage": [
      "tr-TR", "en-US", "de-DE", "fr-FR", "es-ES", "it-IT", "ru-RU", "zh-CN"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rapsodidekor.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  });

  const getManufacturerSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "name": "Rapsodi Dekorasyon Ambalaj San. A.Ş.",
    "url": "https://rapsodidekor.com",
    "description": locale === 'tr'
      ? "Cam ve plastik ambalajlar için özel dekorasyon çözümleri üreten üretici firma."
      : "Manufacturing company producing specialized decoration solutions for glass and plastic packaging.",
    "foundingDate": "1950",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Subaşı, Fatma Sultan Cad., No:7/1",
      "addressLocality": "Çatalca", 
      "addressRegion": "İstanbul",
      "postalCode": "34540",
      "addressCountry": "TR"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": locale === 'tr' ? "Serigrafi Baskı" : "Silk Screen Printing",
          "description": locale === 'tr' 
            ? "Cam ve plastik yüzeylere yüksek kaliteli serigrafi baskı hizmetleri"
            : "High-quality silk screen printing services on glass and plastic surfaces"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": locale === 'tr' ? "Sıcak Yaldız Uygulama" : "Hot Foil Stamping",
          "description": locale === 'tr'
            ? "Metalik görünüm için sıcak yaldız uygulama hizmetleri"
            : "Hot foil stamping services for metallic appearance"
        }
      }
    ]
  });

  const getBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  });

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema();
      case 'website':
        return getWebsiteSchema();
      case 'manufacturer':
        return getManufacturerSchema();
      case 'breadcrumb':
        return getBreadcrumbSchema(data.items || []);
      default:
        return getOrganizationSchema();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema())
      }}
    />
  );
};

export default StructuredData;