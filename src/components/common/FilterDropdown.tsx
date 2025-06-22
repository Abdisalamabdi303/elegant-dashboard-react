
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
