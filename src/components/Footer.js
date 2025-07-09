'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Information */}
        <div className="mb-4 text-sm">
          <p className="font-semibold">{t('footer.companyName')}</p>
          <p>{t('footer.address')}</p>
          <p>
            {t('footer.phone')}: <a href="tel:+902126830390" className="hover:text-white">(212) 683.03.90 (pbx)</a> | 
            {t('footer.fax')}: (212) 683.03.91 | 
            {t('footer.mobile')}: <a href="tel:+905327784107" className="hover:text-white">(532) 778.41.07</a>
          </p>
          <p>
            {t('footer.email')}: <a href="mailto:rapsodi@rapsodidekor.com" className="hover:text-white">rapsodi@rapsodidekor.com</a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs">{t('footer.copyright').replace('{year}', currentYear)}</p>
        {/* Example links (optional) */}
        {/* <div className="mt-4">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</Link>
        </div> */}
      </div>
    </footer>
  );
}
