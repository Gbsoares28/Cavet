import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    
    // Hide tooltip after 15 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-3 max-w-[280px] relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            >
              <X size={16} />
            </button>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-600 mt-1">
              <MessageCircle size={20} fill="currentColor" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">Precisa de ajuda?</p>
              <p className="text-xs text-slate-600">Nossa equipe está de plantão 24h para atender seu pet.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/5521986679262"
        target="_blank"
        rel="noreferrer"
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <div className="absolute -inset-2 bg-green-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-10">
          <MessageCircle size={32} />
        </div>
      </a>
      
    </div>
  );
}
