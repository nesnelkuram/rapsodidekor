import ContactForm from '@/components/ContactForm'; // Adjust path if needed

// Define metadata for SEO
export const metadata = {
  title: 'Contact Us | Rapsodi Dekor',
  description: 'Get in touch with Rapsodi Dekor. Find our contact details, send us a message via our contact form, or locate us on the map.',
};

export default function ContactUsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Contact Us
          </h1>
          <p className="mt-2 text-lg text-gray-600">We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Content Section - Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Information Column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Details</h2>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600 mt-1">
                  RAPSODİ DEKORASYON AMBALAJ SAN. A.Ş.<br />
                  Subaşı Mah., Fatma Sultan Cad., No:7/1,<br />
                  34540 Çatalca – İSTANBUL
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone & Fax</h3>
                <p className="text-gray-600 mt-1">
                  Tel: <a href="tel:+902126830390" className="hover:text-blue-700">(212) 683.03.90 (pbx)</a><br />
                  Fax: (212) 683.03.91<br />
                  Gsm: <a href="tel:+905327784107" className="hover:text-blue-700">(532) 778.41.07</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:rapsodi@rapsodidekor.com" className="hover:text-blue-700">rapsodi@rapsodidekor.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form Column */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="pb-16 md:pb-24">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">Find Us Here</h2>
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
