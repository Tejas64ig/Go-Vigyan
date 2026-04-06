import React from 'react';

const GlassInput = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error,
  className = '',
  required = false,
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="font-inter text-sm text-white/80 ml-1">
          {label} {required && <span className="text-critical-red">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full glass-light px-4 py-3 rounded-lg text-white font-inter placeholder:text-white/30 focus-glow-saffron ${error ? 'border-critical-red shadow-[0_0_10px_rgba(255,61,61,0.3)]' : ''}`}
        {...props}
      />
      {error && <span className="text-critical-red text-xs ml-1 animate-pulse">{error}</span>}
    </div>
  );
};

export default GlassInput;
