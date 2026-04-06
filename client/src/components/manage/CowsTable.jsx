import React from 'react';
import GlassCard from '../ui/GlassCard';
import StatusBadge from '../ui/StatusBadge';

const CowsTable = () => {
  // Dummy data 
  const cows = [
    { _id: '1', cowTag: 'GV-001', name: 'Ganga', breed: 'Gir', gender: 'Female', healthStatus: 'Healthy' },
    { _id: '2', cowTag: 'GV-002', name: 'Yamuna', breed: 'Sahiwal', gender: 'Female', healthStatus: 'Lactating' },
  ];

  return (
    <GlassCard tier={1}>
      <h3 className="text-xl font-exo2 text-white mb-4">All Cows Directory</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-inter text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white/60">
              <th className="pb-3 px-2">Tag</th>
              <th className="pb-3 px-2">Name</th>
              <th className="pb-3 px-2">Breed</th>
              <th className="pb-3 px-2">Gender</th>
              <th className="pb-3 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {cows.map((cow) => (
              <tr key={cow._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-2 text-white/90">🐄 {cow.cowTag}</td>
                <td className="py-3 px-2 text-white/80">{cow.name || '-'}</td>
                <td className="py-3 px-2 text-white/80">{cow.breed}</td>
                <td className="py-3 px-2 text-white/80">{cow.gender}</td>
                <td className="py-3 px-2">
                  <StatusBadge status={cow.healthStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default CowsTable;
