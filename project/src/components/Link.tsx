import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isNav?: boolean;
  isButton?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isOutline?: boolean;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  onClick,
  isNav = false,
  isButton = false,
  isPrimary = false,
  isSecondary = false,
  isOutline = false,
  ...props 
}) => {
  let baseStyles = '';
  
  if (isNav) {
    baseStyles = 'text-white font-medium hover:text-red-500 transition-colors duration-300';
  } else if (isButton) {
    if (isPrimary) {
      baseStyles = 'inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md';
    } else if (isSecondary) {
      baseStyles = 'inline-block px-6 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md';
    } else if (isOutline) {
      baseStyles = 'inline-block px-6 py-3 border-2 border-red-600 text-red-600 font-medium rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1';
    }
  }

  const styles = `${baseStyles} ${className}`;

  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a
        href={href}
        className={styles}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    if (onClick) onClick();
    // Dispatch a custom event to notify the App component of the route change
    window.dispatchEvent(new CustomEvent('routeChange', { detail: { pathname: href } }));
  };

  return (
    <a
      href={href}
      className={styles}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};