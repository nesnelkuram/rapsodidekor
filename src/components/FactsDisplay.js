'use client';

import { motion } from 'framer-motion';
import Counter from './Counter';

export default function FactsDisplay() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Since the 1950s, RAPSODİ DEKOR has been shaping the future of glass and plastic packaging with cutting-edge printing and decorative solutions. Where expertise meets creativity, brands shine brighter.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
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
            <div>
              <Counter targetValue={120} className="inline text-5xl font-bold text-gray-800" />
              <span className="text-5xl font-bold text-gray-800">,000</span>
            </div>
            <span className="block text-base text-gray-600 uppercase tracking-wider">Daily Printing</span>
          </div>
          <div className="fact-item">
            <div>
              <Counter targetValue={150} className="inline text-5xl font-bold text-gray-800" />
              <span className="text-5xl font-bold text-gray-800">,000</span>
            </div>
            <span className="block text-base text-gray-600 uppercase tracking-wider">Daily Painting</span>
          </div>
          <div className="fact-item">
            <span className="block text-5xl font-bold text-gray-800 mb-2">1950</span>
            <span className="block text-base text-gray-600 uppercase tracking-wider">Since</span>
          </div>
        </div>
      </div>
    </section>
  );
}
