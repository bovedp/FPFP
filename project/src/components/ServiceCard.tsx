import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden border-t-4 border-red-600">
      <div className="mb-4 text-red-600 w-12 h-12 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      
      <Link
        href={link}
        className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300"
      >
        Learn more
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;