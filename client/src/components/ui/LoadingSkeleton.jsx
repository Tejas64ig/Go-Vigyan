import React from 'react';

const LoadingSkeleton = ({ className = '' }) => {
  return (
    <div 
      className={`glass-light overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};

export default LoadingSkeleton;
