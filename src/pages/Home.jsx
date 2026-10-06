import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Factory, Target, ShieldCheck, Truck } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="w-full bg-primary text-white selection:bg-accent selection:text-white overflow-hidden">
      {/* CINEMATIC HERO */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0c10]/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/80 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            src="/images/image10.png" 
            className="w-full h-full object-cover object-center"
            alt="Manufacturing Facility" 
          />
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-accent"></div>
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Plastic Manufacturing</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              Built Around<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Your Requirements.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
            >
              Reliable plastic manufacturing solutions for businesses across Pakistan. Quality production, designed for practical applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="flex flex-col sm:flex-row gap-5 mb-16"
            >
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-200 px-8 py-4 rounded-sm font-semibold tracking-wide text-center transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="bg-transparent border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-sm font-semibold tracking-wide text-center transition-all">
                Explore Products
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: EASE }}
              className="flex items-center text-sm text-gray-500 tracking-wider font-medium uppercase"
            >
              <MapPin size={16} className="mr-2 text-accent" />
              Alam Chowk, Gujranwala
            </motion.div>
          </div>
        </div>
      </section>

      {/* CINEMATIC INTRO */}
      <section className="py-32 bg-[#0a0c10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: EASE }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Manufacturing solutions designed around real business requirements.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Operating from Gujranwala, Ibrahim Plastic Industry serves the growing needs of businesses nationwide. We provide consistent output, maintaining a focus on practicality and strict attention to detail.
              </p>
              <Link to="/about" className="text-accent flex items-center gap-2 uppercase tracking-widest text-sm font-bold hover:text-white transition-colors group">
                Discover Our Story 
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: EASE }}
              className="relative h-[600px]"
            >
              <img src="/images/image11.png" alt="Factory Floor" className="w-full h-full object-cover object-center rounded-sm transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#0d0f14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Factory size={32} />, title: "Reliable Production", desc: "Consistent output meeting your exact business requirements." },
              { icon: <Target size={32} />, title: "Practical Solutions", desc: "Cost-effective and scalable plastic manufacturing." },
              { icon: <ShieldCheck size={32} />, title: "Customer-Focused", desc: "Dedicated support and clear communication." },
              { icon: <Truck size={32} />, title: "Pakistan-Wide", desc: "Delivering efficiently from Gujranwala to all major cities." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: EASE }}
                className="bg-[#13161c] p-10 rounded-sm border border-white/5 hover:border-accent/50 transition-colors group"
              >
                <div className="text-gray-500 mb-6 transition-colors">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
