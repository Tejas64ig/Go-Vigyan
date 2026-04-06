import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const GlassButton = ({ 
  children, 
  onClick, 
  variant = 'primary', // primary (saffron), secondary (green), ghost (light glass), danger (red)
  type = 'button',
  loading = false,
  icon: Icon,
  className = '',
  disabled = false
}) => {
  
  let baseClass = 'relative flex items-center justify-center gap-2 px-4 py-2 sm:py-3 sm:px-6 rounded-lg font-inter font-medium text-sm sm:text-base overflow-hidden transition-all duration-300 ';
  
  switch(variant) {
    case 'primary':
      baseClass += 'bg-gradient-to-r from-saffron to-[#ffaa33] text-deep-void border border-white/20 shadow-[0_0_15px_rgba(255,140,0,0.4)] hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]';
      break;
    case 'secondary':
      baseClass += 'bg-gradient-to-r from-sacred-green to-[#33e27a] text-deep-void border border-white/20 shadow-[0_0_15px_rgba(0,200,83,0.4)] hover:shadow-[0_0_25px_rgba(0,200,83,0.6)]';
      break;
    case 'danger':
      baseClass += 'bg-gradient-to-r from-critical-red to-[#ff6666] text-white border border-white/20 shadow-[0_0_15px_rgba(255,61,61,0.4)] hover:shadow-[0_0_25px_rgba(255,61,61,0.6)]';
      break;
    case 'ghost':
    default:
      baseClass += 'glass-light text-white hover:glass-medium';
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={`${baseClass} ${(disabled || loading) ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={18} />
      ) : Icon ? (
        <Icon size={18} />
      ) : null}
      <span>{loading ? 'Processing...' : children}</span>
    </motion.button>
  );
};

export default GlassButton;
