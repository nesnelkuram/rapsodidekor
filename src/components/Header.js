'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';

// Simple Chevron Down Icon
const ChevronDownIcon = ({ className = "w-4 h-4 inline-block ml-1" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// Hamburguer Icon (SVG)
const HamburgerIcon = ({ isOpen }) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="transition-transform duration-300 ease-in-out"
  >
    {/* Top line */}
    <line
      x1="2"
      y1="3"
      x2="22"
      y2="3"
      className={isOpen ? 'translate-y-[6px] rotate-45 origin-center' : ''}
    />
    {/* Middle line */}
    <line
      x1="2"
      y1="9"
      x2="22"
      y2="9"
      className={isOpen ? 'opacity-0' : ''}
    />
    {/* Bottom line */}
    <line
      x1="2"
      y1="15"
      x2="22"
      y2="15"
      className={isOpen ? '-translate-y-[6px] -rotate-45 origin-center' : ''}
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Removed isScrolled state - header no longer changes
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLanguage();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Close services submenu when main menu closes
      setServicesOpen(false);
    }
  };

  // Toggle services submenu
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // Close mobile menu if window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    // Scroll handler removed - header no longer changes on scroll

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        background: 'transparent',
        color: 'white',
        padding: '0',
        display: 'block',
        width: '100%',
        margin: 0,
        zIndex: 50
      }}
      className="w-full header-main"
    >
      <nav className="w-full flex justify-between items-center" style={{position: 'relative', background: 'transparent', borderRadius: '0px', padding: '20px 0px', margin: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="logo z-50 ml-4 md:ml-[5%]">
          <Link href="/" className="flex items-center" aria-label="Rapsodi Dekor Homepage">
            <Image
              src="/rapsodi_logobeyaz.svg"
              alt="Rapsodi Dekor Logo"
              width={200}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="block md:hidden z-50 mr-0 pr-6 md:pr-12" style={{paddingRight: '24px', marginRight: 0}}>

          <button 
            onClick={toggleMenu} 
            className="w-10 h-10 flex items-center justify-center focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            {/* SVG tabanlı ikon */}
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-right hidden lg:flex items-center gap-6 mr-4 lg:mr-[5%]" style={{visibility: 'visible', opacity: 1}}>

          <ul className="flex list-none p-0 items-center gap-6 xl:gap-8" style={{gap: '1.5rem', display: 'flex', visibility: 'visible'}}>

            <li style={{display: 'block'}}>
              <Link href="/" className="relative no-underline hover:text-[#E9C883] transition-all duration-300 py-2 group inline-block" style={{color: 'white', textDecoration: 'none'}}>
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li style={{display: 'block'}}>
              <Link href="/about" className="relative no-underline hover:text-[#E9C883] transition-all duration-300 py-2 group inline-block" style={{color: 'white', textDecoration: 'none'}}>
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            {/* Services Dropdown */}
            <li className="relative group" style={{display: 'block'}}>
              <Link href="/services" className="relative no-underline hover:text-[#E9C883] transition-all duration-300 py-2 flex items-center gap-1 group/link inline-block" style={{color: 'white', textDecoration: 'none', display: 'flex'}}>
                {t('nav.services')} 
                <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover/link:w-[calc(100%-20px)]"></span>
              </Link>
              {/* Ultra Modern Dropdown with Enhanced Glass Effect */}
              <div className="absolute left-0 lg:left-auto lg:-right-12 xl:-right-20 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="relative">
                  {/* Arrow indicator */}
                  <div className="absolute -top-2 left-6 lg:left-auto lg:right-6 w-4 h-4 bg-gradient-to-br from-gray-900/95 to-black/95 rotate-45 border-l border-t border-white/10"></div>
                  
                  {/* Modern gradient dropdown */}
                  <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 min-w-[280px] md:min-w-[320px] overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E9C883]/5 to-transparent pointer-events-none"></div>
                    
                    <ul className="relative z-10 py-2 space-y-1">
                      <li>
                        <Link 
                          href="/services/silk-screen-printing" 
                          className="group/item flex items-center gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-[#E9C883]/20 hover:to-[#E9C883]/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                          {/* Hover effect background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                          
                          {/* Content */}
                          <div className="flex-1 relative z-10">
                            <span className="text-white/90 group-hover/item:text-white text-sm font-medium block">
                              {t('services.silkScreen')}
                            </span>
                            <span className="text-white/50 group-hover/item:text-white/70 text-xs mt-0.5 block">
                              {t('services.silkScreenDesc')}
                            </span>
                          </div>
                          
                          {/* Arrow on hover */}
                          <svg className="w-4 h-4 text-[#E9C883]/0 group-hover/item:text-[#E9C883]/60 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/services/hot-foil-stamping" 
                          className="group/item flex items-center gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-[#E9C883]/20 hover:to-[#E9C883]/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                          <div className="flex-1 relative z-10">
                            <span className="text-white/90 group-hover/item:text-white text-sm font-medium block">{t('services.hotFoil')}</span>
                            <span className="text-white/50 group-hover/item:text-white/70 text-xs mt-0.5 block">{t('services.hotFoilDesc')}</span>
                          </div>
                          <svg className="w-4 h-4 text-[#E9C883]/0 group-hover/item:text-[#E9C883]/60 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/services/precious-metals" 
                          className="group/item flex items-center gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-[#E9C883]/20 hover:to-[#E9C883]/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                          <div className="flex-1 relative z-10">
                            <span className="text-white/90 group-hover/item:text-white text-sm font-medium block">{t('services.preciousMetals')}</span>
                            <span className="text-white/50 group-hover/item:text-white/70 text-xs mt-0.5 block">{t('services.preciousMetalsDesc')}</span>
                          </div>
                          <svg className="w-4 h-4 text-[#E9C883]/0 group-hover/item:text-[#E9C883]/60 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/services/organic-painting" 
                          className="group/item flex items-center gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-[#E9C883]/20 hover:to-[#E9C883]/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                          <div className="flex-1 relative z-10">
                            <span className="text-white/90 group-hover/item:text-white text-sm font-medium block">{t('services.organicPainting')}</span>
                            <span className="text-white/50 group-hover/item:text-white/70 text-xs mt-0.5 block">{t('services.organicPaintingDesc')}</span>
                          </div>
                          <svg className="w-4 h-4 text-[#E9C883]/0 group-hover/item:text-[#E9C883]/60 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/services/metalized-printing" 
                          className="group/item flex items-center gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-[#E9C883]/20 hover:to-[#E9C883]/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                          <div className="flex-1 relative z-10">
                            <span className="text-white/90 group-hover/item:text-white text-sm font-medium block">{t('services.metalizedPrinting')}</span>
                            <span className="text-white/50 group-hover/item:text-white/70 text-xs mt-0.5 block">{t('services.metalizedPrintingDesc')}</span>
                          </div>
                          <svg className="w-4 h-4 text-[#E9C883]/0 group-hover/item:text-[#E9C883]/60 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/services/masking" 
                          className="group/item flex items-center gap-3 px-4 py-3.5 hover:bg-gradient-to-r hover:from-[#E9C883]/20 hover:to-[#E9C883]/10 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700"></div>
                          <div className="flex-1 relative z-10">
                            <span className="text-white/90 group-hover/item:text-white text-sm font-medium block">{t('services.masking')}</span>
                            <span className="text-white/50 group-hover/item:text-white/70 text-xs mt-0.5 block">{t('services.maskingDesc')}</span>
                          </div>
                          <svg className="w-4 h-4 text-[#E9C883]/0 group-hover/item:text-[#E9C883]/60 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li style={{display: 'block'}}>
              <Link href="/contact-us" className="relative no-underline hover:text-[#E9C883] transition-all duration-300 py-2 group inline-block" style={{color: 'white', textDecoration: 'none'}}>
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          
          {/* Language Selector */}
          <LanguageSelector />
        </div>
      </nav>
      
      {/* Mobile Navigation Menu with Modern Effects */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto px-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2 text-[#E9C883]">{t('nav.menu')}</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#E9C883] to-transparent mx-auto"></div>
              </div>
            
            <ul className="space-y-6 mb-12">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href="/" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-all duration-300 relative inline-block group"
                  onClick={toggleMenu}
                >
                  {t('nav.home')}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link 
                  href="/about" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-all duration-300 relative inline-block group"
                  onClick={toggleMenu}
                >
                  {t('nav.about')}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
              
              <motion.li 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-all duration-300 flex items-center justify-center mx-auto group"
                  onClick={toggleServices}
                >
                  {t('nav.services')}
                  <ChevronDownIcon className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${servicesOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul 
                      className="mt-6 space-y-4 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 backdrop-blur-sm"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {[
                        { href: '/services/silk-screen-printing', key: 'silkScreen' },
                        { href: '/services/hot-foil-stamping', key: 'hotFoil' },
                        { href: '/services/precious-metals', key: 'preciousMetals' },
                        { href: '/services/organic-painting', key: 'organicPainting' },
                        { href: '/services/metalized-printing', key: 'metalizedPrinting' },
                        { href: '/services/masking', key: 'masking' }
                      ].map((service, index) => (
                        <motion.li
                          key={service.key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link 
                            href={service.href} 
                            className="text-lg text-white/80 hover:text-[#E9C883] transition-all duration-300 block py-2 px-4 hover:bg-white/5 rounded-lg" 
                            onClick={toggleMenu}
                          >
                            {t(`services.${service.key}`)}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link 
                  href="/contact-us" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-all duration-300 relative inline-block group"
                  onClick={toggleMenu}
                >
                  {t('nav.contact')}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#E9C883] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            </ul>
            
            {/* Language Selector for Mobile */}
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <LanguageSelector />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-0 right-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-400">© 2023 RapsodiDekor. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}