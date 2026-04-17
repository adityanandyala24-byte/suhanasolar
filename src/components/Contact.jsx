import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [propertyType, setPropertyType] = useState('');

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Connect with Us</p>
          <h2 className="text-4xl md:text-5xl text-secondary mb-8">
            Ready to Switch to <br/>
            <span className="text-primary">Solar Power?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Fill out the form or reach out via our contact details. Our team will get back to you within 24 hours with a customized solar proposal.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone</p>
                <p className="text-xl font-bold text-secondary">+91 96187 27373</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-xl font-bold text-secondary">suhana.snps@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Office</p>
                <p className="text-lg font-bold text-secondary leading-snug">
                  Main Road, Tallapudi,<br/>West Godavari, Andhra Pradesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background-alt p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl"
        >
          <form className="space-y-6" action="https://formsubmit.co/suhana.snps@gmail.com" method="POST">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact Request - Suhana Solar" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Arjun Reddy"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="you@email.com"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Property Type</label>
              <select 
                name="property_type"
                required
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-600"
              >
                <option value="">Select Property Type</option>
                <option value="Home">Home / Residential</option>
                <option value="Commercial">Commercial / Industrial</option>
              </select>
            </div>

            {propertyType === 'Home' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2 !mt-6 overflow-hidden"
              >
                <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Roof Type</label>
                <select 
                  name="roof_type"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-600"
                >
                  <option value="">Select Roof Type</option>
                  <option value="Concrete Slab">Concrete Slab</option>
                  <option value="Metal Rooftop">Metal Rooftop</option>
                  <option value="Asbestos / Tiles">Asbestos / Tiles</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>
            )}

            {propertyType === 'Commercial' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2 !mt-6 overflow-hidden"
              >
                <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Estimated Capacity</label>
                <select 
                  name="capacity_estimate"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-600"
                >
                  <option value="">Select Estimated Capacity</option>
                  <option value="Don't Know">I don't know</option>
                  <option value="Under 50kW">Under 50 kW</option>
                  <option value="50kW - 100kW">50 kW - 100 kW</option>
                  <option value="100kW+">100 kW+</option>
                </select>
              </motion.div>
            )}

            <div className="space-y-2 !mt-6">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1">Additional Details (Optional)</label>
              <textarea 
                rows="2"
                name="message"
                placeholder="Any specific requirements or queries?"
                className="w-full px-6 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none text-slate-600"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg group">
              Send Message
              <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919618727373" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce hover:animate-none"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </section>
  );
};

export default Contact;
