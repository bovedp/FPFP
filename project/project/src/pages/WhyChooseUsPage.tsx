import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Shield, Cpu, Users, Clock, Check, Target, Headset, BarChart } from 'lucide-react';

const WhyChooseUsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Why Choose First Priority
            </h1>
            <p className="text-xl text-slate-200">
              Discover what sets us apart and why leading businesses trust us with their fire protection needs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Our Approach"
              subtitle="We're revolutionizing fire protection with a tech-first, customer-centric approach that delivers unprecedented value."
              centered
            />
            <p className="text-slate-600 text-center mb-8">
              At First Priority Fire Protection, we identified key gaps in the industry and built our company specifically to address them. Our unique approach combines cutting-edge technology with operational excellence and a genuine commitment to putting customers first.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Differentiators</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  What makes First Priority stand out in the crowded fire protection industry? We've built our business around addressing the pain points that customers experience with traditional providers.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-red-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                    <Check size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Commitments</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  When you work with First Priority, you're not just getting a service provider – you're gaining a partner committed to your safety, satisfaction, and success. We back every project with our service guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech-Enabled Solutions */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Tech-enabled fire protection" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Cpu size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Tech-Enabled Solutions</h2>
              </div>
              <p className="text-slate-600 mb-6">
                We leverage cutting-edge technology to revolutionize how fire protection services are delivered, monitored, and maintained.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-3 text-red-600 mt-1">
                    <Check size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Real-Time Monitoring & Alerts</span>
                    <p className="text-slate-600">Our connected systems provide 24/7 monitoring with immediate alerts for any issues, allowing for proactive maintenance and rapid response.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-3 text-red-600 mt-1">
                    <Check size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Digital Inspection & Reporting</span>
                    <p className="text-slate-600">Detailed digital documentation with photos, timestamps, and recommendations provides unprecedented transparency and accountability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-3 text-red-600 mt-1">
                    <Check size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Predictive Maintenance</span>
                    <p className="text-slate-600">Our systems use data analytics to predict potential failures before they occur, allowing us to address issues proactively.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-First Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Users size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Customer-First Approach</h2>
              </div>
              <p className="text-slate-600 mb-6">
                We build our services around your needs, not rigid processes. Our flexible, responsive approach ensures you get exactly what you need when you need it.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-3 text-red-600 mt-1">
                    <Check size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Customized Solutions</span>
                    <p className="text-slate-600">We recognize that every business is unique, so we tailor our services to meet your specific needs and challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-3 text-red-600 mt-1">
                    <Check size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Transparent Communication</span>
                    <p className="text-slate-600">No surprises or hidden fees. We provide clear, honest communication throughout every project.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-3 text-red-600 mt-1">
                    <Check size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Ongoing Support</span>
                    <p className="text-slate-600">Our relationship doesn't end with installation. We provide continuous support and education to ensure your team is equipped to handle any situation.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Customer-first approach" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Sets Us Apart"
            subtitle="Key differentiators that make First Priority the industry leader in fire protection."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Rapid Response Time</h3>
              <p className="text-slate-600 text-center">
                Our agile team ensures quick deployment and 24/7 support, minimizing downtime and maximizing protection.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Comprehensive Expertise</h3>
              <p className="text-slate-600 text-center">
                From system design to installation, maintenance, and monitoring, we provide end-to-end fire protection services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Data-Driven Decisions</h3>
              <p className="text-slate-600 text-center">
                We use analytics to optimize system performance, predict maintenance needs, and continually improve our services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                <Headset size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">Dedicated Support</h3>
              <p className="text-slate-600 text-center">
                Our experienced team is committed to providing personalized service and support for all your fire protection needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience the First Priority Difference"
        description="Contact us today to learn how our innovative approach to fire protection can benefit your business."
        buttonText="Get Started"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </div>
  );
};

export default WhyChooseUsPage;