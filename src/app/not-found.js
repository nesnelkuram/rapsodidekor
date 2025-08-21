'use client';

import { useLanguage } from '../i18n/LanguageContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const { t, locale } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const defaultTranslations = {
      tr: {
        title: '404 - Sayfa Bulunamadı',
        description: 'Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.',
        homeButton: 'Ana Sayfaya Dön',
        servicesButton: 'Hizmetlerimiz',
        contactButton: 'İletişim'
      },
      en: {
        title: '404 - Page Not Found',
        description: 'The page you are looking for does not exist or may have been removed.',
        homeButton: 'Back to Home',
        servicesButton: 'Our Services',
        contactButton: 'Contact'
      },
      de: {
        title: '404 - Seite nicht gefunden',
        description: 'Die gesuchte Seite existiert nicht oder wurde möglicherweise entfernt.',
        homeButton: 'Zurück zur Startseite',
        servicesButton: 'Unsere Dienstleistungen',
        contactButton: 'Kontakt'
      },
      fr: {
        title: '404 - Page non trouvée',
        description: 'La page que vous cherchez n\'existe pas ou a peut-être été supprimée.',
        homeButton: 'Retour à l\'accueil',
        servicesButton: 'Nos Services',
        contactButton: 'Contact'
      },
      es: {
        title: '404 - Página no encontrada',
        description: 'La página que buscas no existe o puede haber sido eliminada.',
        homeButton: 'Volver al inicio',
        servicesButton: 'Nuestros Servicios',
        contactButton: 'Contacto'
      },
      it: {
        title: '404 - Pagina non trovata',
        description: 'La pagina che stai cercando non esiste o potrebbe essere stata rimossa.',
        homeButton: 'Torna alla Home',
        servicesButton: 'I Nostri Servizi',
        contactButton: 'Contatto'
      },
      ru: {
        title: '404 - Страница не найдена',
        description: 'Страница, которую вы ищете, не существует или могла быть удалена.',
        homeButton: 'Вернуться на главную',
        servicesButton: 'Наши услуги',
        contactButton: 'Контакты'
      },
      zh: {
        title: '404 - 页面未找到',
        description: '您寻找的页面不存在或可能已被删除。',
        homeButton: '返回首页',
        servicesButton: '我们的服务',
        contactButton: '联系我们'
      }
    };

    setTranslations(defaultTranslations[locale] || defaultTranslations['tr']);
  }, [locale]);

  const getLocalizedPath = (path) => {
    if (locale === 'tr') return path;
    return `/${locale}${path}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-lg mx-auto text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {translations.title || '404 - Sayfa Bulunamadı'}
          </h2>
          <p className="text-gray-600 mb-8">
            {translations.description || 'Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.'}
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href={getLocalizedPath('/')}
            className="inline-block w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            {translations.homeButton || 'Ana Sayfaya Dön'}
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={getLocalizedPath('/services/silk-screen-printing')}
              className="inline-block px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
            >
              {translations.servicesButton || 'Hizmetlerimiz'}
            </Link>
            
            <Link 
              href={getLocalizedPath('/contact-us')}
              className="inline-block px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
            >
              {translations.contactButton || 'İletişim'}
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <svg className="mx-auto h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.464-.881-6.08-2.33"/>
          </svg>
        </div>
      </div>
    </div>
  );
}