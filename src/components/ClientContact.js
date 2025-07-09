"use client";

import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ClientContact() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/videos/rapsodi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        
        {/* Content */}
        <div className="container relative mx-auto px-4 text-center z-20">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" 
            style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
          >
            {t('contact.title')}
          </h1>
          <p className="mt-2 text-xl text-white max-w-xl mx-auto drop-shadow-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Content Section - Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Information Column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('contact.ourContactDetails')}</h2>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{t('contact.address')}</h3>
                <p className="text-gray-600 mt-1">
                  RAPSODİ DEKORASYON AMBALAJ SAN. A.Ş.<br />
                  Subaşı Mah., Fatma Sultan Cad., No:7/1,<br />
                  34540 Çatalca – İSTANBUL
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{t('contact.phoneAndFax')}</h3>
                <p className="text-gray-600 mt-1">
                  Tel: <a href="tel:+902126830390" className="hover:text-blue-700">(212) 683.03.90 (pbx)</a><br />
                  Fax: (212) 683.03.91<br />
                  Gsm: <a href="tel:+905327784107" className="hover:text-blue-700">(532) 778.41.07</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{t('contact.email')}</h3>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:rapsodi@rapsodidekor.com" className="hover:text-blue-700">rapsodi@rapsodidekor.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form Column */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('contact.sendUsMessage')}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="pb-16 md:pb-24">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">{t('contact.findUsHere')}</h2>
             <div className="aspect-w-16 aspect-h-9"> {/* Responsive map container */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.600164476501!2d28.47097317658642!3d41.20921010705741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b510f798c42751%3A0xc3f4f5b3b8e762f4!2sRapsodi%20Dekorasyon%20Ambalaj%20Sanayi%20A.%C5%9E.!5e0!3m2!1sen!2str!4v1714848877509!5m2!1sen!2str"
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rapsodi Dekor Location Map"
                    className="w-full h-full rounded-md shadow-md"
                ></iframe>
             </div>
         </div>
      </section>
    </>
  );
}
