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
          background: 'radial-gradient(ellipse at top left, #0A0015 0%, #001A12 50%, #1A0008 100%)'
        }}
      />
      
      {/* Saffron Orb */}
      <motion.div 
        className="fixed z-0 rounded-full opacity-20 pointer-events-none"
        style={{
          background: '#FF8C00',
          filter: 'blur(200px)',
          width: '500px',
          height: '500px',
        }}
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['-5%', '5%', '-5%'],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Green Orb */}
      <motion.div 
        className="fixed top-1/3 right-0 z-0 rounded-full opacity-15 pointer-events-none"
        style={{
          background: '#00C853',
          filter: 'blur(250px)',
          width: '600px',
          height: '600px',
          transform: 'translateX(30%)'
        }}
        animate={{
          x: ['30%', '20%', '30%'],
          y: ['0%', '10%', '0%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Purple Orb */}
      <motion.div 
        className="fixed bottom-0 left-0 z-0 rounded-full opacity-10 pointer-events-none"
        style={{
          background: '#7C3AED',
          filter: 'blur(180px)',
          width: '450px',
          height: '450px',
          transform: 'translate(-20%, 20%)'
        }}
        animate={{
          x: ['-20%', '-10%', '-20%'],
          y: ['20%', '10%', '20%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Star Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
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
