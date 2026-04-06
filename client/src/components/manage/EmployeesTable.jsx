import React from 'react';
import GlassCard from '../ui/GlassCard';

const EmployeesTable = () => {
  const emps = [
    { _id: '1', name: 'Ramesh Singh', role: 'Milking Specialist', shift: 'Morning' },
  ];

  return (
    <GlassCard tier={1}>
      <h3 className="text-xl font-exo2 text-white mb-4">Farm Staff</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-inter text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white/60">
              <th className="pb-3 px-2">Name</th>
              <th className="pb-3 px-2">Role</th>
              <th className="pb-3 px-2">Shift</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp) => (
              <tr key={emp._id} className="border-b border-white/5 px-2 hover:bg-white/5 transition-colors text-white/80">
                <td className="py-3 px-2">{emp.name}</td>
                <td className="py-3 px-2">{emp.role}</td>
                <td className="py-3 px-2">{emp.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default EmployeesTable;
