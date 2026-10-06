import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const About = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative h-[600px] order-2 lg:order-1"
          >
            <img 
              src="/images/image11.png" 
              alt="Industrial Machinery" 
              className="w-full h-full object-cover object-center rounded-sm transition-all duration-700" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About Ibrahim Plastic Industry</h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-6 font-light">
              Ibrahim Plastic Industry is a plastic manufacturing business based in Alam Chowk, Gujranwala, serving businesses across Pakistan.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We focus on delivering high-quality, practical plastic manufacturing solutions tailored for real business requirements.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-2">Location</span>
                <span className="text-white text-lg">Gujranwala</span>
              </div>
              <div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-2">Service Area</span>
                <span className="text-white text-lg">Pakistan-Wide</span>
              </div>
              <div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest block mb-2">Languages</span>
                <span className="text-white text-lg">Urdu & English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
