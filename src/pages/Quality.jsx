import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const Quality = () => {
  return (
    <div className="w-full bg-[#0a0c10] text-white min-h-screen py-32 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: EASE }}
          className="absolute inset-0 bg-[url('/images/image13.png')] bg-cover bg-center grayscale mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10] via-transparent to-[#0a0c10]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="text-5xl md:text-7xl font-bold mb-10 leading-tight"
          >
            Focused on <br/><span className="text-accent">Consistency</span> & Quality.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="space-y-6 text-xl text-gray-400 font-light leading-relaxed"
          >
            <p>
              At Ibrahim Plastic Industry, we understand that our products are integrated into your supply chains. Therefore, quality is evaluated strictly against practical production standards.
            </p>
            <ul className="space-y-6 pt-8">
              {['Meeting strict customer requirements', 'Ensuring batch-to-batch consistency', 'Maintaining reliable communication throughout production', 'Delivering durable practical plastic goods'].map((item, i) => (
                <li key={i} className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
