const fs = require('fs');
const path = require('path');

const files = {
  'src/pages/About.jsx': `import React from 'react';
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
              src="/images/image$1.png" 
              alt="Industrial Machinery" 
              className="w-full h-full object-cover object-center rounded-sm grayscale hover:grayscale-0 transition-all duration-700" 
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
`,
  'src/pages/Manufacturing.jsx': `import React from 'react';
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
`,
  'src/pages/Quality.jsx': `import React from 'react';
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
`,
  'src/pages/Contact.jsx': `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-32 pb-24 bg-[#0a0c10] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Have a Plastic Manufacturing Requirement?</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Tell us what you need and let's discuss the right solution for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="bg-[#13161c] p-10 rounded-sm border border-white/5 space-y-10">
              <div>
                <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Address</h3>
                <p className="text-gray-300 text-lg">Alam Chowk, Gujranwala,<br/>Punjab, Pakistan, 52250</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Phone</h3>
                <p className="text-gray-300 text-lg">0302 6651175</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Email</h3>
                <a href="mailto:ibrahimplasticindustry@gmail.com" className="text-gray-300 text-lg hover:text-white transition-colors">ibrahimplasticindustry@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="bg-accent/10 border border-accent/20 p-10 rounded-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Inquiry Received</h3>
                <p className="text-gray-400 text-lg">Thank you. Our team will contact you shortly to discuss your manufacturing requirement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name *</label>
                    <input required type="text" className="w-full bg-[#13161c] border border-white/10 text-white rounded-sm p-4 focus:border-accent focus:outline-none transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company</label>
                    <input type="text" className="w-full bg-[#13161c] border border-white/10 text-white rounded-sm p-4 focus:border-accent focus:outline-none transition-colors" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone *</label>
                    <input required type="tel" className="w-full bg-[#13161c] border border-white/10 text-white rounded-sm p-4 focus:border-accent focus:outline-none transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" className="w-full bg-[#13161c] border border-white/10 text-white rounded-sm p-4 focus:border-accent focus:outline-none transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Requirement *</label>
                  <textarea required rows="5" className="w-full bg-[#13161c] border border-white/10 text-white rounded-sm p-4 focus:border-accent focus:outline-none transition-colors" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="w-full bg-white hover:bg-gray-200 text-primary font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95">
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
`,
  'src/components/Footer.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050608] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-xl font-bold text-white tracking-widest mb-6">IBRAHIM PLASTIC INDUSTRY</h2>
            <p className="max-w-sm text-gray-500 font-light leading-relaxed">
              Plastic manufacturing solutions for businesses across Pakistan. Reliable production, built around your business requirements.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Manufacturing', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : \`/\${item.toLowerCase()}\`} className="hover:text-accent transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Contact Info</h3>
            <ul className="space-y-4 font-light">
              <li className="flex items-start">
                <MapPin className="mr-4 text-gray-600 shrink-0 mt-1" size={18} />
                <span>Alam Chowk, Gujranwala,<br/>Punjab, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-4 text-gray-600 shrink-0" size={18} />
                <span>0302 6651175</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-4 text-gray-600 shrink-0" size={18} />
                <a href="mailto:ibrahimplasticindustry@gmail.com" className="hover:text-accent transition-colors">
                  ibrahimplasticindustry@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Ibrahim Plastic Industry.</p>
          <p className="mt-4 md:mt-0">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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
console.log('Other Cinematic Site files generated successfully.');
