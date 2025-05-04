import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:transform hover:scale-105">
      <div className="mb-4 text-red-600 w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;