'use client'; // Mark this component as a Client Component

import { motion } from 'framer-motion';

export default function AnimatedElement({ children, className, disableTranslate = false }) {
  return (
    <motion.div
      initial={ disableTranslate ? { opacity: 0 } : { opacity: 0, y: 50 }} // Başlangıç durumu: görünmez ve biraz aşağıda
      whileInView={ disableTranslate ? { opacity: 1 } : { opacity: 1, y: 0 }} // Görüş alanına girdiğindeki durum: görünür ve orijinal konumunda
      viewport={{ once: true, amount: 0.2 }} // Animasyon bir kez tetiklensin, elementin %20'si görününce
      transition={{ duration: 0.6, ease: "easeOut" }} // Animasyon süresi ve yumuşatma efekti
      className={className} // Ekstra sınıflar için prop
    >
      {children}
    </motion.div>
  );
}
