'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SilkScreenPrintingPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/silksscreen.jpg" // Updated path if needed
          alt="Silk Screen Printing process"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority // Load image eagerly
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            {t('serviceDetails.silkScreen.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">{t('serviceDetails.silkScreen.subtitle')}</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p><span className="font-semibold">{t('serviceDetails.silkScreen.glassProductLabel')}</span> {t('serviceDetails.silkScreen.glassProduct')}</p>
            <p><span className="font-semibold">{t('serviceDetails.silkScreen.plasticProductLabel')}</span> {t('serviceDetails.silkScreen.plasticProduct')}</p>
            <p>{t('serviceDetails.silkScreen.capabilities')}</p>
          </div>
        </div>
      </section>
    </>
  );
}