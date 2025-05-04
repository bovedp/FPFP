import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

import './index.css';

// Add global styles
import './styles/animations.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Update the document title based on current path
    const updateTitle = () => {
      let pageTitle = 'First Priority Fire Protection';
      switch (currentPath) {
        case '/':
          pageTitle = 'First Priority Fire Protection | Innovative Fire Safety Solutions';
          break;
        case '/about':
          pageTitle = 'About Us | First Priority Fire Protection';
          break;
        case '/services':
          pageTitle = 'Our Services | First Priority Fire Protection';
          break;
        case '/why-choose-us':
          pageTitle = 'Why Choose Us | First Priority Fire Protection';
          break;
        case '/testimonials':
          pageTitle = 'Client Testimonials | First Priority Fire Protection';
          break;
        case '/blog':
          pageTitle = 'Fire Protection Insights | First Priority Fire Protection';
          break;
        case '/contact':
          pageTitle = 'Contact Us | First Priority Fire Protection';
          break;
        default:
          pageTitle = 'First Priority Fire Protection';
      }
      document.title = pageTitle;
    };

    updateTitle();

    // Listen for route changes
    const handleRouteChange = (e: CustomEvent) => {
      const newPath = e.detail.pathname;
      setCurrentPath(newPath);
      window.scrollTo(0, 0);
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('routeChange', handleRouteChange as EventListener);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('routeChange', handleRouteChange as EventListener);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPath]);

  // Render the appropriate page based on the current path
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/why-choose-us':
        return <WhyChooseUsPage />;
      case '/testimonials':
        return <TestimonialsPage />;
      case '/blog':
        return <BlogPage />;
      case '/contact':
        return <ContactPage />;
      default:
        // Default to home page if path is not recognized
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;