import React from 'react';

const InputDisplay = ({ inputValue }) => {
  return (
    <div className="mb-8">
      <p className="text-gray-600 text-sm mb-3">Teks yang dianalisis:</p>
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-gray-800 italic text-lg">"{inputValue}"</p>
      </div>
    </div>
  );
};

export default InputDisplay;