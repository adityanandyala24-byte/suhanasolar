import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const InternshipNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show on the front page
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] max-w-sm w-[calc(100%-3rem)] bg-white rounded-2xl shadow-2xl border border-primary/20 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={18} />
          </button>
          
          <div className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Sparkles size={20} />
              </div>
              <div className="pt-0.5">
                <h4 className="font-bold text-secondary mb-1">Internships Available!</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  We offer exciting internships. Quickly grab the opportunity to kickstart your career in green energy.
                </p>
                <Link 
                  to="/careers" 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors group"
                  onClick={() => setIsVisible(false)}
                >
                  View Opportunities <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InternshipNotification;
