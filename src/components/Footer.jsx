import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050608] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/images/logo.png" 
                alt="Ibrahim Plastic Industry Logo" 
                className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" 
              />
            </Link>
            <p className="max-w-sm text-gray-500 font-light leading-relaxed">
              Plastic manufacturing solutions for businesses across Pakistan. Reliable production, built around your business requirements.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Manufacturing', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-accent transition-colors font-light">
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
