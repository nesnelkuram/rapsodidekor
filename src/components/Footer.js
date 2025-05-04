import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Information */}
        <div className="mb-4 text-sm">
          <p className="font-semibold">RAPSODİ DEKORASYON AMBALAJ SAN. A.Ş.</p>
          <p>Subaşı, Fatma Sultan Cad., No:7/1, Posta Kodu: 34540 Çatalca – İSTANBUL</p>
          <p>
            Tel: <a href="tel:+902126830390" className="hover:text-white">(212) 683.03.90 (pbx)</a> | 
            Fax: (212) 683.03.91 | 
            Gsm: <a href="tel:+905327784107" className="hover:text-white">(532) 778.41.07</a>
          </p>
          <p>
            e-mail: <a href="mailto:rapsodi@rapsodidekor.com" className="hover:text-white">rapsodi@rapsodidekor.com</a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs">&copy; {currentYear} Rapsodi Dekor. All rights reserved.</p>
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
