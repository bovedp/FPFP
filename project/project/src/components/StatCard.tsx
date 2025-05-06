import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{value}</h3>
      <p className="text-slate-600">{label}</p>
    </div>
  );
};

export default StatCard;