import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, CloudRain, Snowflake, Thermometer } from 'lucide-react';

const TopHeader = () => {
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard';
      case '/manage': return 'Manage Farm';
      case '/health': return 'Health & Medicine';
      case '/about': return 'About Go Vigyan';
      case '/donate': return 'Donate & Support';
      default: return 'Go Vigyan';
    }
  };

  const formattedDate = time.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  
  const formattedTime = time.toLocaleTimeString('en-IN', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const currentMonth = time.getMonth();
  let SeasonIcon = Sun;
  if (currentMonth >= 5 && currentMonth <= 8) SeasonIcon = CloudRain; // Jun - Sep
  else if (currentMonth >= 11 || currentMonth <= 1) SeasonIcon = Snowflake; // Dec - Feb

  return (
    <header className="w-full h-16 glass-medium flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40 rounded-b-xl mb-6 shadow-glass border-x-0 border-t-0">
      <div className="flex items-center">
        <h2 className="font-exo2 text-lg lg:text-xl font-medium tracking-wide">
          {getPageTitle()}
        </h2>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden sm:flex items-center gap-2 text-saffron drop-shadow-[0_0_5px_rgba(255,140,0,0.5)]">
          <span className="font-orbitron text-sm">{formattedDate} — {formattedTime} IST</span>
        </div>
        
        {/* Simple Weather Ambient display */}
        <div className="flex items-center gap-2 text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <SeasonIcon size={16} />
          <span className="font-inter text-xs">28°C</span>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
