import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Zap, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Solutions", links: ["Residential Solar", "Commercial Solar", "Industrial Plants", "Solar Water Heaters"] },
    { title: "Quick Links", links: ["About Us", "Our Process", "Gallery", "Contact Us"] }
  ];

  return (
    <footer className="bg-secondary pt-24 pb-12 relative overflow-hidden text-white">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center">
              <img 
                src="/suhana-logo.png" 
                alt="Suhana Solar Logo" 
                className="h-[85px] md:h-[100px] w-auto object-contain bg-white px-5 py-3 rounded-2xl shadow-lg" 
              />
            </div>
            <p className="text-white/50 leading-relaxed text-sm">
              Providing premium solar energy solutions since 2010. We empower homes and businesses to achieve energy independence with cutting-edge technology.
            </p>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-white/40 hover:text-primary transition-all flex items-center gap-2 group text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Location Info */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8">Location</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Main Road, Tallapudi,<br/>
                  West Godavari, Andhra Pradesh
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                <a href="tel:+919618727373" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-2 rounded-xl transition-all">
                   <Phone className="w-4 h-4 text-primary" />
                   <span className="text-xs font-bold font-mono">+91 96187 27373</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-xs font-medium tracking-wide">
            © {currentYear} Suhana Natural Power Systems. Designed for Excellence.
          </p>
          <div className="flex gap-8 text-white/30 text-xs font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
