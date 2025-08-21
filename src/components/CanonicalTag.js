'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const CanonicalTag = () => {
  const { locale } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    // Remove existing canonical tags
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Construct canonical URL
    const baseUrl = 'https://rapsodidekor.com';
    let canonicalUrl;

    // For Turkish (default), don't add language prefix
    if (locale === 'tr') {
      canonicalUrl = `${baseUrl}${pathname}`;
    } else {
      // For other languages, add language prefix
      // Remove existing language prefix if present to avoid duplication
      const cleanPath = pathname.startsWith(`/${locale}`) 
        ? pathname.substring(`/${locale}`.length) || '/'
        : pathname;
      canonicalUrl = `${baseUrl}/${locale}${cleanPath}`;
    }

    // Create and add canonical tag
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    document.head.appendChild(canonicalLink);

    // Cleanup function
    return () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.remove();
      }
    };
  }, [locale, pathname]);

  return null; // This component doesn't render anything visible
};

export default CanonicalTag;