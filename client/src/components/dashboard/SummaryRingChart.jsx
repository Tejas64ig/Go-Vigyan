import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import GlassCard from '../ui/GlassCard';

const SummaryRingChart = ({ stats, loading }) => {
  const data = [
    { name: 'Overdue', value: stats.overdue || 0, color: '#FF3D3D' },
    { name: 'Due Soon', value: stats.dueSoon || 0, color: '#FFD600' },
    { name: 'On Track', value: stats.onTrack || 0, color: '#00C853' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-light px-3 py-2 rounded shadow-lg border border-white/10">
          <p className="text-white font-inter text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <GlassCard tier={1} className="h-full flex flex-col justify-between">
      <h3 className="text-lg font-exo2 text-white mb-2">Vaccination Status</h3>
      
      {loading ? (
        <div className="flex-1 flex items-center justify-center text-white/50">Loading...</div>
      ) : total === 0 ? (
        <div className="flex-1 flex items-center justify-center text-white/50 text-sm">No data</div>
      ) : (
        <div className="relative flex-1 min-h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={renderCustomTooltip} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col">
            <span className="text-3xl font-orbitron text-white">{total}</span>
            <span className="text-xs font-inter text-white/50">Cows</span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-2">
        {data.map(item => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
            <span className="text-xs text-white/70 font-inter">{item.name}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default SummaryRingChart;
