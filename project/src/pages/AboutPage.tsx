import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Shield, Award, Users, Zap, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              About First Priority Fire & Security
            </h1>
            <p className="text-xl text-slate-200">
              Revolutionizing fire protection with technology, expertise, and customer-centered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="How we identified industry gaps and set out to fill them with tech-enabled, customer-first service."
              />
              <div className="space-y-6 text-slate-600">
                <p>
                  First Priority Fire & Security was founded in 2025 with a clear mission: to transform the fire protection industry through innovation, technology, and a relentless focus on customer needs.
                </p>
                <p>
                  After years working in traditional fire protection services, our founders identified critical gaps in the industry – outdated technology, rigid service models, and a general lack of customer-centricity. They envisioned a company that would leverage cutting-edge technology to provide more efficient, effective fire protection while putting customer needs at the forefront of every decision.
                </p>
                <p>
                  What began as a small team with big ideas and are growing into one of the region's most trusted fire protection companies, serving businesses of all sizes across multiple industries. Throughout our growth, we've remained committed to our founding principles of innovation, agility, and customer focus.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="First Priority Fire & Security team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do at First Priority."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <p className="text-slate-600 mb-4">
                To provide innovative, tech-enabled fire protection services that prioritize customer needs, exceed safety standards, and deliver peace of mind through reliability and excellence.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Values</h3>
              </div>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-red-600">
                    <Zap size={20} />
                  </div>
                  <div>
                    <span className="font-semibold">Innovation:</span> We constantly seek better ways to protect our clients through technology and creative solutions.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-red-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <span className="font-semibold">Customer-Centricity:</span> We build our services around our customers' needs, not the other way around.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-red-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <span className="font-semibold">Excellence:</span> We hold ourselves to the highest standards in every aspect of our work.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the experts behind First Priority Fire & Security."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Douglas Bove" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">Douglas Bove</h3>
                <p className="text-red-600 mb-4">CEO & Founder</p>
                <p className="text-slate-600 mb-4">
                  With over 10 years in professional services and a background in technology, Doug founded First Priority to bridge the gap between traditional fire safety and modern innovation.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">Sarah Martinez</h3>
                <p className="text-red-600 mb-4">Chief Operations Officer</p>
                <p className="text-slate-600 mb-4">
                  Sarah oversees day-to-day operations, ensuring our team delivers exceptional service while maintaining our high standards of quality and efficiency.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">Michael Chen</h3>
                <p className="text-red-600 mb-4">Chief Technology Officer</p>
                <p className="text-slate-600 mb-4">
                  Michael leads our technology initiatives, developing innovative solutions that enhance our service delivery and provide deeper insights for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Team"
        description="We're always looking for talented individuals who share our passion for innovation and customer service."
        buttonText="View Careers"
        buttonLink="/careers"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default AboutPage;
