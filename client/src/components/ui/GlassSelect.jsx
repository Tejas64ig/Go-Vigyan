import React from 'react';

const GlassSelect = ({ 
  label, 
  id, 
  options = [], 
  value, 
  onChange, 
  error,
  className = '',
  required = false
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="font-inter text-sm text-white/80 ml-1">
          {label} {required && <span className="text-critical-red">*</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full glass-light px-4 py-3 rounded-lg text-white font-inter focus-glow-saffron appearance-none ${error ? 'border-critical-red' : ''}`}
        style={{
          // Needs a slightly opaque dark bg because select dropdown options are rendered by OS and can't be translucent easily
          backgroundColor: 'rgba(20,20,35,0.6)' 
        }}
      >
        <option value="" disabled className="bg-deep-void text-white/50">Select an option</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value || opt} className="bg-deep-void text-white">
            {opt.label || opt}
          </option>
        ))}
      </select>
      {error && <span className="text-critical-red text-xs ml-1">{error}</span>}
      
      {/* Custom Dropdown Arrow */}
      <div className="pointer-events-none absolute right-4 top-[38px]">
        <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default GlassSelect;
