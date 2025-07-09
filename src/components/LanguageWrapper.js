'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useEffect } from 'react';

export default function LanguageWrapper({ children }) {
  const { locale } = useLanguage();

  useEffect(() => {
    // Update html lang attribute when language changes
    document.documentElement.lang = locale;
  }, [locale]);

  return children;
}