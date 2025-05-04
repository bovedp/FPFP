import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const TestimonialsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-slate-200">
              Hear from businesses who have experienced the First Priority difference in fire protection.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="What Our Clients Say"
              subtitle="Don't just take our word for it. Here's what our clients have to say about our service and solutions."
              centered
            />
            <p className="text-slate-600 mb-8">
              We've helped businesses across various industries transform their fire protection systems with our innovative, tech-enabled approach. These testimonials reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Success Stories"
            subtitle="These clients have experienced significant improvements in their fire protection systems after working with us."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="First Priority transformed our fire protection systems. Their tech-forward approach provided insights we never had before, and their response time is incredible."
              author="Jennifer Reynolds"
              company="Summit Hotels"
              rating={5}
              imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="We've worked with several fire protection companies, but none compare to First Priority. Their customer service is outstanding, and they truly understand our unique needs."
              author="Michael Chen"
              company="Eastside Manufacturing"
              rating={5}
              imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="The peace of mind we've gained from working with First Priority is invaluable. Their monitoring system detected an issue before it became critical, potentially saving us from disaster."
              author="Sarah Johnson"
              company="Westfield Properties"
              rating={5}
              imageSrc="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="More Client Testimonials"
            subtitle="Discover more stories from satisfied clients across various industries."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="The team at First Priority went above and beyond to ensure our fire protection systems were not only compliant but truly effective. Their attention to detail is impressive."
              author="David Thompson"
              company="Riverfront Medical Center"
              rating={5}
              imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="As a property manager, I've dealt with many fire protection companies. First Priority stands out for their professionalism, transparency, and innovative approach."
              author="Maria Rodriguez"
              company="Urban Property Management"
              rating={5}
              imageSrc="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="First Priority's digital reporting and monitoring tools have completely transformed how we manage fire safety across our multiple locations. It's been a game-changer."
              author="James Wilson"
              company="Nationwide Retail Chain"
              rating={5}
              imageSrc="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="The level of expertise at First Priority is exceptional. They identified issues our previous provider had missed for years and implemented solutions that truly work."
              author="Emily Parker"
              company="Lakeside Resorts"
              rating={5}
              imageSrc="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="We needed a fire protection partner who could keep up with our fast-paced industry. First Priority's agile approach and cutting-edge technology have been perfect for us."
              author="Robert Jackson"
              company="TechSphere Innovations"
              rating={5}
              imageSrc="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TestimonialCard
              quote="From day one, First Priority treated us like a partner, not just a client. They took time to understand our unique challenges and designed solutions specifically for us."
              author="Lisa Nguyen"
              company="Coastal Hospitality Group"
              rating={5}
              imageSrc="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* Industry Specific */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Industry-Specific Experiences"
            subtitle="See how we've helped clients in your specific industry."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Healthcare</h3>
              <TestimonialCard
                quote="In healthcare, we can't afford any downtime in our fire protection systems. First Priority's proactive monitoring and maintenance have been critical for our continuous operations."
                author="Dr. Alan Richards"
                company="Metropolitan Medical Center"
                rating={5}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Hospitality</h3>
              <TestimonialCard
                quote="Guest safety is our top priority. First Priority's comprehensive fire protection solutions give us confidence that our properties are protected to the highest standards."
                author="Catherine Wells"
                company="Grand Avenue Hotels"
                rating={5}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Commercial Real Estate</h3>
              <TestimonialCard
                quote="Managing multiple properties requires a fire protection partner who can scale. First Priority's centralized monitoring and consistent service across all our locations has been invaluable."
                author="Thomas Wright"
                company="Metropolitan Properties"
                rating={5}
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Manufacturing</h3>
              <TestimonialCard
                quote="Our manufacturing facility has complex fire protection needs. First Priority's team took the time to understand our processes and designed a system that provides maximum protection without disrupting operations."
                author="Patricia Lee"
                company="Advanced Manufacturing Solutions"
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience the First Priority Difference?"
        description="Join our satisfied clients and discover how our innovative approach to fire protection can benefit your business."
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};

export default TestimonialsPage;