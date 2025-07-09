"use client";

import ContactForm from '@/components/ContactForm';
import './styles.css';

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video 
            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/videos/rapfab.webm" type="video/webm" />
            <source src="/videos/rapfab.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay for better text visibility */}
        <div 
          className="absolute inset-0 z-1"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />

        
        {/* Content */}
        <div className="container relative mx-auto px-4 text-center" style={{ zIndex: 10, position: 'relative' }}>
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" 
            style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
          >
            Contact Us
          </h1>
          <p className="mt-2 text-xl text-white max-w-xl mx-auto drop-shadow-lg">We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">GET IN TOUCH</h2>
              <ContactForm />
            </div>
            
            {/* Right Side - Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">CONTACT INFORMATION</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#E9C883] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 uppercase text-sm">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+902126830390" className="hover:text-[#E9C883]">(212) 683.03.90</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#E9C883] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 uppercase text-sm">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:rapsodi@rapsodidekor.com" className="hover:text-[#E9C883]">rapsodi@rapsodidekor.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#E9C883] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-800 uppercase text-sm">Address</h3>
                    <p className="text-gray-600">
                      RAPSODİ DEKORASYON AMBALAJ SAN. A.Ş.<br />
                      Subaşı Mah., Fatma Sultan Cad., No:7/1,<br />
                      34540 Çatalca – İSTANBUL
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-800 mb-4">BUSINESS HOURS</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 uppercase text-xs mb-2">Monday - Friday</h4>
                    <p className="text-gray-600">9:00 am - 6:00 pm</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 uppercase text-xs mb-2">Saturday</h4>
                    <p className="text-gray-600">9:00 am - 1:00 pm</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 uppercase text-xs mb-2">Sunday</h4>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Below */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.600164476501!2d28.47097317658642!3d41.20921010705741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b510f798c42751%3A0xc3f4f5b3b8e762f4!2sRapsodi%20Dekorasyon%20Ambalaj%20Sanayi%20A.%C5%9E.!5e0!3m2!1sen!2str!4v1714848877509!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rapsodi Dekor Location Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}