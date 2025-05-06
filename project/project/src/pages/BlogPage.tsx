import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BlogPostCard from '../components/BlogPostCard';
import { Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Fire Protection Insights
            </h1>
            <p className="text-xl text-slate-200">
              Expert articles, industry news, and fire safety best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Search & Filter */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="w-full md:w-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full md:w-80 px-4 py-2 pl-10 rounded-md border border-slate-300 focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            </div>

            {/* Categories */}
            <div className="w-full md:w-auto flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                All Topics
              </button>
              <button className="px-4 py-2 bg-white text-slate-700 rounded-md hover:bg-slate-100 transition-colors">
                Fire Safety
              </button>
              <button className="px-4 py-2 bg-white text-slate-700 rounded-md hover:bg-slate-100 transition-colors">
                Compliance
              </button>
              <button className="px-4 py-2 bg-white text-slate-700 rounded-md hover:bg-slate-100 transition-colors">
                Technology
              </button>
              <button className="px-4 py-2 bg-white text-slate-700 rounded-md hover:bg-slate-100 transition-colors">
                Industry News
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Articles"
            subtitle="Our most popular insights and resources on fire protection."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <BlogPostCard
              title="The Evolution of Fire Protection Technology"
              excerpt="Discover how innovative technology is transforming the fire protection industry and improving safety outcomes for businesses."
              date="May 15, 2025"
              readTime="5 min read"
              imageSrc="https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="evolution-of-fire-protection-technology"
              categories={["Technology", "Industry Trends"]}
            />
            <BlogPostCard
              title="NFPA 25: Understanding the 2025 Updates"
              excerpt="A comprehensive guide to the latest updates to NFPA 25 and how they impact inspection, testing, and maintenance requirements for fire protection systems."
              date="April 28, 2025"
              readTime="7 min read"
              imageSrc="https://images.pexels.com/photos/925684/pexels-photo-925684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="nfpa-25-2025-updates"
              categories={["Compliance", "Standards"]}
            />
            <BlogPostCard
              title="Fire Safety Planning for Commercial Buildings"
              excerpt="Key strategies and best practices for developing effective fire safety plans that protect occupants and minimize property damage."
              date="April 10, 2025"
              readTime="6 min read"
              imageSrc="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="fire-safety-planning-commercial-buildings"
              categories={["Fire Safety", "Best Practices"]}
            />
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Recent Articles"
            subtitle="Stay up-to-date with our latest insights and industry news."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <BlogPostCard
              title="The Role of AI in Modern Fire Detection Systems"
              excerpt="How artificial intelligence is revolutionizing fire detection with faster response times and fewer false alarms."
              date="March 22, 2025"
              readTime="4 min read"
              imageSrc="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="ai-in-fire-detection-systems"
              categories={["Technology", "Innovation"]}
            />
            <BlogPostCard
              title="Winterizing Your Fire Protection Systems"
              excerpt="Essential steps to protect your fire sprinkler systems and other components from freezing temperatures and winter damage."
              date="March 15, 2025"
              readTime="5 min read"
              imageSrc="https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="winterizing-fire-protection-systems"
              categories={["Maintenance", "Seasonal"]}
            />
            <BlogPostCard
              title="Fire Safety Training: Best Practices for Employee Education"
              excerpt="How to develop and implement effective fire safety training programs that prepare employees for emergency situations."
              date="February 28, 2025"
              readTime="6 min read"
              imageSrc="https://images.pexels.com/photos/1553961/pexels-photo-1553961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="fire-safety-training-best-practices"
              categories={["Training", "Safety Culture"]}
            />
            <BlogPostCard
              title="The Business Case for Upgrading Fire Protection Systems"
              excerpt="Understanding the ROI of modernizing your fire protection infrastructure and how it impacts insurance, compliance, and safety."
              date="February 14, 2025"
              readTime="7 min read"
              imageSrc="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="business-case-upgrading-fire-protection"
              categories={["Business", "ROI"]}
            />
            <BlogPostCard
              title="Common Fire Code Violations and How to Avoid Them"
              excerpt="A practical guide to identifying and addressing the most frequent fire code violations found during inspections."
              date="January 25, 2025"
              readTime="5 min read"
              imageSrc="https://images.pexels.com/photos/9553049/pexels-photo-9553049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="common-fire-code-violations"
              categories={["Compliance", "Inspections"]}
            />
            <BlogPostCard
              title="Emerging Trends in Fire Suppression Technology"
              excerpt="Exploring the latest innovations in fire suppression systems and their applications in different environments."
              date="January 10, 2025"
              readTime="6 min read"
              imageSrc="https://images.pexels.com/photos/5686116/pexels-photo-5686116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="emerging-trends-fire-suppression"
              categories={["Technology", "Industry Trends"]}
            />
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition-all duration-300 shadow-md">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Informed on Fire Safety
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Subscribe to our newsletter for the latest industry insights, fire safety tips, and regulatory updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-slate-800"
              />
              <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;