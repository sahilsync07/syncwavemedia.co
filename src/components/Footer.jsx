import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

const Footer = () => {
  const ctaBtnRef = useMagnetic();

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="section-padding footer">
      <div className="container">
        
        {/* Top Half: High-Impact CTA Callout */}
        <div className="footer-top-cta">
          <div className="footer-marquee-text">
            Ready to Scale<br />
            Your Influence?
          </div>
          <div>
            <button 
              ref={ctaBtnRef}
              className="btn btn-magenta"
              style={{ padding: '18px 36px', fontSize: '15px' }}
              onClick={() => window.open('mailto:hello@syncwavemedia.co')}
            >
              Partner With Us
            </button>
          </div>
        </div>

        {/* Bottom Half: 3-Column Directory */}
        <div className="footer-main-grid">
          
          {/* Column 1: Branding */}
          <div className="footer-branding">
            <h4>Syncwave</h4>
            <p>
              Premium podcast engines and short-form syndicates for venture capital firms, AI builders, and tech executives.
            </p>
          </div>

          {/* Column 2: Direct Solutions */}
          <div className="footer-col-links">
            <h5>Solutions</h5>
            <a href="#introducing-us">Video Showcase</a>
            <a href="#process">Production Steps</a>
            <a href="#why-us">Why Syncwave</a>
            <a href="#story">Customer Growth</a>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col-links">
            <h5>Resources</h5>
            <a href="#faq">FAQ Guide</a>
            <a href="mailto:hello@syncwavemedia.co">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          {/* Column 4: Social stack */}
          <div className="footer-col-links">
            <h5>Connect</h5>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter/X</a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify Podcast</a>
          </div>

        </div>

        {/* Separator / Copy Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} Syncwave Media. All rights reserved.</p>
          <a href="#" onClick={handleBackToTop} className="footer-back-to-top">
            Back to Top 
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </div>

      </div>

      {/* Neon Soundwave Footer Boundary line */}
      <div className="footer-soundwave-boundary" />
    </footer>
  );
};

export default Footer;
