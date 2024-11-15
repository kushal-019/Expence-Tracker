// DashBoardValue.js
import React from 'react';

const DashBoardValue = ({ category, amount, className }) => {
  return (
    <div className={`p-6 rounded-md shadow-md bg-gray-200 ${className}`}>
      <h2 className="text-lg font-semibold">Total {category}</h2>
      <p className="text-xl font-bold">Total {amount}</p>
    </div>
  );
};

export default DashBoardValue;
