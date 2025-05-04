import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
  rating: number;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  rating,
  imageSrc,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
    />
  ));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {stars}
      </div>
      <p className="italic text-slate-700 mb-6">"{quote}"</p>
      <div className="flex items-center">
        {imageSrc && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={imageSrc} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-slate-800">{author}</p>
          {company && <p className="text-sm text-slate-500">{company}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;