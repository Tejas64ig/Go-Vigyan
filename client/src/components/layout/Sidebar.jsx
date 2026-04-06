import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Info, ListPlus, HeartPulse, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'About Go Vigyan', icon: Info, path: '/about' },
    { name: 'Manage Farm', icon: ListPlus, path: '/manage' },
    { name: 'Health & Medicine', icon: HeartPulse, path: '/health', urgent: true },
    { name: 'Donate & Support', icon: HeartHandshake, path: '/donate' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[260px] h-screen fixed left-0 top-0 glass-heavy z-50 border-r border-white/10">
      {/* Logo Section */}
      <div className="p-6 flex flex-col items-center justify-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-saffron mb-2 drop-shadow-[0_0_8px_rgba(255,140,0,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           {/* Abstract Cow Icon */}
           <path d="M7 6v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6" />
           <path d="M12 2v2" />
           <path d="M17 10v6" />
           <path d="M7 10v6" />
           <path d="M5 16h14a2 2 0 0 0 2-2v-4H3v4a2 2 0 0 0 2 2z" />
           <path d="M15 20v2" />
           <path d="M9 20v2" />
        </svg>
        <h1 className="font-orbitron font-bold text-2xl text-saffron tracking-wider text-shadow-glow">GO VIGYAN</h1>
        <p className="font-exo2 text-xs text-white/55 mt-1 font-medium">गौ विज्ञान — Sacred Farm OS</p>
      </div>

      <div className="w-full h-px bg-white/10 my-2"></div>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col pt-4 gap-2 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-saffron/15 text-white shadow-[inset_3px_0_0_#FF8C00]'
                  : 'text-white/55 hover:text-white/80 hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={18} className={isActive ? 'text-saffron' : ''} />
                <span className="font-medium">{item.name}</span>
                {item.urgent && (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-2 h-2 rounded-full bg-critical-red absolute right-4 drop-shadow-[0_0_5px_rgba(255,61,61,0.8)]" 
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="w-full h-px bg-white/10 mb-0"></div>

      {/* Status section at bottom */}
      <div className="p-4 flex flex-col gap-2 font-inter text-xs text-white/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sacred-green animate-pulse"></div>
          <span>API Connected</span>
        </div>
        <div className="flex items-center justify-between">
           <span>Last Sync: 1 min ago</span>
           <span className="opacity-50">v1.0.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
