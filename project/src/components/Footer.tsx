import React from 'react';
import { Link } from './Link';
import { Shield, Mail, PhoneCall, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-red-600 mr-2" />
              <span className="font-bold text-xl">First Priority</span>
            </div>
            <p className="text-slate-300 mb-6">
              Providing innovative, tech-enabled fire protection services with a customer-first approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" isNav>Home</Link></li>
              <li><Link href="/about" isNav>About Us</Link></li>
              <li><Link href="/services" isNav>Services</Link></li>
              <li><Link href="/why-choose-us" isNav>Why Choose Us</Link></li>
              <li><Link href="/testimonials" isNav>Testimonials</Link></li>
              <li><Link href="/blog" isNav>Insights</Link></li>
              <li><Link href="/contact" isNav>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#inspection" isNav>Fire System Inspection</Link></li>
              <li><Link href="/services#maintenance" isNav>Maintenance & Repair</Link></li>
              <li><Link href="/services#installation" isNav>System Installation</Link></li>
              <li><Link href="/services#monitoring" isNav>24/7 Monitoring</Link></li>
              <li><Link href="/services#consulting" isNav>Fire Safety Consulting</Link></li>
              <li><Link href="/services#emergency" isNav>Emergency Response</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneCall size={20} className="mr-2 mt-1 text-red-500" />
                <span>1-800-123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 text-red-500" />
                <span>info@firstpriorityfs.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-red-500" />
                <span>123 Safety Ave.<br />Firetown, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} First Priority Fire & Security, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" isNav className="text-sm text-slate-400">Privacy Policy</Link>
            <Link href="/terms-of-service" isNav className="text-sm text-slate-400">Terms of Service</Link>
            <Link href="/sitemap" isNav className="text-sm text-slate-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
