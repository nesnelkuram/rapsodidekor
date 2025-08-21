'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const HreflangTags = () => {
  const { locale } = useLanguage();
  const pathname = usePathname();

  const languages = [
    { code: 'tr', region: 'TR', label: 'Turkish' },
    { code: 'en', region: 'US', label: 'English' },
    { code: 'de', region: 'DE', label: 'German' },
    { code: 'fr', region: 'FR', label: 'French' },
    { code: 'es', region: 'ES', label: 'Spanish' },
    { code: 'it', region: 'IT', label: 'Italian' },
    { code: 'ru', region: 'RU', label: 'Russian' },
    { code: 'zh', region: 'CN', label: 'Chinese' },
  ];

  useEffect(() => {
    // Remove existing hreflang tags
    const existingTags = document.querySelectorAll('link[rel="alternate"]');
    existingTags.forEach(tag => tag.remove());

    // Clean pathname - remove language prefix if present for proper URL construction
    let cleanPathname = pathname;
    languages.forEach(({ code }) => {
      if (pathname.startsWith(`/${code}/`)) {
        cleanPathname = pathname.substring(`/${code}`.length);
      } else if (pathname === `/${code}`) {
        cleanPathname = '/';
      }
    });

    // Add new hreflang tags
    languages.forEach(({ code, region }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = `${code}-${region}`;
      
      // Construct the URL based on language
      const baseUrl = 'https://rapsodidekor.com';
      if (code === 'tr') {
        // Turkish is default language, no language prefix
        link.href = `${baseUrl}${cleanPathname}`;
      } else {
        // Other languages have language prefix
        link.href = `${baseUrl}/${code}${cleanPathname}`;
      }
      
      document.head.appendChild(link);
    });

    // Add x-default hreflang for Turkish (default language)
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `https://rapsodidekor.com${cleanPathname}`;
    document.head.appendChild(defaultLink);

    // Cleanup function
    return () => {
      const tags = document.querySelectorAll('link[rel="alternate"]');
      tags.forEach(tag => tag.remove());
    };
  }, [locale, pathname]);

  return null; // This component doesn't render anything visible
};

export default HreflangTags;