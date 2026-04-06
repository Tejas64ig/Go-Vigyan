import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import GlassInput from '../ui/GlassInput';
import GlassSelect from '../ui/GlassSelect';
import GlassButton from '../ui/GlassButton';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Milking Specialist',
    shift: 'Morning',
  });

  return (
    <GlassCard tier={1}>
      <h3 className="text-xl font-exo2 text-white mb-6 border-b border-white/10 pb-2">Onboard Employee</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput 
          label="Full Name" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          required
        />
        <GlassInput 
          label="Mobile Number" 
          type="tel"
        />
        <GlassSelect 
          label="Role" 
          options={['Chief Caretaker', 'Milking Specialist', 'Veterinary Assistant']}
          value={formData.role}
          onChange={e => setFormData({...formData, role: e.target.value})}
        />
        <GlassSelect 
          label="Shift" 
          options={['Morning', 'Afternoon', 'Night', 'Full Day']}
          value={formData.shift}
          onChange={e => setFormData({...formData, shift: e.target.value})}
        />
        <div className="md:col-span-2 flex justify-end mt-4">
          <GlassButton type="button" variant="primary">
            Onboard
          </GlassButton>
        </div>
      </form>
    </GlassCard>
  );
};

export default AddEmployeeForm;
