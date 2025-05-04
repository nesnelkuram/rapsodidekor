'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 
import AnimatedElement from "@/components/AnimatedElement"; 
import RotatingIcon from '@/components/RotatingIcon'; 
import Counter from '@/components/Counter'; 

// Placeholder Play Icon SVG
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
  </svg>
);

export default function Home() {
  const [showVideo, setShowVideo] = useState(false); 

  const handleWatchVideoClick = () => {
    setShowVideo(true); 
  };

  return (
    <>
      {/* === Hero Section === */}
      <AnimatedElement>
        <section className="relative h-[95vh] flex items-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/bg2.webm" type="video/webm" />
            <source src="/videos/bg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 to-transparent to-[50%] z-10"></div>
          <div className="relative z-20 md:w-1/2 md:ml-[5%] px-4 text-white text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
              Exquisite Glass Decoration for Your Packaging
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transforming glass into captivating packaging solutions.
            </p>
            <Link 
              href="/services"
              className="border border-white text-white font-bold py-3 px-6 rounded transition duration-300 no-underline hover:bg-white hover:text-black"
            >
              Discover Our Services
            </Link>
          </div>
        </section>
      </AnimatedElement>

      {/* === About Us / Tradition Section === */}
      <AnimatedElement>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto mb-12">
              <RotatingIcon />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
                A Tradition of Innovation in Glass Decoration
              </h2>
              <p className="text-lg text-gray-600">
                Since the 1950s, RAPSODİ DEKOR has been shaping the future of glass and plastic packaging with cutting-edge printing and decorative solutions. Where expertise meets creativity, brands shine brighter.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="fact-item">
                <Counter targetValue={10000} className="block text-5xl font-bold text-gray-800 mb-2" />
                <span className="block text-base text-gray-600 uppercase tracking-wider">m² Production Area</span>
              </div>
              <div className="fact-item">
                <span className="block text-5xl font-bold text-gray-800 mb-2">
                  <Counter targetValue={450} className="inline" />+
                </span>
                <span className="block text-base text-gray-600 uppercase tracking-wider">Specialist Team</span>
              </div>
              <div className="fact-item">
                <Counter targetValue={3} className="block text-5xl font-bold text-gray-800 mb-2" />
                <span className="block text-base text-gray-600 uppercase tracking-wider">Generations of Expertise</span>
              </div>
              <div className="fact-item">
                <Counter targetValue={1950} className="block text-5xl font-bold text-gray-800 mb-2" />
                <span className="block text-base text-gray-600 uppercase tracking-wider">Since</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* === Silk Screen Showcase Section === */}
      <AnimatedElement>
        <section
          className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden" 
          style={!showVideo ? { backgroundImage: 'url(/images/silksscreen.jpg)' } : { backgroundColor: '#000' }} 
        >
          {showVideo && (
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0" 
              src="/videos/silk_screen_promo.mp4" 
              autoPlay
              loop
              muted
              playsInline 
            />
          )}

          <div className="absolute inset-y-0 right-0 w-1/2 flex items-center p-10 mr-16 z-10"> 
             <div> 
               <h2 className="text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
                 Mastering the Art of Silk Screen
               </h2>
               <p className="text-lg text-white">
                 Discover the precision and vibrancy of silk screen printing. Our advanced techniques bring your designs to life on a variety of surfaces including glass, plastic, and metal, offering durability and unparalleled visual appeal for every product. Elevate your brand with bespoke decoration that stands out.
               </p>

               <div className="mt-6 flex items-center space-x-4">
                 <Link
                   href="/services/silk-screen-printing"
                   className="inline-block px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                 >
                   Learn More
                 </Link>
                 <button
                   onClick={handleWatchVideoClick}
                   className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full text-white transition-colors duration-300"
                   aria-label="Watch video"
                 >
                   <PlayIcon /> 
                 </button>
               </div>
             </div>
           </div>
        </section>
      </AnimatedElement>

      {/* === Mini Showcases Section (Replaces Featured Services) === */}
      <AnimatedElement>
        <section className="py-10 bg-white">
          <div className="container mx-auto px-2"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"> 
              
              {/* Mini Showcase 1: Hot Foil Stamping */}
              <div 
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                style={{ backgroundImage: 'url(/images/hotfoil.jpg)' }} 
              >
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right"> 
                  <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>Hot-Foil Stamping</h3>
                  <p className="mb-5 text-gray-200">Adding metallic or colored foils for a premium, eye-catching look.</p>
                  <Link 
                    href="/services/hot-foil-stamping"
                    className="inline-block px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Mini Showcase 2: Precious Metals Application */}
              <div 
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                style={{ backgroundImage: 'url(/images/precious.jpg)' }} 
              >
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right"> 
                  <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>Precious Metals</h3>
                  <p className="mb-5 text-gray-200">Enhance your products with genuine gold or platinum details for ultimate luxury.</p>
                  <Link 
                    href="/services/precious-metals"
                    className="inline-block px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* === Additional Techniques Showcase Section === */}
      <AnimatedElement>
        <section className="py-10 bg-white">
          <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {/* Showcase 1: Organic Painting */}
              <div
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group"
                style={{ backgroundImage: 'url(/images/organicpaint.jpg)' }} // Updated image
              >
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right">
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>Organic Painting</h3>
                  <p className="mb-4 text-gray-200 text-sm">Eco-friendly painting solutions for vibrant finishes.</p>
                  <Link
                    href="/services/organic-painting" // Placeholder link
                    className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Showcase 2: Metalized Printing */}
               <div
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group"
                style={{ backgroundImage: 'url(/images/metalize.jpg)' }} // Updated image
              >
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right">
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>Metalized Printing</h3>
                  <p className="mb-4 text-gray-200 text-sm">Achieve stunning metallic effects on various surfaces.</p>
                  <Link
                    href="/services/metalized-printing" // Placeholder link
                     className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Showcase 3: Masking */}
               <div
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group"
                style={{ backgroundImage: 'url(/images/mask.jpg)' }} // Updated image
              >
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right">
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>Masking</h3>
                  <p className="mb-4 text-gray-200 text-sm">Precision techniques for multi-color or textured designs.</p>
                  <Link
                    href="/services/masking" // Placeholder link
                     className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedElement>

    </>
  );
}
