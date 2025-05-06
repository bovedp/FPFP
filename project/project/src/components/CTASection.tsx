import React from 'react';
import Button from './Button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}) => {
  return (
    <div className="relative py-16 md:py-20">
      {/* Background */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"></div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={buttonLink} variant="primary">
              {buttonText}
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button href={secondaryButtonLink} variant="outline">
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;