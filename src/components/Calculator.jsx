import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Zap, Sun, Cpu, Leaf, Home, ArrowRight } from 'lucide-react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(2500);
  const [systemType, setSystemType] = useState('residential');

  const [results, setResults] = useState({
    systemSize: 3,
    annualSavings: 30000,
    annualEnergy: 4320,
    roofSpace: 240,
    basePrice: 199138,
    subsidy: 78000,
    effectiveCost: 121138,
  });

  const ELECTRICITY_RATE = 7;
  const UNITS_PER_KW_MONTH = 120;
  const BASE_PRICE_PER_KW = 66379;

  useEffect(() => {
    const size = Math.max(1, Math.round(inputValue / (ELECTRICITY_RATE * UNITS_PER_KW_MONTH)));
    const annualEnergy = size * 1440;
    const annualSavings = annualEnergy * ELECTRICITY_RATE;
    const roofSpace = size * 80;
    const basePrice = Math.round(size * BASE_PRICE_PER_KW);
    
    let subsidy = 0;
    if (systemType === 'residential') {
      subsidy = size === 1 ? 30000 : size === 2 ? 60000 : size >= 3 ? 78000 : 0;
    }
    
    const effectiveCost = basePrice - subsidy;
    setResults({ systemSize: size, annualSavings, annualEnergy, roofSpace, basePrice, subsidy, effectiveCost });
  }, [inputValue, systemType]);

  const resultCards = [
    { label: 'Ideal System Size', value: `${results.systemSize} kW`, icon: <Sun className="w-5 h-5" />, color: 'from-orange-400 to-amber-500' },
    { label: 'Annual Savings', value: `₹${results.annualSavings.toLocaleString()}`, icon: <Wallet className="w-5 h-5" />, color: 'from-emerald-400 to-green-600' },
    { label: 'Annual Energy', value: `${results.annualEnergy.toLocaleString()} Units`, icon: <Zap className="w-5 h-5" />, color: 'from-sky-400 to-blue-600' },
    { label: 'Roof Space Needed', value: `${results.roofSpace} Sqft`, icon: <Home className="w-5 h-5" />, color: 'from-violet-400 to-purple-600' },
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary relative overflow-hidden">

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs mb-3">Solar Savings Calculator</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            How Much Can <span className="text-primary">You Save?</span>
          </h2>
          <p className="text-white/60 mt-4 text-base max-w-lg mx-auto">
            Enter your monthly electricity bill and instantly see your personalised solar system recommendation.
          </p>
        </motion.div>

        {/* ── EQUATION BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.06] border border-white/10 backdrop-blur-sm rounded-3xl p-5 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">

            {/* Price */}
            <div className="flex items-center gap-4 px-8 py-2 w-full md:w-auto justify-center">
              <div className="w-11 h-11 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Price (Excl. GST)</p>
                <p className="text-xl font-black text-white">₹{results.basePrice.toLocaleString()}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center px-6 text-white/20 text-2xl font-thin select-none">−</div>

            {/* Subsidy */}
            <div className="flex items-center gap-4 px-8 py-2 w-full md:w-auto justify-center">
              <div className="w-11 h-11 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Govt. Subsidy</p>
                <p className="text-xl font-black text-emerald-400">₹{results.subsidy.toLocaleString()}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center px-6 text-white/20 text-2xl font-thin select-none">=</div>

            {/* Effective Cost */}
            <div className="flex items-center gap-4 px-8 py-2 w-full md:w-auto justify-center">
              <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Your Effective Cost</p>
                <p className="text-2xl font-black text-primary">₹{results.effectiveCost.toLocaleString()}</p>
              </div>
            </div>

          </div>
          <p className="text-center text-[10px] text-white/25 mt-5 uppercase tracking-widest">
            * Taxes + Net-metering extra. Pricing is estimated.
          </p>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT — Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Bill Input Card */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full transition-transform duration-500 group-hover:scale-150" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/5 rounded-full" />

              <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                System Type
              </p>
              
              <div className="flex bg-slate-100 p-1.5 rounded-xl mb-8 relative z-10 w-full">
                <button
                  onClick={() => setSystemType('residential')}
                  className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${systemType === 'residential' ? 'bg-white shadow text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Residential
                </button>
                <button
                  onClick={() => setSystemType('commercial')}
                  className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${systemType === 'commercial' ? 'bg-white shadow text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Commercial
                </button>
              </div>

              <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2 relative z-10">
                Monthly Electricity Bill
              </p>

              <div className="flex items-end gap-2 relative z-10 mb-6">
                <span className="text-3xl font-black text-secondary leading-none pb-1">₹</span>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="w-full text-6xl font-black text-secondary focus:outline-none bg-transparent leading-none"
                />
              </div>

              {/* Slider */}
              <div className="relative z-10">
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="100"
                  value={inputValue}
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="w-full accent-primary h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-2 uppercase">
                  <span>₹500</span>
                  <span>₹20,000</span>
                </div>
              </div>
            </div>



            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl py-4 px-8 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 group/btn"
            >
              Get My Free Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT — Result Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-2 gap-4"
          >
            {resultCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
              >
                {/* Subtle gradient top-right accent */}
                <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Icon badge */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-2 shadow-md`}>
                  {card.icon}
                </div>

                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
                <p className="text-2xl md:text-3xl font-black text-secondary leading-tight">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;