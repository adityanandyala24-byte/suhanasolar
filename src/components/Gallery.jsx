import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const images = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    title: "our SNPS Installations",
    category: i % 3 === 0 ? "Commercial" : i % 2 === 0 ? "Industrial" : "Residential",
    src: `/gallery/project-${i + 1}.jpeg`
  }));

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [index, images.length]);

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text and Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-widest uppercase">
            <Zap className="w-4 h-4 text-primary" />
            Project Gallery
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-secondary tracking-tight leading-tight">
            our <span className="text-primary italic">Solar Footprint</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed">
            Explore our hallmark projects. From compact residential rooftops to massive industrial mega-plants, precision engineering is in our DNA.
          </p>


        </div>

        {/* Right Column: Image Slider */}
        <div className="lg:col-span-7 relative h-[500px] md:h-[600px] lg:h-[650px] w-full rounded-[2rem] overflow-hidden shadow-2xl glass-card group">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Dual Layer Technique */}
              <div 
                className="absolute inset-0 bg-cover bg-center blur-xl opacity-40 scale-110"
                style={{ backgroundImage: `url(${images[index].src})` }}
              />
              <img 
                src={images[index].src} 
                alt={images[index].title}
                className="absolute inset-0 w-full h-full object-contain z-10"
              />
              
              {/* Beautiful Gradient overlay for text */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-20 pointer-events-none" />

              {/* Slider Content */}
              <div className="absolute inset-x-0 bottom-0 z-30 p-8 md:p-10 flex w-full items-end justify-between">
                <div>
                  <span className="px-4 py-1.5 bg-primary text-secondary text-xs font-black rounded-full uppercase tracking-widest shadow-lg mb-3 inline-block">
                    {images[index].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {images[index].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Centered Navigation Controls */}
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-xl text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 group opacity-80 hover:opacity-100"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-xl text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 group opacity-80 hover:opacity-100"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Indicators inside image */}
          <div className="absolute top-4 right-6 z-40 flex flex-wrap justify-end gap-1.5 max-w-[50%]">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-6 bg-primary' : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;
