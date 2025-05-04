import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-600'} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;