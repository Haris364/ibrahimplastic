const fs = require('fs');
const path = require('path');

const files = {
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827', // deep charcoal
        secondary: '#f9fafb', // off-white
        accent: '#1e3a8a', // deep industrial blue
        accentDark: '#1e40af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
`,
  'src/index.css': `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-gray-800 bg-secondary antialiased font-sans;
  }
}
`,
  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
`,
  'src/App.jsx': `import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}\`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-primary tracking-tight">
            IBRAHIM PLASTIC <span className="text-accent block text-sm md:inline">INDUSTRY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={\`text-sm font-medium transition-colors hover:text-accent \${
                    location.pathname === link.path ? 'text-accent' : 'text-gray-600'
                  }\`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link to="/contact" className="bg-accent hover:bg-accentDark text-white px-5 py-2 rounded font-medium transition-colors">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-accent text-white px-5 py-3 rounded font-medium"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
`,
  'src/components/Footer.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">IBRAHIM PLASTIC INDUSTRY</h2>
            <p className="mb-6 max-w-sm text-gray-400">
              Plastic manufacturing solutions for businesses across Pakistan. Reliable production, practical solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Manufacturing', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : \`/\${item.toLowerCase()}\`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-accent shrink-0" size={20} />
                <span>Alam Chowk, Gujranwala, Punjab, Pakistan, 52250</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent shrink-0" size={20} />
                <span>0302 6651175</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent shrink-0" size={20} />
                <a href="mailto:ibrahimplasticindustry@gmail.com" className="hover:text-white">
                  ibrahimplasticindustry@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ibrahim Plastic Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`,
  'src/components/WhatsAppButton.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923026651175"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
`,
  'src/pages/Home.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Factory, Truck, ShieldCheck, Box } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] bg-primary flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Placeholder for Industrial Image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-accent font-semibold tracking-wider text-sm mb-4">
              PLASTIC MANUFACTURING
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Reliable Plastic Manufacturing for Modern Businesses
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Ibrahim Plastic Industry provides plastic manufacturing solutions with a focus on dependable production, practical solutions and long-term business relationships.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="bg-accent hover:bg-accentDark text-white px-8 py-4 rounded font-medium text-center transition-colors shadow-lg">
                Request a Quote
              </Link>
              <Link to="/products" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded font-medium text-center transition-colors">
                Explore Products
              </Link>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex items-center text-sm text-gray-400">
              <MapPin size={16} className="mr-2 text-accent" />
              Alam Chowk, Gujranwala, Pakistan
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST / INTRO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Built Around Reliable Manufacturing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Operating from Gujranwala, we serve businesses across Pakistan with practical and dependable plastic manufacturing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Factory size={32} />, title: "Reliable Production", desc: "Consistent output meeting your exact business requirements." },
              { icon: <Box size={32} />, title: "Practical Solutions", desc: "Cost-effective and scalable plastic manufacturing." },
              { icon: <ShieldCheck size={32} />, title: "Business-Focused Service", desc: "Dedicated support and clear communication." },
              { icon: <Truck size={32} />, title: "Pakistan-Wide Service", desc: "Delivering efficiently from Gujranwala to all major cities." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Plastic Manufacturing" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-lg border border-gray-100 hidden md:block">
                <p className="text-sm text-gray-500 font-medium">Headquarters</p>
                <p className="text-lg font-bold text-primary">Gujranwala, Pakistan</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-6">About Ibrahim Plastic Industry</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-6 leading-relaxed">
                Ibrahim Plastic Industry is a plastic manufacturing business based in Alam Chowk, Gujranwala, Pakistan. The company serves businesses across multiple regions of Pakistan and focuses on providing practical plastic manufacturing solutions.
              </motion.p>
              
              <motion.ul variants={fadeUp} className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="text-accent mr-3" size={20} />
                  <strong>Location:</strong>&nbsp;Alam Chowk, Gujranwala
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="text-accent mr-3" size={20} />
                  <strong>Service:</strong>&nbsp;Pakistan-wide
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="text-accent mr-3" size={20} />
                  <strong>Language:</strong>&nbsp;Urdu & English
                </li>
              </motion.ul>
              
              <motion.div variants={fadeUp}>
                <Link to="/about" className="inline-flex items-center text-accent font-medium hover:text-accentDark transition-colors">
                  Read More About Us <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Have a Plastic Manufacturing Requirement?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10"
          >
            Tell us what you need and our team can discuss the right manufacturing solution for your business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded font-bold transition-colors shadow-lg">
              Request a Quote
            </Link>
            <a href="tel:03026651175" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded font-bold transition-colors flex items-center justify-center">
              <Phone className="mr-2" size={20} /> 0302 6651175
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
`,
  'src/pages/About.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            Ibrahim Plastic Industry is a leading plastic manufacturing entity operating from the industrial hub of Gujranwala, Pakistan.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Factory Floor" 
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              Located in Alam Chowk, Gujranwala, Ibrahim Plastic Industry has been serving the growing manufacturing needs of businesses across Pakistan. Our strategic location allows us to efficiently distribute our products nationwide.
            </p>
            <p>
              We focus heavily on providing practical plastic manufacturing solutions tailored to the unique business requirements of our clients. 
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent mt-8">
              <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-gray-600 text-base">
                To deliver reliable production output, foster long-term business partnerships, and support the supply chain of modern businesses with quality plastic products.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
`,
  'src/pages/Products.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { name: 'Industrial Plastic Solutions', desc: 'Heavy-duty plastic components and parts for industrial applications.', img: 'https://images.unsplash.com/photo-1610427774900-5bf043b4f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Custom Plastic Manufacturing', desc: 'Made-to-order plastic items designed to your exact specifications.', img: 'https://images.unsplash.com/photo-1572274408139-4ce4999f7d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Packaging Solutions', desc: 'Reliable and durable plastic packaging materials for various industries.', img: 'https://images.unsplash.com/photo-1596207883204-c36195e5330e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Standard Plastic Products', desc: 'A range of ready-to-use utility plastic products for commercial use.', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="w-full pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical, scalable, and high-quality plastic manufacturing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{cat.name}</h3>
                <p className="text-gray-600 mb-6">{cat.desc}</p>
                <Link to="/contact" className="inline-block border border-accent text-accent hover:bg-accent hover:text-white px-6 py-2 rounded font-medium transition-colors">
                  Discuss Requirement
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
`,
  'src/pages/Manufacturing.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const Manufacturing = () => {
  const steps = [
    { num: '01', title: 'Requirement', desc: 'Understanding your specific business needs, quantities, and material specifications.' },
    { num: '02', title: 'Planning', desc: 'Developing a manufacturing strategy and timeline to ensure efficient production.' },
    { num: '03', title: 'Production', desc: 'Executing the manufacturing process with focus on consistency and reliability.' },
    { num: '04', title: 'Quality Check', desc: 'Reviewing the output to ensure it aligns with the agreed practical standards.' },
    { num: '05', title: 'Delivery', desc: 'Dispatching the finished goods from Gujranwala to your location across Pakistan.' },
  ];

  return (
    <div className="w-full pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">From Requirement to Production</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to industrial manufacturing.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 bg-gray-50 p-8 rounded-lg border border-gray-100"
            >
              <div className="text-5xl font-extrabold text-gray-200">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
`,
  'src/pages/Quality.jsx': `import React from 'react';
import { motion } from 'framer-motion';

const Quality = () => {
  return (
    <div className="w-full bg-primary text-white min-h-[80vh] py-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Quality That Supports Your Business
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-xl text-gray-300"
          >
            <p>
              At Ibrahim Plastic Industry, we understand that our products are often integrated into your operations or supply chains. Therefore, quality is evaluated strictly against consistency, attention to detail, and practical production standards.
            </p>
            <ul className="list-disc pl-6 space-y-4 pt-4 text-gray-200">
              <li>Meeting exact customer requirements</li>
              <li>Ensuring batch-to-batch consistency</li>
              <li>Maintaining reliable communication throughout the production process</li>
              <li>Delivering durable and practical plastic goods</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
`,
  'src/pages/Contact.jsx': `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Future API integration here
  };

  return (
    <div className="w-full pt-10 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch to discuss your plastic manufacturing requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Business Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-accent mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Address</h3>
                  <p className="text-gray-600 mt-1">Ibrahim Plastic Industry<br/>Alam Chowk, Gujranwala, Punjab, Pakistan, 52250</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-accent mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">0302 6651175</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-accent mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1"><a href="mailto:ibrahimplasticindustry@gmail.com" className="hover:text-accent">ibrahimplasticindustry@gmail.com</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="text-accent mt-1 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Service Area</h3>
                  <p className="text-gray-600 mt-1">Pakistan-wide</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Service Cities</h3>
              <div className="flex flex-wrap gap-2">
                {['Gujranwala', 'Lahore', 'Faisalabad', 'Sialkot', 'Multan', 'Karachi', 'Peshawar', 'Quetta'].map(city => (
                  <span key={city} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{city}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Send an Inquiry</h2>
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p>Your inquiry has been received. We will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-green-700 underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input required type="text" className="w-full border border-gray-300 rounded p-3 focus:ring-accent focus:border-accent" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-3 focus:ring-accent focus:border-accent" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input required type="tel" className="w-full border border-gray-300 rounded p-3 focus:ring-accent focus:border-accent" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border border-gray-300 rounded p-3 focus:ring-accent focus:border-accent" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product / Requirement</label>
                  <input type="text" className="w-full border border-gray-300 rounded p-3 focus:ring-accent focus:border-accent" value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea required rows="4" className="w-full border border-gray-300 rounded p-3 focus:ring-accent focus:border-accent" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accentDark text-white font-bold py-4 rounded transition-colors">
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
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
console.log('Site files generated successfully.');
