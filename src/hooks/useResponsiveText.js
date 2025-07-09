'use client';

import { useEffect, useState, useRef } from 'react';

export function useResponsiveText(text, baseSize = 'text-4xl', options = {}) {
  const [fontSize, setFontSize] = useState(baseSize);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const sizeMap = {
    'text-6xl': ['text-6xl', 'text-5xl', 'text-4xl', 'text-3xl', 'text-2xl'],
    'text-5xl': ['text-5xl', 'text-4xl', 'text-3xl', 'text-2xl', 'text-xl'],
    'text-4xl': ['text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg'],
    'text-3xl': ['text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base'],
  };

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !text) return;

    const checkTextFit = () => {
      const container = containerRef.current;
      const textElement = textRef.current;
      
      if (!container || !textElement) return;

      const containerWidth = container.offsetWidth;
      const sizes = sizeMap[baseSize] || sizeMap['text-4xl'];
      
      // Reset to base size first
      textElement.className = textElement.className.replace(/text-\w+/g, sizes[0]);
      
      // Check if text fits in one line
      let currentSizeIndex = 0;
      while (currentSizeIndex < sizes.length - 1) {
        const textWidth = textElement.scrollWidth;
        const textHeight = textElement.scrollHeight;
        const lineHeight = parseInt(window.getComputedStyle(textElement).lineHeight);
        
        // If text is wrapping (height > line height), try smaller size
        if (textHeight > lineHeight * 1.5 || textWidth > containerWidth * 0.95) {
          currentSizeIndex++;
          textElement.className = textElement.className.replace(/text-\w+/g, sizes[currentSizeIndex]);
        } else {
          break;
        }
      }
      
      setFontSize(sizes[currentSizeIndex]);
    };

    // Check on mount and when text changes
    checkTextFit();
    
    // Check on window resize
    const handleResize = () => checkTextFit();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [text, baseSize]);

  return { fontSize, containerRef, textRef };
}

// Alternative approach using character count
export function getAdaptiveTextSize(text, baseSize = 'text-4xl', breakpoints = {}) {
  const length = text?.length || 0;
  
  const defaultBreakpoints = {
    'text-6xl': { 20: 'text-6xl', 30: 'text-5xl', 40: 'text-4xl', 50: 'text-3xl', 60: 'text-2xl' },
    'text-5xl': { 25: 'text-5xl', 35: 'text-4xl', 45: 'text-3xl', 55: 'text-2xl', 65: 'text-xl' },
    'text-4xl': { 30: 'text-4xl', 40: 'text-3xl', 50: 'text-2xl', 60: 'text-xl', 70: 'text-lg' },
    'text-3xl': { 35: 'text-3xl', 45: 'text-2xl', 55: 'text-xl', 65: 'text-lg', 75: 'text-base' },
  };
  
  const breaks = breakpoints[baseSize] || defaultBreakpoints[baseSize] || defaultBreakpoints['text-4xl'];
  
  for (const [maxLength, size] of Object.entries(breaks).sort((a, b) => a[0] - b[0])) {
    if (length <= parseInt(maxLength)) {
      return size;
    }
  }
  
  return 'text-base'; // Fallback to smallest size
}