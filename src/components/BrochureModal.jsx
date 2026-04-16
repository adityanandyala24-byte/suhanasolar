import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, User, MapPin, Phone, Loader2, CheckCircle } from 'lucide-react';

const BrochureModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/suhana.snps@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pincode: formData.pincode,
          _subject: 'New Brochure Download Request - Suhana Solar',
          message: `User ${formData.name} requested the company brochure.`
        })
      });

      if (response.ok) {
        setStatus('success');
        // Open PDF in new tab
        window.open('/brochure.pdf', '_blank');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl relative"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>

          <div className="p-8 md:p-10">
            {status !== 'success' ? (
              <>
                <div className="mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-black text-secondary mb-2">Download Brochure</h2>
                  <p className="text-slate-500">Please provide your details to access our full company profile and solar solutions PDF.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Phone Number (10 digits)"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="text"
                      pattern="[0-9]{6}"
                      placeholder="Pincode (6 digits)"
                      value={formData.pincode}
                      onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>

                  <button
                    disabled={status === 'submitting'}
                    className="w-full bg-secondary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 group hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 disabled:opacity-70 mt-4"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Get Brochure Now
                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-secondary mb-4">Brochure Opened!</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Thank you for your interest! The brochure has been opened in a new tab. If it didn't open, please check your browser's popup blocker.
                </p>
                <button 
                  onClick={onClose}
                  className="text-primary font-bold hover:underline"
                >
                  Close this window
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BrochureModal;
