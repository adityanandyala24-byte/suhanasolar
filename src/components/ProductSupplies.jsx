import React from 'react';
import { motion } from 'framer-motion';

const ProductSupplies = () => {
  const products = [
    { title: "Solar Panels", img: "/products/solar panels.jpeg", category: "A-Grade Mono/Poly" },
    { title: "High-End Inverters", img: "/products/inventers.jpg", category: "Grid-Tied & Hybrid" },
    { title: "ACDB & DCDB", img: "/products/acdb dcdb.webp", category: "Protection Units" },
    { title: "Cables & Accs", img: "/products/cables and Accs.jpg", category: "Standard Grade" },
  ];

  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Inventory & Supplies</p>
            <h2 className="text-4xl md:text-5xl text-secondary">
              Premium <span className="text-primary">Solar Components</span>
            </h2>
          </div>
          <div className="text-slate-500 text-lg md:text-right hidden md:block max-w-sm">
            We supply only the highest quality components from global industry leaders for maximum efficiency.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[420px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Product Image */}
              <img 
                src={product.img} 
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent group-hover:via-secondary/40 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase bg-primary/10 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {product.title}
                  </h3>
                  
                  {/* Additional info revealed on hover */}
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="text-white text-sm font-bold flex items-center gap-2 group/btn">
                      Technical Specs 
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-secondary group-hover/btn:rotate-45 transition-transform duration-300">
                        ↗
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Subtle top light effect */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSupplies;
