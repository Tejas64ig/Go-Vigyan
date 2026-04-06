import React, { useState } from 'react';
import TabStrip from '../components/ui/TabStrip';
import { motion, AnimatePresence } from 'framer-motion';

// Subcomponents - we'll implement simple versions of these for now
import CowsTable from '../components/manage/CowsTable';
import AddCowForm from '../components/manage/AddCowForm';
import EmployeesTable from '../components/manage/EmployeesTable';
import AddEmployeeForm from '../components/manage/AddEmployeeForm';
import ProductionTab from '../components/manage/ProductionTab';

const ManageFarm = () => {
  const [activeTab, setActiveTab] = useState('cows');

  const tabs = [
    { id: 'cows', label: '🐄 Cows' },
    { id: 'employees', label: '👥 Employees' },
    { id: 'production', label: '🥛 Daily Production' },
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
          {activeTab === 'cows' && (
            <div className="flex flex-col gap-6">
              <AddCowForm />
              <CowsTable />
            </div>
          )}

          {activeTab === 'employees' && (
             <div className="flex flex-col gap-6">
              <AddEmployeeForm />
               <EmployeesTable />
             </div>
          )}

          {activeTab === 'production' && (
             <ProductionTab />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ManageFarm;
