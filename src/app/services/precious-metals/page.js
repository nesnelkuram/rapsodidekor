'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export default function PreciousMetalsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/precious.jpg" // Image from homepage showcase
          alt="Precious Metals application example"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            {t('serviceDetails.preciousMetals.title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">{t('serviceDetails.preciousMetals.subtitle')}</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p>{t('serviceDetails.preciousMetals.description')}</p>
          </div>
        </div>
      </section>
    </>
  );
}