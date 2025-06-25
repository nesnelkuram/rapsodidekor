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
import Lenis from '@studio-freight/lenis';

// Placeholder Play Icon SVG
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
  </svg>
);

// Hook to get window dimensions
const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set dimensions on mount
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
};

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const traditionRef = useRef(null);
  const objectsRef = useRef(null);
  const elevateRef = useRef(null); // Ref for Elevate section
  const clientsRef = useRef(null); // Ref for Clients section
  const [isMobile, setIsMobile] = useState(false);
  const { height } = useDimensions();
  
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Make lenis available globally for scroll functionality
    window.lenis = lenis;
    
    return () => {
      lenis.destroy();
    };
  }, []);
  
  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Function to handle smooth scroll to services section
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection && window.lenis) {
      window.lenis.scrollTo(servicesSection, {
        offset: -50,
        duration: 1.5
      });
    }
  };
  
  // Framer Motion scroll effect for tradition section
  const { scrollYProgress: traditionScrollYProgress } = useScroll({
    target: traditionRef,
    offset: ["start end", "end start"] // Starts when section enters viewport
  });

  // Parallax values - smooth continuous movement till the end
  const silverImageY = useTransform(
    traditionScrollYProgress, 
    [0.2, 0.95], 
    isMobile ? [0, -400] : [0, -700]  // Adjusted for mobile viewport
  );
  
  const rakiImageY = useTransform(
    traditionScrollYProgress, 
    [0.2, 0.95], 
    isMobile ? [150, -350] : [200, -600]  // Adjusted for mobile viewport
  );
  
  // Add opacity fade for bottles near the end for smoother transition
  const bottlesOpacity = useTransform(
    traditionScrollYProgress,
    [0.8, 0.95],
    [1, 0]  // Fade out bottles as section becomes unsticky
  );
  
  // Parallax effects for text content - more dramatic for title
  const titleOpacity = useTransform(traditionScrollYProgress, [0.05, 0.25], [0, 1]);
  const titleY = useTransform(traditionScrollYProgress, [0.05, 0.25], [100, 0]);
  const titleScale = useTransform(traditionScrollYProgress, [0.05, 0.3], [0.5, 1.1]); // Grows from 50% to 110%
  const titleLetterSpacing = useTransform(traditionScrollYProgress, [0.05, 0.3], ['-0.1em', '0.02em']); // Letter spacing effect
  const titleBlur = useTransform(traditionScrollYProgress, [0.05, 0.2], ['8px', '0px']); // Blur effect
  
  const descriptionOpacity = useTransform(traditionScrollYProgress, [0.15, 0.25], [0, 1]);
  const descriptionY = useTransform(traditionScrollYProgress, [0.15, 0.25], [50, 0]);
  
  // Sequential reveal for counter items
  const counter1Opacity = useTransform(traditionScrollYProgress, [0.15, 0.25], [0, 1]);
  const counter1Y = useTransform(traditionScrollYProgress, [0.15, 0.25], [40, 0]);
  
  const counter2Opacity = useTransform(traditionScrollYProgress, [0.18, 0.28], [0, 1]);
  const counter2Y = useTransform(traditionScrollYProgress, [0.18, 0.28], [40, 0]);
  
  const counter3Opacity = useTransform(traditionScrollYProgress, [0.21, 0.31], [0, 1]);
  const counter3Y = useTransform(traditionScrollYProgress, [0.21, 0.31], [40, 0]);
  
  const counter4Opacity = useTransform(traditionScrollYProgress, [0.24, 0.34], [0, 1]);
  const counter4Y = useTransform(traditionScrollYProgress, [0.24, 0.34], [40, 0]);
  
  const counter5Opacity = useTransform(traditionScrollYProgress, [0.27, 0.37], [0, 1]);
  const counter5Y = useTransform(traditionScrollYProgress, [0.27, 0.37], [40, 0]);
  

  // Framer Motion scroll effect for Elevate Your Packaging section content
  const { scrollYProgress: elevateScrollYProgress } = useScroll({
    target: elevateRef,
    offset: ["start end", "end start"] // Section enters viewport bottom, leaves viewport top
  });

  // Move Elevate section content up more as section scrolls (-30%)
  const elevateContentTranslateY = useTransform(elevateScrollYProgress, [0, 0.5], [0, -0.3]);

  // Framer Motion scroll effect for Clients section
  const { scrollYProgress: clientsScrollYProgress } = useScroll({
    target: clientsRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for clients section
  const clientsTitleOpacity = useTransform(clientsScrollYProgress, [0.1, 0.3], [0, 1]);
  const clientsTitleY = useTransform(clientsScrollYProgress, [0.1, 0.8], [100, -50]); // Continuous movement
  const clientsTitleScale = useTransform(clientsScrollYProgress, [0.1, 0.4], [0.6, 1.1]);
  
  // Staggered reveal for client logos with continuous parallax
  const clientsRow1Opacity = useTransform(clientsScrollYProgress, [0.05, 0.25], [0.3, 1]);
  const clientsRow1Y = useTransform(clientsScrollYProgress, [0.05, 0.9], [60, -30]); // Continuous upward movement
  const clientsRow1Scale = useTransform(clientsScrollYProgress, [0.05, 0.5], [0.9, 1.05]);
  
  const clientsRow2Opacity = useTransform(clientsScrollYProgress, [0.1, 0.3], [0.3, 1]);
  const clientsRow2Y = useTransform(clientsScrollYProgress, [0.1, 0.95], [60, -40]); // Continuous upward movement
  const clientsRow2Scale = useTransform(clientsScrollYProgress, [0.1, 0.6], [0.9, 1.05]);

  const handleWatchVideoClick = () => {
    setShowVideo(true); 
  };

  return (
    <>
      {/* === Hero Section === */}
      <AnimatedElement>
        <section className="relative h-screen flex items-center overflow-hidden" style={{marginTop: 0, paddingTop: 0}}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            style={{objectFit: 'cover', marginTop: 0, paddingTop: 0}}
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
              <button 
                onClick={handleScrollToServices}
                className="border border-white text-white font-bold py-3 px-6 rounded transition duration-300 no-underline hover:bg-white hover:text-black cursor-pointer"
              >
                Discover Our Services
              </button>
            </motion.div>
          </div>
        </section>
      </AnimatedElement>

      {/* === About Us / Tradition Section (Parallax) === */}
      <section ref={traditionRef} className="relative tradition-section" style={{ height: '300vh', backgroundColor: '#111827' }}>
        <div className="sticky top-0 w-full h-screen bg-gray-900">
          <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
              <div className="container mx-auto px-4 text-center relative z-30">
                <div className="max-w-3xl mx-auto mb-12">
                  <RotatingIcon />
                  <div className="relative overflow-hidden" style={{ paddingBottom: '20px' }}>
                    <motion.h2 
                      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold leading-tight"
                      style={{ 
                        fontFamily: 'HaboroContrastNormRegular, sans-serif',
                        opacity: titleOpacity,
                        y: titleY,
                        scale: titleScale,
                        letterSpacing: titleLetterSpacing,
                        filter: `blur(${titleBlur})`,
                        transformOrigin: 'center bottom',
                        willChange: 'transform, opacity, filter',
                        backfaceVisibility: 'hidden',
                        perspective: '1000px'
                      }}
                    >
                      A Tradition of Innovation<br className="hidden lg:block" />
                      in Glass Decoration
                    </motion.h2>
                  </div>
                  <motion.p 
                    className="text-gray-300 mb-8"
                    style={{
                      opacity: descriptionOpacity,
                      y: descriptionY
                    }}
                  >
                    Since 1950, RAPSODİ DEKOR has been at the forefront of glass decoration techniques, combining traditional craftsmanship with cutting-edge technology to create stunning packaging solutions for premium brands across diverse industries.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto">
                  <motion.div 
                    className="fact-item"
                    style={{
                      opacity: counter1Opacity,
                      y: counter1Y
                    }}
                  >
                    <Counter targetValue={10000} className="block text-5xl font-bold text-gold mb-2" />
                    <span className="block text-base text-gray-300 uppercase tracking-wider">m² Production Area</span>
                  </motion.div>
                  <motion.div 
                    className="fact-item"
                    style={{
                      opacity: counter2Opacity,
                      y: counter2Y
                    }}
                  >
                    <span className="block text-5xl font-bold text-gold mb-2">
                      <Counter targetValue={450} className="inline text-gold" />+
                    </span>
                    <span className="block text-base text-gray-300 uppercase tracking-wider">Specialist Team</span>
                  </motion.div>
                  <motion.div 
                    className="fact-item"
                    style={{
                      opacity: counter3Opacity,
                      y: counter3Y
                    }}
                  >
                    <Counter targetValue={120000} className="block text-5xl font-bold text-gold mb-2" />
                    <span className="block text-base text-gray-300 uppercase tracking-wider">Daily Printing</span>
                  </motion.div>
                  <motion.div 
                    className="fact-item"
                    style={{
                      opacity: counter4Opacity,
                      y: counter4Y
                    }}
                  >
                    <Counter targetValue={150000} className="block text-5xl font-bold text-gold mb-2" />
                    <span className="block text-base text-gray-300 uppercase tracking-wider">Daily Painting</span>
                  </motion.div>
                  <motion.div 
                    className="fact-item"
                    style={{
                      opacity: counter5Opacity,
                      y: counter5Y
                    }}
                  >
                    <span className="block text-5xl font-bold text-gold mb-2">1950</span>
                    <span className="block text-base text-gray-300 uppercase tracking-wider">Since</span>
                  </motion.div>
                </div>
              </div>
            
            {/* Parallax Bottles */}
            <motion.div 
              className="absolute pointer-events-none"
              style={{ 
                left: isMobile ? '-40%' : '-25%',
                top: '50%',
                width: isMobile ? '500px' : '900px',
                height: isMobile ? '400px' : '720px',
                y: silverImageY,
                opacity: bottlesOpacity,
                transform: `translateY(-50%)`
              }}
            >
              <Image
                src="/images/silver.png"
                alt="Silver bottle"
                fill
                style={{ objectFit: 'contain', transform: 'rotate(30deg)' }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute pointer-events-none"
              style={{ 
                right: isMobile ? '-40%' : '-25%',
                top: '50%',
                width: isMobile ? '500px' : '900px',
                height: isMobile ? '400px' : '720px',
                y: rakiImageY,
                opacity: bottlesOpacity,
                transform: `translateY(-50%)`
              }}
            >
              <Image
                src="/images/yeni-raki-taste-of-turkey.webp"
                alt="Raki bottle"
                fill
                style={{ objectFit: 'contain', transform: 'rotate(-30deg)' }}
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* === Our Clients Section === */}
      <AnimatedElement>
        <section ref={clientsRef} className="flex items-center justify-center" style={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-4" 
                style={{ 
                  fontFamily: 'HaboroContrastNormRegular, sans-serif', 
                  color: '#111827',
                  opacity: clientsTitleOpacity,
                  y: clientsTitleY,
                  scale: clientsTitleScale
                }}
              >
                Trusted by Leading Brands
              </motion.h2>
              <motion.div 
                style={{
                  opacity: clientsTitleOpacity
                }}
                className="h-1 bg-[#E9C883] mx-auto w-20"
              ></motion.div>
            </div>
            
            <div className="clients-slider overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mx-auto max-w-4xl">
                {/* Logos - First row (4 logos) */}
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow1Opacity,
                    y: clientsRow1Y,
                    scale: clientsRow1Scale
                  }}
                >
                  <Image 
                    src="/images/clients/next.png" 
                    alt="Next" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow1Opacity,
                    y: clientsRow1Y,
                    scale: clientsRow1Scale
                  }}
                >
                  <Image 
                    src="/images/clients/atelier rebul.png" 
                    alt="Atelier Rebul" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow1Opacity,
                    y: clientsRow1Y,
                    scale: clientsRow1Scale
                  }}
                >
                  <Image 
                    src="/images/clients/defacto.png" 
                    alt="Defacto" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow1Opacity,
                    y: clientsRow1Y,
                    scale: clientsRow1Scale
                  }}
                >
                  <Image 
                    src="/images/clients/lc waikiki.png" 
                    alt="LCW" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                {/* Second row (4 logos) */}
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow2Opacity,
                    y: clientsRow2Y,
                    scale: clientsRow2Scale
                  }}
                >
                  <Image 
                    src="/images/clients/river island.png" 
                    alt="River Island" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow2Opacity,
                    y: clientsRow2Y,
                    scale: clientsRow2Scale
                  }}
                >
                  <Image 
                    src="/images/clients/mey.png" 
                    alt="Diageo (Mey Alkol)" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow2Opacity,
                    y: clientsRow2Y,
                    scale: clientsRow2Scale
                  }}
                >
                  <Image 
                    src="/images/clients/nishane.png" 
                    alt="Nishane" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
                
                <motion.div 
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    opacity: clientsRow2Opacity,
                    y: clientsRow2Y,
                    scale: clientsRow2Scale
                  }}
                >
                  <Image 
                    src="/images/clients/mad.png" 
                    alt="Mad Parfum" 
                    width={280} 
                    height={140} 
                    style={{objectFit: "contain"}} 
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* === Elevate Your Packaging Section === */}
      <motion.section 
        ref={elevateRef} 
        className="pt-32 pb-16 sm:pb-0 bg-gray-900"
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
                    className="block text-[#E9C883]"
                  >
                    ELEVATE
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="block text-[#E9C883]"
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
                  className="text-xl mb-8 text-gray-300"
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
                    className="inline-block px-10 py-3 border border-white text-white font-semibold tracking-wider hover:bg-white hover:text-gray-900 transition duration-300"
                  >
                    REQUEST A QUOTE
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* === Services Showcase Grid Section === */}
      <AnimatedElement>
        <section id="services-section" className="pt-0 pb-20 bg-white">
          {isMobile ? (
            <div className="container mx-auto px-2">
              <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
                {/* Silk Screen Card */}
                <div 
                  className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                  style={{ backgroundImage: 'url(/images/silksscreen.jpg)' }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                  
                  {/* İçerik sağda sınırlı bir alanda */}
                  <div className="relative z-10 text-white ml-auto w-1/2 text-right"> 
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold mb-2" 
                      style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                    >
                      Silk Screen
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="mb-4 text-gray-200 text-sm"
                    >
                      Precision techniques for vibrant designs.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link 
                        href="/services/silk-screen-printing"
                        className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>
                
                {/* Hot Foil Stamping Card */}
                <div 
                  className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                  style={{ backgroundImage: 'url(/images/hotfoil.jpg)' }} 
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                  
                  <div className="relative z-10 text-white ml-auto w-1/2 text-right"> 
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold mb-2" 
                      style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                    >
                      Hot-Foil Stamping
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="mb-4 text-gray-200 text-sm"
                    >
                      Adding metallic or colored foils for premium looks.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link 
                        href="/services/hot-foil-stamping"
                        className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Precious Metals Card */}
                <div 
                  className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                  style={{ backgroundImage: 'url(/images/precious.jpg)' }} 
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                  
                  <div className="relative z-10 text-white ml-auto w-1/2 text-right"> 
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold mb-2" 
                      style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                    >
                      Precious Metals
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="mb-4 text-gray-200 text-sm"
                    >
                      Gold and platinum details for ultimate luxury.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link 
                        href="/services/precious-metals"
                        className="inline-block px-4 py-1 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Organic Painting Card */}
                <div
                  className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                  style={{ backgroundImage: 'url(/images/organicpaint.jpg)' }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                  
                  <div className="relative z-10 text-white ml-auto w-1/2 text-right">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold mb-2" 
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
                      Eco-friendly vibrant finishes.
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

                {/* Metalized Printing Card */}
                <div
                  className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                  style={{ backgroundImage: 'url(/images/metalize.jpg)' }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                  
                  <div className="relative z-10 text-white ml-auto w-1/2 text-right">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold mb-2" 
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
                      Stunning metallic effects.
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

                {/* Masking Card */}
                <div
                  className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                  style={{ backgroundImage: 'url(/images/mask.jpg)' }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                  
                  <div className="relative z-10 text-white ml-auto w-1/2 text-right">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold mb-2" 
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
                      Precision multi-color designs.
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
          ) : (
            <>
              {/* Desktop View - Original Layout */}
              <section
                className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url(/images/silksscreen.jpg)' }}
              >
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
                      className="mt-6 flex items-center"
                    >
                      <Link
                        href="/services/silk-screen-printing"
                        className="inline-block px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </section>

              <section className="py-10 bg-white">
                <div className="container mx-auto px-2"> 
                  <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto"> 
                    
                    {/* Mini Showcase 1: Hot Foil Stamping */}
                    <div 
                      className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                      style={{ backgroundImage: 'url(/images/hotfoil.jpg)' }} 
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                      
                      <div className="relative z-10 text-white ml-auto w-1/2 text-right"> 
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
                          Adding metallic or colored foils for premium looks.
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
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                      
                      <div className="relative z-10 text-white ml-auto w-1/2 text-right"> 
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
                          Gold and platinum details for ultimate luxury.
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

              <section className="py-10 bg-white -mt-16">
                <div className="container mx-auto px-2">
                  <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Showcase 1: Organic Painting */}
                    <div
                      className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                      style={{ backgroundImage: 'url(/images/organicpaint.jpg)' }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                      
                      <div className="relative z-10 text-white ml-auto w-1/2 text-right">
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl font-bold mb-3" 
                          style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                        >
                          Organic Painting
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="mb-5 text-gray-200"
                        >
                          Eco-friendly vibrant finishes.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Link
                            href="/services/organic-painting"
                            className="inline-block px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                          >
                            Learn More
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Showcase 2: Metalized Printing */}
                     <div
                      className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                      style={{ backgroundImage: 'url(/images/metalize.jpg)' }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                      
                      <div className="relative z-10 text-white ml-auto w-1/2 text-right">
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl font-bold mb-3" 
                          style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                        >
                          Metalized Printing
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="mb-5 text-gray-200"
                        >
                          Stunning metallic effects.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Link
                            href="/services/metalized-printing"
                            className="inline-block px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 font-semibold"
                          >
                            Learn More
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Showcase 3: Masking */}
                     <div
                      className="relative aspect-[25/14] shadow-lg overflow-hidden bg-cover bg-center flex items-center p-8 group" 
                      style={{ backgroundImage: 'url(/images/mask.jpg)' }}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
                      
                      <div className="relative z-10 text-white ml-auto w-1/2 text-right">
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl font-bold mb-3" 
                          style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
                        >
                          Masking
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="mb-5 text-gray-200"
                        >
                          Precision multi-color designs.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Link
                            href="/services/masking"
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
            </>
          )}
        </section>
      </AnimatedElement>
    </>
  );
}
