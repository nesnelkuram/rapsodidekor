// src/components/Counter.js
'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// Format numbers (e.g., 10000 -> 10,000)
const formatter = new Intl.NumberFormat('en-US');

export default function Counter({ targetValue, end, prefix = '', suffix = '', duration = 1.5, className }) {
  // Support both 'targetValue' (original) and 'end' (new) prop for flexibility
  const finalValue = end !== undefined ? end : targetValue;
  
  const count = useMotionValue(0);
  // Round and format the counter
  const roundedAndFormatted = useTransform(count, (latest) => {
    return `${prefix}${formatter.format(Math.round(latest))}${suffix}`;
  });
  
  const ref = useRef(null);
  // Trigger when 50% of element is in view, only once
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && finalValue !== undefined) {
      // Start counter when element enters viewport
      animate(count, finalValue, { duration: duration, ease: "easeOut" });
    }
  }, [isInView, count, finalValue, duration]);

  // Apply styles and reference to motion.span
  return <motion.span ref={ref} className={className}>{roundedAndFormatted}</motion.span>;
}
