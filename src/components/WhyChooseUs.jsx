import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Users } from 'lucide-react';

const slides = [
  { src: "/gallery-1.jpeg", caption: "Rooftop Solar Installation" },
  { src: "/gallery-2.jpeg", caption: "Industrial Solar Project" },
  { src: "/gallery-3.jpeg", caption: "Residential Solar Setup" },
  { src: "/gallery-4.jpeg", caption: "Commercial Solar Array" },
];

const PhotoSlideshow = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          {/* Blurred background fill — removes ugly letterbox bars */}
          <img
            src={slide.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60"
          />
          {/* Main image — full view, no cropping */}
          <img
            src={slide.src}
            alt={slide.caption}
            className="relative z-10 w-full h-full object-contain"
          />
          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-20" />
          {/* Caption */}
          <div className="absolute bottom-5 left-6 text-white z-30">
            <p className="text-sm font-semibold tracking-wide">{slide.caption}</p>
          </div>
        </div>
      ))}


      {/* Dot navigation */}
      <div className="absolute bottom-5 right-6 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
        {current + 1} / {slides.length}
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
            Selecting a solar provider is a 25-year commitment. At SNPS, we prioritize long-term performance
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
          <PhotoSlideshow />
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
