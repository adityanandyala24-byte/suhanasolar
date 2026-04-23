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
            <div className="flex items-center gap-4">
              {[
                { name: 'Instagram', icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, href: "https://instagram.com" },
                { name: 'Facebook', icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, href: "https://facebook.com" },
                { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: "https://linkedin.com" },
                { name: 'YouTube', icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, href: "https://youtube.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
