import React from 'react';

const ResultHeader = ({ title }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-extrabold text-green-600 mb-6">
        {title}
      </h1>
    </div>
  );
};

export default ResultHeader;