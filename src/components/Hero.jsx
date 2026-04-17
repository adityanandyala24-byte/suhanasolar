import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';

const Hero = () => {
  const [partnerIndex, setPartnerIndex] = React.useState(0);
  
  const socialLinks = [
    { 
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      href: "https://instagram.com", 
      color: "hover:bg-[#E1306C]" 
    },
    { 
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ), 
      href: "https://facebook.com", 
      color: "hover:bg-[#1877F2]" 
    },
    { 
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: "https://linkedin.com", 
      color: "hover:bg-[#0077b5]" 
    },
    { 
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ), 
      href: "https://youtube.com", 
      color: "hover:bg-[#FF0000]" 
    },
  ];

  const partners = [
    { name: 'Vikram Solar', logo: '/partners/vikramsolar.png' },
    { name: 'Waaree', logo: '/partners/waaree.png' }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPartnerIndex(prev => (prev + 1) % partners.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [partnerIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2070" 
          alt="Solar Panels Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content: High Impact Messaging */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Andhra's Most Trusted Solar Partner
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold leading-[1.1] tracking-tight">
            Stop Paying for <br/>
            <span className="text-primary italic">Electricity!</span>
          </h1>

          <p className="text-xl text-slate-200 max-w-xl leading-relaxed">
            Switch to Suhana Solar and save up to 90% on your monthly bills. 
            Tailored solar solutions for Homes, Businesses, and Industries.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
            {[
              "0% Down Payment Options",
              "25 Years Warranty",
              "High Yield Performance",
              "Seamless Maintenance"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/90">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="tel:+919618727373" className="flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-100 transition-all active:scale-95">
              <Phone className="w-5 h-5 text-primary" />
              +91 96187 27373
            </a>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 ${link.color} hover:shadow-lg hover:-translate-y-1 active:scale-90`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content: Lead Form (Interactive) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/20 relative min-h-[450px] flex flex-col justify-center items-center text-center">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-2xl rotate-12 -z-10 shadow-lg" />
            
            <h3 className="text-3xl font-black text-secondary mb-2">Trusted Partners</h3>
            <p className="text-slate-500 text-sm mb-12">Authorized distributors of Tier-1 Solar Panels</p>

            <div className="relative w-full flex-grow flex flex-col items-center justify-center">
              <div className="relative w-full h-32 md:h-40">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={partnerIndex}
                    src={partners[partnerIndex].logo}
                    alt={partners[partnerIndex].name}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-contain px-4 drop-shadow-xl"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="flex gap-3 justify-center mt-8">
              {partners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPartnerIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === partnerIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <p className="text-[10px] text-slate-400 mt-8 uppercase tracking-widest font-bold">
              Trusted by 10,000+ Happy Customers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
