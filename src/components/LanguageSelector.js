'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/config';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSelector() {
  const { locale, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages[locale];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Select language"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-gray-900 bg-opacity-95 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => {
                  changeLanguage(code);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors duration-150 ${
                  locale === code ? 'bg-gray-800 text-[#E9C883]' : 'text-white'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {locale === code && (
                  <svg className="w-4 h-4 ml-auto text-[#E9C883]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}