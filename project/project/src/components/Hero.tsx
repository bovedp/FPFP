import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}) => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 animate-fadeInUp">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-200">
            <Button href={ctaLink} variant="primary">
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button href={secondaryCtaLink} variant="outline">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 40C1200 50 1320 70 1380 80L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;