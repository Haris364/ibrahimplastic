import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const Manufacturing = () => {
  const steps = [
    { num: '01', title: 'Requirement', desc: 'Understanding your specific business needs, quantities, and material specifications.' },
    { num: '02', title: 'Planning', desc: 'Developing a manufacturing strategy and timeline to ensure efficient production.' },
    { num: '03', title: 'Production', desc: 'Executing the manufacturing process with focus on consistency and reliability.' },
    { num: '04', title: 'Quality Check', desc: 'Reviewing the output to ensure it aligns with the agreed practical standards.' },
    { num: '05', title: 'Delivery', desc: 'Dispatching the finished goods from Gujranwala to your location across Pakistan.' },
  ];

  return (
    <div className="w-full pt-32 pb-32 bg-primary min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">From Requirement to Production</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A reliable, structured approach to industrial manufacturing.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <div className="text-7xl lg:text-9xl font-bold text-white/5">{step.num}</div>
              </div>
              <div className="md:col-span-8 lg:col-span-5 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
              <div className="hidden lg:block lg:col-span-4 h-full relative">
                 {/* Visual element line */}
                 {idx !== steps.length - 1 && (
                   <div className="absolute top-1/2 left-1/2 w-[1px] h-[200px] bg-gradient-to-b from-accent to-transparent transform -translate-x-1/2"></div>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
