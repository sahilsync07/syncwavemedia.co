import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-wrapper container-fluid">
        <a href="#" className="nav-logo-left">
          Syncwave<span className="highlight">Media</span>
        </a>
        
        <div className="navbar-pill">
          <div className="nav-links">
            <a href="#process">Process</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#features">Features</a>
            <a href="#faqs">Faqs</a>
          </div>

          <div className="nav-cta">
             <button className="nav-button">
                Get in touch
             </button>
          </div>
        </div>
        
        {/* Placeholder for right side to balance flex-between if needed */}
        <div style={{ width: '200px' }} className="nav-placeholder"></div>
      </div>
    </nav>
  );
};

export default Navbar;
