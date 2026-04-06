import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SlideDrawer = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-deep-void/60 backdrop-blur-sm z-[90] lg:hidden"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 glass-heavy z-[100] border-l border-white/10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] lg:mt-16"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-exo2 font-medium">{title}</h3>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlideDrawer;
