import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Generate 80 stars for the particle effect
  const stars = Array.from({ length: 80 }).map((_, i) => {
    const top = Math.random() * 100 + '%';
    const left = Math.random() * 100 + '%';
    const animationDelay = Math.random() * 3 + 's';
    const animationDuration = 2 + Math.random() * 3 + 's';
    return { top, left, animationDelay, animationDuration };
  });

  return (
    <>
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #050A15 0%, #020408 50%, #0A0515 100%)'
        }}
      />
      
      {/* Subtle Star Particles for depth (without overwhelming color) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              top: star.top,
              left: star.left,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `star-pulse ${star.animationDuration} ease-in-out infinite`,
              animationDelay: star.animationDelay
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
