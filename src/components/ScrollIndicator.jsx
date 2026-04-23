import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'partners', label: 'Partners' },
  { id: 'about', label: 'About Us' },
  { id: 'pmsuryaghar', label: 'PM Surya Ghar' },
  { id: 'stats', label: 'Our Impact' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Our Products' },
  { id: 'whychooseus', label: 'Why Us' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'calculator', label: 'Calculator' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' }
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Handle progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: id === 'hero' ? 0 : element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-center gap-4 md:gap-6 py-4">
        {/* Progress Line Background */}
        <div className="absolute top-0 bottom-0 w-[1px] md:w-[2px] bg-slate-100 rounded-full overflow-hidden">
          {/* Active Progress Fill */}
          <motion.div 
            className="absolute top-0 w-full bg-primary/30"
            style={{ height: `${scrollProgress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
        
        {sections.map((section) => (
          <div key={section.id} className="relative flex items-center group">
            {/* Label - Hidden on mobile, shown on desktop hover/active */}
            <AnimatePresence>
              {(isHovered || activeSection === section.id) && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className={`absolute right-8 md:right-10 text-[9px] md:text-[10px] font-black uppercase tracking-tighter px-2 md:px-3 py-1 rounded-lg shadow-2xl border whitespace-nowrap pointer-events-none hidden md:block ${
                    activeSection === section.id 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-secondary border-slate-100'
                  }`}
                >
                  {section.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot Indicator */}
            <button
              onClick={() => scrollToSection(section.id)}
              className="relative z-10 w-3 h-3 md:w-4 md:h-4 flex items-center justify-center transition-all duration-300"
            >
              <div 
                className={`transition-all duration-500 rounded-full ${
                  activeSection === section.id 
                    ? 'w-2 h-2 md:w-3 md:h-3 bg-primary ring-2 md:ring-4 ring-primary/20 scale-110' 
                    : 'w-1 md:w-1.5 h-1 md:h-1.5 bg-slate-300 group-hover:bg-primary/50 group-hover:scale-125'
                }`} 
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
