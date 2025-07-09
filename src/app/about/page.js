'use client';

import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutUsPage() {
  const { t } = useLanguage();
  return (
    <>
      {/* Simple Header Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t('about.intro')}
            </p>
          </div>

          {/* Activity Areas */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              {t('about.activityAreas.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('about.activityAreas.content')}
            </p>
          </div>

          {/* Sectoral Services */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              {t('about.sectoralServices.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('about.sectoralServices.content')}
            </p>
          </div>

          {/* Quality Approach */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              {t('about.qualityApproach.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('about.qualityApproach.content')}
            </p>
          </div>

          {/* Sustainability */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              {t('about.sustainability.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('about.sustainability.content')}
            </p>
          </div>

          {/* Export and Global Service */}
          <div className="mb-16 bg-[#C7092C]/5 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              {t('about.exportGlobal.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('about.exportGlobal.paragraph1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('about.exportGlobal.paragraph2')}
            </p>
          </div>

          {/* Corporate Values */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              {t('about.corporateValues.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('about.corporateValues.content')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
