import React, { useState } from 'react';
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
              className={`whitespace-nowrap px-6 py-2 text-sm uppercase tracking-widest font-semibold transition-colors relative ${
                activeCategory === cat.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
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
              layoutId={`modal-${selectedProduct.id}`}
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
