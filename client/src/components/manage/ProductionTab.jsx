import React from 'react';
import GlassCard from '../ui/GlassCard';
import GlassInput from '../ui/GlassInput';
import GlassButton from '../ui/GlassButton';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ProductionTab = () => {
  const chartData = [
    { name: 'GV-001', milk: 12 },
    { name: 'GV-002', milk: 14 },
    { name: 'GV-003', milk: 10 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Form */}
        <GlassCard tier={1}>
          <h3 className="text-xl font-exo2 text-white mb-6 border-b border-white/10 pb-2">Log Daily Production</h3>
          <form className="flex flex-col gap-4">
            <GlassInput label="Cow Tag" placeholder="e.g. GV-001" />
            <GlassInput label="Employee ID" placeholder="e.g. EMP-01" />
            <GlassInput label="Milk Generated (Litres)" type="number" />
            <div className="flex justify-end mt-2">
              <GlassButton variant="primary">Submit Log</GlassButton>
            </div>
          </form>
        </GlassCard>

        {/* Chart */}
        <GlassCard tier={1}>
           <h3 className="text-xl font-exo2 text-white mb-6 border-b border-white/10 pb-2">Milk By Cow (Today)</h3>
           <div className="h-[250px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <XAxis dataKey="name" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
                 <Tooltip 
                   cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                   contentStyle={{ backgroundColor: 'rgba(10, 0, 21, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                 />
                 <Bar dataKey="milk" fill="#00C853" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </GlassCard>

      </div>
    </div>
  );
};

export default ProductionTab;
