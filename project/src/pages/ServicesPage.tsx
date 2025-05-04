import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { Link } from '../components/Link';
import { Shield, PenTool as Tool, Settings, Cpu, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-200">
              Comprehensive fire protection solutions designed with innovative technology and customer needs in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Protecting What Matters Most"
              subtitle="We offer a full range of fire protection services from inspections and maintenance to system design and installation."
              centered
            />
            <p className="text-slate-600 mb-8">
              Our tech-enabled approach means faster service, better reliability, and deeper insights into your fire protection systems. We're committed to providing solutions that not only meet code requirements but truly protect your people and property.
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail: Inspection */}
      <section id="inspection" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Shield size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Fire System Inspection</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Our comprehensive inspection services ensure your fire protection systems meet all code requirements and function properly. We go beyond basic compliance checks to provide a thorough assessment of your entire system.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Digital inspection reports with detailed findings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Real-time monitoring of system performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Compliance with NFPA standards and local codes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Proactive identification of potential issues</span>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Schedule an Inspection
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/8961245/pexels-photo-8961245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fire system inspection" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail: Maintenance */}
      <section id="maintenance" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fire system maintenance" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Tool size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Maintenance & Repair</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Keep your fire protection systems in optimal condition with our proactive maintenance services. Our technicians are trained to identify and address issues before they become problems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Scheduled preventative maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Rapid response for emergency repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Genuine replacement parts and components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Detailed service documentation and reporting</span>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Set Up Maintenance Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail: Installation */}
      <section id="installation" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                  <Settings size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">System Installation</h2>
              </div>
              <p className="text-slate-600 mb-6">
                From design to implementation, our installation services provide custom fire protection solutions tailored to your specific needs. We use the latest technology and equipment to ensure optimal protection.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Custom system design and engineering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Professional installation by certified technicians</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Integration with existing building systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Comprehensive testing and commissioning</span>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Request Installation Quote
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Fire system installation" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Additional Services"
            subtitle="Our comprehensive suite of fire protection services extends beyond the basics."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Monitoring */}
            <div id="monitoring" className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">24/7 Monitoring</h3>
              <p className="text-slate-600 mb-4">
                Round-the-clock monitoring services to ensure immediate response to any fire safety events. Our advanced monitoring center provides real-time alerts and status updates.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
              >
                Learn more
              </Link>
            </div>

            {/* Consulting */}
            <div id="consulting" className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Fire Safety Consulting</h3>
              <p className="text-slate-600 mb-4">
                Expert advice on fire safety protocols, compliance requirements, and best practices for your business. We help you navigate complex regulations and develop comprehensive safety plans.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
              >
                Learn more
              </Link>
            </div>

            {/* Emergency Response */}
            <div id="emergency" className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Emergency Response</h3>
              <p className="text-slate-600 mb-4">
                Rapid emergency response services to address critical safety issues when they arise. Our team is ready 24/7 to handle any fire protection emergency quickly and effectively.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Protect Your Business?"
        description="Contact us today to discuss your fire protection needs and discover how our innovative solutions can help."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/4491031/pexels-photo-4491031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};

export default ServicesPage;