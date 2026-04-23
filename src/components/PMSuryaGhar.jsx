import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Landmark, Coins, ShieldCheck, ArrowRight, Sun } from 'lucide-react';

const PMSuryaGhar = () => {
  const benefits = [
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "300 Units Free",
      desc: "Monthly free electricity for 1 crore households nationwide.",
      bgColor: "bg-amber-500"
    },
    {
      icon: <Coins className="text-white w-6 h-6" />,
      title: "₹78,000 Subsidy",
      desc: "Direct financial support for rooftop solar installations.",
      bgColor: "bg-emerald-500"
    },
    {
      icon: <Landmark className="text-white w-6 h-6" />,
      title: "Govt. Concessional Loans",
      desc: "Collateral-free loans at concessional interest rates.",
      bgColor: "bg-blue-600"
    },
    {
      icon: <ShieldCheck className="text-white w-6 h-6" />,
      title: "Authorized Support",
      desc: "Official Suhana Solar assistance for scheme registration.",
      bgColor: "bg-primary"
    }
  ];

  return (
    <section id="pmyojana" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-white to-emerald-500 opacity-50" />
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="/pmyojana.png" 
                alt="PM Surya Ghar Muft Bijli Yojana" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-600 animate-spin-slow" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Official Scheme</p>
                  <p className="text-sm font-black text-secondary uppercase">Muft Bijli Yojana</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-3xl -z-10 rotate-12" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold text-[10px] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Government Initiative
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-secondary leading-[1.1] mb-6">
              PM Surya Ghar <br/>
              <span className="text-primary italic">Muft Bijli Yojana</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Join the movement that aims to light up 1 crore households. Get direct financial assistance and move towards energy independence with the government's flagship solar scheme.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 ${benefit.bgColor} rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-slate-500 leading-normal">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-2xl font-black hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 group"
              >
                Check Your Eligibility
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => window.open('https://pmsuryaghar.gov.in/', '_blank')}
                className="flex items-center gap-3 bg-white text-secondary border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
              >
                Official Portal
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PMSuryaGhar;
