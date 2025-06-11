import React from 'react';

const ProbabilityBar = ({ label, percentage, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${color}`}>{label}</span>
        <span className="text-sm font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${
            color === 'text-green-600' ? 'bg-green-500' : 'bg-red-500'
          }`}
          style={{width: `${percentage}%`}}
        ></div>
      </div>
    </div>
  );
};

export default ProbabilityBar;