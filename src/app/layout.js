import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning={true} className="has-menu" style={{margin: 0, padding: 0}}>
        <Header />
        <main style={{margin: 0, padding: 0, overflow: 'visible'}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
