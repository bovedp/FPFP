import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { PhoneCall, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-200">
              Get in touch with our team to discuss your fire protection needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle
                title="Contact Information"
                subtitle="Here's how you can reach us directly."
              />
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="min-w-[40px] h-10 flex items-center text-red-600 mr-4">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">Phone</h3>
                      <p className="text-slate-600">1-800-123-4567</p>
                      <p className="text-slate-500 text-sm mt-1">Monday-Friday, 8am-6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="min-w-[40px] h-10 flex items-center text-red-600 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">Email</h3>
                      <p className="text-slate-600">info@firstpriorityfp.com</p>
                      <p className="text-slate-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="min-w-[40px] h-10 flex items-center text-red-600 mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">Address</h3>
                      <p className="text-slate-600">123 Safety Ave.</p>
                      <p className="text-slate-600">Firetown, ST 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="min-w-[40px] h-10 flex items-center text-red-600 mr-4">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">Hours</h3>
                      <p className="text-slate-600">Monday-Friday: 8am-6pm</p>
                      <p className="text-slate-600">Saturday: 9am-2pm</p>
                      <p className="text-slate-600">Sunday: Closed</p>
                      <p className="text-slate-500 text-sm mt-1">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Live Chat Option */}
              <div className="bg-red-600 rounded-lg shadow-md p-8 text-white">
                <div className="flex items-center mb-4">
                  <MessageSquare size={24} className="mr-3" />
                  <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
                </div>
                <p className="mb-6">
                  Our team is available for live chat during business hours. Get immediate answers to your questions.
                </p>
                <button className="px-6 py-3 bg-white text-red-600 font-medium rounded-md hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Visit Our Office"
            subtitle="We're conveniently located to serve the greater metropolitan area."
            centered
          />
          
          <div className="bg-white rounded-lg shadow-md p-4 mt-8">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620919724498!5m2!1sen!2sca"
                className="w-full h-full rounded-md"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our services."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How quickly can you respond to a service call?</h3>
              <p className="text-slate-600">
                We prioritize response times and typically respond to service calls within 24-48 hours. For emergency situations, we offer same-day service and 24/7 support.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Do you provide services for residential properties?</h3>
              <p className="text-slate-600">
                While we specialize in commercial and industrial fire protection, we do offer certain services for residential properties, particularly multi-family dwellings and high-end residential installations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How often should fire protection systems be inspected?</h3>
              <p className="text-slate-600">
                Inspection frequencies vary based on system type and local regulations, but most systems require at least annual inspections. Some components, like fire extinguishers, may need monthly visual inspections. We'll create a customized inspection schedule for your property.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Do you offer maintenance contracts?</h3>
              <p className="text-slate-600">
                Yes, we offer flexible maintenance contracts tailored to your specific needs and budget. Our contracts include regular inspections, testing, and maintenance to keep your systems in optimal condition.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">What areas do you service?</h3>
              <p className="text-slate-600">
                We currently service the greater metropolitan area and surrounding communities within a 100-mile radius. For clients with multiple locations across regions, we can provide specialized service arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;