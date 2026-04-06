import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Info, ListPlus, HeartPulse, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomTabBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dash', icon: LayoutDashboard, path: '/' },
    { name: 'About', icon: Info, path: '/about' },
    { name: 'Farm', icon: ListPlus, path: '/manage' },
    { name: 'Health', icon: HeartPulse, path: '/health' },
    { name: 'Donate', icon: HeartHandshake, path: '/donate' },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full glass-heavy z-50 rounded-t-[20px] pb-safe">
      <nav className="flex justify-around items-center h-16 w-full px-2 relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative"
            >
              <div className="relative">
                <item.icon 
                  size={20} 
                  className={`transition-colors duration-300 ${isActive ? 'text-saffron drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]' : 'text-white/55'}`} 
                />
              </div>
              <span className={`text-[10px] font-inter transition-colors duration-300 ${isActive ? 'text-white font-medium' : 'text-white/55'}`}>
                {item.name}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 w-8 h-[3px] bg-saffron rounded-b-md shadow-[0_0_8px_rgba(255,140,0,0.6)]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomTabBar;
