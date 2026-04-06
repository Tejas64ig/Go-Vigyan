import React, { useState } from 'react';
import TabStrip from '../components/ui/TabStrip';
import GlassCard from '../components/ui/GlassCard';
import StatusBadge from '../components/ui/StatusBadge';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Pill } from 'lucide-react';
import VaccinationTable from '../components/dashboard/VaccinationTable';

const HealthMedicine = () => {
  const [activeTab, setActiveTab] = useState('vaccinations');

  const tabs = [
    { id: 'vaccinations', label: 'Vaccinations', icon: <ShieldAlert size={16} /> },
    { id: 'medications', label: 'Medications', icon: <Pill size={16} /> },
  ];

  const upcomingVacs = [
     { _id: 'v1', cowId: { cowTag: 'GV-022' }, vaccineName: 'FMD', nextDueDate: new Date(), status: 'Overdue' }
  ];

  return (
    <div className="w-full flex font-inter flex-col">
      <div className="mb-6">
        <TabStrip tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {activeTab === 'vaccinations' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="lg:col-span-2">
                 <VaccinationTable upcomingVaccinations={upcomingVacs} />
               </div>
               <div className="lg:col-span-1">
                 <GlassCard tier={1}>
                    <h3 className="text-xl font-exo2 text-white mb-4">Log Vaccination</h3>
                    <div className="text-white/50 text-sm">Form coming soon...</div>
                 </GlassCard>
               </div>
            </div>
          )}

          {activeTab === 'medications' && (
            <GlassCard tier={1}>
                <h3 className="text-xl font-exo2 text-white mb-4">Medication Tracker</h3>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-left font-inter text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/60">
                        <th className="pb-3 px-2">Cow</th>
                        <th className="pb-3 px-2">Medicine</th>
                        <th className="pb-3 px-2">Dosage</th>
                        <th className="pb-3 px-2">Duration</th>
                        <th className="pb-3 px-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-2 text-white/90">🐄 GV-055</td>
                        <td className="py-3 px-2 text-white/80">Meloxicam</td>
                        <td className="py-3 px-2 text-white/80">15mg / Day</td>
                        <td className="py-3 px-2 text-white/80">3 Days</td>
                        <td className="py-3 px-2"><StatusBadge status="Active" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </GlassCard>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HealthMedicine;
