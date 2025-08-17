'use client';

import { useEffect } from 'react';

const WebVitals = () => {
  useEffect(() => {
    // Core Web Vitals tracking
    const trackWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Send to Google Analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Web Vitals',
                custom_parameter_1: entry.url || window.location.href,
              });
            }
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Browser doesn't support this API
        console.warn('LCP observation not supported');
      }

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fid = entry.processingStart - entry.startTime;
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fid),
                event_category: 'Web Vitals',
                custom_parameter_1: entry.name,
              });
            }
          }
        }
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observation not supported');
      }

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      let clsEntries = [];

      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            clsEntries.push(entry);
          }
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observation not supported');
      }

      // Send CLS on page unload
      const sendCLS = () => {
        if (window.gtag && clsValue > 0) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals',
            custom_parameter_1: clsEntries.length,
          });
        }
      };

      // Send metrics before page unload
      window.addEventListener('beforeunload', sendCLS);
      
      // Also send after 5 seconds for SPA navigation
      setTimeout(sendCLS, 5000);

      return () => {
        window.removeEventListener('beforeunload', sendCLS);
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    // Wait for Google Analytics to load
    const checkGA = () => {
      if (window.gtag) {
        trackWebVitals();
      } else {
        setTimeout(checkGA, 1000);
      }
    };

    checkGA();
  }, []);

  return null;
};

export default WebVitals;