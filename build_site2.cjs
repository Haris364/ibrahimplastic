const fs = require('fs');
const path = require('path');

const files = {
  'src/data/products.js': `export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'kitchenware', name: 'Kitchenware & Storage' },
  { id: 'medical', name: 'Medical Plastics' },
  { id: 'industrial', name: 'Industrial Components' },
];

export const products = [
  { id: '1', name: 'Buffet Bowl Pure', category: 'kitchenware', image: '/images/image$1.png', description: 'Premium plastic buffet bowls, available in multiple colors. Ideal for serving salads and fruits.' },
  { id: '2', name: 'Pure Jaar Set', category: 'kitchenware', image: '/images/image$1.png', description: 'High-quality multi-size storage jars with secure lids, perfect for kitchen organization.' },
  { id: '3', name: 'Premium Buffet Bowl', category: 'kitchenware', image: '/images/image$1.png', description: 'Large capacity, durable plastic bowl for versatile household use.' },
  { id: '4', name: 'Utility Basket', category: 'kitchenware', image: '/images/image$1.png', description: 'Lightweight and durable plastic utility baskets for washing and storage.' },
  { id: '5', name: 'Surgical & Dental Plastics', category: 'medical', image: '/images/image$1.png', description: 'Disposable plastic dental impression trays, surgical trays, and medical forceps.' },
  { id: '6', name: 'Industrial Plastic Crate', category: 'industrial', image: '/images/image$1.png', description: 'Heavy-duty crates for industrial logistics and storage.' },
  { id: '7', name: 'Custom Molded Parts', category: 'industrial', image: '/images/image$1.png', description: 'Precision injection molded components for various industrial applications.' },
  { id: '8', name: 'Food Grade Containers', category: 'kitchenware', image: '/images/image$1.png', description: 'Bulk food storage solutions with airtight sealing.' },
  { id: '9', name: 'Medical Trays', category: 'medical', image: '/images/image$1.png', description: 'High-quality, sterile-ready disposable trays for healthcare environments.' },
];
`,

  'src/components/Navbar.jsx': `import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={\`fixed w-full z-50 transition-all duration-500 \${isScrolled ? 'bg-[#0f1115]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}\`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-white tracking-widest flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white text-xs">IPI</span>
            </div>
            <span>IBRAHIM<span className="font-light text-gray-400 block text-[10px] tracking-[0.3em] uppercase">Plastic Industry</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={\`text-sm tracking-wide transition-colors relative \${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                  }\`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div layoutId="underline" className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent" />
                  )}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-200 px-6 py-2.5 rounded-sm font-medium transition-all hover:scale-105 active:scale-95 text-sm tracking-wide">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0f1115] border-b border-white/10 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-accent text-white px-5 py-4 rounded-sm font-medium"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
`,

  'src/pages/Home.jsx': `import React from 'react';
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
            src="/images/image$1.png" 
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
              <img src="/images/image$1.png" alt="Factory Floor" className="w-full h-full object-cover object-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
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
                <div className="text-gray-500 mb-6 group-hover:text-accent transition-colors">{feature.icon}</div>
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
`,

  'src/pages/Products.jsx': `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, products } from '../data/products';
import { ArrowRight, X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#0a0c10] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Premium plastic manufacturing solutions, from household containers to medical grade components.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex overflow-x-auto hide-scrollbar gap-4 mb-16 border-b border-white/10 pb-4"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={\`whitespace-nowrap px-6 py-2 text-sm uppercase tracking-widest font-semibold transition-colors relative \${
                activeCategory === cat.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }\`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div 
                  layoutId="activeCategory" 
                  className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-accent" 
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#13161c] rounded-sm mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-end">
                    <span className="text-white text-sm tracking-widest uppercase font-bold">View Details</span>
                    <ArrowRight className="text-accent" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-accent uppercase tracking-widest mb-2 font-bold">
                    {categories.find(c => c.id === product.category)?.name}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
          >
            <motion.div 
              layoutId={\`modal-\${selectedProduct.id}\`}
              className="bg-[#0f1115] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm grid grid-cols-1 lg:grid-cols-2 relative border border-white/10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 text-white/50 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-md"
              >
                <X size={24} />
              </button>
              
              <div className="h-[40vh] lg:h-[70vh] bg-[#13161c]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <div className="text-sm text-accent uppercase tracking-widest mb-4 font-bold">
                  {categories.find(c => c.id === selectedProduct.category)?.name}
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">{selectedProduct.name}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                  {selectedProduct.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a href="/contact" className="bg-white text-primary text-center px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                    Request This Product
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
`,

  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0c10', 
        secondary: '#0f1115', 
        accent: '#2563eb', // refined industrial blue
        accentDark: '#1d4ed8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
`,

  'src/index.css': `@import "tailwindcss";

@theme {
  --color-primary: #0a0c10;
  --color-secondary: #0f1115;
  --color-accent: #2563eb;
  --color-accentDark: #1d4ed8;
  --font-sans: 'Inter', sans-serif;
}

body {
  background-color: var(--color-primary);
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-sans);
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`
};

const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

for (const [filePath, content] of Object.entries(files)) {
  createDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Cinematic Site files generated successfully.');
