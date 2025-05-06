'use client';

// StickyScrollSection.js - A reusable section that animates content as it scrolls

import { useRef, useEffect } from 'react';

export default function StickyScrollSection({ id, children, className = '' }) {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Ensure we're on client-side before accessing window object
    if (typeof window === 'undefined' || !sectionRef.current) return;
    
    // We'll use CSS for the sticky behavior, but add a scroll event handler
    // to track when objects should be moved
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Get section position data
      const rect = sectionRef.current.getBoundingClientRect();
      const sectTop = rect.top;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much the section has been scrolled
      // (0 when first at viewport top, increases as we scroll)
      const scrollProgress = Math.max(0, -sectTop / viewportHeight);
      
      // Update a CSS custom property to animate the floating objects
      sectionRef.current.style.setProperty('--scroll-progress', scrollProgress.toString());
      
      // When section is fully visible at the top of viewport, 
      // add a class to make it sticky
      if (sectTop <= 0 && -sectTop < rect.height) {
        sectionRef.current.classList.add('is-sticky');
      } else {
        sectionRef.current.classList.remove('is-sticky');
      }
    };
    
    // Call once to set initial state
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      id={id}
      ref={sectionRef}
      className={`${className} sticky-section`}
      style={{
        '--scroll-progress': 0,
        position: 'relative',
        zIndex: 1
      }}
    >
      {children}
    </div>
  );
}
