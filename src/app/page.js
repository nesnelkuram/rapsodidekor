'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link"; 
import AnimatedElement from "@/components/AnimatedElement"; 
import RotatingIcon from '@/components/RotatingIcon'; 
import Counter from '@/components/Counter'; 
import FactsCounter from '@/components/FactsCounter';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingObjects from '@/components/FloatingObjects';
import StickyScrollSection from '@/components/StickyScrollSection';

// Placeholder Play Icon SVG
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
  </svg>
);

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const traditionRef = useRef(null);
  const objectsRef = useRef(null);
  const titleRef = useRef(null);
  const elevateRef = useRef(null); // Ref for Elevate section
  
  // Kaydırma pozisyonuna göre başlık boyutu değişimi için
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["-0.2 1", "1.2 1"] // Başlık görünür olmadan biraz önce başla, tamamen görünmez olana kadar devam et
  });
  
  // Kaydırma ilerledikçe başlık boyutu azalır (1.3'ten 0.8'e kadar)
  const titleScale = useTransform(scrollYProgress, [0, 1], [1.3, 0.8]);

  // Framer Motion scroll effect for tradition section background
  const { scrollYProgress: traditionScrollYProgress } = useScroll({
    target: traditionRef,
    offset: ["start end", "end start"] // Section enters viewport bottom, leaves viewport top
  });

  // Move background up as section scrolls (-20% offset at full scroll)
  const parallaxOffset = useTransform(traditionScrollYProgress, [0, 1], ["0%", "-20%"]);

  // Animate small glass bottle slightly upwards as section scrolls
  const glassBottleTranslateY = useTransform(traditionScrollYProgress, [0, 1], ["0%", "-10%"]);

  // Framer Motion scroll effect for Elevate Your Packaging section content
  const { scrollYProgress: elevateScrollYProgress } = useScroll({
    target: elevateRef,
    offset: ["start end", "end start"] // Section enters viewport bottom, leaves viewport top
  });

  // Move Elevate section content up slightly as section scrolls
  const elevateContentTranslateY = useTransform(elevateScrollYProgress, [0, 1], ["0%", "-10%"]);

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
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4" 
              style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
            >
              Exquisite Glass Decoration for Your Packaging
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              Transforming glass into captivating packaging solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/services"
                className="border border-white text-white font-bold py-3 px-6 rounded transition duration-300 no-underline hover:bg-white hover:text-black"
              >
                Discover Our Services
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedElement>

      {/* === About Us / Tradition Section (Parallax) === */}
      <AnimatedElement>
        <motion.div 
          ref={traditionRef} 
          className="relative h-[300vh] text-white tradition-section bg-gray-900"
        >
          {/* Silver.png floating element (Parallax) */}
          <motion.div 
            className="absolute -left-[25%] top-1/3 z-5" 
            style={{ 
              width: '900px',
              height: '720px',
              backgroundImage: `url(/images/silver.png)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              y: parallaxOffset,
              rotate: '30deg', 
              transition: 'transform 0.1s ease-out', 
              opacity: 1, 
            }}
          />
          
          {/* Yeni Raki image (Parallax) */}
          <motion.div 
            className="absolute -right-[25%] top-2/3 z-5" 
            style={{ 
              width: '900px',
              height: '720px',
              backgroundImage: `url(/images/yeni-raki-taste-of-turkey.webp)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              y: parallaxOffset, 
              rotate: '-30deg', 
              transition: 'transform 0.1s ease-out', 
              opacity: 1, 
            }}
          />
          
          {/* Small fixed glass object on left side (Animated) */}
          <motion.div 
            className="absolute left-[10%] top-1/3 z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            style={{
              backgroundImage: `url(/images/floating-objects/glass-bottle-3.png)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.9,
              rotate: '15deg', 
              y: glassBottleTranslateY
            }}
          />
          
          {/* Sticky container */}
          <div className="sticky top-0 h-screen">
            {/* Content container */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full p-8 md:p-16">
              <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto mb-12">
                  <RotatingIcon />
                <motion.h2 
                  ref={titleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-habor text-[#E9C883]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ scale: titleScale }}
                >
                  A Tradition of Innovation in Glass Decoration
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Since 1950, RAPSODİ DEKOR has been at the forefront of glass decoration techniques, combining traditional craftsmanship with cutting-edge technology to create stunning packaging solutions for premium brands across diverse industries.
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                <div className="fact-item">
                  <Counter targetValue={10000} className="block text-5xl font-bold text-[#E9C883] mb-2" />
                  <span className="block text-base text-gray-300 uppercase tracking-wider">m² Production Area</span>
                </div>
                <div className="fact-item">
                  <span className="block text-5xl font-bold text-[#E9C883] mb-2">
                    <Counter targetValue={450} className="inline" />+
                  </span>
                  <span className="block text-base text-gray-300 uppercase tracking-wider">Specialist Team</span>
                </div>
                <div className="fact-item">
                  <Counter targetValue={120000} className="block text-5xl font-bold text-[#E9C883] mb-2" />
                  <span className="block text-base text-gray-300 uppercase tracking-wider">Daily Printing</span>
                </div>
                <div className="fact-item">
                  <Counter targetValue={150000} className="block text-5xl font-bold text-[#E9C883] mb-2" />
                  <span className="block text-base text-gray-300 uppercase tracking-wider">Daily Painting</span>
                </div>
                <div className="fact-item">
                  <span className="block text-5xl font-bold text-[#E9C883] mb-2">1950</span>
                  <span className="block text-base text-gray-300 uppercase tracking-wider">Since</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div> 
      </AnimatedElement>

      {/* === Elevate Your Packaging Section === */}
      <motion.section 
        ref={elevateRef} 
        className="pt-32 pb-24 bg-[#2563eb]"
      >
        <motion.div style={{ y: elevateContentTranslateY }}> 
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-6xl md:text-8xl font-bold text-white mb-6" 
                  style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block"
                  >
                    ELEVATE
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="block"
                  >
                    YOUR PACKAGING
                  </motion.span>
                </motion.h2>
              </div>
              <div className="text-white">
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl mb-8"
                >
                  Bring your packaging to life with our premium decoration solutions. Get in touch today for a personalized consultation.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Link
                    href="/contact-us"
                    className="inline-block px-10 py-3 border border-white text-white font-semibold tracking-wider hover:bg-white hover:text-[#2563eb] transition duration-300"
                  >
                    REQUEST A QUOTE
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

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
               <motion.h2 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-5xl font-bold mb-4 text-white" 
                 style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
               >
                 Mastering the Art of Silk Screen
               </motion.h2>
               <motion.p 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="text-lg text-white"
               >
                 Discover the precision and vibrancy of silk screen printing. Our advanced techniques bring your designs to life on a variety of surfaces including glass, plastic, and metal, offering durability and unparalleled visual appeal for every product. Elevate your brand with bespoke decoration that stands out.
               </motion.p>

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="mt-6 flex items-center space-x-4"
               >
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
               </motion.div>
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
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-3" 
                    style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                  >
                    Hot-Foil Stamping
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-5 text-gray-200"
                  >
                    Adding metallic or colored foils for a premium, eye-catching look.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Link 
                      href="/services/hot-foil-stamping"
                      className="inline-block px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Mini Showcase 2: Precious Metals Application */}
              <div 
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                style={{ backgroundImage: 'url(/images/precious.jpg)' }} 
              >
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right"> 
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-3" 
                    style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                  >
                    Precious Metals
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-5 text-gray-200"
                  >
                    Enhance your products with genuine gold or platinum details for ultimate luxury.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Link 
                      href="/services/precious-metals"
                      className="inline-block px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* === Additional Techniques Showcase Section === */}
      <AnimatedElement>
        <section className="py-10 bg-white -mt-16">
          <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {/* Showcase 1: Organic Painting */}
              <div
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group"
                style={{ backgroundImage: 'url(/images/organicpaint.jpg)' }} // Updated image
              >
                {/* Sağdan sola siyah gradyan */}
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-3" 
                    style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                  >
                    Organic Painting
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 text-gray-200 text-sm"
                  >
                    Eco-friendly painting solutions for vibrant finishes.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Link
                      href="/services/organic-painting"
                      className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Showcase 2: Metalized Printing */}
               <div
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group"
                style={{ backgroundImage: 'url(/images/metalize.jpg)' }} // Corrected filename
              >
                {/* Sağdan sola siyah gradyan */}
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-3" 
                    style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                  >
                    Metalized Printing
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 text-gray-200 text-sm"
                  >
                    Achieve stunning metallic effects on various surfaces.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Link
                      href="/services/metalized-printing"
                      className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Showcase 3: Masking */}
               <div
                className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group"
                style={{ backgroundImage: 'url(/images/mask.jpg)' }} // Updated image
              >
                {/* Sağdan sola siyah gradyan */}
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                <div className="relative z-10 text-white ml-auto md:w-1/2 text-right">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-3" 
                    style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                  >
                    Masking
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 text-gray-200 text-sm"
                  >
                    Precision techniques for multi-color or textured designs.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Link
                      href="/services/masking"
                      className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </AnimatedElement>

      
    </>
  );
}
