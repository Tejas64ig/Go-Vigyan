import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import GlassInput from '../ui/GlassInput';
import GlassSelect from '../ui/GlassSelect';
import GlassButton from '../ui/GlassButton';

const AddCowForm = () => {
  const [formData, setFormData] = useState({
    cowTag: '',
    name: '',
    breed: 'Gir',
    dateOfBirth: '',
    gender: 'Female',
    healthStatus: 'Healthy'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting cow:", formData);
    // Submit via Zustand store
  };

  return (
    <GlassCard tier={1}>
      <h3 className="text-xl font-exo2 text-white mb-6 border-b border-white/10 pb-2">Register New Cow</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput 
          label="Unique Cow Tag" 
          placeholder="e.g., GV-048" 
          value={formData.cowTag} 
          onChange={e => setFormData({...formData, cowTag: e.target.value})}
          required
        />
        <GlassInput 
          label="Cow Name (Optional)" 
          placeholder="e.g., Ganga" 
          value={formData.name} 
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
        <GlassSelect 
          label="Breed" 
          options={['Gir', 'Sahiwal', 'Tharparkar', 'Other']}
          value={formData.breed}
          onChange={e => setFormData({...formData, breed: e.target.value})}
        />
        <GlassInput 
          label="Date of Birth" 
          type="date"
          value={formData.dateOfBirth} 
          onChange={e => setFormData({...formData, dateOfBirth: e.target.value})}
        />
        <GlassSelect 
          label="Health Status" 
          options={['Healthy', 'Under Observation', 'Pregnant', 'Lactating', 'Sick']}
          value={formData.healthStatus}
          onChange={e => setFormData({...formData, healthStatus: e.target.value})}
        />
        <div className="md:col-span-2 flex justify-end mt-4 text-deep-void">
          <GlassButton type="submit" variant="primary">
            Register Cow
          </GlassButton>
        </div>
      </form>
    </GlassCard>
  );
};

export default AddCowForm;
