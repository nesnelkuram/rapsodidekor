// src/components/Counter.js
'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// Sayıları formatlamak için (örneğin 10000 -> 10,000)
const formatter = new Intl.NumberFormat('en-US');

export default function Counter({ targetValue, duration = 1.5, className }) {
  const count = useMotionValue(0);
  // Sayacı yuvarla ve formatla
  const roundedAndFormatted = useTransform(count, (latest) => formatter.format(Math.round(latest)));
  const ref = useRef(null);
  // Elementin %50'si göründüğünde tetikle, sadece bir kez
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      // Ekrana girdiğinde sayacı başlat
      animate(count, targetValue, { duration: duration, ease: "easeOut" });
    }
  }, [isInView, count, targetValue, duration]);

  // Stilleri ve referansı motion.span'a uygula
  return <motion.span ref={ref} className={className}>{roundedAndFormatted}</motion.span>;
}
