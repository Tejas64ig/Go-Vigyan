import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deep-void/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md"
          >
            <GlassCard tier={1}>
              <h3 className="text-xl font-exo2 text-white mb-2">{title}</h3>
              <p className="text-white/70 font-inter mb-6">{message}</p>
              
              <div className="flex justify-end gap-3 mt-4">
                <GlassButton variant="ghost" onClick={onCancel}>
                  Cancel
                </GlassButton>
                <GlassButton variant="danger" onClick={onConfirm}>
                  Delete
                </GlassButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDialog;
