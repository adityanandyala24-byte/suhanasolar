import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ value, suffix, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return () => controls.stop();
    }
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-1 group cursor-default"
    >
      <div className="relative inline-block">
        <h3 className="text-4xl md:text-6xl font-black text-primary font-heading tracking-tighter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
          {displayValue}{suffix}
        </h3>
      </div>
      <p className="text-white/60 font-bold tracking-widest uppercase text-[10px] md:text-xs group-hover:text-white transition-colors">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: 13, suffix: "+", label: "Years Experience" },
    { value: 5000, suffix: "+", label: "Tons CO2 Saved" },
    { value: 800, suffix: "+", label: "Happy Customers" },
    { value: 5, suffix: "MW+", label: "Installed Capacity" },
  ];

  return (
    <section className="py-20 bg-secondary overflow-hidden relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <AnimatedCounter 
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
