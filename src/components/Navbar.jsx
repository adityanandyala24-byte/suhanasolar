import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#services' },
    { name: 'Solutions', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-2 left-4 right-4 md:top-3 md:left-8 md:right-8 z-50">
      <div className={`max-w-7xl mx-auto px-6 py-2 flex justify-between items-center bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transition-all duration-500 ${isScrolled ? 'shadow-[0_20px_50px_rgb(0,0,0,0.2)]' : ''}`}>
        <div className="flex items-center">
          <img 
            src="/suhana-logo.png" 
            alt="Suhana Solar Logo" 
            className="h-[40px] md:h-[50px] w-auto object-contain cursor-pointer transition-transform scale-[1.3] md:scale-[1.4] origin-left hover:scale-[1.35] md:hover:scale-[1.45]" 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest transition-all hover:text-primary text-secondary/80"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-primary text-secondary font-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg bg-primary/10 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-8 flex flex-col gap-6 shadow-2xl animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary text-lg font-bold tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-secondary text-center py-4 rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
