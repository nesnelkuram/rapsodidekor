'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated SVG icon definitions (Professional Line Style)
const icons = [
  // Wine Glass (Thinner Line Style)
  <svg key="wine-glass-pro" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8M12 14v8M12 14a6 6 0 0 0 6-6H6a6 6 0 0 0 6 6Z"/></svg>,
  // Perfume Bottle (Thinner Line Style)
  <svg key="perfume-pro" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4v2M7 9h10M8 21h8M12 18v3M5 9l1.8-4.2A2 2 0 0 1 8.5 4h7a2 2 0 0 1 1.7 1.8L19 9H5Z"/></svg>,
  // Cosmetic Jar (Thinner Line Style)
  <svg key="cosmetic-jar-pro" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16M6 8v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M8.5 4h7A2.5 2.5 0 0 1 18 6.5V8H6V6.5A2.5 2.5 0 0 1 8.5 4Z"/></svg>
];

const RotatingIcon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2500); // İkonu her 2.5 saniyede bir değiştir

    return () => clearInterval(intervalId); // Component unmount olduğunda interval'ı temizle
  }, []);

  return (
    <div className="mx-auto mb-6 h-10 w-10 flex items-center justify-center text-gray-500">
      {/* AnimatePresence ile ikon geçişlerini yumuşatalım */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} // Anahtarın değişmesi animasyonu tetikler
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          {icons[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingIcon;
