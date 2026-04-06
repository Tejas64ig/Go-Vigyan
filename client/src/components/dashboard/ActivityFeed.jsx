import React from 'react';
import GlassCard from '../ui/GlassCard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { motion } from 'framer-motion';

dayjs.extend(relativeTime);

const ActivityFeed = ({ activities = [], loading }) => {
  const getIconForType = (type) => {
    switch (type) {
      case 'cow_added':
      case 'cow_updated':
        return { icon: '🐄', color: 'bg-saffron/20 border-saffron/30' };
      case 'employee_added':
      case 'employee_updated':
        return { icon: '👤', color: 'bg-sacred-green/20 border-sacred-green/30' };
      case 'production_logged':
        return { icon: '🥛', color: 'bg-blue-400/20 border-blue-400/30' };
      case 'vaccination_added':
        return { icon: '💉', color: 'bg-critical-red/20 border-critical-red/30' };
      case 'medication_added':
        return { icon: '💊', color: 'bg-alert-amber/20 border-alert-amber/30' };
      default:
        return { icon: '📝', color: 'bg-white/10 border-white/20' };
    }
  };

  return (
    <GlassCard tier={2} className="w-full">
      <h3 className="text-lg font-exo2 text-white mb-4">Recent Activity</h3>
      
      {loading ? (
        <div className="text-center text-white/50 py-4">Loading logs...</div>
      ) : activities.length === 0 ? (
        <div className="text-center text-white/50 py-4">No recent activity.</div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3 overflow-x-auto pb-4 custom-scrollbar lg:flex-row space-x-0">
          {activities.map((act, index) => {
            const { icon, color } = getIconForType(act.type);
            
            return (
              <motion.div 
                key={act._id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-full sm:w-[280px] glass-light rounded-xl p-3 flex gap-3 border-l-4"
                style={{ borderLeftColor: color.match(/border-(.*?)\//)?.[1]?.replace('saffron', '#FF8C00').replace('sacred-green', '#00C853') || '#ffffff' }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border ${color} shadow-sm shrink-0`}>
                  {icon}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-white font-inter line-clamp-2 leading-tight">
                    {act.description}
                  </p>
                  <span className="text-xs text-white/50 mt-1">
                    {dayjs().to(dayjs(act.createdAt))}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
};

export default ActivityFeed;
