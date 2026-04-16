import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { id: 1, name: "TATA Power", img: "/partners/tata power .png" },
    { id: 2, name: "Adani Solar", img: "/partners/adani solar.png" },
    { id: 3, name: "Waaree", img: "/partners/waaree.png" },
    { id: 4, name: "Vikram Solar", img: "/partners/vikramsolar.png" },
    { id: 5, name: "Luminous", img: "/partners/luminous.png" },
    { id: 6, name: "Eastman", img: "/partners/eastman energy.png" },
    { id: 7, name: "Polycab", img: "/partners/polycab.png" },
    { id: 8, name: "Premier", img: "/partners/premier energies.png" },
  ];

  // Double the array for seamless infinite scroll
  const scrollingPartners = [...partners, ...partners];

  return (
    <div className="w-full mt-10 md:mt-2 overflow-hidden group pb-12 bg-slate-50 border-y border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6 pt-10 mb-10 flex items-center gap-6">
        <span className="text-xs md:text-sm font-black text-secondary uppercase tracking-[0.5em] whitespace-nowrap">Trusted Technology Partners</span>
        <div className="h-0.5 bg-gradient-to-r from-primary/30 to-transparent flex-grow rounded-full"></div>
      </div>
      
      <div className="relative h-32 md:h-40 flex items-center">
        {/* Extreme Side Fades for Depth */}
        <div className="absolute inset-y-0 left-0 w-48 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-24 md:gap-32 items-center whitespace-nowrap px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear",
          }}
          style={{ width: 'fit-content' }}
        >
          {scrollingPartners.map((partner, idx) => (
            <motion.div
              key={`${partner.id}-${idx}`}
              whileHover={{ scale: 1.1, y: -8 }}
              className="flex flex-col items-center gap-4 cursor-pointer transition-all"
            >
              {/* High-Contrast Bold Container */}
              <div className="w-40 h-20 md:w-56 md:h-28 bg-white rounded-3xl flex items-center justify-center border-2 border-slate-100 hover:border-primary transition-all hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group/item relative overflow-hidden shadow-sm">
                 <div className="w-32 h-14 md:w-44 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden relative border border-slate-100 group-hover/item:bg-white transition-colors p-4">
                    {/* Bottom Indicator */}
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-primary/40 group-hover/item:bg-primary transition-colors" />
                    
                    {/* Partner Logo Image */}
                    <img 
                      src={partner.img} 
                      alt={partner.name}
                      className="w-full h-full object-contain transition-all duration-500"
                    />
                 </div>
                 
                 {/* Subtle brand tint on hover */}
                 <div className="absolute inset-0 bg-primary/0 group-hover/item:bg-primary/[0.02] transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .group:hover > div > div {
          animation-play-state: paused !important;
        }
      `}} />
    </div>
  );
};

export default Partners;
