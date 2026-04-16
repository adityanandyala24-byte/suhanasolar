import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Zap, ShieldCheck, FileDown, ArrowRight } from 'lucide-react';
import BrochureModal from './BrochureModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlights = [
    { 
      icon: <Zap className="text-primary w-6 h-6" />, 
      title: "10+ Years Legacy", 
      desc: "A decade of expertise in delivering high-efficiency solar power." 
    },
    { 
      icon: <Award className="text-primary w-6 h-6" />, 
      title: "Authorized Partner", 
      desc: "MNRE & APEPDCL authorized vendor ensuring industry standards." 
    },
    { 
      icon: <ShieldCheck className="text-primary w-6 h-6" />, 
      title: "Quality First", 
      desc: "Top-tier components sourced from the world's leading manufacturers." 
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right -z-0" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-secondary font-bold text-[10px] tracking-[0.2em] uppercase mb-6">
            Our Story & Mission
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-black leading-tight mb-6">
            Pioneering the <br/>
            <span className="text-primary">Solar Revolution</span> <br/>
            in Andhra Pradesh
          </h2>
          
          <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-xl">
            Suhana Natural Power Systems is more than just a solar provider. We are your partners in energy independence. By combining cutting-edge technology with local expertise, we help you transition to a cleaner, cheaper future.
          </p>

          <div className="space-y-4">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className="mt-1 w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <div className="group-hover:text-white transition-colors scale-75">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-secondary text-base mb-1">{item.title}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual Experience */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000" 
              alt="Solar Innovation" 
              className="w-full h-auto"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent" />
          </div>



          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 right-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl -z-10" />

          {/* Download Brochure Button (Floating on Desktop) */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex justify-center w-full max-w-max">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-6 bg-white px-8 py-6 rounded-[2rem] shadow-2xl border border-slate-100 group hover:scale-105 hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-xl shadow-primary/30">
                <FileDown className="w-8 h-8" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Free Brochure</span>
                <span className="block text-xl font-black text-secondary tracking-tight">Download Now</span>
              </div>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform ml-2" />
            </button>
          </div>

          {/* Download Brochure Button (Mobile) */}
          <div className="mt-16 flex justify-center md:hidden relative z-20">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl font-black shadow-xl border border-slate-50 group"
            >
              <FileDown className="w-5 h-5 text-primary" />
              <span className="text-secondary">Download Brochure</span>
              <ArrowRight className="w-4 h-4 ml-2 text-primary group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      <BrochureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default About;
