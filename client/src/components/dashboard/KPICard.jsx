import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const KPICard = ({ title, value, subtitle, icon: Icon, color, sparklineTrend }) => {

  // Map color to tailwind classes
  let borderGradient = '';
  let iconColor = '';
  let shadowGlow = '';
  
  if (color === 'saffron') {
    borderGradient = 'from-saffron via-[#fff] to-saffron';
    iconColor = 'text-saffron';
    shadowGlow = 'shadow-[0_0_15px_rgba(255,140,0,0.2)]';
  } else if (color === 'green') {
    borderGradient = 'from-sacred-green via-[#fff] to-sacred-green';
    iconColor = 'text-sacred-green';
    shadowGlow = 'shadow-[0_0_15px_rgba(0,200,83,0.2)]';
  } else if (color === 'blue') {
    borderGradient = 'from-blue-400 via-[#fff] to-blue-400';
    iconColor = 'text-blue-400';
    shadowGlow = 'shadow-[0_0_15px_rgba(96,165,250,0.2)]';
  } else if (color === 'red') {
    borderGradient = 'from-critical-red via-[#fff] to-critical-red';
    iconColor = 'text-critical-red';
    shadowGlow = 'shadow-[0_0_15px_rgba(255,61,61,0.2)]';
  } else {
    borderGradient = 'from-alert-amber via-[#fff] to-alert-amber';
    iconColor = 'text-alert-amber';
    shadowGlow = 'shadow-[0_0_15px_rgba(255,214,0,0.2)]';
  }

  // The rotating border trick uses a pseudo-element or absolute div behind
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      className={`relative rounded-2xl md:rounded-3xl p-[2px] overflow-hidden group ${shadowGlow}`}
    >
      {/* Animated Border Gradient */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-r ${borderGradient} animate-[border-rotate_4s_linear_infinite] opacity-50`}></div>
      
      {/* Actual Card Content over the border */}
      <div className="relative z-10 w-full h-full glass-medium rounded-[14px] md:rounded-[22px] p-5 flex flex-col justify-between hover:bg-white/5 transition-colors">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="font-orbitron text-4xl md:text-5xl font-bold text-white drop-shadow-md">
              <CountUp end={value || 0} duration={2} separator="," preserveValue={true} />
            </span>
            <span className="font-inter text-sm md:text-base text-white mt-1">{title}</span>
            <span className="font-inter text-xs text-white/50">{subtitle}</span>
          </div>
          
          {Icon && <Icon size={36} className={`${iconColor}`} strokeWidth={1.5} />}
        </div>

        {/* Trend line or mock sparkline */}
        <div className="mt-4 flex flex-col pt-3 border-t border-white/10">
           {sparklineTrend && (
             <div className="flex justify-between items-center text-xs">
                <span className={sparklineTrend.positive ? 'text-sacred-green' : 'text-critical-red'}>
                  {sparklineTrend.positive ? '↑' : '↓'} {sparklineTrend.text}
                </span>
             </div>
           )}
        </div>
      </div>
    </motion.div>
  );
};

export default KPICard;
