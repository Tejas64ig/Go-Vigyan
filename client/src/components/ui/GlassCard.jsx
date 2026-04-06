import React from 'react';

const GlassCard = ({ children, tier = 2, className = '' }) => {
  let tierClass = '';
  switch (tier) {
    case 1:
      tierClass = 'glass-heavy rounded-2xl md:rounded-3xl p-4 md:p-8';
      break;
    case 3:
      tierClass = 'glass-light rounded-xl p-3 md:p-4';
      break;
    case 2:
    default:
      tierClass = 'glass-medium rounded-xl md:rounded-2xl p-4 md:p-6';
  }

  return (
    <div className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-glass hover:brightness-110 ${tierClass} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
