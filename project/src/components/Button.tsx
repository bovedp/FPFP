import React from 'react';
import { Link } from './Link';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantStyles;
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-red-600 text-white hover:bg-red-700 shadow-md px-6 py-3 focus:ring-red-500';
      break;
    case 'secondary':
      variantStyles = 'bg-slate-700 text-white hover:bg-slate-800 shadow-md px-6 py-3 focus:ring-slate-500';
      break;
    case 'outline':
      variantStyles = 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-[10px] focus:ring-red-500';
      break;
    default:
      variantStyles = 'bg-red-600 text-white hover:bg-red-700 shadow-md px-6 py-3 focus:ring-red-500';
  }

  const styles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;