import React, { useState } from 'react';
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
