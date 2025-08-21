import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HreflangTags from "../components/HreflangTags";
import CanonicalTag from "../components/CanonicalTag";
import WebVitals from "../components/WebVitals";
import { LanguageProvider } from "../i18n/LanguageContext";
import LanguageWrapper from "../components/LanguageWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rapsodi Dekor - Cam Ambalaj Dekorasyon Çözümleri",
  description: "Rapsodi Dekor, 1950'den beri cam ve plastik ambalajlar için yenilikçi baskı ve dekorasyon çözümleri sunar. Uzmanlık ve yaratıcılıkla markanız parlasın.",
  keywords: "cam dekorasyon, serigrafi baskı, hot foil stamping, değerli metal kaplama, ambalaj dekorasyon, cam baskı, Rapsodi Dekor",
  author: "Rapsodi Dekor",
  robots: "index, follow",
  verification: {
    google: "ckqoA1ge77U-z5GWrdK5lblk8Eu4wPwi-A_c9iBm2UI",
  },
  openGraph: {
    title: "Rapsodi Dekor - Cam Ambalaj Dekorasyon Uzmanları",
    description: "70 yıllık deneyimle cam dekorasyon çözümleri. Serigrafi, hot foil, değerli metal uygulamaları.",
    url: "https://rapsodidekor.com",
    siteName: "Rapsodi Dekor",
    images: [
      {
        url: "https://rapsodidekor.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rapsodi Dekor - Cam Dekorasyon Örnekleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapsodi Dekor - Cam Ambalaj Dekorasyon Uzmanları",
    description: "70 yıllık deneyimle cam dekorasyon çözümleri. Serigrafi, hot foil, değerli metal uygulamaları.",
    images: ["https://rapsodidekor.com/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="has-menu" style={{margin: 0, padding: 0}}>
        <LanguageProvider>
          <LanguageWrapper>
            <HreflangTags />
            <CanonicalTag />
            <Header />
            <main style={{margin: 0, padding: 0, overflow: 'visible'}}>{children}</main>
            <Footer />
          </LanguageWrapper>
        </LanguageProvider>
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
        <WebVitals />
      </body>
    </html>
  );
}
