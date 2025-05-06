import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from './Link';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageSrc: string;
  slug: string;
  categories?: string[];
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  imageSrc,
  slug,
  categories = [],
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className="inline-block text-xs font-medium px-2 py-1 rounded bg-slate-100 text-slate-700"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-red-600 transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center text-sm text-slate-500">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;