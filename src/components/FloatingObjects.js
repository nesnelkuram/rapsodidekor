'use client';

// FloatingObjects.js - Provides animated floating objects that move based on scroll

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Main floating objects component with scroll-based animation
export default function FloatingObjects() {
  // Objects configuration
  const floatingItems = [
    {
      id: 1,
      path: '/images/floating-objects/glass-bottle-1.png',
      initialY: 500, // Start below the viewport
      finalY: -200,  // End above the viewport
      x: '10%',
      size: 120,
      delay: 0,
    },
    {
      id: 2,
      path: '/images/floating-objects/glass-bottle-2.png',
      initialY: 700,
      finalY: -300,
      x: '30%',
      size: 100,
      delay: 0.1,
    },
    {
      id: 3,
      path: '/images/floating-objects/glass-1.png',
      initialY: 600,
      finalY: -250,
      x: '60%',
      size: 80,
      delay: 0.2,
    },
    {
      id: 4,
      path: '/images/floating-objects/glass-bottle-3.png',
      initialY: 550,
      finalY: -150,
      x: '80%',
      size: 150,
      delay: 0.1,
    },
    {
      id: 5,
      path: '/images/floating-objects/glass-2.png',
      initialY: 800,
      finalY: -400,
      x: '20%',
      size: 110,
      delay: 0.3,
    },
    {
      id: 6,
      path: '/images/floating-objects/glass-bottle-4.png',
      initialY: 650,
      finalY: -350,
      x: '70%',
      size: 90,
      delay: 0.2,
    },
    // You can add more items as needed
  ];

  // Fallback for images that don't exist yet
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    // In a real scenario, you would check if the actual images exist
    // For now, we'll set this to true after a delay to simulate loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Replace these paths with placeholder images that will definitely work
  const placeholderImages = [
    '/images/hotfoil.jpg',
    '/images/precious.jpg',
    '/images/organicpaint.jpg',
    '/images/metalize.jpg',
    '/images/mask.jpg',
    '/images/silksscreen.jpg'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render floating objects */}
      {imagesLoaded ? (
        floatingItems.map((item) => (
          <div
            key={item.id}
            className="absolute opacity-30 transition-all duration-1000 ease-in-out floating-object"
            style={{
              left: item.x,
              bottom: `calc(-${item.initialY}px + var(--scroll-progress, 0) * ${item.initialY + item.finalY}px)`,
              width: item.size,
              height: item.size,
              transitionDelay: `${item.delay}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <div 
              className="w-full h-full relative rounded-full bg-gray-300"
              style={{
                backgroundImage: `url(${item.path})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        ))
      ) : (
        // Render placeholder circles until images are loaded
        placeholderImages.slice(0, floatingItems.length).map((img, index) => {
          const item = floatingItems[index];
          return (
            <div
              key={`placeholder-${index}`}
              className="absolute opacity-30 transition-all duration-1000 ease-in-out floating-object"
              style={{
                left: item.x,
                bottom: `calc(-${item.initialY}px + var(--scroll-progress, 0) * ${item.initialY + item.finalY}px)`,
                width: item.size,
                height: item.size,
                transitionDelay: `${item.delay}s`,
                animationDelay: `${item.delay}s`,
              }}
            >
              <div 
                className="w-full h-full relative rounded-full overflow-hidden"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
