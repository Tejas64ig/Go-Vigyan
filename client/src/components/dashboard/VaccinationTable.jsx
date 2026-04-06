import React from 'react';
import GlassCard from '../ui/GlassCard';
import StatusBadge from '../ui/StatusBadge';
import { ShieldAlert } from 'lucide-react';
import dayjs from 'dayjs';

const VaccinationTable = ({ upcomingVaccinations = [], loading = false }) => {
  return (
    <GlassCard tier={1} className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-exo2 text-white flex items-center gap-2">
          <ShieldAlert className="text-critical-red" />
          Vaccination Deadline Monitor
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left font-inter text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white/60">
              <th className="pb-3 px-2 font-medium">Cow Tag</th>
              <th className="pb-3 px-2 font-medium">Vaccine</th>
              <th className="pb-3 px-2 font-medium">Due Date</th>
              <th className="pb-3 px-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="py-8 text-center text-white/50">Loading...</td></tr>
            ) : upcomingVaccinations.length === 0 ? (
              <tr><td colSpan="4" className="py-8 text-center text-white/50">All cows are on track!</td></tr>
            ) : (
              upcomingVaccinations.map((vac, i) => (
                <tr 
                  key={vac._id || i}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="py-3 px-2 text-white flex items-center gap-2">
                    🐄 {vac.cowId?.cowTag || 'Unknown'}
                  </td>
                  <td className="py-3 px-2 text-white/80">{vac.vaccineName}</td>
                  <td className="py-3 px-2 text-white/80">{dayjs(vac.nextDueDate).format('DD MMM YYYY')}</td>
                  <td className="py-3 px-2">
                    <StatusBadge status={vac.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default VaccinationTable;
