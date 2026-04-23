import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Users } from 'lucide-react';

const slides = [
  { src: "/gallery-1.jpeg", caption: "Premium Solar Setup" },
  { src: "/gallery-2.jpeg", caption: "Expert Installations" },
  { src: "/gallery-3.jpeg", caption: "Clean Energy Solutions" },
  { src: "/gallery-4.jpeg", caption: "High Performance Panels" },
];

const Carousel3D = () => {
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[350px] md:h-[450px] w-full flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-[320px] md:max-w-[400px]">
        {slides.map((slide, i) => {
          const diff = (i - index + slides.length) % slides.length;
          
          let x = 0;
          let scale = 1;
          let zIndex = 0;
          let opacity = 0;
          let rotateY = 0;

          if (diff === 0) {
            x = 0;
            scale = 1;
            zIndex = 30;
            opacity = 1;
            rotateY = 0;
          } else if (diff === 1 || diff === - (slides.length - 1)) {
            x = "40%";
            scale = 0.8;
            zIndex = 20;
            opacity = 0.6;
            rotateY = -25;
          } else if (diff === slides.length - 1) {
            x = "-40%";
            scale = 0.8;
            zIndex = 20;
            opacity = 0.6;
            rotateY = 25;
          }

          return (
            <motion.div
              key={slide.src}
              animate={{
                x,
                scale,
                zIndex,
                opacity,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIndex(i)}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src={slide.src} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={slide.caption}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                {diff === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 left-6 right-6 text-white"
                  >
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-1">SNPS Project</p>
                    <p className="text-lg font-black leading-tight uppercase">{slide.caption}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-8 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Authorized Vendor", icon: <ShieldCheck className="w-6 h-6" />, desc: "MNRE & APEPDCL approved partner ensuring certified reliability." },
    { title: "Premium Components", icon: <Cpu className="w-6 h-6" />, desc: "We source high-efficiency panels and industry-grade inverters." },
    { title: "Expert Technical Team", icon: <Users className="w-6 h-6" />, desc: "Certified engineers with decades of cumulative experience." },
  ];

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The SNPS Edge</p>
          <h2 className="text-4xl md:text-5xl text-white mb-8">
            Why We Are Your <br />
            <span className="text-primary grayscale-[0.1]">Trusted Solar Partner</span>
          </h2>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Selecting a solar provider is a 30-year commitment. At SNPS, we prioritize long-term performance
            and transparency over short-term gains. Our technical depth and government backing make us
            the preferred choice for thousands.
          </p>

          <div className="space-y-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-2 bg-white/5 border border-white/10 rounded-lg text-primary">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">{reason.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative lg:block"
        >
          <Carousel3D />
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-light/30 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
