'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { i18n } from './config';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(i18n.defaultLocale);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Get saved language from localStorage
    const savedLocale = localStorage.getItem('locale') || i18n.defaultLocale;
    setLocale(savedLocale);
    loadTranslations(savedLocale);
  }, []);

  const loadTranslations = async (locale) => {
    try {
      const translationModule = await import(`./locales/${locale}/common.json`);
      setTranslations(translationModule.default);
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English
      const fallbackModule = await import('./locales/en/common.json');
      setTranslations(fallbackModule.default);
    }
  };

  const changeLanguage = async (newLocale) => {
    if (i18n.locales.includes(newLocale)) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
      await loadTranslations(newLocale);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};