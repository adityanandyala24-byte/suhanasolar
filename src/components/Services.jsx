import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Settings, Zap } from 'lucide-react';

const Services = () => {
  const steps = [
    { 
      number: "01",
      icon: <Search className="w-8 h-8" />, 
      title: "Consultation", 
      desc: "We analyze your energy needs and roof health for a custom proposal." 
    },
    { 
      number: "02",
      icon: <ClipboardCheck className="w-8 h-8" />, 
      title: "Site Survey", 
      desc: "Our engineers visit your site to ensure precision in design and shadows." 
    },
    { 
      number: "03",
      icon: <Settings className="w-8 h-8" />, 
      title: "Installation", 
      desc: "Expert team installs the high-performance system within 48 hours." 
    },
    { 
      number: "04",
      icon: <Zap className="w-8 h-8" />, 
      title: "Commissioning", 
      desc: "We handle the net-metering and switch on your savings!" 
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            How it Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-secondary font-black"
          >
            Your Journey to <span className="text-primary grayscale-[0.2]">Solar in 4 Steps</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group text-center"
              >
                <div className="mb-8 relative inline-block">
                  <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-3xl shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-white text-secondary rounded-full flex items-center justify-center font-black border-4 border-slate-100 shadow-md">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
