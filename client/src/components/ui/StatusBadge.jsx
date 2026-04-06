import React from 'react';

const StatusBadge = ({ status }) => {
  let badgeClasses = 'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center ';

  switch(status?.toLowerCase()) {
    case 'overdue':
      badgeClasses += 'bg-critical-red/25 border border-critical-red/60 text-critical-red animate-pulse-badge drop-shadow-[0_0_8px_rgba(255,61,61,0.5)]';
      break;
    case 'due soon':
      badgeClasses += 'bg-alert-amber/20 border border-alert-amber/50 text-alert-amber';
      break;
    case 'on track':
    case 'healthy':
    case 'active':
      badgeClasses += 'bg-sacred-green/15 border border-sacred-green/40 text-sacred-green';
      break;
    case 'completed':
      badgeClasses += 'bg-blue-500/20 border border-blue-500/50 text-blue-400';
      break;
    case 'discontinued':
      badgeClasses += 'bg-white/10 border border-white/20 text-white/60';
      break;
    default:
      badgeClasses += 'bg-saffron/15 border border-saffron/40 text-saffron';
  }

  return (
    <span className={badgeClasses}>
      {status || 'Unknown'}
    </span>
  );
};

export default StatusBadge;
