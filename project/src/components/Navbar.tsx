import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Shield } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Shield className="w-8 h-8 text-red-600 mr-2" />
            <span className="text-white font-bold text-xl">
              <span>First Priority</span>
              <span className="hidden sm:inline"> Fire & Security</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" isNav>Home</Link>
            <Link href="/about" isNav>About Us</Link>
            <Link href="/services" isNav>Services</Link>
            <Link href="/why-choose-us" isNav>Why Choose Us</Link>
            <Link href="/testimonials" isNav>Testimonials</Link>
            <Link href="/blog" isNav>Insights</Link>
            <Link href="/contact" isNav>Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="tel:+18001234567" 
              className="flex items-center text-white hover:text-red-500 transition-colors"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              <span className="font-medium">1-800-123-4567</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-4 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} isNav>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} isNav>About Us</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} isNav>Services</Link>
            <Link href="/why-choose-us" onClick={() => setIsOpen(false)} isNav>Why Choose Us</Link>
            <Link href="/testimonials" onClick={() => setIsOpen(false)} isNav>Testimonials</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} isNav>Insights</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} isNav>Contact</Link>
            <div className="pt-2 border-t border-slate-700">
              <a 
                href="tel:+18001234567" 
                className="flex items-center text-white hover:text-red-500 transition-colors"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                <span className="font-medium">1-800-123-4567</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
