import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Arun Kumar",
    location: "Rajahmundry",
    text: "Excellent service and quality product! The installation was smooth and the team was very professional.",
    platform: "Justdial",
    link: "https://www.justdial.com/Rajahmundry/Suhana-Natural-Power-Systems-Near-Tallapudi-Rajahmundry/9999P8833-8833-210106184545-Q3Q3_BZDET",
    rating: 5
  },
  {
    name: "Venkata Rao",
    location: "Tallapudi",
    text: "Suhana Solar transformed our home energy. We are saving 80% on bills. Highly recommended for sustainable energy.",
    platform: "Google",
    link: "https://www.justdial.com/Rajahmundry/Suhana-Natural-Power-Systems-Near-Tallapudi-Rajahmundry/9999P8833-8833-210106184545-Q3Q3_BZDET",
    rating: 5
  },
  {
    name: "Suresh Reddy",
    location: "West Godavari",
    text: "Top player in solar energy systems. Courteous staff and prompt assistance. Best quality components used.",
    platform: "Justdial",
    link: "https://www.justdial.com/Rajahmundry/Suhana-Natural-Power-Systems-Near-Tallapudi-Rajahmundry/9999P8833-8833-210106184545-Q3Q3_BZDET",
    rating: 5
  },
  {
    name: "Lakshmi Narayana",
    location: "Kovvur",
    text: "Authorized MNRE partner. Trusted quality and great support during the subsidy process. Very happy with the result.",
    platform: "Google",
    link: "https://www.justdial.com/Rajahmundry/Suhana-Natural-Power-Systems-Near-Tallapudi-Rajahmundry/9999P8833-8833-210106184545-Q3Q3_BZDET",
    rating: 5
  },
  {
    name: "Satyanarayana",
    location: "Rajahmundry",
    text: "Professional installation and lifetime support. Suhana Solar is clearly the best in Andhra Pradesh.",
    platform: "Justdial",
    link: "https://www.justdial.com/Rajahmundry/Suhana-Natural-Power-Systems-Near-Tallapudi-Rajahmundry/9999P8833-8833-210106184545-Q3Q3_BZDET",
    rating: 5
  }
];

const ReviewsTicker = () => {
  // Duplicate reviews to create infinite effect
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4"
        >
          Social Proof
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
          Trusted by <span className="text-primary">Thousands</span> of Customers
        </h2>
        <p className="text-slate-500 max-w-2xl">
          We take pride in our service quality. See what our happy customers have to say about their switch to Suhana Solar.
        </p>
      </div>

      {/* Ticker Container */}
      <div className="relative flex whitespace-nowrap overflow-hidden py-10">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
        >
          {extendedReviews.map((review, idx) => (
            <a 
              key={idx}
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-[350px] md:w-[450px] whitespace-normal flex-shrink-0 group"
            >
              <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100 h-full flex flex-col hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                {/* Platform Badge */}
                <div className="absolute top-6 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${review.platform === 'Google' ? 'text-blue-500' : 'text-rose-500'}`}>
                    {review.platform}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${review.platform === 'Google' ? 'bg-blue-500' : 'bg-rose-500'}`} />
                </div>

                <div className="mb-6 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-primary/10 absolute -left-2 -top-2" />
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                  "{review.text}"
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-secondary font-black text-xl border border-white shadow-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-secondary">{review.name}</h5>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{review.location}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://www.justdial.com/Rajahmundry/Suhana-Natural-Power-Systems-Near-Tallapudi-Rajahmundry/9999P8833-8833-210106184545-Q3Q3_BZDET"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors uppercase tracking-widest text-xs"
        >
          View all our verified reviews on Justdial
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default ReviewsTicker;
