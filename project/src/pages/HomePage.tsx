import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import StatCard from '../components/StatCard';
import { Shield, Clock, PenTool as Tool, Settings, Cpu, Users, AlertTriangle, Headset, Award, CheckCircle, BarChart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Fire Protection Evolved"
        subtitle="Innovative technology paired with customer-centric service to protect what matters most."
        ctaText="Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="https://images.pexels.com/photos/6618336/pexels-photo-6618336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive fire protection solutions designed to keep your business safe and compliant."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="System Inspection"
              description="Thorough inspections to ensure your fire protection systems meet all code requirements and are fully functional."
              icon={<Shield size={24} />}
              link="/services#inspection"
            />
            <ServiceCard
              title="Maintenance & Repair"
              description="Proactive maintenance programs and rapid response repairs to keep your systems operating at peak performance."
              icon={<Tool size={24} />}
              link="/services#maintenance"
            />
            <ServiceCard
              title="System Installation"
              description="Expert design and installation of cutting-edge fire protection systems tailored to your specific needs."
              icon={<Settings size={24} />}
              link="/services#installation"
            />
            <ServiceCard
              title="24/7 Monitoring"
              description="Round-the-clock monitoring services to ensure immediate response to any fire safety events."
              icon={<Cpu size={24} />}
              link="/services#monitoring"
            />
            <ServiceCard
              title="Fire Safety Consulting"
              description="Expert advice on fire safety protocols, compliance requirements, and best practices for your business."
              icon={<Users size={24} />}
              link="/services#consulting"
            />
            <ServiceCard
              title="Emergency Response"
              description="Rapid emergency response services to address critical safety issues when they arise."
              icon={<AlertTriangle size={24} />}
              link="/services#emergency"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              value="15+"
              label="Years Experience"
              icon={<Award size={24} />}
            />
            <StatCard
              value="2,500+"
              label="Projects Completed"
              icon={<CheckCircle size={24} />}
            />
            <StatCard
              value="98%"
              label="Customer Satisfaction"
              icon={<Users size={24} />}
            />
            <StatCard
              value="24/7"
              label="Support & Monitoring"
              icon={<Headset size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Us"
            subtitle="At First Priority Fire Protection, we're revolutionizing the industry with our tech-first, customer-centric approach."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Tech-Enabled Solutions"
              description="We leverage cutting-edge technology to provide more efficient, effective fire protection services with real-time monitoring and insights."
              icon={<Cpu size={28} />}
            />
            <FeatureCard
              title="Customer-First Approach"
              description="Your needs drive everything we do. We build flexible solutions around your requirements, not rigid processes."
              icon={<Users size={28} />}
            />
            <FeatureCard
              title="Rapid Response Time"
              description="Our agile team ensures quick deployment and 24/7 support, minimizing downtime and maximizing protection."
              icon={<Clock size={28} />}
            />
            <FeatureCard
              title="Comprehensive Expertise"
              description="From system design to installation, maintenance, and monitoring, we provide end-to-end fire protection services."
              icon={<Shield size={28} />}
            />
            <FeatureCard
              title="Data-Driven Decisions"
              description="We use analytics to optimize system performance, predict maintenance needs, and continually improve our services."
              icon={<BarChart size={28} />}
            />
            <FeatureCard
              title="Dedicated Support"
              description="Our experienced team is committed to providing personalized service and support for all your fire protection needs."
              icon={<Headset size={28} />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Client Testimonials"
            subtitle="Don't just take our word for it. Here's what our clients have to say about our service and solutions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Upgrade Your Fire Protection?"
        description="Get in touch today for a free consultation and discover how our innovative solutions can protect your business."
        buttonText="Contact Us"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
        backgroundImage="https://images.pexels.com/photos/1282308/pexels-photo-1282308.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
      />
    </div>
  );
};

export default HomePage;