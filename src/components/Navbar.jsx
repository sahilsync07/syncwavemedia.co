import React, { useState, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const bookCallRef = useMagnetic();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-wrapper container">
        <a href="#" className="nav-logo-left text-gradient-white">
          Syncwave <span style={{ color: 'var(--accent-indigo)' }}>Media</span>
        </a>
        
        <div className="navbar-pill">
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#introducing-us">Showcase</a>
            <a href="#process">Process</a>
            <a href="#why-us">Why Us</a>
            <a href="#story">Story</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nav-cta">
             <button 
               ref={bookCallRef} 
               className="btn btn-primary nav-button"
               onClick={() => {
                 const el = document.getElementById('footer');
                 if (el) el.scrollIntoView({ behavior: 'smooth' });
               }}
             >
                Book Call
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
