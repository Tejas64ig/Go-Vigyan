import React from 'react';
import { motion } from 'framer-motion';

const TabStrip = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="glass-medium p-1 rounded-xl inline-flex w-full overflow-x-auto no-scrollbar mb-6 border border-white/10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex-1 min-w-max px-6 py-2.5 rounded-lg text-sm md:text-base font-inter font-medium transition-colors duration-300 z-10 ${
              isActive ? 'text-white' : 'text-white/60 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabStrip"
                className="absolute left-0 bottom-0 top-0 w-full bg-white/10 rounded-lg shadow-[inset_0_-2px_0_#FF8C00] drop-shadow-[0_0_8px_rgba(255,140,0,0.3)] z-[-1]"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="flex items-center justify-center gap-2">
              {tab.icon && <span className="text-lg">{tab.icon}</span>}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TabStrip;
