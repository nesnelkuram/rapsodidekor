'use client';

import { motion } from 'framer-motion';
import Counter from './Counter';

export default function FactsCounter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900" 
          style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}
        >
          A Tradition of Innovation in Glass Decoration
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-2">
                <Counter targetValue={10000} className="block" />
              </div>
              <p className="text-gray-700 font-medium">m² Production Area</p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-2">
                <Counter targetValue={450} className="inline" />+
              </div>
              <p className="text-gray-700 font-medium">Specialist Team</p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-2">
                <Counter targetValue={120000} className="block" />
              </div>
              <p className="text-gray-700 font-medium">Daily Printing</p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-2">
                <Counter targetValue={150000} className="block" />
              </div>
              <p className="text-gray-700 font-medium">Daily Painting</p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-2">
                <span>Since </span>
                <Counter targetValue={1950} className="inline" />
              </div>
              <p className="text-gray-700 font-medium">&nbsp;</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
